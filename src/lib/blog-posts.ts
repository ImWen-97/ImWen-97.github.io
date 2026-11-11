import { getCollection } from 'astro:content'
import { sortPosts } from '@/lib/post-utils'

// Drafts are previewable with `npm run dev`, but excluded from public builds.
export async function getPublishedPosts() {
  return getCollection('blog', ({ data }) => !data.draft || import.meta.env.DEV)
}

export async function getOrderedPublishedPosts() {
  return sortPosts(await getPublishedPosts())
}
