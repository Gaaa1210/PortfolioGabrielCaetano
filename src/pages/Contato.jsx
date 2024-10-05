import React, { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!"); 
    setFormData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    }); 
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-[85vh] bg-gray-50 dark:bg-zinc-950">


      <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white">Entre em contato:</h2>
      <section className="flex justify-center w-full">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-full max-w-xl">
          <div className="mb-6">
            <label htmlFor="nome" className="block text-gray-700 dark:text-gray-300 mb-2">
              Nome:
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              autoFocus
              className="w-full px-4 py-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="assunto" className="block text-gray-700 dark:text-gray-300 mb-2">
              Assunto:
            </label>
            <input
              type="text"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="mensagem" className="block text-gray-700 dark:text-gray-300 mb-2">
              Mensagem:
            </label>
            <textarea
              name="mensagem"
              cols="30"
              rows="5"
              value={formData.mensagem}
              onChange={handleChange}
              required
              className="w-full h-32 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring focus:ring-indigo-500 dark:focus:ring-indigo-400 resize-none" 
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 dark:bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-700 dark:hover:bg-blue-400 transition duration-200"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
