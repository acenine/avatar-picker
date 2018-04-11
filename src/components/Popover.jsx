import React from 'react';
import Collection from './Collection.jsx'

export default class Popover extends React.Component {
  render() {
    const {avatars, displayed, updateDisplayed, isLoading} = this.props;
    return(
      <div className="container">
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
}
