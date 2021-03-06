import React from 'react';
import { Component } from 'react';
import styles from './Photos.css';
import IndividualPhoto from '../IndividualPhoto/IndividualPhoto.jsx';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: ''
    };
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      photo: 'https://s3-us-west-1.amazonaws.com/stanleyhotel/Stanley0.jpg'
    });
  }

  handlePhotoClick(event) {
    const url = event.target.src;
    this.setState({
      photo: url
    });
  }

  handleRightArrowClick(event) {
    event.preventDefault();
    const current = this.state.photo;
    const index = this.props.photos.indexOf(current) + 1;
    if (index <= this.props.photos.length - 1) {
      this.setState({
        photo: this.props.photos[index]
      });
    }
    if (index > this.props.photos.length - 1) {
      this.setState({
        photo: this.props.photos[0]
      });
    }
  }

  handleLeftArrowClick(event) {
    event.preventDefault();
    const current = this.state.photo;
    const index = this.props.photos.indexOf(current) - 1;

    if (index < 0) {
      this.setState({
        photo: this.props.photos[this.props.photos.length - 1]
      });
    } else {
      this.setState({
        photo: this.props.photos[index]
      });
    }
  }

  render() {
    const photos = this.props.photos.map((photo, index) => {
      return (
        <IndividualPhoto
          index={index}
          key={index}
          handlePhotoClick={this.handlePhotoClick}
          photo={photo}
          style={{
            filter:
              this.state.photo === photo
                ? 'brightness(100%)'
                : 'brightness(40%)'
          }}
        />
      );
    });
    return (
      <div>
        <div className={styles.selected}>
          <img
            className={styles.img}
            data-test="photo-selected"
            src={this.state.photo}
            height="272"
            width="369.672"
          />
          <div
            name="right"
            onClick={this.handleRightArrowClick}
            className={styles.right}
          >
            <a
              href="#"
              className={styles.arrowButton}
              role="button"
              aria-disabled="true"
            >
              >
            </a>
          </div>
          <div
            name="left"
            onClick={this.handleLeftArrowClick}
            className={styles.left}
          >
            <a
              href="#"
              className={styles.arrowButton}
              role="button"
              aria-disabled="true"
            >
              {'<'}
            </a>
          </div>
        </div>
        <div className={styles.photolist}>{photos}</div>
      </div>
    );
  }
}

export default Photos;
