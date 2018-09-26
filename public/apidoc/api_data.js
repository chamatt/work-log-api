define({ "api": [
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Register a new user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username (Required)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email (Required)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password (Required) (Minimum 6 characters)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Full Name (Required)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birth Date (Required) (Format: YYYY-MM-DD)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone or Mobile Number (Required) (Format: 11999998888)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"username\": \"johnsmith\",\n  \"email\": \"john.smith@gmail.com\"\n  \"password\": \"j0nH5m17h\",\n  \"fullName\": \"John Smith\",\n  \"birthdate\": \"2000-12-01\",\n  \"phone\": \"27994949993\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sucess",
            "description": "<p>Request Status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Action performed</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>User data</p>"
          }
        ],
        "data fields": [
          {
            "group": "data fields",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Full name</p>"
          },
          {
            "group": "data fields",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "data fields",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  success: \"true\",\n  action: \"register\",\n  data: {\n    fullName: \"John Smith\",\n    email: \"john.smith@gmail.com\",\n    username: \"johnsmith\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation failed for register fields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation Error",
          "content": "HTTP/1.1 400 Bad Request\n{\n   email: \"Invalid Email\",\n   password: \"Password must have more than 6 characters\"\n}",
          "type": "json"
        },
        {
          "title": "Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/users.js",
    "groupTitle": "Users",
    "name": "PostApiUsersRegister"
  }
] });
