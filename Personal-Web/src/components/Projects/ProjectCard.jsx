// Posts.js
import React from "react";

const ProjectCard = ({ postsToRender }) => {
  return (
    <div>
      {postsToRender.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
