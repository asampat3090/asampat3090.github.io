import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="site-main bg-white">
      <SiteHeader />
      <div className="site-container flex flex-1 flex-col gap-12 pb-8 sm:gap-24">
        {children}
      </div>
      <SiteFooter />
    </main>
  );
}
