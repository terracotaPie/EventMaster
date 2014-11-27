# Architecture
## List of Components
* The backend was implemented in Python with the Flask framework. We chose Python because there are several of us that know Python. We chose Flask because it is simple and easy to pick up, and provided a large part of the basic functionality that we sought without a great deal of complicated configuration. The reason we chose Flask over something like Django is because the backend in our project was used mostly as an API endpoint that returns information and does not generate pages, which Flask is good for.
* We chose to use SQLite for the database layer, because it required minimal configuration and would serve our purpose for the scale of this project.
* We used Grunt, an automatization software, to prepare the frontend files before they were uploaded; it runs jshint, pythonhint, a JavaScript minifier, automatic tests, and many more things that helped keep up the quality on the frontend software.
* We used bower for installing packages since several team members knew how to use it and it could easily install all the packages we needed.
* We used Karma and Jasmine for testing, because they are the appropriate method of testing frontend code.
* We used Angular.js for frontend functionality, since it is a great framework that allowed us to do everything that we needed to do, and because it is very common and useful.
* We used Yeoman templates for the structure of the website, since they allowed us to create the website easily and quickly, and still have it look good and be usable.
* We used Bootstrap for the look, to make it modern and to provide several simple functionalities that users would expect, without having to reimplement them ourselves.

## Interactions Between Components
Most of the interaction and behaviour that the user sees is handled by frontend code, and the backend is used only to store and retrieve information. When the user interacts with the website and requests certain events or adds events, the logic is handled entirely on the server, but anything related to the look of the website, or UX-related tasks are handled by the JavaScript code on the frontend.

## Two Significant Architecture Decisions
 1. **Making the project be a web app**  
We decided to make the project be a web app because several of our team member already had extensive experience making web apps before the project started, and we wanted to leverage that experience and knowledge. We also felt that we could create a more fully-featured and better-looking product that way that we would have been able to with a desktop application or a console application. Furthermore, this allows us to use the application and work on it from any computer and any location, as well as to be able to show it to others with minimal effort. We stil think that was a good decision to make, since it allowed us to use a great asset of our team members to its full potential, and for all the reasons listed above.

 2. **Using the MVC pattern for the whole project**  
We made the decision to build the app using the MVC pattern because it is extremely popular right now, and because it is a very good way to create a web application. It allowed us to separate the roles of team members appropriately and to focus on different aspects of the project separately, such as decoupling the logic from the look of the website. It also allowed us to reduce the complexity of the codebase and make it easier to understand and work on. We still believe that this was a good design decision, as we can't think of a different pattern that would have worked better in this particular case.
