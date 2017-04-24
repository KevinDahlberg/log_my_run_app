# Log My Run App - Prime Academy Solo Project

## Application Overview

Log My Run is a full-stack web application that provides a simple, user-friendly, way for users to track their runs and document their workout progress.  This app is different from similar apps because it has fewer features, which reduces the learning curve and increases the chances of the app getting continued use.

## Assumptions

- While completing this estimate the following assumptions were made.
- Facebook will allow a user to post from an app (for the stretch goals)
- The https://openweathermap.org/api API will continue to operate (stretch)

## Technologies
- Node
- Express
- Angular
- Facebook API
- MongoDB
- Mongoose
- HTML
- CSS
- Angular material


## Application features

1. Log in Screen
  - “Local” login
    - User will either login with their credentials, or they will go to a register screen where they will choose a unique user-name and a password.

2. Home Page

  - User is then taken to the homepage after logging in.

  - On the homepage the user can select the date.  When the date is selected, it will show the runs for that week (Sunday-Saturday).  Below the runs it will show a (running) total of the week, month and year.  If the user picked a date in the past, the week totals will change to reflect that week.

  - The second page after login shows the information of the run if the user clicks on that day.  The user can edit or delete that run.

3. Enter your run

  - When the user clicks the button to add a run, they are taken to the log run screen.

  - On the screen there is a:
    - dropdown to choose the date
    - dropdown items to select the distance run and whether it’s in miles or kilometers
    - dropdown menus for time, allowing the user to select hours, minutes, and seconds
    - a place for the user to enter notes on the run.

  - Stretch goals for this view include:
    - A way to pull in the weather from a weather API and edit it.
    - An option to post their run on facebook.

## Browsers
  * Application will fully support browsers listed below. All browsers or versions not listed below are considered out of scope.

    - Android - 6.0
    - IOS - 10.0
    - Safari - 10.1
    - Chrome - Version 57.0.2987.133

## Tasks

  * MVP - Create a new run with text inputs for the run, time and date and connect it from the DB to the front end.
    - [ ] Set up file structure, grunt, package.json, readme
    - [ ] Spin up server
    - [ ] Connect server to mongo DB
    - [ ] Create POST route to DB that inputs distance, time, and date.
    - [ ] set up input fields on front end
    - [ ] Create GET route to DB that gets all of the runs
    - [ ] Display runs to DOM

  * User Login and register new user
  * Homepage that displays the information from the Database and shows the weekly, monthly, and yearly summary
  * Dropdown menus, calendar, and notes for inputting a run
  * View of all the week’s runs on homepage with the ability to select a different week from a calendar
  * View/Edit/Delete run view with all of the dropdown and select date features of the add run screen
  * Style CSS
  * Post status to facebook (stretch)
  * Weather API to display the weather (stretch)
    (possible api: https://openweathermap.org/api)
  * Adding the ability to show different data and graphs(stretch)
