export const Display = (props) => {
  const { teclaIntroducida } = props;
  /* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */

  return <span className="numero">{teclaIntroducida}</span>;
};
