import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class AddCard extends Component {
  constructor(props) {
    super(props);
  };

 

  render() {
    const card = this.props.myItems.data.map((item) => {
      return (
        <li key={item.id}>
          <h3>{item.taskTitle}</h3>
          <div onClick={() => this.props.myItems.handleEdit(item.id) }>sadas</div>
          <p>Your target: {item.taskTarget}</p>
          <button onClick={() => this.props.myItems.removeItem(item.id)} className='button raised hoverable'>
            <div className="anim"></div>
            <span>Delete Card</span>
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
