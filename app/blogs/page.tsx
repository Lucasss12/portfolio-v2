import React from "react";
import Link from "next/link";
import { getSortedPostsData, PostData } from "../../lib/posts";

export default async function Blog() {
  const posts = await getSortedPostsData();

  return (
    <div className="h-96">
      <h3 className="text-xl font-medium mb-4 text-black">
        Mes derniers blogs
      </h3>
      <div>
        {posts.map((post: PostData, index) => (
          <Link
            href={`/blogs/${post.id}`}
            key={post.id}
            className={`flex items-center py-4 ${
              index !== posts.length - 1 ? "border-b " : ""
            }`}
          >
            <p className="text-secondaryText pr-8">{post.date}</p>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
