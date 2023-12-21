 import Circle from '../assets/circle.png'
import Circleembellishment from '../assets/circleembellishment.png'
import Eclipse1 from '../assets/Ellipse1.png'
import Eclipse5 from '../assets/Ellipse5.png'
import Eclipse3 from '../assets/Ellipse3.png'
import Eclipse4 from '../assets/Ellipse4.png'


function HeroSection() {
  return (
    <div className='grid grid-cols-2 mt-[150px] ml-[90px] bg-[#060809]  text-white'>
        <div className=' col-span-1 p-6  '>
            <p className='text-[46px] font-Poppins font-bold py-2'>Secure & seamless <br/>online transactions</p>
            <p className='py-2 text-[18px] font-poppins font-semibold'>Providing you with the best online payment experience</p>
            <button className=' bg-green-600 py-[14px] px-[24px] mt-6 mb-[95px] font-semibold text-[16px] rounded'>Create free account</button>

        </div>
 
 <div className='col-span-1 relative mr-[8em] -mt-[10em] mb-[13em]'>
  <img className='absolute inset-0 object-cover transform rotate-0' src={Eclipse4} alt='' width={284} height={258} style={{ top: '20%', left: '-10%', transformOrigin: '50% 50%', zIndex: 1 }} />
  <img className='absolute inset-0 object-cover transform rotate-60' src={Eclipse1} alt='' width={100.63} height={100.79} style={{ top: '25%', left: '25%', transformOrigin: '50% 50%', zIndex: 4 }} />
  <img className='absolute inset-0 object-cover transform rotate-120' src={Eclipse3} alt='' width={456} height={456} style={{ top: '15%', left: '25%', transformOrigin: '50% 50%', zIndex: 3 }} />
  <img className='absolute inset-0 object-cover transform rotate-100' src={Circleembellishment} alt='' width={285} height={286} style={{ top: '60%', left: '-5%', transformOrigin: '50% 50%', zIndex: 0 }} />
  <img className='absolute inset-0 object-cover transform rotate-240' src={Eclipse5} alt='' width={213.25} height={209.14} style={{ top: '95%', left: '45%', transformOrigin: '50% 50%', zIndex: 5 }} />
  <img className='absolute inset-0 object-cover transform rotate-300' src={ Circle} alt='' width={120.32} height={120.32} style={{ top: '50%', left: '85%', transformOrigin: '50% 50%', zIndex: 4 }} />
</div>


    </div>
  )
}

export default HeroSection