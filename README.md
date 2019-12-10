# CPSC 349 - Project 2

---

## Team members:
* Ian Michael Jesu Alvarez
* Joesh Bautista
* Hao Nguyen
* Eli Manzo De Leon

---
####Summary
Firebase site: [https://anti-edge.firebaseapp.com/](https://anti-edge.firebaseapp.com/)

> This is a fun and intuitive web application that helps indecisive users choose which restaurant to __*Binge*__ on.

----

## Before testing...
1. Make sure to have the most updated version for node downloaded [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

----
## Steps for testing this project:
1.  Clone the repository

2. On your desired directory, create a react app with this code

> npx create-react-app my-app


3. Navigate to the src folder that the react template created and delete its contents

```
cd my-app 
cd src
//If you're using a Mac or Linux:
rm -f *

//Or, if you're on Windows:
del *

//Then, switch back to the project folder
cd ..

```
 
4. Copy the contents of the *src* folder from cloned repository, and paste it inside the *src* folder that has the react template you just created

5.Replace the index.html in the *public* folder of the react application template to the *provided index.html*

6. Install the necessary modules:
```
npm install --save firebase
npm install @material-ui/core  
npm install @material-ui/icons
npm install react-gesture-gallery
npm install react-gesture-responder
npm install classnames --save
npm install --save react-router-dom
npm install --save recompose
npm install --save reactstrap react react-dom
npm install node-sass
npm install jquery
```

7. Make sure you are in the **my-app** directory
7a. ```npm start```
