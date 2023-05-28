import React from 'react'
import TextPlate from '#components/common/TextPlate'
import blockData from '#mocks/text_block.json'

const Certification = () => {
  return (
    <div className='container mx-auto section-gap'>
      <div className="grid grid-cols-2 gap-12">
        {blockData.block.map((item:any, i:number) => <TextPlate thumb={item.thumb} title={item.title} content={item.content} isBtn isCenter/>)}
      </div>
    </div>
  )
}

export default Certification