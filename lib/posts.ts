import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export type Post = {
  metadata: PostMetadata
  content: string
}

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const posts = files
    .map(file => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return posts.slice(0, limit)
  }

  return posts
}

export async function getPostsBySlugs(slugs: string[]): Promise<PostMetadata[]> {
  const allPosts = await getPosts()
  return allPosts.filter(post => slugs.includes(post.slug))
}

export async function getFeaturedPosts(): Promise<PostMetadata[]> {
  // Always include 'introduction-to-mdx' (Beyond the MVP) and get the 2 most recent others
  const allPosts = await getPosts()
  const featuredSlugs = new Set(['introduction-to-mdx'])
  
  // Add the most recent posts that aren't the featured one
  for (const post of allPosts) {
    if (featuredSlugs.size >= 3) break
    if (!featuredSlugs.has(post.slug)) {
      featuredSlugs.add(post.slug)
    }
  }
  
  return getPostsBySlugs(Array.from(featuredSlugs))
}

export function getPostMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}
