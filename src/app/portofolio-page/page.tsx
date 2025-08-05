import Image from 'next/image';


export default function PortofolioPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white font-sans">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 py-16 max-w-2xl mx-auto">
        <img src="/static/carousel.jpg" alt="Foto Profil" className="w-full h-90 mb-6" />
        <h1 className="text-3xl font-bold py-5">
          E-commerce Platform for Carousell.Ltd
        </h1>
          <div className="text-gray-400 mt-4">
           <p>Carousell.Ltd, an established retail company, sought to expand into e-commerce to reach a wider audience and streamline its sales processes. They needed a scalable, user-friendly platform to support both desktop and mobile users with features like product browsing, user reviews, secure checkout, and real-time inventory updates.
           </p>
           <br/>
           <p>I was responsible for building the front-end and back-end components of the platform, ensuring seamless integration with the client’s inventory and payment systems. The project goal was to create an efficient, high-performing application with a smooth user experience.
           </p>
           <br/>
           <p>Using React for the front-end, I designed a responsive, intuitive UI focused on user engagement and easy navigation. On the back end, I developed RESTful APIs with Node.js and MongoDB for data management. Additionally, I integrated the platform with AWS to optimize loading times and set up a CI/CD pipeline for faster deployment and testing. I worked closely with designers and QA to address usability and accessibility standards.
           </p>
           <br/>
           <p>The project was completed on time, leading to a 35% increase in online sales within the first three months. User feedback highlighted the site's speed and ease of use, and the client reported a substantial reduction in manual inventory management tasks.
           </p>
        </div>
      </section>
    </main>
  );
}