import type { MetadataRoute } from 'next'
import { getSortedPostsData, PostData } from '../lib/posts'

async function fetchDynamicUrls() {
   const posts: PostData[] = await getSortedPostsData();
 
   return posts.map((post) => ({
     url: `https://lucas-mene.vercel.app/blogs/${post.id}`,
     lastModified: new Date(post.date), 
     changeFrequency: 'weekly',
     priority: 0.5,
   }));
 }
 
 
 export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const dynamicUrlsBlogs = await fetchDynamicUrls();

  return [
      {
        url: 'https://lucas-mene.vercel.app/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://lucas-mene.vercel.app/projects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://lucas-mene.vercel.app/blogs',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
        ...dynamicUrlsBlogs.map((url) => ({
          ...url,
          changeFrequency: 'weekly' as const,
        })),
    ]
}