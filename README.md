
<h2> This project is a complete MEAN stack application. </h2>
<h4> --- Currently there are two sub-projects. One uses "MonogoDb Compass Community" to CRUD data,
 which the Angular7 CRUD codes are ready. 
 The other project uses the online mLab to create on MongoDb collection, where the APIs are ready.
 <br/> I am trying to merge these two project into one. Working on this right now.
</h4>
The data come from a MongoDb, via mLab or  "MonogoDb Compass Community".
The APIs are built via NodeJS and Express framework.
In addition, the Single Page Application is built via Angular 6/7.

<br/><br/>
Before execute this project, NodeJS is required to install locally. In addition, it needs to install the following node modules : ExpressJS, MongoDb, body-parser, and so on.Also, it is suggested to install nodemon. So that, the API can restart you server when file changes.

<h3>To run the Angular7 CRUD project, where the MongoDb is created locally.</h3>
1. Go to ./notable proj/angularCRUD folder
2. Starts two console terminals or similar cmd windows in this folder. Execute the following two command respectively:
 <br/><bold>npm start</bold>
  <br/><bold>node server.js</bold>
3. Start the "MongoDb Compass Community" in your computer, make sure the localhost port number is 27017, which is the defult value in the software.
4. Go to http://localhost:4200/ in your local browser.    

<h3>To run API project based on MongoDb data in the web.</h3>
1. Go to ./notable proj folder
2. Execute one of the following commands:
 <br/><bold>npm run dev</bold>
 <br/><bold>node server.js</bold>
3. At present, the APIs live on the localport:8000. You can use Postman to verify the.


<br/><br/>
<h4>The two projects are under merging now.</h4>


