import styled from 'styled-components';


//----- General styles ----------------

export const Webpage = styled.div`
    margin: 0;
    padding: 0;
    font-family: 'Bubbler One', sans-serif;
`;

export const Flexbox = styled.div`
    display: flex;
    flex-direction: ${props=>props.col ? 'column' : 'row' };
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const StyledIcon = styled.div`
    fill: ${props => (props.p || props.u) ? '#4b4b4b' : 'white'};
    width: ${props => props.small ? '3rem' : '3.5rem'};
    height: ${props => props.small ? '3rem' : '3.5rem'};
    margin: auto 2rem;
    cursor: pointer;

    &:hover {
        fill: #0033cc;
    }
`;
