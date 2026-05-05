import illustrationIntro from "../assets/images/illustration-intro.png";
import curvyMobile from "../assets/images/bg-curvy-mobile.svg";
import curvyDesktop from "../assets/images/bg-curvy-desktop.svg";

const Hero = () => {
  return (
    <section className="px-11 flex flex-col items-center justify-center text-center gap-5 relative pb-32">
      <img src={illustrationIntro} alt="" />
      <h1 className="text-2xl leading-normal">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="mb-4">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <a href="#early-access" className="call-to-action w-4/5">
        Get Started
      </a>

      {/* Background and Curvy Line */}
      <div className="bg-navy-900 absolute bottom-0 left-0 h-74 sm:h-44 lg:h-0 w-full -z-10">
        <div className="relative">
          <picture>
            <source media="(min-width: 768px)" srcSet={curvyDesktop} />
            <img
              src={curvyMobile}
              alt=""
              className="absolute -translate-y-full w-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
