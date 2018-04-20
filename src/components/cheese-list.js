import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { fetchCheeses, addCheese } from '../actions/cheese';

export class CheeseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }
    
    render () {
        // console.log(this.props)
        //arr of obj - cheeses
        const cheeseList = this.props.cheeses.map((cheese, index) => (
            <li key={index}>
                {cheese.name}
            </li>
        ))
      return (
        <div>
            <Header />
            <form onSubmit={(e) => {
                e.preventDefault();

                const cheeseValue = e.target.cheeseInput.value;
                console.log(cheeseValue)
                this.props.dispatch(addCheese(cheeseValue))
            }}>
                <label>Add New Cheese</label>
                <input type="text" name="cheeseInput"></input>
                <button type="submit">Submit</button>
            </form>
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

