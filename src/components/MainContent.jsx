
import fotoPerfil from "/fotoDePerfil.png" 

export default function MainContent() {
    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-start">
            <img src={fotoPerfil} alt="" className="w-96"/>
      </div>
    );
  }