import { useState } from 'react'
import styles from './App.css'

const projectTypes = [
  {
    id: 0,
    name: 'Органічний',
    ai: 2.4,
    bi: 1.05,
    ci: 2.5,
    di: 0.38
  },
  {
    id: 1,
    name: 'Напіврозподілений',
    ai: 3,
    bi: 1.12,
    ci: 2.5,
    di: 0.35
  },
  {
    id: 2,
    name: 'Вбудований',
    ai: 3.6,
    bi: 1.2,
    ci: 2.5,
    di: 0.32
  }
]

function App() {
  const [selectedProjectTypeId, setSelectedProjectTypeId] = useState(0);
  const [kloc, setKloc] = useState(0);

  let pm = 'N/A', tm = 'N/A', ss = 'N/A';
  if (kloc > 0) {
    const p = projectTypes[selectedProjectTypeId];
    pm = p.ai * (kloc ** p.bi);
    tm = p.ci * (pm ** p.di);
    ss = pm / tm;
  }

  return <div className={"calculator"}>
    <div className={"inputBox"}>
    <label>
      Тип:{' '}
      <select onChange={e => setSelectedProjectTypeId(e.target.value)}>
        {projectTypes.map(t => {
          return <option key={t.id} value={t.id}>{t.name}</option>
        })}
      </select>
    </label>
    <label>
      KLOC:{' '}
      <input type='number' min={1} onChange={e => setKloc(e.target.value)}/>
    </label>
    </div>
    <div className={"resultBox"}>
      <ul>
        <li>PM: {typeof pm == 'number' ? pm.toFixed(3) : pm}</li>
        <li>TM: {typeof tm == 'number' ? tm.toFixed(3) : tm}</li>
        <li>SS: {typeof ss == 'number' ? ss.toFixed(3) : ss}</li>
      </ul>
    </div>
  </div>
}

export default App
