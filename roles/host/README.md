my_ansible_collections.linux.host
=========

Role to set timezone and hostname.

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

[/roles/host/meta/argument_specs.yml](./meta/argument_specs.yml)

Example Playbook
----------------

An example of using this role is as follows:

```
- hosts: servers
  roles:
    - role: my_ansible_collections.linux.host
      host_timezone: Asia/Tokyo
      host_name: hoge
```