import { useState } from 'react';
import PhoneMkUp from '../assets/googlepixel.png';
import AppleStore from '../assets/appstore.png';
import Goodlestore from '../assets/googleplay.png';
import Paybills from '../assets/paybills.png';
import MoneyTransfer from '../assets/transfermoney.png';
import BgImage from '../assets/Boldcircleembellishment.png';
import AirtimeData from '../assets/phonemckup.png';
import PayTollFee from '../assets/lastimg.png';

function Tools() {
  const [selectedOption, setSelectedOption] = useState('PayBills');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='px-10'>
      <div className='grid grid-cols-2 px-10 py-4'>
        <div className='col-span-1 px-10 pt-12 hover:cursor-pointer'>
          {[
            { key: 'PayBills', title: 'Pay Bills', description: 'Paying your bills has never been so easy.' },
            { key: 'AirtimeData', title: 'Buy Airtime & Data', description: 'Never get caught with low airtime and data again!' },
            { key: 'MoneyTransfer', title: 'Money Transfer', description: 'Transferring money is now hassle-free.' },
            { key: 'PayTollFee', title: 'Pay Toll Fee', description: 'Never worry about getting a toll ticket again.' },
          ].map((item) => (
            <div
              key={item.key}
              className={`p-4 text-[#4F4F4F] border-l-8 border-grey-500 ${selectedOption === item.key ? 'border-l-4 border-green-500 pl-2 font-bold' : ''}`}
              onClick={() => handleOptionClick(item.key)}
            >
              <h2 className='mb-4 font-semibold'>{item.title}</h2>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
        <div className='col-span-1 bg-[#F1F1F1] rounded-lg overflow-hidden'>
          {selectedOption === 'PayBills' && <img src={Paybills} alt='Paybills' className='w-full h-full transition-opacity duration-500' />}
          {selectedOption === 'PayTollFee' && <img src={PayTollFee} alt='PayTollFee' className='w-full h-full transition-opacity duration-500' />}
          {selectedOption === 'MoneyTransfer' && (
            <img src={MoneyTransfer} alt='Transfer Money' className='mt-8 w-full h-full transition-opacity duration-500' />
          )}
          {selectedOption === 'AirtimeData' && (
            <img src={AirtimeData} alt='Airtime Data' className='mt-8 w-50% h-50% ml-[3em] transition-opacity duration-500' />
          )}
        </div>
      </div>
      <div className='grid grid-cols-2 px-10 py-4'>
        <div className='col-span-1 px-10 pt-12'>
          <div className='bg-[#F1F1F1] px-[5em] pt-[5em] flex rounded-xl'>
            <img src={PhoneMkUp} height={796.68} width={367.7} alt='phone mockup' />
          </div>
        </div>
        <img
          className='absolute inset-0 object-cover transform rotate-300'
          src={BgImage}
          alt=''
          width={787.03}
          height={772.03}
          style={{ top: '205%', left: '35%', transformOrigin: '50% 50%', zIndex: -4 }}
        />
        <div className='col-span-1 px-10 pt-12'>
          <div className='mt-[12em]'>
            <p className='text-[36px] font-poppins font-bold text-[#4F4F4F]'>Transact on the go</p>
            <span className='text-[#4F4F4F]'>
              Stay on top of your business with our easy- <br />
              to-use app
            </span>
            <br />
            <button className='bg-[#5CB23ACC] mt-6 p-3 px-10 rounded-xl text-white'>Get Started</button>
            <div className='flex mt-6 gap-4'>
              <img src={AppleStore} height={41.99} width={145.13} alt='store' />
              <img src={Goodlestore} height={41.99} width={145.13} alt='store' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
