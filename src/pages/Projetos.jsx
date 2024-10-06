import React from "react";
import ProjetosRecentes from "../components/Recentes"; 

export default function Projeto() {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen">
      <main className="p-6">
        <ProjetosRecentes />
      </main>
    </div>
  );
}
