[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7Tmn2VQK)

# Authors
Name: Miriam Binyamines Email: miriamman@edu.hac.ac.il
Name: Salomon Demma Email: dennasa@edu.hac.ac.il

# Explanations
This project is a movie app that allows you to search for movies - used TMBD api.
there is a search bar that you can search for movies by name, and a filter that you can filter the movies by genre,
or by year of release.

also the search history is saved, and you can see it in the search history page.
by clicking on the search history you can search again for the movie you searched for - its appear in the search bar automatically.

purchase history is also saved in the database.
after the purches is done, you will be redirected to the home page automatically after few seconds.

# Project Structure
home page - the main page of the app, you can search for movies here.
cart page - the page that shows the movies you chose to buy.
checkout page - the page for entering the details of the buyer.
search history part - the page that shows the search history

# Project Design
the project is divided into 3 main parts:
1. client - the client side of the app, written in react.
2. server - the server side of the app, written in java.
3. database - the database of the app.

we used reducer, context and costume hooks in the client side.


---------------------


# Initializing the template

In order to initialize the project make sure to:

1. When you open the project, if intelliJ propose to "Load Maven Project" do it. You can later reload maven with the "M" icon on the right of the screen, or by right clicking on the pom.xml file and selecting "Maven -> Reload project".
2. You see red lines in the code? Go to File -> Project Structure -> Project Settings -> Project -> SDK -> and choose your Java SDK
3. Still see red stuff? Open the same dialog and click on "Fix" if you see some
4. Edit your configuration "ex4" at the top right. Make sure the "Main class" is set to "hac.DemoApplication" and that Java is set

Everything ok?
1. Run the SQL server as shown in the video (week 6) and create a database named "ex4". The DB credentials are stored in the application.properties file. You may change them if you want.
2. Run the project, you should not see any errors in IntelliJ console

So far the only route you can check is http://localhost:8080/debug/purchases
that returns a list of all purchases in the DB (empty for now).

## Initializing the React client (movie-app)

Open a terminal in *movie-app* and run `npm install` and then `npm start`. You should see the client running on http://localhost:3000.
You can also open another instance of IntelliJ and open the *movie-app* folder as a project. You can then run the client from there.

## Using the provided code to store purchases in the DB

We provide you with ready-to-use code to store purchases in the DB, in order to give you a taste of what Spring can do for you.
Look at the DebugController class. It has a method called "addPurchase" that receives a Purchase object and stores it in the DB.
When you develop your own controller, you must declare the repository member exactly as it is declared in the DebugController class.
Then you can use it to store purchases in the DB (repository.save(purchase)).

## Still have problems? Come to class.
