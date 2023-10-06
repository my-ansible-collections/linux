my_ansible_collections.linux.build
=========

Roll for source build.
However, there is no idempotency equality.

Supported Platforms
--------------

- Ubuntu
  - 22.04
- Amazon Linux
  - 2003
- AlmaLinux
  - 9
- RHEL
  - 8
  - 9
- CentOS
  - 7

Role Variables
--------------


See following

[/roles/build/meta/argument_specs.yml](./meta/argument_specs.yml)

Example Playbook
----------------

An example of using this role is as follows:

```
- hosts: servers
  roles:
    - role: my_ansible_collections.linux.build
      build_archived_source:
        remote_src: true
        src: https://www.openssl.org/source/openssl-3.1.3.tar.gz
        dest: /usr/local/src
      build_configure_script:
        name: Configure
        options:
          - "'-Wl,-rpath,$(LIBRPATH)'"
          - "--prefix=/usr/local/openssl-3.1"
      build_make:
        targets:
          - all
          - install
```