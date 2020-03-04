---
title: IP whitelists
date: 2017-12-12 18:00:00 Z
---

# IP whitelists
IP whitelisting allows you to ensure traffic to/from Workato is not hijacked by a malicious website.

### Traffic from Workato
All traffic from Workato comes through the following IP addresses:

- **52.5.142.59**
- **34.226.132.221**
- **52.54.43.157**

You can add these IP addresses to your application/firewall whitelist. Add all three IP addresses to the whitelist to ensure continuous access.

#### Example whitelist configuration
If you have a recipe that accesses a MySQL server running on an Amazon EC2 machine, with a special user called **integrationuser**, you can run the following SQL command on your database to whitelist the Workato IP addresses.

```sql
GRANT ALL ON db1.*
TO 'integrationuser'@'52.5.142.59',
'integrationuser'@'34.226.132.221',
'integrationuser'@'52.54.43.157';
```

### Traffic to Workato

#### On-premise agent
Workato's [on-premise agent](/on-prem.md) provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases and folders without having to open inbound ‘ports’ in the corporate firewall. The on-premise agent makes an outbound connection to Workato via an on-premise gateway.

If your organization has strict outbound traffic rules, you should whitelist the on-premise gateway IP address:

| Host name  | IP Addresses | Notes
| ------------- | ------------- |--|
| sg.workato.com  | 34.192.94.13<br>34.195.128.7<br>34.226.84.130<br>| Will be deprecated on 5 April 2020 |
| sg1.workato.com  | 50.16.101.13<br>54.84.241.116<br>34.237.50.149  | |
| sg2.workato.com  | 34.204.129.29<br>34.228.172.35<br>54.83.143.113  | |

{.api-input}

_Note: The IP address **52.206.58.244** was deprecated on 28 March 2018._


#### General (browsers, webhooks, API endpoints)
All other traffic to Workato:

- Browser based user interaction and webhooks at `www.workato.com`
- API endpoint requests at `apim.workato.com`

may be served by a different set of IP addresses, distinct from IP addresses mentioned in the previous sections. This set may expand and contract based on overall platform utilization, so it is not completely static.
