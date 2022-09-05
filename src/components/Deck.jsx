import { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';

class Deck extends Component {
    render() {
        const { deckInstance } = this.props;
        console.log(deckInstance);

        return deck.map(({ cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
                cardImage, cardRare, cardTrunfo }) => {
                 const entireDeck =((<Card
                        cardName={cardName}
                        cardDescription={cardDescription}
                        cardAttr1={cardAttr1}
                        cardAttr2={cardAttr2}
                        cardAttr3={cardAttr3}
                        cardImage={cardImage}
                        cardRare={cardRare}
                        cardTrunfo={cardTrunfo}
                    />)

                 }
            );
        }
    }
export default Deck;
