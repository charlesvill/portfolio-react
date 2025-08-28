import { useEffect, useState } from 'react';
import matter from 'gray-matter';

export function useParseMarkdown(filepath) {
  const [projData, setProjData] = useState('');
  useEffect(() => {
    async function parseFile() {
      const response = await fetch(filepath);
      if (!response.ok) {
        throw new Error('file path fetch failed');
      }

      const raw = await response.text();

      const { data, content } = matter(raw);
      setProjData({ frontmatter: data, content });
    }

    parseFile();
  }, [filepath]);

  return projData && { ...projData };
}
