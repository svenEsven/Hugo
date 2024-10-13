---
layout: post
title:      "Everything about Setting Up My Ubuntu Desktop"
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
description: "Everything about setting up my own ubuntu desktop, it's just a Note in case I need it later"
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
    image: "https://33hops.com/img/ubuntu-banner.png" # image path/url
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


## Generate SSH Key Pair

```
ssh-keygen -C "zhaohuabing@gmail.com"
```

## Shadowsocks

Install shadowsokcs    

```
sudo apt-get install python3-pip

sudo pip3 install shadowsocks
```

Create config at ```config/shadowsocks.json```, with the following content:    

```
{
	"server":"remote-shadowsocks-server-ip-addr",
	"server_port":443,
	"local_address":"127.0.0.1",
	"local_port":1080,
	"password":"your-passwd",
	"timeout":300,
	"method":"aes-256-cfb",
	"fast_open":false,
	"workers":1
}
```

Start a local socks proxy 

```
sudo sslocal -c config/shadowsocks.json -d start
```

In case there is an openssl error, modify shadowsocks source file.

```
sudo vi /usr/local/lib/python3.6/dist-packages/shadowsocks/crypto/openssl.py 

:%s/cleanup/reset/gc
```

Convert shadowsocks socks proxy to http proxy

```
sudo apt-get install polipo

echo "socksParentProxy = localhost:1080" | sudo tee -a /etc/polipo/config 
sudo service polipo restart
```

Http proxy now is available at port 8123

# Set bing wallpaper as desktop background

```
sudo add-apt-repository ppa:whizzzkid/bingwallpaper
sudo apt-get update
sudo apt-get install bingwallpaper
```

# Use vim mode in bash

```
echo 'set -o vi'>> ~/.bashrc
```
