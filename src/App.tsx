import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <div className="bg-navy-900 px-10 flex flex-col items-center gap-32 pb-84">
          <div className="w-full max-w-7xl flex flex-col items-center gap-32">
            <Features />
            <Productive />
            <Testimonials />
          </div>
        </div>
        <div className="-mb-32 relative z-10 bg-navy-950">
          <div className="w-full max-w-360 mx-auto">
            <CallToAction />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
