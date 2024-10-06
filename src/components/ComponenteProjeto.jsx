
import React from "react";
import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description:
    "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
    github: "#",
    demo: "#",
    image: "/path/to/chatify-image.png",
  },
  {
    id: 2,
    title: "Projeto 2",
    description:
    "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
    github: "#",
    demo: "#",
    image: "/path/to/bits-of-code-image.png",
  },
  {
    id: 3,
    title: "Projeto 3",
    description:
    "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
    github: "#",
    demo: "#",
    image: "/path/to/editorio-image.png",
  },
];

export default function ComponenteProjeto(){
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 text-purple-400">
          My Recent <span className="text-white">Works</span>
        </h2>
        <p className="text-gray-400">Here are a few projects I’ve worked on recently.</p>
      </div>

      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            github={project.github}
            demo={project.demo}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

