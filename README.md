# CyberDojo : Team 6
# Members
Project Manager: Maddie Brown (maddieslayy)

Communications Lead: Thomas Doan (tdoan19)

Git Master: William Hays (Williamhays27)

Design Lead: Ahmad Hijazi (ahmxdhijazi)

Quality Assurance Tester: Brandon Facey (KyoukaHeiwa)

# About Our Software

CyberDojo is a platform designed to enhance your cybersecurity
knowledge and skills through interactive learning experiences.
Our mission is to empower individuals and organizations with the
tools and knowledge needed to navigate the ever-evolving
landscape of cybersecurity threats.

## Platforms Tested on
- MacOS
- Linux
- Windows

# Important Links
Kanban Board: https://sealteamsix.atlassian.net/jira/software/projects/KAN/boards/1

Designs: https://www.figma.com/design/RKBsFCjHKgnBgtJlDneJ3n/Login-Main-Pages?node-id=0-1&p=f&t=QIvF6oXn0JBb2Md3-0

Styles Guide(s): https://google.github.io/styleguide/tsguide.html

# How to Run Dev and Test Environment

## Dependencies
List of Dependencies, sourced from package.json file

    "@testing-library/dom": "^10.4.0",

    "@testing-library/jest-dom": "^6.6.3",

    "@testing-library/react": "^16.2.0",

    "@testing-library/user-event": "^13.5.0",

    "@types/jest": "^27.5.2",

    "@types/node": "^16.18.126",

    "@types/react": "^19.0.12",

    "@types/react-dom": "^19.0.4",

    "class-variance-authority": "^0.7.1",

    "clsx": "^2.1.1",

    "firebase": "^11.6.1",

    "lucide-react": "^0.485.0",

    "react": "^19.1.0",

    "react-dom": "^19.1.0",

    "react-firebase-hooks": "^5.1.1",

    "react-router-dom": "^7.5.2",

    "react-scripts": "5.0.1",

    "tailwind-merge": "^3.0.2",

    "tw-animate-css": "^1.2.5",

    "typescript": "^4.9.5",

    "web-vitals": "^2.1.4"

### Downloading Dependencies
Describe where to download the dependencies here. Some will likely require a web download. Provide links here. For IDE extensions, make sure your project works with the free version of them, and detail which IDE(s) these are available in. 

## Commands
Before launching CyberDojo, type the following commands into the VS Code terminal when you open up the codebase. After installing all three, you can type in "npm start" to start the CyberDojo website in browser.

Step 1A. Download Git and Node.js using the following links: https://git-scm.com/downloads/win, https://nodejs.org/en/download

Step 1B. Some problems may occur when downloading Node.js. Some fixes include: Running powershell as adminstrator and typing in the following command: fnm env --use-on-cd | Out-String | Invoke-Expression
This command allows you to do the fnm install 22 command listed on the Node.js link.

Step 1C. You may run into a problem that does not allow you to run scripts, which stops you from using npm -v.
If this occurs, run the following command to bypass that: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
After this, you should be able to freely use npm commands.

Step 2. Clone the repository https://github.com/CSC-3380-Spring-2025/Team-6.git 

Step 3. Use npm install on the following:

```sh
npm install react
```

```sh
npm install firebase
```

Step 4. Use npm start to launch CyberDojo.
Also the USERNAME AND PASSWORD have length requirments so make sure to fulfill those for the sign in feature(if it is giving you issues)
```sh
npm start
```
