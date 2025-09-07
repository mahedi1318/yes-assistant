import Image from "next/image"
import Link from "next/link"

const Footers = () => {
  return (
    <>
    <div className="bg-[#052221] py-[70px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="">
            <Image src="/footer-logo.webp" width={200} height={200} />
            <p className="roboto text-[17px] font-medium leading-[24px] text-white w-[220px] mt-4">everyone with high and useful reward for his/her trading</p>
            <div className="">
              <Link href="/" ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footers