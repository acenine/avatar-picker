import React from 'react';
import Avatar from './Avatar.jsx';
import '../css/Collection.css';

export default class Collection extends React.Component {
  render() {
    const {avatars, displayed, isLoading} = this.props;
    return(
      <ul tabIndex="-1"
        aria-label={`Avatar selection`}
        className={`container collection`}
      >
        {avatars.map((avatar, index) => {
          return (
            <li
              tabIndex="0"
              role="button"
              aria-label={`Select ${avatar.label}`}
              aria-labelledby={`${avatar.label}`}
              key={avatar.id}
              index={index}
              className={`${index === displayed ? 'selected': ''} avatar`}
              onClick={() => {this.selectItem(index)}}
              onKeyDown={(event) => {this.keyboardSelectItem(event, index)}}
            >
              <Avatar
                avatar={avatar}
                index={index}
              />
              <div
                className={`avatar overlay`}
                id={isLoading === index ? 'loading' : ''}>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  selectItem(i) {
    const {displayed, isLoading, updateDisplayed} = this.props;
    if (i !== displayed && isLoading === -1) {
      updateDisplayed(i);
    }
  }
  keyboardSelectItem(e, i) {
    const keyCode = e.keyCode;
    if (keyCode === 13 || keyCode === 32) {
      this.selectItem(i);
    }
  }
}

