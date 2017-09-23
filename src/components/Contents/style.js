import styled from 'styled-components';

//---- Contents style ---------------

export const ContentFlexbox = styled.div`
    display: flex;
    justify-content: ${props=>props.between ? 'space-between' : 'center'};
    
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

export const NoPostsMessage = styled.div`
    display: flex;
    margin: 1.7rem auto;
    border: 2px solid #ef857d;
    cursor: pointer;

    >p {
        font-size: 2rem;
        color: #ef857d;
        padding: 0 1rem;
    }

    &:hover {
        background: #ef857d;
        >p{
            color: white;
        }
    }
`;

export const TextDiv = styled.div`
    width: 80vw;
    height: auto;
    background: rgba(255, 255, 255, 0.9);
    border: .5px solid #6699cc;
    text-align: center;
    margin: 3rem auto;
    padding: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    word-wrap: break-word;

    @media (min-width: 728px){
        width: 50vw;
        box-shadow: 3px 3px 7px #808080;
    }
`;

export const TextBorder = styled.div`
    border-bottom: .5px solid #6699cc;
    width: 100%;
    padding: 2rem 0;

    @media (min-width: 728px){
        width: 100%;
    }
`;

export const ButtonLike = styled.button`
    background: ${props=>props.liked ? '#6699cc' : 'transparent'};
    border: 2px solid #6699cc;
    color: ${props=>props.liked ? '#ffffff' : '#6699cc'};
    font-size: 1.2rem;
    font-family: 'Bubbler One', sans-serif;
    width: 5rem;
    margin: 1rem .5rem 0 .5rem;
    cursor: pointer;

    &:hover {
        background: rgba(102, 153, 204, 0.5);
        color: white;
    }
`;

export const StyledCounter = styled.div`
    color: #ef857d;
    font-size: 1rem;
    margin: 1rem .5rem 0 .5rem;
`;