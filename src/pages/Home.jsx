import AccessForm from "../components/AccessForm";
import Features from "../components/Features";
import Landing from "../components/Landing";
import StayProductive from "../components/StayProductive";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
   return (
      <>
         <Landing/>
         <Features />
         <StayProductive />
         <Testimonials />
         <AccessForm />
         <Footer />
      </>
   );
};

export default Home;
