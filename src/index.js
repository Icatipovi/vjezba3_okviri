import React from 'react';
import ReactDOM from 'react-dom';
//importamo poruku koju smo zasebno napravili u komponentama kao poruka.js
//putanja moze bit relativna i apsolutna ovisi di se nalazimo
import Poruka from './components/Poruka';
import './index.css'


const poruke = [
  {
    id: 1,
    sadrzaj: 'HTML je jednostavan',
    datum: '2019-05-30T17:30:31.098Z',
    vazno: true
  },
  {
    id: 2,
    sadrzaj: 'React koristi JSX sintaksu',
    datum: '2019-05-30T18:39:34.091Z',
    vazno: false
  },
  {
    id: 3,
    sadrzaj: 'GET i POST su najvaznije metode HTTP protokola',
    datum: '2019-05-30T19:20:14.298Z',
    vazno: true
  }
]
const App = (props) => {
  const { poruke } = props

  return (
    <div>
      <h1>Poruke</h1>
      <ul>
      {poruke.map(poruka =>
      //ako je moguce za key uvijek koristit id, mora bit jedinstven
          <li key={poruka.id}>
            {poruka.sadrzaj}
          </li>
        )}  
      </ul>
    </div>
  )
}



ReactDOM.render(<App poruke={poruke} />,document.getElementById('root'))
	
export default App