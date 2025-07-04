import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'

export default function Book({ book }) {
  const [img, setImg] = useState ()

  const mountedRef = useRef(true)

useEffect(() => {
  mountedRef.current = true
  const image = new Image()
  image.src = book.url
  image.onload = () => {
    setTimeout(() => {
      if (mountedRef.current) {
         setImg(image)
      }
    }, 300)
  }
  return () => {
    mountedRef.current = false
  }
}, [book.url])
  
  return (
  <div className="book">
     {!img ? (
      <>
    <div className="book__img--skeleton"></div>
    <div className="skeleton book__title--skeleton"></div>
    <div className="skeleton book__rating--skeleton"></div>
    <div className="skeleton book__price--skeleton"></div>
      </>
       ) : (
      <> 
        <Link to={`/books/${book.id}`}>
              <figure className="book__img--wrapper">
                <img className="book__img" src={img.src} alt=""
                />
              </figure>
            </Link>
            <div className="book__title">
              <Link to={`/books/${book.id}`} className="book__title--link"> 
              {book.title}
              </Link>
            </div>
            <Rating rating={book.rating} />
           <Price salePrice={book.salePrice} originalPrice={book.originalPrice} /> 
           </> 
    
     
    )}
     </div>
  )
}
