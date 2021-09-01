import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div onSubmit={this.handleFormSubmit} className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
