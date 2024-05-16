# Use a lightweight Node image
FROM node:alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json ./

# Copy ssl keys
COPY /etc/letsencrypt/live/skap.mcgi.services/fullchain.pem ./etc/nginx/certs/fullchain.pem
COPY /etc/letsencrypt/live/skap.mcgi.services/privkey.pem ./etc/nginx/certs/privkey.pem

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Vue app
RUN npm run build
