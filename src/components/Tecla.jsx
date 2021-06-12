export const Tecla = (props) => {
  const { tecla, setTeclaIntroducida, teclaIntroducida } = props;
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
        >
          {tecla}
        </button>
      </li>
    </>
  );
};
