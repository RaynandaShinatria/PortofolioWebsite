import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white font-sans">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 py-16 max-w-full mx-auto bg-[url('/static/software.jpg')] bg-cover bg-right-top">
        <img src="/static/2x3.png" alt="Foto Profil" className="rounded-full mb-6 w-70 h-100" />
        <h1 className="text-4xl font-bold text-white pt-5 font-serif" style={{textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',}}>
          Raynanda Shinatria
        </h1>
        <h1 className="text-2xl font-bold text-blue-200 pt-3" style={{textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',}}>
        Software Engineer
        </h1>
        <p className="text-white pt-10" style={{textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',}}>
          &quot;Building scalable and high-performance web solutions for your business needs.&quot;
        </p>
        <Link href="#contact" scroll={true} className="mt-6 flex">
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">Contact Me</button>
        </Link>
      </section>

{/* About me */}
      <section className="flex flex-col items-center text-center px-4 py-16 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">
        About Me
        </h1>
        <p className="text-gray-400 mt-10">
         I&apos;m a passionate Software Engineer with a strong focus on building efficient, scalable, and user-friendly applications. With a background in both frontend and backend development, I enjoy solving complex problems and turning ideas into reality through clean, maintainable code.
         Over the years, I&apos;ve worked with various technologies including JavaScript, TypeScript, React, Node.js, and Python. I&apos;m also experienced in working with cloud platforms like AWS and using tools such as Docker, Git, and CI/CD pipelines to ensure smooth deployment and collaboration.
         Beyond code, I value clear communication, continuous learning, and building software that actually makes people&apos;s lives better. Whether working independently or in a team, I always strive to deliver high-quality solutions that meet real-world needs.        </p>
      </section>

      {/* My Skill */}
      <section className="text-center px-4 py-16">
        <h2 className="text-2xl font-bold">My Skills</h2>
        <div className="flex justify-center gap-15 mt-10">
          <img src="/static/js.webp" className="h-20" alt="JS" />
          <img src="/static/nodejs.webp" className="h-20" alt="Node.js" />
          <img src="/static/html.png" className="h-20" alt="HTML" />
          <img src="/static/css.png" className="h-20" alt="CSS" />
          <img src="/static/docker.png" className="h-20" alt="Docker" />
          <img src="/static/next.webp" className="h-20" alt="Next_JS" />
        </div>
      </section>

      {/* Portofolio */}
      <section className="px-4 py-16">
        <h2 className="font-bold text-2xl mb-6 text-center">Portofolio</h2>
        <div className="flex justify-center mt-10">
          <Link href="/portofolio-page" className="bg-gray-900 rounded-xl overflow-hidden max-w-xl">
            <img src="/static/carousel.jpg" alt="Foto Portofolio" />
            <div className="p-4">
              <h3 className="font-bold text-lg">E-commerce Platform for Carousell.Ltd</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className="px-4 py-16">
        <h2 className="font-bold text-2xl mb-10 text-center">Experience</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div>
            <h3 className="font-bold text-white">Lead Software Engineer at Tokopedia <span className="float-right text-sm text-gray-400">Nov 2019 - Present</span></h3>
            <p className="text-gray-400 text-sm mt-1">As a Senior Software Engineer at Tokopedia, I played a pivotal role in developing innovative solutions for Tokopedia’s core search algorithms...</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Junior Software Engineer at Lazada <span className="float-right text-sm text-gray-400">Jan 2016 - Dec 2017</span></h3>
            <p className="text-gray-400 text-sm mt-1">During my tenure at Lazada, I held the role of Software Architect, where I played a key role in shaping the architecture...</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Software Engineer at Shopee <span className="float-right text-sm text-gray-400">Jan 2017 - Oct 2019</span></h3>
            <p className="text-gray-400 text-sm mt-1">At Shopee, I served as a Software Engineer, focusing on the design and implementation of backend systems...</p>
          </div>
        </div>
      </section>

{/* Testimonial */}
      <section className="flex flex-col items-center text-center px-4 py-16 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-10">
        Testimonial
        </h1>
        <img src="/static/testimonial.webp" alt="Foto Testimoni" className="w-50 h-55 mb-6" />
        <p className="text-gray-400 mt-4">
         &quot;Working with Ray has been a game-changer for our team. His ability to break down complex problems and deliver clean, efficient code under tight deadlines is truly impressive. He doesn’t just write code — he engineers scalable solutions that last.&quot;
          <br />
          <br />
          — John Smith Thompson, Project Manager at TechNova Inc.</p>
      </section>

      {/* Contact Me */}
      <footer id="contact" className="mt-20 px-8 py-12 bg-[#0d0d0d]">
        <div className="text-center text-2xl text-gray-400 mx-auto">Contact Me:
          <div className="flex justify-center mt-10 gap-10">
            <a href="https://wa.me/qr/RTY5UKNGROUVN1" target="_blank">
             <img src="/static/wa.webp" className="w-10" /> </a>
            <a href="https://www.linkedin.com/in/raynandashinatria" target="_blank">
             <img src="/static/linkedin.png" className="w-10" /> </a>
            <a href="mailto:raynanda.shinatria@gmail.com" target="_blank">
             <img src="/static/gmail.png" className="w-10" /> </a>
          </div>
        </div>
      </footer>
    </main>
  );
}