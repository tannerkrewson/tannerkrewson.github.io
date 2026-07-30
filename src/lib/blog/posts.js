/**
 * @import { BlogMetadata, BlogPostSummary } from './types';
 */

/**
 * @typedef {Object} PostModule
 * @property {BlogMetadata} metadata
 * @property {unknown} default
 */

const postModules = import.meta.glob('/src/lib/posts/*.{md,svx}', {
  eager: true
});

/**
 * @param {string} path
 * @returns {string}
 */
function slugFromPath(path) {
  const filename = path.split('/').pop();

  if (!filename) {
    throw new Error(`Could not determine a slug for blog post: ${path}`);
  }

  return filename.replace(/\.(md|svx)$/, '');
}

/**
 * @param {BlogMetadata | undefined} metadata
 * @param {string} path
 * @returns {metadata is BlogMetadata}
 */
function validMetadata(metadata, path) {
  if (!metadata) {
    console.warn(`Blog post has no frontmatter: ${path}`);
    return false;
  }

  if (!metadata.title || !metadata.description || !metadata.date) {
    console.warn(`Blog post is missing required frontmatter: ${path}`);
    return false;
  }

  return metadata.published === true;
}

/**
 * @returns {BlogPostSummary[]}
 */
export function getPosts() {
  return Object.entries(postModules)
    .filter(([path, module]) => validMetadata(module.metadata, path))
    .map(([path, module]) => ({
      slug: slugFromPath(path),
      ...module.metadata
    }))
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

/**
 * @returns {string[]}
 */
export function getPostSlugs() {
  return getPosts().map((post) => post.slug);
}
