import React, {Component} from 'react';
import {connect} from "react-redux";

class HomeContainer extends Component {
  render() {
    return (
      <div className="container py-3">
        <div className="row">
          <div className="input-group">
            <input className="form-control" placeholder={this.props.placeholder}/>
            <button className="btn btn-secondary input-group-append">SEarch</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state,props)=> ({
    placeholder:props.match.params.keyword
  }),
  dispatch => ({})
)(HomeContainer);
