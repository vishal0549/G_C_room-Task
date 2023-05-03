import React from 'react'

const Html = () => {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Html Language</h2>
        <div style={{display: "flex"}}>
            <div>
                <img src="data:image/png;base64,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" alt="no-img" width="200" height="200" />
            </div>
            <div>
                <dl>
                    <dt>
                        <b>Language</b>
                    </dt>
                    <dt>HTML</dt>
                    <dt>Description</dt>
                    <dt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui hic laborum, rerum tempore earum labore eveniet maiores dolor aperiam ab sint asperiores doloremque, nam amet, odit perspiciatis soluta culpa.</dt>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Html