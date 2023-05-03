import React, { useState, useEffect } from 'react';
import ReadBlogCard from '../Components/ReadBlogCard';

const ReadBlog = () => {

    const [ state, setState ] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setState(data))
    }, [])

    // console.log(state[1].image)

  return (
    <div className='read-blog-container container-fluid'>
        <div className="row">
            <div className="card-container">
                {
                    state.map(e => {
                        return (
                            <ReadBlogCard key={e.id} image={ e.image } />    
                        )                
                    }
                )}
            </div>
        </div>
    </div>
  )
}

export default ReadBlog