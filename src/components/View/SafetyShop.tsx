import React from 'react'
import safetyData from "#mocks/safety.json"
import TextPlate from '#components/common/TextPlate'
import ButtonMulti from '../Button/ButtonMulti'

const SafetyShop = () => {
  return (
    <div className='container mx-auto section-gap'>
        <div className="flex justify-between gap-14 w-4/5 mx-auto">
            <div className='w-2/5'>
            <img src={safetyData.thumb} alt={safetyData.title} />
            </div>
            <div className='w-3/5 flex flex-col items-start justify-between'>
                <TextPlate title={safetyData.title} content={safetyData.content1} content2={safetyData.content2}/>
                <ButtonMulti btn_name="Learn More" btn_name_outline='Get In Touch'/>
            </div>
        </div>
    </div>
  )
}

export default SafetyShop