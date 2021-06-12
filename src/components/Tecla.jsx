export const Tecla = (props) => {
  const { tecla, setTeclaIntroducida, teclaIntroducida, colgar } = props;
  return (
    <>
      <li>
        <button
          onClick={() => {
            if (teclaIntroducida.length === 9) {
              return;
            }
            setTeclaIntroducida(teclaIntroducida + tecla.toString());
          }}
          disabled={colgar}
        >
          {tecla}
        </button>
      </li>
    </>
  );
};
