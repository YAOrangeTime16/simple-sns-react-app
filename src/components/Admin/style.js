import styled from 'styled-components';

//---- Admin style

export const ButtonStyled = styled.button`
    background: #6699cc;
    height: 2.5rem;
    width: 8rem;
    margin: 1.8rem auto;
    padding: 0.5rem 2rem;
    color: white;
    border: none;
    font-size: 1.3rem;
    font-family: 'Bubbler One', sans-serif;
    cursor: pointer;

    &:hover {
        background: #bedfff;  
    }
    @media (min-width: 768px){
        height: 2.5rem;
        width: 8rem;
    }
`;

export const Cursor = styled.div`
    cursor: pointer;
`;
export const CloseButton = styled.div`
    margin: 1rem;
    text-align: center;
    font-weight: 600;
`;

export const Flexbox = styled.div`
    display: flex;
    flex-direction: ${props=>props.col ? 'column' : 'row' };
    justify-content: center;
    align-items: center;
`;

export const TextArea = styled.textarea`
    margin: 1rem auto;
    border: 2px solid #6699cc;
    border-radius: 5px;
    resize: none;
    height: 40vh;
    width: 80%;
    font-size: 1.5rem;
    padding: 1rem;
    line-height: 2rem;

    @media (min-width: 768px){
        width: 50%;
    }
`;

export const InputStyled = styled.input`
    padding: 0.5rem 1rem;
    margin: 1.5rem auto;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid ${props => props.attention ? '#ef857d' : '#0033cc'};
    width: 30%;
    font-size: 1.3rem;
    font-family: 'Bubbler One', sans-serif;
`;

export const Message = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #ef857d;
`;

export const Bar = styled.progress`
    margin: 1rem;
`;