# pull official base image
FROM node:14.4.0-alpine3.10

# set working directory
WORKDIR /frontend

# add '/frontend/node_modules/.bin' to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# install app dependencies
ADD yarn.lock ./
ADD package.json ./
RUN yarn install --silent
RUN yarn global add react-scripts@3.4.1 --silent
RUN yarn global add react-bootstrap bootstrap --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]
