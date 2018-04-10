import React from 'react';
import Avatar from './Avatar.jsx';
import Popover from './Popover.jsx';

export default class Picker extends React.Component {
  render() {
    return(
      <div className="container">
        <Avatar/>
        <Popover/>
      </div>
    );
  }
}
