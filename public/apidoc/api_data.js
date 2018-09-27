define({ "api": [
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "Login a user and returns token",
    "group": "Users",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users/login"
      }
    ],
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username or Email (Required)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password (Required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"username\": \"johnsmith\",\n  \"password\": \"j0nH5m17h\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Token</p>"
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
            "description": "<p>Validation failed for login fields</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.email",
            "description": "<p>Email validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.username",
            "description": "<p>Username validations</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation Error",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"username\": \"Username/Email not found\",\n \"password\": \"Password Incorrect\"\n}",
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
    "name": "PostApiUsersLogin"
  },
  {
    "type": "post",
    "url": "/api/users/me",
    "title": "Get logged user informations",
    "group": "Users",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users/me"
      }
    ],
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
            "type": "String",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fullName",
            "description": "<p>Full Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.admin",
            "description": "<p>Is Admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"action\": \"get\",\n  \"data\": {\n    \"id\": \"5baab405aef55939f01a3de1\",\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\",\n    \"admin\": true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Logged In",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/users.js",
    "groupTitle": "Users",
    "name": "PostApiUsersMe"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Register a new user",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users/register"
      }
    ],
    "permission": [
      {
        "name": "Public"
      }
    ],
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
            "field": "password2",
            "description": "<p>Confirm Password (Required) (Minimum 6 characters)</p>"
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fullName",
            "description": "<p>Full name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
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
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.email",
            "description": "<p>Email validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.username",
            "description": "<p>Username validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.password",
            "description": "<p>Password validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.password2",
            "description": "<p>Confirm Password validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.birthdate",
            "description": "<p>Birthdate validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.phone",
            "description": "<p>Phone validations</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation Error",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"email\": \"Email is not valid\",\n \"username\": \"Username must have at least 6 characters\",\n \"password\": \"Password must have at least 6 characters\",\n \"password2\": \"Full name field is required\",\n \"birthdate\": \"Invalid birthdate, dates must be in the following format: YYYY-MM-DD\",\n \"phone\": \"Invalid phone number\"\n\n}",
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
  },
  {
    "type": "post",
    "url": "/api/users/register/admin",
    "title": "Register a new admin user",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/users/register/admin"
      }
    ],
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token</p>"
          }
        ]
      }
    },
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
            "field": "password2",
            "description": "<p>Confirm Password (Required) (Minimum 6 characters)</p>"
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fullName",
            "description": "<p>Full name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
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
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.email",
            "description": "<p>Email validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.username",
            "description": "<p>Username validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.password",
            "description": "<p>Password validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.birthdate",
            "description": "<p>Birthdate validations</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "ValidationError.phone",
            "description": "<p>Phone validations</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Validation Error",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"email\": \"Email is not valid\",\n \"username\": \"Username must have at least 6 characters\",\n \"password\": \"Password must have at least 6 characters\",\n \"password2\": \"Full name field is required\",\n \"birthdate\": \"Invalid birthdate, dates must be in the following format: YYYY-MM-DD\",\n \"phone\": \"Invalid phone number\"\n\n}",
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
    "name": "PostApiUsersRegisterAdmin"
  }
] });
