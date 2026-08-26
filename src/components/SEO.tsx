import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    // Browser title
    document.title = title;

    // Meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    // Robots
    let robots = document.querySelector(
      'meta[name="robots"]'
    ) as HTMLMetaElement | null;

    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }

    robots.content = "index, follow";

    // Open Graph title
    let ogTitle = document.querySelector(
      'meta[property="og:title"]'
    ) as HTMLMetaElement | null;

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }

    ogTitle.content = title;

    // Open Graph description
    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    ) as HTMLMetaElement | null;

    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }

    ogDescription.content = description;
  }, [title, description]);

  return null;
};

export default SEO;
