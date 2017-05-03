# Blog for Log My Run App - Prime Digital Academy Solo Project

## Monday, April 24, 2017

* 1:13 - started working on the app.  Putting together file structure.  Still need
to do grunt, install dependencies, fire up the server, and put together the README.

Installed grunt, dependencies, and got the JSON package updated
README file finished.  Tasks listed for the MVP.  Goal for today is to get as much of the MVP finished as possible.

First things first, time to spin up the Server.

Server spun up.  I was very fortunate to have that information already created in my sandbox.

Time to access the DB.  The DB that I will be working with is on MLab.

App now connects to the DB.  I also set up the GET, POST, and Delete routes on the server side.

I think all the back end stuff for right now is finished.  Time to tackle the MVP on the front end.

Set up the DOM to insert a run and send it as an object.  At this point it's only logging in a console.log, but it's a start.
One thing that needs to be done is set up the POST route now.  Also need to source the DB factory in the RunService Factory.

3:08 and MVP finished

2 hours into the project and I've already completed the MVP, which is awesome.  I need to take everything from the MVP and put it
into it's own view and compartmentalize things a little bit before moving on, then take a quick break to reset before taking on the login view.

* 3:13 - First break.  "class meeting" - 2:00

* 3:33 - Back to work.

Login Time - First I need to go through the material that is available on setting up a login.  Then I need to write up the to-do
list on setting up the login and the views.  Last step is applying it (duh?).

looks like a lot of the logging in will be copy-pasting stuff that I know works.  The trick will probably be hooking it all up,
but it seems pretty straight forward (he says before digging into it).

The backend stuff was confusing.  I don't know how much of it I need to understand to make this work.  It wasn't covered for more
than a 3 hour lecture in class.  Definitely going to focus on making the front end version work.

ok... imposter syndrome is raising it's dirty head.  And it took all of my control to go through and hammer through
this whole login and register thing.  I still don't have a 100% clue on what I'm doing, but I feel better about
manipulating what I'm doing.  I got a register to work, and the login works, the redirect is the only thing that's a
mess right now.

well, I got the user thing to work on both the front and back end.  now I just have to figure out how to manipulate
it to my own devices.  mini freakout averted.  for now.

Looks like login and register are working ok.  I'm going to need to wait until I style things to get the alerts working
for the login errors and such.

Logging in fine.  Next step is to make sure the website "flow" is there and that I have all the views I need before
moving forward.

I need to put together the run_view view... and I might need to create a few classes to make this work well.  Which is
probably a good thing.  Better to be organized at this point than try to get it done quick and messy.

Created a Run class that creates runs as they come from the DB.  Next step is to have a button/function that allows
the user to view each run individually.

* 5:49 done for the day. 2:16
  - Day: 4:16

## 4/25/2017

* 1:10 pm start

Going to fix that bug on login, set up ng-click on each new item.  Also need to set up a function that sends
the user to the history screen after submit, and sends the user to a "runView" when the item in the history
is clicked.

Login Problem - Staying logged in when the login button is pressed.  It's logging me in and out on the server side.

Login problem fixed.  There was a problem with the routes after login and logout.

ng-click needs to be set up on the new items.

able to go through the views just fine.  it's not elegant, but it works.  The current problem is that the run data isn't restricted to the user.

Looks like I need to add the user name to, or create, a new class that takes the user name into consideration.
I also need to add a username portion to the mongo db

There is certain Data that I need access to across the app - namely the runs for each user.

I need to start the app (after login) creating a new User with what I in the Run Class.

I also need to change the DB Schema to have the User and an Array of runs.  

Login will bring back the user.  With that user we are going to create a new User Class that gets the run info for that user, and then brings it back to the front end.

Trying to decide whether to do a PUT statement for each run or if I do a post statement with the User's name...
I'm thinking that the best thing to do right now is to do a post statement with each user's name, and then filter them out on the GET statement.

started creating user class.  
* 2:51 end (1:41)

* 4:09 pm back at it

so now I have a new user that I create whenever the session is authenticated. The next few steps involve doing something with that user.  Another thing that I know that I've done in a different project (marketplace?), was avoid putting the user into an array, and angular still watched things.

