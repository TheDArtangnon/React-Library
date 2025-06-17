import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Highlight from './ui/Highlight'

export default function Highlights() {
  return (
<section id="highlights">
    <div className="container">
       <div className="row">
        <h2 className="section__title">
            Why choose <span className="purple">Library</span>
        </h2>
        <div className="highlight__wrapper">
          <Highlight icon={<FontAwesomeIcon icon="bolt" />} 
                     title="Easy and Quick"
                     para="Get access to the book you buy online instantly." 
                   />
          <Highlight icon={<FontAwesomeIcon icon="book-open" />} 
                     title="10,000+ Books"
                     para=" Library has books in all of your favorite catagories." 
                   />
          <Highlight icon={<FontAwesomeIcon icon="tags" />} 
                     title="Affordable"
                     para=" Get your hands on books as low as $10. " 
                   />
        </div>
        </div> 
    </div>
</section>
  )
}
