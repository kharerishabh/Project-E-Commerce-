import React, {useState} from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token, email) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    let initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
   

    const userLoggedIn = !!token

    const loginHandler = (token, email) => {
        setToken(token);
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        //console.log(email)
        // console.log(token)
    }
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        // console.log(token)
    }

    const contextValue = ({
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    })

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)
}
export default AuthContext