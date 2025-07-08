"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LeftContent from "../components/LeftContent";
import Banner from "../components/Banner";
import SocialShare from "../components/SocialLink";
import Editorialboard from "../components/Editorialboard";
import AdvisoryBoard from "../components/AdvisoryBoard";

export default function page() {
 

  

  return (
    <>
      <Banner title="About Us" />

      <div className="about-author-area ">
        <div className="min-h-screen">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 px-5 lg:px-24 ">
            <div className="lg:col-span-8 relative lg:sticky top-0 h-max ">
              {/* About Section */}
              <div className="py-0 lg:py-6 mb-5">
                <div className="mb-6">
                  <Image
                    src="/images/logo/logo1.webp"
                    alt="About Us"
                    width={730}
                    height={356}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mb-4 text-lg text-justify">
                  Social Scholars Online Magazine is a dedicated platform for
                  in-depth analysis and critical discourse on emerging social
                  issues, with a special focus on Punjab. Entrenched in
                  scholarly rigor and journalistic integrity, the magazine
                  serves as a bridge between academic research and public
                  discourse, offering insightful perspectives on the country's
                  socio-political, economic, environmental, and cultural
                  landscape.
                </p>

                <p className="mb-4 text-lg  text-justify">
                  We provide a forum for rigorous discourse on key themes such
                  as caste and identity politics, labour rights, agrarian
                  distress, public health, education, environmental justice,
                  climate change, governance, state capacity, and indigenous
                  knowledge systems, etc. We are equally attentive to the
                  evolving aspirations of Bharat@2047, reflecting on how
                  contemporary policy and grassroots transformations are
                  reshaping the vision of India’s future. We also encourage
                  contributions in the fields of foreign policy and
                  international relations, particularly from a nationalist
                  perspective.
                </p>
                <p className=" text-lg text-justify">
                  Social Scholars actively welcomes contributions from scholars,
                  researchers, doctoral candidates, policy analysts,
                  journalists, and practitioners. We are especially interested
                  in publishing Ph.D. scholars’ final research findings, with an
                  emphasis on their real-world implications and societal
                  relevance. Field-based studies, ethnographic accounts, and
                  critical reflections that amplify underrepresented voices and
                  challenge dominant paradigms are central to our mission.
                </p>
                <p className=" text-lg text-justify">
                  Through both digital and print editions, Social Scholars
                  Online Magazine aims to inform, provoke, and inspire. By
                  enabling dialogue between academia and civil society, we
                  aspire to act as a catalyst for meaningful social
                  transformation.
                </p>
              </div>

              <SocialShare />
            </div>

            <div className="lg:col-span-4 ">
              {/* Tags Widget */}
              <LeftContent />
            </div>
          </div>
        </div>

        <div className=" mx-auto px-5 lg:px-24 py-10">
         
         <Editorialboard />

          <AdvisoryBoard />
          
          <p className="mt-10 text-lg  font-medium">
            Join us in critically examining Punjab’s social landscape and
            contributing to a more informed, just, and equitable society.
          </p>
        </div>
      </div>
    </>
  );
}
