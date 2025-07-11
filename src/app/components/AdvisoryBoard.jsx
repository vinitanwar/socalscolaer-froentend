import Image from 'next/image';
import React from 'react'

const AdvisoryBoard = () => {


    const advisoryBoard = [
        {
            name: "Prof (Dr.) Devinder Singh",
            designation:
                "Hon'ble Vice Chancellor, Dr BR Ambedkar National Law University (DBRANLU)",
            location: "Sonipat, India",
            image: "/images/editor/devinder-singh.webp",
        },
        {
            name: "Prof (Dr.) Kuldip Singh",
            designation:
                "Former Professor, Department of Political Science, Guru Nanak Dev University",
            location: "Amritsar, India",
            image: "/images/editor/kuldeep.webp",
        },
        {
            name: "Ms. Chitleen K Sethi",
            designation: "Associate Editor with ThePrint.",
            location: "India",
            image: "/images/editor/Chitleen-K-Sethi.webp",
        },
        {
            name: "Prof (Dr.) Priyatosh Sharma",
            designation: "Professor, Department of History, Panjab University",
            location: "Chandigarh, India",
            image: "/images/editor/priyatosh-sharma.webp",
        },
        {
            name: "Prof (Dr.) Harish Thakur",
            designation:
                "Professor, Department of Political Science, Himachal Pradesh University",
            location: "Shimla, India",
            image: "/images/editor/harish-thakur.webp",
        },
        {
            name: "Dr. Kanwalpreet Kaur",
            designation:
                "Associate Professor, Department of Political Science, DAV College, Sector 10",
            location: "Chandigarh, India",
            image: "/images/editor/Kanwalpreet-Kaur.webp",
        },
        {
            name: "Dr. Ravinder Kaur",
            designation:
                "Assistant Professor, Department of English & Cultural Studies, CDO, Panjab University",
            location: "Chandigarh, India",
            image: "/images/editor/ravinder-kaur.webp",
        },
        {
            name: "Prof (Dr.) Ashok Kumar",
            designation: "Professor, Department of Hindi, Panjab University",
            location: "Chandigarh, India",
            image: "/images/editor/ashok-kumar.webp",
        },
        {
            name: "Prof (Dr.) Rajan Bhandari",
            designation: "Professor, Department of Geography, ",
            location: "Central University of Punjab, Bhatinda ",
            image: "/images/editor/Rajan_Bhandari3.webp",
        },
        {
            name: "Dr. Neeraj Kumar Singh",
            designation: "Deputy Librarian, Panjab University",
            location: "Chandigarh, India",
            image: "/images/editor/neeraj.webp",
        },
    ];

    return (
        <>
            <h2 className="text-3xl font-bold text-center mt-12 mb-6 ">
                Advisory Board
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {advisoryBoard.map((member, idx) => (
                    <div key={idx} className="flex flex-col h-full">
                        <Image
                            src={member.image}
                            alt={member.name}
                            height={300}
                            width={400}
                            className=" rounded-full w-40 h-40  mx-auto"
                        />

                        <div className="p-4 flex flex-col flex-grow">
                            <p className="text-lg font-semibold text-center">
                                {member.role}
                            </p>
                            <p className="text-lg font-semibold text-center">
                                {member.name}
                            </p>
                            <p className=" text-center">
                                {member.designation}
                            </p>
                            <p className="  text-center">
                                {member.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default AdvisoryBoard