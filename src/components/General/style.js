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
    margin: auto 1.5rem;
    cursor: pointer;

    &:hover {
        fill: #0033cc;
    }
`;

export const StyledIconT = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    fill: #969696;
    cursor: pointer;

    &:hover {
        fill: #0033cc;
    }
`;

export const SpinnerText = styled.div`
    color: #0033cc;
    font-family: 'Bubbler One', sans-serif;
margin: 5rem;
font-size: 1.5rem;
`;

export const Spinner = styled.div`
    margin-top: 10rem;

    >div.animation{
        position: relative;
        width: 20px;
    }

    >div.animation div.ball{
        position: absolute;
        border-radius: 15px;
        height: 20px;
        width: 20px;
        margin-bottom: -5px;
        background-color: #6699cc;
        animation: animation-ball 1s ease-in-out infinite;
        z-index: 2;
        top: -13px;
        left: 5px;
    }
    @keyframes animation-ball{

        20%
        {
            transform: translate(0,-40px);
        }
        35%
        {
            transform: translate(0,-45px);
        }
        90%
        {
            transform: translate(0,-50px);
        }
        95%
        {
            transform: translate(0,-40px);
        }

    }

>div.animation div.shadow
{
    position:absolute;
    animation: animation-shadow 1s infinite;
    width:30px;
    height:15px;
    border-radius:15px / 7px;
    background-color:#005AA2;

}

@keyframes animation-shadow
{
    70%
    {
        transform:  scale(0.5);
        opacity:0.5;
    }
    100%
    {
        transform:  scale(0.4);
        opacity:0.4;
    }
}

`;

    







