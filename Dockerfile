# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package configuration files
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./

# Install all dependencies (including devDependencies needed for build)
RUN npm install

# Copy the rest of the application files
COPY src/ ./src/
COPY public/ ./public/

# Build the project using the node-server Nitro preset
ENV NITRO_PRESET=node-server
RUN npm run build

# Stage 2: Production runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# Only copy the built artifact from builder stage
COPY --from=builder /app/.output/ ./.output/

# Expose the default Nitro server port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Start the node server
CMD ["node", ".output/server/index.mjs"]
