# HTTP Notification System

A simple pub/sub system using HTTP requests

## Prerequisites
- Node
- Npm
- Postgres 

## Installation
- Clone this repository in your folder of choice
- cd to that folder and run `npm i`
- To start the script run `npm run start:dev`
- It would be up and running on port 5555

## Endpoints

All the endpoints expect JSON in the body of the requests

- POST /subscribe/:topic

  Description: sets up a subscription between a topic and the sent URL

  Body parameters: url

- POST /publish/:topic

  Description: publishes a message to all subscribed URLs in a specific topic

  Body parameters: a json object with any data


## Author

**Fego** - (https://github.com/fegoworks)