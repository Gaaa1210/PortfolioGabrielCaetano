import React from 'react';
import fotoPerfil from "/fotoDePerfil.png";

const Sobre = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-[75vh] h-auto bg-gray-100 dark:bg-black p-4 sm:p-6">
      <div className="flex flex-col md:flex-row bg-white dark:bg-zinc-900 text-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl mx-auto">
        
        <div className="w-full md:w-1/3 bg-blue-500 p-4 flex items-center justify-center"> 
          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
            className="w-full h-auto max-w-xs sm:max-w-sm rounded-lg border-4 border-white dark:border-zinc-800"
          />
        </div>

        <div className="w-full md:w-2/3 p-6 md:p-8"> 
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Biografia</h1> 
          <p className="mb-4 text-sm sm:text-base">
            Sou Gabriel Caetano, um jovem profissional de 18 anos com uma forte orientação para resultados, focado em metas e objetivos. 
            Uma das minhas maiores paixões é empreender com um foco em mudar hábitos sustentáveis. Acredito que, por meio da inovação e do comprometimento, podemos contribuir para um futuro mais verde e consciente. Estou sempre em busca de novas oportunidades e desafios que me permitam crescer e fazer a diferença no mundo dos negócios e na sociedade.
          </p>
          
          <div className="mb-8"> 
            <ul className="list-disc ml-5 text-sm sm:text-base">
              <li>Nascimento: 06/04/2006</li>
              <li>Idade: 18</li>
              <li>Residente: Brasil</li>
              <li>Endereço: SP, São Paulo</li>
              <li>Email: <a href="mailto:gabrielcaetanowork@gmail.com" className="text-blue-500 hover:underline">gabrielcaetanowork@gmail.com</a></li>
              <li>Telefone: <a href="tel:+5511985059080" className="text-blue-500 hover:underline">11 98505-9080</a></li>
              <li>Instagram: <a href="https://www.instagram.com/eusougabrielcaetano" className="text-blue-500 hover:underline">@eusougabrielcaetano</a></li>
              <li>Freelance: Válido</li>
            </ul>
          </div>
          
          <div className="flex justify-between mb-8 space-x-6"> 
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-bold">2+</span>
              <span>Anos de experiência</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-bold">3</span>
              <span>Projetos Concluídos</span>
            </div>
          </div>
          
          <a
            href="/Curriculo Gabriel Caetano TI.pdf" 
            download="Curriculo Gabriel Caetano TI.pdf" 
            className="bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200">
            Download CV
          </a> 

        </div>
      </div>
    </div>
  );
};

export default Sobre;
