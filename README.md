# Intro to API Workshop w WiCS

This document assumes that you are starting from a *blank slate*. Feel free to skip steps if you have certain software installed prior. 

## Pre Workshop Instructions
To be done prior to the start of the workshop:

## 0. Creating your own Project Repository
- Click on **Fork** to create your own repo and then click **Create Fork**.

## 1. Install VSCode and Git

### a. Install VSCode
- Download VSCode from the [official website](https://code.visualstudio.com/download)
- Install Python extension from the left navigation bar

### b. Install Git and set up GitHub
- Create an account on [GitHub](https://github.com/)
- Install Git from the [official website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 
  - **For Mac users**, install [Homebrew](https://brew.sh/) and then type `brew install git` on the terminal. 
- After installation, open Git Bash/(Terminal for Mac users) from your Start menu and type `git --version` to confirm
- Set up your username and email globally through these commands:
  - `git config --global user.name "Your Name"`
  - `git config --global user.email "your.email@example.com"`

- To work with GitHub on VSCode install GitHub Repositories from the Extensions tab and you'll see a **Source Control** icon on your navigation tab an an option to clone Git repository etc.

## 2. Backend Installation : Python3, pip
- For Windows Users, Download Python from the [official website](https://www.python.org/downloads/). Ensure to select "Add Python to PATH" during installation.
- For Mac Users, install using Homebrew : `brew install python`
- Confirm installation by typing `python --version` and `pip --version` on Command Prompt

## 3. Frontend Installation : Nodejs and npm
- For Windows users, install [Node.js and npm LTS version](https://nodejs.org/en/download)
- For Mac users, using Homebrew `brew install node`
- Confirm installation by running `node -v` and `npm -v`

## During the Workshop : 
## Set up Project locally
- Go to your Forked Repository on Github, Click on green **Code** button and copy the URL (using HTTPS or SSH)
- Open up VS Code and in the home page or under Source Control, click on **Clone a Repository**. Choose a directory to store your project on your local computer. You can also do the same from the *command line* using `git clone REPO_URL`
- You will now see a local version of all the files/source code from GitHub. 
### a. Set up Backend
- Move into the backend directory - `cd server` 
- Create a new virtual environment - `python -m venv .venv`
- Activate the virtual environment
    - For Windows : `.\.venv\Scripts\activate`
    - For Mac : `source .venv/bin/activate`
- You will now see a (.venv) infront of your command line
- To install all dependencies and packages, run `pip install -r requirements.txt`
- **Note:** To deactivate, run `env\Scripts\deactivate.bat`
- Run `cd app` and  `set FLASK_APP=server.py` to set the flask app
- Run the flask backend in debug mode for automatic reloading : `flask --app server.py --debug run`
- Your flask server will now be running on `localhost:PORT`! You can look at the terminal for the port number
- **Note for Mac users-** if your getting an error `no module named flask_cors`, reactivate your environment while in env by running `source .venv/bin/activate`

### b. Set up Frontend
- Open up a new terminal + button on top right of the terminal and run `cd client`
- Install all packages by running `npm install`
- To run the react frontend, `npm run dev`
- Your react app is now running on `localhost:PORT`! You can follow the link from the terminal for the port number.

## Resources:
This can help you start your own frontend and backend from a blank repository
- [Flask Intro](https://python-adv-web-apps.readthedocs.io/en/latest/flask.html)
- [Flask Tutorial](https://flask.palletsprojects.com/en/stable/tutorial/layout/)
- [Building a REST API with Flask](https://auth0.com/blog/developing-restful-apis-with-python-and-flask/)
- [Set up your React Project with Vite](https://vite.dev/guide/)