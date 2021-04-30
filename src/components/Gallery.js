import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import usePics from '../hooks/usePics';

const Gallery = () => {
  const pics = usePics();
  
  return (
    <section id="one">
      <div className="inner">
        <div>
          {pics.map(({ id, relativePath, name, gatsbyImageData }) => (
              <GatsbyImage key={id} image={gatsbyImageData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;