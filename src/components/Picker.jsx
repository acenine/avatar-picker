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
      <div className={`container`}>
        <div
          tabIndex="0"
          className={`displayed avatar`}
          onClick={() => this.openPopover()}
          onKeyDown={(event) => {event.keyCode === 13 && this.openPopover()}}
        >
          <Avatar avatar={avatars[displayed]}/>
        </div>
          <Popover
            outsideClickIgnoreClass={`displayed`}
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
      this.closePopover();
      this.setState({
        isLoading: -1,
        displayed: i,
      })
    }, 1000)
  }
}
