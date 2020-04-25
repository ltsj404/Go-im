define({ "api": [
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
    "filename": "C:/Users/c/Desktop/reptile-go/apidoc/main.js",
    "group": "C:\\Users\\c\\Desktop\\reptile-go\\apidoc\\main.js",
    "groupTitle": "C:\\Users\\c\\Desktop\\reptile-go\\apidoc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/attach/upload",
    "title": "上传文件",
    "name": "上传文件",
    "group": "upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 0,\n\t\"data\": \"文件地址\",\n\t\"msg\": \"\"\n}",
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
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ],
        "客户端错误": [
          {
            "group": "客户端错误",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>请求信息有误，服务器不能或不会处理该请求</p>"
          }
        ],
        "服务端错误": [
          {
            "group": "服务端错误",
            "optional": false,
            "field": "500-ServerError",
            "description": "<p>服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"code\": -1,\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 401 BadRequest\n{\n\t\"msg\": \"请求信息有误\",\n\t\"code\": -1,\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\t\"message\": \"系统错误，请稍后再试\",\n\t\"code\": -1,\n\t\"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/upload.go",
    "groupTitle": "upload",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/attach/upload"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contact/loadfriend",
    "title": "加载好友列表",
    "name": "加载好友列表",
    "group": "好友",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 0,\n\t\"msg\": \"xxx\"\n\t\"rows\": [\n\t\t{\n\t\t\tavatar: \"头像\"\n\t\t\tcreateat: \"2020-04-02T17:32:57+08:00\"\n\t\t\tid: 2\n\t\t\tmemo: \"\"\n\t\t\tmobile: \"账号\"\n\t\t\tnickname: \"昵称\"\n\t\t\tonline: 0\n\t\t\tsex: \"U\"\n\t\t\ttoken: \"C6628AEC84FB7713FA9BE3A28A25BA50\"\n\t\t},\n\t],\n\t\"total\": total,\n}",
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
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"code\": -1,\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/contact.go",
    "groupTitle": "好友",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/contact/loadfriend"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contact/addfriend",
    "title": "添加好友",
    "name": "添加好友",
    "group": "好友",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dstid",
            "description": "<p>好友ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 0,\n\t\"data\": \"\",\n\t\"msg\": \"xxx\"\n}",
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
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"code\": -1,\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/contact.go",
    "groupTitle": "好友",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/contact/addfriend"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "注册",
    "group": "注册",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "defaultValue": "123546",
            "description": "<p>mobile 账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t\"Content-Type\":\"application/x-www-form-urlencoded\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>json数据.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/user.go",
    "groupTitle": "注册",
    "name": "PostUserRegister",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/user/register"
      }
    ]
  },
  {
    "type": "get",
    "url": "/getCaptcha",
    "title": "获取验证码",
    "name": "registered",
    "group": "注册",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>base64图片字符串.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>字符串Key.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"data\": \"xxxxxx\",\n  \"id\": \"xxxxxx\",\n  \"msg\": \"xxxxx\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": -1,\n  \"msg\": \"xxxxx\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/user.go",
    "groupTitle": "注册",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/getCaptcha"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/updateUser",
    "title": "修改用户数据",
    "name": "GetUser",
    "group": "用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 0,\n\t\"data\": \"\",\n\t\"msg\": \"xxx\"\n}",
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
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"code\": -1,\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/user.go",
    "groupTitle": "用户",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/user/updateUser"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登录",
    "name": "Login",
    "group": "登录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "defaultValue": "123546",
            "description": "<p>mobile 账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t\"Content-Type\":\"application/x-www-form-urlencoded\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>json数据.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/user.go",
    "groupTitle": "登录",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/user/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contact/createcommunity",
    "title": "创建群",
    "name": "创建群",
    "group": "群",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>群昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerid",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>群logo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 0,\n\t\"data\": \"\",\n\t\"msg\": \"xxx\"\n}",
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
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"code\": -1,\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/contact.go",
    "groupTitle": "群",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/contact/createcommunity"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contact/joincommunity",
    "title": "加入群",
    "name": "加入群",
    "group": "群",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dstid",
            "description": "<p>群ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 0,\n\t\"data\": \"\",\n\t\"msg\": \"xxx\"\n}",
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
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"code\": -1,\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/contact.go",
    "groupTitle": "群",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/contact/joincommunity"
      }
    ]
  },
  {
    "type": "post",
    "url": "/contact/loadcommunity",
    "title": "获取群列表",
    "name": "获取群列表",
    "group": "群",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 0,\n\"msg\": \"xxx\"\n\"rows\": [\n\t{\n\t\t\"id\": 1,\n\t\t\"Name\": \"1群\",\n\t\t\"ownerid\": 1,\n\t\t\"icon\": \"/mnt/1584786931964894457.jpg\",\n\t\t\"cate\": 1,\n\t\t\"memo\": \"1231\",\n\t\t\"createat\": \"2020-03-21T18:35:39+08:00\"\n\t},\n],\n\"total\": total,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"code\": -1,\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 401 BadRequest\n{\n\t\"msg\": \"请求信息有误\",\n\t\"code\": -1,\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\t\"message\": \"系统错误，请稍后再试\",\n\t\"code\": -1,\n\t\"data\":[]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "客户端错误": [
          {
            "group": "客户端错误",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>请求信息有误，服务器不能或不会处理该请求</p>"
          }
        ],
        "服务端错误": [
          {
            "group": "服务端错误",
            "optional": false,
            "field": "500-ServerError",
            "description": "<p>服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/contact.go",
    "groupTitle": "群",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/contact/loadcommunity"
      }
    ]
  },
  {
    "type": "post",
    "url": "/message/chathistory",
    "title": "获取消息记录",
    "name": "消息记录",
    "group": "聊天消息",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dstid",
            "description": "<p>好友ID/群ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cmd",
            "description": "<p>单/群聊</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"code\": 0,\n\t\"data\": \"\",\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"code\": -1,\n\t\"msg\": \"xxx\"\n}",
          "type": "json"
        },
        {
          "title": "BadRequest",
          "content": "HTTP/1.1 401 BadRequest\n{\n\t\"msg\": \"请求信息有误\",\n\t\"code\": -1,\n}",
          "type": "json"
        },
        {
          "title": "ServerError",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\t\"message\": \"系统错误，请稍后再试\",\n\t\"code\": -1,\n\t\"data\":[]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "客户端错误": [
          {
            "group": "客户端错误",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>请求信息有误，服务器不能或不会处理该请求</p>"
          }
        ],
        "服务端错误": [
          {
            "group": "服务端错误",
            "optional": false,
            "field": "500-ServerError",
            "description": "<p>服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/c/Desktop/reptile-go/ctrl/message.go",
    "groupTitle": "聊天消息",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:8081/message/chathistory"
      }
    ]
  }
] });
