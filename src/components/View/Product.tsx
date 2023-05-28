import React from 'react'
import productData from "#mocks/product.json"
import TextPlate from '../common/TextPlate'
import styles from "#styles/Home.module.css"
import Button from '../Button/BtnPrimary'

const Product = () => {
  return (
    <div className="bg-overlay-bg h-full bg-no-repeat bg-center bg-cover">
      <div className={styles.product_title}>
        <h1 className="uppercase text-[80px] font-bold text-white tracking-wide">{productData.title}</h1>
        <span className='text-4xl font-semibold text-white uppercase tracking-widest'>{productData.subtitle}</span>
      </div>
      <div className='container mx-auto section-gap-s'>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-20">
          {productData.category.map((item:any, i:number) => 
            <TextPlate key={i} icon={item.icon} title={item.title} content={item.content} isCenter isDark title_style='text-3xl mt-8'/>
          )}
        </div>
      </div>
     <div className="flex justify-end">
      <Button btn_name='View More' />
     </div>
    </div>
  )
}

export default Product