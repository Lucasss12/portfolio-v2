import React from 'react';
import { getPostData, getSortedPostsData } from '../../../lib/posts';

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  
  return (
    <article>
      <h1>{postData.title}</h1>
      <div>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  );
}