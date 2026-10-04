import {
  Brain,
  Code,
  Code2,
  Database,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

import type { LucideIcon, LucideProps } from "lucide-react";
import type { IconName } from "@/data/types";

const icons = {
  code: Code,
  database: Database,
  globe: Globe,
  brain: Brain,
  wrench: Wrench,
  users: Users,
  graduation: GraduationCap,
  code2: Code2,
  trophy: Trophy,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  github: Github,
  linkedin: Linkedin,
} satisfies Record<IconName, LucideIcon>;

type PortfolioIconProps = Omit<LucideProps, "name"> & {
  name: IconName;
};

export function PortfolioIcon({
  name,
  ...props
}: PortfolioIconProps) {
  const Icon = icons[name];

  return <Icon {...props} />;
}
