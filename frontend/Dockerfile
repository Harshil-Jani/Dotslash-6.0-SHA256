# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json files into the Docker image
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application and server code into the Docker image
COPY . .
# Build the React application
RUN npm run build

# Serve the static files with a lightweight web server
FROM nginx:stable-alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
