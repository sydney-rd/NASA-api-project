# NASA APOD API-Project

## Description
🚀 The Astronomy Picture of the Day (APOD) is based upon work supported by NASA. Originated, written, coordinated, and edited since 1995 by Robert Nemiroff and Jerry Bonnell, the APOD arcive contains the largest collection of annotated astronomical images on the internet! 🪐

Why NASA? I find those in this trade inspiring and wanted to explore their work with this API.  
                            

　　　 　🌎　°　　🌓　•　　.°•　　　🚀 ✯
　　　★　*　　　　　°　　　　🛰 　°·　　             
.　　　•　° ★　•  ☄

## Object Content

    { 
        "date": "string",
        "title": "string",
        "explanation": "string"",
        "credit": "string",
        "url": "string",
    }

## Installation
- Text editor of your choice [VSCODE](https://code.visualstudio.com/Download)

* [Postman](https://www.postman.com/downloads/) Platform for building and using API's

## Dependencies

## Run
- Fork and git clone this repository
- Install dependecies

In the terminal, run:
- npm start
- npm run dev
- 

## API Get Endpoints Examples

**Request: A request with no paramaters**
will return all astronomy picture of the day data: http://localhost:3000/astronomy
(changelink)
**Response**:
<img src="./assets/reqNoParams.png">

**Request: A request by ID** will return an object specific of that ID: http://localhost:3000/astronomy/id/

_OR_

**Request: A request by Date** will return an object specified for entered date: http://localhost:3000/astronomy/date/2006-06-05

**Response**
<img src="./assets/reqById.png">

## CRUD Implementation 

**Get** using API platform, Postman:

1. link
2. 
3. 

**Create** using API platform, Postman:

1. https://api-project-production-9de8.up.railway.app/astronomy ?
2. switch the endpoint to POST
3. click Body
4. click raw and its type to JSON
5. utilize the object above to create

**Update** using API platform, Postman:

1. link
2. switch the endpoint to PUT
3. 

**Delete** using API platform, Postman:
1. link
2. switch the endpoint to DELETE
3. 

## Credit
APOD
- [Github](https://github.com/nasa/apod-api)
* [NASA](https://api.nasa.gov/)

<img src="./assets/NASA.png" width="200">




<!-- DESCRIBE ALL END POINTS

example of get all: 
getAPODS - http://localhost:3000/astronomy
getAPOD - http://localhost:3000/astronomy/id/64349f33ec33ccc4823dd13c

use postman
createAPOD - use postman POST http://localhost:3000/astronomy

{
    "date": "string",
    "title": "string",
    "explanation": "string"",
    "credit": "string",
    "url": "string",
}


updateAPOD - PUT EXAMPLE OF AN UPDATE PATH AT END PUT IN ID TO UPDATE http://localhost:3000/astronomy/id/64349f33ec33ccc4823dd13c
deleteAPOD - PUT EXAMPLE OF DELETE PATH USING AN ID http://localhost:3000/astronomy/id/64349f33ec33ccc4823dd13c
-->