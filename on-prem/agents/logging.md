---
title: On-prem Agent - Logging
date: 2019-08-09 00:00:00 Z
isTocVisible: true
---

# On-prem Agent logs
The on-prem agent (OPA) contains code to log various types of events. The log file will contain OPA activity, errors, warnings and traces. The log file is useful for many scenarios; it is most commonly used for troubleshooting.

## Logging schedule
The OPA logger will create a new log file at the start of each day (according to the on-premise system time). It will also create a new log file once the file size exceeds 20MB. The multiple log files in a single day will be numbered in sequence to identify them.

| Scenario 1 | Scenario 2 |
| ---------- | ---------- |
| 01-NOV-2019 | 02-NOV-2019 |
| Total file size: 15MB | Total file size: 25MB |
| `/agent-2019-11-01.0.log`<br>A log file is created at the start of the day. | `/agent-2019-11-02.0.log`<br>A log file is created at the start of the day. The first 20MB will be stored in this file.<br><br>`/agent-2019-11-02.1.log`<br>Another log file will be created and contains the remaining 5MB. |

You can access the OPA log files in the agent folder. The OPA will only retain the most recent 60 files, or at most 20GB of files. 

### OPA log properties
OPA logs contain the following properties:

| OPA log property | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| Date             | Each log file is dated to improve locating the right file.                                |
| Numbered logs    | If there are multiple log files in a single day, they will be numbered in sequence.       |
| File size limit  | The logger enforces a 20MB size limit to make it easier to query the file content.        |
| Storage limit    | The folder limit reduces the storage load on the server.                                  |

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
