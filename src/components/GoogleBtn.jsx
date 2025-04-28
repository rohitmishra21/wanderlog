import React from 'react'
import { APP_STORE_IMG, GOOGLE_STORE_IMG } from '../utils/config'

const GoogleBtn = () => {
  return (
  <div className='flex gap-2 items-center'>
                    <img className='w-36' src={APP_STORE_IMG} alt="" />
                    <img className='w-36' src={GOOGLE_STORE_IMG} alt="" />
                </div>
  )
}

export default GoogleBtn
