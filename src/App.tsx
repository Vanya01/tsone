import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import PostDetails from "./components/postDetails/PostDetails";
import {RouteComponentProps} from "react-router"
import Posts from "./components/posts/Posts";




function App() {
  return (
<Router>
    <div className="App">
        <Link to={'/posts'}> Posts </Link>

         <Route exact path={'/posts'} render={()=> <Posts/>}/>

        <Route path={'/posts/:id'} render={(props:RouteComponentProps)=>  <PostDetails {...props}/> } />



    </div>
</Router>
  );
}

export default App;
