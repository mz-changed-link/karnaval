import React, { Component } from "react";
import "./recent.css";
import axios from "axios";
export default class Recent extends Component {
  state = {
    loading: true,
    imageLists: [],
    post_description: [],
    post_subtitle: [],
    post_title: [],
    dimensions: {},
    items_number: 9
  };

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: { height: img.offsetHeight, width: img.offsetWidth }
    });
  }
  async componentDidMount() {
    const items_number = 9;
    const image_result = []; const description_result = []; const title_result = []; const subtitle_result = [];
    for (var i = 0; i < items_number; i++) {
      const image_url = "http://karnaval.herokuapp.com/api/recent/image?id=" + i;
      const description_url = "http://karnaval.herokuapp.com/api/recent/description?id=" + i;
      const title_url = "http://karnaval.herokuapp.com/api/recent/title?id=" + i;
      const subtitle_url = "http://karnaval.herokuapp.com/api/recent/subtitle?id=" + i;
      var image_output = await axios.get(image_url);
      var description_output = await axios.get(description_url);
      var title_output = await axios.get(title_url);
      var subtitle_output = await axios.get(subtitle_url);
      image_result.push(image_output.data);
      description_result.push(description_output.data);
      title_result.push(title_output.data);
      subtitle_result.push(subtitle_output.data);
    }
    

    this.setState({
      imageLists: JSON.parse(JSON.stringify(image_result)),
      post_description: JSON.parse(JSON.stringify(description_result)),
      post_subtitle: JSON.parse(JSON.stringify(subtitle_result)),
      post_title: JSON.parse(JSON.stringify(title_result)),
      loading: false
    });
  }
  render() {
    const { src } = this.props;
    const { width, height } = this.state.dimensions;

    if (this.state.loading ){
      return (<div class="spinner-border text-primary" style={{margin:'auto',display:'block'}} role="status">
      <span class="sr-only">Loading...</span>
    </div>);
    }

    return (
      <div className="rtl col-md-8 blog-main">
        <span className="rtl pb-4 mb-4 border-bottom new_posts_title">
          <span style={{ display: "inline-block" }}>
            <svg
              style={{ height: "20px", width: "auto" }}
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <circle cx="6.18" cy="17.82" r="2.18" />
              <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
            </svg>
          </span>
          <span>
          تازه های کارناوال
          </span>
        </span>

        
          

            {this.state.imageLists != null ? (
              <div>
                {" "}
                {this.state.imageLists.map((imageURL, i) => (
                  <React.Fragment>
                    <div className="rtl blog-post custom_box_shadow post_styles">
              <div className="pull-left">
                   
                      {imageURL.includes("400") ? (
                        <React.Fragment>
                           <div className="media">
                          <div className="media ">
                            <a className="mr-3" href="#">
                              <img
                                src={imageURL}
                                className="mr-3 recent_media_image_border_top_right"
                                alt="..."
                              />
                            </a>
                            <div className="media-body " >
                              <h5 className="mt-3 new_posts_title">{this.state.post_title[i]}</h5>
                              <span className="post_subtitle" >{this.state.post_subtitle[i]}</span>
                              <span className="post_content">
                              {this.state.post_description[i]}...
                              </span>
                              
                            </div>
                          </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          
                          <img
                            src={imageURL}
                            className="mr-3 recent_media_image_border recent_media_big_picutre"
                            alt="..."
                          />

                          <div className="post_margins">
                            <h5 className="new_posts_title" >{this.state.post_title[i]}</h5>
                            <span className="post_subtitle" >{this.state.post_subtitle[i]}</span>
                            <span className="post_content">{this.state.post_description[i]}...</span>

                            <div className="row continue_button_container">
<div className="col-md-9">

</div>
<div className="col-md-2">
<button type="button" className="btn btn-success continue_button">ادامه مطلب

<svg className="recent_small_icons" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
</button>
</div>

                            </div>

                          </div>
                        </React.Fragment>
                      )}
                    </div>
                    </div>
                    
                  </React.Fragment>
                ))}{" "}
              </div>
              
            ) : (
              <div>Error</div>
            )}
          

        
      </div>
    );
  }
}
