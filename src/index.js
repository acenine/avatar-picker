import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Picker from './components/Picker.jsx';

const avatars = [
  { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
]

ReactDOM.render(<Picker avatars={avatars}/>, document.getElementById('root'));





// ok so upon loading, the app will display the first icon in the array that is passed in to the top most component.
//           when that icon is clicked, it gets a border and a popover pops in below the icon displaying the full array
//           hovering over these icons produces a border and an overlay
//           click on an icon and it will do a loading thing and then one second later, that icon will appear in place of the original icon and the popover goes away
//           if you click outside of the popover, that will close it without setting a new icon
