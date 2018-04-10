import React from 'react';
import Avatar from './Avatar.jsx';
import Popover from './Popover.jsx';

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: this.props.avatars,
      displayed: 0,
    };
  }

  render() {
    const {avatars, displayed} = this.state;
    return(
      <div className="container">
        <div className="displayed avatar">
        <Avatar avatar={avatars[displayed]}/>
        </div>
        <Popover
          avatars={avatars}
          displayed={displayed}
          updateDisplayed={this.updateDisplayed.bind(this)}
        />
      </div>
    );
  }

  updateDisplayed(i) {
    this.setState({
      displayed: i,
    })
  }
}
