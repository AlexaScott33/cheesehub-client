import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }
    

    render () {
        // console.log(this.props)
        const cheeseList = this.props.cheeses.map((cheese, index) => (
            <li key={index}>
                {cheese}
            </li>
        ))
      return (
        <div>
            <ul>
             {cheeseList}
            </ul>
      </div>
      );
    }
}

const mapStateToProps = (state) => ({
    cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);

