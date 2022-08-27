import styled from "styled-components";

export const Body = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border: 1px solid var(--secondary);
  position: relative;

  :hover {
    transform: scale(105%);
  }

  :active {
    transform: scale(100%);
  }
`;

export const Title = styled.h1`
  color: var(--secondary);
  text-shadow: 1px 1px 1px var(--black);
  font-size: 1.3rem;
`;
export const Box = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 10px;
  color: var(--secondary);
`;
