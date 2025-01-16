import React from 'react'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            
            {/* image */}
            <div className='md:w-1/2'>
               {/*<img src='/images/home/banner.png' alt='banner' className='w-full' />*/}
                <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64 '>
                    <img src='/images/home/kota.png' alt='' className='rounded-2xl'></img>
                    <div className='space-y-1'>
                        <h5 className='font-medium mb-1 '>Food Cafe</h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-yellow-500"
                                defaultChecked  readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                        </div>
                        <p className='text-red'><a href='/menu'>Menu</a></p>
                    </div>
                </div>
                <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64 '>
                    <img src='/images/home/cafe98x98.png' alt='' className='rounded-2xl'></img>
                    <div className='space-y-1'>
                        <h5 className='font-medium mb-1 '>Internet Cafe</h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-yellow-500"
                                defaultChecked readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                        </div>
                        <p className='text-red'><a href='/internet-cafe'>Check Services</a></p>
                    </div>
                </div>
            </div>
            </div>


            {/* text */}
            <div className='md:w-1/2 space-y-7 px-4'>

                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'> Dive into Delights of Delectable  <span className='text-green'>Foods</span> and <span className='text-green'>Internet Cafe </span> Services</h2>
                <p className='text-xl text-[#4A4A4A]'>Where Each Kota Weaves a Story of Culinary Master and Passionate Craftsmanship</p>
                <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full' ><Link to="/menu">Order Now</Link></button>

            </div>

            
        </div>
    </div>
  )
}
export default Banner