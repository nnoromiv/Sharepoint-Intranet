import * as React from 'react'
import { announcements } from '../../constants'
import { CarouselComponent } from '../Hero/Hero'

const Feeder = () => {
  return (
    <div className='tw-w-full tw-gap-1 tw-grid tw-grid-cols-2 tw-max-sm:tw-grid-cols-1'>
        <div className='tw-w-full tw-border tw-text-center tw-rounded-lg'>
            <h1 className='tw-text-black tw-pt-3 tw-text-3xl tw-font-extrabold'> Announcement</h1>
            <div className='tw-p-3 tw-text-left tw-overflow-hidden tw-w-full' >
                <CarouselComponent element={announcements} />
            </div>
        </div>
        <div className='tw-w-full'>
            <div className='tw-border tw-mb-3 tw-p-3 tw-border-red-900 tw-text-left tw-rounded-lg'>
                <h1 className='tw-pt-3 tw-text-red-900 tw-text-center tw-text-3xl tw-font-extrabold'> Projects </h1>
                <ul>
                    <li className='tw-m-2'>
                        <p className='tw-text-lg tw-text-red-800 tw-font-bold'>
                            Redpay: <span className='tw-text-lg tw-text-red-900 tw-font-normal'>Our customers and partners, including some of the biggest companies in Africa, rely on our solutions to serve and secure their organizations.</span> 
                        </p>
                    </li>
                     <li className='tw-m-2'>
                        <p className='tw-text-lg tw-text-red-800 tw-font-bold'>
                            IT Consult: <span className='tw-text-lg tw-text-red-900 tw-font-normal'>Our customers and partners, including some of the biggest companies in Africa, rely on our solutions to serve and secure their organizations.</span> 
                        </p>
                    </li>
                     <li className='tw-m-2'>
                        <p className='tw-text-lg tw-text-red-800 tw-font-bold'>
                            Services: <span className='tw-text-lg tw-text-red-900 tw-font-normal'>Our customers and partners, including some of the biggest companies in Africa, rely on our solutions to serve and secure their organizations.</span> 
                        </p>
                    </li>
                </ul>
            </div>
            <div className='tw-border tw-mb-3 tw-p-3 tw-border-red-900 tw-text-left tw-rounded-lg'>
                <h1 className='tw-pt-3 tw-text-red-900 tw-text-center tw-text-3xl tw-font-extrabold'> Products </h1>
                <ul>
                    <li className='tw-m-2'>
                        <p className='tw-text-lg tw-text-red-800 tw-font-bold'>
                            Redpay: <span className='tw-text-lg tw-text-red-900 tw-font-normal'>Our customers and partners, including some of the biggest companies in Africa.</span> 
                        </p>
                    </li>
                    <li className='tw-m-2'>
                        <p className='tw-text-lg tw-text-red-800 tw-font-bold'>
                            Redpay: <span className='tw-text-lg tw-text-red-900 tw-font-normal'>Our customers and partners, including some of the biggest companies in Africa.</span> 
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Feeder