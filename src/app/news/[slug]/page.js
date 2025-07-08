import React from 'react'
import NewsCompo from './NewsCompo'

const page = ({params:{slug}}) => {
    console.log(slug)
  return (
    <>
<NewsCompo slug={slug} />
    
    </>
  )
}

export default page