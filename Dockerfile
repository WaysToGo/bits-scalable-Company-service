# docker file for deploying Blitz app
#
# Build: docker build -t blitz .
# Run: docker run -p 3000:3000 blitz

# Use the official Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

CMD [ "npm", "run", "dev" ]

# Run in development mode
# CMD [ "npm", "run", "dev" ]

# Expose port 3000 to the world
EXPOSE 3000



