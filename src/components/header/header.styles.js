import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
export const Wrapper = styled.div`
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Left = styled.div`
  flex: 1;
`;
export const Logo = styled.div`
font-weight: bold;
font-size: 20px;
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    list-style-type: none;
    text-decoration: none;
`;

export default Container;