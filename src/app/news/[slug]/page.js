import React from 'react'
import NewsCompo from './NewsCompo'
import { baseurl, imageurl } from '@/app/components/reduxstore/utils'

export async function generateMetadata({ params }) {
  const slug = params.slug;

  try {
    const response = await fetch(`${baseurl}/news/${slug}`);
    const post = await response.json();

    const imageUrl = `${imageurl}/${post.image}`;

    return {
      title: post.title,
      description: post.description || '', // fallback if description is missing

      openGraph: {
        title: post.title,
        description: post.description || '',
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
            alt: post.title,
          },
        ],
      },

      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description || '',
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);

    return {
      title: 'News',
      description: 'Read the latest news.',
    };
  }
}



const page = ({params:{slug}}) => {
    console.log(slug)
  return (
    <>
<NewsCompo slug={slug} />
    
    </>
  )
}

export default page