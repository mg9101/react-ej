import React from 'react';
import './App.css';
import TrendsGrid from './TrendsGrid'
import { RouteComponentProps, withRouter } from "react-router";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      columns: 6
    }
  }

  componentWillMount() {
    fetch('https://api.mercadolibre.com/trends/MLA')
        .then((res) => {return res.json()})
        .then((data) => {
          setInterval( () => {
               this.setState({
                items: this.shuffle(this.itemsMatrix(data)),
                columns: 6
              });
          }
          , 2000);
        })
        .catch(console.log)
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  itemsMatrix(data) {
    let matrix = [];
    let itemRow = [];
    data.map((resultItem, j) => {
      if ((j % this.state.columns) === 0 && j !== 0){
        matrix.push(itemRow);
        itemRow = [];
        itemRow.push(resultItem);
      }else {
        itemRow.push(resultItem);
      }
    });
    return matrix;
  }


  render(){
    return (
      <TrendsGrid matrix={this.state.items} columnas={this.state.columns}/>
    );
  }
}

export default App;
