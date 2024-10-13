---
layout: post
title:      "Installing Docker on Ubuntu Server"
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
description: "Hello World, Hello Docker"
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
    image: "https://www.wecode-inc.com/img/docker-banner.png" # image path/url
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


>## Introduction

Docker is a platform used to develop, ship, and run applications inside containers. Running an application inside a container makes it portable and consistent across multiple environments. In this tutorial, we'll guide you through the process of installing Docker on an Ubuntu server.

## Prerequisites

- An Ubuntu server (18.04 or 20.04)
- A user account with `sudo` privileges

## Step-by-Step Installation

### 1. Update Your System

First, ensure your package manager is updated:

<div class="code-wrapper">
    <div class="code-header">
        Update Command
        <div class="copy-code-btn">Copy Code</div>
    </div>
    <div class="highlight"><pre><code class="language-bash">sudo apt update</code></pre></div>
</div>

2. Install Required Packages
Docker requires additional packages to work with the apt package manager over HTTPS:

<div class="code-wrapper">
    <div class="code-header">
        Install Dependencies
        <div class="copy-code-btn">Copy Code</div>
    </div>
    <div class="highlight"><pre><code class="language-bash">sudo apt install apt-transport-https ca-certificates curl software-properties-common</code></pre></div>
</div>

3. Add Docker’s GPG Key
Fetch and add Docker's official GPG key:

<div class="code-wrapper">
    <div class="code-header">
        Add GPG Key
        <div class="copy-code-btn">Copy Code</div>
    </div>
    <div class="highlight"><pre><code class="language-bash">curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -</code></pre></div>
</div>

4. Add Docker Repository
Next, you need to add Docker's APT repository to your system:

<div class="code-wrapper">
    <div class="code-header">
        Add Repository
        <div class="copy-code-btn">Copy Code</div>
    </div>
    <div class="highlight"><pre><code class="language-bash">sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"</code></pre></div>
</div>

5. Install Docker
Now, you can install Docker:

<div class="code-wrapper">
    <div class="code-header">
        Install Docker
        <div class="copy-code-btn">Copy Code</div>
    </div>
    <div class="highlight"><pre><code class="language-bash">sudo apt update
sudo apt install docker-ce</code></pre></div>
</div>

6. Verify Docker Installation
To ensure Docker is installed and running:

<div class="code-wrapper">
    <div class="code-header">
        Check Docker Status
        <div class="copy-code-btn">Copy Code</div>
    </div>
    <div class="highlight"><pre><code class="language-bash">sudo systemctl status docker</code></pre></div>
</div>

You should see an output indicating that the Docker service is active and running.

Conclusion
Congratulations, you've successfully installed Docker on your Ubuntu server! You can now begin to containerize your applications and take advantage of the benefits Docker offers.

Remember to check the official Docker documentation for more detailed information and advanced configurations.