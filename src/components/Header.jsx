import { useRef } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
   const links = [
      { id: 1, li: "features" },
      { id: 2, li: "team" },
      { id: 3, li: "sign in" },
   ];
   const headerRef = useRef(null)
   useEffect(()=>{
      window.addEventListener("scroll", ()=>{
         if(window.scrollY > 100) {
            headerRef.current.style.backgroundColor = "rgb(8, 12, 20, 0.85)"
            headerRef.current.style.padding = "15px"
         }else {
            headerRef.current.style.backgroundColor = "transparent"
            headerRef.current.style.padding = "28px"
         }
      })
   },[])
   return (
      <header ref={headerRef} className="p-7 fixed top-0 left-0 w-full z-50 duration-300 ">
         <div className="container flex justify-between items-center mx-auto px-4 flex-col md:flex-row gap-5">
            <a href="">
               <img
                  src="/images/logo.svg"
                  alt="Logo"
                  width="100px"
                  height="100px"
               />
            </a>
            <Navbar links = {links}/>
         </div>
      </header>
   );
};

export default Header;
