import React from 'react'
const ArrowStyles = () => {
  return (
    <style>{`
    .slick-prev,.slick-next{
        width:40px;
        height:40px;
        z-index:9999;
        opacity:0.5;
        transition-duration: 0.3s;
        transition-timing-function: ease-in;
        transition-delay: 0s;
        transition-property: all;
    }
    .dark .slick-prev , .dark .slick-next{
      
    }
    .slick-prev{
        left:1px;
    }
    .slick-next{
        right:1px;
    }
    .slick-prev:hover,.slick-next:hover{
        opacity:1;
        transition-duration: 0.3s;
        transition-timing-function: ease-in;
        transition-delay: 0s;
        transition-property: all;
    }
    `}</style>
  )
}

export default ArrowStyles
