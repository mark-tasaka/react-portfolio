import React, { useEffect } from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const UFO = () => {
  const projectImages = [
    {
      type: 'single',
      id: 1,
      src: "/images/ufo/ufo_1.jpg",
      alt: "UFO Report magazine mockups cover page and interior",
      description: "Magazine mock ups: Cover page and magazine interior"
    },
    {
      type: 'single',
      id: 2,
      src: "/images/ufo/ufo_2.jpg", 
      alt: "UFO Report magazine cover page",
      description: "UFO Reports cover page"
    },
    {
      type: 'single',
      id: 3,
      src: "/images/ufo/ufo_3.jpg",
      alt: "UFO Report magazine interior pages", 
      description: "Magazine interior"
    },
    {
      type: 'single',
      id: 4,
      src: "/images/ufo/ufo_4.jpg",
      alt: "UFO Report tablet mockup cover page",
      description: "Tablet mock up: cover page"
    },
    {
      type: 'single',
      id: 5,
      src: "/images/ufo/ufo_5.jpg",
      alt: "UFO Report tablet mockup article",
      description: "Tablet mock up: article"
    },
    {
      type: 'single',
      id: 6,
      src: "/images/ufo/ufo_6.jpg",
      alt: "UFO Report mobile device mockups",
      description: "Mobile device mock ups: cover page and article"
    },
    {
      type: 'single',
      id: 7,
      src: "/images/ufo/ufo_7.jpg",
      alt: "Acumin font specimen used for UFO Report",
      description: "Font used for this project"
    }
  ];

  const projectTitle = "UFO Report";
  const projectDescription = `'UFO Report: Scientific Study of UAPs' is a fictional magazine that focuses on applying scientific research to the study of Unidentified Aerial Phenomenon, or UAP for short (UAP is the term for UFOs commonly used by the scientific and defense communities). UFO Report takes a serious look at the study UAP, using the scientific methods to examine the UFO phenomenon. Therefore, it was important that I took a 'serious scientific look' in the presentation of the magazine, which will appeal to an audience that wishes to explore the topic in a serious manner.

To reflect this, I choose a 'conservative style to the design of the magazine, by using black and white text, with the photos and text fitting neatly on the page. I used the two-column approach to the text (versus the three-column), as I felt this look better mirrors academic and scientific publications. As well, I choose a font (Acumin) that matches the scientific look of the magazine.`;


  useEffect(() => {
    document.title = `Mark Tasaka - ${projectTitle}`;
    return () => {
      document.title = "Mark Tasaka";
    };
  }, [projectTitle]);


  return (
    <ProjectLayout activePage="work">
      <Header activePage="work" />
      <main>
        <section className="page standard-modules">
          <header className="page-header content">
            <h1 className="title">{projectTitle}</h1>
            <p className="description">{projectDescription}</p>
          </header>
          <ProjectGallery images={projectImages} />
        </section>
        <BackToTop />
      </main>
    </ProjectLayout>
  );
};

export default UFO;