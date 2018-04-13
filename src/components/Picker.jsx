import React from 'react';
import Avatar from './Avatar.jsx';
import Popover from './Popover.jsx';
import AriaModal from 'react-aria-modal';
import '../css/Picker.css';

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
          role="button"
          aria-label="Open avatar picker"
          ref={(displayed) => this.displayed = displayed}
          className={`displayed avatar container`}
          onClick={() => this.openPopover()}
          onKeyDown={(event) => {this.keyboardSelect(event)}}
        >
          <Avatar avatar={avatars[displayed]}/>
        </div>

        {popoverState === 'open' &&
          <AriaModal
            titleText="Choose your avatar"
            onExit={this.closePopover.bind(this)}
            underlayClickExits={true}
            includeDefaultStyles={false}
            focusDialog={true}
            dialogClass={'modal'}
          >
            <Popover
              outsideClickIgnoreClass={`displayed`}
              action={popoverState}
              avatars={avatars}
              displayed={displayed}
              isLoading={isLoading}
              updateDisplayed={this.fakeHttpRequest.bind(this)}
              closeFn={this.closePopover.bind(this)}
            />
          </AriaModal>}
      </div>
    );
  }

  openPopover() {
    this.setState({
      popoverState: 'open',
    });
  }

  closePopover() {
    this.displayed.focus();
    this.setState({
      popoverState: 'close',
    });
  }

  keyboardSelect(e) {
    const keyCode = e.keyCode
    if (keyCode === 13 || keyCode === 32){
      this.openPopover();
    }
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
