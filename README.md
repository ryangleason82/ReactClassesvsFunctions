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

### Component Lifecycle Methods

- Over time this is the progression of lifecycle methods.. there are more but these are the main ones
  - constructor
    - Good place to do one-time setup
    - Best practices say to do data-loading elsewhere
  - render
    - Avoid doing anything besides returning JSX
  - componentDidMount (content visible on screen)
    - Good place to do data-loading
  - componentDidUpdate (Sit and wait for updates...)
    - Good place to do more data loading when state/props change
  - componentWillUnmount (Sit and wait until this component is no longer shown)
    - Good place to do cleanup (especially for non-React stuff)
