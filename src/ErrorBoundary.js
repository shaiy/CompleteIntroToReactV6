import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    //Log to logger (like loggly \ NewRelic)
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    return this.state.hasError ? (
      <h2>
        This listing has an error. <Link to="/">Click here</Link> to go back to
        the home page.
      </h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
