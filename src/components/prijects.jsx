function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">

            <h3 className="text-2xl font-semibold mb-2">
              Live Chat App
            </h3>

            <p className="text-gray-600 mb-4">
              Real-time chat application with file sharing using
              Socket.io and MongoDB.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: React, Node.js, MongoDB, Socket.io
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo
              </a>

            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">

            <h3 className="text-2xl font-semibold mb-2">
              Portfolio Website
            </h3>

            <p className="text-gray-600 mb-4">
              Personal portfolio built with React and Tailwind CSS.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: React, Tailwind, Vite
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                Live Demo
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
