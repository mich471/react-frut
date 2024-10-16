export const Image = ({order="", imageMobile, imgDesktop}) => {
  return (
    <picture className={order}>
        <source media='(max-width:639px)' srcSet={imageMobile} />
        <source media='(min-width:640px)' srcSet={imgDesktop} />
        <img srcSet={imageMobile} alt="imagen servicio" />
    </picture>
  )
}

