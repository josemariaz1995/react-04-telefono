export const Info = (props) => {
  const { colgar } = props;
  /* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */

  return <span className={`mensaje${colgar ? "" : " off"}`}>Llamando...</span>;
};
