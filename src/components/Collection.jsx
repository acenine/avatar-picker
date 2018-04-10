import React from 'react';
import Avatar from './Avatar.jsx';

export default class Collection extends React.Component {
  render() {
    const {avatars, selected} = this.props;
    return(
        <ul className="container collection">
          {avatars.map((avatar, index) => {
            return (
              <li className="circle" key={avatar.id}>
                <Avatar
                  avatar={avatar}
                  index={index}
                />
                <div className="overlay circle"></div>
              </li>
            );
          })}
        </ul>
    );
  }
}
