# Cinexplore API Documentation

Cinexplore uses this api to handle database requests.

| Route | Request Type | Required Parameters |
|---|---|---|
| / | GET | - |
| /auth/register | POST | username, password, avatar |
| /auth/login | POST | username, password |
| /auth | POST | id, token |
| /auth/usercheck/ | POST | username |
| /user/{id} | GET | id:string 
| /user/{id}/{type} | GET | id:string, type:"movies"/"tv" |
| /user/{id}/additem | POST | id:string, type, itemid |
