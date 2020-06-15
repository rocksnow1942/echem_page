import React, { Component } from 'react'

export default class Test extends Component {
    static displayName = 'Test class static name'
    


    shouldComponentUpdate(){return false}

    render() {
        console.log(this.props.children);
        let arr = [1, 2, 3]
        let item = arr.map((i) => <li key={i.toString()} > {i}</li >);
        console.log(item)
        // return arr.map((i) => <li key={i.toString()} > {i}</li >)

        return (
            <>
            {item}
            </>
        )
    }
}
