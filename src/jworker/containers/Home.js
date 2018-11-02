import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import {City} from 'jworker/components/cityComponent';
import {Search} from 'jworker/components/searchComponent';
import * as CityAction from 'jworker/actions/cityActions';

class HomeContainer extends Component {
    componentWillMount() {
        this.props.init();
    }

    render() {
        return <div className="m-3">
            <div className="row justify-content-center">
                <div className="col-3">
                    <Search onSearch={this.props.onSearch} placeholder="Search"/>
                </div>
            </div>
            <div className="row my-3">
                {Object.values(this.props.cityList).map(m =>
                    <div className="col-3">
                        <City name={m.name}
                              weatherIcon={m.weatherIcon}
                              temp={m.temp}
                              pressure={m.pressure}
                              humidity={m.humidity}
                              min={m.min}
                              max={m.max}
                              loading={m.loading}/>
                    </div>
                )}
            </div>
        </div>
    }
}

export default withRouter(connect(
    (state, props) => ({
        cityList: state.city
    }),
    (dispatch, props) => ({
        init() {
            dispatch(CityAction.loadAll());
        },
        onSearch(keyword) {
            if (keyword)
                props.history.push(`/search/${keyword}`);
            else
                props.history.push('/');
        }
    })
)(HomeContainer));
