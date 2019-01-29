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
  {path: nature, date: 'June 12 2077', key: 0},
  {path: nature2, date: 'June 12 2077', key: 1},
  {path: nature3, date: 'June 12 2077', key: 2},
  {path: nature4, date: 'June 12 2077', key: 3},
  {path: nature5, date: 'June 12 2077', key: 4},
  {path: nature6, date: 'June 12 2077', key: 5},
  {path: nature7, date: 'June 12 2077', key: 6},
  {path: nature8, date: 'June 12 2077', key: 7},
  {path: nature9, date: 'June 12 2077', key: 8},
  {path: nature10, date: 'June 12 2077', key: 9},
  {path: nature11, date: 'June 12 2077', key: 10}
];

function isPhotoSelected(key, array) {
  return array.includes(key);
}

function PhotoIcon(props) {
  if (isPhotoSelected(props.index, props.selected)) {
    return (
      <div>
        <div className="photo-circle photo-selected" onClick={(e) => props.addInput(e, props.key)}>
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="search-icon search-selected">
          <i className="fas fa-search-plus"></i>
        </div>
      </div>
    );
  } else if (props.hover === props.index) {
    return (
      <div>
        <div className="photo-circle" onClick={(e) => props.addInput(e, props.key)}>
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="search-icon">
          <i className="fas fa-search-plus"></i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="photo-circle" onClick={(e) => props.addInput(e, props.key)}>
        <i className="far fa-circle"></i>
      </div>
    );
  }
}

function getPhotoClass(props) {
  if (isPhotoSelected(props.index, props.selected)) {
    return 'photo-preview selected';
  } else {
    return 'photo-preview';
  }
}

function SinglePhoto(props) {
    return (
      <div key={props.index} className="single-photo">
        <div className="photo-text">{MyPhotos[props.index].date}</div>
        <img src={MyPhotos[props.index].path} alt="Image preview..." className={getPhotoClass(props)}/>
        <PhotoIcon index={props.index} selected={props.selected} hover={props.hover} addInput={(e) => {props.addInput(e, props.index)}}></PhotoIcon>
      </div>
    );
}

function PhotoView(props) {
  if (props.view.key !== -1) {
    return (
      <div key={props.view.key} className="view-image-container">
        <button className="back-arrow" onClick={(e) => props.goBack(e)}>
          <i className="fas fa-arrow-left fa-1x"></i>
        </button>
        <button className="next-button" onClick={(e) => props.goNext(e)}>
          <i className="fas fa-chevron-right fa-1x"></i>
        </button>
        <button className="prev-button" onClick={(e) => props.goPrev(e)}>
          <i className="fas fa-chevron-left fa-1x"></i>
        </button>
        <img src={props.view.path} alt="Image preview..." className="view-image"></img>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}



class Photos extends Component {

    constructor(props) {
      super(props);
      this.state = {
        selected: [],
        hover: -1,
        view: {path: '', date: '', key: -1}
      };
      this.toggleSelected = this.toggleSelected.bind(this);
      this.setHover = this.setHover.bind(this);
      this.removeHover = this.removeHover.bind(this);
      this.toggleSelected = this.toggleSelected.bind(this);
      this.photoClick = this.photoClick.bind(this);
      this.goBack = this.goBack.bind(this);
      this.goNext = this.goNext.bind(this);
      this.goPrev = this.goPrev.bind(this);
    }

    photoClick(key) {
      console.log('photo click');
      if (this.state.selected.length < 0) {
        if (isPhotoSelected(key, this.state.selected)) {
          // remove
          let tempArray = this.state.selected.filter(x => x !== key);
          this.setState({selected: tempArray});
        } else {
          // add
          let tempArray = this.state.selected;
          tempArray.push(key);
          this.setState({selected: tempArray});
        }
      } else {
        // make photo big
        this.setState({view: MyPhotos[key]});
      }
    }

    toggleSelected(event, key) {
      event .stopPropagation();
      if (isPhotoSelected(key, this.state.selected)) {
        // remove
        let tempArray = this.state.selected.filter(x => x !== key);
        this.setState({selected: tempArray});
      } else {
        // add
        let tempArray = this.state.selected;
        tempArray.push(key);
        this.setState({selected: tempArray});
      }
    }
    
    setHover(key) {
      this.setState({hover: key});
    }
    
    removeHover() {
      this.setState({hover: -1});
    }

    goBack(e) {
      this.setState({view: {path: '', date: '', key: -1}});
    }

    goPrev(e) {
      let nextKey = this.state.view.key - 1;
      if (nextKey < 0) {
        nextKey = MyPhotos.length - 1;
      }
      this.setState({view: MyPhotos[nextKey]});
    }

    goNext(e) {
      console.log('go next');
      let nextKey = this.state.view.key + 1;
      if (nextKey > MyPhotos.length - 1) {
        nextKey = 0;
      }
      this.setState({view: MyPhotos[nextKey]});
    }
  
    render() {
      let retArray = [];
      for (let i = 0; i < MyPhotos.length; i++) {
        retArray.push(
          <div onClick={() => this.photoClick(i)} onMouseEnter={() => this.setHover(i)} onMouseLeave={() => this.removeHover(i)} key={i}>
            <SinglePhoto index={i} selected={this.state.selected} hover={this.state.hover} addInput={(e, key) => this.toggleSelected(e, key)}></SinglePhoto>
          </div>
        );
      }
      return (
      <div className="photos-page">
        <div className="photos-topbar">
          <button className="hamburger-button">
            <i class="fas fa-bars fa-1x"></i>
          </button>
          <div className="topbar-title"><div className="title-text">Sutorus Photos</div></div>
          <div className="search-container">
            <div className="input-wrapper">
              <div className="topbar-search-icon">
                <i class="fas fa-search"></i>
              </div>
              <input className="seach-input" placeholder="search"/>
            </div>
          </div>
          <div className="temp">hello1</div>
          <div className="temp">hello2</div>
          <div className="temp">hello3</div>
          <div className="temp">hello4</div>
        </div>
        <div className="photos-row">
          {retArray}
        </div>
        <PhotoView view={this.state.view} photos={MyPhotos} goBack={(e) => this.goBack(e)} goNext={(e) => this.goNext(e)} goPrev={(e) => this.goPrev(e)}/>
      </div>
      );
    }
  }
  
  export default Photos;