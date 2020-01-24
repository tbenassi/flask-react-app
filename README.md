# flask-react-app

Make sure python is installed. I recommend using pyenv, and virtualenvwrapper.  
Install nvm (node version manager).  
`nvm install 10.15.0`  
`cd react-client`  
`npm install`  
`cd ..`  
`pip install -r requirements.txt`  

## Running Dev:
Add env variables to .env at the root of the react client directory  
Add a `dev=true` env variable to pycharm run configuration or just `export dev=true`  
Add these env variables to the .env file:  
- REACT_APP_OKTA_CLIENT_ID
- REACT_APP_OKTA_ISSUER
- REACT_APP_OKTA_AUDIENCE

To get these env variable values, create a new dev Okta account, and add a new web app.  
The audience will usually be 'api://default' unless you specify otherwise in Okta.

## Running prod:  
When you are ready to run a more prod version of this app, you can build the react static files with `npm run build`  
Get rid of the dev=true env variable. This will tell the `__init__.py` in the main flask app to serve the static files  
that are built when you run `npm run build`
