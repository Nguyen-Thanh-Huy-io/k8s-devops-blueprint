#build image for angular frontend"
FROM node:18.10-alpine as build

WORKDIR /app
COPY . .

RUN npm install --force 
RUN npm run build

FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/angular-ecommerce /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]


