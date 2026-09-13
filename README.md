# Dev Stack Builder

Dev Stack Builder is a responsive React website where users can explore different development technologies and build their own technology stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

## Features

1. Users can explore different development technologies.
2. Users can add and remove technologies from their stack.
3. The website works on mobile, tablet, and desktop devices.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to create and understand.

### 2. What is the difference between props and state?

Props pass data from a parent component to a child component. State stores data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

useState stores and updates data. I used it for selected technologies, loading state, and mobile menu state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after the component renders. I used it to load the technology data from the JSON file when the app starts.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item and update the correct item.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show an empty message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can call a function passed from the parent to send an action back.





## Common FAQ

### 1. Where can we deploy the site?

We can deploy the project on Vercel, Netlify, Cloudflare Pages, or any other hosting platform. I deployed this project on Vercel.

### 2. Do we have to use TypeScript?

No. We can use either TypeScript or JavaScript. I used TypeScript in this project.

### 3. Can we change the title, logo, and colors?

Yes. We can change the title, logo, and colors, but they should be relevant to the project.

### 4. Where do we get the technology logos/icons?

We can use technology icons from different online sources. Technology icon URLs can also be stored in the JSON data.
