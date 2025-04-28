"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle, Lock, Shield, Camera, Bell, Key, Fence, AlertTriangle, Users, Lightbulb } from "lucide-react"
import { auth, db } from "../../firebase"
import { doc, updateDoc } from "firebase/firestore"


const CourseListing2: React.FC = () => {
  const navigate = useNavigate()
  const handleFinish = async () => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid)
      try {
        await updateDoc(userRef, {
          "progress.physicalSecurity": true,
        })
        console.log("Progress updated: physicalSecurity marked complete")
      } catch (error) {
        console.error("Error updating progress:", error)
      }
      navigate("/")
    } else {
      console.error("No authenticated user found.")
      navigate("/")
    }
  }
  
  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Physical Security
          </span>{" "}
          Fundamentals
        </h1>

        <div className="space-y-8 mb-10">
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-emerald-500 ">
            <p className="text-gray-300 leading-relaxed">
              Physical security and cybersecurity measures have traditionally been viewed as separate efforts. However,
              integrating physical security and cybersecurity can improve threat detection and response capabilities,
              cut costs, and increase overall security posture.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              To fully protect your sensitive assets, all your security programs must communicate. Cybersecurity experts
              and physical security professionals are concerned with risk management and stand a better chance of
              keeping potential bad actors out by working together.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-sky-500" />
              What is the Importance of Physical Security and Cybersecurity?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Through the adoption of the Internet of Things (IoT) and Industrial Internet of Things (IIoT) devices,
                the world is becoming increasingly interconnected. This mesh of cyber-physical systems (CPS) expands the
                attack surface, making physical and digital security essential to prevent cyber physical attacks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, even commonplace devices like surveillance cameras can be targeted by cybercriminals. Protecting
                these devices is no longer just a technology concern; it involves safeguarding people, processes, and
                physical infrastructure.
              </p>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Incidents involving the convergence of cyber and physical security fall into two main categories:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <AlertTriangle className="mr-2 text-red-500" />
                  Cyberattacks on Physical Systems
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  These incidents involve cybersecurity threats targeting physical infrastructure, such as video
                  management systems, access control devices, or industrial control systems. Attackers aim to compromise
                  these systems to gain unauthorized access, disrupt operations, or cause harm.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-amber-500">
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <Lock className="mr-2 text-amber-500" />
                  Physical Systems Used in Cyberattacks
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  In this scenario, physical devices or systems become tools for cyberattacks. For instance, insecure
                  Internet of Things (IoT) devices can be hijacked and used as part of botnets to launch a distributed
                  denial of service attack. Safeguarding hardware like servers, computers, and networked technology from
                  unauthorized physical access or tampering is crucial to prevent data breaches and cyber-system
                  disruptions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 ">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 text-emerald-500" />
              What Are the Key Components of Physical Security?
            </h2>
            <p className="text-gray-300 mb-6">
              It takes the implementation of many physical security measures to keep sensitive assets safe, such as:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 border-4 border-sky-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Key className="mr-2 text-sky-500" />
                  1. Access Control Systems
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Access control systems, including key card door locks and cloud-based solutions, are vital in
                  restricting access to specific areas, such as exterior entry doors, server rooms, and HR offices. They
                  ensure that only authorized individuals can enter, bolstering security and confidentiality.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-emerald-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Fence className="mr-2 text-emerald-500" />
                  2. Perimeter Security
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perimeter security involves fences, vehicle barriers, and access control points. These measures are
                  designed to prevent unauthorized access to a facility, creating the first line of defense against
                  potential threats.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-purple-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Camera className="mr-2 text-purple-500" />
                  3. Surveillance Systems
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Surveillance systems, such as CCTV cameras, monitor and record activities in and around a facility,
                  enhance security, and aid investigations by providing a detailed visual record.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-red-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 text-red-500" />
                  4. Intrusion Detection Systems
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Intrusion detection systems are crucial for alerting security personnel to unauthorized access
                  attempts. They enable a rapid response and the swift initiation of security protocols.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-amber-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Lightbulb className="mr-2 text-amber-500" />
                  5. Security Lighting
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Security lighting serves multiple purposes — it helps deter intruders while ensuring proper night
                  visibility. It acts as a deterrent and enhances overall safety.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-blue-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Users className="mr-2 text-blue-500" />
                  6. Security Personnel
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Trained security personnel provide a human presence in your security framework. They assist in
                  monitoring and responding to security threats, enhancing the proactive security posture.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-4 border-pink-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Bell className="mr-2 text-pink-500" />
                  7. Security Alarms
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Security alarms are essential for detecting breaches and triggering alerts. These alarms prompt
                  immediate action and facilitate a quick and effective response to security incidents.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-10">
        <button
  className="btn bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
  onClick={handleFinish}
>

            <CheckCircle className="mr-2" /> Mark as Complete
          </button>
        </div>

        <div className="flex carousel w-full mx-auto h-64 my-10 rounded-xl overflow-hidden ">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="physsec1.jpeg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-red-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/video2")}
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
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="physsec2.jpg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-purple-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/matching2")}
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

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="physsec3.jpg"
              className="w-full z-0 pointer-events-none object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black bg-opacity-50">
              <button
                className="btn bg-sky-600 text-white p-3 pointer-events-auto flex items-center gap-2 rounded-lg"
                onClick={() => navigate("/quiz2")}
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

export default CourseListing2