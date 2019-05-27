# Trigger

When users use connectors in recipes on Workato, every recipe is triggered based on events. Triggers are used to search or receive these events and execute recipes based on data retrieved. Our SDK allows you to build 3 types of triggers which end users using your connector can configure as the first step of their recipe.

Use polling triggers if you want Workato to send HTTP requests at regular intervals, where you can instruct the connector to check for events using a predetermined set of API calls.

Use webhook triggers to receive events in real time. Workato allows you to programatically set up and teardown webhook URLs or use static webhook URLs according to your use case.

- [Poll trigger](trigger/poll-trigger.md)
- [Dynamic webhook trigger](trigger/webhook-trigger.md)
- [Static webhook trigger](trigger/static-webhook-trigger.md)
