import React, { Component } from "react";
import './social_media.css';
export default class Social_Medias extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="rtl p-4">
            <div class="">
              <div class="">
                <a
                  className="instagram_gradient"
                  style={{padding:'30px'}}
                  tabindex="0"
                  role="button"
                  href="https://www.instagram.com/karnaval.ir/"
                  target="_blank"
                >
                  <span class="">
                    Follow Us<i class="fa fa-instagram" />
                  </span>
                  <span class="" />
                </a>


                <a
                  className="telegram_gradient"
                  tabindex="0"
                  role="button"
                  href="https://www.telegram.me/karnaval_ir"
                  target="_blank"
                >
                  <span class="">
                    Join Us<i class="fa fa-telegram" />
                  </span>
                  <span class="" />
                </a>


              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
