function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind",
            "Node.js",
            "MongoDB",
            "Git",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition font-medium"
            >
              {skill}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
