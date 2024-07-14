# Use the Node.js 16 Alpine base image
FROM node:18.19.0-alpine

# Install pnpm globally
RUN npm install -g pnpm
RUN npm install -g pm2


WORKDIR /app

# Copy package.json, pnpm-lock.yaml, and install dependencies
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

# Install esbuild-plugin-tsc
RUN pnpm install --save-dev esbuild-plugin-tsc

# Copy the rest of the application code
COPY . .

# Run the build command
RUN pnpm run build

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]

