import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Fecha1 from "./componentes/Fecha1";
import TablaPosiciones from "./componentes/TablaPosicionesInicial";
import Fecha2 from "./componentes/Fecha2";
import TablaPosiciones2 from "./componentes/TablaPosiciones2";
import { useState } from "react";

const TituloTorneoView = styled(View)`
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

const ContenedorPrincipal = styled(View)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const ContenedorFechas = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const BotonFechas = styled(TouchableOpacity)`
  width: 40px;
  height: 20px;
  align-items: center;
  border-radius: 10px;
  background-color: pink;
`;

export default function App() {
  const [mostrarFecha2, setMostrarFecha2] = useState(true);

  return (
    <ContenedorPrincipal>
      <ContenedorFechas>
        <BotonFechas onPress={() => setMostrarFecha2(false)}>
          <Text>1</Text>
        </BotonFechas>
        <BotonFechas onPress={() => setMostrarFecha2(true)}>
          <Text>2</Text>
        </BotonFechas>
      </ContenedorFechas>
      <ScrollView>
        <TituloTorneoView>
          <Text>Torneo Clausura Libres 2024</Text>
        </TituloTorneoView>
        {mostrarFecha2 ? (
          <>
            <TablaPosiciones2 />
            <Fecha2 />
          </>
        ) : (
          <>
            <TablaPosiciones />
            <Fecha1 />
          </>
        )}
      </ScrollView>
    </ContenedorPrincipal>
  );
}
