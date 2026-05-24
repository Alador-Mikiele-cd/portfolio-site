import Image from "next/image";
import Nav from "@/components/navigetion";
import Main from "@/components/main";
import About from "@/components/about";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    
    <div className="bg-[#100416]">
    <Nav/>
    <Main/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}
