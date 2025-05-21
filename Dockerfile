FROM alpine AS builder
# install deps to get both fron and back and build front
RUN apk add --no-cache npm


COPY . /app/mission0

WORKDIR /app/mission0

RUN npm install
RUN npm run build

# Use an Nginx image for serving the built app
FROM nginx:alpine
WORKDIR /app/
# Copy the built files to the Nginx directory
COPY --from=builder /app/mission0/dist /usr/share/nginx/html
# Add a custom Nginx config to support client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf



# Expose the port
EXPOSE 80
# Start Container
CMD ["nginx", "-g", "daemon off;"]
