import React from 'react';
import Avatar from './Avatar.jsx';

export default class Collection extends React.Component {
  render() {
    const {avatars, displayed, updateDisplayed, isLoading} = this.props;
    return(
      <ul className="container collection">
        {avatars.map((avatar, index) => {
          var selected = index === displayed ? 'selected': '';
          return (
            <li
              className={`${selected} avatar`}
              key={avatar.id}
              onClick={() => {
                if (selected === '') {
                  updateDisplayed(index);
                }
              }}
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
}

