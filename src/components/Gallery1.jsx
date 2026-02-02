import React, { useEffect } from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const Gallery1 = () => {
  const projectImages = [
    // Single image - art1_1.jpg
    {
      type: 'single',
      id: 'single1',
      src: "/images/art-gallery1/art1_1.jpg",
      alt: "DCC Eastern Adventures Mock Up",
      description: "A mock up of Dungeon Crawl Classics Eastern Adventures, a tabletop role-playing book I wrote and illustrated."
    },
    // Single image - art1_1.jpg
    {
      type: 'single',
      id: 'single2',
      src: "/images/art-gallery1/art1_2-4.jpg",
      alt: "Eastern Adventures Cover Art",
      description: "The cover art for Eastern themed role-playing books I designed.  I have published White Box Eastern Adventures (right) and am in the process of writing Red Box Eastern Adventures (left)."
    },
    {
      type: 'triple',
      id: 'triple2',
      images: [
        {
          src: "/images/art-gallery1/art1_5.jpg",
          alt: "DCC Eastern Adventures Character Sheet"
        },
        {
          src: "/images/art-gallery1/art1_6.jpg",
          alt: "Labrynth Lord Character Sheet"
        },
        {
          src: "/images/art-gallery1/art1_7.jpg",
          alt: "DCC Greenleaf Adventures Character Sheet"
        }
      ],
      description: "Created with a digital pen in Photoshop, these Role-Playing Game character sheet have been design to capture the 'Old School' pencil-and-paper style of the early days of the RPG hobby."
    },
    // Single image - art1_1.jpg
    {
      type: 'single',
      id: 'single3',
      src: "/images/art-gallery1/art1_8-10.jpg",
      alt: "Pencil and Paper Sketches (Sohei Warrior Monks)",
      description: "Digital art illustration created with Adobe Photoshop."
    },
    // Triple images - art1_11.jpg, art1_12.jpg, and art1_13.jpg
    {
      type: 'triple',
      id: 'triple4',
      images: [
        {
          src: "/images/art-gallery1/art1_11.jpg",
          alt: "Beneath the Giant's Head Module Cover"
        },
        {
          src: "/images/art-gallery1/art1_12.jpg",
          alt: "The Cate and the Resurection Module Cover"
        },
        {
          src: "/images/art-gallery1/art1_13.jpg",
          alt: "Murt's Miscalculations Module Cover"
        }
      ],
      description: "The cover art for three Dungeon Crawl Classics adventure books I wrote and illustrated.  Physical copies of these adventure modules are available to order on DriveThruRPG."
    },
    // Triple images - art1_14.jpg, art1_15.jpg, and art1_16.jpg
    {
      type: 'triple',
      id: 'triple5',
      images: [
        {
          src: "/images/art-gallery1/art1_14.jpg",
          alt: "Mutant Crawl Classics Character Sheet"
        },
        {
          src: "/images/art-gallery1/art1_15.jpg",
          alt: "Basic Fantasy RPG Character Sheet"
        },
        {
          src: "/images/art-gallery1/art1_16.jpg",
          alt: "DCC Empire of the East Character Sheet"
        }
      ],
      description: "Created with a digital pen in Photoshop, these Role-Playing Game character sheet have been design to capture the 'Old School' pencil-and-paper style of the early days of the RPG hobby."
    }
  ];

  const projectTitle = "Art Gallery 1";
  const projectDescription = `The digital art pieces in this gallery were hand-drawn with a digital pen tool in Adobe Photoshop. The illustrations are for my hobby role-playing game websites, and for a series of tabletop game books I published.`;

  // Update document title when component mounts
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

export default Gallery1;