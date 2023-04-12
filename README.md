# NASA APOD API-Project

## Description
The Astronomy Picture of the Day (APOD) is based upon work supported by NASA. Originated, written, coordinated, and edited since 1995 by Robert Nemiroff and Jerry Bonnell, the APOD arcive contains the largest collection of annotated astronomical images on the internet.


## Credit
APOD
- [Github](https://github.com/nasa/apod-api)
* [NASA](https://api.nasa.gov/)

## API Get Endpoints

**Request with no paramaters**
will return all astronomy picture of the day data: http://localhost:3000/astronomy

<img src="assets/reqNoParams.png">


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