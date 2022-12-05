import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.counter
        }

        // bind() - привязывает контекст к функции
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.random = this.random.bind(this)
        this.reset = this.reset.bind(this)


    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
        if (this.state.count >= 30) {
            this.setState({
                count: this.state.count = 30
            })
        }
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        })

        if (this.state.count <= 0) {
            this.setState({
                count: this.state.count = 0
            })
        }


    }

    random() {
        const min = 1;
        const max = 100;
        const rand = Math.floor(Math.random() * (max - min + 1) + min);
        this.setState({ count: this.state.count + rand });
    }

    reset() {
        this.setState({
            count: this.state.count = 0
        })
    }




    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.random}>random</button>
                <button onClick={this.reset}>reset</button>

            </div>
        )
    }
}

export default Counter