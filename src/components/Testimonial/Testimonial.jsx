import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Headings from "../Headings/Headings";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20">
      <div>
        <Headings highlight="Customers" headings=" Saying" />

        <div className="flex justify-end mt-5 py-5 md:gap-x-3 gap-x-4">
          <button className="custom-prev bg-zinc-200 md:h-11 md:w-11 h-9 w-9 rounded-lg flex justify-center items-center md:text-3xl text-2xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <FaAngleLeft />
          </button>

          <button className="custom-next bg-zinc-200 md:h-11 md:w-11 h-9 w-9 rounded-lg flex justify-center items-center md:text-3xl text-2xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <FaAngleRight />
          </button>
        </div>

         <Swiper 
         navigation={{

  nextEl: ".custom-next",
  prevEl: ".custom-prev",

         }} 
         loop={true}

breakpoints={{
    640: {slidesPerView: 1, spaceBetween: 20},
     768: {slidesPerView: 2, spaceBetween: 20},
      1024: {slidesPerView: 3, spaceBetween: 20},
}}

         modules={[Navigation]} className="mySwiper">
          
            {reviews.map((item) => (
  <SwiperSlide
    key={item.id}
    className="bg-zinc-200 p-8 rounded-xl"
  >
    <div className="flex items-center gap-6">
      <div className="h-16 w-16 rounded-full overflow-hidden object-contain bg-red-400 outline-3 outline-offset-4 outline-orange-500">
        <img className="w-full h-full" src = {item.image} />
      </div>

      <div>
        <h4 className="text-lg font-bold text-zinc-800">
          {item.name}
        </h4>

        <p className="text-zinc-600">
          {item.profession}
        </p>

        <span className="flex mt-2 gap-1 text-yellow-500 font-semibold">
          {Array.from({length: item.rating},(_,index)=>(
            <FaStar />
          ))}
        </span>
      </div>
    </div>

    <p className="mt-10 text-zinc-600 min-h-[15vh]">
      {item.review}
    </p>
  </SwiperSlide>
))}

    

      </Swiper>

        
      </div>
    </section>
  );
};

export default Testimonial;

const reviews = [
  {
    id: 1,
    name: "Emma Thompson",
    profession: "Food Blogger",
    rating: 5,
    review:
      "The fruits and vegetables were incredibly fresh, beautifully packed, and delivered on time. Highly recommended for every home kitchen.",
      image: customer1 ,
  },
  {
    id: 2,
    name: "Michael Carter",
    profession: "Executive Chef",
    rating: 4,
    review:
      "Premium-quality ingredients, fresh seafood, and excellent dairy products. Everything exceeded my expectations and made cooking much more enjoyable.",
      image: customer2 ,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    profession: "Recipe Creator",
    rating: 5,
    review:
      "I love the freshness of every product. The grocery selection is impressive, prices are fair, and delivery service is always reliable.",
      image: customer3 ,
  },
  {
    id: 4,
    name: "Daniel Wilson",
    profession: "Nutritionist",
    rating: 3,
    review:
      "Healthy, fresh, and organic options are available in one place. Perfect for anyone looking to maintain a balanced and nutritious lifestyle.",
      image: customer4 ,
  },
  {
    id: 5,
    name: "Olivia Brown",
    profession: "Culinary Instructor",
    rating: 4,
    review:
      "Excellent grocery store with outstanding product quality, fast delivery, and fresh ingredients. I confidently recommend it to all my students.",
      image: customer5 ,
  },
];
