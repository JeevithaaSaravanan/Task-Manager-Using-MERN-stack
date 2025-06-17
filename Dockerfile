# Use Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy root-level package.json and lock files
COPY package*.json ./

# Install root dependencies (concurrently)
RUN npm install

# Copy the entire project (frontend, backend, etc.)
COPY . .

# Install frontend and backend dependencies
RUN npm install --prefix frontend && npm install --prefix backend

# Expose frontend and backend ports
EXPOSE 3000 5000

# Run both frontend and backend
CMD ["npm", "run", "dev"]
