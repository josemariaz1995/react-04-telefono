import { Info } from "./components/Info";
import { Teclado } from "./components/Teclado";
import { Acciones } from "./components/Acciones";
import { Display } from "./components/Display";
import { useState } from "react";
function App() {
  const teclasDesordenadas = Array.from(new Array(10), (elemento, i) => i);
  const teclas = teclasDesordenadas.reverse();
  const [teclaIntroducida, setTeclaIntroducida] = useState("");
  const [llamar, setLlamar] = useState(true);
  const [colgar, setColgar] = useState(false);
  console.log(teclaIntroducida);
  return (
    <div className="contenedor">
      <Info llamar={llamar} colgar={colgar} />
      <main className="telefono">
        <Teclado
          colgar={colgar}
          teclas={teclas}
          setTeclaIntroducida={setTeclaIntroducida}
          teclaIntroducida={teclaIntroducida}
        />
        <div className="acciones">
          <Display teclaIntroducida={teclaIntroducida} />
          <Acciones
            llamar={llamar}
            setLlamar={setLlamar}
            colgar={colgar}
            setColgar={setColgar}
            teclaIntroducida={teclaIntroducida}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
