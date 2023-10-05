my_ansible_collections.linux.support_os
=========

Roll to check if the OS is supported.

Role Variables
--------------

See following

[/roles/support_os/meta/argument_specs.yml](./meta/argument_specs.yml)

Example Playbook
----------------

An example of using this role is as follows:

```
- hosts: servers
  roles:
    - role: my_ansible_collections.linux.support_os
      support_os_list:
        - distribution: Ubuntu
          major_version: "22"
        - distribution: Amazon
          major_version: "2023"
        - distribution: AlmaLinux
          major_version: "9"
        - distribution: RedHat
          major_version: ["8", "9"]
        - distribution: CentOS
          major_version: "7"
```
