import React from "react";

// styles
import "./App.scss";

// helpers
import configureStore from "./helpers/store.helper";

// components
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavbarDefault from "./components/NavbarDefault";
import ImageGallery from "./components/ImageGallery";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavbarDefault title="localX Image Gallery" />
          <ImageGallery />
          <div className="position-fixed github-holder">
            <a
              className="github-button"
              href="https://github.com/mmdalipour/react-redux-image-gallry"
              data-size="large"
              data-show-count="true"
              aria-label="Star mmdalipour/react-redux-image-gallry on GitHub"
            >
              Star
            </a>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
