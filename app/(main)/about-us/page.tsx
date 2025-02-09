import Image from 'next/image';

const AboutPage = () => {
  const team = [
    { name: 'John', role: 'Ceo' },
    { name: 'Harry', role: 'Managing Director' },
    { name: 'John', role: 'Ceo' },
    { name: 'Harry', role: 'Managing Director' },
    { name: 'John', role: 'Ceo' },
    { name: 'Harry', role: 'Managing Director' },
    { name: 'John', role: 'Ceo' },
    { name: 'Harry', role: 'Managing Director' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-600 p-6 text-white mb-12 w-72 text-center">
          <h1 className="text-3xl font-bold">ABOUT US</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-gray-700 mb-4">
              We{' '}
              <span className="text-blue-600 font-bold">
                Print Station Nepal
              </span>
              , specialize in transforming ideas into high-quality prints that
              leave a lasting impression. With state-of-the-art technology and a
              commitment to excellence, we offer a wide range of printing
              solutions, including business cards, brochures, banners, flyers,
              packaging, and more.
            </p>
            <p className="text-gray-700">
              Our team of skilled professionals ensures precision, vibrant
              colors, and premium finishes, bringing your creative vision to
              life with unmatched quality. We are dedicated to delivering
              results that exceed expectations.
            </p>
          </div>
          <div>
            <Image
              src="/about-us.png"
              alt="Printing materials"
              width={500}
              height={500}
              className="absolute top-0 right-0"
            />
          </div>
        </div>
        x{/* Our Team Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100  relative p-4 rounded-lg mb-4 h-48">
                  <Image
                    src="/service-img.png"
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
