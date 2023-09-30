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

Required:

- `build_unarchive.src`: string

  If remote_src=no, local path to archive file to copy to the target server; can be absolute or relative. If remote_src=yes, path on the target server to existing archive file to unpack.
  <br>
  If remote_src=yes and src contains ://, the remote machine will download the file from the URL first. (version_added 2.0). 

- `build_unarchive.dest`: string

  Remote absolute path where the archive should be unpacked.
  <br>
  The given path must exist. Base directory is not created by this module.

- `build_unarchive.remote_src`: boolean

  Set to true to indicate the archived file is already on the remote system and not local to the Ansible controller.

- `build_configure.name`: string

  Name of Configuration Script.

- `build_make.targets`: list / elements=string

  Targets of make.

Optional：

- `build_package.name`: list / elements=string

  A list of package names, like foo, or package specifier with version, like foo=1.0 or foo>=1.0. Name wildcards (fnmatch) like apt* and version wildcards like foo=1.0* are also supported.
  <br>
  **Default:** `[]`

- `build_configure.options`: list / elements=string

  Configuration Script Options.

Example Playbook
----------------

An example of using this role is as follows:

```
- hosts: servers
  roles:
    - role: my_ansible_collections.linux.build
      build_unarchive:
        src: https://www.openssl.org/source/openssl-3.1.3.tar.gz
        dest: /usr/local/src
        remote_src: true
      build_configure:
        name: Configure
        options:
          - "'-Wl,-rpath,$(LIBRPATH)'"
          - "--prefix=/usr/local/openssl-3.1"
      build_make:
        targets:
          - all
          - install
```