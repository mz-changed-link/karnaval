import React , {Component} from 'react';


export default class Navbar  extends Component {
    constructor(props) {
         super(props);
         this.state = {dimensions: {}};
         this.onImgLoad = this.onImgLoad.bind(this);
     }
     onImgLoad({target:img}) {
         this.setState({dimensions:{height:img.offsetHeight,
                                    width:img.offsetWidth}});
     }
     render(){
         const {src} = this.props;
         const {width, height} = this.state.dimensions;
 
         return (

<nav style={{backgroundColor:'#35b995'}} className="navbar navbar-expand-md navbar-dark   nav-fill w-100">
<div className="container-fluid " >
  
  {/* <div className="col-md-1"></div> */}

<div className="col-md-3" >
<img class="navbar-brand" style={{height:'60px'}} src={'/img/logo.png'} />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <button type="button" className="btn btn-light">کجا میخوای بری؟</button>
    
</div>



 <div className="" >
 <div class="collapse navbar-collapse" id="navbarsExampleDefault">
  
  {/* <div style={{flexGrow:1}}></div> */}
    
    <form class="form-inline my-2 my-lg-0 " style={{float:'left'}}>
      {/* <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}

<div class="input-group md-form form-sm form-2 pl-0">
  <input class="form-control my-0 py-1 red-border" type="text" placeholder="جستجو در کارناوال" aria-label="Search" />
  <div class="input-group-append">
    <span class="input-group-text red lighten-3" id="basic-text1" style={{width:'40px','height':'100%'}}><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></span>
  </div>



</div>


    </form>
  
      <div  >


<div >

<span style={{display:'inline-block',textAlign:'center'}} ><svg   style={{height:'40px',width:'auto'}} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83z"></path><path d="M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></g></svg>

<span style={{display:'block'}} >عکاسخانه</span>




</span>

</div>
  
 
      </div>

      <div  >

<span style={{display:'inline-block',textAlign:'center'}} ><svg   style={{height:'40px',width:'auto'}} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><path d="M6.5 17.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"></path></g></svg>

<span style={{display:'block'}} >حساب کاربری</span>

</span>

</div>
 </div>




 </div>
 
 
 
 </div>
</nav>



            
                );
     }
 }