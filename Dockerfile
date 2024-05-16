# Use the official Node.js LTS image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the Vue app
RUN npm run build

# Copy the rest of the application code
COPY . .
