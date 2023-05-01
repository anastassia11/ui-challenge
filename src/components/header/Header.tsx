import SvgLogoGuideDao from "./assets/SvgLogoGuideDao"
export const Header = () => {
    return <div className='flex items-end'>
        <div className='pr-6 border-r-[1px] border-day-150'>
            <SvgLogoGuideDao />
        </div>
        <div className='hidden lg:block pl-6 text-[14px] leading-[-0.02em] tracking-tighter uppercase'>sandbox</div>
    </div>
}