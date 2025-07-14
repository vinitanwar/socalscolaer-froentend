// app/news/[slug]/page.jsx or page.tsx

import React from "react";
import NewsCompo from "./NewsCompo";
import { baseurl, imageurl } from "@/app/components/reduxstore/utils";

// ✅ Generate metadata for SEO and sharing (Facebook, Twitter, etc.)
export async function generateMetadata({ params: { slug } }) {
  try {
    const response = await fetch(`${baseurl}/news/${slug}`, {
      cache: "no-store",
    });

        const posts = await response.json();
    const post = posts.news;

    const imageu = post.image
      ? `${imageurl}/${post.image}`
      : `${imageurl}/default.jpg`;

    const title = post.title || "News | Social Scholars";
    const description = post.description || "Read the latest news on Social Scholars";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://social-scholars.com/news/${slug}`,
        type: "article",
        images: [
          {
            url: imageu,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageu],
        site: "@YourTwitterHandle", // optional
        creator: post?.editor
          ? `@${post.editor.replace(/\s+/g, "")}`
          : undefined,
      },
      alternates: {
        canonical: `https://social-scholars.com/news/${slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "News | Social Scholars",
      description: "Stay informed with the latest news and updates.",
    };
  }
}

// ✅ Clean page component (NO <head> tag here)
const page = async ({ params: { slug } }) => {
  return <NewsCompo slug={slug} />;
};

export default page;
