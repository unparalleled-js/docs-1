---
title: On-premises Agent - Logging
date: 2019-08-09 00:00:00 Z
---

# On-premises Agent logs
The on-premises agent contains code to log various types of events. The log file will contain OPA activity, errors, warnings and traces. The log file is useful for many scenarios; The most common one is troubleshooting.

## Logging OPA activity
At the top level of your `config.yml` file, add the `logging` definition to record the various level of activity logs.

```yml
logging:
  logger: logging_level
  workato: debug
  sql: trace
```

These are the loggers that can be used.

| `logger` | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| workato  | This will include logs from all parts of the OPA.                  |
| sql      | This will only log database-related parts of the OPA.              |
| custom   | See [Using a custom logger](#using-a-custom-logger) for more info. |

These are the supported logging levels.

| `logging_level` | Description |
| --------------- | ----------- |
| trace           | Information useful for identify steps leading up to an error. Typically used for diagnosis by engineering support.<br>Example: Starting secure tunnel |
| debug           | Information useful for troubleshooting or diagnosis and understandable by users.<br>Example: Failure due to an unknown exception. |
| info            | Information that should be logged under normal conditions.<br>Example: agent starting/stopping. |
| warn            | Information about an occurrence that could be a problem, but does not require immediate user attention.<br>Example: transient network interruption. |
| error           | Information about an error that needs investigation.<br>Example: Agent failed to start. |

## Logging for specific profiles
You can also choose to selectively enable logs for specific profiles. All you need to do is add `debug: true` definition to the profile.

```yml
database:
  sql:
    adapter: mysql
    database: workato
    username: user
    password: password
    timeout: 30
    debug: true
```

## Using a custom logger
You can also use a custom logger instead of the native ones. To do so, simply replace the logger name with the class name or package name of your custom logger.

```yml
logging:
  "com.workato.agent.file": debug
```
