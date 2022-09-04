import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import Home from "./Home";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

export function getApiDomain() {
    const apiPort = process.env.REACT_APP_API_PORT || 3001;
    const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
    const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
    return websiteUrl;
}

SuperTokens.init({
    appInfo: {
        appName: "SuperTokens Demo App", // TODO: Your app name
        apiDomain: getApiDomain(), // TODO: Change to your app's API domain
        websiteDomain: getWebsiteDomain(), // TODO: Change to your app's website domain
    },
    recipeList: [
        EmailPassword.init({
            emailVerificationFeature: {
                mode: "REQUIRED",
            },
        }),
        Session.init(),
    ],
});

function App() {

    return (
        <SuperTokensWrapper>
            <Router>
                <Routes>
                    {/* This shows the login UI on "/auth" route */}
                    {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
                    <Route path="/" 
                        element={
                                /* This protects the "/" route so that it shows
                                <Home /> only if the user is logged in.
                                Else it redirects the user to "/auth" */
                                <EmailPassword.EmailPasswordAuth>
                                    <Home />
                                </EmailPassword.EmailPasswordAuth>
                                }/>
                </Routes>
            </Router>
        </SuperTokensWrapper>
    );
}

export default App;
function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username == 'Webdev' && password == 'learn')
    {
        alert('Login Successfuly!');
    }
    else{
        alert('Login Failed')
    }

}