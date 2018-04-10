import React from 'react';
import Avatar from './Avatar.jsx';

export default class Collection extends React.Component {
  render() {
    const {avatars, displayed, updateDisplayed} = this.props;
    return(
        <ul className="container collection">
          {avatars.map((avatar, index) => {
            var selected = index === displayed ? 'selected': '';
            return (
              <li
                className={`${selected} avatar`}
                key={avatar.id}
                onClick={() => {updateDisplayed(index)}}
              >
                <Avatar
                  avatar={avatar}
                  index={index}
                />
                <div className={`avatar overlay`}></div>
              </li>
            );
          })}
        </ul>
    );
  }
}

// when an item is clicked, the border changes to the loading state and after one second, the popover closes and the displayed avatar is updated to the new selection.
