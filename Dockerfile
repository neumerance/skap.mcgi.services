# Use a lightweight Node image
FROM node:alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Vue app
RUN npm run build
