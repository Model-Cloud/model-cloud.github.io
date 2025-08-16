FROM nginx:alpine

# Copy static site
COPY public/ /usr/share/nginx/html/

# If MkDocs docs are built, serve them under /docs
COPY docs/ /usr/share/nginx/html/docs/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

