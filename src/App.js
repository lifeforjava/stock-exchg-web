import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import PostStockExchange from './pages/stock-exchange/PostStockExchange';
import App1 from './pages/stock-exchange/App1';
import AddStockToExchange from './pages/stock-exchange/AddStockToExchange';  
/* import UpdateStockPrice from './pages/stock-exchange/UpdateStockPrice';*/


function App() {
  
  return (
    <>
 <Header></Header>
 <Routes>
  <Route path='/' element={<Dashboard/>}/>
  <Route path='/stock-exchange' element={<PostStockExchange/>}/> 
  <Route path='/fetch-exchange' element={<App1/>}/> 
  <Route path='/add-stock-to-exchange' element={<AddStockToExchange/>}/> 
  {/* <Route path='/update-exchange' element={<UpdateStockPrice/>}/>
 <Route path='/fetch-exchange' element={<FetchExchangeList/>}/>  */}
   <Route path='*' element={<NoMatch/>}/> 
 </Routes>
 </>
  ); 

}

export default App;



    
    



