# Frontend Mentor - Base Apparel Coming Soon Page Solution

This is my solution to the Base Apparel coming soon page challenge on Frontend Mentor. This project allowed me to practice and enhance my coding skills by working on a realistic project.

## Table of Contents
- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- See hover states for interactive elements.
- Receive an error message if they submit an invalid email address.

### Screenshot

![Base Apparel Coming Soon Page Screenshot](./images/Screenshot%202024-08-30%20131736.png) 
![Base Apparel Coming Soon Page Screenshot](./images/Screenshot%202024-08-30%20131852.png) 

## Links

- [Solution URL](https://github.com/jiehlarae/Base-Apparel-coming-soon-page.git)
- [Live Site URL]() 

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript for form validation

### What I Learned

Working on this project helped me to refine several key concepts. Here's a snippet of code that I’m particularly proud of:

```javascript
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value.trim() !== '' && input.value.match(emailPattern)) {
        errorMessage.textContent = ' ';
        input.classList.remove('icon')
    } else {
        errorMessage.textContent = 'Please provide a valid email';
        input.classList.add('icon')
    }
});
```

This JavaScript code handles the form validation, ensuring that users cannot submit the form without a valid email address. I also enjoyed working on the responsive design using Flexbox to adapt the layout for different screen sizes.

### Continued Development

Moving forward, I plan to focus on enhancing my proficiency with JavaScript, particularly in form validation and error handling. I also aim to deepen my understanding of CSS Grid for more complex layouts.

## Author

- Github: [@jiehlarae](https://github.com/jiehlarae)
- Frontend Mentor: [@jiehlarae](https://www.frontendmentor.io/profile/jiehlarae)
- X (Twitter): [@JiehlaDacara](https://twitter.com/JiehlaDacara)