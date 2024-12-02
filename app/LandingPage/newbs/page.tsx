"use client";

import React, { useState } from "react";
import Link from "next/link";
import leetcodeLogo from "app/logo/leetcodelogo.png"; // Replace with actual path
import atcoderLogo from "./atcoder.png";
import codeforcesLogo from "./codeforces.png";
import gfgLogo from "./gfg.png";
import ProblemTable from "./ProblemTable";

export default function Layout() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6495ED] via-[#f7f7f7] to-[#f7f7f7] text-gray-900 font-sans flex flex-col items-center p-8">
      {/* Outer Container */}
      <div className="border border-gray-300 rounded-lg w-3/4 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="border border-[#f7f7f7] rounded-md px-4 py-2 text-center mb-4 bg-[#0047AB]">
            <h1 className="text-lg font-bold text-white">Preface</h1>
          </div>
          <div className="text-center space-y-6">
            <p className="text-md text-gray-700">
              First off, apologies for calling you all newbs—it's all in good
              fun, I promise! This section is your ultimate beginner's guide.
              Here, you'll find everything you need to kickstart your
              programming journey and take those first steps toward becoming a
              pro. So, let's dive in!
            </p>
            <p className="text-md text-gray-700">
              I've crafted this for those who have just dipped their toes into
              coding and are figuring out where to go next. If you're battling
              easy problems on LeetCode or grinding through 800-1000 rated
              problems on Codeforces, you're in the right place! I'll share a
              bit about how to start and some tried-and-true strategies that
              worked for me.
            </p>
            <p className="text-md text-gray-700">
              The most important ingredients in this long journey? Hard work and
              patience. Seriously, you won't become a pro in a day, a week, or
              even a month. It takes time, so keep at it and trust the process.
              Stay patient and keep grinding!
            </p>
            <p className="text-md text-gray-700">
              Now, without further ado, let's get into the essentials. Some
              basic data structures and algorithms you absolutely need to know
              include: arrays, strings, stacks, queues, trees, graphs, sorting
              algorithms, and searching algorithms. These form the foundation of
              problem-solving, so master them first!
              <br />
              <br />I can safely assume that you know the basic knack of
              programming i.e you know what a variable is, what a loop is, what
              a function is, etc. If you don't, I suggest you to learn the
              basics of programming first. We are in for a long ride, so buckle
              up!
            </p>
          </div>
        </div>

        {/* Expandable Section */}
        <div className="border border-[#ff8a00] rounded-md p-4 mb-6 bg-[#ADD8E6] shadow-md hover:shadow-xl transition-all duration-300">
          <h3
            className="text-md font-bold cursor-pointer mb-2 text-[#000080] hover:text-[#0437F2]"
            onClick={toggleExpansion}
          >
            {isExpanded ? "Language Preference" : "Language Preference"}
          </h3>
          {isExpanded && (
            <div className="mt-2 text-sm space-y-3 text-gray-800">
              <p>
                Literally the most asked question when starting out:{" "}
                <b>Which language should I learn first?</b>
              </p>
              <p>
                The answer is basically whatever you are comfortable with. But,
                I would suggest you to start with <b>Python</b> or <b>C</b>.
              </p>
              <p>
                I started with C, the OG of programming languages. It's like the
                foundation of all other languages—tough to crack at first, but
                once you do, you feel like a coding wizard. Learning memory
                management in C was a wild ride; it's like learning how to drive
                stick before switching to an automatic. After about 2-3 months
                of wrestling with pointers and segfaults, I decided to level up
                to
                <b>C++</b>.
              </p>
              <p>
                Now, learning <b>Python</b>, on the other hand, is like
                upgrading to a luxury car with autopilot. It's super easy to
                pick up, packed with libraries, and opens doors to machine
                learning, where you can truly see Python flex its muscles. Trust
                me, once you've tried both, you'll see why Python is the chill,
                “let's-have-fun” language, while C is like boot camp for coders.
              </p>
              <p>
                As I mentioned earlier, let's talk about the special case of{" "}
                <b>Java</b>. Java is fantastic for app development, especially
                for Android. But for DSA? Eh, not my top pick. It's a bit
                verbose and has a steeper learning curve. That said, if you're
                comfortable with it, go for it! After all, the best language is
                the one you stick with.
              </p>
              <p>
                If you're diving into C, I highly recommend the book{" "}
                <b>"Let Us C"</b>. It's an absolute gem for learning the
                language, and in my opinion, the best resource out there. You
                can buy it online or hunt down a PDF version if you're feeling
                adventurous.
              </p>
              <p>
                Now, if Python is on your radar, you're in for a treat. For
                beginners, I'd suggest checking out
                <a
                  href="https://www.learnpython.org"
                  target="_blank"
                  className="text-[#0437F2] hover:text-[#ff5a00] underline"
                >
                  LearnPython.org
                </a>
                . It's interactive and super fun. For something more in-depth,
                the book <b>"Automate the Boring Stuff with Python"</b> is
                amazing—it's practical and teaches you how to write programs
                that actually solve real-world problems. You can also explore
                <a
                  href="https://docs.python.org/3/tutorial/"
                  target="_blank"
                  className="text-[#0437F2] hover:text-[#ff5a00] underline"
                >
                  Python's official documentation
                </a>{" "}
                for advanced topics.
              </p>
            </div>
          )}
        </div>

        {/* Topics Section */}
        <div className="border border-[#ff8a00] rounded-md p-6 mb-4 bg-[#fff8e1] shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-bold mb-2 text-[#ff8a00]">Basic Data Structues: </h3>
          <p className="text-sm text-gray-600">
            The resources are in the context of C/C++, but the concept remains
            the same for all languages.
          </p>
          <ul className="list-none space-y-3 mt-4">
            <li>
              <strong> List / Array</strong>
              <a
                href="https://example.com/array-video"
                className="text-blue-500 hover:text-[#ff5a00] ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </a>
              <a
                href="https://www.geeksforgeeks.org/what-is-array/"
                className="text-blue-500 hover:text-[#ff5a00] ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </a>
            </li>
            <li>
              <strong>Stack</strong>
              <a
                href="https://example.com/stack-video"
                className="text-blue-500 hover:text-[#ff5a00] ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </a>
              <a
                href="https://www.geeksforgeeks.org/stack-data-structure/"
                className="text-blue-500 hover:text-[#ff5a00] ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </a>
            </li>
            <li>
              <strong>Queue/Deque</strong>
              <a
                href="https://example.com/queue-video"
                className="text-blue-500 hover:text-[#ff5a00] ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </a>
              <a
                href="https://geeksforgeeks.org/queue-data-structure/"
                className="text-blue-500 hover:text-[#ff5a00] ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </a>
            </li>
            <li className="mb-2">
              <strong>HashMap</strong>
              <a
                href="https://example.com/map-video"
                className="text-blue-500 hover:text-[#ff5a00] hover:underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </a>
              <a
                href="https://www.geeksforgeeks.org/how-to-use-hashmap-in-cpp/"
                className="text-blue-500 hover:text-[#ff5a00] hover:underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </a>
            </li>
            <li className="mb-2">
              <strong>Set</strong>
              <a
                href="https://example.com/set-video"
                className="text-blue-500 hover:text-[#ff5a00] hover:underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </a>
              <a
                href="https://www.geeksforgeeks.org/set-in-cpp-stl/"
                className="text-blue-500  hover:text-[#ff5a00] hover:underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </a>
            </li>
            <li className="mb-2">
              <strong>Priority Queue</strong>
              <a
                href="https://example.com/priority-queue-video"
                className="text-blue-500  hover:text-[#ff5a00] hover:underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </a>
              <a
                href="https://www.geeksforgeeks.org/priority-queue-in-cpp-stl/"
                className="text-blue-500 hover:text-[#ff5a00] hover:underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </a>
            </li>
          </ul>
        </div>
        {/* Algorithm Section */}
        <div className="border border-[#ff8a00] rounded-md p-6 mb-4 bg-[#fff8e1] shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-md font-bold mb-2 text-[#ff8a00]">
            Basic Algorithms:
          </h3>
         <ul>
            <li className="mb-2">
                <strong>Searching</strong>
                <a
                    href="https://youtu.be/sSYQ1H9-Vks?si=AA-_NeYF6X46I2H5"
                    className="text-blue-500 hover:text-[#ff5a00] ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Video
                </a>
                <a
                    href="https://www.geeksforgeeks.org/searching-algorithms/"
                    className="text-blue-500 hover:text-[#ff5a00] ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Article
                </a>
            </li>
            <li className="mb-1">
            <strong>Sorting</strong>
                <a
                    href="https://www.youtube.com/watch?v=KI3xrHqfWDc&list=PLEJXowNB4kPxse7iinEzb6FivjtQVxOXIo"
                    className="text-blue-500 hover:text-[#ff5a00] ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Video
                </a>
                <a
                    href="https://www.geeksforgeeks.org/sorting-algorithms/"
                    className="text-blue-500 hover:text-[#ff5a00] ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Article
                </a>
            </li>
         </ul>
          <br />
        </div>
        {/* Practice Problems */}
        <div className="border border-[#ff8a00] rounded-md p-6 mb-4 bg-[#fff8e1] shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="text-md font-bold mb-2 text-[#ff8a00]">
            Practice Problems:
          </h3>
          <p className="text-sm text-gray-600">
            The problems are mixed in terms of difficulty and topics, so use
            your knowledge and intuition to devise the solution.
          </p>
          <br />
          <div>
            <ProblemTable />
          </div>
        </div>
      </div>
    </div>
  );
}
