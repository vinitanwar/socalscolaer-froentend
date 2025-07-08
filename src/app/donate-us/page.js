import React from "react";
import Banner from "../components/Banner";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaLink,
  FaWhatsapp,
} from "react-icons/fa6";
import LeftContent from "../components/LeftContent";

const page = () => {
  return (
    <>
      <Banner title="Donate Us" />

      <div className="min-h-screen">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 py-10 px-5 lg:px-24">
          <div className="lg:col-span-8 px-0 lg:px-0">
            <section className="px-0 py-6 max-w-6xl mx-auto sticky top-20 ">
              {/* Image */}

              {/* Text Content */}
              <div className="space-y-6 text-black  leading-relaxed text-justify">
                <h6 className="font-semibold text-2xl">Support Us</h6>

                <p>
                   This initiative is not funded by external
                  sources but is powered by my dedication to providing
                  high-quality, rigorous content. To continue our work and make
                  a larger impact, we need your support.
                </p>

                <p>
                  If you believe in our mission, please consider donating to The
                  Social Scholars magazine. Your contribution will enable us to produce
                  more scholarly articles, amplify voices that need to be heard,
                  and ensure that India’s perspective is properly represented on
                  the global stage.
                </p>

                <div className="flex justify-start mb-8">
                  <Image
                    src="/images/donate.webp"
                    alt="Donate to Social Scholars"
                    width={277}
                    height={263}
                    className="rounded-lg object-contain"
                    priority
                  />
                </div>

                <p>
                  Additionally, if you wish to contribute your own work, we
                  welcome submissions. Please contact us at{" "}
                  <a
                    href="mailto:contact@socialscholars.in"
                    className="text-blue-600 underline"
                  >
                    contact@socialscholars.in
                  </a>
                  . After examining your piece, it may be published on our
                  platform. Together, through both your generous support and
                  intellectual contributions, we can make Indian perspectives{" "}
                  <strong>loud</strong> and <strong>clear</strong>.
                </p>

                <p className="font-semibold">Thanks for your Support!</p>
              </div>

              {/* Social Share */}
              <div className="mt-10">
                <p className="font-semibold text-xl mb-4">Share this page</p>
                <div className="flex gap-4 text-white">
                  <a
                    href="https://www.facebook.com/share.php?u=https%3A%2F%2Fsocialscholars.in%2Fdonate-us%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 rounded-full hover:opacity-80"
                    title="Share on Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fsocialscholars.in%2Fdonate-us%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 p-3 rounded-full hover:opacity-80"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://twitter.com/intent/tweet?text=Donate%20Us%20-%20https%3A%2F%2Fsocialscholars.in%2Fdonate-us%2F%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black p-3 rounded-full hover:opacity-80"
                    title="Share on X"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://socialscholars.in/?p=304"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-full hover:opacity-80"
                    title="Copy short link"
                  >
                    <FaLink />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?text=Donate%20Us%20https%3A%2F%2Fsocialscholars.in%2Fdonate-us%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 p-3 rounded-full hover:opacity-80"
                    title="Share on WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-4 ">
            <LeftContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
