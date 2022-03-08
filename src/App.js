import './App.css';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/

let contacts = [
  {
    name: 'Mike',
    number: '760-956-0522'
  },
  {
    name: 'Jisela',
    number: '760-881-7511'
  },
  {
    name: 'Sahird',
    number: '760-488-8536'
  },
  {
    name: 'Roger',
    number: '760-680-5605'
  },
]


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Contactslist contactsData = {contacts}/>
    </div>
  );
}

export default App;
