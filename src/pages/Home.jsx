import AboutProperty from "../component/Home/AboutProperty";
import Banner from "../component/Home/Banner";
import BookingSection from "../component/Home/BookingSection/BookingSection";
import Footer from "../component/Layout/Footer";
import Navbar from "../component/Layout/Navbar";
import LocationDetails from "../component/Home/LocationDetails";
import Neighborhood from "../component/Home/Neighborhood";
import PropertySpecs from "../component/Home/PropertySpecs";
import Attractions from "../component/Home/Attractions/Attractions";
import Testimonials from "../component/Home/Testimonials/Testimonials";
import ContactBanner from "../component/Home/ContactBanner";



function Home() {
  return (
   <>
  
  <Banner />
  <AboutProperty />
  <PropertySpecs />
  <BookingSection />
  <Attractions />
  <Testimonials />
  <LocationDetails />
  <ContactBanner />
  {/* <Neighborhood /> */}
 
   </>
  );
}
export default Home;