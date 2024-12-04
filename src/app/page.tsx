import AboutUs from "@/components/pages/home/aboutUs";
import BookTicket from "@/components/pages/home/bookTicket";
import Hero from "@/components/pages/home/hero";
import Places from "@/components/pages/home/places";
import Services from "@/components/pages/home/services";
import Testimonials from "@/components/pages/home/testimonials";

const Home = async () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <BookTicket />
      <Places />
      <Testimonials />
    </div>
  );
};

export default Home;
