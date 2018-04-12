import React from 'react';

export default class Avatar extends React.Component {
  render() {
    const {avatar} = this.props;
    var imgUrl = require(`../../img/${avatar.src}`)
    return(
        <img
          tabIndex="-1"
          className={`avatar`}
          src={imgUrl}
          alt={avatar.label}
        />
    );
  }
}
