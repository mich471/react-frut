
export const ImageText = ({order, imageMobile, imgDesktop, title, text}) => {
  return (
    <div className={`${order} relative flex justify-center	`}>
        <picture className=" top-0">
            <source media='(max-width:639px)' srcSet={imageMobile} />
            <source media='(min-width:640px)' srcSet={imgDesktop} />
            <img srcSet={imageMobile} alt="imagen servicio" />
        </picture>
        <div className="absolute z-[10] bottom-0">
            <h2 className="text-center font-Fraunces font-black text-[28px] text-DarkDesaturatedcyan  mb-7">{title}</h2>
            <p className="text-center font-Barlow font-semibold text-DarkDesaturatedcyan mx-3 mb-[60px] tablet:mb-[15px] md:mb-[30px] lg:mb-[60px] tablet:text-sm lg:w-[300px]">{text}</p>
        </div>
         
    </div>
            
  )
}

