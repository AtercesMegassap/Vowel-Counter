# Vowel Counter API

This is a simple Node.js API built with Express that counts the number of vowels in a given sentence. It listens for requests and calculates the vowel count based on the provided sentence.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AtercesMegassap/Vowel-Counter.git
```
Navigate to the project directory:
```bash
cd Vowel-Counter
```
Install dependencies:
```bash
npm install
```

Usage
Start the server:
```bash
node index.js
```
The server will start running at http://localhost:3000.

Use an API client (e.g., Postman) to send a GET request to http://localhost:3000/Vowel with the following parameter in the request body, in JSON format:
```
{
  "sentence": "Hello, how are you?"
}
```

The API will respond with the number of vowels in the provided sentence.

Example Request:
```
GET http://localhost:3000/Vowel
Request Body:
{
  "sentence": "Hello, how are you?"
}
```
Example Response:
```The number of vowels is 7.```

Please note that you need to use an API client (e.g., Postman) to make requests to the API, and the provided sentence will be checked for vowel count.

Vowel Count Calculation
The API uses a function to count the number of vowels in the given sentence. It removes non-alphanumeric characters and analyzes each letter to identify vowels.