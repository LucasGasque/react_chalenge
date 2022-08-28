import styled from "styled-components";

export const Body = styled.header`
  width: 100%;
  height: 200px;
  position: relative;
  background-color: var(--secondary);
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
  color: var(--primary);
  text-shadow: 1px 1px 1px var(--secondary);

  @media (min-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const Fields = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
  }
`;

export const UserFields = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const OtherFields = styled.div``;
