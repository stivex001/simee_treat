import React from 'react'
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { catelogue } from './catData';
import CatelogueItem from './CatelogueItem';

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
// align-items: center;
${mobile({padding: '0px', flexDirection: 'column'})}
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