const Navbar = ({ links }) => {
   return (
      <nav>
         <ul className="flex gap-8">
            {links.map((link) => {
               return (
                  <li key={link.id}>
                     <a
                        href={`#${link.li}`}
                        className="text-white opacity-80 capitalize hover:opacity-100 hover:underline duration-200 ">
                        {link.li}
                     </a>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
};

export default Navbar;
