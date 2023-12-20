import { Image } from '@fluentui/react'
import * as React from 'react'
import { redtechLogo } from '../../constants'

const Footer = () => {
  return (
    <div className='tw-bg-gray-100 tw-p-4 tw-mt-5 tw-rounded-t tw-flex tw-justify-between'>
        <div>
            <Image
                src={redtechLogo}
                width={150}
                alt='Logo'
                />
        </div>
        <div className='tw-text-red-900'>
            <h2>Copyright &copy; 2023</h2>
            <p>All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer