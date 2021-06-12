import { Accion } from "./Accion";
export const Acciones = (props) => {
  const { teclaIntroducida, colgar, llamar, setColgar, setLlamar } = props;
  return (
    <div className="acciones">
      <span className="numero">{teclaIntroducida}</span>
      <Accion
        teclaIntroducida={teclaIntroducida}
        llamar={llamar}
        setLlamar={setLlamar}
        colgar={colgar}
        setColgar={setColgar}
      />
    </div>
  );
};
