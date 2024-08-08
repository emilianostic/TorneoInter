import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import styled from 'styled-components/native';
import equipos from '../equipos.json';

const Contenedor = styled(View)`
  width: 80%; /* Ajusta el ancho del contenedor */
  flex: 1;
  justify-content: flex-start;
  padding: 20px;
  /*background-color: #f8f9fa;*/
`;

const Titulo = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

/* const Tabla = styled(ScrollView)`
  margin-bottom: 20px;
  max-height: 300px; /* Ajusta la altura máxima de la tabla` */


const Fila = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  /* border-bottom-width: 1px;
  border-bottom-color: #ccc; */
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
      <Text>Fecha 1</Text>
      <Titulo>Tabla de Posiciones</Titulo>
    
        <Fila header style={{width: 380 }}>
          <Texto header style={{width: 80 }} >Equipo</Texto>
          <Texto header style={{width: 40 }}>Pts</Texto>
          <Texto header style={{width: 40 }}>PJ</Texto>
          <Texto header style={{width: 40 }}>GF</Texto>
          <Texto header style={{width: 40 }}>GC</Texto>
          <Texto header style={{width: 40 }}>DG</Texto>
        </Fila>
        {tablaPosiciones.map((equipo, index) => (
          <Fila key={index}>
            <Texto style={{width: 100 }}>{equipo.nombre}</Texto>
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

