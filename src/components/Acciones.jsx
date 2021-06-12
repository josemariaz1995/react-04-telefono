import { Accion } from "./Accion";
export const Acciones = (props) => {
  const { teclaIntroducida } = props;
  return (
    <div className="acciones">
      <span className="numero">{teclaIntroducida}</span>
      <Accion />
    </div>
  );
};
