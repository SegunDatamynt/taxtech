 import Circleembellishment from '../assets/circleembellishment.png'
 import RectangleIMG from '../assets/RectanglePic.png'


function HeroSection() {
  return (
    <div className='mt-[90px] ml-[90px] bg-[#060809]  text-white   text-center mb-8'>
        <div className='mb-22 '>
            <p className='text-[46px] font-Poppins font-bold py-2'>Manage payroll, compliance  <br/> & HR in real time</p>
            <p className='py-2 text-[18px] font-poppins font-semibold'>Make income tax remittances to the state internal revenue <br/> service for your employees.</p>
            <button className=' bg-[#5CB23ACC] py-[14px] px-[24px] mt-6 mb-[16em] font-semibold text-[16px] rounded-lg'>Create free account</button>
        </div>
 
 <div className='  relative mr-[8em] -mt-[11em] mb-[38em]'>
  <img className='absolute inset-0 object-cover transform rotate-240' src={RectangleIMG} alt='' width={1036} height={574} style={{ top: '95%', left: '15%', transformOrigin: '50% 50%', zIndex: 5 }} />
  <img className='absolute inset-0 object-cover transform rotate-300 -mt-[10em] -ml-[6em]' src={ Circleembellishment} alt='' width={500.34} height={558.37} style={{ top: '40%', left: '77%', transformOrigin: '50% 50%', zIndex: 4 }} />
</div>


    </div>
  )
}

export default HeroSection