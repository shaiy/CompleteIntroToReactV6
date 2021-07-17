import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="flex justify-around h-96 mt-3">
        <img src={images[active]} alt="animal" className="max-w-md max-h-lg" />
        <div className="flex flex-wrap justify-start items-center w-6/12">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={`${
                index === active ? "border-red-900 opacity-70" : ""
              } w-28 h-28 rounded-full border-2 mx-2`}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
