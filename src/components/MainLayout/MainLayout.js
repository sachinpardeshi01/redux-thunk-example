import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


//Actions
import { getAlbum,getPhotos } from "../../actions";
//Styles
import "./MainLayout.css";

export class MainLayout extends Component {

  componentDidMount(){
    this.props.getAlbum();
  }

  getAlbumPhotos = (albumId) => {
      console.log("albumId",albumId);
      this.props.getPhotos(albumId);

  }


  render() {
    let { albumJSON,photosJSON } = this.props;
    console.log("albumPhotos",photosJSON);


    let renderAlbumLinks = albumJSON && albumJSON.map((album,i) => (
      <li 
      onClick={ () => {this.getAlbumPhotos(album.id)}}
      key={i}
      style={{cursor:"pointer",borderBottom:"1px solid #a2a100",textAlign:"left"}}
      >
       {album.title} 
      </li>
    ));

    let renderAlbumPhotos = photosJSON && photosJSON.map((photo,i) => (
        <img 
        src={photo.thumbnailUrl}
        key={i}
        alt={photo.title}
        ></img>
    )); 
    return (
      <div className="mainLayout">
      <div className="container">
        <div className="leftPane">
        <ul>
          {renderAlbumLinks}
          </ul>
        </div>
        <div className="rightPane">
        {renderAlbumPhotos}
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  albumJSON : state.albumJSON,
  photosJSON : state.photosJSON
})

const mapDispatchToProps = {
  getAlbum,
  getPhotos

}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
