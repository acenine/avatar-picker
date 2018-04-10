import React from 'react';
import Avatar from './Avatar.jsx';

export default class Collection extends React.Component {
  render() {
    const {avatars, current} = this.props;
    return(
        <ul className="container collection">
          {avatars.map((avatar, index) => {
            console.log(current)
            if (index === current) {
              var selected = 'selected';
            }
            return (
              <li className={`circle ${selected || ''}`} key={avatar.id}>
                <Avatar
                  avatar={avatar}
                  index={index}
                  type={selected || ''}
                />
                <div className={`overlay circle`}></div>
              </li>
            );
          })}
        </ul>
    );
  }
}
