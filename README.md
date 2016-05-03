# BUILTRIGHT
Car build tracker 

### Style guide 

#### Colors


### POST `/users` 
````
	{
	    "username":"lott.dylan@gmail.com", 
	    "password":"password"
	} 

### POST `/users/auth` 
````	
	{
	    "username":"lott.dylan@gmail.com", 
	    "password":"password"
	}


### GET `/builds`
````
Returns all builds for the logged in user 

### GET `/builds/:id` 
Returns details of one build with ID of `:id` 

### PUT `/builds/:id` 
Updates the build with ID of `:id` 
