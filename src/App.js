import s2 from './s2.jpg';
import './App.css';

function App() {
  return (
<div className="App">
<div style={{border:"solid 1px black", maxwidth:"50vw"}}></div>
<h1 className='titlered'>Your name here</h1>
<br/>
<img src="s12.webp" alt="aa"/>
<br/>
<img src={s2} alt="ab"/>
<br/>

<video width="320" height="240" controls>
<source src="s3.mp4" type="video/mp4"/>
</video>
</div>
  );
}

export default App;
