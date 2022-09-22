import React, { useEffect, useState } from 'react'
import './BlogSec.css'
import Loader from './Loader'

function BlogSec({number}) {

    // const apiKey = 'cd92e9f887724483a702ade7186e4f76'

    const [blog, setBlog] = useState({})

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-21&sortBy=publishedAt&apiKey=cd92e9f887724483a702ade7186e4f76')
            .then((response) => response.json())
            .then((res) => setBlog(res))
            .then((resc) => console.log(resc))
    }, [])

  return (
    Object.keys(blog).length !== 0 ?
    <div className='container blog-sec'>
        <div >
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