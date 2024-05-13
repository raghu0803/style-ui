
import React from 'react'

const WomenCollection = (props) => {
    const {title,image11,image13,image14,image15,image16}= props.LadiesFashion
  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      <div className="bannerBox">
            
      <img src="pic/LadiesBanner.gif" alt="Banner" />
      <div className="womenImages">
        <img src={image11} alt={title} />
        <img src={image13} alt={title} />
        <img src={image14} alt={title} />
        <img src={image15} alt={title} />
        <img src={image16} alt={title} />
      </div>
    </div>
    </div>
  )
}

export default WomenCollection
