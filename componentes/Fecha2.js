import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import equipos from "../equipos.json";

const Contenedor1 = styled(View)`
  width: 90%; /* Ajusta el ancho del contenedor */
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const EquipoText = styled(Text)`
  font-size: 16px; /* Reducir tamaño del texto */
`;

const GolesText = styled(Text)`
  height: 40px;
  width: 50px; /* Reducir ancho del input */
  border: 1px solid #ccc;
  margin: 5px;
  padding: 5px;
  text-align: center;
`;

const Fecha2 = () => {
  const equipoAbogadosE = equipos.equipos2[5];
  const equipoIngenierosZ = equipos.equipos2[9];
  const equipoContadoresJ = equipos.equipos2[11];
  const equipoIngenierosA = equipos.equipos2[0];
  const equipoIngenierosBio = equipos.equipos2[10];
  const equipoContadoresV = equipos.equipos2[12];
  const equipoContadoresE = equipos.equipos2[3];
  const equipoIngenierosO = equipos.equipos2[8];
  const equipoAbogadosA = equipos.equipos2[4];
  const equipoKinesiologos = equipos.equipos2[6];
  const equipoContadoresD = equipos.equipos2[1];
  const equipoContadoresS = equipos.equipos2[2];
  const equipoIngenierosArq = equipos.equipos2[7];

  return (
    <Contenedor1>
      <Text>Fecha 2</Text>
      <Row>
        <EquipoText>{equipoContadoresD.nombre}</EquipoText>
        <GolesText>{equipoContadoresD["goles a favor"]} </GolesText>
        <GolesText>{equipoAbogadosE["goles a favor"]} </GolesText>
        <EquipoText>{equipoAbogadosE.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoAbogadosA.nombre}</EquipoText>
        <GolesText>{equipoAbogadosA["goles a favor"]} </GolesText>
        <GolesText>{equipoIngenierosBio["goles a favor"]} </GolesText>
        <EquipoText>{equipoIngenierosBio.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoContadoresE.nombre}</EquipoText>
        <GolesText>{equipoContadoresE["goles a favor"]} </GolesText>
        <GolesText>{equipoContadoresV["goles a favor"]} </GolesText>
        <EquipoText>{equipoContadoresV.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoKinesiologos.nombre}</EquipoText>
        <GolesText>{equipoKinesiologos["goles a favor"]}</GolesText>
        <GolesText>{equipoIngenierosZ["goles a favor"]}</GolesText>
        <EquipoText>{equipoIngenierosZ.nombre}</EquipoText>
      </Row>
      <Text>Partidos Postergados</Text>
      <Row>
        <EquipoText>{equipoContadoresS.nombre}</EquipoText>
        <GolesText>-</GolesText>
        <GolesText>-</GolesText>
        <EquipoText>{equipoIngenierosArq.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoIngenierosO.nombre}</EquipoText>
        <GolesText>{equipoIngenierosO["goles a favor"]}</GolesText>
        <GolesText>{equipoIngenierosA["goles a favor"]}</GolesText>
        <EquipoText>{equipoIngenierosA.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoContadoresJ.nombre}</EquipoText>
        <EquipoText>Fecha Libres</EquipoText>
      </Row>
    </Contenedor1>
  );
};

export default Fecha2;