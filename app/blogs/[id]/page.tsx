import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

import { getPostData } from "../../../lib/posts";
import CardInfo from "@/components/recentWork/ui/cardInfo";
import "./style.css";

type Props = {
  params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.id);
  
  return {
    title: `Lucas Méné • ${postData.title}`,
    description: postData.description,
  };
}

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.id);

  return (
    <article className="min-h-96 sm:mx-auto mx-5 max-w-screen-sm">
      <Link href="/blogs" className="underline">
        Retour
      </Link>

      <div className="flex items-center mt-4 mb-2">
        {postData.infos?.map((info, index) => (
          <CardInfo title={info} key={index} />
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