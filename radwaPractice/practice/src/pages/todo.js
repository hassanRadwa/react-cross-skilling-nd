import React, {Component} from 'react'
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList'
import Priority from '../constants/priority'

export default class TodoPage extends Component {
    //creating new state
    constructor(props){
        super(props)
        this.state = {
            todos: [
                { id: 1, text: 'Learn React', completed: true, priority:Priority.LOW}
              ]
        };
    }
    handleAddTodo = (text,priority) => {
        this.setState({
            todos: [...this.state.todos,
            {
                id:Date.now().toString(),
                text,
                priority,
                completed: false
            }]
        });
    };
    render() {
        return (
            <section className='dashboard-page main-page'>
                <header className='page-header-container'>
                    <h1>TodoList</h1>
                </header>
                <AddTodoForm handleAddTodo={this.handleAddTodo}/>
                <TodoList todos={this.state.todos} />
            </section>
        )
    }
}