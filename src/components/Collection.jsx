import React from 'react';
import Avatar from './Avatar.jsx';
import '../css/Collection.css';

export default class Collection extends React.Component {
  render() {
    const {avatars, displayed, isLoading} = this.props;
    return(
      <ul
        className={`container collection`}
        aria-label={`Avatar selection`}
        tabIndex='-1'
      >
        {avatars.map((avatar, index) => {
          return (
            <li
              className={`${index === displayed ? 'selected': ''} avatar`}
              aria-label={`Select ${avatar.label}`}
              aria-labelledby={`${avatar.label}`}
              tabIndex='0'
              role='button'
              index={index}
              key={avatar.id}
              onClick={() => {this.selectItem(index)}}
              onKeyDown={(event) => {this.keyboardSelectItem(event, index)}}
            >
              <Avatar
                index={index}
                avatar={avatar}
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

