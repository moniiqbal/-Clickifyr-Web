import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

export default function Testimonial() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,

      }}
      className="mySwiper"

  slidesPerView={3}

  loop={true} // Optional: for infinite loop
  breakpoints={{
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }}
>


      {/* Slide 1 */}
      <SwiperSlide>
        <div className=" testominals bg-slateblue  transform-gpu  p-3  rounded-3xl  wow  animate__animated animate__zoomInUp" 
        data-wow-delay="0.2s" data-wow-duration="1s" >

          <img
            src="https://th.bing.com/th/id/OIP.SZE5l71SQWoNl3nigihOUgHaHa?w=1022&h=1024&rs=1&pid=ImgDetMain"
            alt="Customer Image 1"
            className="w-28 h-28 rounded-full border-2 border-solid border-white mx-auto mb-2"
          />

          <p className="font-Poppins text-center font-bold text-3xl mb-2 text-white 
           wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-wow-duration="1s">Sophie Turner</p>
          <p className=" text-center   mx-8 font-bold font-Poppins pt-1 text-white text-lg leading-relaxed mb-4">
            Clickifyr Marketing Agency is a top-notch partner for any business looking to thrive in the digital landscape.
            Their expertise in SEO and social media marketing brought measurable growth to our brand. Truly impressed
          </p>
          <div className="flex items-center justify-center mb-4">
  {[1, 2, 3, 4, 5].map((star) => (
    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-8 h-8 testominalicon'>
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="yellow" />
    </svg>
  ))}
</div>
          
          <div className="h-1 w-32  mx-auto mb-4  rounded-3xl bg-white items-center  "></div>
        </div>
      </SwiperSlide>
      {/* 2nd */}
      <SwiperSlide>
        <div className=" testominals bg-slateblue  transform-gpu  p-3  rounded-3xl  wow  animate__animated animate__zoomInUp" 
        data-wow-delay="0.2s" data-wow-duration="1s" >

          <img
            src="https://www.hospicehuntsville.com/wp-content/uploads/2022/11/Team11-300x300.jpg"
            alt="Customer Image 1"
            className="w-28 h-28 rounded-full border-2 border-solid border-white mx-auto mb-2"
          />
          <p className="font-Poppins text-center font-bold text-3xl mb-2 text-white 
           wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-wow-duration="1s">Alex Rodriguez</p>
          <p className=" text-center   mx-8 font-bold font-Poppins pt-1 text-white text-lg leading-relaxed mb-4">
            Working with Clickifyr was a game-changer for our business. Their dedicated team crafted a tailored marketing plan that delivered exceptional results.
            Great communication and a pleasure to collaborate with
          </p>
           <div className="flex items-center justify-center mb-4">
  {[1, 2, 3, 4, 5].map((star) => (
    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-8 h-8 testominalicon'>
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="yellow" />
    </svg>
  ))}
</div>
          <div className="h-1 w-32  mx-auto mb-4  rounded-3xl bg-white items-center  "></div>
        </div>
      </SwiperSlide>

      {/* 3nd */}
      <SwiperSlide>
        <div className=" testominals bg-slateblue transform-gpu  p-3  rounded-3xl  wow  animate__animated animate__zoomInUp" 
        data-wow-delay="0.2s" data-wow-duration="1s" >
          <img
            src=" https://th.bing.com/th/id/OIP.U5F26gEE6vsKu9v5mNc9UgHaHp?w=800&h=826&rs=1&pid=ImgDetMain"
            alt="Customer Image 1"
            className="w-28 h-28 rounded-full border-2 border-solid border-white mx-auto mb-2"
          />
          <p className="font-Poppins text-center font-bold text-3xl mb-2 text-white 
           wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-wow-duration="1s">Emily Thompson</p>
          <p className=" text-center   mx-8 font-bold font-Poppins pt-1 text-white text-lg leading-relaxed mb-4">
            Clickifyr Marketing Agency exceeded my expectations! The teams innovative strategies and attention to detail
            significantly boosted our online presence. Highly recommend their services
          </p>
           <div className="flex items-center justify-center mb-4">
  {[1, 2, 3, 4, 5].map((star) => (
    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-8 h-8 testominalicon'>
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="yellow" />
    </svg>
  ))}
</div>
          <div className="h-1 w-32  mx-auto mb-4  rounded-3xl bg-white items-center  "></div>
        </div>

      </SwiperSlide>

      {/* 4rth */}
      <SwiperSlide>
        <div className=" testominals bg-slateblue  transform-gpu  p-3  rounded-3xl  wow  animate__animated animate__zoomInUp" 
        data-wow-delay="0.2s" data-wow-duration="1s" >

          <img
            src="https://gatherdc.org/wp-content/uploads/2020/02/Ilana-Website-Headshot.png"
            alt="Customer Image 1"
            className="w-28 h-28 rounded-full border-2 border-solid border-white mx-auto mb-2"
          />
          <p className="font-Poppins text-center font-bold text-3xl mb-2 text-white 
           wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-wow-duration="1s">Olivia Martinez</p>
          <p className=" text-center   mx-8 font-bold font-Poppins pt-1 text-white text-lg leading-relaxed mb-4">
            Choosing Clickifyr was one of the best decisions for our marketing strategy. Their creative approach and data-driven campaigns helped us connect with our audience on a new level. Exceptional results and a pleasure to work with
          </p>
           <div className="flex items-center justify-center mb-4">
  {[1, 2, 3, 4, 5].map((star) => (
    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-8 h-8 testominalicon'>
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="yellow" />
    </svg>
  ))}
</div>
          <div className="h-1 w-32  mx-auto mb-4  rounded-3xl bg-white items-center  "></div>

        </div>
      </SwiperSlide>
      {/* 5 */}
      <SwiperSlide>
        <div className=" testominals bg-slateblue  transform-gpu  p-3  rounded-3xl  wow  animate__animated animate__zoomInUp" 
        data-wow-delay="0.2s" data-wow-duration="1s" >

          <img
            src="https://th.bing.com/th/id/OIP.JTjR3AZFS-xz7ArRpkdiCAAAAA?w=360&h=360&rs=1&pid=ImgDetMain"
            alt="Customer Image 1"
            className="w-28 h-28 rounded-full border-2 border-solid border-white mx-auto mb-2"
          />
          <p className="font-Poppins text-center font-bold text-3xl mb-2 text-white 
           wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s" data-wow-duration="1s">Daniel Harris</p>
          <p className=" text-center   mx-8 font-bold font-Poppins pt-1 text-white text-lg leading-relaxed mb-4">
            I cant express how satisfied I am with Clickifyrs services. From website optimization to targeted advertising, they covered it all.
            The teams professionalism and commitment made a significant impact on our business success.
          </p>
           <div className="flex items-center justify-center mb-4">
  {[1, 2, 3, 4, 5].map((star) => (
    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-8 h-8 testominalicon'>
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="yellow" />
    </svg>
  ))}
</div>
          <div className="h-1 w-32  mx-auto mb-4  rounded-3xl bg-white items-center  "></div>


        </div>

      </SwiperSlide>



    </Swiper>
  );
}
