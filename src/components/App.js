import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import ConversationsList from "./ConversationsList";
import ConversationDetail from "./ConversationDetail";

import Header from "./Header";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Route path={'/'}  exact component={ConversationsList}/>
                <Route path={'/conversation/show'} component={ConversationDetail}/>
            </div>
        </BrowserRouter>

    )
}


export default App