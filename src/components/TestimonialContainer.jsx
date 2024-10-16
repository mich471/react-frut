import { Testimonial } from "./Testimonial"
import emilyPhoto from '../assets/images/image-emily.jpg'
import jenniePhoto from '../assets/images/image-jennie.jpg'
import thomasPhoto from '../assets/images/image-thomas.jpg'

export const TestimonialContainer = () => {
  return (
    <section className="bg-white pt-16">
        <h2 className="text-center uppercase font-Fraunces font-black mb-16 text-GrayishBlue">Client testimonial</h2>
        <div className="flex flex-wrap justify-center	">
        <Testimonial 
            img={emilyPhoto}
            testimonial=' Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
            name='Emily R.'
            position='Marketing Director'
        />
         <Testimonial 
            img={thomasPhoto}
            testimonial=' We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
            name='Thomas S.'
            position=' Chief Operating Officer'
        />
         <Testimonial 
            img={jenniePhoto}
            testimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
            name='Jennie F.'
            position='Business Owner'
        />

        </div>
            </section>
  )
}

