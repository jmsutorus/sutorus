import React, { Component } from 'react';
import './Photos.css'
import nature from './testphotos/nature.jpg'
import nature2 from './testphotos/nature2.jpg'
import nature3 from './testphotos/nautre3.jpeg'
import nature4 from './testphotos/nautre4.jpg'
import nature5 from './testphotos/nature5.jpg'
import nature6 from './testphotos/nature6.jpg'
import nature7 from './testphotos/nature7.jpg'
import nature8 from './testphotos/nature8.jpeg'
import nature9 from './testphotos/nature9.jpg'
import nature10 from './testphotos/nature10.jpg'
import nature11 from './testphotos/nature11.jpg'

const MyPhotos = [
  {path: nature, date: 'June 12 2077'},
  {path: nature2, date: 'June 12 2077'},
  {path: nature3, date: 'June 12 2077'},
  {path: nature4, date: 'June 12 2077'},
  {path: nature5, date: 'June 12 2077'},
  {path: nature6, date: 'June 12 2077'},
  {path: nature7, date: 'June 12 2077'},
  {path: nature8, date: 'June 12 2077'},
  {path: nature9, date: 'June 12 2077'},
  {path: nature10, date: 'June 12 2077'},
  {path: nature11, date: 'June 12 2077'}
];

function GetPhotos() {
  let retArray = [];
  for (let i = 0; i < MyPhotos.length; i++) {
    retArray.push(
      <div key={i}>
        <div className="photo-text">{MyPhotos[i].date}</div>
        <img src={MyPhotos[i].path} height="200px;" alt="Image preview..." className="photo-preview"/>
      </div>
    );
  }
  return retArray;
}



class Photos extends Component {

    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
      <div className="photos-page">
        <div className="photos-row">
          <GetPhotos/>
        </div>
      </div>
      );
    }
  }
  
  export default Photos;