import styled from "styled-components";

export const Body = styled.div`
  position: absolute;
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const InputBox = styled.div`
  background-color: var(--secondary);
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  color: var(--secondary);
  margin-bottom: 20px;
  font-size: 2.5rem;
`;
