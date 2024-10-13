---
layout: post
title: "Setting Up a Media Server: Sonarr, Radarr, Sabnzbd, and qBittorrent"
date: 2023-10-20
# weight: 1
# aliases: ["/first"]
tags: ["docker, media, docker-compose"]
author: "Me"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Media Automation"
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
    image: "https://techcrunch.com/wp-content/uploads/2022/08/plex-logo-full-color-on-black.png" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
#header_image: "/pictures/arr.jpg"
---

In my quest to create an efficient and streamlined media server, I delved deep into several tools that make the process seamless. Today, I'm introducing you to four cornerstone applications I use: Sonarr, Radarr, Sabnzbd, and qBittorrent. Let's jump in and see how they transformed my media management experience.

<br/>

## Sonarr: Automating TV Show Downloads

**What is Sonarr?**  
Sonarr is a TV series management tool which can track and automate your TV show downloads. It integrates seamlessly with various clients and services and ensures that your media library is always up to date.

<br/>

**Key Features of Sonarr:**  
   - **Automatic Searching**: Find new episodes as soon as they're released.
   - **Integration**: Works hand in hand with torrent and NZB downloaders.
   - **Library Organization**: Sort and rename episodes according to your preferences.

<br/>

### Setting Up Sonarr:

```python
version: '3'
services:
  sonarr:
    image: linuxserver/sonarr
```

## Radarr: Automating Movie Downloads

**What is Radarr?**  
Similar to Sonarr but for movies, Radarr can automatically search for movies available in your library or on your watchlist and fetch them as soon as they're available.

<br/>

**Key Features of Radarr:**  
   - **Intuitive UI**: Easily manage and organize your movie library.
   - **Flexibility**: Choose the quality, file size, and formats you prefer.
   - **Integration**: Seamless integration with download clients.

<br/>

### Setting Up Radarr:

```python
version: '3'
services:
  radarr:
    image: linuxserver/radarr
```

## Sabnzbd: Binary Newsreader

**What is Sabnzbd?**  
Sabnzbd is an Open Source Binary Newsreader, designed to download and process NZB files from Usenet.

<br/>

**Key Features of Sabnzbd:**  
   - **Web Interface**: Monitor and manage your downloads remotely.
   - **Performance**: Designed to consume minimal CPU and memory resources.
   - **Integration**: Works perfectly with applications like Sonarr and Radarr.

<br/>

### Setting Up Sabnzbd:

```python
version: '3'
services:
  sabnzbd:
    image: linuxserver/sabnzbd
```

## qBittorrent: Torrent Download Client

**What is qBittorrent?**  
qBittorrent is a versatile torrent client with a clean UI and a host of features, making torrent management a breeze.

<br/>

**Key Features of qBittorrent:**  
   - **No Ads**: A clean, ad-free experience.
   - **Advanced Controls**: Comprehensive settings and controls for advanced users.
   - **Remote Control**: A built-in web interface for remote access.

<br/>

### Setting Up qBittorrent:

```python
version: '3'
services:
  qbittorrent:
    image: linuxserver/qbittorrent
```


Together, Sonarr, Radarr, Sabnzbd, and qBittorrent have revolutionized my media server setup. Each tool has its unique strengths, and in combination, they provide a media management ecosystem that is hard to beat. If you're passionate about building an efficient media server, I can't recommend these tools enough!