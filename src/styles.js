import styled, {createGlobalStyle} from "styled-components";



export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: background-color ease .3s;
        color: ${({ theme }) => theme.title};
        font-family: 'Montserrat', sans-serif;

    }
    :root{
        --bg-color:${({ theme }) => theme.bgPageColor};
        --secondary-color: ${({ theme }) => theme.mainColor};
        --title-color: ${({ theme }) => theme.title}

        --font-size--1: clamp(0.9rem, 0.06vw + 0.8rem, 0.87rem);
        --font-size-0: clamp(1rem, 0.25vw + 0.95rem, 1.25rem);
        --font-size-1: clamp(1.25rem, 0.63vw + 1.13rem, 1.88rem);
        --font-size-2: clamp(1.56rem, 1.25vw + 1.31rem, 2.81rem);
        --font-size-3: clamp(1.95rem, 2.27vw + 1.5rem, 4.22rem);
        --font-size-4: clamp(2.44rem, 3.89vw + 1.66rem, 6.33rem);
        --font-size-5: clamp(3.05rem, 6.44vw + 1.76rem, 9.49rem);
    }

    body{
        font-size: var(--font-size-base);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--bg-color);

        @media (max-width: 425px){
          font-size: 80%;}  
    }

`
   

export const Main = styled.main`
width: 55vw;
height: 72vh;
max-height: 670px;
max-width: 800px;

display: flex;
flex-direction: column;
gap: 1.2rem;
margin-bottom: 2rem;

header{
    width: 100%;
    background-color: var(--bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;
    color: var(--title-color);

    h1{
        color: var(--title-color);
    }
}

span{
    display: flex;
    align-items: center;
    gap: .8rem;
    cursor: pointer;
}

@media (max-width: 650px){
    width: 80vw;
    margin-bottom: 4rem;
}

@media (max-width: 425px){
    width:90vw;
}
`

export const SearchWrapper = styled.div`
width: 100%;
flex-basis: 15%;
background-color: var(--secondary-color);
border-radius: 10px;
max-height: 80px;
min-height: 60px;

display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
padding: 0 1rem;

box-shadow: ${({ theme }) => theme.boxshadow};

input{
    width: 80%;
    border: none;
    background-color: transparent;
    font-size: var(--font-size-0);
    outline: none;
    color: ${({ theme }) => theme.title};;
    opacity: .8;
    &::placeholder{
        color: ${({ theme }) => theme.title};
    }

    @media (max-width: 425px){
        font-size: var(--font-size--1);
}
}


button{
    background-color: #0076F8;
    border: none;
    height: 60%;
    border-radius: 6px;
    color: #fff;
    padding:0 1rem;
    font-size: var(--font-size--0);
    cursor: pointer;

    @media (max-width: 425px){
        padding:0 .9rem;
        height: 50%;
}
}

`


export const ContentWrapper = styled.div`
flex: 1;
background-color: var(--secondary-color);
border-radius: 10px;
display: flex;
box-shadow: ${({ theme }) => theme.boxshadow};

img{
    flex-basis: 30%;
    border-radius: 50%;
    width: 10%;
    align-self: flex-start;
    padding: 2rem;
    min-width: 140px;
}

@media (max-width: 1200px) {
    img{
        display: none
    }

}

`

export const UserInfo = styled.div`
flex: 1;
margin: 2rem 1rem;
display: flex;
flex-direction:column;
gap: .7rem;
color: #fff;
`


export const ContentUser = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
gap: 1.5rem;
height: 80%;

p{
   
        opacity: .7;
    
}

`
export const HeaderUserInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

h3{
    opacity: .7;
    font-size: var(--font-size--1)
}
h2{
    font-size: var(--font-size-2)
}

img{
    display: none;
}

@media (max-width: 1200px) {
    img{
        display: block;
        align-self: center;
        padding: .6rem;
    }
    flex-direction: column;
   
    

    
}

`
export const UserStatsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
background-color: var(--bg-color);
padding: 1rem;
border-radius: .5rem;
color: #f0f0f0;

`

export const UserStats = styled.div`
    display: flex;
    flex-direction: ${props => props.orientations ? 'column' : 'row'};
    align-items: ${props => props.orientations ? 'default' : 'center'};
    gap: .5rem;

    h3{
        opacity: .7;
        font-size: ${props => props.orientations ? 'var(--font-size--1)' : 'var(--font-size--1)'};

        &:hover{
            overflow: hidden;
            text-overflow: ellipsis
        }
    }

    h4{
        font-size: var(--font-size-1);
    }
`

export const UserMediasWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: .8rem;

@media (max-width: 1200px) {
    grid-template-columns: 1fr

}

`
