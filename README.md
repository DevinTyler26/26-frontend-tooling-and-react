![cf](https://i.imgur.com/7v5ASc8.png)    
# Lab 26: Frontend Tooling and React with Cowsay Browser 

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will be able to create and render React components to the DOM
* Students will be able to add event listeners to React components 
* Students will be able to update React component state
* Students will be able ot utilize [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), or a Javascript object to find common values between two sets of data to render to the DOM

## Requirements  
#### Configuration  

Your lab directory must include:  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.eslintignore** -- with the class .eslintignore
* **.babelrc** -- with all dependencies and dev-dependencies 
* **package.json** -- with all dependencies and dev-dependencies 
* **package-lock.json** -- with the package.json lockfile
* **webpack.common.js** -- per lecture code
* **webpack.dev.js** -- per lecture code
* **webpack.prod.js** -- per lecture code
* **src/** -- conating the frontend code
* **src/main.js** -- containing the entire app
* **src/style** -- containing your sass
* **src/style/main.scss** -- containing the frontend code
* **Remember to follow [the new front end lab scaffold template for newly updated configuration files](https://github.com/codefellows/seattle-javascript-401d25/tree/master/00-FRONTEND-lab-scaffold-template) on the new additions you need for files such as *eslintrc.json* and *package.json***. 


 
#### Feature Tasks  
Create the following component
###### Header
* Modularize a `Header` component that contains some header title of your choice and import it into your main `App` component
###### App
* Should contain the entire application's view and state
* Should have a form with two input fields
* The app's state should have two properties that map back to the values of those two inputs fields
* The app's state should have two properties that are arrays which store their respective input field value on form submission
* The app should display the `cowsay` image in a `pre` tag. 
* Write a method called `getIntersection` that finds the common values between your two lists and render that as a comma-separated string that is listed in the cowsay bubble. If there are no common values, the cow's text should remain the defaulted `this.state.message`.
* It is recommend that this method follow this signature:
```
getIntersection(firstList, secondList) => comma-separated string of common values between lists OR the default message
```

####  Documentation  
Write a description of the project in your README.md

#### Stretch Goals
* Add a select menu that enables you to change the type of cowfile currently being used
* Add functionality where clicking a list item deletes that item and updates the state accordingly
* Save your lists and any other relevant state properties to local storage so when you restart your app, that data persists on page reload
* CSS it up! Or more accurately, SCSS it up. [Read SCSS docs](https://sass-lang.com/guide) and make your app look amazing. 


## Documentation
- This web app is showing how React works along with some js logic. When you input a message in the two fields, they will be put into list 1 and 2. If any of the values match between list 1 and list 2, those input will said by the cow! If no values match, the default text will stay there.