import React from 'react';
import fotoPerfil from "/fotoDePerfil.png"

const Sobre = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex bg-black text-white rounded-lg shadow-lg overflow-hidden">
        
       
        <div className="w-1/3 bg-blue-500 p-4 flex items-center justify-center">
          <img
            src={fotoPerfil}
            alt=""
            className="w-full h-auto rounded-lg"/>
        </div>
        
        <div className="w-2/3 p-8">
          <h1 className="text-4xl font-bold mb-4">Biografia</h1>
          <p className="mb-4">
          Sou Gabriel Caetano, um jovem profissional de 18 anos com uma forte orientação para resultados, focado em metas e objetivos. 
Uma das minhas maiores paixões é empreender com um foco em mudar hábitos sustentáveis. Acredito que, por meio da inovação e do comprometimento, podemos contribuir para um futuro mais verde e consciente. Estou sempre em busca de novas oportunidades e desafios que me permitam crescer e fazer a diferença no mundo dos negócios e na sociedade.
          </p>
          
          <div className="mb-8">
            <ul className="mb-4">
              <li>Nascimento: 06/04/2006</li>
              <li>Idade: 18</li>
              <li>Residente: Brasil</li>
              <li>Endereço: SP, São Paulo</li>
              <li>Email: gabrielcaetanowork@gmail.com </li>
              <li>Telefone: 11 98505-9080</li>
              <li>Instagram: @eusougabrielcaetano</li>
              <li>Freelance: Valido</li>
            </ul>
          </div>
          
          <div className="flex mb-8 space-x-6">
            <div className="text-center">
              <span className="block text-3xl font-bold">2+</span>
              <span>Anos de experiência</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold">3</span>
              <span>Projeto Concluidos</span>
            </div>
          </div>
          
          {/* Fazer download do curriculo */}
          <a
  href="/Curriculo Gabriel Caetano TI.pdf" 
  download="Curriculo Gabriel Caetano TI.pdf" 
  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
  Download CV
</a> 

        </div>
      </div>
    </div>
  );
};

export default Sobre;