import FeatureBox from "./FeatureBox";

const Features = () => {
   const featureData = [
      {
         id: 1,
         img: "icon-access-anywhere.svg",
         title: "Access your file, anywhere",
         desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      },
      {
         id: 2,
         img: "icon-security.svg",
         title: "Security you can trust",
         desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      },
      {
         id: 3,
         img: "icon-collaboration.svg",
         title: "Real-time collaboration",
         desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      },
      {
         id: 4,
         img: "icon-any-file.svg",
         title: "Store any type of file",
         desc: "Whether you’re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      },
   ];
   return (
      <section className="features mt-15 pt-17 max-sm:mt-5" id="features">
         <div className="container mx-auto p-4">
            <div className="w-[800px] max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20 text-center text-white">
               <FeatureBox boxData={featureData} />   
            </div>
         </div>
      </section>
   );
};

export default Features;
