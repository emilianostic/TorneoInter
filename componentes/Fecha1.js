import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import equipos from "../equipos.json";

const Contenedor1 = styled(View)`
  flex: 1;
  justify-content: center; /* Alinea verticalmente en el centro */
  align-items: center; /* Alinea horizontalmente en el centro */
`;

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 10px; /* Espacio debajo del nombre del equipo */
`;

const EquipoText = styled(Text)`
  font-size: 20px;
`;

const GolesInput = styled(TextInput)`
  height: 40px;
  width: 80px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 5px;
  text-align: center; /* Centra el texto dentro del input */
`;

const Fecha1 = () => {
  // Acceso directo a los equipos por su índice
  const equipoAbogadosE = equipos.equipos[5];
  const equipoIngenierosZ = equipos.equipos[9];
  const equipoContadoresJ = equipos.equipos[11];
  const equipoIngenierosA = equipos.equipos[0];
  const equipoIngenierosBio = equipos.equipos[10];
  const equipoContadoresV = equipos.equipos[12];
  const equipoContadoresE = equipos.equipos[3];
  const equipoIngenierosO = equipos.equipos[8];

  return (
    <Contenedor1>
      <Row>
        <EquipoText>{equipoAbogadosE.nombre}</EquipoText>
        <GolesInput placeholder="goles" keyboardType="numeric" />
        <GolesInput placeholder="goles" keyboardType="numeric" />
        <EquipoText>{equipoIngenierosZ.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoContadoresJ.nombre}</EquipoText>
        <GolesInput placeholder="goles" keyboardType="numeric" />
        <GolesInput placeholder="goles" keyboardType="numeric" />
        <EquipoText>{equipoIngenierosA.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoIngenierosBio.nombre}</EquipoText>
        <GolesInput placeholder="goles" keyboardType="numeric" />
        <GolesInput placeholder="goles" keyboardType="numeric" />
        <EquipoText>{equipoContadoresV.nombre}</EquipoText>
      </Row>
      <Row>
        <EquipoText>{equipoContadoresE.nombre}</EquipoText>
        <GolesInput placeholder="goles" keyboardType="numeric" />
        <GolesInput placeholder="goles" keyboardType="numeric" />
        <EquipoText>{equipoIngenierosO.nombre}</EquipoText>
      </Row>
    </Contenedor1>
  );
};

export default Fecha1;