able to get an item created in the DB now with the user name and run information attached to it.  Next up is pulling up the information based on the user.  What I would like is to have server side logic handle all of this, just so someone else's data isn't being sent.

* 5:26 stop time (1:17)
* Total Time:
  - Day: 2:58
  - Total: 7:14

## 4/26/2017
* 9:35 am (hey we're starting before noon!)

up on the docket first today is to have the app pull user specific information from the DB.
I'm going to need to make sure to do minimal work on the client side.  Get the login authenticated with a nice little user.  Then I'm going to take that user and do a call to the DB with that user.  I'll save that information in the factory, just so I'm not having to get it every time I authenticate.  When I log out (or if authentication fails), then I'm going to need to have the information wipe off the factory.

So the way that passport works is that every time it makes a request to the server it has the user id and a bunch of other information attached to the request.  All that I had to do was to access that data and attach the user data to the post request of the encrypted ID to the username.  love it.

I'm getting the Data back from the server and DB the I want it.  Now I just need to make it appear on the DOM.  Nothing to see here kids.

Data is coming back authenticated properly and showing up on the DOM.  Next step is to get rid of the crap code I've written to make this stuff "work".  

Streamlined the way I send a post to the DB.  

View of the run that is clicked on is now showing up in the Run View.

Moved the last of the routed into the UserService Factory.  Something I should have done in the start.  Reminder - it's better to start simple than start with a super complicated project.

Up Next:
  lets get the Delete and Edit routes figured out, just so that is DONE with.

Delete run working.  Now to work on editing a run.

Sucks to have to stop now.  When I come back I need to finish making connections and make my edit run page view work.

* 11:50am stop - 2:15 / 2:15 / 9:29

* 2:00 pm - Back at it.

I need to finish adding my edit page.

It's now going to the edit_run page.  Now I need to make things show up/connect.

I can't get it figured out how to edit information from a default value - and I don't know if I have to.
Everything is going to be figured out with dropdown menus anyways.  time to build those out.  After making sure
I can get the PUT statement to work.

set up dropdown menus.  I'm sure there's an easier way to do it with angular.  just need to take a few minute break to refresh my head.  ng-repeat option in options?

* 3:38 break - 1:38 / 3:53 / 11:07

* 4:00 back at it

setting up constant variables, then going to loop through them for dropdown menus.

datepicker up and running.  Dropdown menus working.  Created a few classes, feeling good.
set up the app to check to see if the runs are stored on the client side, if not it goes and gets the stored runs.

* 7:45 done for the day - 3:45 / 7:38 / 14:52

9:30 - 10:00 - did some coding
  got the styling for the inputs to look like angular material.  looks so freakin cool.

10:30 - did about 10 minutes

Next up - I need to set up a run class that has methods that seperate out and put together the information for display and sending.

* 10:56 - back at it time to create some methods and classes.

k, i've written a bunch of code within as a method within a class.  how the hell do i test it... I put in the console logs... time to go into UserService and write a couple tests

run objects are getting created and pushed into the runArray.  Now I need to test the methods within the run.

decided to just create a new part of each run that has the parsed version of the time and distance.  This allows me to access it whenever I feel like it instead of having to create and replace it every time I decide to go back and forth.

next up is to get the numbers to show up right in the edit view.
the information is showing up on the edit screen, it's just throwing a ton of errors.  The other thing that isn't working right is the date is still messed up, also with all of these changes, add run isn't working right.
aaaaand the Delete button isn't working either.

things to do:
  - [x] Make date show up right
  - [x] Submitting new runs right
  - [x] Make Delete button work again

  * 12:18 - Taking a break for lunch 2:02 / 2:02 / 16:53

  * 1:59 - Back to work
  delete working again.  now it's doubling the runs received from the DB

  * 2:59 - Break 1:00 / 3:02 / 17:53

  2 way binding in NG-Model???

  * 4:20 - back at it

  delete run back to working, runs are showing up on the run edit screen (gotta love double bindind... not!)

  trying to make parsed Miles show up right.  I don't think that should be the answer though... if the miles showed up right from the first place, it should be good across the board.

  * 5:20 - stop at school 1:00 / 4:02 / 18:53

  ## 4/28/2017

  * 10:15 - And we're back... back again...

  I'm thinking that I need to create a new run class with default values.  The "add run" will
  then edit those values the same way the edit run does, with the updated object being sent to the DB
  as a "New" object.

  Using Moment.js to get the date may be the coolest thing every.  Instead of doing a bunch of complicated shit,
  it just created the date with a few lines of code.

  Things are starting to look good.  The date field showed up with todays date, and "submitted" that.  Didn't submit anything else, but hey, it's a start.

  i kept getting a problem with the way that scope was altering the value of the object.  I think I might have found a work around by changing the label?.  I'll see if I can get it to work for all of the default values.

  * 12:33 - Lunch 2:18 / 2:18 / 21:11

  * 1:15 - back at it

  Finally got the default values to show up and be changeable.  I wasn't bringing in the information correctly, go figure.  I'd like to see if I can put that into a class.

  Looks like I don't even need to push things into a thisRun array when creating a new run.  I can just edit it from the enter run view.

  The information is being Posted to the DB from the addRun function.  I need to make it all pretty and stuff, but it's a start.

  Runs coming back from DB and displaying.  Next up is to fix the edit stuff.

  Got through to the runView view just fine.  Able to get a run to populate.  Now I just have to have a run edit properly.

  I also have to make the parsed items and the combined items show up properly.

  Problems with views got fixed as soon as I got rid of all of the old data.

  everything is showing up on the edit run screen just fine now.

  - [x] create method that takes the parsed information and combines it.

  * 2:56 break - 1:41 / 3:59 / 25:10

  4:15 back at it

  first thing I tried for was to move the NewRun into the Run class... didn't work so well.  so much for DRY (will try later though).

  - [x] get information to look the same between the edit run and enter run screens

  enter and edit views are looking right.  runs are being submitted to the database just fine.

  - [x] notes functionality added
  - [x] run history showing up on enter run submit
    - it was an async issue, got fixed by moving the change in location.

  - [ ] clean up code please.
  - [x] instead of pushing the run into an array, create new run when views change?

  with help from nate I was able to figure out what to do with the redundant classes.
  I created a "constant" of a default run.  That way, when I start the app, the default run is created by
  putting that information in as a new Run, which I don't have to worry about the parameters of it being different.
  I also changed the way the run class worked by having it bring in the whole object and then doing stuff with it,
  instead of pulling the individual params out of it right away.

  One thing I would like to do is have the edit run screen alter an existing run and not have to push the run into an array.

  changed the way it saved the runs from being a part of an array to an object.

  NEW PROBLEM - when I alter the default run in the enter run screen, the changes stay.  so the default run isn't always default...

  - [x] fix default run
  - [x] create user class
  - [x] get rid of errors on edit screen

  - for tomorrow, come up with the logic to display the days of week and other things, look at Date functionality with moments.  If you have time, start styling shit.

  7:30 - done for the day (friday) 3:15 / 7:14 / 28:25

## Saturday April 29, 2017

 - 3:30

  I'm thinking that I can use angular copy to fix the issues with the default run.

  Yup, angular copy did it.  Now there's an issue getting to the edit screen when the edit run button is clicked.

  Errors were showing up because of an issue with aria label when there was no label on the partial distance box.

  project could start, dropdown menus created, default run is created, user is created after login, when user is created the runs for that user are put in the array associated with that user.  Utilities type class could be created with all of the routes listed as static options.

  Login and logout could be parts of the User class.

- 4:30 break

- 4:50 back

  user class might just have the login, logout, and register functions (all things you can do with a user).  If I can get the getRun function to work right, I might do that as well, still not sure yet though.

  something funny is happening where different users are getting that aren't theres.  I need to look into that

  I'm thinking that I will also want to abstract out the getUser function... maybe.

  UserAuth factory created to handle login, logout, and register.  Might want to add getUser to it.

  now the runs are saving into the RunArray in the User when the page loads.

about 2 hours of coding.  2:00 / 2:00 / 30:25

## Sunday April 30, 2017

- 4:10

  today's work involves getting my classes ironed out, making sure the app works right from front to end, and getting started on the weekly, monthly and yearly totals.  Along with the totals, I need to make the runs for the week show up.

  - [x] Finish ironing out classes
  - [x] Separate server calls into their own factory
  - [x] Make sure app is working from front to back.
        - the only issue is that when you select a different date it looks weird

- 5:45 break 1:35 / 1:35 / 31:50

- 9:00
    - [x] Rename files so the are consistent.
    - [x] Make sure runs are user specific
    - [x] make selected dates show up right

- 11:00 Done for the day 2:00 / 3:35 / 33:50

## Monday May 1, 2017

 - [x] Figure out how to display weekly, monthly, and yearly totals. probably going to be with the Date property

 - 11:10 back to work

 let's think this out for finding the totals for the week.  I can find all sorts of information from a specific date, including the week of the year and what year it is in.  If every run were to have that information in it, that would make figuring out the information for that week a piece of cake.  That seems like a hacky way of doing it... but not really?  I still need to get at that information anyway when I filter it out.

 11:29 break. 0:19 / 0:19 / 34:09

 11:40 Back

 if week of year = currentWeekOfYear
 then total up the information from day of week 0-6

 if year = currentYear
 then add up all of that info
 if month = currentMonth
 then add up all that info

 add up that info - the info might have to be pushed into an array, and then all of the items of that array are added up

 I'm able to collect the information for each day of the year and total them up now...

 so I have information that I need stored... do I just put it into a new class.  I suppose that's what you do instead of creating an object.

 I ended up putting all of the functionality for creating a summery in the user class.  Now it's just time to figure out how to make it all work the way it's supposed to.

 1:00 - lunch 1:20 / 1:39 / 35:29

 1:30 - back from lunch

 The summery is not populating and is a part of the user class (not sure how that smells but whatever), next up is getting stuff to display on the dom.

 week, month, and year summery are all populating.  Future goals will be to select the date from the calendar and then populate the runs for that week (dropdown menu with selectable dates from user.date.date)

 - [x] display only the runs from this week on the DOM
 - [x] create dropdown menu with remaining days
 - [x] store week date range in object

 current week and all of the information of that week is displaying.  It would be nice to display the range of dates for the week on the info/summery for the view.

 changing the way things are formated halfway through a project sucks

 week total is not displaying correctly when dealing with different months.  Problem fixed.

 dropdown menu kinda showing up.  still need to make it do something when the item is clicked.

 3:40 - stop for a minute. 2:10 / 3:49 / 37:39

 4:05 - back to work

 dropdown menu is now populating without repeating items.  
 up next is figuring out how to make different things show up when an item in the dropdown is clicked.

 6:05 - done for the day. 2:00 / 5:39 / 39:44

## May 2, 2017
11:10 am starting
 - [x] display week of the selected run from dropdown
 - [x] update total of the week based on week selected
 - [ ] ability to select month and update total of month based on month selected. (this one might be a stretch goal).
 - [x] Correct information displayed on edit run screen

 A lot of crap this morning trying to get things to figure out with the add numbers.  I think I might have figured out how to do it with ng-change... maybe.  we'll see?

 1:20 stop for lunch 2:10 / 2:10 / 41:44

 2:07 back at it

 ng-Change worked right before lunch.  First I need to clean up my code and make sure everything is still working right.
 changing the month and the year are serious stretch goals at this point

 3:00 break :53 / 3:03 / 44:47

 4:09 back
 Time to learn me some angular material.  

  - [ ] Order by displaying correctly on home screen

  Design To Do
  App:
  - [ ] Font
  - [ ] header
  - [ ] back button

  Login:
  - [ ] Text size corrected
  - [ ] Text color
  - [ ] primary color fixed
  - [ ] inputs larger,
  - [ ] buttons a better fit

  Home/Show Run:
  - [ ] Text size
  - [ ] Space between Text
  - [ ] division between Text
  - [ ] button size

  View Run:
  - [ ] Back Button

  5:22 Break 1:13 / 4:16 / 46:00
