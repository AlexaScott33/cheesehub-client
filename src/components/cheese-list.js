import React from 'react';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.dispatch(fetchCheeses());
    }
    render () {
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

const mapStateToProps = state => ({
    cheeses: state.cheeses
});

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators( {
//       fetchCheeses: fetchCheeses
//     }, dispatch);
//   };

export default connect(mapStateToProps)(CheeseList);

