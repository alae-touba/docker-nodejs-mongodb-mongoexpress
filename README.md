# About

code for a node app image that works with two other apps (mongodb and mongo-express)

#Link to the image in docker hub
[link to image](https://hub.docker.com/repository/docker/alaetouba/node-mongodb-mongoexpress-image)

#How to use the image

(make sure you have docker and docker-compose installed)

1. download the docker-compose.yaml file
2. Open the terminal, go to where you downloaded the file and run:

```
docker-compose -f docker-compose.yaml up
```

By now you should have 3 containers running, one for the [node image](https://hub.docker.com/repository/docker/alaetouba/node-mongodb-mongoexpress-image), one for the [mongo](https://hub.docker.com/_/mongo) image and one for the [mongo-express](https://hub.docker.com/_/mongo-express) image

3. open your favorite navigator and go to:

```
localhost:3000
```

4. if you want to visualize the content of the database using mongo-express, go to

```
localhost:3001
```

(the name of the database is db)
