# base node:18
FROM node:18

# create app directory
WORKDIR /usr/src/app

# bundle app source
COPY . .

# install node_modules
RUN npm run install-server

# app run on port 5000
EXPOSE 5000

# run the server
CMD [ "node", "server.js" ]
