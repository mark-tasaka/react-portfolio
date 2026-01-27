import React from 'react';

// 1. Project Layout Wrapper
export const ProjectLayout = ({ children, activePage = "work" }) => {
  return (
    <div className="project-container" id="top">
      <div className="page-container">
        {children}
      </div>
    </div>
  );
};

// 2. Project Header Component
export const ProjectHeader = ({ title, description }) => {
  return (
    <header className="page-header content">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </header>
  );
};

// 3. Single Image Component
export const ProjectImage = ({ src, alt, className = "project-image" }) => {
  return (
    <div className="lightbox-link">
      <img 
        className={className}
        src={src}
        alt={alt}
      />
    </div>
  );
};

// 4. Image Pair Component
export const ImagePair = ({ leftImage, rightImage }) => {
  return (
    <div className="image-pair-container">
      <div className="paired-image">
        <ProjectImage 
          src={leftImage.src}
          alt={leftImage.alt}
        />
      </div>
      <div className="paired-image">
        <ProjectImage 
          src={rightImage.src}
          alt={rightImage.alt}
        />
      </div>
    </div>
  );
};

// 5. Image Description Component
export const ImageDescription = ({ description }) => {
  return (
    <div className="project-module module text">
      <div className="rich-text module-text">
        <div>
          <span className="image-description">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

// 6. Image Module Component (handles both single and paired images)
export const ImageModule = ({ item }) => {
  return (
    <div key={item.id}>
      {item.type === 'pair' ? (
        <div className="project-module module paired-images">
          <ImagePair 
            leftImage={item.images[0]}
            rightImage={item.images[1]}
          />
          <ImageDescription description={item.description} />
        </div>
      ) : (
        <>
          <div className="project-module module image">
            <ProjectImage 
              src={item.src}
              alt={item.alt}
            />
          </div>
          {item.description && (
            <ImageDescription description={item.description} />
          )}
        </>
      )}
    </div>
  );
};

// 7. Back to Top Component
export const BackToTop = () => {
  return (
    <section className="back-to-top">
      <a href="#top">
        <span className="arrow">↑</span>
        <span>Back to Top</span>
      </a>
    </section>
  );
};

// 8. Project Gallery Component
export const ProjectGallery = ({ images }) => {
  return (
    <div className="page-content">
      <div className="project-modules modules content">
        {images.map((item) => (
          <ImageModule key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// 9. Complete Project Page Component
export const ProjectPage = ({ title, description, images, activePage = "work", Header }) => {
  return (
    <ProjectLayout activePage={activePage}>
      <Header activePage={activePage} />
      <main>
        <section className="page standard-modules">
          <ProjectHeader title={title} description={description} />
          <ProjectGallery images={images} />
        </section>
        <BackToTop />
      </main>
    </ProjectLayout>
  );
};