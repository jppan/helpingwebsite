import {
  AlertTriangle,
  FolderOpen,
  Globe,
  KeyRound,
  Laptop,
  Mail,
  Printer,
  ShieldAlert,
  Siren,
  Smartphone,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  keyRound: KeyRound,
  smartphone: Smartphone,
  laptop: Laptop,
  wifi: Wifi,
  folderOpen: FolderOpen,
  mail: Mail,
  globe: Globe,
  printer: Printer,
  shieldAlert: ShieldAlert,
  siren: Siren,
  alertTriangle: AlertTriangle,
};

export function IconGlyph({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? AlertTriangle;
  return <Icon className={className} aria-hidden="true" />;
}
