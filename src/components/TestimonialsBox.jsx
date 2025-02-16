const TestimonialsBox = ({ posts }) => {
   return (
      <>
         {posts.map((post) => {
            return (
               <div key={post.id} className="bg-cyan-900 p-6 rounded-md">
                  <p className="mb-5 text-base opacity-90 tracking-wider">
                     {post.desc}
                  </p>
                  <div className="flex items-center  ">
                     <img
                        src={`/images/${post.author.img}`}
                        alt="img"
                        className="w-[60px] rounded-full mr-4"
                     />
                     <div className="">
                        <h4 className="font-bold text-lg ">
                           {post.author.name}
                        </h4>
                        <p className="text-xs opacity-80">{post.author.role}</p>
                     </div>
                  </div>
               </div>
            );
         })}
      </>
   );
};

export default TestimonialsBox;
