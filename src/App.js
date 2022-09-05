import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

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
      deck: [],
      hasTrunfo: false,
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
      if (cardName.length > 0
      && cardImage.length > 0
      && cardDescription.length > 0
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

  onSaveButtonClick = (p) => {
    const { cardTrunfo } = this.state;
    console.log(cardTrunfo);
    this.setState({
      hasTrunfo: cardTrunfo,
    });

    console.log(this.deck);
    console.log(p);
    this.setState((e) => ({
      deck: [...e.deck, p],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
