# Use an official Node.js runtime as a parent image
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the built Angular application from the build stage to the Nginx directory
COPY --from=build /app/dist/angular-project-name /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
