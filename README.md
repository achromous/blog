To run this in development mode you need docker-compose installed. You then run:

`docker-compose build`
`docker-compose up`

If you want to muck with the containers you can do so using:

`docker exec -i -t <container-name> /bin/bash`

I have accumulated some cruft while mucking with my setup - this is how you
clean things out when that happens.

Cleaning out all the containers.

`docker stop $(docker ps -a -q)`
`docker rm $(docker ps -a -q)`

Clearing out old volumes.
`docker volume rm $(docker volume ls)`

Deployment to production happens by logging into the production instance,
pulling from git, and then running the docker-compose for prod. If it is a
fresh instance then installing git, docker, and docker-compose will have to
happen first. I have found pip the easeist way to install docker-compose.

`ssh -i achromous_blog.pem ubuntu@ec2-54-89-220-64.compute-1.amazonaws.com
git pull
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up`


Cleaning out all the containers.

`docker stop $(docker ps -a -q)`
`docker rm $(docker ps -a -q)`

Clearing out old volumes.
`docker volume rm $(docker volume ls)`
