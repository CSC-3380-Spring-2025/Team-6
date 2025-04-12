import React from "react";
import { useNavigate } from "react-router-dom";
import QuizFramework2 from "./quiz-framework2";

const CourseListing2: React.FC = () => {
    const navigate = useNavigate();
    return (
      <div>
        <head>
          <title>HTML Elements Reference</title>
        </head>

        <h1>Physical Security</h1>

        <div>
          <p>
          Physical security and cybersecurity measures have traditionally been viewed as separate efforts. However, integrating physical security and cybersecurity can improve threat detection and response capabilities, cut costs, and increase overall security posture.
          To fully protect your sensitive assets, all your security programs must communicate. Cybersecurity experts and physical security professionals are concerned with risk management and stand a better chance of keeping potential bad actors out by working together.

          What is the Importance of Physical Security and Cybersecurity?
          Through the adoption of the Internet of Things (IoT) and Industrial Internet of Things (IIoT) devices, the world is becoming increasingly interconnected. This mesh of cyber-physical systems (CPS) expands the attack surface, making physical and digital security essential to prevent cyber physical attacks. 
          Today, even commonplace devices like surveillance cameras can be targeted by cybercriminals. Protecting these devices is no longer just a technology concern; it involves safeguarding people, processes, and physical infrastructure.

          Incidents involving the convergence of cyber and physical security fall into two main categories:
          Cyberattacks on Physical Systems:
          These incidents involve cybersecurity threats targeting physical infrastructure, such as video management systems, access control devices, or industrial control systems. Attackers aim to compromise these systems to gain unauthorized access, disrupt operations, or cause harm.
          Physical Systems Used in Cyberattacks
          In this scenario, physical devices or systems become tools for cyberattacks. For instance, insecure Internet of Things (IoT) devices can be hijacked and used as part of botnets to launch a distributed denial of service attack. Safeguarding hardware like servers, computers, and networked technology from unauthorized physical access or tampering is crucial to prevent data breaches and cyber-system disruptions.
          What Are the Key Components of Physical Security?
          It takes the implementation of many physical security measures to keep sensitive assets safe, such as:
          1. Access Control Systems
          Access control systems, including key card door locks and cloud-based solutions, are vital in restricting access to specific areas, such as exterior entry doors, server rooms, and HR offices. They ensure that only authorized individuals can enter, bolstering security and confidentiality.
          2. Perimeter Security
          Perimeter security involves fences, vehicle barriers, and access control points. These measures are designed to prevent unauthorized access to a facility, creating the first line of defense against potential threats.
          3. Surveillance Systems
          Surveillance systems, such as CCTV cameras, monitor and record activities in and around a facility, enhance security, and aid investigations by providing a detailed visual record.
          4. Intrusion Detection Systems
          Intrusion detection systems are crucial for alerting security personnel to unauthorized access attempts. They enable a rapid response and the swift initiation of security protocols.
          5. Security Lighting
          Security lighting serves multiple purposes — it helps deter intruders while ensuring proper night visibility. It acts as a deterrent and enhances overall safety.
          6. Security Personnel
          Trained security personnel provide a human presence in your security framework. They assist in monitoring and responding to security threats, enhancing the proactive security posture.
          7. Security Alarms
          Security alarms are essential for detecting breaches and triggering alerts. These alarms prompt immediate action and facilitate a quick and effective response to security incidents.

          </p>
        </div>

        <div className="carousel w-full">
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
                Matching Terms/Games
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

export default CourseListing2;