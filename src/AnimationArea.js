import React, { createRef, Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

export default class AnimationArea extends Component {
  constructor(props) {
    super(props);
    this.state = { left: 0, klass: 'down' };
    this.el = createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let component = this;
    window.onscroll = function(e) {
      if (this.oldScroll > this.scrollY){
        component.setState({
          klass: 'up'
        });
      } else {
        component.setState({
          klass: 'down'
        });
      }
      this.oldScroll = this.scrollY;
    }
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    this.setState({
      left: scrollTop
    });
  }

  render () {
    const { children } = this.props

    return (
      <div ref={this.el} className={`rocket-container ${this.state.klass}`} style={{ 'left' : this.state.left + 'px' }}>
        {children}
      </div>
    )
  }
}

AnimationArea.propTypes = {
  children: PropTypes.node
}
