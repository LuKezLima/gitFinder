import React, {useState} from "react";
import { ThemeProvider } from "styled-components";

import UserStats from "./components/UserStats";

import {GlobalStyles
, Main, ContentWrapper,
SearchWrapper,
UserInfo,
HeaderUserInfo,
UserMediasWrapper,
UserStatsWrapper,
ContentUser} from './styles'

import {BiSearchAlt2} from 'react-icons/bi'
import {BsFillSunFill} from 'react-icons/bs'
import {HiMoon} from 'react-icons/hi'
import {ImLocation2, ImTwitter, ImHome} from 'react-icons/im'
import {FaPaperclip} from 'react-icons/fa'

import {lightTheme} from '../src/themes/light'
import {darkTheme} from '../src/themes/dark'




export default () => {
    const [user, setUser] = useState('')
    const [userInfo, setUserInfo] = useState()
    const [theme, setTheme] = useState("dark")

   

    const BASE_URL = 'https://api.github.com/users'
    const CLIENT_ID = '6360ad7050bdb3481d93'
    const CLIENTE_SECRET = '3ae714568770482c3c6549ff087a31abd4ce2ca5'

    async function getUserData(user){
        if(user !== undefined){
        const response = await fetch(`${BASE_URL}/${user}?client_id=${CLIENT_ID}&client_secret=${CLIENTE_SECRET}`)
        const profile = response.json()
        profile.then(data=> setUserInfo(data))
        } 
        
    }

    function changeTheme(){
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const icon = theme === 'light' ? <HiMoon/> : <BsFillSunFill/>;

    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
        <Main>
        <GlobalStyles> </GlobalStyles> 
            <header>
                <h1 >devFinder</h1>
                <span onClick={e=> changeTheme()}>{theme === 'light' ? 'DARK' : 'LIGHT'} {icon} </span>
            </header>

           <SearchWrapper>
               <BiSearchAlt2 style={{
                   color:'#1B4B8B',
                   fontSize: '1.5rem',
               }}/>
               <input type="text" value={user} onChange={e=> setUser(e.target.value)} placeholder="Search Github Username..."/>
               <button onClick={ async  (e) => {
                   setUserInfo(undefined)
                   getUserData(user == '' ? undefined : user)}
                   }>Search</button>

           </SearchWrapper>

            { userInfo !== undefined ? (
                <ContentWrapper>
               <img src={userInfo.avatar_url} alt="user" />
               <UserInfo>
                   <HeaderUserInfo>
                    <img src={userInfo.avatar_url} alt="user" />
                       <h2>{userInfo.name}</h2>
                       <h3>Joined in {userInfo.created_at.substr(0,9)}</h3>
                   </HeaderUserInfo>
                <p>{userInfo.login}</p>

                <ContentUser style={{
                }}>
                    <p>{userInfo.bio ? userInfo.bio : 'Not Available'}</p>
                    <UserStatsWrapper>

                    <UserStats StatusName={'Repos'} StatusValue={userInfo.public_repos} orientations={true} />
                    <UserStats StatusName={'Followers'} StatusValue={userInfo.followers} orientations={true} />
                    <UserStats StatusName={'Following'} StatusValue={userInfo.following} orientations={true} />
                  
                    </UserStatsWrapper>

                    <UserMediasWrapper>

                    <UserStats StatusName={userInfo.location ? userInfo.location : 'Not Available'} icon={<ImLocation2/>} orientations={false} />
                    <UserStats StatusName={userInfo.twitter_username ? userInfo.twitter_username : 'Not available'} icon={<ImTwitter/>} orientations={false}  />
                    <UserStats StatusName={userInfo.blog ? userInfo.blog : 'Not Available'} icon={<FaPaperclip/>} orientations={false}/>
                    <UserStats StatusName={userInfo.html_url} icon={<ImHome/>} orientations={false} />

                    </UserMediasWrapper>


                </ContentUser>


            

               </UserInfo>

           </ContentWrapper>
            ) : null}
           
        </Main> 
        </>
        </ThemeProvider>
    )
}