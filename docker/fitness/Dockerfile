FROM nginx:latest

COPY ./nginx-host.conf /etc/nginx/conf.d/default.conf
COPY ./mime.types /etc/nginx/mime.types

CMD ["nginx", "-g", "daemon off;"]
