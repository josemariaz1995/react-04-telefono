export const Tecla = (props) => {
  const { tecla, setTeclaIntroducida, teclaIntroducida } = props;
  console.log(tecla);
  return (
    <>
      <li>
        <button
          onClick={() =>
            setTeclaIntroducida(teclaIntroducida + tecla.toString())
          }
        >
          {tecla}
        </button>
      </li>
    </>
  );
};
