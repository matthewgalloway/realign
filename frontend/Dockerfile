FROM node:14 as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
ARG VUE_APP_API_URL
ENV VUE_APP_API_URL=$VUE_APP_API_URL        
RUN yarn build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]