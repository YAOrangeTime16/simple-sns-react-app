import styled from 'styled-components';

//---- Contents style ---------------

export const TextDiv = styled.div`
    width: 80vw;
    height: auto;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid #6699cc;
    text-align: center;
    margin: 3rem auto;
    padding: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    word-wrap: break-word;

    @media (min-width: 728px){
        width: 50vw;
    }

    >div.name {
        color: #ef857d;
        font-weight: 700;
        text-align: left;
    }

    >div.date {
        text-align: right;
        color: #0033cc;
       font-size: 1rem;
    }
`;

export const ButtonLike = styled.button`
    background: transparent;
    border: 2px solid #6699cc;
    color: #6699cc;
    font-size: 1.2rem;
    font-family: 'Bubbler One', sans-serif;
    width: 5rem;
    margin: auto;
    cursor: pointer;

    &:hover {
        background: rgba(102, 153, 204, 0.5);
        color: white;
    }
`;