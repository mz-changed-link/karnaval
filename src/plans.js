import React , {Component} from 'react';
import axios from 'axios';
import './plans.css';

export default class Plans  extends Component {
        state = {
                loading: true,
                imageLists: [],
                item_date: [],
                item_title: [],
                item_logo: [],
                items_number: 5
              };
async componentDidMount() {
const items_number = 4;
const image_result = []; const date_result = []; const title_result = []; const logo_result = [];
const logo_url = "http://karnaval.herokuapp.com/api/plan/logo";
for (var i = 0; i < items_number; i++) {
        const date_url = "http://karnaval.herokuapp.com/api/plan/date?id=" + i;
        const image_url = "http://karnaval.herokuapp.com/api/plan/image?id=" + i;
        const title_url = "http://karnaval.herokuapp.com/api/plan/title?id=" + i;
        
        var image_output = await axios.get(image_url);
        var date_output = await axios.get(date_url);
        var title_output = await axios.get(title_url);
        
        image_result.push(image_output.data);
        date_result.push(date_output.data);
        title_result.push(title_output.data);
        
}
var logo_output = await axios.get(logo_url);
logo_result.push(logo_output.data);

this.setState({
        imageLists: JSON.parse(JSON.stringify(image_result)),
        item_date: JSON.parse(JSON.stringify(date_result)),
        item_title: JSON.parse(JSON.stringify(title_result)),
        item_logo: JSON.parse(JSON.stringify(logo_result)),
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
                
                           
            <div className="row">
                    {/* {this.state.imageLists.map((imageURL, i) => (<div></div>))}  */}
                    <div className="rtl col-md-1"></div>
                    <div className="rtl col-md-10 custom_box_shadow " style={{borderRadius:'10px', paddingTop:'20px'}}>
                    <img src={this.state.item_logo}  style={{display:'block'}} className="" />
                        {this.state.imageLists.map((imageURL, i) => (<div>

                                <div class="media plan_item_container bottom_line">
                                <img src={imageURL} class="align-self-center mr-3 plan_item_image"  alt="..."/>
                                        <div class="media-body " style={{marginTop:'20px'}} >
                                                <h5 className="plan_item_title">{this.state.item_title[i]}</h5>
                                                <p className="plan_item_date">{this.state.item_date[i]}</p>
                                        </div>
                                </div>

                        </div>))} 
                        
                       
                        
                        
                    </div>
            </div>


          
            );
        }
    }