 # Scrimba - Jake & Elwood marketing site

This a solution to the to [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive).
	
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#Screenshot)
    - [Desktop Screenshot](#Desktop-view)
    - [Mobile Screenshot](#Mobile-view)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- Use hamburger menu to access navigation bar on mobile view

### Screenshot

#### Desktop view
![Desktop-Screenshot](design/desktop_view.png)

#### Mobile view
![Mobile-Screenshot](design/mobile_view.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Matondo99/Jake-and-Elwood)
- Live Site URL: [Add live site URL here](https://matondo99.github.io/Jake-and-Elwood/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Flexbox
- CSS Grid
- Mobile-first workflow
### What I learned

I wrote my first script ever  🤪😎✊🏽:

```js
"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const openButton = $(".open-btn");
    const closeButton = $(".close-btn");
    const nav = $(".navi");
    openButton.addEventListener("click", () => {
        nav.classList.add("navi-opening");
    });
    closeButton.addEventListener("click", () => {
        nav.classList.remove("navi-opening");
    });
});
```

## Author

- Github - [@Matondo99](https://github.com/Matondo99)
