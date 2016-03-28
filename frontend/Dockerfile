FROM smebberson/alpine-nginx:latest
ADD dist/ /usr/html/
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log
