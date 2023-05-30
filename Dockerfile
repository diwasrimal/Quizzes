# First build the project using a node image
FROM node:19-alpine as builder

WORKDIR /app

COPY . .

RUN npm clean-install
RUN npm run build

# Then use nginx for serving built files
FROM nginx:1.25.0-alpine as production

ENV NODE_ENV production

# Copy the folder generated after build
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
