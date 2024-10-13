---
layout: post
title:      "Setting Up Portainer for Docker Management"
date:       2023-10-01
# weight: 1
# aliases: ["/first"]
tags: ["second"]
author: "Sven"
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
    image: "https://imgs.search.brave.com/ECwsXW-C19FFqMH1dfY3tVvcepqXKyChc9aHq7ew73E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL3BvcnRh/aW5lci9wb3J0YWlu/ZXIvcmF3L2RldmVs/b3AvYXBwL2Fzc2V0/cy9pbWFnZXMvcG9y/dGFpbmVyLWdpdGh1/Yi1iYW5uZXIucG5n/P3Jhdz10cnVl" # image path/url
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

In my exploration of managing Docker containers and deployments, one tool stood out due to its user-friendly interface and rich feature set: Portainer. This article walks you through setting up and getting started with Portainer.

<br/>

## Portainer: Simplifying Docker Management

**What is Portainer?**  
Portainer is an open-source management UI for Docker. It simplifies the process of managing containers, images, networks, and volumes via a web-based dashboard, making it invaluable for those who prefer a GUI over the command line.

<br/>

**Why Install Portainer?**  
- **Simplicity**: Offers a clear dashboard for container management.
- **Bulk Operations**: Execute actions like start, stop, or remove on multiple containers simultaneously.
- **Logs & Stats**: Directly view logs and metrics, aiding in troubleshooting.
- **User Management**: Secure your Docker environment by managing user access.

<br/>

### Setting Up Portainer:

1. **Prepare a directory on your host** to persist Portainer data. For this example, we'll use `/path/on/host`:

```python
mkdir -p /path/on/host
```

2. **Deploy the Portainer container using a bind mount**:

```python
docker run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /path/on/host:/data portainer/portainer-ce
```

3. **Access the Portainer UI**: Navigate to `http://<YOUR-IP-ADDRESS>:9443`.

4. **Set the Administrator Password**: On the first login, define a password for the `admin` account.

5. **Login with Admin Credentials**: Use the `admin` username and the password you just set.

6. **Choose the Docker Environment**: For our purposes, select "Local" to manage the Docker environment on the current machine.

<br/>

Having Portainer in your Docker toolkit streamlines the management process, making tasks easier and more efficient. Dive in and experience the difference!