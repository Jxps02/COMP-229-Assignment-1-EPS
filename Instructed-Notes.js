/*
PART 2
1. Went on CMD terminal then used command - cd <file>
2. Install express generator - nmp install -g express-generator
3. CMD Command - express -e
4. Open file in VS Code 
5. In VS Code terminal use command - npm install
6. In VS Code terminal use command - npm start note: it will start with the default ./bin/www
7. Expand ./bin folder, drag /www out and delete ./bin | note: this will leave you with ./www folder
8. rename ./www folder to server.js
9. Locate package.json, under "start":, rename "node ./bin/www" to "node ./server.js" 
10. Install EJS extension
11. go to views > index.ejs
12. In the body change text to Hello World

PART 3 - Site Structure
1. Express Generator is broken down to 3 main folders - public, routes, views with the main mainifest(central file that links all site structure together) file which is app.js
2. Starting with app.js
3. ctrl + f and replace all "var" with let"
4. Note: controller is the logic behind the file "routes", "views" are the things that we see that gets delivered to the user
5. Under the public folder within we made 3 new folders: "Content", "Assets", and "Script". We also dragged the "image" folder into the "Assets" folder.
6. We also dragged the file "style.css" from the "stylesheets" folder into the "Content" folder and renamed it "app.css"
7. Then we deleted the "Javascrips" folder and under the "Scrips" folder we created a new file called "app.js"
8. within "app.js" we made a IIFE - Immediately Invoked Function Expression
9. Delete folder "stylesheets" and then under the "views" folder and in the "index.ejs" file we changed the link to '/Content/app.css'
10. Select language back to HTML and added a script with the source src="/Scripts/app.js"
11. Run server "node ./server.js" in the terminal
12. in you localhost server "http://localhost:3000/" right click the server and click inspect. Under the console you should be able to see the /Scripts/app.css

13. Under the "routes" folder, in the file "index.js" change the Get home page to 
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Express',
  h1: 'Main Heading'
});
});

14.Under the "views" folder, in the file "index.ejs" change the "<h1><%= Title %></h1>" to "<h1><%= h1 %></h1>" When refreshing the website it will say "Main Heading"
15. In conclusion we are passing in the the Main Heading "h1" from /routes/index.js and injecting it into /views/index.ejs

PART 4 - Routing
1. Under /routes/index.js we addded 6 more routes(copy and paste) which is Home, Home, About, Products, Service, and Contacts | This creates more routes ex. http://localhost:3000/products
2. then in /views/index.ejs we updated the <h1> to  "<h1>Welcome to the <%= title %> page</h1>" | Note: this will be used/seen in all of the routes that were previously created
3. Note: we can also use express.static syntax to add routes that are automatic
4. Under /views/index.ejs were going to make a change the HTML structure. Scroll down the current HTML and type in HTML:5 which will grant us a new html code.
5. Now import these tags <title>, <link>, <h1>, and <script> from the previous HTML code into the new HTML:5. Now delete the old HTML code, keeping the new structure.
6. Open a new terminal and keep the current running. In the working file use command "npm install bootstrap", "npm install jquery --save", "npm install popper.js --save", 
   and "npm install @fortawesome/fontawesome-free --save"
7. In /app.js under "//view engine setup" add   "app.use(express.static(path.join(__dirname, 'node_modules')))"   to set up a path to /node_modules
8. Now in the /views/index.ejs we want to put these links that will link to bootstrap, forttawaesome, and jquery which is located at /node_modules

  <!--CSS Section-->
  <link rel="stylesheet" href="/boostrap/dist/css/bootrap.min.css">
  <link rel="stylesheet" href="/@fortawesome/fontawesome-free/css/all.min.css">
  <link rel='stylesheet' href='/Content/app.css' />

    <!--Script Section-->
  <script src="/jquery/dist/jquery.min.js"></script>
  <script src="/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="/Scripts/app.js"></script>

  9. in conclusion this changed the font.

  PART 5 - Navigation
  1. Go to bootstrap.com > documentation/doc > components(left side) > navbar > copy navbar code 
  2. Under /views/index.ejs under <body> paste the code


    <!--Main Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


3. under <!--Main Navigation>. change: <nav class="navbar navbar-expand-lg navbar-light bg-light">  into  <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
   to make it look better
4. same thing change the name from: <a class="navbar-brand" href="#">navbar</a>  into  <a class="navbar-brand" href="#">COMP229</a>
5.

    <!--This changed the hamburger or the small icon that appears when you make the window smaller to view the navbar-->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

6. 

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--This below changed the margin from the right to left ie. mr-auto(rightside) and ml-auto(leftside)-->
      <ul class="navbar-nav ml-auto">

7. delete everything else under
8. Copy and paste this code 4 times leaving you with a total of 5. Then rename them home, about, products, services, and contacts

        <li class="nav-item active">
          <a class="nav-link" href="/home">Home </a>
        </li>

9. Go to fontawesome.com and look for a house icon and copy the snippet. And then paste in in our /views/index.ejs. ie:

FROM:
        <li class="nav-item active">
          <a class="nav-link" href="/home">Home </a>
        </li>

TO: 
        <li class="nav-item active">
          <a class="nav-link" href="/home"><i class="fa-solid fa-house-laptop"></i> Home </a>
        </li>

10. You can change the size to large by adding "fa-lg"            

        <li class="nav-item active">
          <a class="nav-link" href="/home"><i class="fa-solid fa-lg fa-house-laptop"></i> Home </a>
        </li>

11. Do that for the rest of the 4 paths
12. Go to getboostrap.com > Jumbotron > copy code
13. under </nav> add a <main></main> and inside paste the Jumbotron page
14. Inside the <main> create a class called container ie: <main class="container">
15. Inject the "<h1>Welcome to the <%= title %> page</h1>" into the Jumbotron and delete all the <p></p>paragraphs

PART 6 - Partials
1. In /views/index.ejs We used the ejs syntax to highlight the current path thats being used in order to make it easier for the user to know which path theyre on (code does not work)
2. We are adding a sticky bottom which will be located on the bottom left which will be called "C Copyright 2020. All Rights reserved"

 <!--Bottom Nav-->
  <footer>
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <div class="container-fluid">
        <h3 class="display-6 navbar-text">&copy; Copyright 2023 All Rights Reserved</h3>
      </div>
    </nav>
  </footer>

3. under the views folder, make 2 files called: footer.ejs and header.ejs
In the index.ejs cut and copy the code into header.ejs:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
  <!-- CSS Section -->
  <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/@fortawesome/fontawesome-free/css/all.min.css">
  <link rel="stylesheet" href="/Content/app.css">

</head>

In the index.ejs cut and copy the code into footer.ejs:

<!-- Script Section -->
<script src="/jquery/dist/jquery.min.js"></script>
<script src="/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="/Scripts/app.js"></script>
</body>
</html>

4. 

*/