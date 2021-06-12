export const Accion = (props) => {
  /* <!-- El botón de llamar debe tener la clase "activo" cuando --> */
  /* <!-- el número de teléfono tiene 9 cifras --> */
  const {
    teclaIntroducida,
    colgar,
    llamar,
    setColgar,
    setLlamar,
    limpiarDisplay,
  } = props;
  const toggleLlamada = () => {
    if (teclaIntroducida.length === 9) {
      setColgar(!colgar);
      setLlamar(!llamar);
    }
  };
  const autoColgar = () => {
    if (colgar) {
      setTimeout(() => {
        toggleLlamada();
        limpiarDisplay();
      }, 5000);
    }
  };
  return (
    <>
      {llamar ? (
        <a
          href="llamar"
          className={`llamar${teclaIntroducida.length === 9 ? " activo" : ""}`}
          onClick={(e) => {
            toggleLlamada();
            e.preventDefault();
          }}
        >
          Llamar
        </a>
      ) : (
        <a
          href="colgar"
          className={`colgar activo`}
          onClick={(e) => {
            toggleLlamada();
            limpiarDisplay();
            e.preventDefault();
          }}
          onChange={autoColgar()}
        >
          Colgar
        </a>
      )}

      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
    </>
  );
};
