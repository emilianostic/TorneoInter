import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import equipos from '../equipos.json';

const Contenedor = styled(View)`
  flex: 1;
  justify-content: flex-start; /* Alinea los elementos en la parte superior */
  padding: 20px;
  background-color: #f8f9fa;
`;

const Titulo = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  /* margin-bottom: 100px; /* Reduce el margen inferior */
`;

const Tabla = styled(View)`
  flex: 0.5; /* Ocupa menos espacio en la pantalla */
  margin-bottom: 20px;
`;

const Fila = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  background-color: ${props => (props.header ? '#007bff' : '#fff')};
`;

const Texto = styled(Text)`
  width: 20%;
  text-align: center;
  color: ${props => (props.header ? '#fff' : '#000')};
`;



const TablaPosiciones = () => {
  const [tablaPosiciones, setTablaPosiciones] = useState([]);

  useEffect(() => {
    const inicializarTabla = equipos.equipos.map(equipo => ({
      nombre: equipo.nombre,
      puntos: 0,
      partidosJugados: 0,
      golesFavor: 0,
      golesContra: 0,
      diferenciaGol: 0
    }));
    setTablaPosiciones(inicializarTabla);
  }, []);

  return (
    <Contenedor>
      <Titulo>Tabla de Posiciones</Titulo>
      <Tabla>
        <Fila header>
          <Texto header>Equipo</Texto>
          <Texto header>Pts</Texto>
          <Texto header>PJ</Texto>
          <Texto header>GF</Texto>
          <Texto header>GC</Texto>
          <Texto header>DG</Texto>
        </Fila>
        {tablaPosiciones.map((equipo, index) => (
          <Fila key={index}>
            <Texto>{equipo.nombre}</Texto>
            <Texto>{equipo.puntos}</Texto>
            <Texto>{equipo.partidosJugados}</Texto>
            <Texto>{equipo.golesFavor}</Texto>
            <Texto>{equipo.golesContra}</Texto>
            <Texto>{equipo.diferenciaGol}</Texto>
          </Fila>
        ))}
      </Tabla>
      
    </Contenedor>
  );
};

export default TablaPosiciones;
