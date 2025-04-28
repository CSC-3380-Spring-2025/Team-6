"use client";

import type React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Users } from "lucide-react";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-base-200">
      <section className="hero py-20 bg-base-300">
        <div className ="hero-content flex-col lg:flex-row-reverse max-w-7xl text-center mx-auto"> 
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">About CyberDojo</h1>
            <p className="py-6 text-lg">
              CyberDojo is a platform designed to enhance your cybersecurity
              knowledge and skills through interactive learning experiences.
              Our mission is to empower individuals and organizations with the
              tools and knowledge needed to navigate the ever-evolving
              landscape of cybersecurity threats.
            </p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>Our Courses</button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-100">
        <div className="max-w-4x1 mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <div className="divider max-w-xs mx-auto"></div>
              <p className="text-xl">
              We want to develop the future of a cybersecurity aware workforce.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card bg-base-200 ">
              <div className="card-body items-center text-center">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Protections</h3>
                <p>
                  The wide array of threats that can attack modern day systems are all covered on our site.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 ">
              <div className="card-body items-center text-center">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Community</h3>
                <p>
                  Working together and developing knowledge is an important pillar of our website.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
