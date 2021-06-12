import { Info } from "./components/Info";
import { Teclado } from "./components/Teclado";
import { Acciones } from "./components/Acciones";
import { useState } from "react";
function App() {
  const teclasDesordenadas = Array.from(new Array(10), (elemento, i) => i);
  const teclas = teclasDesordenadas.reverse();
  const [teclaIntroducida, setTeclaIntroducida] = useState("");
  console.log(teclaIntroducida);
  return (
    <div className="contenedor">
      <Info />
      <main className="telefono">
        <Teclado
          teclas={teclas}
          setTeclaIntroducida={setTeclaIntroducida}
          teclaIntroducida={teclaIntroducida}
        />
        <Acciones teclaIntroducida={teclaIntroducida} />
      </main>
    </div>
  );
}

export default App;
