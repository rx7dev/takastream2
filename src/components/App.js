import React from "react";
import NavBar from "./NavBar";
import twitch from "../apis/twitch";
import StreamList from "./StreamList";
import StreamDetail from "./StreamDetail";
import TopGamesList from "./TopGamesList";
import TopGamesDetail from "./TopGamesDetail";
import UsersDetail from "./UsersDetail";
import UsersList from "./UsersList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    games: [],
    selectedGame: null,
    users: [],
    selectedUser: null
  };

  componentDidMount() {
    this.onTermSubmit("get");
  }

  onTermSubmit = async term => {
    const getusers = await twitch.get("/users", {
      params: {
        login: term
      }
    });

    const topgames = await twitch.get("/games/top", {
      params: {
        first: 11
      }
    });
    const response = await twitch.get("/streams", {
      params: {
        first: 6
      }
    }); //users not implemented yet

    this.setState({
      videos: response.data.data,
      selectedVideo: response.data.data[0],
      games: topgames.data.data,
      selectedGame: topgames.data.data[0],
      users: getusers.data.data,
      selectedUser: getusers.data.data[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  onTopGamesSelect = game => {
    this.setState({ selectedGame: game });
  };

  onUsersSelect = user => {
    this.setState({ selectedUser: user });
  };

  render() {
    return (
      <div className="fluid-container">
        <NavBar onFormSubmit={this.onTermSubmit} />
        <div className="notice">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ts-prime-link">Prime</div>
                Lorem ipsum dolor sit amet, sed in viderer debitis fabellas,
                quis tempor propriae et
                <div className="ts-prime-trial">Start Your Free Trial</div>
              </div>
            </div>
          </div>
        </div>
        <StreamDetail video={this.state.selectedVideo} />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cat-title">
                Featured Categories
                <div className="cat-subtitle">
                  Categories people are watching now
                </div>
              </div>
            </div>
          </div>
        </div>
        <TopGamesDetail game={this.state.selectedGame} />
        <TopGamesList
          onTopGameSelect={this.onTopGameSelect}
          games={this.state.games}
        />
        <UsersDetail game={this.state.selectedUSer} />
        <UsersList onUserSelect={this.onUsersSelect} users={this.state.users} />
        <div className="social-bar">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="social-title">Follow the latest news</div>
                <div className="col-12">
                  <button className="ts-btn-social" href="/facebook">
                    Facebook
                  </button>
                  <button className="ts-btn-social" href="/twitter">
                    Twitter
                  </button>
                  <button className="ts-btn-social" href="/blog">
                    Official Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cat-title">
                Top Live Channels
                <div className="cat-subtitle">
                  Broadcasters people are watching now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <StreamList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="footer-link">
                  <i className="fa-lg fa-fw fab fa-github-square" />
                  <a
                    href="https://github.com/rx7dev"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    github.com/rx7dev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
