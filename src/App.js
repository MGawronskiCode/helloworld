import React from 'react';
import Greetings from './Greetings/Greetings';

const App = props => <div><div>Hello world from arrow! {props.name}</div>
                    <Greetings name={props.name}/></div>


export default App;
