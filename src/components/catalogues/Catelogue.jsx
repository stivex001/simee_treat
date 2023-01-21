import React from 'react'
import styled from 'styled-components';
import { catelogue } from './catData';
import CatelogueItem from './CatelogueItem';

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
align-items: center;
`;

const Catelogue = () => {
  return (
    <Container>
        {catelogue.map(item => (
            <CatelogueItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Catelogue