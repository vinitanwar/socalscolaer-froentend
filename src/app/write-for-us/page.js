import React from "react";
import Banner from "../components/Banner";
import Image from "next/image";
import Link from "next/link";
import LeftContent from "../components/LeftContent";

const page = () => {
  return (
    <>
      <Banner title="Write For Us" />
      <div className="about-author-area ">
        <div className="min-h-screen">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 py-10 px-5 lg:px-24">
            <div className="lg:col-span-8 py-6">
              <section className="">
                <div className="space-y-6 text-black text-justify">
                  <p>
                    Are you a scholar, researcher, or critical thinker
                    passionate about transforming ideas into societal impact?
                    Social Scholars Online Magazine invites contributions that
                    bridge academic insight with public discourse. Our platform
                    is committed to publishing content that is intellectually
                    rigorous yet accessible, open for informed debate, critical
                    engagement, and interdisciplinary dialogue.
                  </p>

                  <p>
                    We welcome submissions from academicians, university
                    faculty, postgraduate and Ph.D. scholars, independent
                    researchers, public intellectuals, and policy experts.
                    Contributors from diverse disciplinary backgrounds are
                    encouraged to submit, particularly those working in
                    Political Science, Sociology, History, Philosophy, Public
                    Policy, Law, Economics, Education, Religion, Culture, and
                    Indian Knowledge Systems (IKS). We also publish book
                    reviews, theoretical reflections, and field-based case
                    analyses.
                  </p>

                  <div>
                    <ul className="list-disc text-xl list-inside space-y-1">
                      <li>
                        Submissions should range between 800 to 1500 words and
                        maintain a style that is analytical yet readable,
                        avoiding excessive jargon.{" "}
                      </li>
                      <li>
                        All manuscripts must be original and unpublished, with
                        strict adherence to academic integrity and
                        plagiarism-free standards.
                      </li>
                      <li>
                        Articles should be submitted in Word format (.doc or
                        .docx).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold  mb-2">
                      How to Submit
                    </h3>
                    <p>
                      To submit your work, please email your article or pitch to{" "}
                      {""}
                      <a
                        href="mailto:socialscholars91@gmail.com"
                        className="text-blue-600 underline"
                      >
                        socialscholars91@gmail.com
                      </a>{" "}
                      with the subject line: <br />
                      <span className="">
                        Submission – [Title of Article]
                      </span>
                    </p>
                  </div>

                  <div>
                    <p>
                      Kindly include a short author bio (100–150 words)
                      mentioning your institutional affiliation and area of
                      research or expertise. A brief abstract is optional but
                      encouraged.
                    </p>
                  </div>

                  <p className="font-medium">
                    We believe in the power of knowledge to inspire change and
                    invite contributions that extend beyond academic boundaries.
                    If your research speaks to audiences outside the classroom
                    or conference hall, we welcome you to share your voice and
                    join us in shaping a more reflective and socially engaged
                    intellectual community.
                  </p>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 ">
              {/* Tags Widget */}
              <LeftContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
