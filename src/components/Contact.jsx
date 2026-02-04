function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Contact Me
        </h2>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
