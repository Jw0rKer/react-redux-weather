import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Search} from "../components/searchComponent";
import {City} from "../components/cityComponent";
import * as SearchAction from 'jworker/actions/searchActions';

class SearchPage extends Component {
    componentWillMount() {
        this.props.load(this.props.match.params.keyword);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.keyword != nextProps.match.params.keyword)
            this.props.load(this.props.match.params.keyword);
    }

    render() {
        return <div className="m-3">
            <div className="row justify-content-center">
                <div className="col-3">
                    <Search onSearch={this.props.onSearch} defaultValue={this.props.match.params.keyword}/>
                </div>
            </div>
            <div className="row my-3">
                {Object.values(this.props.searchList).map(m =>
                    <div className="col-3">
                        <City name={m.name}
                            // weatherIcon={m.weatherIcon}
                            // temp={m.temp}
                            // pressure={m.pressure}
                            // humidity={m.humidity}
                            // min={m.min}
                            // max={m.max}
                            // loading={m.loading}
                        />
                    </div>
                )}
            </div>
        </div>
    }
}


export default withRouter(connect(
    (state, props) => ({
        searchList: state.search
    }),
    (dispatch, props) => ({
        load(keyword) {
            dispatch(SearchAction.search(keyword));
        },
        onSearch(keyword) {
            if (keyword)
                props.history.push(`/search/${keyword}`);
            else
                props.history.push('/');
        }
    })
)(SearchPage));



