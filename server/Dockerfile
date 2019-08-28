# Nom de l'image -> install node
FROM node:alpine

# Définition du workspace
WORKDIR /home/node/app

# SELECT all package.json du projet & le copie dans mon workspace 
COPY package*.json ./ 

RUN npm install

# On copie tout le projet dans le workspace
COPY . .


# Run docker build . pour lancer le dockerfile

