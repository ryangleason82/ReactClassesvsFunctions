# React Classes vs Functions

Below are some of the key takeaways I found throughout the duration of the course 'Modern React with Redux' as it relates to functional components vs class based.

## Benefits of Class Components

- Easier code organization
- Can use 'state'
  - Easier to handle user input
- Understands lifecycle events
  - Easier to do things when the app first starts

### Rules of Classes

- Must be a javascript claass
- Must extend (subclass) React.Component
- Must define a 'render' method that returns some amount of JSX

### Rules of State in React

- Only usable with class components (hooks for functional comps)
- 'State' is a JS object that contains data relevant to a component
- Updating 'state on a component causes the component to (almost) instantly rerender
- State must be initialized when a component is created
- State can only be updated using the funciton 'setState'
