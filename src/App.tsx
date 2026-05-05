import Features from "./components/Features";
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
        <div className="bg-navy-900 px-10 flex flex-col items-center gap-32">
          <Features />
          <Productive />
          <Testimonials />
        </div>
      </main>
    </>
  );
};

export default App;
