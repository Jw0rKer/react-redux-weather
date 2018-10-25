import React, {Component} from 'react';
import {connect} from "react-redux";
import {City} from 'jworker/components/cityComponent';
import * as cityActions from 'jworker/actions/cityActions';

class HomeContainer extends Component {
    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div className="container py-3">
                <div className="row">
                    <div className="input-group">
                        <City name={this.props.name}
                              weatherIcon={this.props.weatherIcon}
                              temp={this.props.temp}
                              pressure={this.props.pressure}
                              humidity={this.props.humidity}
                              min={this.props.min}
                              max={this.props.max}
                              loading={this.props.loading}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state, props) => ({
        placeholder: props.match.params.keyword,
        ...state.city
    }),
    dispatch => ({
        init() {
            dispatch(cityActions.load('/current/1'));
        }
    })
)(HomeContainer);
