# Difference between useContext and Redux?

- useContext is the inbuilt function provided by React to access the React Context API. Redux is a centralized store which is an external library which can be integrated in the React app. React Context is used for centralizing various values which need to be accessed by multiple components and store the same in the context. Redux is the centralized store in which all the values are stored and the components can access the values by using selector and change the value using reducer function.
- useContext is used in React apps which doesn’t not have too much complex data management and the data access and modification is not much frequent between components. So for smaller applications, useContext is the ideal choice.
- Redux is preferred for large applications where data is being accessed by many components and the data modification is very frequent. For larger application, Redux is preferred for data management.

# Advantages of using Redux Toolkit over Redux?

- Redux Toolkit has many advantages over Redux. It is easier to write code in Redux Toolkit compared to vanilla Redux (old Redux).
  The advantages of using Redux Toolkit over Redux are as follows:

- It is easier to set up and requires fewer dependencies.
- Reduces boilerplate code by allowing the creation of a single file known as "slice" that combines actions and reducers.
- Provides sensible defaults for commonly used features, such as Redux Thunk and Redux DevTools. This means that you don't have to spend time configuring these features yourself, as they are already built into Redux Toolkit.
- It uses the immer library under the hood, which enables direct state mutation and eliminates the need for manually copying the state {...state} with every reducer.

# What is Dispatcher?

- dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change. In Redux, a dispatcher is not a built-in concept like actions or reducers. Instead, it's a function provided by the Redux store that you use to dispatch actions to trigger state updates. You use the `dispatch` function to send an action to the store, which then processes the action and updates the state accordingly. Redux Toolkit, a library that simplifies Redux usage, also utilizes this concept. We dispatch the action using the `dispatch` function provided by the Redux store.

```
import { useDispatch } from 'react-redux';
 import { increment } from './action'; // Import the action
 function MyComponent() {
 const dispatch = useDispatch(); // Get the dispatch function
 const handleIncrement = () => {
 dispatch(increment()); // Dispatch the action
 };
 return (
 <div>
 <button onClick={handleIncrement}>Increment</button>
 </div>
 );
 }
```

- The dispatcher, in this case, is the `dispatch` function you use in your components to send actions to the Redux store, which then triggers the
  corresponding reducer to update the state.

# What is Reducer?

- Reducer is a JavaScript function that specifies how an application's state should change in response to dispatched actions.
- It takes the current state and an action as input and returns a new state based on that action.
- Reducers ensure a predictable and immutable way to manage state changes.

- Redux (Plain Redux):
- Reducers are typically created using a `switch` statement and handle action types to update the state.
- You manually write code to create a new state object with updated values.
- Reducers in plain Redux can be verbose and require more boilerplate code.

- Redux Toolkit:
- Redux Toolkit simplifies reducer creation by providing utility functions like `createSlice` or `createReducer`.
- These utility functions handle state updates in an immutable way, reducing the need for manual state copying.
- Redux Toolkit also generates action creators automatically, reducing boilerplate.

```
Example (Redux Toolkit):
import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
 name: 'counter',
 initialState: {
 count: 0
 },
 reducers: {
 increment: (state) => {
 state.count += 1;
 },
 decrement: (state) => {
 state.count -= 1;
 }
 }
});
export const { increment, decrement } =
counterSlice.actions;
export default counterSlice.reducer;
```

- In short, reducers define how state changes in response to actions. Redux Toolkit simplifies reducer creation, making it more concise and efficient compared to plain Redux.

# What is Slice?

- In Redux Toolkit, a slice is a predefined and structured configuration for managing a portion of your application's state and the associated actions. It simplifies the process of creating reducers, action creators, and initial state by providing a more concise and standardized way to define them.

-Here's a short explanation of what a slice is in Redux Toolkit:

- A slice includes:
- The initial state for a specific part of your application's state.
- Reducer functions that define how the state should change in response to actions.
- Automatically generated action creators that correspond to those reducers.

- Advantages:
- It reduces the boilerplate code typically associated with setting up actions and reducers in Redux.
- Slices help keep related state and logic organized.
- They make it easier to follow the Redux pattern and maintain a predictable state.

```
Example (Counter slice):
 import { createSlice } from '@reduxjs/toolkit';
 const counterSlice = createSlice({
 name: 'counter',
 initialState: {
 count: 0,
 },
 reducers: {
 increment: (state) => {
 state.count += 1;
 },
 decrement: (state) => {
 state.count -= 1;
 },
 },
 });
 export const { increment, decrement } = counterSlice.actions;
 export default counterSlice.reducer;
```

- A slice in Redux Toolkit is a predefined configuration for managing a specific part of your application's state, providing a simpler and more organized way to define reducers, action creators, and initial state.

# What is Selector?

- Selector is a hook through which we can subscribe to a specific part of the Redux store. It is used to access the part of the Redux store. Whenever the value changes in the portion which we have subscribed to, the component automatically rerenders to get the latest value of the value. It is a function that allows you to extract specific pieces of data from the Redux store's state. Selectors provide a clean and efficient way to access and compute derived data from the state without having to know its structure.

- Selectors are used to read data from the Redux store's state, perform transformations or computations on that data, and return the result.

# Explain the createSlice and the configuration it takes.

- `createSlice` is a function provided by Redux Toolkit that simplifies the process of creating Redux slices, which include reducers, action creators, and initial state. It takes a configuration object with the following properties:

- name (string): A required string that provides a name for your slice. This name will be used to generate action types and can help with debugging.
  initialState (any): The initial state for your slice. This is the starting point for your state management.

- reducers (object): An object containing reducer functions. Each property represents a specific action that can be dispatched, and the associated value is the reducer function responsible for updating the state in response to that action.

- slice.actions: An object containing automatically generated action creators. These action creators correspond to the reducers defined in the `reducers` object.

- slice.reducer: The combined reducer function that manages the state for your slice. You can export and use this reducer directly when creating your Redux store.

- extraReducers (object, optional): An object containing additional reducer functions that can handle actions dispatched by other slices. This is often used for handling actions from async operations or other slices.

- slice.caseReducers (object, optional): An alternative way to define reducers within the `createSlice` function. This is provided for advanced use cases and is typically not needed for most applications.

```
Example:
import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
 name: 'counter', // Slice name
 initialState: { count: 0 }, // Initial state
 reducers: {
 increment: (state) => {
 state.count += 1;
 },
 decrement: (state) => {
 state.count -= 1;
 },
 }, // Reducer functions
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

- In this example, createSlice configures a slice named 'counter' with initial state and reducer functions for increment and decrement actions. The slice.actions object contains action creators, and slice.reducer is the combined reducer for the slice.
