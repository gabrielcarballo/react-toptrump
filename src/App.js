import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange(event) {
    const userInputValue = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({
      [event.target.name]: userInputValue,
    }, () => {
      const { cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage } = this.state;
      const MAX = 210;
      const MIN = 90;
      if (cardName !== ''
      && cardImage !== ''
      && cardDescription !== ''
      && Number(+cardAttr1) <= MIN
      && Number(+cardAttr2) <= MIN
      && Number(+cardAttr3) <= MIN
      && Number(+cardAttr1) >= 0
      && Number(+cardAttr2) >= 0
      && Number(+cardAttr3) >= 0
      && (Number(+cardAttr1) + Number(+cardAttr2) + Number(+cardAttr3)) <= MAX) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
