import React from "react";
import NewsCompo from "./NewsCompo";
import { baseurl, imageurl } from "@/app/components/reduxstore/utils";
import Script from "next/script";
import Head from "next/head"; // Use Head if you are in App Router page component
import AdBanner from "@/app/components/AdBanner";

const page = async ({ params: { slug } }) => {
  const truncateDescription = (desc, maxLength = 160) => {
    if (!desc) return "";
    return desc.length > maxLength
      ? desc.substring(0, maxLength - 3) + "..."
      : desc;
  };

  let title = "News Not Found | Social Scholars";
  let description = "Explore the latest news and articles on Social Scholars.";
  let keywords = "news, articles, social scholars";
  let imageu = "https://via.placeholder.com/1200x630?text=Social+Scholars";
  let post = null;

  try {
    const response = await fetch(`${baseurl}/news/${slug}`, {
      next: { revalidate: 3600 },
    });

    if (response.ok) {
      const posts = await response.json();
      post = posts.news;

      if (post) {
        title = post.title || title;
        description = truncateDescription(post.description);
        keywords =
          post.tags?.join(", ") ||
          post.news_type ||
          keywords;
        imageu =
          post.image && post.image !== ""
            ? `${imageurl}/${post.image}`
            : imageu;
      }
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://social-scholars.com/news/${slug}`} />
        <meta property="og:site_name" content="Social Scholars" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={post ? "article" : "website"} />
        <meta property="og:image" content={imageu} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageu} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        {post?.editor && (
          <meta
            name="twitter:creator"
            content={`@${post.editor.replace(/\s+/g, "")}`}
          />
        )}

        <link
          rel="canonical"
          href={`https://social-scholars.com/news/${slug}`}
        />
      </Head>

      {/* Google AdSense */}
     

            <AdBanner slot="6977336533" />
      

      <NewsCompo slug={slug} />
            <AdBanner slot="6977336533" />
      
    </>
  );
};

export default page;
