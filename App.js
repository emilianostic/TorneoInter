import { Text, View } from "react-native";
import styled from "styled-components";
import Fecha1 from "./componentes/Fecha1";

export default function App() {
  const TituloTorneoView = styled(View)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50px;
  `;

  return (
    <>
    <TituloTorneoView>
      <Text>Torneo Clausura Libres 2024</Text>
    </TituloTorneoView>
    <Fecha1/>
    </>
  );
}
