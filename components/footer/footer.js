"use client";

import React, { useState } from "react";
import Form from "../form/form";
import Link from "next/link";
import {
  BehanceLogo,
  DribbbleLogo,
  FigmaLogo,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="container border border-[#202020] border-t-0 py-16">
        <h2 className="text-white text-4xl font-bold mb-2">
          Vamos bater um papo?
        </h2>
        <p className="max-w-md text-[#BABABA] text-base font-medium mb-10">
          Se meus projetos te agradaram ou a minha forma de pensar, estou
          disponível para uma conversa e trocarmos ideia sobre alguns projetos
          ou sobre a vida.
        </p>

        <Form />

        <div className="flex flex-wrap max-w-xl justify-between mt-16">
          <Link href="https://dribbble.com/mesquitadev_" target="_blank">
            <div className="p-3 w-fit bg-[#202020] rounded-md hover:-translate-y-1 transition-all">
              <DribbbleLogo size={32} color="#fff" />
            </div>
          </Link>

          <Link href="https://github.com/mesquita-dev" target="_blank">
            <div className="p-3 w-fit bg-[#202020] rounded-sm hover:-translate-y-1 transition-all">
              <GithubLogo size={32} color="#fff" />
            </div>
          </Link>

          <Link href="https://www.behance.net/mesquitadev" target="_blank">
            <div className="p-3 w-fit bg-[#202020] rounded-sm hover:-translate-y-1 transition-all">
              <BehanceLogo size={32} color="#fff" />
            </div>
          </Link>

          <Link href="https://figma.com/@mesquitadev" target="_blank">
            <div className="p-3 w-fit bg-[#202020] rounded-sm hover:-translate-y-1 transition-all">
              <FigmaLogo size={32} color="#fff" />
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/mesquita-dev/" target="_blank">
            <div className="p-3 w-fit bg-[#202020] rounded-sm hover:-translate-y-1 transition-all">
              <LinkedinLogo size={32} color="#fff" />
            </div>
          </Link>

          <Link href="https://wa.link/5xl2k8" target="_blank">
            <div className="p-3 w-fit bg-[#202020] rounded-sm hover:-translate-y-1 transition-all">
              <WhatsappLogo size={32} color="#fff" />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
