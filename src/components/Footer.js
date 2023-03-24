import React from "react";

function Footer() {
  return (
    <footer class="md:sticky bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-3 dark:bg-gray-800 dark:border-gray-600">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://github.com/Jaime-Laureano" class="hover:underline">
          Jaime Laureano
        </a>
        . All Rights Reserved.
      </span>
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
          <a href="#testimonials" class="hover:underline">
            References
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
