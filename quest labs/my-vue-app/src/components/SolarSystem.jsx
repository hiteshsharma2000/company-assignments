
import React from 'react';
import styled, { keyframes } from 'styled-components';


const orbit = (radius) => keyframes`
  0% {
    transform: rotate(0deg) translateX(${radius}) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(${radius}) rotate(-360deg);
  }
`;


const SolarSystemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0vh;
  background: black;
  overflow: hidden;
`;

const SunImage = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 50%;
`;

const Planet = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  top: 90%;
  left: 50%;
  border-radius: 50%;
  margin: -${(props) => props.size / 2}px;
  animation: ${(props) => orbit(props.radius)} ${(props) => props.duration}s linear infinite;
`;

const SolarSystem = () => {
  return (
    <SolarSystemContainer>
      <SunImage src="https://media.giphy.com/media/wypKXPQggwaCA/giphy.gif" alt="Sun" />
      <Planet src='https://tse3.mm.bing.net/th?id=OIP.LlNf8_Qurv2zt8CCgrTS_QHaHT&pid=Api&P=0&h=220' size={25} color="red" radius="30px" duration={5} />
      <Planet src='https://tse2.mm.bing.net/th?id=OIP.Ndqj6Wnwv5kD6eRpuM_jJgHaHb&pid=Api&P=0&h=220' size={35} color="blue" radius="120px" duration={8} />
      <Planet  src='https://tse3.explicit.bing.net/th?id=OIP.EsTqPeD4dlNVcY-LNRZjNwHaHa&pid=Api&P=0&h=220' size={45} color="green" radius="190px" duration={11} />
      <Planet src="https://tse1.mm.bing.net/th?id=OIP.q6W9u2pZhf_fSnPRcptgmgHaHa&pid=Api&P=0&h=220"  size={55} color="orange" radius="280px" duration={15} />
    </SolarSystemContainer>
  );
};

export default SolarSystem;
