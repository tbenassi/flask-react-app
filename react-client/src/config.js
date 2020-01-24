const CLIENT_ID = process.env.REACT_APP_OKTA_CLIENT_ID;
const ISSUER = process.env.REACT_APP_OKTA_ISSUER;

export default {
    oidc: {
        clientId: CLIENT_ID,
        issuer: ISSUER,
        redirectUri: window.location.protocol + "//" + window.location.host + '/authorization-code/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: false,
    }
};
