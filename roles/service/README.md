my_ansible_collections.linux.service
=========

Role to install and configure a service.

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

[/roles/service/meta/argument_specs.yml](./meta/argument_specs.yml)

Example Playbook
----------------

An example of using this role is as follows:

```
- hosts: servers
  roles:
    - role: my_ansible_collections.linux.service
      service_list:
        - package: httpd
          name: httpd
          state: started
          enabled: true
          copy_conf:
            - src: ../file/httpd.conf
              dest: /etc/httpd/conf/httpd.conf
              backup: true
          handler:
            state: reloaded
        - package: openssh-server
          name: sshd
          state: started
          enabled: true
          copy_conf:
            - src: ../file/sshd_config
              dest: /etc/ssh/sshd_config
              backup: true
          handler:
            state: reloaded
```
