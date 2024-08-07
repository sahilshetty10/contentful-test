import React from "react";

type BlogProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const Blog: React.FC<BlogProps> = ({ title, description, image, url }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {image && <img src={image} alt={title} className="rounded-lg" />}
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-500 mt-2">{description}</p>
      <a href={url} className="text-blue-500 mt-2">
        Read More
      </a>
    </div>
  );
};

export default Blog;
