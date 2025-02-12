import React from "react";
import "./css/LoginForm.css"
import { Navigate, useOutletContext } from "react-router-dom";

class LoginForm_ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            buttonBorder: "1px solid lightgray"
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.login = this.props.context.login.bind(this)
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log("OK")

        if (this.state.email === "me@me.com" && this.state.password === "admin") {
            localStorage.setItem("auth", "true")
            this.login()
        } else {
            this.setState({
                buttonBorder: "3px solid red"
            })
        }
    }
    render() {
        return (
            <div className="login">
                <h1>З поверненням!</h1>
                <p>Введінь дані вашого облікового запису для входу в систему</p>
                <form className="loginform" onSubmit={this.handleSubmit}>
                    <p>Емейл</p>
                    <input style={{outline: this.state.buttonBorder, border: "none"}}
                        type="email" value={this.state.email} onChange={this.changeEmail}></input>
                    <p>Пароль</p>
                    <input style={{outline: this.state.buttonBorder, border: "none"}}
                        type="password" value={this.state.password} onChange={this.changePassword}></input>
                    <input type="submit" value={"Далі"}></input>
                </form>
            </div>
        )
    }
}

export default function LoginForm() {
    const context = useOutletContext()
    console.log(context)
    return !context.isauth ?
            <LoginForm_ context={context} />
            :
            <Navigate to="/profile" />
}
