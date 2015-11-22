# jQuery Chat Application

Assignment from The Iron Yard-Austin

Week 4 - day 15

## Description

You will be using everything you&#x27;ve learned thus far to create a web based chat application similar to slack.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how to make AJAX GET requests to retreive data from a server.
* Understand how to make AJAX POST requests to save data to a server.


### Performance Objectives

After completing this assignment, you be able to effectively use

* $.get
* $.post
* setInterval
* $.html / $.append

## Details

### Deliverables

* A repo containing at least:
  * `scripts/main.js`
  * `index.html`

### Requirements

* No ESLint warnings or errors


## Normal Mode

You will be creating a multi-user chat application similar to slack. If you think about it the right way, a chat application is similar to a todo list that multiple people can add to. Since you've already built a todo list this should be a piece of cake!

Here are the requirements:
* Any user should be able to visit the website and type in a chat message.
* That chat message should be saved to the server via a POST request.
* Within 2 seconds, all other users who have the page open should see the newly posted message along with the date and time when the message was posted. Messages should appear on the page without having to refresh the page.

## Hard Mode

* A user should be able to set a username. All messages posted by that user should show the username of the user who created the message.
* Support emoticons in your chat application (hint: google "jquery emoticon plugin")
* Create a chat bot that automatically responds to certain messages with responses. For example, if a user types in "amiright" the chat bot would automatically respond with "you are so right!"

## Nightmare Mode

Go as far as you want with these:

* Play a sound anytime a new chat is posted into your chat room (hint: google "play sound with javascript")
* Implement a swear word filter. We need to keep things PG. No four letter words should be printed into the chat room. Instead display '****'
* If a link to a gif, jpg, or png image url is posted into chat, show that image in addition to the link.
* Play a sound only if a message is posted in the chat room that includes @**username**


## Notes

* You will need to use Tiny Pizza Server to store your data: http://tiyfe.herokuapp.com/collections/yournamehere
* You might want to look into [moment.js](http://momentjs.com/) for handling dates and times.
