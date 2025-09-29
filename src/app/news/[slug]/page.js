import React from "react";
import NewsCompo from "./NewsCompo";
import { baseurl, imageurl } from "@/app/components/reduxstore/utils";
import Head from "next/head";
import AdBanner from "@/app/components/AdBanner";

// Generate metadata for the page
export async function generateMetadata({ params: { slug } }) {
  const truncateDescription = (desc, maxLength = 160) => {
    if (!desc) return "";
    return desc.length > maxLength
      ? desc.substring(0, maxLength - 3) + "..."
      : desc;
  };

  let title = "News Not Found | Social Scholars";
  let description = "Explore the latest news and articles on Social Scholars.";
  let keywords = "news, articles, social scholars";
  let imageu = "https://social-scholars.com/images/default-og.jpg";
  let post = null;

  try {
    const response = await fetch(`${baseurl}/news/${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch news data");
    }

    const posts = await response.json();
    post = posts.news;

    // Set dynamic values if post is available
    if (post) {
      title = post.title || "News Article";
      description = truncateDescription(post.description);
      keywords =
        post.tags?.join(", ") ||
        post.news_type ||
        "news, articles, social scholars";
      
      // Ensure absolute URL for images
      imageu =
        post.image && post.image !== ""
          ? `${imageurl}/${post.image}`
          : "https://social-scholars.com/images/default-og.jpg";
    }
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  // Ensure the image URL is absolute and properly formatted
  const absoluteImageUrl = imageu.startsWith('http') 
    ? imageu 
    : `https://social-scholars.com${imageu}`;

  // Add cache busting parameter
  const imageUrlWithCache = `${absoluteImageUrl}?v=${Date.now()}`;

  const metadata = {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://social-scholars.com/news/${slug}`,
      siteName: "Social Scholars",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: imageUrlWithCache,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrlWithCache],
      creator: "@SocialScholars",
    },
    alternates: {
      canonical: `https://social-scholars.com/news/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };

  return metadata;
}

const Page = async ({ params: { slug } }) => {
  let post = null;

  try {
    const response = await fetch(`${baseurl}/news/${slug}`, {
      cache: "no-store",
    });

    if (response.ok) {
      const posts = await response.json();
      post = posts.news;
    }
  } catch (error) {
    console.error("Error fetching news data:", error);
  }

  return (
    <>
      {/* Additional manual meta tags for WhatsApp */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* WhatsApp specific meta tags */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={post?.title || "Social Scholars"} />
        
        {/* Additional security for image URLs */}
        <meta property="og:image:secure_url" content={
          post?.image && post.image !== "" 
            ? `${imageurl}/${post.image}`
            : "https://social-scholars.com/images/default-og.jpg"
        } />
        
        {/* Article specific meta tags */}
        {post?.created_at && (
          <meta property="article:published_time" content={post.created_at} />
        )}
        {post?.updated_at && (
          <meta property="article:modified_time" content={post.updated_at} />
        )}
        {post?.author && (
          <meta property="article:author" content={post.author} />
        )}
        {post?.category && (
          <meta property="article:section" content={post.category} />
        )}
        {post?.tags?.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
      </Head>

      <AdBanner slot="6977336533" />
      <NewsCompo slug={slug} />
      <AdBanner slot="6977336533" />
    </>
  );
};

export default Page;