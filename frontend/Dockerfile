FROM node:14.4.0-alpine3.10
USER root
WORKDIR /frontend
COPY package.json /frontend
RUN yarn install
COPY . /frontend
EXPOSE 3000
CMD ["yarn", "run", "start"]