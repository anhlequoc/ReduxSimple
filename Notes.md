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

### Lecture 23, 24
- Using Props
- implement VideoList, VideoListItem component,
```javascript
//using array.map to list item
array.map((element) => {return element * 2;});
```

### Lecture 25, 26
```javascript
//dung cach khac de khai bao props
  const VideoListItem = ( {video} ) => {
    // const video = props.video; //access vao tung video data cua prop truyen tu VideoList
    // theo cach ES6: (props) => ( {video} ), tuong duong voi video -> can tim hieu
    console.log(video);
    const imageURL = video.snippet.thumbnails.default.url; //response from youtube

    return (
      <li className="list-group-item">Video List Item</li>
    );
  }

  export default VideoListItem;
```

### Lecture 28 - Handle null prop
- Khi mo app, react da bat dau render, do chua kip tra ve video tu search nen o video_detail.js, video.id se bi null -> de tranh bao loi, add cau lenh xu ly null o video_detail.js
```javascript
  if (!video) {
    return <div>Loading....</div>
  }
```

### Lecture 29 - Add Video Selector
Solution:
  - O index.js, add them state selectedVideo: null vao
  - Khi video dc click, chay ham callback o VideoList, va tu VideoList goi vao VideoListItem
  - ham callback onVideoSelect() truyen lan luot tu: index.js > VideoList > VideoListItem

### Lecture 32 - Using debounce from Lodash to handle videoSearch
```javascript
  const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300);
```

### Lecture 33 - React Wrap Up
