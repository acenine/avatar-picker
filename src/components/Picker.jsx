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
      popoverState: 'closed',
    };
  }

  render(event) {
    const {avatars, displayed, isLoading, popoverState} = this.state;
    return(
      <div className="container">
        <div className="displayed avatar" onClick={() => this.openPopover()}>
          <Avatar avatar={avatars[displayed]}/>
        </div>
          <Popover
            outsideClickIgnoreClass={'displayed'}
            action={popoverState}
            avatars={avatars}
            displayed={displayed}
            isLoading={isLoading}
            updateDisplayed={this.fakeHttpRequest.bind(this)}
            closeFn={this.closePopover.bind(this)}
          />
      </div>
    );
  }

  openPopover() {
    if (this.state.popoverState === 'open') {
      return;
    }
    this.setState({
      popoverState: 'open',
    });
  }

  closePopover() {
    this.setState({
      popoverState: 'close',
    });
  }

  fakeHttpRequest(i) {
    this.setState({
      isLoading: i,
    })
    setTimeout(() => {
      this.setState({
        isLoading: -1,
        displayed: i,
      })
      this.closePopover();
    }, 1000)
  }
}
// popover starts off hidden
//         when the avatar is clicked, the popover pops over
//           expands from center, overbounces and stays
//             a click outside will close it
//             a selection will close it
//           closes by shrinking away


// ok the idea is that when a pic is clicked that takes the information to another function that sets an isloading property and a 1 second timeout that will then turn the isloading to false and set the new selection and reset the popover
