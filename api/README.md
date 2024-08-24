# Cinexplore API Documentation
## Overview
Cinexplore uses this api to handle database requests.
This REST API is made by using Node.js and Express. I've used bcryptjs to crypt user passwords.

## Routes
| Route | Request Type | Required Parameters | Note |
|---|---|---| --- |
| / | GET | - |
| /auth/register | POST | username, password, avatar |
| /auth/login | POST | username, password |
| /auth | POST | id, token |
| /auth/usercheck/ | POST | username |
| /user/{id} | GET | id:string 
| /user/{id}/{type} | GET | id:string, type:"movies"/"tv"/"all" |
| /user/{id}/additem | POST | id:string, type, itemid | Removes the item if it's already added |
