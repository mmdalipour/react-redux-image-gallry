import React from "react";
import { connect } from "react-redux";

// styles
import "./ImageGallery.scss";

// actions
import { loadImages } from "./actions/index";

// components
import AlertDefault from "../AlertDefault";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const randomColor = () => {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };
};

const ImageGallery = props => {
  const { images, error } = props;

  const renderLoader = () => (
    <div className="d-flex justify-content-center m-4">
      <div
        className="spinner-grow text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const renderInfiniteScroll = loader => (
    <InfiniteScroll
      hasMore={true}
      next={props.loadImages}
      dataLength={images.length}
      loader={loader}
      className="overflow-hidden"
    >
      <Row>
        {images.map((image, index) => {
          const color = randomColor();
          const o = Math.round(
            (parseInt(color.r) * 299 +
              parseInt(color.g) * 587 +
              parseInt(color.b) * 114) /
              1000
          );
          const textColor = o > 185 ? "text-dark" : "text-white";

          return (
            <Col key={index} md="6" lg="4" xl="3" className="p-2">
              <a
                href={image.links.download}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <div
                  className="image-box"
                  style={{ backgroundImage: `url(${image.urls.regular})` }}
                >
                  <div
                    className="image-overlay"
                    style={{
                      backgroundColor: `rgb(${color.r},${color.g},${color.b})`
                    }}
                  ></div>
                  <div className="image-content">
                    <div className="d-flex flex-column text-center">
                      <p className={textColor + " author-name"}>
                        {image.user.first_name}
                      </p>
                      <div className="text-center">
                        <img
                          className="rounded-circle author-image"
                          width="64px"
                          height="64px"
                          src={image.user.profile_image.medium}
                          alt={image.user.name}
                        ></img>
                      </div>
                    </div>
                    <div className="like-holder d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon
                        color={"#ff0000"}
                        icon={faHeart}
                      ></FontAwesomeIcon>
                      <small className="ml-1 text-white">{image.likes}</small>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          );
        })}
      </Row>
    </InfiniteScroll>
  );

  React.useEffect(() => {
    props.loadImages();
  }, []);

  const loader = renderLoader();
  return (
    <Container className="mt-4" fluid>
      {error && <AlertDefault error={error}></AlertDefault>}
      {renderInfiniteScroll(loader)}
    </Container>
  );
};

// map state to props
const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
});

// map dispatch to props
const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallery);
