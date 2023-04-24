# NASA APOD API-Project

## Description

The Astronomy Picture of the Day (APOD) is based upon work supported by NASA. Originated, written, coordinated, and edited since 1995 by Robert Nemiroff and Jerry Bonnell, the APOD arcive contains the largest collection of annotated astronomical images on the internet! 🪐


Why NASA? I find those in this trade inspiring and wanted to explore their work with this API.

<p align="center">
    🌑  ★      •　°    ✯  ★     🛸  🌎　°　　🌓　<br>
    ⭐️       .       .    ☄   ★        .　　　•　° ★　<br>
      ★      .<br>
         •　　.°•　　🚀 ✯ ⭐️　★　*　　★　　°　　💫　<br>
    　 🛰 　°<br>
    •  ☄ ⭐️•     　° ★ •　° ★  ⭐️   🪐        .°•         💫<br>
</p>



## Object Content

    { 
        "date": "string",
        "title": "string",
        "explanation": "string",
        "credit": "string",
        "url": "string"
    } 

## API Get Endpoints Examples

**Get Request: A request with no parameters**
will return all astronomy picture of the day data: 

link: api-project-production-9de8.up.railway.app/astronomy

**Response**:
<img src="./assets/reqNoParams.png">

**Get Request: A request by ID** will return an object specific of that ID: 

link: api-project-production-9de8.up.railway.app/astronomy/:id/(objectID number)

_OR_

**Get Request: A request by Date** will return an object specified for entered date:

link: api-project-production-9de8.up.railway.app/astronomy/:date/2015-04-21

**Response**
<img src="./assets/reqById.png">

## CRUD Implementation with Postman

**GET** 

1. HTTP verb to GET

Enter link to find all information available

```api-project-production-9de8.up.railway.app/astronomy```

_OR_

Enter link with specific object ID number as shown below

```api-project-production-9de8.up.railway.app/astronomy/id/643828aeff4484fa86752a27```

_OR_

Enter link with specific date as shown below

```api-project-production-9de8.up.railway.app/astronomy/date/1995-09-21```

**CREATE**

1. HTTP verb to POST
2. click Body
3. click raw and its type to JSON
4. utilize the object above to create in the body

```api-project-production-9de8.up.railway.app/astronomy/```

**UPDATE**

1. HTTP verb to PUT
2. Enter specific object ID number
3. Copy and paste the object in the body and update what is needed

```api-project-production-9de8.up.railway.app/astronomy/id/643828aeff4484fa86752a27```

**DELETE**
1. HTTP verb to DELETE
2. Enter link with specific object ID number to 

```api-project-production-9de8.up.railway.app/astronomy/id/643828aeff4484fa86752a27```

## Credit
APOD
- [Github](https://github.com/nasa/apod-api)
* [NASA](https://api.nasa.gov/)

<p align="center">

<img src="./assets/NASA.png" width="200">

</p>






