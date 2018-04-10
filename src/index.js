import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Picker from './components/Picker.jsx';


ReactDOM.render(<Picker />, document.getElementById('root'));





// ok so upon loading, the app will display the first icon in the array that is passed in to the top most component.
//           when that icon is clicked, it gets a border and a popover pops in below the icon displaying the full array
//           hovering over these icons produces a border and an overlay
//           click on an icon and it will do a loading thing and then one second later, that icon will appear in place of the original icon and the popover goes away
//           if you click outside of the popover, that will close it without setting a new icon
