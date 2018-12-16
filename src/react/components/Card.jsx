import React from 'react';
import { connect } from 'react-redux';
import './Card.scss';
import actions from '../../redux/actions.js';


const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(class Card extends React.Component {

  onMoveTask = (e) => {
    e.preventDefault();
    const { stage } = this.props;
    this.props.dispatch(actions.MOVE_TASK(stage))
  };

  render() {
    const {cards, stage} = this.props;
    const card = cards[stage];

    return (
      <div className="card">
        <h3 className="card__title">{card.title}</h3>
        <div className="card__tasks">
          {(card.tasks || []).map((task, i) => {
            return (<p key={i} className="card__task">{task.title}</p>)
          })}
        </div>
        <button className="button card__button" onClick={this.onMoveTask}>
          Перевести&nbsp;задачу на&nbsp;следующую&nbsp;стадию
        </button>
      </div>
    )
  }
})