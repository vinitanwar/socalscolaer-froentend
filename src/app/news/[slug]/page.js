import React from 'react'
import NewsCompo from './NewsCompo'
import { baseurl, imageurl } from '@/app/components/reduxstore/utils'


// export async function generateMetadata({ params }) {
//   const slug = await params.slug;

//   try {
//     const response = await fetch(`${baseurl}/news/${slug}`);
//     const post = await response.json();

//     const imageu = post.image ? `${imageurl}/${post.image}` : `${imageurl}/default.jpg`;

//     return {
//       title: post.title,
//       description: post.description || '',

//       openGraph: {
//         title: post.title,
//         description: post.description || '',
//         images: [
//           {
//             url: imageu,
//             width: 1200,
//             height: 630,
//             alt: post.title,
//           },
//         ],
//       },

//       twitter: {
//         card: 'summary_large_image',
//         title: post.title,
//         description: post.description || '',
//         images: [imageu],
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching metadata:', error);

//     return {
//       title: 'News',
//       description: 'Read the latest news.',
//     };
//   }
// }


const page = ({params:{slug}}) => {
    console.log(slug)
  return (
    <>
<NewsCompo slug={slug} />
    
    </>
  )
}

export default page