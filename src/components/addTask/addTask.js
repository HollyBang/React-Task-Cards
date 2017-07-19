import React, { Component } from 'react';
import firebase from '../../firebase';
import ItemsLi from './../items/items';


export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: '',
      taskTarget: '',
      items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          taskTitle: items[item].taskTitle,
          taskTarget: items[item].taskTarget
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  handleEdit(itemId, title, target) {
    const itemRef = firebase.database().ref(`/items/${itemId}`).set({
      taskTitle: title,
      taskTarget: target
    });

  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      taskTitle: this.state.taskTitle,
      taskTarget: this.state.taskTarget
    }

    itemsRef.push(item);
    this.setState({
      taskTitle: '',
      taskTarget: ''
    });
  };
  render() {
    return (
      <div className='container'>
        <section className='add-task'>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.taskTitle} type="text" name="taskTitle" placeholder="Title" />
            <input onChange={this.handleChange} value={this.state.taskTarget} type="text" name="taskTarget" placeholder="Target" />
            <button className="button raised hoverable">
              <div className="anim"></div><span>Add Task</span>
            </button>
          </form>
        </section>
        <ItemsLi handleEdit={this.handleEdit} removeItem={this.removeItem} data={this.state.items} />
      </div>
    )
  }
}