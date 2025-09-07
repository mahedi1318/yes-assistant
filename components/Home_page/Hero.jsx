import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-[#f2bcbc] to-white h-screen w-full py-[100px]">
        <div className="container">
            <div className="flex justify-between">
                <div className="w-[50%]">
                    <h1 className='fira text-[72px] font-bold leading-[94px] text-[#06253b] w-[500px]'>Planning To Hire a Virtual Assistant?</h1>
                    <p className='roboto text-[22px] font-normal leading-[37px] text-[#061c3d w-[600px] mt-[25px] mb-[30px]'>Free up your time and focus on business growth with a dedicated VA or team. Delegate tasks, 
                        save time, and gain profit! Hire Your Virtual Assistant Now!</p>
                    <div className="flex items-center gap-[50px]">
                        <div className="w-[326px] text-center">
                            <button className='roboto text-[18px] font-normal leading-[18px] text-white py-5 px-10 bg-[#d83030] rounded-[30px]'>REQUEST A CONSULTATION</button>
                            <span className='block roboto text-[16px] font-bold leading-[27px] text-[#061c3d] mt-[10px]'>Get 2 Hours of Work for Free!</span>
                        </div>
                        <Image src="/reviews.png" width={200} height={100}/>
                    </div>
                </div>
                <div className="w-[50%] relative">
                    <div className="w-[100%] h-[100%] relative">
                        <Image src="/hero.webp" fill className='object-contain'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero