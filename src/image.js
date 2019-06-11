import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './blog.css';

export default class AtomicImage  extends Component {
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
 
         return (<div>
                 dimensions width{width}, height{height}
                 <img onLoad={this.onImgLoad} src={'https://media.karnaval.ir/uploads/2019/06/ee92dd86-4c50-4ed8-9edf-96094497611f.jpg?size=800&format=webp'}/>
                 </div>
                );
     }
 }