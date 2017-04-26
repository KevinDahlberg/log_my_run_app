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
