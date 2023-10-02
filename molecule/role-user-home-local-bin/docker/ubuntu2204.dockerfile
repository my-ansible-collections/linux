FROM ubuntu:22.04

RUN apt update && apt upgrade -y && apt install -y python3 ca-certificates curl tar gzip perl gcc make
RUN curl -O https://www.openssl.org/source/openssl-3.1.3.tar.gz
RUN tar zxvf openssl-3.1.3.tar.gz
RUN cd openssl-3.1.3 && ./Configure '-Wl,-rpath,$(LIBRPATH)' --prefix=/usr/local/openssl-3.1 && make && make install
