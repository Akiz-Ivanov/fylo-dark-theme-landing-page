import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <div className="bg-navy-900 px-10 flex flex-col items-center gap-32">
          <Features />
        </div>
      </main>
    </>
  );
};

export default App;
