import styled from "styled-components";

export const MainProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  border: solid 1px;
`;

export const HeaderProduct = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 16px;
`
export const SectionProduct = styled.section`
  display: flex;
  flex-wrap:wrap;
  padding: 0 16px;
  gap: 3%;    
`
export const CadaProduto = styled.div`  
    border: 1px solid black;   
`
export const PhotoProduct = styled.img`
  width: 200px;
  height: 200px; 
`
export const PoductDescription = styled.div`
  display: flex;
    flex-direction: column;
    padding: 16px;
    button{
      margin-top: 5px;
      align-self: center;
    }
`

  