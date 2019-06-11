import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './blog.css';
import Navbar from './navbar' ;
import Toolbar from './toolbar';
import Tutorials from './tutorials' ;
import Plans from './plans' ;
import Contents from './contents' ;
import Social_Medias from './social_medias' ;
import Recent from './recent' ;
import Footer from './footer' ;
import Expense from './expense';
import Guidance from './guidance';
import request from 'superagent'


class App extends Component{
  state = {
    res : ""
  };
  async componentDidMount() {
    //const url = "http://karnaval.herokuapp.com/api/expense/date?id=0";
    //const response = await fetch(url , {mode: 'cors'});
    // fetch(url, {mode: 'no-cors'})
    // .then(function(response) {
    //   console.log(response); 
    // }).catch(function(error) {  
    //   console.log('Request failed', error)  
    // });
    //console.log(response);

  
    // const url = "http://karnaval.herokuapp.com/api/expense/date?id=0";
    // var x = fetch(url , {mode: 'no-cors'});
    // this.setState({res:x});
    // console.log(this.state.res);
}
  
  render(){



  
  return (
    
    <React.Fragment>

<div>



</div>


<div className="rtl container-fluid container_custom_style ">

<Navbar />
  
<Toolbar />
  
    {/* <Tutorials /> */}
  
  {/* <Extra_Section /> */}
  
  
  
  
  </div>
  

  <main role="main" className="rtl container">
  <div className="rtl row">
    
    <Recent />

    <aside className="rtl col-md-4 blog-sidebar">
      
            <Plans />
            
            <Expense  />
            <Guidance />
            
            
      
    </aside>

  </div>

</main>

<Footer />



    </React.Fragment>
    
    
  
  
  ) 
};
}

export default App;
