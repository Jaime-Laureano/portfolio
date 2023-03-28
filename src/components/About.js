import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 object-center">
        <div className="flex flex-col object-center w-full mb-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Jaime
          </h1>
          <h2>(rhymes with lime)</h2>
          <br />
          <div className="flex justify-center">
            <img
              className="object-center w-20 h-20 animate-bounce"
              alt="lime"
              src="./lime1.png"
            />
          </div>
          <br />
          <p className="mb-8 leading-relaxed">
            I’m an aspiring web developer, currently searching for a frontend
            position that will continue to push and challenge me. I am adaptable
            and always eager to learn, and would love to find a position where I
            can continue growing and strengthening my skills. Over the past
            year, I have been doing consultancy work as a Teaching Assistant for
            the Ironhack Full Stack Web Dev bootcamp. This position has been has
            been both challenging and rewarding. It has given me the opportunity
            to increase and advance my knowledge in both front and backend web
            development. However, I am ready to challenge myself further, and
            take the next step to find a long term position in a company as a
            frontend developer.
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
        <div className="h-auto max-w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me3.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
