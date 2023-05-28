import React from 'react'
import Slider from "react-slick";
import items from "#mocks/product.json"

const ProductSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='section-gap'>
      <div className="gap-10">
      <Slider {...settings}>
        {items.product.map((item:any, i:number) => {
          return (
            <div className='flex'>
              <img src={item.thumb} alt="" />
            </div>
          )
        })}
      </Slider>
      </div>
    </div>
  )
}

export default ProductSlider