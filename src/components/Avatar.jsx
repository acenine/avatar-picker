import React from 'react';

export default class Avatar extends React.Component {
  render() {
    const {avatar, index, type} = this.props;
    var imgUrl = require(`../../img/${avatar.src}`)
    return(
      <img className={`circle`} src={imgUrl} alt={avatar.label}/>
    );
  }
}
