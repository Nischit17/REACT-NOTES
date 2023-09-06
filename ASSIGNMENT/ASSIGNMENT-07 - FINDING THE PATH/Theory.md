# What are various ways to add images into our App? Explain with code examples.

- There are two ways to add images in React app. Either we can use CDN links and provide different IDs or we can directly use links to render images.

- First Way :- Is to store the CDN Url and then provide different Ids in the img tag to render the image.

```
import { CDN_URL } from "../utils/consts";
 <img
 alt="restaurant Logo"
 src={CDN_URL + cloudinaryImageId}
 className="res-logo"
 />
```

- Second Way :- Is to directly import images which are stored in our local project.

```
import { Logo } from "../utils/img/Logo.png";
 <img
 alt="restaurant Logo"
 src={Logo}
 className="res-logo"
 />
```

# What would happen if we do `console.log(useState())`?

- When we do console.log(useState()), if gives us an array with two elements where first element will be undefined as we haven’t provided any default value. The second element of the array is the function for changing the value of state variable.

# How will useEffect behave if we don’t add a dependency array?

- If we don’t provide a dependency array in useEffect then it will execute the callback function on every rerender.

# What is SPA?

- SPA is called Single Page Application. SPA is a web application which renders different components based on the URL. When we change the URL, only the component which is rendered is changed and the browser does not refresh the page when the URL is changed unline traditional websites.

# What is difference between Client Side Routing and Server Side Routing?

- Server Side Rendering: When the request is made, the server fetches the webpage which is supposed to be rendered for the particular URL and it replaces the newer fetched webpage with older one.

- Client Side Rendering: For client side rendering, minimal code is sent from the request and the code is expanded to render different components based on the URL. All single page applications are mostly client side rendering. In Client side rendering the router library navigates the user to new page without sending a request to the backend.
