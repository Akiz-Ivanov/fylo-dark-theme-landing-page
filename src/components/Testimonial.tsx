type TestimonialProps = {
  imgSrc: string;
  name: string;
  position: string;
} & React.PropsWithChildren;

const Testimonial = ({
  imgSrc,
  name,
  position,
  children,
}: TestimonialProps) => {
  return (
    <div className="bg-navy-800 py-8 px-6 flex flex-col gap-4 text-xs rounded-sm z-10">
      <p className="leading-relaxed">{children}</p>
      <div className="flex items-center gap-2">
        <img src={imgSrc} alt={name} className="rounded-full size-8" />
        <div className="flex flex-col gap-1">
          <strong className="tracking-widest">{name}</strong>
          <span className="text-white/50">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
