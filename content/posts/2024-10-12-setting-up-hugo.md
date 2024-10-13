---
layout: post
title: "Setting Up a Hugo Blog with the PaperMod Theme: A Step-by-Step Guide"
date: 2024-10-12
tags: ["hugo", "papermod", "tutorial"]
author: "Me"
showToc: true
TocOpen: false
draft: false
description: "A comprehensive guide to setting up a Hugo blog with the PaperMod theme, including adding high-quality images and ensuring uniform thumbnail sizes."
cover:
    image: "https://imgs.search.brave.com/Q4gCZudhJWuZC9is0VGO_F7smZ7VciilJ3FZogOi2I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odWdv/ZG9pdC5wYWdlcy5k/ZXYvdGhlbWUtZG9j/dW1lbnRhdGlvbi1i/dWlsdC1pbi1zaG9y/dGNvZGVzL2ZlYXR1/cmVkLWltYWdlLndl/YnA" # Replace with your banner image URL
    alt: "Hugo Blog Setup Banner" # Alt text for the banner image
    caption: "Setting Up a Hugo Blog with the PaperMod Theme" # Caption for the banner image
    relative: false
    hidden: false
---

# Setting Up a Hugo Blog with the PaperMod Theme: A Step-by-Step Guide

## Introduction

In this tutorial, we'll walk you through setting up a Hugo blog using the PaperMod theme. We'll cover everything from installing Hugo and the theme to customizing your site with high-quality images and ensuring uniform thumbnail sizes for a polished look.

## Prerequisites

Before we begin, make sure you have the following installed on your system:
- [Hugo](https://gohugo.io/getting-started/installing/)
- [Git](https://git-scm.com/)

## Step 1: Create a New Hugo Site

First, create a new Hugo site by running the following command in your terminal:

```sh
hugo new site my-blog
```
Navigate to the newly created directory:

```sh
cd my-blog
```

## Step 2: Install the PaperMod Theme

Clone the PaperMod theme into the themes directory:

```sh
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

Copy the example site configuration to your site’s root directory:

```sh
cp -r themes/PaperMod/exampleSite/* .
```

## Step 3: Configure the Theme

Open the config.toml file and set the theme to PaperMod:

```sh
theme = "PaperMod"
```

Customize the configuration as needed, such as setting your site title, base URL, and other settings.

## Step 4: Add a Blog Post

Create a new blog post using the following command:

```sh
hugo new posts/setting-up-traefik-in-portainer.md
```

Open the newly created file in your editor and add your content. Here’s an example front matter and content:

```sh
---
layout: post
title: "Setting Up Traefik in Portainer: A Step-by-Step Guide"
date: 2023-10-04
tags: ["traefik", "portainer", "docker"]
author: "Me"
showToc: true
TocOpen: false
draft: false
description: "An Idiot's Reverse-Proxy"
cover:
    image: "https://blog.mushdragon.com/content/images/2021/08/traefik-logo.jpg"
    alt: "Traefik Logo"
    caption: "Setting Up Traefik in Portainer"
    relative: false
    hidden: false
---

In my quest for an efficient containerized environment, I came across Traefik, a dynamic reverse proxy built for the modern era. Configuring Traefik in Docker using Portainer streamlines the process and provides a robust interface to manage and monitor the service. Let's delve into the setup process.

## Traefik: The Cloud Native Edge Router

**What is Traefik?**  
Traefik is a dynamic reverse proxy, often used in container environments to route traffic to different services based on request information. It handles tasks like SSL certificate generation and integrates seamlessly with Docker, making it an excellent choice for modern container setups.
```

## Step 5: Add High-Quality Images

to make your blogpost more visually appealing, add high-quality images. Ensure each post has a cover image and a thumbnail for the pagination list.

### Example Cover Image

Add the following to the front matter of yuour blog post:

```sh
cover:
    image: "https://blog.mushdragon.com/content/images/2021/08/traefik-logo.jpg"
    alt: "Traefik Logo"
    caption: "Setting Up Traefik in Portainer"
    relative: false
    hidden: false
```

## Step 6: Ensure Uniform Thumbnail Sizes

To ensure that all thumbnails in your pagination section are uniform in size, add the following CSS to your theme's CSS file

### Locate the CSS File

In the PaperMod Theme, the CSS file is tyupically located in the assets or static directory, for example assets/css/style.css

### Add the CSS File

Open the CSS file and add the following rules:

```sh
.thumbnail {
    width: 200px; /* Set the desired width */
    height: 150px; /* Set the desired height */
    object-fit: cover; /* Ensures the image covers the entire area */
    border-radius: 8px; /* Optional: Adds rounded corners */
    margin-bottom: 10px; /* Optional: Adds space below the image */
}
```

### Update the Template

Ensure the HTML template for the pagination section includes the thumbnail class for the images. Update the list.html template in your Hugo theme:

```sh
{{ range .Paginator.Pages }}
<article>
    <a href="{{ .Permalink }}">
        <img src="{{ .Params.cover.image }}" alt="{{ .Params.cover.alt }}" class="thumbnail">
        <h2>{{ .Title }}</h2>
    </a>
    <p>{{ .Summary }}</p>
</article>
{{ end }}
```
## Step 7: Build and Serve your Site

Finally, build ansd serve your site locally to see the changes:

```sh
hugo server
```

Open your prowser and navigate to http://localhost:1313 to view your site.

## Conclusion

By following these steps, you've set up a Hugo blog with the PaperMod theme, added high-wuality images, and ensured uniform thumbnail sizes for a polished look. Happy blogging.