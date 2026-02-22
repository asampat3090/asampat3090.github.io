import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="site-container flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] font-normal text-gray-600">
          © {year} Anand Sampat. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="mailto:hello@pianomixtape.com"
            className="text-[14px] font-normal text-gray-600 transition-colors hover:text-gray-900"
          >
            Email
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-normal text-gray-600 transition-colors hover:text-gray-900"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
