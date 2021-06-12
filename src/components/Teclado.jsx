import { Tecla } from "./Tecla";
export const Teclado = (props) => {
  const { teclas, setTeclaIntroducida, teclaIntroducida } = props;

  return (
    <div className="botones">
      <ol className="teclado">
        {teclas.map((tecla) => {
          return (
            <Tecla
              key={tecla}
              tecla={tecla}
              teclaIntroducida={teclaIntroducida}
              setTeclaIntroducida={setTeclaIntroducida}
            />
          );
        })}

        <li>
          <button className="big">borrar</button>
        </li>
      </ol>
    </div>
  );
};
