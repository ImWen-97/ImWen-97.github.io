import test from 'node:test'
import assert from 'node:assert/strict'
import { readingMinutes, sortPosts } from '../src/lib/post-utils.ts'

test('pinned posts appear before newer normal posts', () => {
  const posts = [
    { id: 'a', data: { date: '2026-11-11', pinned: false } },
    { id: 'b', data: { date: '2026-10-01', pinned: true } },
    { id: 'c', data: { date: '2026-11-10', pinned: false } },
  ]
  assert.deepEqual(sortPosts(posts).map(post => post.id), ['b', 'a', 'c'])
  assert.equal(posts[0].id, 'a', 'sort should not mutate source')
})

test('reading time recognizes CJK characters and English words', () => {
  assert.equal(readingMinutes('短文'), 1)
  assert.equal(readingMinutes('科研'.repeat(240)), 2)
  assert.equal(readingMinutes('hello '.repeat(450)), 3)
})

test('fenced code and image targets do not inflate reading time', () => {
  const source = '```python\n' + 'print(1)\n'.repeat(1000) + '```\n![image](https://example.com/long-url.png)'
  assert.equal(readingMinutes(source), 1)
})
