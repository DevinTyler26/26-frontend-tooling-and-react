import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import Header from './components/header/header';
import './style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: 'This is the default message',
      first: '',
      second: '',
      firstItems: [],
      secondItems: [],
      messageItems: [],
    };
    this.handleCounterDecrement = this.handleCounterDecrement.bind(this);
  }

    handleCounterIncrement = () => {
      this.setState((previousState) => {
        if (typeof previousState.counter === 'string') {
          previousState.counter = parseInt(previousState.counter, 10);
        }
        return {
          counter: previousState.counter + 1,
        };
      });
    }

    handleCounterDecrement() {
      this.setState((previousState) => {
        return {
          counter: previousState.counter - 1,
        };
      });
    }

    setCounter = (event) => {
      const { value } = event.target;
      this.setState({ counter: value });
    }

    handleInputChange = (event) => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState((previousState) => {
        const firstItems = previousState.firstItems.concat(this.state.first);
        const secondItems = previousState.secondItems.concat(this.state.second);
        const messageItems = this.getIntersection(firstItems, secondItems);
        return {
          firstItems,
          secondItems,
          first: '',
          second: '',
          message: messageItems,
        };
      });
    }

    getIntersection = (arr1, arr2) => {
      const map = arr1.reduce((storage, current) => {
        if (!storage[current]) {
          storage[current] = true;
        }
        return storage;
      }, {});
      const message = arr2.filter(word => map[word]);
      if (message.length === 0) {
        return 'This is the default message';
      } 
      return message.join(', ');
    };

    render() {
      return (
        <div className="cowsay">
          <Header></Header>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="first">Type something for list #1</label>
            <input 
              type="text"
              name="first"
              value={ this.state.first }
              onChange={ this.handleInputChange }
            />
            <label htmlFor="second">Type something for list #2</label>
            <input 
              type="text"
              name="second"
              value={ this.state.second }
              onChange={ this.handleInputChange }
            />
            <button type="submit">Submit Cow</button>
          </form>
          <ul className="first-list">
              <h2>List #1</h2>
                {
                  this.state.firstItems.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
            <ul className="second-list">
              <h2>List #2</h2>
              { 
                this.state.secondItems.map((item, index) => <li key={index}>{item}</li>)
              }
            </ul>
            <pre>
              {
                cowsay.say({
                  text: this.state.message,
                })
              }
            </pre>
            <div className="counter">
              <h2>The current value of the counter is: { this.state.counter} </h2>
              <button onClick={ this.handleCounterIncrement}>Increment Counter!</button>
              <button onClick={ this.handleCounterDecrement}>Decrement Counter!</button>
              <input 
                type="number" onChange={ this.setCounter }
                value={ this.state.counter }
              />
          </div>
        </div>
      );
    }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App />, rootNode);
