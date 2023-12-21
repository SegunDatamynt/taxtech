import { useState } from 'react'
import PhoneMkUp from "../assets/googlepixel.png"
import  AppleStore from '../assets/appstore.png'
import  Goodlestore from '../assets/googleplay.png'
import  Paybills from '../assets/paybills.png'
import MoneyTransfer from '../assets/transfermoney.png'
import BgImage from '../assets/Boldcircleembellishment.png'


function Tools() {
    const [selectedOption, setSelectedOption] = useState('PayBills');

    const handleOptionClick = (option)=>{
        setSelectedOption(option);
    }


  return (
    <div className='px-10'>
    <div className='grid grid-cols-2 px-10 py-4'>
        <div className=' col-span-1 px-10 pt-12 '>
            <div className={`p-4 text-[#4F4F4F] border-l-8 border-grey-500 ${selectedOption === 'PayBills' ? 'border-l-4 border-green-500 pl-2 font-bold' : ''}`} onClick={() => handleOptionClick('PayBills')} >
                <h2 className='mb-4 font-semibold ' >Pay Bills</h2>
                <span>Paying your bills has never been so easy. </span>
            </div>
            <div className={`p-4 text-[#4F4F4F] border-l-8 border-grey-500 ${selectedOption === 'AirtimeData' ? 'border-l-4 border-green-500 pl-2   font-bold' : ''}`} onClick={() => handleOptionClick('AirtimeData')}>
                <h2 className='mb-4 font-semibold'>Buy Airtime & Data</h2>
                <span>Never get caught with low airtime and data again! </span>
            </div>
            <div className={`p-4 text-[#4F4F4F] border-l-8 border-grey-500 ${selectedOption === 'MoneyTransfer' ? 'border-l-4 border-green-500 pl-2   font-bold' : ''}`} onClick={() => handleOptionClick('MoneyTransfer')}>
                <h2 className='mb-4 font-semibold' >Money Transfer</h2>
                <span>Transferring money is now hassle-free. </span>
            </div>
            <div  className={`p-4 text-[#4F4F4F] border-l-8 border-grey-500 ${selectedOption === 'PayTollFee' ? 'border-l-4 border-green-500 pl-2  font-bold' : ''}`} onClick={() => handleOptionClick('PayTollFee')}>
                <h2 className='mb-4 font-semibold'>Pay Toll Fee</h2>
                <span>Never worry about getting a toll ticket again.</span>
            </div>
        </div>
        <div className='col-span-1 bg-[#F1F1F1] rounded-lg overflow-hidden'>
  {selectedOption === 'PayBills' && (
    <img
      src={Paybills}
      alt='Paybills'
      className='w-full h-full transition-opacity duration-500'
      style={{ opacity: selectedOption === 'PayBills' ? 1 : 0 }}
    />
  )}
  {selectedOption === 'MoneyTransfer' && (
    <img  
      src={MoneyTransfer}
      alt='Transfer Money'
      className='mt-8 w-full h-full transition-opacity duration-500'
      style={{ opacity: selectedOption === 'MoneyTransfer' ? 1 : 0 }}
    />
  )}
    <img className='absolute inset-0 object-cover transform rotate-300 -mt-[10em]  ' src={ BgImage} alt='' width={787.03} height={772.03} style={{ top: '235%', left: '50%', transformOrigin: '50% 50%', zIndex: -4 }} />

</div>

    </div>



    <div className='grid grid-cols-2 px-10 py-4'>
        <div className=' col-span-1 px-10 pt-12'>
        <div className='  bg-[#F1F1F1] px-[5em] pt-[5em] flex rounded-xl'>
        <img src={PhoneMkUp} height={796.68} width={367.7} alt='phone mockup'/>

    </div>

        </div>
        <div className=' col-span-1 px-10 pt-12'>
            <div className='mt-[12em]'>
            <p className='text-[36px] font-poppins font-bold text-[#4F4F4F]'>Transact on the go</p>
            <span className='text-[#4F4F4F]'>Stay on top of your business with our easy- <br/>to-use app</span> <br/>
            <button className='bg-green-600 mt-6 p-3 px-10 rounded-xl'>Get Started</button>
            <div className='flex mt-6 gap-4'>
            <img src={AppleStore} height={41.99} width={145.13} alt='store'/>
            <img src={Goodlestore} height={41.99} width={145.13} alt='store'/>
            </div>
            </div>


        </div>
    </div>


    </div>
  )
}

export default Tools