FROM nginx:1.19-alpine
RUN apk add curl

RUN echo "_cache check_"

COPY ./build/ /usr/share/nginx/html/ 
RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./frontend.conf /etc/nginx/conf.d
EXPOSE 80