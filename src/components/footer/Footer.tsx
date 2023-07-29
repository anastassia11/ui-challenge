import { SvgSelector } from '../SvgSelector'
import { useTheme } from 'next-themes'
export const Footer = () => {
    const { theme, setTheme } = useTheme()

    return <div className='flex flex-row justify-between h-[60px] lg:h-[68px] px-16 py-9 border-t absolute bottom-0 w-screen'>
        <div>
            <p className='text-base-350'>©2023 BALAJI WAS RIGHT</p>
        </div>
        <div className='flex flex-row' >
            <span className={`border-r pr-4 ${theme === 'light' ? 'text-base-1000' : 'text-base-150'}`}
                onClick={() => setTheme("light")}><SvgSelector id='light' /></span>
            <span className={`pl-4 ${theme === 'light' ? 'text-base-150' : 'text-base-1000'}`}
                onClick={() => setTheme("dark")}><SvgSelector id='dark' /></span>
        </div>
    </div>
}