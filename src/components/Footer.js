import React from "react";

function Footer() {
  return (
    <footer class="md:sticky bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-gray-800 dark:border-gray-600">
      <div className="flex flex-wrap items-center">
        <a href="https://www.youtube.com/watch?v=je98UffdN18" className="">
          <img className=" w-7 h-7 ml-5" alt="lime" src="./lime3.png" />
        </a>
        <a href="https://github.com/Jaime-Laureano" className="">
          <img className=" w-7 h-7 ml-7" alt="github" src="./github.png" />
        </a>{" "}
        <a href="https://www.linkedin.com/in/jaime-laureano/" className="">
          <img className=" w-7 h-7 ml-7" alt="linkedin" src="./linkedin.png" />
        </a>
      </div>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#about" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#projects" class="mr-4 hover:underline md:mr-6">
            Past Work
          </a>
        </li>
        <li>
          <a href="#skills" class="mr-4 hover:underline md:mr-6">
            Skills
          </a>
        </li>
        <li>
          <a href="#testimonials" class="hover:underline mr-4">
            References
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
