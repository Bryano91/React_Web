import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Willkommen in Deutschland!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

class Name {
    constructor(first) {
        this.fullname = first;
    }
}
  
const myname = new Name("Bryan");

document.writeln(myname.fullname);

