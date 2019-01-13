import React from "react";
import "./main.css";

class NavBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="fluid-container">
        <nav className="navbar main-nav">
          <div className="float-left">
            <span className="fa-lg fa-fw fas fa-tv" />
            <button className="ts-btn-left" type="submit">
              <a href="/directory">Browse</a>
            </button>
            <button className="ts-btn-left" type="submit">
              <a href="/download">Get Desktop</a>
            </button>
            <button className="ts-btn-left" type="submit">
              <a href="/prime">Try Prime</a>
            </button>
            <button className="ts-btn-left" type="submit">
              <a href="/store">Store</a>
            </button>
          </div>
          <div className="float-left">
            <form onSubmit={this.onFormSubmit} className="">
              <div className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  value={this.state.term}
                  onChange={this.onInputChange}
                  size="40"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="float-right">
            <button className="ts-btn" type="submit">
              Log in
            </button>
            <button className="ts-btn" type="submit">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
