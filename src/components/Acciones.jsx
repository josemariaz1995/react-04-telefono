import { Accion } from "./Accion";
export const Acciones = (props) => {
  const {
    teclaIntroducida,
    colgar,
    llamar,
    setColgar,
    setLlamar,
    limpiarDisplay,
  } = props;
  return (
    <Accion
      limpiarDisplay={limpiarDisplay}
      teclaIntroducida={teclaIntroducida}
      llamar={llamar}
      setLlamar={setLlamar}
      colgar={colgar}
      setColgar={setColgar}
    />
  );
};
