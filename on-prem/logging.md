---
title: On-premises Agent - Logging
date: 2017-02-22 12:00:00 Z
---

# On-premises Agent - Logging

Logging is an important practice for processes like debugging, troubleshooting and reporting. The on-prem agent allows you to configure how you want to capture and store OPA logs. This document will teach you how to achieve that with each option available to you.

## Global logging

You can configure a global `logging` in the OPA `config.yml` file. This allows you to define the level for each logger. It follows the following format.

```yml
logging:
  <logger>: <level>
```

`<logger>` should be replaced with one of the built-in logger names or a custom logger that you wish to use. Refer to the table below for more details.

| Logger      | Description |
| ----------- | ----------- |
| workato     | Use this to refer to the standard parts of the OPA (written by Workato). |
| sql         | Use this to refer to database-related profiles. |
| root        | Use this to refer to all profiles.              |
| "custom"    | You can optionally use your own custom logger. You must provide the class name or package name. Example: `"com.workato.agent.file"` |
*Table of supported loggers*

`<level>` should be replaced with the logging level that you wish to use. Refer to the table below for the supported levels.

| Level | Description                                                        |
| ----- | ------------------------------------------------------------------ |
| debug | Fine-grained information logging. Useful for debugging.            |
| trace | Similar to debug, but even finer-grained.                          |
| info  | Coarse-grained information logging. Highlights progress of events. |
| warn  | Log potentially harmful events.                                    |
| error | Log information of exception events.                               |
*Table of supported levels*

## Profile specific logging

If you wish to have more control over the logging level across each profile, you can choose to enable debug mode for individual profiles. To do so, you need to add `debug: true` to each profile. For example, you can debug only to the marketing database profile.

```yml
database:
  marketing_db:
    adapter: mysql
    database: workato
    username: user
    password: password
    timeout: 30
    debug: true
```

> **This is applied on top of the global logging configuration.**
