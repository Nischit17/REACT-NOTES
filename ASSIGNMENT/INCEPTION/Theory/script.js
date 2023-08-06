/*

1) What is Emmet ?
=> Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.
---------------------------------------------------------
2) Difference between a Library and Framework?
=> 

1. Library:

- A library is a collection of pre-written functions, classes, and procedures that developers can use to perform specific tasks or operations within their applications.

- It typically focuses on providing specific functionality, such as data manipulation, file handling, networking, or mathematical computations.

- Libraries are designed to be used as needed, allowing developers to selectively include and utilize the components that suit their requirements.

- Libraries do not impose any specific structure or flow on your application, leaving developers with greater flexibility and control over their code.

2. Framework:

- A framework, on the other hand, is a more comprehensive and organized set of tools, classes, and rules that provide a foundation for building applications.

- It dictates the overall structure and architecture of an application and enforces a specific design pattern, such as Model-View-Controller (MVC) or Model-View-ViewModel (MVVM).

- Frameworks are more opinionated and require developers to follow their established patterns and conventions.

- Unlike libraries, where you call the library's functions, a framework typically calls your code. It provides a "skeleton" where developers fill in the specific details and custom logic to create the application.

SUMMARY:- 

A library provides specific functionality that developers can use as-needed within their application, while a framework provides a comprehensive structure and architecture for the application and often dictates how the application should be designed and implemented. The choice between using a library or a framework depends on the specific requirements and preferences of the development project.
---------------------------------------------------------
3) What is CDN? Why do we use it?
=> 
CDN stands for Content Delivery Network. A CDN is a network of distributed servers located in different geographic locations around the world. Its main purpose is to deliver web content, including JavaScript, CSS, images, and other assets, to users more efficiently and reliably.
        When you use a CDN in React, it means you are loading React and its related libraries (like ReactDOM) from a server that is geographically closer to the user's location. 

This has several benefits:

- Faster Loading Times: Since the content is served from a server closer to the user, the time it takes to download the React framework and other assets is reduced, leading to faster page load times. This is especially important for users who may be far away from your website's hosting server.

- Improved Performance: React applications can be quite large, especially when they include additional libraries and dependencies. CDN caching can help reduce the load on your hosting server by serving cached versions of commonly requested files, improving the overall performance of your application.

- High Availability and Reliability: CDNs distribute content across multiple servers, which helps ensure that your React app remains available even if one of the servers experiences downtime or high traffic. It improves the reliability and resilience of your application.

- Bandwidth Savings: CDNs can also help you save on bandwidth costs for your hosting server because a significant portion of your assets will be served from the CDN's servers instead.
---------------------------------------------------------
4) Why is React known as React?
=> 
React, also known as React.js or ReactJS, is a popular JavaScript library for building user interfaces, particularly for web applications. The name "React" comes from the core idea and principle behind the library, which is to provide a reactive and declarative approach to building UI components.

  The term "React" refers to the reactive nature of the library, where the user interface reacts to changes in the underlying data and automatically updates to reflect those changes. Instead of manually manipulating the DOM (Document Object Model) to update the UI, React allows developers to define how the UI should look based on the application's current state, and it efficiently handles updates to ensure the UI remains in sync with the data.

React was developed by Jordan Walke, a software engineer at Facebook, and it was first deployed on Facebook's News Feed in 2011. It was later open-sourced in 2013. The library's name "React" was chosen to reflect its core philosophy of reacting to changes in data and re-rendering components as needed.

    The name "React" also emphasizes the declarative nature of the library. Developers can describe what the UI should look like at any given time based on the state of the application, and React takes care of efficiently updating the actual DOM to match that description. This declarative approach has been a key factor in React's popularity and ease of use.
---------------------------------------------------------
5) What is crossorigin in script tag?
=>
The crossorigin attribute is used in the <script> tag to specify how the browser should handle fetching and executing an external script. It is particularly relevant when loading scripts from a different domain than the one hosting the HTML page.

The crossorigin attribute can take one of the following values:

- "anonymous": This is the default value if the attribute is present but no value is specified. It means that the script is fetched and executed without sending any credentials, such as cookies, along with the request. It is suitable for scripts that do not require any specific access to user data on the hosting page.

- "use-credentials": This value indicates that the script requires credentials to be included with the request. It is used when the script needs access to user-specific information (e.g., cookies or HTTP authentication) from the server where it is hosted.

The crossorigin attribute is mainly used for security purposes and is particularly relevant in the context of Cross-Origin Resource Sharing (CORS). CORS is a security feature implemented by web browsers to prevent scripts from making requests to domains that are different from the one serving the page, to mitigate potential security risks.

By specifying the crossorigin attribute appropriately, website developers can control how scripts from different origins are treated, thus enhancing the overall security of their web pages.
---------------------------------------------------------
6) What is diference between React and ReactDOM?
=>

1. React:
React is a JavaScript library for building user interfaces. It is the core of the React framework and provides the foundation for creating reusable UI components. React allows developers to build UI components that efficiently update and render in response to changes in the application state.

KEY FEATURES OF REACT:
**Component-based architercture
**Virtual DOM
**Unidirectional data flow

2. ReactDOM:
ReactDOM is a specific package in the React ecosystem responsible for rendering React components to the actual DOM. It acts as a bridge between React and the browser's DOM. When you want to render a React component onto the web page, you use ReactDOM to do so.

KEY FEATURES OF REACTDOM:
**Rendering components
**Updating the DOM

SUMMARY:- 
React is the core library for building user interfaces in a component-based manner, while ReactDOM is a specific package that handles rendering React components to the browser's DOM. The combination of these two allows developers to build interactive and dynamic user interfaces efficiently.
---------------------------------------------------------
7) What is difference between react.development.js and react.production.js files via CDN?
=>

1. react.development.js:

-This file is intended for development purposes.

-It includes additional error checking, warnings, and helpful development tools to aid in identifying and fixing issues during the development process.

-The file is larger in size compared to react.production.js due to the presence of these development-related features.

2. react.production.js:

-This file is optimized for production use.

-It removes the development-specific features, error checking, and warning messages to reduce the file size and improve the performance of your React application in a production environment.

-The removal of these development tools helps to improve the runtime efficiency of the application.

When you are developing your React application, it is recommended to use react.development.js as it provides better error messages and warnings, which can be helpful in identifying and fixing issues during development.

when deploying your application to production or a live environment, you should switch to using react.production.js to optimize performance and reduce the file size.
---------------------------------------------------------
8) What is async and defer?
=>
async and defer are attributes used with the <script> element in HTML to control how external scripts are loaded and executed on a web page. These attributes are particularly useful when you want to optimize the loading and execution of scripts to improve page performance and user experience.

1. async:
The async attribute tells the browser to load the script asynchronously, meaning that it will continue parsing the HTML and rendering the page without waiting for the script to be fully loaded and executed. Once the script is downloaded, it will execute as soon as possible, potentially interrupting the HTML parsing and rendering process. This is beneficial for scripts that don't rely on the order of execution or don't need to interact with the page's content immediately.

2. defer:
The defer attribute also tells the browser to load the script asynchronously, but with one key difference. Unlike async, a script with the defer attribute will be executed after the entire HTML document has been parsed. This ensures that the script execution does not interfere with the rendering of the page. It is useful when the script depends on the DOM (Document Object Model) being fully available before executing.

Key differences between async and defer:

-async: The script will be downloaded asynchronously, and once it's available, it will be executed as soon as possible, potentially interrupting the rendering process. It does not guarantee the order of execution, and the script may execute before other scripts or resources on the page have loaded.

-defer: The script will be downloaded asynchronously, but it will only be executed after the entire HTML document has been parsed. It preserves the order of execution and ensures that the script execution does not interfere with the rendering of the page.

*/
