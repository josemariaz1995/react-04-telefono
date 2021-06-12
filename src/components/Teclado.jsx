import { Tecla } from "./Tecla";
export const Teclado = (props) => {
  const { teclas, setTeclaIntroducida, teclaIntroducida, colgar } = props;
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
            disabled={colgar}
          >
            {borrarNumero}
          </button>
        </li>
      </ol>
    </div>
  );
};
