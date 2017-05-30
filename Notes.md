# SECTION 1
### Lecture 12:
 Youtube web app: 5 components
  1. App: overall component
  2. Search
  3. Video Detail: video player, description, title
  4. Video List
  5. Video List Item (in Video List)

### Lecture 13:
Using youtube API to fetch data and show real youtube video to users

- Step 1: Register Youtube API key at https://console.developers.google.com
- Step 2: install npm package to simplify youtube searching

### Lecture 14: Export Statement
- add component to search_bar.js (SearchBar now is a functional component)

### Lecture 15: Class-based component
- convert SearchBar from functional component into class-based component

### Lecture 16: handle user event
- declare event of onInputChange of SearchBar component //event describes the context or information about the event that occured, technically
- using arrow function for shortening code

### Lecture 17: State
- State is a plain javascript object that is used to record and react to user events
- Each class-based component that is defined has its own state
- Need initialize state before using it
>remember: functional component does not have state, only class-based component does

- constructor(): is the first and only function of each class that is call automatically when a new instance of the class is created

### Lecture 18: More on State
- Update state of component by using this.setState({})

### Lecture 19: Controlled Component
- A controlled component has its value is set by state
```
<input value={this.state.term} />
```


#SECTION 2
### Lecture 21 - Youtube search response
- index.js: import YTSearch from youtube-api-search

### Lecture 23 - Props
