# To-do

<img width="1280" alt="Screenshot 2022-06-18 at 2 20 08 AM" src="https://user-images.githubusercontent.com/107430204/174399392-6cd5627c-cd23-4b87-b2af-c7cd31154118.png">




This is a Todolist web application that uses ejs templating for front-end and uses Node.js and Express for backend. The todo items are stored on a MongoDB database. Initially when you open the application you see no items added but you can add more items by yourselves and when you add an item a post route is triggered which creates a database item and stores it inside the relevant database. Each route URL has its own database created which stores separate data. You can just access a new route and then create a todolist for that specific route.
Body-parser npm package is used to access the form body values from the ejs template to create a new item.
The database is currently connected to localhost:27017 but it can be connected anywhere as wished. The css used to style is stored inside the public directory to serve up static assets.




<img width="1280" alt="Screenshot 2022-06-18 at 5 18 44 AM" src="https://user-images.githubusercontent.com/107430204/174413368-11044702-f3e8-4adb-b1c1-cfe18be6c39e.png">

**Steps**

1. Create EJS template
2. Run code inside EJS template
3. Pass data from webpage to server
4. Create database using mongoose.
5. Render database items in the todolist database.
6. Delete items from the list
7. Create custom lists using express route parameters
8. Add new items to the custom list.
9. Delete items from custom todo lists.
