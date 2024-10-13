---
layout: post
title:      "Installing Proxmox 8"
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
description: "Hello World, Hello Blog"
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
    image: "https://forum.proxmox.com/styles/uix/images/Proxmox-logo-500px.png" # image path/url
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

Proxmox Virtual Environment (PVE) is an open-source server virtualization management solution. Here's a step-by-step guide to installing Proxmox 8:

## Step-by-Step Guide to Installing Proxmox 8

1. **Download the Proxmox VE ISO**
   - Head over to the [official Proxmox website](https://www.proxmox.com/en/downloads) and download the Proxmox VE ISO image suitable for your system.

2. **Prepare a Bootable USB or DVD**: Use software like Etcher or Rufus to create a bootable medium from the downloaded ISO file.

3. **Boot from the Installation Medium**: Insert the USB or DVD into the server where you intend to install Proxmox and boot from it.

4. **Start the Proxmox Installation Wizard**: Once booted, you'll be greeted with the Proxmox installation wizard. Accept the terms and conditions to proceed.

5. **Choose the Installation Disk**: Select the target hard drive on which Proxmox VE will be installed.

6. **Configure Regional Settings**: Enter details like country, time zone, and keyboard layout.

7. **Set Administrative Password**: Provide a strong password for the 'root' administrative account. This will be used to access the Proxmox web interface.

8. **Network Configuration**: Input the IP address, netmask, gateway, and DNS server information. Assigning a static IP to your Proxmox server is recommended.

9. **Installation**: The installer will now set up Proxmox. This step might take several minutes.

10. **Reboot**: After installation, eject the installation medium and reboot your server.

11. **Access the Proxmox Web Interface**: On a different machine, open a web browser and navigate to `https://YOUR_SERVER_IP:8006`. Replace `YOUR_SERVER_IP` with the IP address you assigned to your Proxmox server.

12. **Initial Configuration**: The first time you log in, you might be asked about a Proxmox subscription. You can use Proxmox without a subscription, but certain enterprise features may be unavailable.

13. **Start Creating VMs and Containers**: With Proxmox installed and set up, you're now ready to dive into creating virtual machines and containers!

Remember to always back up your configurations and regularly check Proxmox's official documentation for additional details and troubleshooting tips.

Happy virtualizing!
