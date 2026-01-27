import React from 'react';
import Header from './inc/Header';
import { ProjectPage } from './inc/Module';
import './css/Pages.css';

const EndUapSecrecy = () => {
  const projectImages = [
    {
      type: 'single',
      id: 1,
      src: "/images/uap-secrecy/uap_secrecy_1.jpg",
      alt: "End UAP Secrecy Vinyl laptop sticker",
      description: "End UAP Secrecy Vinyl laptop sticker"
    },
    {
      type: 'single',
      id: 2,
      src: "/images/uap-secrecy/uap_secrecy_2.jpg", 
      alt: "End UAP Secrecy Vinyl bumper sticker",
      description: "End UAP Secrecy Vinyl bumper sticker"
    },
    {
      type: 'single',
      id: 3,
      src: "/images/uap-secrecy/uap_secrecy_3.jpg",
      alt: "End UAP Secrecy promotional mugs", 
      description: "End UAP Secrecy promotional mugs"
    },
    {
      type: 'single',
      id: 4,
      src: "/images/uap-secrecy/uap_secrecy_4.jpg",
      alt: "Font used for End UAP Secrecy",
      description: "Font used for End UAP Secrecy"
    }
  ];

  const projectTitle = "End UAP Secrecy";
  const projectDescription = `End UAP Secrecy is a branding project designed to create material for the End UAP Secrecy movement. 
    UAPs, short for Unidentified Aerial Phenomena, is an alternative term for UFOs, which has been adopted 
    for the scientific study of the phenomenon. The goal of this project is to create affordable and highly 
    visible branding materials, which takes the form of vinyl laptop stickers, bumper stickers and mugs.`;

  return (
    <ProjectPage 
      title={projectTitle}
      description={projectDescription}
      images={projectImages}
      activePage="work"
      Header={Header}
    />
  );
};

export default EndUapSecrecy;