/**
 * Created by areshytko on 04.08.16.
 */

import React from 'react';
import watson from 'file!../css/watson.png'

class DetailsWindow extends React.Component {
  render() {
    return (
      <div> { this.props.isReport ?
          <iframe src={this.props.dataUrl}></iframe> :
          <div>
            <img src={watson}/>
          </div>
      } </div>
    );
  }
}

DetailsWindow.propTypes = {};
DetailsWindow.defaultProps = {};

export default DetailsWindow;
