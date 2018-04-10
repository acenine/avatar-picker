import React from 'react';
import Avatar from './Avatar.jsx';
import Popover from './Popover.jsx';

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: this.props.avatars,
      current: 0,
    };
  }

  render() {
    const {avatars, current} = this.state;
    return(
      <div className="container">
        <div className="displayed circle">
        <Avatar avatar={avatars[current]}/>
        </div>
        <Popover
          avatars={avatars}
          current={current}
        />
      </div>
    );
  }
}
