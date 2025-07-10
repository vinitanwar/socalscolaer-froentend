import React from 'react'
import NewsCompo from './NewsCompo'
import { baseurl } from '@/app/components/reduxstore/utils'
export async function generateMetadata({ params }) {
  const slug = (await params).slug
 
  
  const post = await fetch(`${baseurl}/news/${slug}`).then((res) =>
    res.json()
  )
 
  const imageUrl= `${baseurl}/${post.image}`
 
 return {
    title: post.title,
    // description: post.des[0].description,
    openGraph: {
      title: post.title,
      // description: post.des[0].description,
      images: [
        {
          url: imageUrl, // Make sure your API returns an image URL
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      // description: post.des[0].description,
      images: [imageUrl], // Twitter also uses Open Graph if this isn't set
    },
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