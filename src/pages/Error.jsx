import React from "react"
import { Link } from "react-router-dom"

export default function Error(){

    return(
        <>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <img src="/path-to-your-logo.svg" alt="Logo" className="w-16 h-16 mx-auto" />
        </div>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">This page does not exist</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="space-y-4">
        
        <Link className="block text-indigo-600 hover:underline">Projetos</Link>
        <Link className="block text-indigo-600 hover:underline">Sobre</Link>
        <Link className="block text-indigo-600 hover:underline">Contato</Link>
        </div>
        <div className="mt-10">
          <Link className="block text-indigo-600 hover:underline"> &larr; Voltar para o inicio</Link>
        </div>
      </div>
    </div>
        </>
    )
}