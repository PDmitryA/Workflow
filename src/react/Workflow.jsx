import React from 'react';
import './Workflow.scss';
import Card from './components/Card.jsx';
import {connect, Provider} from 'react-redux';
import actions from '../redux/actions.js';
import store from '../redux/stores.js';


const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(class Workflow extends React.Component {

  addStage = (e) => {
    e.preventDefault();
    const stageName = prompt('Введите название стадии', `Стадия`);
    this.props.dispatch(actions.CREATE_CARD(stageName));
  };

  addTask = (e) => {
    e.preventDefault();
    const taskName = prompt('Введите название новой задачи', 'Новая задача');
    this.props.dispatch(actions.CREATE_TASK(taskName));
  };

  render() {
    const {cards} = this.props;

    return (
      <React.Fragment>
        <header className="header">
          <p className="header__title">Workflow</p>
          <button className="button" onClick={this.addStage}>Добавить стадию</button>
          <button className="button" onClick={this.addTask}>Добавить задачу</button>
        </header>
        <div className="content">
          {cards.map((_, i) => {
            return <Provider store={store} key={i}><Card stage={i} /></Provider>
          })}
        </div>
      </React.Fragment>
    )
  }
})