
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Window as WindowDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.css";

class Window extends Component {
  componentDidMount() {
    const windowHtml = "<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='./static/developer.svg'>";
    this.window = new WindowDHX({
      width: 440, 
      height: 520, 
      title: "Window",
      html: windowHtml,
      closable: true
    });
  }
  handleShow = () => {
    this.window.show()
  }
  componentWillUnmount() {
    this.window && this.window.destructor();
  }
  render() {
    return (
      <button className="button" onClick={() => this.handleShow()}>
        Show Window 
      </button>
    );
  }
}
Window.propTypes = {
  css: PropTypes.string,

	title: PropTypes.string,
	html: PropTypes.string,

	minWidth: PropTypes.number,
	minHeight: PropTypes.number,

	left: PropTypes.number,
	top: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,

	footer: PropTypes.bool,
	header: PropTypes.bool,
	viewportOverflow: PropTypes.bool,
	resizable: PropTypes.bool,
	movable: PropTypes.bool,
	modal: PropTypes.bool,
	closable: PropTypes.bool,
};

export default Window;