import './App.css';
import LinkList from '../LinkList';
import CreateLink from '../CreateLink';
import Header from '../Header';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route path="/create" element={<CreateLink />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
