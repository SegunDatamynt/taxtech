import { useState } from 'react'
import Logo from "../assets/logo.png"
import HeroSection from './HeroSection'
import HeroSectionBiz from './HeroSectionBiz'

function Navbar() {
  const [showhero, setShowhero] = useState('HeroSection')

  const handleShowhero = (option)=>{
    setShowhero(option)
  }
  return (
    <div className=' bg-[#060809]'>
    <div className='flex grid-col-3 bg-[#060809] text-white justify-between p-2 ml-10'>
      <div className='flex p-2 '>
        <img alt='' src={Logo} width={163} height={64.19} />
        <div></div>
        <div className='p-6 gap-6 font-poppins text-[16px] flex '>
        <p  style={{
          borderBottom: showhero === 'HeroSection' ? '4px solid green' : 'none',
          fontWeight: showhero === 'HeroSection' ? 'bold' : 'normal',
        }} onClick={()=> handleShowhero('HeroSection')}>For Individuals</p>
        
        <p style={{
          borderBottom: showhero === 'HeroSectionBiz' ? '4px solid green' : 'none',
          fontWeight: showhero === 'HeroSectionBiz' ? 'bold' : 'normal',
        }} onClick={()=>handleShowhero('HeroSectionBiz')}>For Businesses</p>
        </div>
      </div>
      <div className='p-4 mt-4 flex  '>
        <div className=' '>
          <div className=' flex gap-12 mr-4'>
        <p>About Us</p>
        <p>Contact </p>
        <p> | </p>
        <p>Login </p>
        <button className='bg-green-400 px-[24px] py-[13px] rounded-xl text-[16px] font-poppins -m-3'>Create Free Account</button>
        </div>
        </div>
      </div>


    </div>
    {
      showhero === 'HeroSection' && (
      <HeroSection/> 
      )
    }
    {
      showhero === 'HeroSectionBiz' && (
        <HeroSectionBiz/>
      )
    }
    </div>
  )
}

export default Navbar