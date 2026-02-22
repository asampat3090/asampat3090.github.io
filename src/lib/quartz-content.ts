import { load } from "cheerio";

const QUARTZ_RAW_BASE_URL =
  "https://raw.githubusercontent.com/asampat3090/asampat3090.github.io/quartz";

const QUARTZ_DOMAINS = new Set([
  "anandsampat.com",
  "www.anandsampat.com",
  "asampat3090.github.io",
  "quartz.jzhao.xyz",
]);

function looksLikePostSlug(value: string): boolean {
  return /^\d{8}[a-z0-9-]+$/i.test(value);
}

function extractSlugFromHref(href: string): string | null {
  if (!href || href.startsWith("#")) {
    return null;
  }

  let pathname = href;
  try {
    const url = new URL(href);
    if (!QUARTZ_DOMAINS.has(url.hostname.toLowerCase())) {
      return null;
    }
    pathname = url.pathname;
  } catch {
    pathname = href;
  }

  let normalized = pathname.split("?")[0].split("#")[0];
  normalized = normalized.replace(/^\.\/+/, "").replace(/^\/+/, "");
  normalized = normalized.replace(/\/index\.html?$/i, "");
  normalized = normalized.replace(/\.html$/i, "");
  normalized = normalized.replace(/\/+$/, "");

  if (looksLikePostSlug(normalized)) {
    return normalized;
  }

  return null;
}

function rewriteAssetUrl(url: string): string {
  if (
    !url ||
    url.startsWith("#") ||
    url.startsWith("data:") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  ) {
    return url;
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  if (url.startsWith("./")) {
    return `${QUARTZ_RAW_BASE_URL}/${url.slice(2)}`;
  }

  if (url.startsWith("/")) {
    return `${QUARTZ_RAW_BASE_URL}${url}`;
  }

  return `${QUARTZ_RAW_BASE_URL}/${url}`;
}

function rewriteHref(href: string): string {
  try {
    const url = new URL(href);
    if (QUARTZ_DOMAINS.has(url.hostname.toLowerCase())) {
      if (url.pathname === "/" || url.pathname === "/index.html") {
        return "/writing";
      }
    }
  } catch {
    // Relative URLs are handled below.
  }

  const hashIndex = href.indexOf("#");
  const hashSuffix = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const postSlug = extractSlugFromHref(href);
  if (postSlug) {
    return `/writing/${postSlug}${hashSuffix}`;
  }

  return rewriteAssetUrl(href);
}

export async function getQuartzPostHtml(slug: string): Promise<string> {
  const response = await fetch(`${QUARTZ_RAW_BASE_URL}/${slug}.html`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Unable to load Quartz post ${slug}`);
  }

  const source = await response.text();
  const $ = load(source);
  const article = $("article.popover-hint").first();

  if (!article.length) {
    throw new Error(`Unable to parse Quartz post ${slug}`);
  }

  article.find("script, style, noscript").remove();
  article.find("a.internal").remove();
  article.find("svg.external-icon").remove();

  const firstParagraph = article.children("p").first();
  if (firstParagraph.text().trim().toLowerCase().startsWith("original link:")) {
    firstParagraph.remove();
  }

  article.find("a").each((_, element) => {
    const currentHref = $(element).attr("href");
    if (!currentHref) {
      return;
    }

    const nextHref = rewriteHref(currentHref);
    $(element).attr("href", nextHref);

    if (/^https?:\/\//i.test(nextHref)) {
      $(element).attr("target", "_blank");
      $(element).attr("rel", "noopener noreferrer");
    } else {
      $(element).removeAttr("target");
      $(element).removeAttr("rel");
    }
  });

  article.find("img").each((_, element) => {
    const src = $(element).attr("src");
    if (src) {
      $(element).attr("src", rewriteAssetUrl(src));
    }
  });

  article.find("source").each((_, element) => {
    const srcset = $(element).attr("srcset");
    if (srcset) {
      $(element).attr("srcset", rewriteAssetUrl(srcset));
    }
  });

  return article.html() ?? "";
}
