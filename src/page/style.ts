import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ReposList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    alignt-items: flex-start;
    padding: 20px;
  }
`;
