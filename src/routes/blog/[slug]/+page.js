import { error } from '@sveltejs/kit';
import { getPostSlugs } from '$lib/blog/posts';

const modules = import.meta.glob('/src/lib/posts/*.{md,svx}');

export function entries() {
  return getPostSlugs().map((slug) => ({ slug }));
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const slug = params.slug;
  const mdPath = `/src/lib/posts/${slug}.md`;
  const svxPath = `/src/lib/posts/${slug}.svx`;

  const importer = modules[mdPath] || modules[svxPath];

  if (!importer) {
    error(404, 'Post not found');
  }

  /** @type {{ metadata: import('$lib/blog/types').BlogMetadata, default: unknown }} */
  const post = await importer();

  if (post.metadata?.published !== true) {
    error(404, 'Post not found');
  }

  return {
    content: post.default,
    metadata: post.metadata,
    slug
  };
}
