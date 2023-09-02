# FROM node:14

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# RUN npm install -g nodemon

# COPY . .

# RUN chmod +x ./node_modules/.bin/*

# EXPOSE 3000

# CMD [ "npm", "run", "dev" ]

# Use an official Node.js runtime as a parent image
# FROM node:14

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install application dependencies
# RUN npm install

# # Set environment variable to prevent browser opening
# ENV BROWSER=none

# # Copy the rest of the application code to the working directory
# COPY . .

# # Expose the port your application will run on (adjust if necessary)
# EXPOSE 3000

# # Command to start your application
# CMD ["npm", "run", "dev"]

# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose ports your app will use (for example, if your API runs on port 4000)
EXPOSE 4000
EXPOSE 3000  

# Start the application
CMD ["npm", "run", "dev"]

