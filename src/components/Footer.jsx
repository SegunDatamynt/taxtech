 import Logo from '../assets/logo.png'
import Twitter from '../assets/twitter-ic.png'
import Group from '../assets/Group.png'
import Vector from '../assets/Vector.png'


function Footer() {
  return (
    <div>
        <div className='grid grid-cols-2 justify-between px-[7em]'>
            <div className=' col-span-1'>
                <img src={Logo} width={163} height={64.19} alt='' />
                <div className='flex gap-6 mt-6 ml-2'>
                <img src={Twitter} width={20} height={20} alt='' />
                <img src={Group}  width={20} height={20} alt='' />
                <img src={Vector}  width={24} height={24} alt='' />

                </div>
                <div className='my-4'>
                <span className=''>2015-2022 Taxaide Technologies Limited. All rights reserved</span>
                </div>
            </div>
            <div className=' col-span-1  '>
                <div className='grid grid-cols-2 '>
                    <div className=' '>
                            <p className='font-semibold'>About Us</p>
                            <div className='grid grid-cols mt-4'>
                            <span className='mt-4'>About</span>
                            <span className='mt-4'>Legal & privacy</span>
                            </div>
                    </div>
                    <div className=''>
                            <p className='font-semibold'>Products</p>
                            <div className='grid grid-cols mt-4'>
                            <span className='mt-4'>TBook®</span>
                            <span className='mt-4'>TaxiTWithhold®</span>
                            <span className='mt-4'>TaxiTPayroll®</span>
                            </div>
                    </div>
                </div>
                </div>


    </div>
    </div>
  )
}

export default Footer