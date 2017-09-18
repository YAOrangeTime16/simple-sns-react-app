import styled from 'styled-components';

//---- Header style ----------------------

export const HeaderStyled = styled.div`
    background: #6699cc;
    margin: 0;
    width: 100vw;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const HeaderUser = styled.div`
    width: 100vw;
    height: 3.5rem;
    background: #dbdbdb;
    color: white;
    font-size: 1.5rem;
    display: flex;
    align-content: center;

    >div{
        width: fit-content;
        text-align: center;
        margin: auto;
        padding: .5rem;
        cursor: pointer;
        border: 1px solid white;
}
`;
export const Logo = styled.div`
    font-size: 3rem;
    font-family: 'Bubbler One', sans-serif;
    margin: auto auto auto 2rem;
    color: white;
`;

export const UserName = styled.div`
    font-size: 1.5rem; 
    margin: auto 0;
    
`;

export const UserNameCursor = styled(UserName)`
    cursor: pointer;
`;

export const StyledIcon = styled.div`
    fill: ${props => props.c ? '#4b4b4b' : 'white'};
    width: 50px;
    height: 50px; 
    margin: 1rem 2.5rem;
    cursor: pointer;

    &:hover {
        fill: #0033cc;
    }
`;

//--- Modal ------------

export const ButtonStyled = styled.button`
    background: ${props=> props.primary ? '#0033cc' 
                    : props.attention ? '#ef857d' 
                    : props.fb ? '#3b5998' 
                    :'#99ccff' };
    height: 2.5rem;
    width: 10rem;
    margin: ${ props => props.margin ? 'auto 1rem' : 'auto'};
    padding: 0.5rem 2rem;
    color: white;
    border: 2px solid white;
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

export const InputStyled = styled.input`
    padding: 0.5rem 1rem;
    margin: 1.5rem auto;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid ${props => props.attention ? '#ef857d' : '#0033cc'};
    width: 60%;
    font-size: 1.3rem;
    font-family: 'Bubbler One', sans-serif;
`;

export const CloseButton = styled.div`
    text-align: right;
    cursor: pointer;
`;

export const Link = styled.div`
    background: ${props => props.bg ? 'blue' : 'none'}
    width: fit-content;
    margin: 1rem;
    cursor: pointer;
    font-size: 1.3rem;
    color: ${props => props.attention ? '#ef857d' : 'default'};
    font-weight: ${props => props.bold ? 800 : 'default'};
    &:hover {
        color: #bedfff;
    }
`;

export const LinkBordered = styled(Link)`
    border-bottom: .5px solid #525252;
    padding: .5rem;
    width: 70%;
    text-align: center;

    &:hover{
        border-bottom: .5px solid #bedfff;
    }
`;

export const ModalContent = styled.div`
	z-index:2;
    width: 80%;
	margin: 3rem auto;
	padding: 1.5rem;
	border:none;
    border-radius: 5px;
	background:#fff;
    position: fixed;

    @media (min-width: 768px){
        width:50%;
    }
    
`;

export const ModalOverlay = styled.div`
    z-index:1;
    display: ${ props => props.flex ? 'flex' : 'none' };
    justify-content: center;
    align-content: center;
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:120%;
	background-color:rgba(153, 204, 255, 0.8);
`;