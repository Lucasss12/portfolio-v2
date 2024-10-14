import React from "react";
import Link from "next/link";
import { getSortedPostsData, PostData } from "../../lib/posts";

export const metadata = {
  title: "Lucas • Blogs",
  description: "Lucas • Blogs",
};

export default async function Blog() {
  const posts = await getSortedPostsData();

  return (
    <div className="min-h-96 sm:mx-auto mx-5 max-w-screen-sm">
      <h3 className="text-xl font-medium mb-4 text-black">
        Mes derniers blogs
      </h3>
      <div>
        {posts.map((post: PostData, index) => (
          <Link href={`/blogs/${post.id}`} key={post.id} className={`hover:text-blue-500 flex items-start sm:items-center py-4 ${ index !== posts.length - 1 ? "border-b " : ""}`}>
            <p className="text-secondaryText pr-8 whitespace-nowrap">{post.date}</p>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
