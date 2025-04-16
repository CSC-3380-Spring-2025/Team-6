import React from "react";
import { useNavigate } from "react-router-dom";
import QuizFramework3 from "./quiz-framework3";

const CourseListing3: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <head>
        <title>HTML Elements Reference</title>
      </head>

      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Phishing
        </span>{" "}
        and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Social Engineering
        </span>
      </h1>

      <div>
        <p>
          <p>Avoiding Social Engineering and Phishing Attacks</p>
          <p>
            Do not give sensitive information to anyone unless you are sure that
            they are indeed who they claim to be and that they should have
            access to the information.
          </p>
          <p>What is a social engineering attack?</p>
          <p>
            In a social engineering attack, an attacker uses human interaction
            (social skills) to obtain or compromise information about an
            organization or its computer systems. An attacker may seem
            unassuming and respectable, possibly claiming to be a new employee,
            repair person, or researcher and even offering credentials to
            support that identity. However, by asking questions, he or she may
            be able to piece together enough information to infiltrate an
            organization's network. If an attacker is not able to gather enough
            information from one source, he or she may contact another source
            within the same organization and rely on the information from the
            first source to add to his or her credibility.
          </p>
          <p>What is a phishing attack?</p>
          <p>
            Phishing is a form of social engineering. Phishing attacks use email
            or malicious websites to solicit personal information by posing as a
            trustworthy organization. For example, an attacker may send email
            seemingly from a reputable credit card company or financial
            institution that requests account information, often suggesting that
            there is a problem. When users respond with the requested
            information, attackers can use it to gain access to the accounts.
          </p>
          <p>
            Phishing attacks may also appear to come from other types of
            organizations, such as charities. Attackers often take advantage of
            current events and certain times of the year, such as:
          </p>
          <p>natural disasters (e.g., hurricanes, earthquake)</p>
          <p>epidemics and health scares (e.g., H1N1) </p>
          <p>economic concerns (e.g., IRS scams)</p>
          <p>major political elections</p>
          <p>holidays</p>
          <p>How do you avoid being a victim?</p>
          <p>
            Be suspicious of unsolicited phone calls, visits, or email messages
            from individuals asking about employees or other internal
            information. If an unknown individual claims to be from a legitimate
            organization, try to verify his or her identity directly with the
            company.
          </p>
          <p>
            Do not provide personal information or information about your
            organization, including its structure or networks, unless you are
            certain of a person's authority to have the information.
          </p>
          <p>
            Do not reveal personal or financial information in email, and do not
            respond to email solicitations for this information. This includes
            following links sent in email.
          </p>
          <p>
            Do not send sensitive information over the Internet before checking
            a website's security.
          </p>
          <p>
            Pay attention to the URL of a website. Malicious websites may look
            identical to a legitimate site, but the URL may use a variation in
            spelling or a different domain (e.g., .com vs. .net).
          </p>
          <p>
            If you are unsure whether an email request is legitimate, try to
            verify it by contacting the company directly. Do not use contact
            information provided on a website connected to the request; instead,
            check previous statements for contact information. Information about
            known phishing attacks is also available online from groups such as
            the Anti-Phishing Working Group.
          </p>
          <p>
            Install and maintain anti-virus software, firewalls, and email
            filters to reduce some of this traffic.
          </p>
          <p>
            Take advantage of any anti-phishing features offered by your email
            client and web browser.
          </p>
          <p>What do you do if you think you are a victim?</p>
          <p>
            If you believe you might have revealed sensitive information about
            your organization, report it to the appropriate people within the
            organization, including network administrators. They can be alert
            for any suspicious or unusual activity.
          </p>
          <p>
            If you believe your financial accounts may be compromised, contact
            your financial institution immediately and close any accounts that
            may have been compromised. Watch for any unexplainable charges to
            your account.
          </p>
          <p>
            Immediately change any passwords you might have revealed. If you
            used the same password for multiple resources, make sure to change
            it for each account, and do not use that password in the future.
          </p>
          <p>Watch for other signs of identity theft.</p>
          <p>
            Consider reporting the attack to the police, and file a report with
            the Federal Trade Commission.
          </p>
        </p>
      </div>

      <div className="flex carousel w-3/4 mx-auto h-64 my-10">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full z-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button
              className="btn btn-error p-3 pointer-events-auto"
              onClick={() => navigate("/video3")}
            >
              Video
            </button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide4" className="btn btn-circle pointer-events-auto">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle pointer-events-auto">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full z-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button
              className="btn btn-error p-3 pointer-events-auto"
              onClick={() => navigate("/reading3")}
            >
              Reading
            </button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide1" className="btn btn-circle pointer-events-auto">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle pointer-events-auto">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full z-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button
              className="btn btn-error p-3 pointer-events-auto"
              onClick={() => navigate("/matching3")}
            >
              Matching Game
            </button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide2" className="btn btn-circle pointer-events-auto">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle pointer-events-auto">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full z-0 pointer-events-none"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <button
              className="btn btn-error p-3 pointer-events-auto"
              onClick={() => navigate("/quiz3")}
            >
              Quiz
            </button>
          </div>
          <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            <a href="#slide3" className="btn btn-circle pointer-events-auto">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle pointer-events-auto">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListing3;
