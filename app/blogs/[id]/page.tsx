import React from "react";
import Link from "next/link";
import { getPostData } from "../../../lib/posts";

import "./style.css";

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <article className="h-96">
      <Link href="/blogs" className="underline">
        Retour
      </Link>

      <div className="mt-4 mb-12">
        <h1 className="text-xl font-medium text-black">{postData.title}</h1>

        <p className="text-secondaryText text-sm">{postData.date}</p>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: postData.content }}
        className="markdown"
      />
    </article>
  );
}
