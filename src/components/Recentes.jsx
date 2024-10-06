import React from "react";
import Card from "./Card";

const projects = [
    {
        id: 1,
        title: "Projeto 1",
        description:
          "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
        github: "#", 
        image: "url da imagem",
      },
      {
        id: 2,
        title: "Projeto 2",
        description:
          "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
        github: "#",
        image: "url da imagem",
      },
      {
        id: 3,
        title: "Projeto 3",
        description:
          "Lorem Ipsum is a Latin text commonly used in graphic design and editing to fill in placeholder text in publications (newspapers, magazines, and websites) for testing and adjusting visual aspects (layout, typography, formatting, etc.) before using real content. This dummy text simulates a real text with reasonable fidelity, featuring words of various lengths and punctuation marks, allowing designers to test how the text flows in boxes and fields.",
        github: "#", 
        image: "url da imagem", 
      },
];

const ProjetosRecentes = () => {
  return (
    <section className="bg-gray-100 dark:bg-black py-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 text-black dark:text-white">
          Meus trabalhos <span className="text-blue-500">recentes</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
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

export default ProjetosRecentes;
