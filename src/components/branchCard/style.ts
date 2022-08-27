import styled from "styled-components";

export const Body = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border: 1px solid var(--secondary);

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
  text-align: center;
  font-size: 1rem;
`;
