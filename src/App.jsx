import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import {createTheme, ThemeProvider} from "@material-ui/core";
// import {useDispatch, useSelector} from "react-redux";


export default function App() {

    // const dispatch = useDispatch()
    // const messageList = useSelector(state => state.message)
    const [dark, setDark] = useState(false)

    const theme = createTheme({
        palette: {
            type: dark ? 'dark' : 'light',
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            }
        }
    })

    // useEffect(() => {
    //     setTimeout(() => {
    //         botMessage()
    //     }, 1500)
    // }, [messageList])
    //
    // const botMessage = () => {
    //     const lastAuthor = messageList[messageList.length - 1]
    //     if (lastAuthor && lastAuthor.author) {
    //         dispatch({type: "BOT_MESSAGE", payload: {
    //                 id: Date.now(),
    //                 chat_id: lastAuthor.chat_id,
    //                 text: `сообщение отправленно от ${lastAuthor.author}`
    //             }})
    //     }
    // }

    const toggleChecked = () => {
        setDark(!dark)
    }

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path={'/'} element={<Layout dark={dark} toggleChecked={toggleChecked}/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/chat/:id'} element={<ChatPage />}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
}