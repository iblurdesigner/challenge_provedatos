FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD: null
ENV MYSQL_ALLOW_EMPTY_PASSWORD: 1

COPY ./init.sql /docker-entrypoint-initdb.d/