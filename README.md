 - docker-compose up -d
 - adjust IP in docker-compose.yml ("yves.de.spryker.local:192.168.86.141") 
 - docker compose run --rm -T k6 run -<scripts/script.js --tag testid=spryker.local --env DOMAIN=http://yves.de.spryker.local/en/new
 - ./docker-run.sh scripts/script.js

Grafana:
   - http://localhost:3000
   - admin:admin
   - add datasource: http://influxdb:8086 -> database k6
   - import dashboard: [10660_rev1.json](10660_rev1.json)

Notes:
 https://github.com/grafana/xk6-output-influxdb#docker-compose

Dashboards:
 https://grafana.com/grafana/dashboards/?search=k6+load




![2024-03-11_18-36.png](2024-03-11_18-36.png)

![2024-03-11_18-38.png](2024-03-11_18-38.png)
