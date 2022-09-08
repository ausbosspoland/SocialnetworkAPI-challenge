# SocialnetworkAPI-challenge
NoSQL Challenge 18: Social Network API - Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table of contents
[Description](#description)
[UserStory](#user-story)
[AcceptanceCriteria](#acceptance-criteria)
[Install](#install)
[Testing](#testing)
[Author](#author)


## Description
Built an undeployed API for a social network web application where users can create profiles, share their thoughts, react to friends’ thoughts, and create a friend list.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Install
npm install, I believe that will install all of the packages in the package.json
if you have any trouble, npm install express, npm install mongoose, npm install moment, are the packages used. running mongod in your terminal should start the database if you have any trouble with that. brew services start mongodb-community@6.0  and  brew services stop mongodb-community@6.0 may help as well.

npm start   starts the server

## Walthrough Video Testing
Get/Create/Delete Users, Add/Delete Friends https://drive.google.com/file/d/1C6nkXbIi16Yr2iLRktXw5oClkM9VfiJS/view

Create/Get/Delete Thought, Update Thought https://drive.google.com/file/d/1lHGhWYtGLvyl2axyG0GahNHb8VH0PrTm/view

Post/Delete Reaction to Thought https://drive.google.com/file/d/1s4cWc6Y1qDhNSE-ciLnK3obWPUOHDkVl/view

Almost forgot to demonstrate Deleting a User https://drive.google.com/file/d/1ABUkj5JfUzR9_vsr0283qDWEeXOKdKdV/view

## Testing
Use Insomnia to test out API calls

// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}

## Author
Github repository - https://github.com/ausbosspoland/SocialnetworkAPI-challenge
Email - austinjpoland311@gmail.com