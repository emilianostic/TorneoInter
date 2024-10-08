import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import equipos from '../equipos.json';

const Contenedor = styled(View)`
  width: 80%;
  flex: 1;
  justify-content: flex-start;
  padding: 20px;
`;

const Titulo = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Fila = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => (props.header ? '#007bff' : '#fff')};
`;

const Texto = styled(Text)`
  width: 20%;
  text-align: center;
  color: ${props => (props.header ? '#fff' : '#000')};
`;

const TablaPosiciones = () => {
  // Inicializa y ordena la tabla de posiciones
  const tablaPosiciones = equipos.equipos
    .map(equipo => ({
      nombre: equipo.nombre,
      puntos: equipo.puntos,
      partidosJugados: equipo['partidos jugados'],
      golesFavor: equipo['goles a favor'],
      golesContra: equipo['goles en contra'],
      diferenciaGol: equipo['diferecia de gol'],
    }))
    .sort((a, b) => {
      if (b.puntos !== a.puntos) {
        return b.puntos - a.puntos;
      } else if (b.diferenciaGol !== a.diferenciaGol) {
        return b.diferenciaGol - a.diferenciaGol;
      } else {
        return b.golesFavor - a.golesFavor;
      }
    });

  return (
    <Contenedor>
      <Text>Fecha 1</Text>
      <Titulo>Tabla de Posiciones</Titulo>
      <Fila header style={{ width: 380 }}>
        <Texto header style={{ width: 80 }}>Equipo</Texto>
        <Texto header style={{ width: 40 }}>Pts</Texto>
        <Texto header style={{ width: 40 }}>PJ</Texto>
        <Texto header style={{ width: 40 }}>GF</Texto>
        <Texto header style={{ width: 40 }}>GC</Texto>
        <Texto header style={{ width: 40 }}>DG</Texto>
      </Fila>
      {tablaPosiciones.map((equipo, index) => (
        <Fila key={index}>
          <Texto style={{ width: 100 }}>{equipo.nombre}</Texto>
          <Texto>{equipo.puntos}</Texto>
          <Texto>{equipo.partidosJugados}</Texto>
          <Texto>{equipo.golesFavor}</Texto>
          <Texto>{equipo.golesContra}</Texto>
          <Texto>{equipo.diferenciaGol}</Texto>
        </Fila>
      ))}
    </Contenedor>
  );
};

export default TablaPosiciones;
  