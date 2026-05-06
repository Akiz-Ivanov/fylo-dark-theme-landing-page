const CallToAction = () => {
  return (
    <section
      id="early-access"
      className="bg-navy-800 rounded-xl shadow-xl p-8 flex flex-col gap-6 text-center absolute -translate-y-1/2 -translate-x-1/2 left-1/2 w-[90%]"
    >
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <input
        type="email"
        placeholder="email@example.com"
        className="bg-white rounded-full h-14 text-black/80 px-6"
      />
      <button className="call-to-action">Get Started For Free</button>
    </section>
  );
};

export default CallToAction;
