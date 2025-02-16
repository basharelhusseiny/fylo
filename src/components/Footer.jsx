import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
   const links = [
      "about us",
      "jobs",
      "press",
      "blog",
      "contact us",
      "terms",
      "privacy",
   ];
   const social = ["facebook", "twitter", "insta"];
   return (
      <section className="bg-[rgb(0,0,0,0.7)] pt-40 pb-[50px]">
         <div className="container mx-auto px-4 text-white">
            <img src="/images/logo.svg" alt="" className="mb-[50px]" />
            <div className="grid md:grid-cols-4 gap-10">
               <div className="flex items-start ">
                  <img
                     src="/images/icon-location.svg"
                     alt=""
                     className="object-contain mr-[10px]"
                  />
                  <p className="opacity-80 text-sm">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Voluptas sed assumenda consectetur quidem beatae ea
                     voluptatum totam consequatur deserunt laborum!
                  </p>
               </div>
               <div>
                  <div className="flex items-center mb-[15px]">
                     <img
                        src="/images/icon-phone.svg"
                        alt=""
                        className="mr-[15px]"
                     />
                     <p className="opacity-80">+20 01149927789</p>
                  </div>
                  <div className="flex items-center">
                     <img
                        src="/images/icon-email.svg"
                        alt=""
                        className="mr-[15px]"
                     />
                     <p className="opacity-80 break-all">
                        basharelhusseiny@gmail.com
                     </p>
                  </div>
               </div>
               <div className="grid grid-cols-2 ">
                  {links.map((link, index) => {
                     return (
                        <a
                           href=""
                           key={index}
                           className="block w-fit mb-[10px] capitalize opacity-80 hover:opacity-100   duration-200">
                           {link}
                        </a>
                     );
                  })}
               </div>
               <ul className="flex gap-[20px]">
                  {social.map((ele,index) => {
                     return (
                        <li key={index} className=" text-[20px] h-fit border-1 rounded-full">
                           <a href="" className=" block p-[10px] duration-200 ">
                              {ele === "facebook" ? (
                                 <FaFacebookF className="hover:text-sky-700" />
                              ) : ele === "twitter" ? (
                                 <FaTwitter className="hover:text-sky-400" />
                              ) : (
                                 <FaInstagram className="hover:text-fuchsia-400" />
                              )}
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Footer;
