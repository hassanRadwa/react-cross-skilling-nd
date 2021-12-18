import React, {Component} from 'react'
import SelectComponent from './SelectComponent'
import Priority from '../constants/priority'

export default class AddTodoForm extends Component {
    constructor(props){
        super(props)
        this.state={
            text:'',
            priority: Priority.LOW
        }
    }
    handleTextChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            text: e.target.value
        }));
    };
    handleChangePriority = (e) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                priority: e.target.value
            }
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const {text,priority} = this.state
        this.props.handleAddTodo(text,priority)
    };
    render(){
        //console.log(Object.entries(Priority))
        //console.log(Object.entries(Priority).map(([key,value])=>({key, value})))
        return(
            <form onSubmit={this.handleSubmit}>
                {JSON.stringify(this.state)}
                <input 
                type='text' 
                value={this.state.text} 
                onChange={this.handleTextChange}
                />
                <SelectComponent
                 name='priority'
                 label='priority'
                 value={this.state.priority}
                 options= {Object.entries(Priority).map(([key,value])=>({key, value}))} 
                 handleChange= {this.handleChangePriority}/>
            </form>
        )
    }
}
//options = [{key : 'x', value: 'y'},{key : 'x', value: 'y'}]
//input
//array of arrays: [['LOW','LOW'],['MEDIUM','MEDIUM'],[],[]]
//output should be
//[{key: 'LOW', value: 'LOW'},{key: 'MEDIUM', value: 'MEDIUM'},{},{}]