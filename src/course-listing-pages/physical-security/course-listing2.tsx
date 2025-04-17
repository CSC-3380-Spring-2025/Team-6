"use client";

import type React from "react";
import { useNavigate } from "react-router-dom";
import QuizFramework1 from "./quiz-framework2";

const CourseListing1: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen text-white m-0 p-0 overflow-x-hidden">
      <head>
        <title>HTML Elements Reference</title>
      </head>

      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Physical Security
        </span>{" "}
        Fundamentals
      </h1>

      <div>
        <p>
          <p>
            Physical security and cybersecurity measures have traditionally been
            viewed as separate efforts. However, integrating physical security
            and cybersecurity can improve threat detection and response
            capabilities, cut costs, and increase overall security posture.
          </p>
          <p>
            To fully protect your sensitive assets, all your security programs
            must communicate. Cybersecurity experts and physical security
            professionals are concerned with risk management and stand a better
            chance of keeping potential bad actors out by working together.
          </p>
          <p>What is the Importance of Physical Security and Cybersecurity?</p>
          <p>
            Through the adoption of the Internet of Things (IoT) and Industrial
            Internet of Things (IIoT) devices, the world is becoming
            increasingly interconnected. This mesh of cyber-physical systems
            (CPS) expands the attack surface, making physical and digital
            security essential to prevent cyber physical attacks.
          </p>
          <p>
            Today, even commonplace devices like surveillance cameras can be
            targeted by cybercriminals. Protecting these devices is no longer
            just a technology concern; it involves safeguarding people,
            processes, and physical infrastructure.
          </p>
          <p>
            Incidents involving the convergence of cyber and physical security
            fall into two main categories:
          </p>
          <p>Cyberattacks on Physical Systems:</p>
          <p>
            These incidents involve cybersecurity threats targeting physical
            infrastructure, such as video management systems, access control
            devices, or industrial control systems. Attackers aim to compromise
            these systems to gain unauthorized access, disrupt operations, or
            cause harm.
          </p>
          <p>
            Physical Systems Used in Cyberattacks In this scenario, physical
            devices or systems become tools for cyberattacks. For instance,
            insecure Internet of Things (IoT) devices can be hijacked and used
            as part of botnets to launch a distributed denial of service attack.
            Safeguarding hardware like servers, computers, and networked
            technology from unauthorized physical access or tampering is crucial
            to prevent data breaches and cyber-system disruptions.
          </p>
          <p>What Are the Key Components of Physical Security?</p>
          <p>
            It takes the implementation of many physical security measures to
            keep sensitive assets safe, such as:
          </p>
          <p>
            1. Access Control Systems Access control systems, including key card
            door locks and cloud-based solutions, are vital in restricting
            access to specific areas, such as exterior entry doors, server
            rooms, and HR offices. They ensure that only authorized individuals
            can enter, bolstering security and confidentiality.
          </p>
          <p>
            2. Perimeter Security Perimeter security involves fences, vehicle
            barriers, and access control points. These measures are designed to
            prevent unauthorized access to a facility, creating the first line
            of defense against potential threats.
          </p>
          <p>
            3. Surveillance Systems Surveillance systems, such as CCTV cameras,
            monitor and record activities in and around a facility, enhance
            security, and aid investigations by providing a detailed visual
            record.
          </p>
          <p>
            4. Intrusion Detection Systems Intrusion detection systems are
            crucial for alerting security personnel to unauthorized access
            attempts. They enable a rapid response and the swift initiation of
            security protocols.
          </p>
          <p>
            5. Security Lighting Security lighting serves multiple purposes — it
            helps deter intruders while ensuring proper night visibility. It
            acts as a deterrent and enhances overall safety.
          </p>
          <p>
            6. Security Personnel Trained security personnel provide a human
            presence in your security framework. They assist in monitoring and
            responding to security threats, enhancing the proactive security
            posture.
          </p>
          <p>
            7. Security Alarms Security alarms are essential for detecting
            breaches and triggering alerts. These alarms prompt immediate action
            and facilitate a quick and effective response to security incidents.
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
              onClick={() => navigate("/video2")}
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
              onClick={() => navigate("/reading2")}
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
              onClick={() => navigate("/matching2")}
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
              onClick={() => navigate("/quiz2")}
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

export default CourseListing1;
