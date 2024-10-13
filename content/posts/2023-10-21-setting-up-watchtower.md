---
#layout: post
title: "Setting Up Watchtower"
date: 2023-10-21
# weight: 1
# aliases: ["/first"]
tags: [" first"]
author: "Me"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Automated Docker Updates"
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
    image: "https://t3.ftcdn.net/jpg/04/40/38/22/360_F_440382228_m2Bo6YOqk4cHXqXGEAt6EGsURdk3pCMR.jpg" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: true # when using page bundles set this to true
#    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
#header_image: "/pictures/Watchtower.png"
---

Keeping Docker containers updated can be a repetitive task. Enter Watchtower—a tool designed to automate this process. This article details the steps to deploy and configure Watchtower.

<br/>

## Watchtower: Seamless Docker Container Updates

**What is Watchtower?**  
Watchtower auto-updates running Docker containers when new images are available, pulling new versions and restarting the necessary containers.

<br/>

**Why Install Watchtower?**  
- **Automation**: Say goodbye to the manual process of updating containers.
- **Peace of Mind**: Rest assured that you're always running the latest security patches and software releases.
- **Easy Rollbacks**: Revert to a previous image if an update introduces issues.

<br/>

### Setting Up Watchtower:

1. **Run the Watchtower container**:

   <div class="code-wrapper">
    <div class="code-header">Command</div>
    <div class="highlight"><pre><code class="language-bash">docker run -d --name watchtower --restart=always -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower</code></pre></div>
   </div>

2. **Adjusting Watchtower's Update Interval**: By default, Watchtower checks for updates every 5 minutes. To modify this interval:

   <div class="code-wrapper">
    <div class="code-header">Command</div>
    <div class="highlight"><pre><code class="language-bash">docker run -d --name watchtower --restart=always -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --interval 43200</code></pre></div>
   </div>

   This example sets the interval to 12 hours. Adjust the `43200
