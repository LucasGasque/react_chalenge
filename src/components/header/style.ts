import styled from "styled-components";

export const Body = styled.header`
  width: 100%;
  height: 150px;
  background-color: var(--primary);
  position: relative;
  border-bottom: 1px solid var(--secondary);
  display: grid;
  place-items: center;
`;

export const Box = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: var(--secondary);
  text-shadow: 1px 1px 1px var(--black);
`;
