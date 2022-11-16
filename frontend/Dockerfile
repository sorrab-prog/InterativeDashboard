# pull official base image
FROM node:16-alpine AS builder

# set working directory
WORKDIR /app

# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package.json ./

# Installs all node packages
RUN yarn install

# Copies everything over to Docker environment
COPY . ./

ENV GENERATE_SOURCEMAP false

RUN yarn build

#Stage 2
#######################################
#pull the official nginx:1.23.2 base image
FROM nginx:1.23.2-alpine
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copies static resources from builder stage
COPY --from=builder /app/build .

EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]