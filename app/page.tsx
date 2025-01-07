import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Speakers from '@/components/Speakers';
import Location from '@/components/Location';
import GenericInformation from '@/components/GenericInformation';
import Experience from '@/components/Experience';
import UpcomingEvents from '@/components/UpcomingEvents';
import Footer from '@/components/Footer'; 

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Location />
      <Experience />
      <GenericInformation />
      <Speakers />
      <UpcomingEvents />
      <Footer />
    </>
  );
}
