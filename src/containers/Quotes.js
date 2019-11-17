import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuotes = () => this.props.quotes.map( quote => <QuoteCard quote={ quote } removeQuote={ this.props.removeQuote } />);


  render() {

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               { this.renderQuotes() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

//const mapDispatchToProps = dispatch => {
//  return {
//    removeQuote: () => { dispatch(removeQuote()) }
//  }
//}

export default connect(mapStateToProps, { removeQuote })(Quotes);
