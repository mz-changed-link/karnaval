import React , {Component} from 'react';
import axios from 'axios';

export default class Toolbar  extends Component {
  state = {
    loading: true,
    item_title: [],    
    items_number: 9
  };
async componentDidMount() {
const items_number = 9;
const title_result = []; 

for (var i = 0; i < items_number; i++) {
const title_url = "http://karnaval.herokuapp.com/api/toolbar?id=" + i;



var title_output = await axios.get(title_url);

title_result.push(title_output.data);

}


this.setState({
item_title: JSON.parse(JSON.stringify(title_result)),
loading: false
});
}
 render(){

  if (this.state.loading ){
    return (<div class="spinner-border text-primary" style={{margin:'auto',display:'block'}} role="status">
    <span class="sr-only">Loading...</span>
  </div>);
  }

         return (
          
            <div className="rtl nav-scroller py-1 mb-2 navbar_style " style={{height:'100%'}} >
            <nav className="rtl nav d-flex justify-content-between" style={{padding:'inherit' , marginRight:'10%',marginLeft:'10%',fontFamily:'BYekan'} } >
            {this.state.item_title.map((title, i) => (


              <a className="rtl p-2 text-muted" href="#">{title}</a>


            ))} 
              
              
              
              
            </nav>
            
          </div>
          
            );
        }
    }