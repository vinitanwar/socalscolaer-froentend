import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Editorialboard = () => {
  const editorialTeam = [
    {
      role: "Editor",
      name: "Dr. Rohil Oberoi",
      designation: "",
      location: "Chandigarh, India",
      image: "/images/editor/mr-oberoi.webp",
    },
    {
      role: "Assistant Editor",
      name: "Ms. Diku M Hazarika",
      designation: "M.Phil., Research Fellow, Panjab University",
      location: "Chandigarh, India",
      image: "/images/editor/diku.webp",
    },
    {
      role: "Assistant Editor",
      name: "Mr Vishavdeep Singh",
      designation: "",
      location: "Chandigarh, India",
      image: "/images/editor/Mr-Vishavdeep-singh.webp",
    },
    {
      role: "Manager",
      name: "Ms Shamma Oberoi",
      designation: "Software Engineer",
      location: "Delhi, India",
      image: "/images/editor/shamma-oberoi.webp",
    },
  ];

  const renderCard = (member, idx) => (
    <div key={idx} className="flex flex-col items-center h-full text-center">
      <Image
        src={member.image}
        alt={member.name}
        height={300}
        width={300}
        className="rounded-full w-40 h-40 object-cover mx-auto"
      />
      <div className="p-4 flex flex-col justify-center items-center flex-grow w-full">
        <p className="text-lg">{member.role}</p>
        <p className=" font-semibold">{member.name}</p>
        <p className="">{member.designation}</p>
        <p className="">{member.location}</p>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Editorial Board
      </h1>

      {/* Top Single Card (Editor) */}
      <div className="flex justify-center mb-10">
        <Link href="/author-profile/dr-rohil-oberoi">
          {renderCard(editorialTeam[0], 0)}
        </Link>
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {editorialTeam.slice(1).map((member, idx) => renderCard(member, idx + 1))}
      </div>
    </>
  );
};

export default Editorialboard;
