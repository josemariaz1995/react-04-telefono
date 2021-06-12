import { Tecla } from "./Tecla";
export const Teclado = (props) => {
  const { teclas, setTeclaIntroducida, teclaIntroducida } = props;
  const borrarNumero = "borrar";

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
          <button
            className="big"
            onClick={() =>
              setTeclaIntroducida(
                teclaIntroducida.substring(0, teclaIntroducida.length - 1)
              )
            }
          >
            {borrarNumero}
          </button>
        </li>
      </ol>
    </div>
  );
};
