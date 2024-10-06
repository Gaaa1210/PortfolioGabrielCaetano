import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description:
      "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
    details: "Details about Chatify...",
  },
  {
    id: 2,
    title: "Projeto 2",
    description:
    "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
    details: "Details about Bits-of-Code...",
  },
  {
    id: 3,
    title: "Projeto 3",
    description:
    "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
    details: "Details about Editor.io...",
  },
];

export default function DetalhesProjeto() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  return (
    <div className="container mx-auto p-8 text-white">
      {project ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="mb-4">{project.description}</p>
          <p>{project.details}</p>
        </>
      ) : (
        <p>Project not found!</p>
      )}
    </div>
  );
};

