# TWATest

## Настройка ssl
#### openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./nginx/ssl/selfsigned.key -out ./nginx/ssl/selfsigned.crt -subj "/C=RU/ST=State/L=City/O=Organization/OU=Department/CN=${vps_ip}"

## Настройка сервера
#### Добавить https://ip в api/src/bot/bot.service.ts
#### Добавить в api/ файл .env с содержанием из .env.example