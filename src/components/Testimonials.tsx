import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";
import Testimonial from "./Testimonial";
import quotesIcon from "../assets/images/bg-quotes.png";

const Testimonials = () => {
  return (
    <section className="flex flex-col px-4 gap-8 relative">
      <img src={quotesIcon} alt="" className="size-6 absolute -top-5 left-5" />
      <Testimonial
        imgSrc={profile1}
        name="Satish Patel"
        position="Founder & CEO, Huddle"
      >
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </Testimonial>
      <Testimonial
        imgSrc={profile2}
        name="Bruce McKenzie"
        position="Founder & CEO, Huddle"
      >
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </Testimonial>
      <Testimonial
        imgSrc={profile3}
        name="Iva Boyd"
        position="Founder & CEO, Huddle"
      >
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </Testimonial>
    </section>
  );
};

export default Testimonials;
