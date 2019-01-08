# Work Log API
Work Log API is a REST API to log and track time spent at work

## Description

The Work Log API can be use as a way to track what the workers in a company are doing during their work hours, it's useful in meetings, so you can always know what you have done in a specific day, or week, and how many hours you spend on a activity. It can help a lot with productivity.
## Authentication
The API is authenticated with the use of JWT Tokens, for any non-public route, you have to send a authentication header with the Bearer token to use that route.
Example header:
```
Authorization: Bearer eyJhbGciOiJIUzfFSDFsdfSDFSDFJ9.eyJpZCI6IjViYTUzMmIzZWM0YTNmNzY0ZDAyYjY2NSIsInVzZXJuYW1lIjoicGV0ZW5nY29tcCIsImVtYWlsIjoicGV0ZW5nY29tcC51ZmVzQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYfsDFDfdDFDmV4cCI6MTUzODI0NzgxM30.QNjQ3nmHNT78Xz-25nVfvTXT6SpJwpRy2dmyDqrnF8Y
```
You can get that API key by using the login route, which returns the JWT token.

The API has 3 authentication levels:
 - Public (Anyone can acess it, no need to log in)
 - Private (Only the logged user can acess)
 - Admin (Only the Admin can acess, e.g. you boss)


## Routes
Here are the routes available:
- *User*
  - Create users (Admin and Public)
  - Login user (Public)
  - Get Current User Info (Private)
  - Get All User Info (Admin)
  - Get Specific User Info (Admin)
  - Edit User (Private)
  - Upload Avatar Image (Private)
- *Categories*
  - Create a new category (Admin)
  - Get all categories (Admin and Private)
  - Edit a category (Admin)
  - Delete a Category (Admin)
- *Activities*
  - Create a new activity (With description, date, duration, category) (Private)
  - Edit a activity (Private)
  - Delete a activity (Private)
  - Get all activities from current user (Private)
  - Get activities from the last X days from current user (Private)
  - Get all activities from a specific user (Admin)
  - Get activities from the last X days from na specific user (Admin)
  
# How to use

## Setting ENV variables
To use the api you need to set the MongoDB URI and the Secret Key (for authentication) ENV variables on you system

On Linux and Mac, you can do that by typing this on the terminal:
```
export WORK_LOG_MONGO_URI=yourMongodbURI && export WORK_LOG_SECRET=secretkey
```
On Windows, you can do that by typing this in cmd:
```
set WORK_LOG_MONGO_URI=yourMongodbURI && set WORK_LOG_SECRET=secretkey
```
If you don't care about securing your keys, you can go to  ``./config/keys```, and edit those variables right there.

## Setting Cloudinary API Keys

This API uses Cloudinary to upload avatar images to the cloud. If you want to use Avatar images in your application, you have to setup a [Cloudinary](https://cloudinary.com/) account (It has a decent free plan), get your credentials on the [dashboard](https://cloudinary.com/console) and set your enviroment variables as described below. If you don't want to use Cloudinary, you have to modify the ```uploadAvatar``` controller to handle image upload on your own. (Notice that all image uploads go to /uploads folder before going to the cloud, and are deleted after the upload request is done)

On Linux and Mac, you can setup Cloudinary credentials by typing this on the terminal:
```
export WORK_LOG_IMAGE_CLOUDNAME=yourCloudinaryClouName &
export WORK_LOG_IMAGE_API_SECRET=yourCloudinaryAPIKey &
export WORK_LOG_IMAGE_API_KEY=yourCloudinaryAPISecret &
```
On Windows, you can do that by typing this in cmd:
```
set WORK_LOG_IMAGE_CLOUDNAME=yourCloudinaryClouName &
set WORK_LOG_IMAGE_API_SECRET=yourCloudinaryAPIKey &
set WORK_LOG_IMAGE_API_KEY=yourCloudinaryAPISecret &
```

## Starting server

To start the server, just type ```npm start```, the api will be running on [localhost:3001/](localhost:3001/).
For development, you can use ```npm run dev``` to start it with nodemon.

## Deploying for production

The project is already setup to be deploy to cloud services like *Heroku*, you just need to set the same ENV variables as above.
On Heroku, you can do this by following this tutorial: [Heroku Config Vars](https://devcenter.heroku.com/articles/config-vars)

# Documentation

You can read the *sample documentation* (Request examples don't work) at [Work Log API Docs](https://chamatt.github.io/work-log-api)
To host you own (working) documentaion, run: ```npm run doc``` to compile it, start the server with ```npm start```, and go to [localhost:3001/docs](http://localhost:3001/docs) to read it.
