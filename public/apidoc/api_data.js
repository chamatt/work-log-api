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
            "type": "Boolean",
            "optional": false,
            "field": "data.birthdate",
            "description": "<p>Date of birth (YYYY-MM-DD)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date of account creation</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
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
            "type": "Boolean",
            "optional": false,
            "field": "data.birthdate",
            "description": "<p>Date of birth (YYYY-MM-DD)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date of account creation</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 Created\n{\n  \"success\": \"true\",\n  \"action\": \"register\",\n  \"data\": {\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\",\n    \"admin\": false\n  }\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"action\": \"register\",\n  \"data\": {\n    \"fullName\": \"John Smith\",\n    \"email\": \"john.smith@gmail.com\",\n    \"username\": \"johnsmith\",\n    \"admin\": true\n  }\n}",
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
          "content": "HTTP/1.1 201 Created\n{\n  \"success\": \"true\",\n  \"action\": \"register\",\n  \"data\": {\n    \"fullName\": \"John Smith\",\n    \"phone\": \"john.smith@gmail.com\",\n    \"birthdate\": \"johnsmith\",\n    \"avatar\": false\n  }\n}",
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
    "groupTitle": "2_Users",
    "name": "PutApiUsersMe"
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
          "content": "HTTP/1.1 400 Bad Request\n{ errors: {objectID: \"ObjectID is not valid\"}",
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
          "content": "HTTP/1.1 400 Bad Request\n{ errors: {objectID: \"ObjectID is not valid\"}",
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
