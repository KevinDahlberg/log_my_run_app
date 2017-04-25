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

* 3:13 - First break.  "class meeting"

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

* 5:49 done for the day. ~4 hours of coding at Prime.

## 4/25/2017

* 1:10 pm start

Going to fix that bug on login, set up ng-click on each new item.  Also need to set up a function that sends
the user to the history screen after submit, and sends the user to a "runView" when the item in the history
is clicked.

Login Problem - Staying logged in when the login button is pressed.  It's logging me in and out on the server side.

Login problem fixed.  There was a problem with the routes after login and logout.

ng-click needs to be set up on the new items.
