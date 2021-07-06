import React from 'react'

class Login extends React.Component {

    state = {isSignedIn: null}

    renderAuthButton = () => {
        if(this.state.isSignedIn === false){
            return null;
        } else if (this.state.isSignedIn){
            return (
                <button className={`ui blue google button`}>
                <i className="google icon" />
                    Sign Out
            </button>
            )
        }
        else {
            return (
                <button className={`ui blue google button `}>
                    <i className="google icon"/>
                    Sign In
                </button>

            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>

    )
    }
}

export default Login;