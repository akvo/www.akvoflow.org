FROM node:18.13.0-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN ["npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html
