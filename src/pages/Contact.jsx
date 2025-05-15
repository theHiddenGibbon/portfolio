import { useState } from 'react';
import './Contact.css';
import gitHubIcon from '../assets/img/github-brands.svg';
import emailIcon from '../assets/img/envelope-regular.svg';
import atIcon from '../assets/img/at-solid.svg';

const email = "theHiddenGibbon@gmail.com";
const githubUrl = "https://github.com/theHiddenGibbon";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Hide after 1.5s
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in touch</h2>
      <div className="contact-buttons-highlight">
        <div className="contact-buttons">
          <div className="contact-btn-group left">
            <a href={`mailto:${email}`} className="contact-btn email">
              <img src={emailIcon} alt="email" className="contact-link-icon" />
              Email me
            </a>
            <button className="contact-btn copy" onClick={handleCopy}>
              {copied ? (
                <span className="copy-feedback">Email Copied!</span>
              ) : (
                <>
                  <img src={atIcon} alt="at symbol" className="contact-link-icon" />
                  Copy email
                </>
              )}
            </button>
          </div>
          <div className="contact-btn-group right">
            <a
              href={githubUrl}
              className="contact-btn github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubIcon} alt="GitHub" className="contact-link-icon" />
              My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;