define({ "api": [
  {
    "type": "get",
    "url": "/api",
    "title": "Entry point",
    "group": "1__Introduction",
    "description": "<p>Information about API</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>API Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>API Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "github",
            "description": "<p>Github Repository link</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"Work Log API\",\n   \"description\": \"REST API to log and track time spent at work.\",\n   \"github\": \"https://github.com/chamatt/work-log-api\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "1__Introduction",
    "name": "GetApi"
  },
  {
    "type": "get",
    "url": "/api/users/all",
    "title": "Get All Users",
    "group": "2_Users",
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
    "sampleRequest": [
      {
        "url": "/api/users/all"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
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
            "type": "Date",
            "optional": false,
            "field": "data.birthdate",
            "description": "<p>Date of birth (YYYY-MM-DD)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date of account creation</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.loggedAt",
            "description": "<p>Last login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"action\": \"get\",\n  \"count\": \"12\"\n  \"data\": [{\n    \"admin\": false,\n    \"phone\": \"27994949993\",\n    \"_id\": \"5bae651e6866f10015d2b128\",\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\",\n    \"birthdate\": \"2000-12-01T00:00:00.000Z\",\n    \"createdAt\": \"2018-09-28T17:30:06.905Z\",\n    \"loggedAt\": \"2018-09-28T17:30:06.905Z\",\n  }]\n}",
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
        },
        {
          "title": "Not an Admin",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/users.js",
    "groupTitle": "2_Users",
    "name": "GetApiUsersAll"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get User By Id",
    "group": "2_Users",
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
    "sampleRequest": [
      {
        "url": "/api/users/:id"
      }
    ],
    "parameter": {
      "fields": {
        "URL Params": [
          {
            "group": "URL Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id (Required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
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
            "type": "Date",
            "optional": false,
            "field": "data.birthdate",
            "description": "<p>Date of birth (YYYY-MM-DD)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date of account creation</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.loggedAt",
            "description": "<p>Last login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"action\": \"get\",\n  \"data\": {\n    \"admin\": false,\n    \"phone\": \"27994949993\",\n    \"_id\": \"5bae651e6866f10015d2b128\",\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\",\n    \"birthdate\": \"2000-12-01T00:00:00.000Z\",\n    \"createdAt\": \"2018-09-28T17:30:06.905Z\",\n    \"loggedAt\": \"2018-09-28T17:30:06.905Z\",\n  }\n}",
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
        },
        {
          "title": "Not an Admin",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/users.js",
    "groupTitle": "2_Users",
    "name": "GetApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/me",
    "title": "Get Current User",
    "group": "2_Users",
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
        "url": "/api/users/me"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"action\": \"get\",\n  \"data\": {\n    \"_id\": \"5baab405aef55939f01a3de1\",\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\",\n    \"admin\": true\n  }\n}",
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
    "groupTitle": "2_Users",
    "name": "GetApiUsersMe"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "Login User",
    "group": "2_Users",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "sampleRequest": [
      {
        "url": "/api/users/login"
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
            "description": "<p>Username or Email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
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
            "field": "success",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"action\": \"register\",\n  \"data\": {\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\"\n  }\n}",
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
    "groupTitle": "2_Users",
    "name": "PostApiUsersLogin"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Register User",
    "group": "2_Users",
    "sampleRequest": [
      {
        "url": "/api/users/register"
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
            "description": "<p>Username</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password (Minimum 6 characters)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>Confirm Password (Minimum 6 characters)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Full Name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birth Date (Format: YYYY-MM-DD)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Phone or Mobile Number (Format: 11999998888)</p>"
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
            "field": "success",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.admin",
            "description": "<p>Admin permission</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.validated",
            "description": "<p>Default to false, an admin needs to aprove registration for the account to be validated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n  \"success\": \"true\",\n  \"action\": \"register\",\n  \"data\": {\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\",\n    \"admin\": false,\n    \"validated\": false\n  }\n}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n \"email\": \"Email is not valid\",\n \"username\": \"Username must have between 6 and 24 characters\",\n \"password\": \"Password must have between 6 and 24 characters\",\n \"password2\": \"Full name field is required\",\n \"birthdate\": \"Invalid birthdate, dates must be in the following format: YYYY-MM-DD\",\n \"phone\": \"Invalid phone number\"\n\n}",
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
    "groupTitle": "2_Users",
    "name": "PostApiUsersRegister"
  },
  {
    "type": "post",
    "url": "/api/users/register/admin",
    "title": "Register Admin User",
    "group": "2_Users",
    "sampleRequest": [
      {
        "url": "/api/users/register/admin"
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
            "description": "<p>Username</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password (Minimum 6 characters)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>Confirm Password (Minimum 6 characters)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Full Name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birth Date (Format: YYYY-MM-DD)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Phone or Mobile Number (Format: 11999998888)</p>"
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
            "field": "success",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.admin",
            "description": "<p>Admin permission</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.validated",
            "description": "<p>Default to true, an admin registration gets validated automatically</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"action\": \"register\",\n  \"data\": {\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\",\n    \"admin\": true,\n    \"validated\": true,\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>NotAdmin</p>"
          },
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
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "NotAdmin",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "Validation Error",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"email\": \"Email is not valid\",\n \"username\": \"Username must have between 6 and 24 characters\",\n \"password\": \"Password must have between 6 and 24 characters\",\n \"password2\": \"Full name field is required\",\n \"birthdate\": \"Invalid birthdate, dates must be in the following format: YYYY-MM-DD\",\n \"phone\": \"Invalid phone number\"\n\n}",
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
    "groupTitle": "2_Users",
    "name": "PostApiUsersRegisterAdmin"
  },
  {
    "type": "PUT",
    "url": "/api/users/me",
    "title": "Edit Current User",
    "group": "2_Users",
    "sampleRequest": [
      {
        "url": "/api/users/me"
      }
    ],
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
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "fullName",
            "description": "<p>Full Name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "birthdate",
            "description": "<p>Birth Date (Format: YYYY-MM-DD)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Phone or Mobile Number (Format: 11999998888)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>User avatar (Format: URL)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"fullName\": \"John Smith\",\n  \"birthdate\": \"2000-12-01\",\n  \"phone\": \"27994949993\",\n  \"avatar\": \"http://example.com/example.jpg\"\n}",
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
            "field": "success",
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
            "field": "data.phone",
            "description": "<p>User phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.birthdate",
            "description": "<p>User birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.avatar",
            "description": "<p>User Avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"action\": \"register\",\n  \"data\": {\n    \"fullName\": \"John Smith\",\n    \"phone\": \"john.smith@gmail.com\",\n    \"birthdate\": \"johnsmith\",\n    \"avatar\": \"//apid/jonhthd324234234.jpg\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>AuthenticationError</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Validation failed for edit fileds</p>"
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
          "title": "AuthenticationError",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Validation Error",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"birthdate\": \"Invalid birthdate, dates must be in the following format: YYYY-MM-DD\",\n \"phone\": \"Invalid phone number\",\n \"avatar\": \"Invalid avatar URL\",\n \"fullname\": \"Full name field is required\"\n}",
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
    "groupTitle": "2_Users",
    "name": "PutApiUsersMe"
  },
  {
    "type": "PUT",
    "url": "/api/users/validate/:id",
    "title": "Validate New User",
    "group": "2_Users",
    "sampleRequest": [
      {
        "url": "/api/users/validate/:id"
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
        "URL Params": [
          {
            "group": "URL Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request Status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Action performed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n  \"success\": \"true\",\n  \"action\": \"validate\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>NotAdmin</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>ObjectID Invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "NotAdmin",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "ObjectID Invalid",
          "content": "HTTP/1.1 400 Bad Request\n{ \"errors\": {\"objectID\": \"ObjectID is not valid\"} }",
          "type": "json"
        },
        {
          "title": "User Not Found",
          "content": "HTTP/1.1 404 Not found\n{ \"errors\": { \"notfound\": \"User not found\" } }",
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
    "groupTitle": "2_Users",
    "name": "PutApiUsersValidateId"
  },
  {
    "type": "get",
    "url": "/api/activities/me",
    "title": "Get All Activities From Current User",
    "group": "Activities",
    "sampleRequest": [
      {
        "url": "/api/activities/me"
      }
    ],
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
    "parameter": {
      "fields": {
        "Query params": [
          {
            "group": "Query params",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page (Each page has 25 activities at most)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Total number of pages in the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.category",
            "description": "<p>categories list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category._id",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category.name",
            "description": "<p>Category Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.date",
            "description": "<p>Date of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.length",
            "description": "<p>Length of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Activity description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": "<p>Owner of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.name",
            "description": "<p>User Fullname</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n   \"totalPages\": 1,\n   \"page\": 1,\n   \"data\": [\n     {\n       \"category\": [\n         {\n           \"_id\": \"5ba44feca2504832a88c1edf\",\n           \"name\": \"Mobile\"\n         },\n         {\n           \"_id\": \"5ba44ffda2504832a88c1ee0\",\n           \"name\": \"Web\"\n         }\n       ],\n       \"_id\": \"5ba941ed77993b6aacdc4e7e\",\n       \"date\": \"2018-09-23T03:00:00.000Z\",\n       \"length\": \"2018-09-24T03:01:00.000Z\",\n       \"description\": \"Did some things\",\n       \"user\": {\n         \"_id\": \"5ba532b3ec4a3f764d02b665\",\n         \"username\": \"johnsmith\",\n         \"fullName\": \"John Smith\"\n       },\n       \"__v\": 0\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
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
    "filename": "./routes/api/activities.js",
    "groupTitle": "Activities",
    "name": "GetApiActivitiesMe"
  },
  {
    "type": "get",
    "url": "/api/activities/me/:days",
    "title": "Get Last X Days Activities From Current User",
    "group": "Activities",
    "sampleRequest": [
      {
        "url": "/api/activities/me/:days"
      }
    ],
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
    "parameter": {
      "fields": {
        "Query params": [
          {
            "group": "Query params",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page (Each page has 25 activities at most)</p>"
          }
        ],
        "URL Params": [
          {
            "group": "URL Params",
            "type": "Number",
            "optional": false,
            "field": "days",
            "description": "<p>How many days of activities you want to get</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Total number of pages in the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.category",
            "description": "<p>categories list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category._id",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category.name",
            "description": "<p>Category Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.date",
            "description": "<p>Date of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.length",
            "description": "<p>Length of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Activity description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": "<p>Owner of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.name",
            "description": "<p>User Fullname</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n   \"totalPages\": 1,\n   \"page\": 1,\n   \"data\": [\n     {\n       \"category\": [\n         {\n           \"_id\": \"5ba44feca2504832a88c1edf\",\n           \"name\": \"Mobile\"\n         },\n         {\n           \"_id\": \"5ba44ffda2504832a88c1ee0\",\n           \"name\": \"Web\"\n         }\n       ],\n       \"_id\": \"5ba941ed77993b6aacdc4e7e\",\n       \"date\": \"2018-09-23T03:00:00.000Z\",\n       \"length\": \"2018-09-24T03:01:00.000Z\",\n       \"description\": \"Did some things\",\n       \"user\": {\n         \"_id\": \"5ba532b3ec4a3f764d02b665\",\n         \"username\": \"johnsmith\",\n         \"fullName\": \"John Smith\"\n       },\n       \"__v\": 0\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
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
    "filename": "./routes/api/activities.js",
    "groupTitle": "Activities",
    "name": "GetApiActivitiesMeDays"
  },
  {
    "type": "get",
    "url": "/api/activities/user/:userId",
    "title": "Get All Activities From Specific User",
    "group": "Activities",
    "sampleRequest": [
      {
        "url": "/api/activities/user/:userId"
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
        "Query params": [
          {
            "group": "Query params",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page (Each page has 25 activities at most)</p>"
          }
        ],
        "URL Params": [
          {
            "group": "URL Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Total number of pages in the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.category",
            "description": "<p>categories list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category._id",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category.name",
            "description": "<p>Category Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.date",
            "description": "<p>Date of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.length",
            "description": "<p>Length of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Activity description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": "<p>Owner of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.name",
            "description": "<p>User Fullname</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n   \"totalPages\": 1,\n   \"page\": 1,\n   \"data\": [\n     {\n       \"category\": [\n         {\n           \"_id\": \"5ba44feca2504832a88c1edf\",\n           \"name\": \"Mobile\"\n         },\n         {\n           \"_id\": \"5ba44ffda2504832a88c1ee0\",\n           \"name\": \"Web\"\n         }\n       ],\n       \"_id\": \"5ba941ed77993b6aacdc4e7e\",\n       \"date\": \"2018-09-23T03:00:00.000Z\",\n       \"length\": \"2018-09-24T03:01:00.000Z\",\n       \"description\": \"Did some things\",\n       \"user\": {\n         \"_id\": \"5ba532b3ec4a3f764d02b665\",\n         \"username\": \"johnsmith\",\n         \"fullName\": \"John Smith\"\n       },\n       \"__v\": 0\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>NotAdmin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "NotAdmin",
          "content": "HTTP/1.1 403 Forbidden",
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
    "filename": "./routes/api/activities.js",
    "groupTitle": "Activities",
    "name": "GetApiActivitiesUserUserid"
  },
  {
    "type": "get",
    "url": "/api/activities/users/:userId/:days",
    "title": "Get Last X Days Activities From Current User",
    "group": "Activities",
    "sampleRequest": [
      {
        "url": "/api/activities/user/:userId/:days"
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
        "Query params": [
          {
            "group": "Query params",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page (Each page has 25 activities at most)</p>"
          }
        ],
        "URL Params": [
          {
            "group": "URL Params",
            "type": "Number",
            "optional": false,
            "field": "days",
            "description": "<p>How many days of activities you want to get</p>"
          },
          {
            "group": "URL Params",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>Total number of pages in the request</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.category",
            "description": "<p>categories list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category._id",
            "description": "<p>Category ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category.name",
            "description": "<p>Category Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.date",
            "description": "<p>Date of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.length",
            "description": "<p>Length of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Activity description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": "<p>Owner of activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.name",
            "description": "<p>User Fullname</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n   \"totalPages\": 1,\n   \"page\": 1,\n   \"data\": [\n     {\n       \"category\": [\n         {\n           \"_id\": \"5ba44feca2504832a88c1edf\",\n           \"name\": \"Mobile\"\n         },\n         {\n           \"_id\": \"5ba44ffda2504832a88c1ee0\",\n           \"name\": \"Web\"\n         }\n       ],\n       \"_id\": \"5ba941ed77993b6aacdc4e7e\",\n       \"date\": \"2018-09-23T03:00:00.000Z\",\n       \"length\": \"2018-09-24T03:01:00.000Z\",\n       \"description\": \"Did some things\",\n       \"user\": {\n         \"_id\": \"5ba532b3ec4a3f764d02b665\",\n         \"username\": \"johnsmith\",\n         \"fullName\": \"John Smith\"\n       },\n       \"__v\": 0\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
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
    "filename": "./routes/api/activities.js",
    "groupTitle": "Activities",
    "name": "GetApiActivitiesUsersUseridDays"
  },
  {
    "type": "post",
    "url": "/api/activities/",
    "title": "Create a new activity",
    "group": "Activities",
    "sampleRequest": [
      {
        "url": "/api/activities/"
      }
    ],
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
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date when activity was done (Format: YYYY-MM-DD)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "length",
            "description": "<p>Length of the activity (Format: HH-mm)</p>"
          },
          {
            "group": "Request Body",
            "type": "String[]",
            "optional": false,
            "field": "category",
            "description": "<p>List of object ids of the categories that the activity fits in</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A small text describing the activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n       \"category\": [\"5ba44feca2504832a88c1edf\",\"5ba44ffda2504832a88c1ee0\"],\n       \"_id\": \"5ba941ed77993b6aacdc4e7e\",\n       \"date\": \"2018-09-23\",\n       \"length\": \"03:00\",\n       \"description\": \"Did some things\",\n       \"user\": \"5ba532b3ec4a3f764d02b665\",\n       \"__v\": 0\n }",
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
            "field": "success",
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
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.length",
            "description": "<p>Length of created activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.category",
            "description": "<p>List of categories of created activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.date",
            "description": "<p>Date of created activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Description of created activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n   \"data\":\n     {\n       \"category\": [\"5ba44feca2504832a88c1edf\",\"5ba44ffda2504832a88c1ee0\"],\n       \"_id\": \"5ba941ed77993b6aacdc4e7e\",\n       \"date\": \"2018-09-23T03:00:00.000Z\",\n       \"length\": \"2018-09-24T03:01:00.000Z\",\n       \"description\": \"Did some things\",\n       \"user\": \"5ba532b3ec4a3f764d02b665\",\n       \"__v\": 0\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CantSaveActivity",
            "description": "<p>Unable to save actitity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "CantSaveActivity",
          "content": "HTTP/1.1 400 CantSaveActivity\n{ errors: {cantsave: \"Can't save activity\" }}",
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
    "filename": "./routes/api/activities.js",
    "groupTitle": "Activities",
    "name": "PostApiActivities"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_mathe_Documents_Code_Web_Javascript_work_log_api_docs_main_js",
    "groupTitle": "C__Users_mathe_Documents_Code_Web_Javascript_work_log_api_docs_main_js",
    "name": ""
  },
  {
    "type": "DELETE",
    "url": "/api/categories/:id",
    "title": "Deletes an specific category",
    "group": "Categories",
    "sampleRequest": [
      {
        "url": "/api/categories/:id"
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
        "URL Param": [
          {
            "group": "URL Param",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
            "field": "data.name",
            "description": "<p>Deleted category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Deleted category id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 201 Created\n   {\n     \"success\": true,\n\t    \"action\": \"delete\",\n\t    \"data\":\n\t\t   {\n\t\t  \t  \"_id\": \"5ba44feca25048d2d88c1edf\",\n\t\t  \t  \"name\": \"Web\",\n\t\t   \t  \"__v\": 0\n\t    \t}\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>NotAdmin</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>CategoryNotFound</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>ObjectID Invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "NotAdmin",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "CategoryNotFound",
          "content": "HTTP/1.1 404 Not Found\n{ errors: {categorynotfound: \"There's no category with this id\"} }",
          "type": "json"
        },
        {
          "title": "ObjectID Invalid",
          "content": "HTTP/1.1 400 Bad Request\n{ errors: {objectID: \"ObjectID is not valid\"} }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/categories.js",
    "groupTitle": "Categories",
    "name": "DeleteApiCategoriesId"
  },
  {
    "type": "get",
    "url": "/api/categories",
    "title": "Get All Categories",
    "group": "Categories",
    "sampleRequest": [
      {
        "url": "/api/categories"
      }
    ],
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
    "parameter": {
      "fields": {
        "Query params": [
          {
            "group": "Query params",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Category name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
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
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Category ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"success\": true,\n\t    \"action\": \"get\",\n     \"count\": \"1\"\n\t    \"data\": [\n\t\t   {\n\t\t  \t  \"_id\": \"5ba44feca25048d2d88c1edf\",\n\t\t  \t  \"name\": \"Web\",\n\t    \t}\n     ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
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
    "filename": "./routes/api/categories.js",
    "groupTitle": "Categories",
    "name": "GetApiCategories"
  },
  {
    "type": "post",
    "url": "/api/categories",
    "title": "Create a new category",
    "group": "Categories",
    "sampleRequest": [
      {
        "url": "/api/categories"
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
            "field": "name",
            "description": "<p>Category name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Name\": \"Web\"\n}",
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
            "field": "success",
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
            "description": "<p>Category data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Category ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 201 Created\n   {\n     \"success\": true,\n\t    \"action\": \"create\",\n\t    \"data\":\n\t\t   {\n\t\t  \t  \"_id\": \"5ba44feca25048d2d88c1edf\",\n\t\t  \t  \"name\": \"Web\",\n\t\t   \t\"__v\": 0\n\t    \t}\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>NotAdmin</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>DuplicateCategory</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "NotAdmin",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "DuplicateCategory",
          "content": "HTTP/1.1 400 Bad Request\n{ errors: \"Category already exists\" }",
          "type": "json"
        },
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/categories.js",
    "groupTitle": "Categories",
    "name": "PostApiCategories"
  },
  {
    "type": "PUT",
    "url": "/api/categories/:id",
    "title": "Updates a category",
    "group": "Categories",
    "sampleRequest": [
      {
        "url": "/api/categories/:id"
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
        "URL Param": [
          {
            "group": "URL Param",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category ID</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Name\": \"Web\"\n}",
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
            "field": "success",
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
            "field": "data.name",
            "description": "<p>Deleted category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Deleted category id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 201 Created\n   {\n     \"success\": true,\n\t    \"action\": \"delete\",\n\t    \"data\":\n\t\t   {\n\t\t  \t  \"_id\": \"5ba44feca25048d2d88c1edf\",\n\t\t  \t  \"name\": \"Web\",\n\t\t   \t  \"__v\": 0\n\t    \t}\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotLoggedIn</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>NotAdmin</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>CategoryNotFound</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>ObjectID Invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotLoggedIn",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "NotAdmin",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "CategoryNotFound",
          "content": "HTTP/1.1 404 Not Found\n{ errors: {categorynotfound: \"There's no category with this id\"} }",
          "type": "json"
        },
        {
          "title": "ObjectID Invalid",
          "content": "HTTP/1.1 400 Bad Request\n{ errors: {objectID: \"ObjectID is not valid\"}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/categories.js",
    "groupTitle": "Categories",
    "name": "PutApiCategoriesId"
  }
] });
