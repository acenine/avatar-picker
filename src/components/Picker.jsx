import React from 'react';
import Avatar from './Avatar.jsx';
import Popover from './Popover.jsx';

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: this.props.avatars,
      displayed: 0,
      isLoading: -1,
    };
  }

  render() {
    const {avatars, displayed, isLoading} = this.state;
    return(
      <div className="container">
        <div className="displayed avatar">
          <Avatar avatar={avatars[displayed]}/>
        </div>
        <Popover
          avatars={avatars}
          displayed={displayed}
          isLoading={isLoading}
          updateDisplayed={this.fakeHttpRequest.bind(this)}
        />
      </div>
    );
  }

  fakeHttpRequest(i) {
    this.setState({
      isLoading: i,
    })
    setTimeout(() => this.setState({
      isLoading: -1,
      displayed: i,
      //still need to add closing the popover
    }), 1000)
  }
}

// ok the idea is that when a pic is clicked that takes the information to another function that sets an isloading property and a 1 second timeout that will then turn the isloading to false and set the new selection and reset the popover
