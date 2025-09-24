import React from "react";
import NewsCompo from "./NewsCompo";
import { baseurl, imageurl } from "@/app/components/reduxstore/utils";


const page = async ({ params: { slug } }) => {
  const truncateDescription = (desc, maxLength = 160) => {
    if (!desc) return "";
    return desc.length > maxLength
      ? desc.substring(0, maxLength - 3) + "..."
      : desc;
  };

  const response = await fetch(`${baseurl}/news/${slug}`, {
    cache: "no-store",
  });

  const posts = await response.json();
  const post = posts.news;


  let imageu = `${imageurl}/${post.image}`; // Default fallback image
  let title = "News Not Found | Social Scholars";
  let description = "Explore the latest news and articles on Social Scholars.";
  let keywords = "news, articles, social scholars";

  try {
    const response = await fetch(`${baseurl}/news/${slug}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
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
      imageu =
        post.image && post.image !== ""
          ? `${imageurl}/${post.image}`
          : "https://via.placeholder.com/1200x630?text=Social+Scholars";
    }
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://social-scholars.com/news/${slug}`}
        />
        <meta property="og:site_name" content="Social Scholars" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={post ? "article" : "website"} />
        <meta property="og:image" content={imageu} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />

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
      </head>


          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2655358665967568"
     crossorigin="anonymous"></script>
<!-- banner -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2655358665967568"
     data-ad-slot="6977336533"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

      <NewsCompo slug={slug} />
    </>
  );
};

export default page;
