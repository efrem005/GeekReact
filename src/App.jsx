import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import ChatPage from "./pages/ChatPage";
import UsersPage from "./pages/UsersPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import {createTheme, ThemeProvider} from "@material-ui/core";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export default function App() {

    const [dark, setDark] = useState(false)

    const theme = createTheme({
        palette: {
            type: dark ? 'dark' : 'light',
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            }, secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            }
        }
    })

    const toggleChecked = () => {
        setDark(!dark)
    }

    return (<ThemeProvider theme={theme}>
        <Routes>
            <Route path={'/'} element={<Layout dark={dark} toggleChecked={toggleChecked}/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/chat/:id'} element={<ChatPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/profile/:id'} element={<ProfilePage/>}/>
                <Route path={'/register'} element={<RegisterPage />}/>
                <Route path={'/login'} element={<LoginPage />}/>
                <Route path={'*'} element={<ErrorPage/>}/>
            </Route>
        </Routes>
    </ThemeProvider>);
}