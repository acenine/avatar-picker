import React from 'react';
import '../css/Avatar.css';

export default class Avatar extends React.Component {
  render() {
    const {avatar} = this.props;
    var imgUrl = require(`../../img/${avatar.src}`)
    return(
        <img
          className={`avatar`}
          src={imgUrl}
          alt={avatar.label}
          tabIndex='-1'
        />
    );
  }
}
