FROM node:lts-alpine

# Create working directory
WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm build
EXPOSE 3000
CMD ["serve"]