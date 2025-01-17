import React from "react";
//import ProfilePic from "../components/Assets/";
import { AiFillStar } from "react-icons/ai";
import {Container} from "@mui/material";

import av1 from "../Assets/avatars/avatar.webp";
import av2 from "../Assets/avatars/avatar-1.webp";
import av3 from "../Assets/avatars/avatar-2.webp";
import av4 from "../Assets/avatars/avatar-3.webp";
import av5 from "../Assets/avatars/avatar-4.webp";

const Testimonial = () => {
  return (
      <div className="text-gray-600 dark:text-gray-300" id="testimonials">
        <Container>
          <div className="mb-20 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              We have some fans.
            </h2>
          </div>
          <div className=" md:columns-2 lg:columns-3 row-auto gap-4 space-y-8">
            <div className="break-inside-avoid-column aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={av1} alt="user avatar" width="400" height="400" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                  </div>
              </div>
              <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
            <div className=" break-inside-avoid-column aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={av2} alt="user avatar" width="200" height="200" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
                  </div>
              </div>
              <p className="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
            <div className=" break-inside-avoid-column  aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={av3} alt="user avatar" width="200" height="200" loading="lazy"/>
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
                  </div>
              </div>
              <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
            <div className=" break-inside-avoid-column aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={av4} alt="user avatar" width="200" height="200" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                  </div>
              </div>
              <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
            <div className=" break-inside-avoid-column  aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={av5} alt="user avatar" width="200" height="200" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
                  </div>
              </div>
              <p className="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>
            <div className=" break-inside-avoid-column  aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={av2} alt="user avatar" width="400" height="400" loading="lazy" />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                  </div>
              </div>
              <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
            </div>

          </div>
        </Container>
      </div>
  );
};

export default Testimonial;