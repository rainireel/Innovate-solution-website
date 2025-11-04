
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, avatar }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <div className="flex items-center">
      <img className="w-12 h-12 rounded-full mr-4" src={avatar} alt={author} />
      <div>
        <p className="font-bold text-gray-800">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "Working with Innovate Solutions was a game-changer for our business. Their team is professional, creative, and delivered a product that exceeded our expectations.",
            author: "Sarah Johnson",
            company: "CEO of TechCorp",
            avatar: "https://picsum.photos/100/100?random=6"
        },
        {
            quote: "The attention to detail and commitment to quality is unparalleled. They truly understood our vision and brought it to life beautifully. Highly recommended!",
            author: "David Chen",
            company: "Founder of Marketify",
            avatar: "https://picsum.photos/100/100?random=7"
        },
        {
            quote: "From start to finish, the communication was excellent. The new website has significantly improved our user engagement and conversion rates.",
            author: "Maria Garcia",
            company: "Marketing Director at Creative Minds",
            avatar: "https://picsum.photos/100/100?random=8"
        }
    ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">We are proud to have built strong relationships with our clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
