# ProductManagement
Basic Web Application with RestFul CRUD For Testing Purposes: Frontend (AngularJS, Bootstrap), Backend (NodeJS, MongoDB, ExpressJS)

There is a working solution in on AWS, you can reach it via http://test.i3tc.com to see how it's working.

For the backend, I've implemented for the bonuses like NodeJS backend with a actual mongoDB data storage. 
I've used ExpressJS and Mongoose for RestFul arch, and DB connections. 
One to Many Relation has implemented on MongoDB Schemas and on Rest services.

For the front end, I've used Bootstrap for UI. As much as I try to use services, controllers, directives etc. Hope you enjoy!

You can reach the RestFul API via 

http://api.test.node.i3tc.com

API just serves what is needed, nothing else..

GET api/products
POST api/products
PUT api/products/:id
DELETE api/products/:id

GET api/comments/:id (IDs here are product id)
POST api/comments/:id (IDs here are product id)

Here are some screenshots:

Add Comment
![alt tag](http://test.i3tc.com/images/1.png)

List
![alt tag](http://test.i3tc.com/images/2.png)

Edit
![alt tag](http://test.i3tc.com/images/3.png)