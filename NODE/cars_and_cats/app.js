const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });     
    }
    else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });     
    }

    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });     
    }

    else if (request.url === "/stylesheets/style.css") {
        fs.readFile('./stylesheets/style.css','utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents); 
            response.end();
        });
   }

   else if(request.url === '/images/Car1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/Car1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

  else if(request.url === '/images/Car2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/Car2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

  else if(request.url === '/images/Car3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/Car3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

  else if(request.url === '/images/Car4.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/Car4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

  else if(request.url === '/images/Cat1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/Cat1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

  else if(request.url === '/images/Cat2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/Cat2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

  else if(request.url === '/images/Cat3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/Cat3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }

  else if(request.url === '/images/Cat4.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/Cat4.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/cars/new'){
    // notice we won't include the utf8 encoding
    fs.readFile('views/new.html', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
    })
  }

    // request didn't match anything:
    else {
        fs.readFile('views/error.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });     
    } 
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");

