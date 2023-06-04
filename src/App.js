
import './App.css';
import { TextArea } from './components/pages/textArea/textArea';
import { HeadBox } from './components/pages/headPart/headBox';
import { ModifyIcons } from './components/templates/modifyIcons/modifyIcons';
function App() {
  return (
    <div className="App">
      <HeadBox/>
      <ModifyIcons/>
      <TextArea/>
       
      
    </div>
  );
}

export default App;
