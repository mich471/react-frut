
export const Testimonial = ({img, testimonial, name, position}) => {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <img src={img} alt="photo" className="w-[72px] rounded-full" />
      <p className="my-8 font-Barlow font-semibold text-VerydarkGrayishBlue px-4 max-w-[400px]">{testimonial}</p>
      <h3 className="font-Fraunces font-black text-[18px] text-VeryDarkDesaturatedblue">{name}</h3>
      <p className="text-DarkGrayishBlue font-Barlow font-semibold text-[14px]">{position}</p>
    </div>
  )
}
