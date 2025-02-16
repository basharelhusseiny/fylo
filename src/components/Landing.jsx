import { motion } from "framer-motion";

const Landing = () => {
   return (
      <section className="landing mt-42 lg:mt-22">
         <div className="container mx-auto ">
            <div className="">
               <img
                  src={"/images/illustration-intro.png"}
                  alt=""
                  className="w-[300px] sm:w-[400px] h-[200px] sm:h-[250px] mx-auto"
               />
            </div>
            <div className="text text-center text-white mt-9 max-w-xl mx-auto px-4">
               <h1 className="font-bold text-[20px] sm:text-[30px] ">
                  All you files in one secure location, accessible anywhere.
               </h1>
               <p className="opacity-70 text-xs max-w-md mx-auto mt-2 px-[15px]">
                  Fylo stores all your most important files in one secure
                  loaction. <br /> Access them wherevey you need, share and
                  collaborate with friends family, and co-workers.
               </p>
               <motion.button className="cursor-pointer capitalize m-4 py-2 px-6 bg-sky-900 hover:bg-sky-600 duration-200 rounded-[25px]">
                  get started
               </motion.button>
            </div>
         </div>
      </section>
   );
};

export default Landing;
