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
Workato's [on-premise agent](/on-prem.md) (OPA) provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases and folders without having to open inbound ‘ports’ in the corporate firewall.

The OPA makes an outbound connection to the Workato cloud's on-premise gateways using a small number of hostnames/IP addresses.

| Host name | IP Addresses | TCP port | Notes |
| ------------- | ------------- | ---- | ---- |
| `sg1.workato.com` | 50.16.101.13<br>54.84.241.116<br>34.237.50.149 | 443 | |
| `sg2.workato.com` | 34.204.129.29<br>34.228.172.35<br>54.83.143.113 | 443 | |
| `sg.workato.com` | 34.192.94.13<br>34.195.128.7<br>34.226.84.130 | 443 | Will be deprecated 5 April 2020 |
| N/A | 52.206.58.244 | 443 | Deprecated 28 March 2018, not used in recent OPA versions |

{: .api-input :}

If your organization has strict outbound traffic rules, you will need to whitelist the OPA's access to the Workato cloud.

##### IP Addresses

Firewall whitelists should allow outbound TCP connections from the OPA to port 443 on each address listed above.

##### DNS resolution of host names

Some organizations also restrict DNS hostname resolution from the machines/networks where the OPA may run. In that case, you should ensure that the machine where OPA will be running can resolve the relevant hostnames above to their corresponding IP addresses.

#### General (browsers, webhooks, API endpoints)
All other traffic to Workato:

- Browser based user interaction and webhooks at `www.workato.com`
- API endpoint requests at `apim.workato.com`

may be served by a different set of IP addresses, distinct from IP addresses mentioned in the previous sections. This set may expand and contract based on overall platform utilization, so it is not completely static.
