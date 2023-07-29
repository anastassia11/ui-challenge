import Image from 'next/image'
import img from './assets/img.jpg'

export const Card = () => {
    return (
        <div className='w-[256px]'>
            <Image src={img} alt="Card image" />
            <div className='flex justify-between text-[15px] pt-3 leading-[20px] text-base-1000'>
                <div>Smirc #1071</div>
                <div>0.015<span className='text-base-350 pl-1'>ETH</span></div>
            </div>
        </div>
    )
}