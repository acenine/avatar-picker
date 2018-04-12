import React from 'react';
import Collection from './Collection.jsx';
import onClickOutside from 'react-onclickoutside';

class Popover extends React.Component {
  render() {
    const {avatars, displayed, updateDisplayed, isLoading, action} = this.props;
    return(
      <div className={`container ${action}`}>
        <div className="triangle"></div>
        <div className="pop-box container">
          <span> Choose your avatar </span>
          <Collection
            avatars={avatars}
            displayed={displayed}
            isLoading={isLoading}
            updateDisplayed={updateDisplayed}
          />
        </div>
      </div>
    );
  }
  handleClickOutside = event => {
    this.props.closeFn();
  };
}
export default onClickOutside(Popover);
