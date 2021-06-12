export const Accion = (props) => {
  /* <!-- El botón de llamar debe tener la clase "activo" cuando --> */
  /* <!-- el número de teléfono tiene 9 cifras --> */
  const { teclaIntroducida, colgar, llamar, setColgar, setLlamar } = props;
  const toggleLlamada = () => {
    if (teclaIntroducida.length === 9) {
      setColgar(!colgar);
      setLlamar(!llamar);
    }
  };
  const autoColgar = () => {
    if (colgar) {
      setTimeout(() => {
        return toggleLlamada();
      }, 5000);
    }
  };
  return (
    <>
      <a
        href="llamar"
        className={`llamar${teclaIntroducida.length === 9 ? " activo" : ""}${
          colgar && teclaIntroducida.length === 9 ? " ocultar" : ""
        }`}
        onClick={(e) => {
          toggleLlamada();
          e.preventDefault();
        }}
      >
        Llamar
      </a>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a
        href="colgar"
        className={`colgar activo${llamar ? " ocultar" : ""}`}
        onClick={(e) => {
          toggleLlamada();
          e.preventDefault();
        }}
        onChange={autoColgar()}
      >
        Colgar
      </a>
    </>
  );
};
