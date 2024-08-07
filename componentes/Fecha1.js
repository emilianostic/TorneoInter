import React from "react";
import { Text, TextInput, View } from "react-native";
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

const GolesInput = styled(TextInput)`
  height: 40px;
  width: 50px; /* Reducir ancho del input */
  border: 1px solid #ccc;
  margin: 5px;
  padding: 5px;
  text-align: center;
`;

const Fecha1 = () => {
  const equipoAbogadosE = equipos.equipos[5];
  const equipoIngenierosZ = equipos.equipos[9];
  const equipoContadoresJ = equipos.equipos[11];
  const equipoIngenierosA = equipos.equipos[0];
  const equipoIngenierosBio = equipos.equipos[10];
  const equipoContadoresV = equipos.equipos[12];
  const equipoContadoresE = equipos.equipos[3];
  const equipoIngenierosO = equipos.equipos[8];
  const equipoAbogadosA = equipos.equipos[4];
  const equipoKinesiologos = equipos.equipos[6];
  const equipoContadoresD = equipos.equipos[1];
  const equipoContadoresS = equipos.equipos[2];
  const equipoIngenierosArq = equipos.equipos[7];

  return (
    <Contenedor1>
      <Row>
        <EquipoText>{equipoAbogadosE.nombre}</EquipoText>
        <GolesInput placeholder="goles" keyboardType="numeric" maxLength={2} />
        <GolesInput placeholder="goles" keyboardType="numeric" maxLength={2} />
        <EquipoText>{equipoIngenierosZ.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoContadoresJ.nombre}</EquipoText>
        <GolesInput placeholder="goles" keyboardType="numeric" maxLength={2} />
        <GolesInput placeholder="goles" keyboardType="numeric" maxLength={2} />
        <EquipoText>{equipoIngenierosA.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoIngenierosBio.nombre}</EquipoText>
        <GolesInput placeholder="goles" keyboardType="numeric" maxLength={2} />
        <GolesInput placeholder="goles" keyboardType="numeric" maxLength={2} />
        <EquipoText>{equipoContadoresV.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoContadoresE.nombre}</EquipoText>
        <GolesInput placeholder="goles" keyboardType="numeric" maxLength={2} />
        <GolesInput placeholder="goles" keyboardType="numeric" maxLength={2} />
        <EquipoText>{equipoIngenierosO.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoAbogadosA.nombre}</EquipoText>
        <EquipoText>{equipoIngenierosArq.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoContadoresS.nombre}</EquipoText>
        <EquipoText>{equipoKinesiologos.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoContadoresD.nombre}</EquipoText>
        <EquipoText>Fecha Libre</EquipoText>
      </Row>
    </Contenedor1>
  );
};

export default Fecha1;
