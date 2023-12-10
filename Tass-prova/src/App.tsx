import viteLogo from '/vite.svg';
import User from './components/User';
import Menu from './components/Menu';
import View from './components/View';

function App() {
    document.body.style = 'background: #232526; position:relative';
    return (
        <div>
        <User />
        <Menu />
        <View />
        </div>


    );
}

export default App;
