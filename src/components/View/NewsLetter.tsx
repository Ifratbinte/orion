import React from 'react'
import Button from '../Button/BtnPrimary'

const NewsLetter = () => {
  return (
    <div className="bg-danger">
        <div className='container mx-auto'>
            <div className="flex items-center justify-between py-8">
                <h2 className="text-4xl font-bold text-white">Newsletter</h2>
                <p className='text-white text-lg'>Stay connected!  Subscribe to our newsletter to stay informed of all the latest products and services.</p>
                <Button btn_name='Sign Up' isWhite/>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter