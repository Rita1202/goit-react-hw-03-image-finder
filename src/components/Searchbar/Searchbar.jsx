import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onChangeHandler = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  onFormHandler = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Empty string');
      return;
    }

    this.props.onSubmitHandler(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.onFormHandler}>
          <div className={css.wrapper}>
            <button type="submit" className={css.button}>
              <span className={css.buttonLabel}></span>
            </button>
            <input
              onChange={this.onChangeHandler}
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </div>
        </form>
      </header>
    );
  }
}
