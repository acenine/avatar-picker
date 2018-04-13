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
          className={`displayed avatar container`}
          ref={(displayed) => this.displayed = displayed}
          aria-label='Open avatar picker'
          role='button'
          tabIndex='0'
          onClick={() => this.openPopover()}
          onKeyDown={(event) => {this.keyboardSelect(event)}}
        >
          <Avatar avatar={avatars[displayed]}/>
        </div>

        {popoverState === 'open' &&
          <AriaModal
            titleId='pop-title'
            focusDialog={true}
            dialogClass={`modal`}
            underlayClickExits={true}
            includeDefaultStyles={false}
            onExit={this.closePopover.bind(this)}
          >
            <Popover
              avatars={avatars}
              displayed={displayed}
              isLoading={isLoading}
              action={popoverState}
              outsideClickIgnoreClass={`displayed`}
              closeFn={this.closePopover.bind(this)}
              updateDisplayed={this.fakeHttpRequest.bind(this)}
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
