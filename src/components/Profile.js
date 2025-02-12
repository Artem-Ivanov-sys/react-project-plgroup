import React from "react";
import "./css/Profile.css";
import { Link } from "react-router-dom";

class ProfileButton extends React.Component {
    render() {
        return (
            <Link className="profile_button" to={this.props.link}
                style={this.props.styles}>
                {this.props.text}
            </Link>
        )
    }
}

ProfileButton.defaultProps = {
    text: "Sample text",
    styles: {
        backgroundColor: "#e8e8e8"
    },
    link: "#"
}

export class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "Killer227",
            icon: "\"../../media/az winter.png\"",
            rating: "Еліта"
        }
    }
    render() {
        return (
            <div className="profile">
                <h1>Вітаємо, {this.state.username}!</h1>
                <div className="profile_container">
                    <div className="profile_info">
                        <img className="user_icon" src={require("../media/az.png")}/>
                        <p style={{fontSize:"1.5em"}}>Рейтинг: {this.state.rating}</p>
                        <ProfileButton text={"Створити новий квест"}
                            styles={{backgroundColor: "#eaffc0"}} />
                        <ProfileButton text={"Ваші квести"} />
                        <ProfileButton text={"Редагувати профіль"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
