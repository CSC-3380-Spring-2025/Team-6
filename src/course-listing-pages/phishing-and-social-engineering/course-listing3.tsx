"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import { AlertTriangle, BookOpen, CheckCircle, FileWarning, Shield, HelpCircle, User } from "lucide-react"

const CourseListing3: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Phishing</span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Social Engineering
          </span>
        </h1>

        <div className="space-y-8 mb-10">
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-red-500 ">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AlertTriangle className="mr-2 text-red-500" />
              Avoiding Social Engineering and Phishing Attacks
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Do not give sensitive information to anyone unless you are sure that they are indeed who they claim to be
              and that they should have access to the information.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <User className="mr-2 text-sky-500" />
              What is a social engineering attack?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In a social engineering attack, an attacker uses human interaction (social skills) to obtain or compromise
              information about an organization or its computer systems. An attacker may seem unassuming and
              respectable, possibly claiming to be a new employee, repair person, or researcher and even offering
              credentials to support that identity. However, by asking questions, he or she may be able to piece
              together enough information to infiltrate an organization's network. If an attacker is not able to gather
              enough information from one source, he or she may contact another source within the same organization and
              rely on the information from the first source to add to his or her credibility.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FileWarning className="mr-2 text-amber-500" />
              What is a phishing attack?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Phishing is a form of social engineering. Phishing attacks use email or malicious websites to solicit
              personal information by posing as a trustworthy organization. For example, an attacker may send email
              seemingly from a reputable credit card company or financial institution that requests account information,
              often suggesting that there is a problem. When users respond with the requested information, attackers can
              use it to gain access to the accounts.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              Phishing attacks may also appear to come from other types of organizations, such as charities. Attackers
              often take advantage of current events and certain times of the year, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Natural disasters (e.g., hurricanes, earthquake)</li>
              <li>Epidemics and health scares (e.g., H1N1)</li>
              <li>Economic concerns (e.g., IRS scams)</li>
              <li>Major political elections</li>
              <li>Holidays</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border-4 border-emerald-500">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-emerald-500" />
              How do you avoid being a victim?
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Be suspicious of unsolicited phone calls, visits, or email messages from individuals asking about
                  employees or other internal information. If an unknown individual claims to be from a legitimate
                  organization, try to verify his or her identity directly with the company.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Do not provide personal information or information about your organization, including its structure or
                  networks, unless you are certain of a person's authority to have the information.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Do not reveal personal or financial information in email, and do not respond to email solicitations
                  for this information. This includes following links sent in email.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Do not send sensitive information over the Internet before checking a website's security.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Pay attention to the URL of a website. Malicious websites may look identical to a legitimate site, but
                  the URL may use a variation in spelling or a different domain (e.g., .com vs. .net).
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  If you are unsure whether an email request is legitimate, try to verify it by contacting the company
                  directly. Do not use contact information provided on a website connected to the request; instead,
                  check previous statements for contact information. Information about known phishing attacks is also
                  available online from groups such as the Anti-Phishing Working Group.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Install and maintain anti-virus software, firewalls, and email filters to reduce some of this traffic.
                </p>
              </div>

              <div className="bg-gray-800 rounded p-4">
                <p className="text-gray-300 leading-relaxed">
                  Take advantage of any anti-phishing features offered by your email client and web browser.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 border-4 border-amber-500">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <HelpCircle className="mr-2 text-amber-500" />
              What do you do if you think you are a victim?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <p className="text-gray-300 leading-relaxed">
                  If you believe you might have revealed sensitive information about your organization, report it to the
                  appropriate people within the organization, including network administrators. They can be alert for
                  any suspicious or unusual activity.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <p className="text-gray-300 leading-relaxed">
                  If you believe your financial accounts may be compromised, contact your financial institution
                  immediately and close any accounts that may have been compromised. Watch for any unexplainable charges
                  to your account.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Immediately change any passwords you might have revealed. If you used the same password for multiple
                  resources, make sure to change it for each account, and do not use that password in the future.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <p className="text-gray-300 leading-relaxed">Watch for other signs of identity theft.</p>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-amber-500 text-black rounded-full w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Consider reporting the attack to the police, and file a report with the Federal Trade Commission.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <button
            className="btn bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            onClick={() => navigate("/")}
          >
            <CheckCircle className="mr-2" /> Mark as Complete
          </button>
        </div>

        <div className="flex carousel w-full mx-auto h-64 my-10 rounded-xl overflow-hidden ">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/video3")}
              >
                Watch Video
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
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-emerald-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/reading3")}
              >
                <BookOpen className="h-5 w-5" />
                Start Reading
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
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-purple-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/matching3")}
              >
                Play Matching Game
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
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-sky-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/quiz3")}
              >
                Take Quiz
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
    </div>
  )
}

export default CourseListing3