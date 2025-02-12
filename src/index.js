import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.js"
import Footer from './components/Footer.js';
import LoginForm from './components/LoginForm.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import "./main.css"
import Profile from './components/Profile.js';
import AuthContext from './contexts/AuthContext.js';

export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isauth: isAuthenticated()
    }
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleLogout() {
      console.log("Logout")
      localStorage.setItem("auth", false);
      this.setState({
        isauth: false
      })
  }
  handleLogin() {
    console.log("Login")
    localStorage.setItem("auth", true)
    this.setState({
      isauth: true
    })
  }
  render() {
    return (
      <main>
        <AuthContext.Provider value={{
          isauth:this.state.isauth,
          login:this.handleLogin,
          logout:this.handleLogout
        }}>
          <Header isauth = {this.state.isauth} logout={this.handleLogout} />
          <div>
            <Outlet context={{
              isauth:this.state.isauth,
              login:this.handleLogin
            }} />
          </div>
          <Footer />
        </AuthContext.Provider>
      </main>
    )
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginForm />
      },
      {
        path: "/profile",
        element: isAuthenticated() ? <Profile /> : <LoginForm />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default isAuthenticated;
