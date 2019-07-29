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

import nature32 from './testphotos/nature32.jpg'
import nature34 from './testphotos/nature34.jpg'
import nature45 from './testphotos/nature45.jpg'
import nature47 from './testphotos/nature47.jpg'
import nature54 from './testphotos/nature54.jpg'
import nature65 from './testphotos/nature65.jpg'
import nature76 from './testphotos/nature76.jpg'
import nature90 from './testphotos/nature90.jpg'
import nature234 from './testphotos/nature234.jpg'
import nature543 from './testphotos/nature543.jpg'
import nature654 from './testphotos/nature654.jpg'
import nature111 from './testphotos/nature111.jpg'

const MyPhotos = [
  {path: nature, key: 0},
  {path: nature2, key: 1},
  {path: nature3, key: 2},
  {path: nature4, key: 3},
  {path: nature5, key: 4},
  {path: nature6, key: 5},
  {path: nature7, key: 6},
  {path: nature8, key: 7},
  {path: nature9, key: 8},
  {path: nature10, key: 9},
  {path: nature11, key: 10},
  {path: nature32, key: 11},
  {path: nature34, key: 12},
  {path: nature45, key: 13},
  {path: nature47, key: 14},
  {path: nature54, key: 15},
  {path: nature65, key: 16},
  {path: nature76, key: 17},
  {path: nature90, key: 18},
  {path: nature234, key: 19},
  {path: nature543, key: 20},
  {path: nature654, key: 21},
  {path: nature111, key: 22}
];

