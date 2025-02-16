import { motion } from "framer-motion";

const StayProductive = () => {
   return (
      <section className="mt-28 text-white">
         <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 items-center gap-10 w-[1100px] max-w-full mx-auto">
               <motion.img
                  transition={{delay:0.1 , duration: 2 }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  src="/images/illustration-stay-productive.png"
                  alt=""
                  className="max-sm:w-[500px] max-sm:mx-auto"
               />
               <motion.div
                  transition={{delay:0.1 ,duration: 1.5 }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text max-sm:px-[30px]">
                  <h3 className="text-4xl font-bold">
                     Stay Productive, <br /> Wherever you are
                  </h3>
                  <p className="mt-[25px] text-sm opacity-60 tracking-wider">
                     Never let location be an issue when accessing your files.
                     Fylo has you covered for all of your file storage needs.
                  </p>
                  <p className="mt-[10px] text-sm opacity-60 tracking-wider">
                     Securely share files and folders with friends, family and
                     colleagues for live collaboration. No email attachments
                     required.
                  </p>
                  <a
                     href=""
                     className="flex mt-[20px] tracking-[1px]  justify-between w-[200px] text-sky-300 hover:text-sky-500 border-b-1 pb-1 duration-200">
                     See how Fylo works
                     <img
                        src="/images/icon-arrow.svg"
                        alt="arrow"
                        className="animate-pulse w-[20px] object-contain"
                     />
                  </a>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default StayProductive;
