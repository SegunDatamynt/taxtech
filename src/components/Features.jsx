 import MoneyTransafer from '../assets/MoneyTransfer.png'
import Security from '../assets/Security.png'
import EMI from '../assets/EMI.png'



function Features() {
  return (
    <div className='p-[100px]  '>
        <div className='text-center'>
            <p className='text-[36px] font-semibold text-[#4F4F4F] font-poppins'>Payments tools designed for you</p>
            <p className='text-[18px] text-[#4F4F4F] font-poppins'>Explore payment features that provides you with every possible solution</p>
        </div>
        <div className=' grid-col-3 p-4 flex gap-4 mt-[40px]'>
            <div className=' col-span-1  border border-[#5CB23A45] w-[402.67px] h-[388px] px-[40px] py-[30px] '>
                <img width={57.4} height={67.69} alt='' src={MoneyTransafer} className='mt-[5em] mb-4'/>
                <div>
                    <p className='text-[22px] mb-4'>User Friendly</p>
                    <p className='text-[18px] mb-4'>Highly responsive and easy to <br/> navigate</p>
                </div>

            </div>
            <div className=' col-span-1  border border-[#5CB23A45] w-[402.67px] h-[388px] px-[40px] py-[30px] '>
                <img width={57.4} height={67.69} alt='' src={Security} className='mt-[5em] mb-4'/>
                <div>
                    <p className='text-[22px] mb-4'>Secure</p>
                    <p className='text-[18px] mb-4'>Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.</p>
                </div>

            </div>
            <div className=' col-span-1  border border-[#5CB23A45] w-[402.67px] h-[388px] px-[40px] py-[30px] '>
                <img width={57.4} height={67.69} alt='' src={EMI} className='mt-[5em] mb-4'/>
                <div>
                    <p className='text-[22px] mb-4'>Fast </p>
                    <p className='text-[18px] mb-4'>Transacting takes only a few <br/> seconds - it&apos;s convenient and safe.</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Features