# HNGX Chatbot API 🚀

This is the bot API for the hngx chatbot task

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
