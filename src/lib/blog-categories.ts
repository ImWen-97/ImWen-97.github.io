import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import type { CollectionEntry } from 'astro:content'

type BlogPost = CollectionEntry<'blog'>
const postsDirectory = resolve(process.cwd(), 'src/content/BlogPosts')

// Folder name is the single source of truth; no category list is maintained.
export function categoryForPost(post: BlogPost): string {
  return post.id.split('/').length > 1 ? post.id.split('/')[0] : '未分类'
}

// Read folders at build time so even a new, currently empty folder gets a page.
export function listBlogCategories(posts: BlogPost[] = []): string[] {
  const folders = readdirSync(postsDirectory, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
    .map(entry => entry.name)

  if (posts.some(post => categoryForPost(post) === '未分类')) folders.push('未分类')

  return [...new Set(folders)].sort((a, b) => a.localeCompare(b, 'zh-CN'))
}
