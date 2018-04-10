import React from 'react';
import Avatar from './Avatar.jsx';
import Popover from './Popover.jsx';

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: this.props.avatars,
      selected: 0,
    };
  }

  render() {
    const {avatars, selected} = this.state;
    return(
      <div className="container">
        <Avatar avatar={avatars[selected]}/>
        <Popover/>
      </div>
    );
  }
}
