import React, { useEffect, useState } from 'react'
import './BlogSec.css'
import Loader from './Loader'

function BlogSec({number}) {

    // const apiKey = 'cd92e9f887724483a702ade7186e4f76'

    const [blog, setBlog] = useState({})

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=apple&from=2022-09-21&to=2022-09-21&sortBy=popularity&apiKey=cd92e9f887724483a702ade7186e4f76')
            .then((response) => response.json())
            .then((res) => setBlog(res))
            .catch((error) => console.log(error))
    }, [])

  return (
    Object.keys(blog).length !== 0 ?
    <div className='container blog-sec'>
        <div onLoad={() => <Loader />}>
            {blog.articles.slice(0, number).map((items) => 
            <div className='blog-rrs-card'>
                <div className='rrs-img'><img src={items.urlToImage} alt="" className='rrs-img-itself' /></div>
                <div className='rrs-text'>
                    <h1 className='rrs-blog-title'>{items.title}</h1>
                    <div className='rrs-blog-description'>{items.description}</div>
                    <a href={items.url} className='joinbtn readmore-blog'>Read more</a>
                </div>
            </div>
            )}
        </div>
    </div>
    :
    <Loader />
  )
}

export default BlogSec