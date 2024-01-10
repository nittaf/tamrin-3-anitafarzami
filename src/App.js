
import './App.css';
import  { Component } from 'react'
 
class Textarea extends Component {
    render() {
        return (
          <div>
             <textarea id="text" name="text" rows="8" cols="30">
             </textarea>
          </div>
        )
    }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Textarea style={{borderRadius:6}} maxLen={20}></Textarea>
      </header>
    </div>
  );
}

export default App;
