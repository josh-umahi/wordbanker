# Wordbanker

My passion project converted into a full stack MERN app.

To see a working demo, [Click here!](https://wordbanker.vercel.app/).

<img src="https://raw.githubusercontent.com/josh-umahi/josh-umahi/master/.github/images/wordbanker_wotd.png"/>
<br>

## The Wordbanker story

Over the last couple of years I developed a passion for reading books, and with each page I flipped there were hundreds of words unfamiliar to me. And of course I googled every new word every single time, but there were two problems with this:
1) It would continuously interrupt my flow state while reading
2) I kept forgetting the definition of the words within minutes of googling them

I created the Instagram page [@wordbanker](https://www.instagram.com/wordbanker/) as a way to combat this by creating a means to learn new vocabulary day by day in a fun visual way that "makes it stick". When working on side projects to satiate my other passion (web development), I decided to turn Wordbanker from just an Instagram page into an entire **social network where anyone can create an account and upload new words with beautiful illustrations and funny sentences to help others to "make it stick"**.

*Now for the techy aspect:* 
<br>

## How this web app was made
Wordbanker was built with the MERN stack and contains complete CRUD functionality and webdriver tests.
The app consists of three layers: 
1) Automation layer
2) Client
3) Server 
<br>

### Automation layer

This layer was built using the package **selenium-webdriver** and a **chromedriver** and it contains two things:

1) Some end-to-end tests I wrote to ensure that all the front-end components are visible when expected and does what it's expected to do.
2) I also wrote Javascript code to populate the site with initial posts from a local file I created.

I chose to hide the automation layer in a private repository because most of it is sensitive code and data that could be taken advantage of by malicious users. 
<br>

### Client

The client side was built using React and some useful dependencies, most notably **Redux** for state management. Also, much of this front-end layer was styled with **Material UI** and its makeStyles function to make the website aesthetically pleasing as well as fully responsive. I also implemented skeleton loading (AKA shimmer loading effect) to provide a better experience to users even during the loading phase.
<br>

### Server

The server side was built with Node JS, Express and some other tools, most notably **MongoDB** for storing and retreiving my data in a NoSQL format.

The other useful dependencies are as listed below:

| Tool                                | Usage                                                  |
| ------------------------------------ | ------------------------------------------------------ |
| **Oxford Dictionary API**          | For getting word pronunciations from the Oxford Dictionary API in order to power the audio feature on the front-end                               |
| **@sendgrid/mail**          | To ensure that the server forwards an email to me whenever a user creates a word post or modifies an existing post. This is my way of manually monitoring posts to ensure that the words and their meanings are accurate.                                   |
| **bcryptjs**          | For encryption and decryption of passwords                                |
| **mongoose**          | To model my application's data for storage in the Mongo DB collection                                   |
