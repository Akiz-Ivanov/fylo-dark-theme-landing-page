import accessAnywhere from "../assets/images/icon-access-anywhere.svg";
import security from "../assets/images/icon-security.svg";
import realTime from "../assets/images/icon-collaboration.svg";
import anyFile from "../assets/images/icon-any-file.svg";

const Features = () => {
  return (
    <section className="flex flex-col text-center justify-center items-center gap-22 text-balance">
      <div className="features-group">
        <img src={accessAnywhere} alt="" />
        <h2>Access your files, anywhere</h2>
        <p>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>
      <div className="features-group">
        <img src={security} alt="" />
        <h2>Security you can trust</h2>
        <p>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div className="features-group">
        <img src={realTime} alt="" />
        <h2>Real-time collaboration</h2>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className="features-group">
        <img src={anyFile} alt="" />
        <h2>Store any type of file</h2>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </section>
  );
};

export default Features;
