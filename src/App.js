import React, { Component }from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {
        name:'Mazda',
        year: 2011,
        color: 'blue'
      },
      {
        name:'Ford',
        year: 2009,
        color: 'yellow'
      },
      {
        name:'Suzuki',
        year: 2001,
        color: 'red'
      }
    ],
    pageTitle: 'React components',
    showCars: false
  }
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  onChangeName(name , index) {
    const car = this.state.cars[index]
    car.name = name

    const cars = [...this.state.cars]
    cars[index] = car

    this.setState({
      cars:cars
    })

  }

  deleteHandler(index) {
      let cars = this.state.cars.concat();
      cars.splice(index,1)

      this.setState({cars:cars})
  }

  handleInput = (event) => {
    console.log(event.target.value,'changed')
    this.setState({
      pageTitle: event.target.value
    })
  }

  changeTitleHandler = (newTitle) => {

    this.setState({
      pageTitle: newTitle
    })
  }

  render() {
    console.log('render')
    const divStyle = {
        textAlign : 'center'
    }
    const cars = this.state.cars;

    return (
          <div style={divStyle}>
            <h1>{this.state.pageTitle}</h1>
            <input type="text" onChange={this.handleInput}/>
            <button onClick={this.toggleCarsHandler}>Toggle cars</button>
            { this.state.showCars ? 
                  cars.map((item,index) => 
                    <Car
                      onChangeField={(event) => this.onChangeName(event.target.value,index)}
                      key={index}
                      name={item.name} 
                      year={item.year}
                      onDelete={this.deleteHandler.bind(this,index)}
                      onChangeTitle={() => this.changeTitleHandler(item.name)}>
                        <p style={{color: item.color }}>COLOR</p>
                    </Car>) 
                    :
                    null
            }
          </div>
        );
  }
}

export default App;
