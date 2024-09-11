import React from "react";
import Link from "next/link";

import { getPostData } from "../../../lib/posts";
import CardInfo from "@/components/recentWork/ui/cardInfo";
import "./style.css";

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <article className="h-96">
      <Link href="/blogs" className="underline">
        Retour
      </Link>

    <div className="flex items-center mt-4 mb-2">

      {postData.infos?.map((info, index) => (
        <CardInfo title={info}key={index} />
      ))}
    </div>

      <div className="mb-12">
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
