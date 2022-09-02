import { Component } from 'react';

class Form extends Component {
/*   constructor() {
    super()
  }
 */
  render() {
    return (
      <form className="form">
        <label htmlFor="cardName">
          Card Name
          <input type="text" data-testid="name-input" name="cardName" />
        </label>
        <label htmlFor="cardDescription">
          Card Description
          <input type="textarea" data-testid="description-input" name="cardDescription" />
        </label>
        <label htmlFor="firstAtt">
          First Attribute
          <input type="number" data-testid="attr1-input" name="firstAtt" />
        </label>
        <label htmlFor="secondAtt">
          Second Attribute
          <input type="number" data-testid="attr2-input" name="secondAtt" />
        </label>
        <label htmlFor="thirdAtt">
          Third Attribute
          <input type="number" data-testid="attr3-input" name="thirdAtt" />
        </label>
        <label htmlFor="imageURL">
          Card Image URL
          <input type="text" data-testid="image-input" name="imageURL" />
        </label>
        <label htmlFor="cardRarity">
          Card Rarity
          <select data-testid="rare-input" name="cardRarity">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="isCardTopTrump">
          Super Top Trump ?
          <input type="checkbox" data-testid="trunfo-input" name="isCardTopTrump" />
        </label>
        <button type="button" data-testid="save-button" name="saveForm">Salvar</button>
      </form>
    );
  }
}

export default Form;
