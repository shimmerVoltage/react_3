import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';
import Lenght from './length/Lenght.js';
import Convert from './convert/Convert.js';
import Form from './form/Form.js';
import Range from './range/Range.js';
import Posts from './posts/Posts.js';
import Post from './post/Post.js';

class App extends React.Component {
  state = 
  {
    posts:
    [
      {id:"1", title:"Процедурное пограммирование на языке G++", content: "Изычаются базовые конструкции "},
      {id:"2", title:"J,]trnyj jhbtynbhjdfyyjt пограммирование на языке G++", content: "Изычаются базовые концепции "},
      {id:"3", title:"Datacon Tainers", content: "Изучаются основные структуры данных, и контенеры"}
    ]
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Hello />
        <Lenght />
        <Convert />
        <Form />
        <Range /> */}
        {typeof(this.state.posts)}
        <Posts posts={this.state.posts}/>
        {/* <Post title = "Title" content = "Content"/> */}
      </div>
    );
  }
}

export default App;
