import React from "react";
import { Link } from "react-router-dom";

class MenuElement extends React.Component {
    render() {
        return (
            <li style={this.props.styles} className="menu__item">
                <a href={this.props.link}>{this.props.text}</a>
            </li>
        )
    }
}
MenuElement.defaultProps = {
    link: "#",
    text: "Some text",
    styles: {}
}

class MenuButton extends React.Component {
    render() {
        return (
            <li className="menu__item menu__button">
                <Link style={this.props.styles} to={this.props.route} onClick={this.props.action}>{this.props.text}</Link>
            </li>
        )
    }
}
MenuButton.defaultProps = {
    styles: {},
    action: () => {},
    route: "/",
    text: "Sample text"
}

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul className="menu">
                <MenuElement text={"Профіль"} />
                <MenuElement text={"Рейтинг гравців"} />
                <MenuElement text={"Ресурси"} />
                <MenuElement text={"Про нас"} />
                <MenuElement text={"Контакти"} />
                <MenuButton text={"Логін"} styles={{
                    backgroundColor: "#dcfeff",
                }} />
                {!this.props.isauth ?
                    <MenuButton text={"Реєстрація"} styles={{
                        backgroundColor: "#222",
                        color: "white"
                    }} /> :
                    <MenuButton text={"Вийти"} styles={{
                        backgroundColor: "#222",
                        color: "white"
                    }} action={this.props.logout} route={"/"}/>}
            </ul>
        )
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={this.props.link} />
                <div className="logo__text">
                    <p><i><span className="logo__text_orange">P.L.</span> Group</i></p>
                    <p><span className="logo__text_orange">P</span>lay’n’<span className="logo__text_orange">L</span>earn</p>
                </div>
            </div>
        )
    }
}

export class Header extends React.Component {
    render() {
        return (
            <header>
                <Logo link={require("../imgs/logo.png")} />
                <Menu isauth = {this.props.isauth} logout={this.props.logout} />
            </header>
        )
    }
}

export default Header
