"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle, ChevronRight, Lock, Shield } from "lucide-react"

const CourseListing1: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Password</span>{" "}
          Security
        </h1>

        <div className="space-y-8 mb-10">
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-emerald-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lock className="mr-2 text-emerald-500" />
              Create and Use Strong Passwords
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Passwords are the keys to safeguarding your digital and online life. They are your first line of defense.
              And knowing how to create and store strong passwords is one of the most critical aspects of everyday
              cybersecurity.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <p className="text-gray-300 leading-relaxed">
              Protect your passwords like you'd protect your house keys. Of course, maintaining your password collection
              is frustrating for many of us (until you start using a password manager). But we're here to help! While
              creating, storing, and remembering passwords can feel overwhelming, they remain your first line of defense
              against cybercriminals and data breaches. Fortunately, free, secure, and user-friendly password managers
              have made it easier than ever to maintain strong passwords. You can work to secure your online presence
              with just a few simple steps today.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-emerald-500" />
              The power of long, unique, and complex passwords
            </h2>
            <p className="text-gray-300 mb-4">For maximum security, remember three principles:</p>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-4 border-4 border-sky-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="bg-sky-500 text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    1
                  </span>
                  Long
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passwords should be at least 16 characters long. The longer your password, the longer it takes for
                  hackers to crack it using brute force techniques. Right now, an eight-character password takes a few
                  minutes for hacker software to guess by trying every combination of letters, numbers, and symbols. A
                  16-character password takes a billion years to guess!
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-emerald-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="bg-emerald-500 text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    2
                  </span>
                  Unique
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Each account should have a unique password. If you reuse passwords, don't feel ashamed! Reusing
                  passwords is a bad habit many of us are guilty of, but you can start changing your habits today!
                  Reusing passwords across multiple accounts can cause huge headaches. If one account is compromised,
                  unique passwords ensure your other accounts remain secure. Small tweaks like adding a number or a
                  special character aren't enough; each password should be entirely distinct. You can use a password
                  manager to create and store unique passwords for all your accounts!
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-purple-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="bg-purple-500 text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    3
                  </span>
                  Complex
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passwords should include a mix of uppercase and lowercase letters, numbers, and special characters
                  (like @, !, or $). Some platforms even allow spaces. The strongest passwords are a long string of
                  random characters, not identifiable words, names, or dates. However, even if your passwords are
                  random, you must ensure they are each at least 16 characters long!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CheckCircle className="mr-2 text-emerald-500" />
              Let's review!
            </h2>
            <p className="text-gray-300 mb-4">Each of your passwords should be:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-300">
                <ChevronRight className="text-emerald-500 mr-2" />
                <span>Unique to the account</span>
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight className="text-emerald-500 mr-2" />
                <span>At least 16 characters long</span>
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight className="text-emerald-500 mr-2" />
                <span>A random jumble of letters, numbers, and symbols</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4 italic">
              By using strong passwords, you're taking a crucial step toward protecting your digital identity.
            </p>
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
              src="/passwordSec1.jpg"
              alt="Password Security"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/video1")}
              >
                Watch Video
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide3" className="btn btn-circle pointer-events-auto">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle pointer-events-auto">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          {/* <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-emerald-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/reading1")}
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
          </div> */}

          {/* Slide 3 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-purple-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/matching1")}
              >
                Play Matching Game
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

          {/* Slide 4 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-sky-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/quiz1")}
              >
                Take Quiz
              </button>
            </div>
            <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
              <a href="#slide2" className="btn btn-circle pointer-events-auto">
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

export default CourseListing1