The following steps will get this running locally:
* Install Node (if you do not already have it on your system)
* run `npm install` in the frontend directory
* run `npm install` in the backend directory
* open two terminal windows, run `npm start` in the frontend directory, and run
`node api.js` in the backend directory
* open localhost:3000 to see how awesome this blog is

Below are some commands for working with the frontend in docker. It has only
been tested with a windows host. Unfortunately at present editors won't
function well due to the node_modules folder being obscured from the host OS.

`docker build -t blog .`
`docker run -i -t -p 9999:3000 blog /bin/bash`