const photoDates = [
  {date: 'June 12 2077', location: 'here', keys: [0, 1, 11, 12, 13]},
  {date: 'June 11 2077', location: 'here', keys: [2, 3, 14, 15, 16]},
  {date: 'June 10 2077', location: 'here', keys: [4]},
  {date: 'June 12 2076', location: 'here', keys: [5, 6, 17, 18]},
  {date: 'June 12 2074', location: 'here', keys: [7, 8, 19, 20]},
  {date: 'June 12 2074', location: 'here', keys: [9, 21, 22]},
  {date: 'June 12 2073', location: 'here', keys: [10]},
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

function PhotosRow(props) {
  let retArray = [];
  for (let i = 0; i < props.dateItems.keys.length; i++) {
    retArray.push(
      <div onClick={() => props.photoClick(props.dateItems.keys[i])} onMouseEnter={() => props.setHover(props.dateItems.keys[i])} onMouseLeave={() => props.removeHover(props.dateItems.keys[i])} key={props.dateItems.keys[i]}>
        <SinglePhoto index={props.dateItems.keys[i]} selected={props.selected} hover={props.hover} addInput={(e, key) => props.toggleSelected(e, key)}></SinglePhoto>
      </div>
    );
  }
  return retArray;
}

function SinglePhoto(props) {
    return (
      <div key={props.index} className="single-photo">
        <img src={MyPhotos[props.index].path} alt="" className={getPhotoClass(props)}/>
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
        <img src={props.view.path} alt="" className="view-image"></img>
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
        view: {path: '', date: '', key: -1},
        showSideBar: false
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
      console.log(this.state.selected.length);
      if (this.state.selected.length > 0) {
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
      event.stopPropagation();
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

    getNextKey(key) {
      let retNext = false;
      for (let i = 0; i < photoDates.length; i++) {
        for (let j = 0; j < photoDates[i].keys.length; j++) {
          if (retNext) {
            return photoDates[i].keys[j];
          }
          if (photoDates[i].keys[j] === key) {
            if (photoDates[i].keys[j+1]) {
              return photoDates[i].keys[j+1];
            } else {
              retNext = true;
            }
          }
        }
      }
      return 0;
    }

    getPrevKey(key) {
      if (key === 0) {
        let keys = photoDates[photoDates.length-1].keys
        return keys[keys.length-1];
      }
      let retPrev = false;
      for (let i = photoDates.length-1; i >= 0; i--) {
        for (let j = photoDates[i].keys.length-1; j >= 0; j--) {
          if (retPrev) {
            return photoDates[i].keys[j];
          }
          if (photoDates[i].keys[j] === key) {
            if (photoDates[i].keys[j-1]) {
              return photoDates[i].keys[j-1];
            } else {
              retPrev = true;
            }
          }
        }
      }
      return 0;
    }

    goBack(e) {
      this.setState({view: {path: '', date: '', key: -1}});
    }

    goPrev(e) {
      let nextKey = this.getPrevKey(this.state.view.key);
      if (nextKey < 0) {
        nextKey = MyPhotos.length - 1;
      }
      this.setState({view: MyPhotos[nextKey]});
    }

    goNext(e) {
      let nextKey = this.getNextKey(this.state.view.key);
      if (nextKey > MyPhotos.length - 1) {
        nextKey = 0;
      }
      this.setState({view: MyPhotos[nextKey]});
    }

    clearSelected() {
      this.setState({selected: []});
    }
  
    render() {
      let retArray = [];
      for (let i = 0; i < photoDates.length; i++) {
        retArray.push(
          <div className="photo-row" key={i}>
            <div className="photo-text">{photoDates[i].date}</div>
            <div className="row-container">
              <PhotosRow dateItems={photoDates[i]} selected={this.state.selected} hover={this.state.hover}
                photoClick={(key) => this.photoClick(key)} setHover={(key) => this.setHover(key)} removeHover={(key) => this.removeHover(key)}
                toggleSelected={(e, key) => this.toggleSelected(e, key)}
              />
            </div>
          </div>
        );
      }
      return (
      <div className="photos-page">
        <SideBar showSideBar={this.state.showSideBar} closeSideBar={() => this.setState({showSideBar: false})}/>
        <TopBar selected={this.state.selected} clearSelected={() => this.clearSelected()} showSideBar={() => this.setState({showSideBar: true})}></TopBar>
        <div className="left-column">
          <button className="left-column-button active">
            <i className="fas fa-image left-column-icon"></i>
            <div className="left-column-text">Photos</div>
          </button>
          <button className="left-column-button">
            <i className="fas fa-images left-column-icon"></i>
            <div className="left-column-text">Albums</div>
          </button>
          <button className="left-column-button">
            <i className="fas fa-star left-column-icon"></i>
            <div className="left-column-text">Assistant</div>
          </button>
          <button className="left-column-button">
            <i className="fas fa-users left-column-icon"></i>
            <div className="left-column-text">Sharing</div>
          </button>
          <button className="left-column-button">
            <i className="fas fa-book left-column-icon"></i>
            <div className="left-column-text">Photo book</div>
          </button>
        </div>
        <div className="photos-body">
          {retArray}
        </div>
        <PhotoView view={this.state.view} photos={MyPhotos} goBack={(e) => this.goBack(e)} goNext={(e) => this.goNext(e)} goPrev={(e) => this.goPrev(e)}/>
      </div>
      );
    }
  }

  function TopBar(props) {
    if (props.selected.length > 0) {
      return (
        <div className="photos-topbar">
        <button className="cancel-button" onClick={() => props.clearSelected(0)}>
          <i className="fas fa-times"></i>
        </button>
        <div className="selected-text-wrapper">
          <div className="selected-number">{props.selected.length}</div>
          <div>Selected</div>
        </div>
        <div className="trash-wrapper">
          <button className="trash-button"><i className="fas fa-trash-alt"></i></button>
        </div>
        </div>
      );
    } else {
      return (
        <div className="photos-topbar">
          <button className="hamburger-button" onClick={props.showSideBar}>
            <i className="fas fa-bars fa-1x"></i>
          </button>
          <div className="topbar-title"><div className="title-text">Sutorus Photos</div></div>
          <div className="search-container">
            <div className="photo-input-wrapper">
              <div className="topbar-search-icon">
                <i className="fas fa-search"></i>
              </div>
              <input className="seach-input" placeholder="search"/>
            </div>
          </div>
          <button className="upload-button">
          <i className="fas fa-upload upload-icon"></i>Upload</button>
        </div>
      );
    }
  }

  function getSideBarClass(bool) {
    if (bool) {
      return "sidenav active"
    } else {
      return "sidenav hidden";
    }
  }
  function getOverlayClass(bool) {
    if (bool) {
      return "sidenav-overlay active"
    } else {
      return "sidenav-overlay";
    }
  }

  function SideBar(props) {
    return (
      <div>
        <div className={getOverlayClass(props.showSideBar)} onClick={props.closeSideBar}></div>
        <div className={getSideBarClass(props.showSideBar)}>
          <div className="sidenav-top">
            <div>Sutorus Photos</div>
          </div>
          <div className="button-group">
            <button className="sidenav-button active">
              <i className="fas fa-image sidenav-button-icon active"></i>
              <div className="sidenav-button-text">Photos</div>
            </button>
            <button className="sidenav-button">
              <i className="fas fa-images sidenav-button-icon"></i>
              <div className="sidenav-button-text">Albums</div>
            </button>
            <button className="sidenav-button">
              <i className="fas fa-star sidenav-button-icon"></i>
              <div className="sidenav-button-text">Assistant</div>
            </button>
            <button className="sidenav-button">
              <i className="fas fa-users sidenav-button-icon"></i>
              <div className="sidenav-button-text">Sharing</div>
            </button>
            <button className="sidenav-button">
              <i className="fas fa-book sidenav-button-icon"></i>
              <div className="sidenav-button-text">Photo book</div>
            </button>
          </div>
          <div className="break"></div>
          <div className="button-group">
            <button className="sidenav-button">
              <i className="fas fa-archive sidenav-button-icon"></i>
              <div className="sidenav-button-text">Archive</div>
            </button>
            <button className="sidenav-button">
              <i className="fas fa-trash-alt sidenav-button-icon"></i>
              <div className="sidenav-button-text">Trash</div>
            </button>
          </div>
          <div className="break"></div>
          <div className="button-group">
            <button className="sidenav-button">
              <i className="fas fa-cog sidenav-button-icon"></i>
              <div className="sidenav-button-text">Settings</div>
            </button>
            <button className="sidenav-button">
              <i className="fas fa-question-circle sidenav-button-icon"></i>
              <div className="sidenav-button-text">Help & Feedback</div>
            </button>
            <button className="sidenav-button">
              <i className="fas fa-laptop sidenav-button-icon"></i>
              <div className="sidenav-button-text">App download</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default Photos;