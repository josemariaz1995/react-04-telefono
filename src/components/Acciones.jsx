import { Accion } from "./Accion";
export const Acciones = (props) => {
  const { teclaIntroducida, colgar, llamar, setColgar, setLlamar } = props;
  return (
    <Accion
      teclaIntroducida={teclaIntroducida}
      llamar={llamar}
      setLlamar={setLlamar}
      colgar={colgar}
      setColgar={setColgar}
    />
  );
};
