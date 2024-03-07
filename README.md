 - docker-compose up -d
 - adjust IP in docker-compose.yml ("yves.de.spryker.local:192.168.86.141") 
 - docker compose run --rm -T k6 run -<scripts/script.js --tag testid=spryker.local --env DOMAIN=http://yves.de.spryker.local/en/new
 - adjust grafana -> add datasource ->  http://influxdb:8086 -> database k6
 - adjust grafana -> import dashboard -> grafana_dashboard.json





Notes:
 https://github.com/grafana/xk6-output-influxdb#docker-compose
