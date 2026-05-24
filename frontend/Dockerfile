FROM nginx:alpine

# Копируем наш index.html в дефолтную папку nginx, откуда он раздает статику
COPY index.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]