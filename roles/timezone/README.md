my_ansible_collections.linux.timezone
=========

Role to set the timezone.

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

Required:

- `timezone_name`: string

  Name of timezone (ex. `Asia/Tokyo`)

Example Playbook
----------------

An example of using this role is as follows:

```
- hosts: servers
  roles:
    - role: my_ansible_collections.linux.timezone
      timezone_name: Asia/Tokyo
```