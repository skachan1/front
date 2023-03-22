FROM node:14.0   
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3002
ENTRYPOINT [ "npm", "start" ]
