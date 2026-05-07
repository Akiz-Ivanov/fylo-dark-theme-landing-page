import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isEmailInvalid = !email.includes("@") || !email.includes(".");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (isEmailInvalid) {
      return;
    }
    setEmail("");
  };

  return (
    <section
      id="early-access"
      className="bg-navy-850 rounded-xl shadow-xl p-8 md:p-12 flex flex-col gap-6 text-center absolute -translate-y-1/2 -translate-x-1/2 left-1/2 w-[90%] max-w-3xl"
    >
      <h2 className="sm:text-2xl">Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form
        className="flex flex-col gap-6 sm:flex-row mt-4"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="flex-1 relative flex flex-col gap-1">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
            className="bg-white rounded-full h-14 text-black/80 px-6 w-full"
            aria-label="Email address"
            aria-invalid={isEmailInvalid}
            required
          />
          {hasSubmitted && isEmailInvalid && (
            <span className="error md:absolute top-15 left-0 w-full text-red-500 font-bold">
              Please enter a valid email address
            </span>
          )}
        </div>
        <button type="submit" className="call-to-action px-6">
          Get Started For Free
        </button>
      </form>
    </section>
  );
};

export default CallToAction;
