import TestimonialsBox from "./TestimonialsBox";

const Testimonials = () => {
   const posts = [
      {
         id: 1,
         desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
         author: {
            name: "Satish Patel",
            role: "Founder & CEO, Huddle",
            img: "profile-1.jpg",
         },
      },
      {
         id: 2,
         desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
         author: {
            name: "Bruce McKenzie",
            role: "Founder & CEO, Huddle",
            img: "profile-2.jpg",
         },
      },
      {
         id: 3,
         desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
         author: {
            name: "Michael Foster",
            role: "Founder & CEO, Huddle",
            img: "profile-3.jpg",
         },
      },
   ];
   return (
      <section className="text-white mt-44 max-sm:mt-30 relative">
         <div className="container mx-auto px-4 ">
            <img
               src="/images/bg-quotes.png"
               alt=""
               className="absolute -top-[33px] left-[40px]"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 relative z-20 ">
               <TestimonialsBox posts={posts} />
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
