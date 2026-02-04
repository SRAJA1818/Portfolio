function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto min-h-[85vh] px-6 flex flex-col justify-center">

        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Hi, I’m Raja 👋
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Aspiring Software Engineer passionate about building clean,
          scalable web applications and solving real-world problems
          using modern technologies.
        </p>

        <div className="flex gap-5">

          <a
            href="#projects"
            className="px-7 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;
