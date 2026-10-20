import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface Frontmatter {
  title: string;
  event: string;
  lastUpdated: string | Date;
}

function getWaiver(): { frontmatter: Frontmatter; content: string } {
  const filePath = path.join(process.cwd(), 'content/legal/clinic-week-waiver-nov-2026.md');
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
  return { frontmatter: data as Frontmatter, content };
}

function formatDate(date: string | Date): string {
  return date instanceof Date ? date.toISOString().split('T')[0] : String(date);
}

export const metadata: Metadata = {
  title: 'Clinic Week Liability Waiver | The Pickleball Passport',
  robots: { index: false, follow: false },
};

export default function ClinicWeekWaiverPage() {
  const { frontmatter, content } = getWaiver();

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#1D2D44] to-[#495F87] text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-3">
            {frontmatter.title}
          </h1>
          <p className="text-blue-100 text-lg">{frontmatter.event}</p>
          <p className="text-blue-200 text-sm mt-1">Last updated: {formatDate(frontmatter.lastUpdated)}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none prose-headings:text-[#1D2D44] prose-a:text-[#1D2D44] hover:prose-a:text-[#B08D55]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) =>
                href?.startsWith('/') ? <Link href={href}>{children}</Link> : <a href={href}>{children}</a>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
