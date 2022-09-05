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
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
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
    }, this.enablingSaveButton());
  }

  enablingSaveButton = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage } = this.state;
   /*  const MAX = 210;
    const MIN = 90;
    if (cardName.length > 0
    && cardImage.length > 0
    && cardDescription.length > 0
    && cardAttr1 <= MIN
    && cardAttr2 <= MIN
    && cardAttr3 <= MIN
    && cardAttr1 > 0
    && cardAttr2 > 0
    && cardAttr3 > 0
    && ((cardAttr1 + cardAttr2 + cardAttr3) < MAX)) */
    console.log(cardName);
    if (cardName.length > 5) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.onInputChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
