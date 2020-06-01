# Yum-Server

## How to run the project
1. clone the project: <https://github.com/IbrahimAlSinafi/Yum-Server.git>
2. npm install
3. add the unziped [Divvy_Trips_2019_Q2](https://s3.amazonaws.com/divvy-data/tripdata/Divvy_Trips_2019_Q2.zip) file into the root level of the project.
4. create `.env` and add `ACCESS_TOKEN_SECRET` variable, see below for details.
2. npm start (or) npm run watch


## To run unit-test
npm test

## To access Swagger documentation
Paste thiss link <http://localhost:3000/documentation> into your browser after you run `npm start`.

## APIs:

<http://localhost:3000/>

	* Method: GET
	* URL: http://localhost:3000/
	
	NOTES:
	- Ping endpoint is used to check the health of the server. This endpoint doesn't require any JWT.


<http://localhost:3000/token>

	* Method: POST
	* URL: http://localhost:3000/token
	* Body: {
		"username": "Ibrahim"
	}
	
	NOTES:
	- This will generate a user JWT. This token is required for the other endpionts below.
	- Username will be reflected to what was configured in the manifest.js. Look at authorisedUsers array in the manifest.
	- If you would like to get it to work under your name, add your name in the authorisedUsers.
	- i.e 
	authorisedUsers: [
	    {
	      username: 'Ibrahim',
	      title: 'software engineer'
	    },
	    {
	      username: '<add your name here>',
	      title: '<add your title if want (optional)>'
	    },
    ],
    After that, make sure you change the username to your name in the body of the request!
    If you are running <npm run watch>, then you will be fine of making those changes.
    But, if you are using npm start, then you should exit out i.e(ctr + c) and then npm start in order for the changes to take place.
    

<http://localhost:3000/divvy/station>

	* Method: GET
	* URL: http://localhost:3000/station
	* Authorization: select Bearer Token
	NOTES: if you are using POSTMAN, follow these steps:
	- In postman, under authorization, select Bearer Token and paste the token generated from the <.../token> endpoint above.
	- If the token reflected the username <Ibrahim> as it configured in manifest.jst, then you should be able to retrieve station data.
	- If the token reflected a username is not defined in manifest.js, then you should get unauthorized response.
	- If you put a wrong token, you should get forbidden response.
	- FYI, the response will be a station based on the stationId configured in manifest.js. You can change it to whatever stationId!


<http://localhost:3000/divvy/riders>

	* Method: GET
	* URL: http://localhost:3000/riders
	* Authorization: select Bearer Token
	NOTES: same as the <.../station> endpiont above
	- FYI, the resposne should be an object with properties reflected age groups.
	- i.e {
	    "0-20": 3178,
	    "21-30": 238222,
	    "31-40": 238552,
	    "41-50": 88694,
	    "51+": 273018,
	    "unknown": 266500
    }

<http://localhost:3000/divvy/recentTrips>

	* Method: GET
	* URL: http://localhost:3000/recentTrips
	* Authorization: select Bearer Token
	NOTES: same as the <.../station> endpiont above
	- FYI, the resposne would be 
	- i.e [  
	  {
		"02 - Rental End Station Name": [<based on unique end stateion name>]
	  },
	  {
		"02 - Rental End Station Name": [<based on unique end stateion name>]
	  }
	]



## Vulnerabilities
`npm start` to show if there are any vulnerabilities!

This project has 0 vulnerabilities as if today June, 1st 2020.


### Some facts:

- `-` .nvmrc
	* Lock down Node Version Manager (NVM) to a specific version. I used the most recent node version to prevent install any out of date dependencies. 
[nvm install] (https://medium.com/@jamesauble/install-nvm-on-mac-with-brew-adb921fb92cc)

- `-` .nycrc.json
	* Here, we can lock down the coverage percentage to ensure it meets the production requirments. This should be validated during the pipeline deployment.

- `-` .env
	* Generate JWT secret and add it to `.env` file.
	* To generate JWT secret, run this command in your terminal `require('crypto').randomBytes(64).toString('hex')`.
	* `.env` should look like this: `ACCESS_TOKEN_SECRET=<generated JWT secret>`
	* i.e `ACCESS_TOKEN_SECRET=7dba7b14aa2fb9788faff921719d3cd0edaf8820f5e3b49f58e3f6dc1c86e27487bd0a012dff959a4ee40d6917f126d1de1856a67cefcbcf653eaca09cfbd735`

		
### Notes:
- This project is not production ready due to:
	* Code review required!
	* Load test required!
	* Unit test coverage should be close to %90.
	* Extra validations would be needed.
	* Add more helpful logs that would help to create dashboard.
	* ...etc.

### Postman
Using postman to check all these RESTFUL APIs.


## Dependencies being used:
* eslint -> to auto fix code indent.
* nodemon -> npm run watch (to help for debugging)
* lodash -> to easy validate nested object.
* jest/nyc -> testing library
* node-fetch -> to make http/https calls to retrieve data
* jsonwebtoken -> JWT for user authentication
* dotenv -> to store ACCESS_TOKEN_SECRET
* hapi -> node framework
