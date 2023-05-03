import React from 'react'

const ReadBlogCard = ({ image }) => {
  return (
    <div className='read-blog-card-container m-4'>
        <div className="card">
            <div className="card-header h-25 text-center">
                <img src={ image } alt="no-img" className='card-img' width="250" />
            </div>
            <div className="card-body">
                <div className="card-title">
                    <h4>sjd</h4>
                    <p>sdfghjhgfds vvfsdfghndsxc casdfghgfcsxa xcv</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReadBlogCard