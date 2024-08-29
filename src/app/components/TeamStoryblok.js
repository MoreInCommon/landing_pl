"use client";
import { useState } from "react";
import React from "react";
import { storyblokEditable } from "@storyblok/react";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";
import Modal from "@/app/components/Modal";

const Team = ({ blok }) => {
  const [showModal, setShowModal] = useState(null);
  return (
    <div className="text-black mt-20 max-w-full m-auto px-full max-xl:px-tablet max-sm:px-mobile flex justify-start max-lg:justify-center items-center flex-wrap gap-5">
      {blok.member.map((person, i) => (
        <React.Fragment key={person.name} {...storyblokEditable(blok)}>
          <div
            onClick={() => setShowModal(i)}
            className="flex justify-center mb-4 p-4 max-w-[31%] max-lg:max-w-[40%] max-sm:max-w-[80%] border-t-4 border-brand-darkBlue cursor-pointer hover:shadow-tile-shadow transition-shadow"
          >
            <div className="flex gap-4 flex-col">
              <img
                src={`${person.photo.filename}/m/filters:quality(65)`}
                className="object-contain"
                alt={person?.photo.alt}
                width={365}
                height={365}
              />
              <div className="mt-4">
                <p className="text-sm">{person.position}</p>
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-black flex  justify-end">
                  Więcej{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z"
                      fill="black"
                      stroke="transparent"
                      strokeWidth="0.5"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <Modal showModal={showModal === i} setShowModal={setShowModal}>
            <div className="cursor-pointer absolute top-4 right-4 bg-white pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                onClick={() => setShowModal(null)}
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex justify-center items-start mb-4 p-4 border-t-4 border-brand-darkBlue gap-10 max-lg:flex-col max-lg:mb-0 max-sm:gap-6">
              <img
                src={`${person.photo.filename}/m/filters:quality(65)`}
                alt={person?.photo?.alt}
                className="max-lg:m-auto h-fit-content object-contain w-[365px]"
              />
              <div>
                <p className="text-sm">{person?.position}</p>
                <h3 className="text-xl font-bold">{person?.name}</h3>
                <p className="mt-4 mb-8">{person?.description}</p>
                <SocialMediaIcons
                  xUrl={person?.twitter?.url}
                  linkedinUrl={person?.linkedin?.url}
                  emailUrl={person?.email?.url}
                  inverted
                />
              </div>
            </div>
          </Modal>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Team;
