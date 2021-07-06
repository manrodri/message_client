import React from 'react'
import {Link} from "react-router-dom";
import Login from "./Login";

const Header = () => {
    return (
        <div className={`ui secondary pointing menu`}>
            <Link to={'/'} className={`active item`}>
                Chats Serverless
            </Link>
            <div className="right menu">
                <Link to={'/'} className={`ui item`}>
                    All conversations
                </Link>
                <Login/>
            </div>
        </div>
    )
}

export default Header;