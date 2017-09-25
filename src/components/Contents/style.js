import styled from 'styled-components';

//---- Contents style ---------------

export const BackgroundColor = styled.div`
    background: linear-gradient(#6699cc, #ef857d );
    min-height: 100vh;
`;

export const StyledText = styled.p`
    color: white;
    font-size: 1.5rem;
`;

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

export const TextDiv = styled.div`
    width: 85vw;
    height: auto;
    background: rgba(255, 255, 255, 0.9);
    border: .5px solid #6699cc;
    border-radius: 5px;
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

export const ButtonStyled = styled.button`
    background: ${props=> props.primary ? '#0033cc' 
                    : props.attention ? '#ef857d' 
                    : props.g ? '#d62d20' 
                    :'#99ccff' };
    height: 2.5rem;
    width: 10rem;
    margin: ${ props => props.margin ? 'auto 1rem' : 'auto'};
    padding: 0.5rem 2rem;
    color: white;
    border-radius: 5px;
    border: transparent;
    font-size: 1.3rem;
    font-family: 'Bubbler One', sans-serif;
    cursor: pointer;

    &:hover {
        background: ${props=> props.primary ? '#4169e1' 
                        : props.fb ? '#8b9dc3'
                        : '#bedfff' };  
    }
    @media (min-width: 768px){
        height: 2.5rem;
        width: 10rem;
    }
`;

export const ButtonLike = styled.button`
    background: ${props=>props.liked ? '#6699cc' : 'transparent'};
    border: 2px solid #6699cc;
    border-radius: 5px;
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