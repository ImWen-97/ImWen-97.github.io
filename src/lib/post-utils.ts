/** A pinned post appears first; otherwise posts are ordered from newest to oldest. */
export function sortPosts<T extends { id: string; data: { date: string; pinned: boolean } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) =>
    Number(b.data.pinned) - Number(a.data.pinned)
    || new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    || a.id.localeCompare(b.id)
  )
}

/** Approximate reading time for Chinese/English Markdown, minimum one minute. */
export function readingMinutes(markdown: string): number {
  const text = markdown
    .replace(/\x60{3}[\s\S]*?\x60{3}/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
  const hanCharacters = (text.match(/\p{Script=Han}/gu) ?? []).length
  const latinWords = (text.replace(/\p{Script=Han}/gu, ' ').match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g) ?? []).length
  return Math.max(1, Math.ceil(hanCharacters / 350 + latinWords / 220))
}
