FROM ubuntu:22.04

RUN apt update && apt upgrade -y && apt install -y python3 init curl