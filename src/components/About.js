import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Jaime.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            ADD AN INTRODUCTION HERE Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum
            cupiditate voluptas? Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me2.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
