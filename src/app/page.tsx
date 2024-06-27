import Features from "@/component/Features";
import Footer from "@/component/Footer";
import GridBgSlider from "@/component/GridBgSlider";
import Hero from "@/component/Hero";
import WaveAndTooltip from "@/component/WaveAndTooltip";
import Webinar from "@/component/Webinar";
import WhyUs from "@/component/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
  //  <h1 className="text-2xl">mksaini</h1>
  <>
  <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
  {/* <h1 className="text-2xl text-red-600">hello world</h1> */}
<Hero/>
<Features/>
<WhyUs/>
<GridBgSlider/>
<Webinar/>
<WaveAndTooltip/>
<Footer/>
  </div>
  </>
  );
}