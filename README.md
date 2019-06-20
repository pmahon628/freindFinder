# freindFinder
In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.


### Before You Begin

* Check out [this demo version of the site](https://friend-finder-fsf.herokuapp.com/). Use this as a model for how we expect your assignment look and operate.

* Create a folder called `FriendFinder`. Inside the folder, organize your directories so it matches the following:

  ```
  FriendFinder
    - .gitignore
    - app

      - data

        - friends.js - hold array of objects - name, photo(maybe), scores.

      - public

        - home.html - not needed?

        - survey.html - survery data

      - routing
        - apiRoutes.js -A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


        - htmlRoutes.js -  GET Route to /survey which should display the survey page A default, catch-all route that leads to home.html which displays the home page.
    - node_modules

    - package.json

    - server.js  - express and path npm packages
  