import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { quartzPosts } from "@/data/quartz-posts";
import { getQuartzPostHtml } from "@/lib/quartz-content";

type WritingPostPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function getPostMetadata(slug: string) {
  return quartzPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: WritingPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMetadata(slug);
  if (!post) {
    return {
      title: "Writing",
    };
  }

  return {
    title: post.title,
    description: `Writing post from ${dateFormatter.format(new Date(post.date))}.`,
  };
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const { slug } = await params;
  const post = getPostMetadata(slug);

  if (!post) {
    notFound();
  }

  let articleHtml = "";
  try {
    articleHtml = await getQuartzPostHtml(slug);
  } catch {
    notFound();
  }

  return (
    <SiteShell>
      <section className="max-w-3xl space-y-4">
        <Link
          href="/writing"
          className="inline-flex items-center text-sm font-medium tracking-[0.08em] text-gray-600 transition-colors hover:text-black"
        >
          ← Back to Writing
        </Link>
        <p className="text-xs uppercase tracking-[0.11em] text-gray-500">
          {dateFormatter.format(new Date(post.date))}
        </p>
        <h1>{post.title}</h1>
      </section>

      <article
        className="writing-prose rounded-2xl border border-black/10 bg-white px-5 py-7 shadow-[0_12px_42px_rgba(15,23,42,0.08)] sm:px-10 sm:py-10"
        dangerouslySetInnerHTML={{ __html: articleHtml }}
      />
    </SiteShell>
  );
}
