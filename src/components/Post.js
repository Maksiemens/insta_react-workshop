import React, { Component } from 'react';
import User from './User';


export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User src="" alt="" name="" min />
        <img src={this.props.src} alt={this.props.alt} />
        <div className="post__name">some account</div>
        <div className="post__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          minima quod nemo amet natus dolore tempore voluptatum sunt, dolorum
          commodi rem doloribus culpa cupiditate, id quis rerum! Maiores,
          inventore tempore.
        </div>
      </div>
    );
  }
}
