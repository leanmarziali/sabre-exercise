import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { connect } from 'react-redux';

import Style from './Home.style.scss';
import {
    VIEW_HOME_TITLE,
    FILTER_AGE_PLACEHOLDER,
    FILTER_PLAYER_NAME_PLACEHOLDER,
    FILTER_POSITION_PLACEHOLDER
} from '../../utils/constants';
import {
    PLAYER_NAME,
    POSITION,
    AGE,
    FILTERS_DEFAULT_VALUES
} from '../../config/filters';
import { setFilters } from '../../actions';
import Header from '../../components/Header/Header';
import Players from '../../components/Players/Players';
import Filter from '../../components/Filter/Filter';

class Home extends Component {

    constructor() {
        super();
        this.state = Object.assign({},FILTERS_DEFAULT_VALUES);
    }

    onFilterHandler = (filter, value) => {
        // ES6 computed property syntax
        this.setState({ [filter]: value });
    };

    onSearchHandler = () => {
        this.props.searchPlayers(Object.assign({}, this.state));
    }

    render() {
        return (
            <div className={Style.home}>
                <Label size="lg">
                    { VIEW_HOME_TITLE }
                </Label>
                <Header onSearchCallback={ this.onSearchHandler }>
                    <Filter
                        config={ PLAYER_NAME }
                        placeholder={ FILTER_PLAYER_NAME_PLACEHOLDER }
                        onFilterCallback={ this.onFilterHandler }
                    />
                    <Filter
                        config={ POSITION }
                        placeholder={ FILTER_POSITION_PLACEHOLDER }
                        onFilterCallback={ this.onFilterHandler }
                    />
                    <Filter
                        config={ AGE }
                        placeholder={ FILTER_AGE_PLACEHOLDER }
                        onFilterCallback={ this.onFilterHandler }
                    />
                </Header>
                <Players />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => (
   {
       searchPlayers: (FILTERS) => {
           dispatch(setFilters(FILTERS));
       }
   }
);

export default connect(
    null,
    mapDispatchToProps
)(Home);
