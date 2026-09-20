import type { ReactNode } from "react";
import { externalUrl, siteConfig } from "../config";

interface StartLinkProps {
  destination: "signupUrl" | "serviceUrl";
  className?: string;
  children: ReactNode;
}
export function StartLink({
  destination,
  className,
  children,
}: StartLinkProps) {
  return (
    <a
      className={className}
      href={externalUrl(siteConfig[destination])}
      role="link"
      aria-disabled={!externalUrl(siteConfig[destination])}
      tabIndex={0}
    >
      {children}
    </a>
  );
}
