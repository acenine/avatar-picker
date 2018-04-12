import React from 'react';
import Avatar from './Avatar.jsx';

export default class Collection extends React.Component {
  render() {
    const {avatars, displayed, isLoading} = this.props;
    return(
      <ul tabIndex="0" className={`container collection`}>
        {avatars.map((avatar, index) => {
          return (
            <li
              tabIndex="-1"
              className={`${index === displayed ? 'selected': ''} avatar`}
              key={avatar.id}
              index={index}
              onClick={() => {this.selectItem(index)}}
              onKeyDown={(event) => {event.keyCode === 13 && this.selectItem(index)}}
            >
              <Avatar
                avatar={avatar}
                index={index}
              />
              <div
                className={`avatar overlay`}
                id={isLoading === index ? 'loading' : ''}></div>
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
}

