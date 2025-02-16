const AccessForm = () => {
   return (
      <section className="mt-35 -mb-30 relative z-30">
         <div className="container mx-auto px-4">
            <div className="bg-cyan-900 w-[750px] max-w-full mx-auto p-8 text-center rounded-lg">
               <h3 className="text-white font-bold text-3xl">Get early access today</h3>
               <p className=" text-white w-[500px] max-w-full mx-auto text-sm opacity-90 mt-3 ">
                  It only takes a minute to sign up and our free Starter tier is
                  extremely generous. If you have any questions, our support
                  team would be happy to help you.
               </p>
               <form className="mt-7 gap-3">
                  <input type="email" placeholder="email@example.com" name="" id="" className="max-w-full bg-white w-[400px] outline-hidden rounded-full py-2 pl-6 placeholder-slate-400" />
                  <button className= " max-md:mt-[10px] md:ml-[20px] text-white cursor-pointer capitalize py-2 px-6 bg-sky-600 hover:bg-sky-500 duration-200 rounded-[25px]">
                     get started for free
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AccessForm;
