import { useState, useEffect } from 'react';

// expects import.meta.glob vite import files for md and images
export function useFileParser({ markdownFiles, images }) {
  const [dataCollection, setDataCollection] = useState([]);

  useEffect(() => {
    const filesArray = Object.entries(markdownFiles).map(([path, mod]) => {
      const { attributes, markdown } = mod;

      let image = null;
      if (attributes.image) {
        // Take the markdown file directory (strip the filename)
        const baseDir = path.split('/').slice(0, -1).join('/');

        // Add the relative image path
        const imageKey = `${baseDir}/${attributes.image.replace('./', '')}`;

        image = images[imageKey]?.default;
      }

      return {
        frontmatter: { ...attributes, imageSource: image },
        content: markdown,
      };
    });

    setDataCollection(filesArray);
  }, [markdownFiles, images]);

  return { projectData: dataCollection };
}
