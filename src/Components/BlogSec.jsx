// import React, { useEffect, useState } from 'react'
import './BlogSec.css'
import Loader from './Loader'
import { useQuery } from '@tanstack/react-query'
import { fetchFunc } from './fetcher'
// import axios from 'axios'

function BlogSec() {

    const {data, isLoading, isError} = useQuery({
        queryKey: ['fetch-news'],
        queryFn: fetchFunc,
        retry:3,
    })

    if (isLoading) return <Loader />
    
    if(isError)return'somthing went wrong'

  return (
    <div className='container blog-sec'>
        {
            data.slice(0, 20).map(item => {
                return (
                    <div className='blog-rrs-card' key={item.articlesName}>
                        <div className='rrs-img'><img src='#' alt="" className='rrs-img-itself' /></div>
                        <div className='rrs-text'>
                            <h1 className='rrs-blog-title'>{item.articlesName}</h1>
                            <div className='rrs-blog-description'>{item.articlesShortDescription}</div>
                            <a href={item.urlSupplier} className='joinbtn readmore-blog'>Read more</a>
                        </div>
                    </div>
                )
            })
        }

            {/* {blog.articles.slice(0, number).map((items) => 
            <div className='blog-rrs-card'>
                <div className='rrs-img'><img src={items.urlToImage} alt="" className='rrs-img-itself' /></div>
                <div className='rrs-text'>
                    <h1 className='rrs-blog-title'>{items.title}</h1>
                    <div className='rrs-blog-description'>{items.description}</div>
                    <a href={items.url} className='joinbtn readmore-blog'>Read more</a>
                </div>
            </div>
            )} */}
    </div>
  )
}

export default BlogSec