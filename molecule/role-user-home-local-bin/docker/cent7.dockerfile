FROM centos:7

RUN yum update -y ca-certificates
RUN yum install -y tar gzip perl perl-IPC-Cmd gcc make
RUN curl -O https://www.openssl.org/source/openssl-3.1.3.tar.gz
RUN tar zxvf openssl-3.1.3.tar.gz
RUN cd openssl-3.1.3 && ./Configure '-Wl,-rpath,$(LIBRPATH)' --prefix=/usr/local/openssl-3.1 && make && make install
