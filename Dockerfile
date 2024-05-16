# Use a lightweight Node image
FROM node:alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install @rollup/rollup-linux-x64-musl@4.17.2

# Copy the rest of the application
COPY . .

# Build the Vue app
RUN npm run build
