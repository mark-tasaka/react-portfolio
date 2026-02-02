import React, { useEffect } from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const Gallery1 = () => {
  const projectImages = [
    // Single image - art1_1.jpg
    {
      type: 'single',
      id: 1,
      src: "/images/art-gallery1/art1_1.jpg",
      alt: "Digital art illustration 1",
      description: "A mock up of Dungeon Crawl Classics Eastern Adventures, a tabletop role-playing book I wrote and illustrated."
    },
    // Single image - art1_1.jpg
    {
      type: 'single',
      id: 1,
      src: "/images/art-gallery1/art1_2-4.jpg",
      alt: "Digital art illustration 1",
      description: "Digital art illustration created with Adobe Photoshop."
    },
    // Triple images - art1_2.jpg, art1_3.jpg, and art1_4.jpg
    // {
    //   type: 'triple',
    //   id: 'triple1',
    //   images: [
    //     {
    //       src: "/images/art-gallery1/art1_2.jpg",
    //       alt: "Digital art illustration 2"
    //     },
    //     {
    //       src: "/images/art-gallery1/art1_3.jpg",
    //       alt: "Digital art illustration 3"
    //     },
    //     {
    //       src: "/images/art-gallery1/art1_4.jpg",
    //       alt: "Digital art illustration 4"
    //     }
    //   ],
    //   description: "Collection of digital art illustrations for role-playing game websites."
    // },
    // Triple images - art1_5.jpg, art1_6.jpg, and art1_7.jpg
    {
      type: 'triple',
      id: 'triple2',
      images: [
        {
          src: "/images/art-gallery1/art1_5.jpg",
          alt: "Digital art illustration 5"
        },
        {
          src: "/images/art-gallery1/art1_6.jpg",
          alt: "Digital art illustration 6"
        },
        {
          src: "/images/art-gallery1/art1_7.jpg",
          alt: "Digital art illustration 7"
        }
      ],
      description: "Created with a digital pen in Photoshop, these Role-Playing Game character sheet have been design to capture the 'Old School' pencil-and-paper style of the early days of the RPG hobby."
    },
    // Single image - art1_1.jpg
    {
      type: 'single',
      id: 1,
      src: "/images/art-gallery1/art1_8-10.jpg",
      alt: "Digital art illustration 1",
      description: "Digital art illustration created with Adobe Photoshop."
    },
    // Triple images - art1_11.jpg, art1_12.jpg, and art1_13.jpg
    {
      type: 'triple',
      id: 'triple4',
      images: [
        {
          src: "/images/art-gallery1/art1_11.jpg",
          alt: "Digital art illustration 11"
        },
        {
          src: "/images/art-gallery1/art1_12.jpg",
          alt: "Digital art illustration 12"
        },
        {
          src: "/images/art-gallery1/art1_13.jpg",
          alt: "Digital art illustration 13"
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
          alt: "Digital art illustration 14"
        },
        {
          src: "/images/art-gallery1/art1_15.jpg",
          alt: "Digital art illustration 15"
        },
        {
          src: "/images/art-gallery1/art1_16.jpg",
          alt: "Digital art illustration 16"
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