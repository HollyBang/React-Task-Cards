import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Modal from 'react-awesome-modal';
import FontAwesome from 'react-fontawesome';

export default class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: '',
      taskTitle: '',
      taskTarget: '',
      visible: false
    };
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  openModal(itemId) {
    this.setState({
      itemId,
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    const card = this.props.myItems.data.map((item) => {
      return (
        <li key={item.id}>
          <h3>{item.taskTitle}</h3>
          <Modal
            visible={this.state.visible}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <section className='add-task task-modal'>
              <form >
                <input onChange={this.handleChange} value={this.state.taskTitle} type="text" name="taskTitle" placeholder="Title" />
                <input onChange={this.handleChange} value={this.state.taskTarget} type="text" name="taskTarget" placeholder="Target" />
                <button className="button raised hoverable" onClick={() => this.props.myItems.handleEdit(this.state.itemId, this.state.taskTitle, this.state.taskTarget)}>
                  <div className="anim"></div>
                  <span>Aplly</span>
                </button>
              </form>
            </section>
          </Modal>


          <p>Your target: {item.taskTarget}</p>
          <button className="button raised hoverable open" onClick={() => this.openModal(item.id)}>
            <div className="anim"></div>
           <span className="textBtn">Edit</span>
            <span className="iconBtn">
              <FontAwesome
                className='super-crazy-colors'
                name='pencil'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </span>
          </button>
          <button onClick={() => this.props.myItems.removeItem(item.id)} className='button raised hoverable del'>
            <div className="anim"></div>
            <span className="textBtn">Delete Card</span>
            <span className="iconBtn">
              <FontAwesome
                className='super-crazy-colors'
                name='trash'
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
            </span>
          </button>
        </li>
      )
    });
    return (
      <CSSTransitionGroup
        component="ul"
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {card}
      </CSSTransitionGroup>
    );
  }
}
