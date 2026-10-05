"use client";

import { useState } from "react";

import { Loader2, Send } from "lucide-react";

import { PortfolioIcon } from "@/components/PortfolioIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  accessibilityContent,
  contactContent,
  contactInfo,
  site,
  socialLinks,
} from "@/data";

const socialHoverStyles = {
  github: "hover:text-gray-900 dark:hover:text-white",
  linkedin: "hover:text-blue-600",
  email: "",
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot (Web3Forms supports botcheck)
    const fd = new FormData(e.currentTarget);
    const botcheck = fd.get("botcheck");
    if (botcheck) return;

    if (!accessKey) {
      toast({
        title: contactContent.messages.notConfiguredTitle,
        description: contactContent.messages.notConfiguredDescription,
        variant: "destructive",
      });
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: contactContent.messages.requiredFields,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        from_name: site.contactForm.senderName,
        replyto: formData.email,
        // optional reserved field (we already block via honeypot)
        botcheck: false,
      };
      const res = await fetch(site.contactForm.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      // Web3Forms response can be: { success: true, body: { message: "..."} }
      const ok = res.ok && data?.success === true;
      const apiMessage = data?.body?.message ?? data?.message;

      if (!ok) {
        throw new Error(apiMessage || contactContent.messages.failureFallback);
      }

      toast({
        title: contactContent.messages.successTitle,
        description: contactContent.messages.successDescription,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err: unknown) {
      toast({
        title: contactContent.messages.failureTitle,
        description:
          err instanceof Error && err.message
            ? err.message
            : contactContent.messages.failureDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 pb-32 bg-gray-900 text-gray-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            {contactContent.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {contactContent.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                {contactContent.connectTitle}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-2">
                {contactContent.connectDescription}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.id} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-900/20 rounded-lg flex items-center justify-center">
                    <PortfolioIcon
                      name={contact.icon}
                      className="h-6 w-6 text-indigo-400"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">
                      {contact.title}
                    </h4>

                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-400 hover:text-indigo-400 transition-colors"
                      >
                        {contact.details}
                      </a>
                    ) : (
                      <span className="text-gray-400">{contact.details}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="font-medium text-gray-100 mb-4">
                {contactContent.followTitle}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-indigo-900/20 rounded-lg flex items-center justify-center text-indigo-400 transition-all duration-300 hover:scale-110 ${socialHoverStyles[social.id]}`}
                    aria-label={accessibilityContent.socialProfileLabel.replace(
                      "{name}",
                      social.name,
                    )}
                  >
                    <PortfolioIcon name={social.icon} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in border-gray-700 bg-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-100 mt-2">
                {contactContent.formTitle}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms recommended honeypot field */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {contactContent.form.nameLabel}
                    </Label>
                    <div className="mb-2"></div>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={contactContent.form.namePlaceholder}
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {contactContent.form.emailLabel}
                    </Label>
                    <div className="mb-2"></div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={contactContent.form.emailPlaceholder}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {contactContent.form.messageLabel}
                  </Label>
                  <div className="mb-2"></div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={contactContent.form.messagePlaceholder}
                    rows={6}
                    required
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer mt-2 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {contactContent.form.submittingLabel}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {contactContent.form.submitLabel}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
