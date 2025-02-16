import { motion } from "framer-motion";

const FeatureBox = ({ boxData }) => {
   return (
      <>
         {boxData.map((item) => {
            return (
               <motion.div
                  transition={{ delay: 0.1, duration: 1 }}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  key={item.id}>
                  <img
                     src={`/images/${item.img}`}
                     alt=""
                     className="mx-auto h-20"
                  />
                  <h3 className="mt-7 font-bold text-xl">{item.title}</h3>
                  <p className="opacity-60 mt-3 mx-auto text-sm  max-w-full">
                     {item.desc}
                  </p>
               </motion.div>
            );
         })}
      </>
   );
};

export default FeatureBox;
