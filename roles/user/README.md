my_ansible_collections.linux.user
=========

Role to add user and set symbol link to "~/.local/bin".

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

- `user_name`: string

  Name of the user to create

Optional:

- `user_comment`: string

  Optionally sets the description of user account.

- `user_generate_ssh_key`: boolean

  Whether to generate a SSH key for the user in question.

- `user_group`: string

  Optionally sets the user’s primary group (takes a group name).

- `user_groups`: list / elements=string

  A list of supplementary groups which the user is also a member of.
  <br>
  When set to an empty string '', the user is removed from all groups except the primary group.

- `user_home`: string

  Optionally set the user’s home directory.

- `user_shell`: string

  Optionally set the user’s shell.
  <br>
  See notes for details on how other operating systems determine the default shell by the underlying tool.

- `user_ssh_key_bits`: integer

  Optionally specify number of bits in SSH key to create.
  <br>
  The default value depends on ssh-keygen.

- `user_ssh_key_comment`: string

  Optionally define the comment for the SSH key.

- `user_ssh_key_file`: string

  Optionally specify the SSH key filename.
  <br>
  If this is a relative filename then it will be relative to the user’s home directory.
  <br>
  This parameter defaults to .ssh/id_rsa.

- `user_ssh_key_passphrase`: string

  Set a passphrase for the SSH key.
  <br>
  If no passphrase is provided, the SSH key will default to having no passphrase.

- `user_ssh_key_type`: string

  Optionally specify the type of SSH key to generate.
  <br>
  Available SSH key types will depend on implementation present on target host.
  <br>
  **Default:** `rsa`

- `user_home_local_bin`: list

  - `src`: string

    Path of the file to link to.

  - `symlink`: string

    Link filename.

Example Playbook
----------------

An example of using this role is as follows:

```
- hosts: servers
  roles:
    - role: my_ansible_collections.linux.user
      user_name: hoge
      user_generate_ssh_key: true
      user_home_local_bin:
        - src: /usr/local/openssl-3.1/bin/openssl
          symlink: openssl
```