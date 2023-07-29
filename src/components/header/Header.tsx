import { SvgSelector } from '../SvgSelector'


export const Header = () => {
    return <div className='flex items-center justify-between h-[60px] lg:h-[68px] px-16'>
        <div className='flex items-end'>
            <div className='pr-6 border-r-[1px] border-base-150 text-base-1000'>
                <SvgSelector id='logoGuideDao' />
            </div>
            <div className='hidden lg:block relative text-base-1000 top-[1px] pl-6 text-[14px] leading-[-0.02em] tracking-tighter uppercase'>sandbox</div>
        </div>
        <div>Login</div>
    </div>
}