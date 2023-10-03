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

Required:

- `service_name`: string

  Service name.

Optional：

- `service_state`: string

  Service Status.

- `service_enabled`: boolean

  Whether the unit should start on boot.

- `service_copy_conf`: list

  - `src`: string

    Local conf path to a file to copy to the remote server.
    <br>
    This can be absolute or relative.

  - `dest`: string

    Remote absolute path where the file should be copied to.

  - `backup`: boolean

    Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly.

  - `owner`: string

    Name of the user that should own the filesystem object, as would be fed to chown.
    <br>
    When left unspecified, it uses the current user unless you are root, in which case it can preserve the previous ownership.
    <br>
    Specifying a numeric username will be assumed to be a user ID and not a username. Avoid numeric usernames to avoid this confusion.

  - `group`: string

    Name of the group that should own the filesystem object, as would be fed to chown.
    <br>
    When left unspecified, it uses the current group of the current user unless you are root, in which case it can preserve the previous ownership.

  - `mode`: string

    The permissions of the destination file or directory.

- `service_template_conf`: list

  - `src`: string

    Local conf path to a template file to the remote server.
    <br>
    This can be absolute or relative.

  - `dest`: string

    Remote absolute path where the file should be copied to.

  - `backup`: boolean

    Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly.

  - `owner`: string

    Name of the user that should own the filesystem object, as would be fed to chown.
    <br>
    When left unspecified, it uses the current user unless you are root, in which case it can preserve the previous ownership.
    <br>
    Specifying a numeric username will be assumed to be a user ID and not a username. Avoid numeric usernames to avoid this confusion.

  - `group`: string

    Name of the group that should own the filesystem object, as would be fed to chown.
    <br>
    When left unspecified, it uses the current group of the current user unless you are root, in which case it can preserve the previous ownership.

  - `mode`: string

    The permissions of the destination file or directory.

- `service_lineinfile_conf`: list

  - `path`: string

    Remote absolute conf path.

  - `regexp`: string

    The regular expression to look for in every line of the file.

  - `line`: string

    The line to insert/replace into the file.

  - `insertafter`: string

    If specified, the line will be inserted after the last match of specified regular expression.
    <br>
    A special value is available; EOF for inserting the line at the end of the file.
    <br>
    If specified regular expression has no matches, EOF will be used instead.
    <br>
    If insertbefore is set, default value EOF will be ignored.
    <br>
    If regular expressions are passed to both regexp and insertafter, insertafter is only honored if no match for regexp is found.
    <br>
    May not be used with or insertbefore.

  - `insertbefore`: string

    If specified, the line will be inserted before the last match of specified regular expression.
    <br>
    A value is available; BOF for inserting the line at the beginning of the file.
    <br>
    If specified regular expression has no matches, the line will be inserted at the end of the file.
    <br>
    If regular expressions are passed to both regexp and insertbefore, insertbefore is only honored if no match for regexp is found.
    <br>
    May not be used with backrefs or insertafter.

  - `backup`: boolean

    Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly.

  - `owner`: string

    Name of the user that should own the filesystem object, as would be fed to chown.
    <br>
    When left unspecified, it uses the current user unless you are root, in which case it can preserve the previous ownership.
    <br>
    Specifying a numeric username will be assumed to be a user ID and not a username. Avoid numeric usernames to avoid this confusion.

  - `group`: string

    Name of the group that should own the filesystem object, as would be fed to chown.
    <br>
    When left unspecified, it uses the current group of the current user unless you are root, in which case it can preserve the previous ownership.

  - `mode`: string

    The permissions of the destination file or directory.

- `service_state`: string

  State of the service after modifying the configuration file.

Example Playbook
----------------

An example of using this role is as follows:

```
- hosts: servers
  roles:
    - role: my_ansible_collections.linux.service
      service_name: httpd
      service_state: started
      service_enabled: true
      service_copy_conf:
        - src: ./file/httpd.conf
          dest: /etc/httpd/conf/httpd.conf
          backup: true
      service_handler_state: reloaded
```
