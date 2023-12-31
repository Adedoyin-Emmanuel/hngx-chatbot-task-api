# HNGX Chatbot API 🚀

This is the bot API for the hngx chatbot task

# Tests

As much as I would've love to write unit tests and integration tests, I can't because I've to submit this night 😥 I would write unit tests and integration tests for the **Chrome Extension API**

## Endpoints

There is basically 1 endpoint

**Method `GET`**
**Body**
`{message: "What is programming"}`

**Response**

```json
{
  "code": 200,
  "status": "OK",
  "message": "Chat retrieved successfully",
  "data": {
    "message": "what is programming",
    "chatbot": "Programming is the process of creating instructions or code that a computer can execute. It involves designing, writing, testing, debugging, and maintaining the source code of computer programs. Programming languages, such as Python, Java, C++, and JavaScript, are used to write these instructions. Programmers use various tools and techniques to develop software applications, websites, mobile apps, and other computer programs to solve problems and automate tasks."
  }
}
```

## Error handling

**Invalid request**

```json
{
  "code": 400,
  "status": "Bad Request",
  "message": "\"message\" is required",
  "data": {}
}
```

**Internal Server Error**

```json
{
  "code": 500,
  "status": "Internal Server Error",
  "message": "Something went wrong, please try again later!",
  "data": {}
}
```


## Frontend App
Of course what's a backend API without frontend, I built the frontend with **React, Tailwindcss and Axios**


## Images

**Home Page**
![Image 2](./assets/img-2.png)

**Chat Page**
![Image 1](./assets/img-1.png)

[Backend API](https://github.com/Adedoyin-Emmanuel/hngx-chatbot-task-api)
