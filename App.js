import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Fecha1 from "./componentes/Fecha1";
import TablaPosiciones from "./componentes/TablaPosicionesInicial";
import Fecha2 from "./componentes/Fecha2";
import TablaPosiciones2 from "./componentes/TablaPosiciones2";

const TituloTorneoView = styled(View)`
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
`;

const ContenedorPrincipal = styled(View)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;  /* Añadir relleno para evitar bordes */
`;

export default function App() {
  return (
    <ContenedorPrincipal>
      <ScrollView>
      <TituloTorneoView>
        <Text>Torneo Clausura Libres 2024</Text>
      </TituloTorneoView>
      <TablaPosiciones2 />
      <Fecha2 />
      </ScrollView>
    </ContenedorPrincipal>
  );
}
