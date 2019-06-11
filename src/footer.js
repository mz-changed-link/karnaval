import React , {Component} from 'react';
import axios from 'axios';
import './footer.css';

export default class Footer  extends Component {
    
    state = {
        loading: true,
        result: [],
        namesList: null
    };


  async componentDidMount() {
    const items_number = 5;
    const result = [];
    for (var i = 0 ; i < items_number ; i++){
        const url = "http://karnaval.herokuapp.com/api/service/title?id=" + i;
        

        var output = await axios.get(url);
        result.push(output.data);
        

        // fetch(url, {
        //     method: "GET",
        //      headers: {
        //        "Content-Type": "application/json"
        //     },
        //     credentials: "include"
        //     , mode:'no-cors'
        //   })
        //  .then((response) => {
        //    console.log(response);
        //      try {
        //       JSON.parse(response)
        //      }
        //      catch(err){
        //        console.log("parsing err ",err)
        //      }
     
        //  })
        //  .catch((err)=>{
        //    console.log("err ",err)
        //  });


        // fetch(url, {
        //     // mode: 'no-cors',
        //     method: 'GET',
        //     headers: {
        //       Accept: 'application/json',
        //     },
        //   },
        //   ).then(response => {
        //     if (response.ok) {
        //       response.json().then(json => {
        //         console.log(json);
        //       });
        //     }
        //   });

        
        // fetch(url, {mode: 'no-cors'})
        // .then(function(response) {
        // console.log(response.text()); 
        // }).catch(function(error) {  
        // console.log('Request failed', error)  
        // });

    }
    
    this.setState({result:JSON.parse(JSON.stringify(result)) , loading:false} );
    
    }


 render(){
    
    
    if (this.state.loading && this.state.result ){
      return (<div class="spinner-border text-primary" style={{margin:'auto',display:'block'}} role="status">
      <span class="sr-only">Loading...</span>
    </div>);
    }


    const Pludetails = (props) => {
      return(
        <div>
         <span>{props[1]}</span>
        </div>
      );
     }
     const Product = (props) => {
      return(
        <div>
          <div>
            
          </div>
        </div>
      );
    };
      


         return (
          
         <React.Fragment>
              <div className="test">
                
                {/* {
                  this.state.result.map(function(d, index){
         return (
           <div>
           <li key={index}>{d.data[index]}</li>
           <br/>
           </div>
         )
       })} */}
                  
                </div>  

            <footer className="rtl blog-footer footer" style={{marginTop:'20px'}} >
                <div className="row custom_style_footer_row"> 
                <div className="col-md-1 " ></div>


                <div className="col-md-3 footer_border" >

                  <img src={'img/logo2.png'} className="footer_logo" />

                  <ul>
                  <li ><h6 className="footer_links">
                      معرفی کسب و کار ها
                      </h6></li>
                      <li ><h6  className="footer_links">
                      فرصت های شغلی
                      </h6></li>
                      <li ><h6 className="footer_links">
                      تبلیغات
                      </h6></li>
                      <li ><h6 className="footer_links">
                      حریم خصوصی
                      </h6></li>
                      <li ><h6 className="footer_links">
                      شرایط و ضوابط
                      </h6></li>
                      <li ><h6 className="footer_links">
                      داستان ما
                      </h6></li>
                      <li ><h6 className="footer_links">
                      تماس با ما
                      </h6></li>


                  </ul>

                </div>
                <div className="col-md-3 footer_border" >
<h5 className="master_title_footer">سرویس های کارناوال</h5>


{this.state.result != null ? <div> {this.state.result.map((product, i) => <div key={i} >{product}</div>)} </div>  : <div></div> }


                </div>
                <div className="col-md-3 " >
                <h5 className="master_title_footer">همراه ما باشید</h5>

                <span>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="footer_social_media_small_icons svg-inline--fa fa-instagram fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </span>


                <span>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" className="footer_social_media_small_icons svg-inline--fa fa-telegram fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
                </span>

                <h5 className="master_title_footer">عضویت در خبرنامه</h5>

                <div class="input-group md-form form-sm form-2 pl-0">
  <input class="form-control my-0 py-1 red-border" type="text" placeholder="آدرس ایمیل" aria-label="Search" />
  <div class="input-group-append">
    <span class="input-group-text red lighten-3" id="basic-text1" style={{width:'40px','height':'100%'}}><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></span>
  </div></div>

                </div>




                <div className="col-md-1 " ></div>
                
                </div>
                
                
            </footer>
         </React.Fragment>

          
            );
        }
    
    
    
    
    
    
    }

    function FUNCFOOTER(input) {
        const listItems = input.map((number) =>
          // Correct! Key should be specified inside the array.
          <ListItem key={number.toString()}
                    value={number} />
        );
        return (
          <ul>
            {listItems}
          </ul>
        );
      }
      function ListItem(props) {
        // Correct! There is no need to specify the key here:
        return <li>{props.value}</li>;
      }
      