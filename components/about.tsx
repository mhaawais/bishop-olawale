import Image from 'next/image';
import Link from 'next/link';

const AuthorIntro = () => {
  return (
    <section className="flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Image with Animation */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center bg-gradient-to-br from-indigo-900 to-gray-900 h-[50vh] lg:h-screen">
        <div 
          className="relative w-56 h-72 sm:w-72 sm:h-88 lg:w-[22rem] lg:h-[30rem] transform translate-x-[-100%] opacity-0 animate-slide-in"
        >
          <Image 
            src="/assets/images/E-book.JPG" 
            alt="Author portrait" 
            width={448}
            height={576}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
        </div>
      </div>

      {/* Right Side - Content with Animation */}
      <div className="w-full lg:w-1/2 bg-gray-900 flex flex-col justify-center p-6 sm:p-10 lg:p-14">
        <h3 className="text-teal-400 text-lg sm:text-xl font-semibold uppercase tracking-wider opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
          MEET ALEX ——
        </h3>
        <h2 
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.3s_forwards]"
        >
          Alex K. Nguyen<br />
          <span className="text-xl sm:text-2xl lg:text-3xl">Architect of Tomorrow’s Ideas</span>
        </h2>
        <p 
          className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-prose opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards]"
        >
          Alex K. Nguyen is a trailblazing author and innovator whose stories redefine the boundaries of imagination. With a deep-rooted passion for technology and progress, Alex crafts narratives that inspire entrepreneurs, thinkers, and visionaries to embrace innovation and shape a bold future. His works blend creativity with cutting-edge concepts, captivating readers worldwide.
        </p>
        <Link 
          href="/author"
          className="mt-8 px-6 py-3 bg-teal-500 text-white font-semibold rounded-full border-2 border-teal-500 shadow-lg hover:bg-teal-800 hover:text-teal-400 hover:border-teal-400 transition-all duration-300 w-fit opacity-0 animate-[fade-in-up_0.8s_ease-out_0.5s_forwards]"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default AuthorIntro;