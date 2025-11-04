
import React from 'react';

interface TeamMemberCardProps {
  imgSrc: string;
  name: string;
  role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imgSrc, name, role }) => (
  <div className="text-center">
    <img className="w-32 h-32 mx-auto rounded-full shadow-lg" src={imgSrc} alt={name} />
    <h4 className="mt-4 text-xl font-semibold text-gray-800">{name}</h4>
    <p className="text-gray-500">{role}</p>
  </div>
);

const About: React.FC = () => {
    const teamMembers = [
        {
            imgSrc: "https://picsum.photos/200/200?random=1",
            name: "Jane Doe",
            role: "CEO & Founder"
        },
        {
            imgSrc: "https://picsum.photos/200/200?random=2",
            name: "John Smith",
            role: "Lead Developer"
        },
        {
            imgSrc: "https://picsum.photos/200/200?random=3",
            name: "Emily White",
            role: "UI/UX Designer"
        },
        {
            imgSrc: "https://picsum.photos/200/200?random=4",
            name: "Michael Brown",
            role: "Marketing Specialist"
        }
    ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">About Our Company</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Innovate Solutions was founded with a single mission: to empower businesses with transformative digital solutions. We believe in the power of technology and design to create meaningful connections and drive success.
          </p>
        </div>
        <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
                <img src="https://picsum.photos/800/600?random=5" alt="Our Team at work" className="rounded-lg shadow-xl"/>
            </div>
            <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h3>
                <p className="text-gray-600 mb-6">
                    Our mission is to deliver exceptional digital products through a collaborative process of innovation, creativity, and technical excellence. We strive to be a trusted partner for our clients, helping them navigate the complexities of the digital landscape. Our vision is to be a leading digital agency recognized for our creativity, quality, and commitment to client success.
                </p>
            </div>
        </div>
        <div className="mt-20">
             <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {teamMembers.map(member => (
                    <TeamMemberCard key={member.name} {...member} />
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default About;
