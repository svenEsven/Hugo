---
layout: post
title: "Setting Up Traefik in Portainer: A Step-by-Step Guide"
date: 2023-10-04
# weight: 1
# aliases: ["/first"]
tags: ["second"]
author: "Me"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "An Idiot's Reverse-Proxy"
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "https://blog.mushdragon.com/content/images/2021/08/traefik-logo.jpg" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
#header_image: "/pictures/traefik.jpg"
---

In my quest for an efficient containerized environment, I came across Traefik, a dynamic reverse proxy built for the modern era. Configuring Traefik in Docker using Portainer streamlines the process and provides a robust interface to manage and monitor the service. Let's delve into the setup process.

<br/>

## Traefik: The Cloud Native Edge Router

**What is Traefik?**  
Traefik is a dynamic reverse proxy, often used in container environments to route traffic to different services based on request information. It handles tasks like SSL certificate generation and integrates seamlessly with Docker, making it an excellent choice for modern container setups.

<br/>

**Why Use Traefik with Docker?**  
   - **Dynamic Configuration**: It automatically detects changes in your Docker environment.
   - **Let's Encrypt Integration**: Traefik handles SSL/TLS certificate generation and renewal for your domains.
   - **Simplicity**: With Docker, setting up Traefik is a breeze. Especially when managed with a tool like Portainer.
   - **Powerful Dashboard**: Monitor your routing configurations, active connections, and more.

<br/>

### Setting Up Traefik in Portainer using Docker Compose: 

1. **Prepare Your Environment**:
   - Ensure you have Portainer up and running.
   - Make sure you own a domain and have access to modify its DNS settings.
   
2. **Create a Docker Compose file**:
   Create a new `docker-compose.yml` file for Traefik with the following content:

   <div class="code-wrapper">
    <div class="code-header">docker-compose.yml</div>
    <div class="highlight"><pre><code class="language-yaml">
version: '3'

services:
  traefik:
    image: "traefik:v2.3"
    ports:
      - "80:80"
      - "443:443"
      - "8080:8080"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    labels:
      ...
    </code></pre></div>
   </div>

3. **Upload and Deploy via Portainer**:
   - Navigate to your Portainer instance.
   - Create a new stack, copy-paste the content of the `docker-compose.yml`, and deploy.

4. **Access the Traefik Dashboard**: Navigate to `http://<YOUR-IP-ADDRESS>:8080`.

<br/>

### Handling HTTPS with Traefik:

To enable HTTPS, you'll want to expand the Traefik configuration to include Let's Encrypt integration. This can be a topic on its own due to its intricacies, but Traefik's documentation is an excellent resource for diving deeper.

<br/>

Traefik has proven to be an invaluable tool in my containerized setups. With Portainer's interface, managing and monitoring Traefik becomes a seamless experience. If you're looking to optimize your Docker environment, integrating Traefik is a must!
