import React from "react";
import ShimmerDetails from "./ShimmerDetails.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.github.com/users/rahilahmed20");
      const data = await response.json();
      console.log(data);
      this.setState({ userData: data });
    } catch (err) {
      console.log(err);
      console.log("Something went wrong while fetching data from api");
    }
  }

  render() {
    return (
      <>
        {this.state.userData ? (
          <div className="profile-section">
            <img src={this.state.userData?.avatar_url} alt="avatar-logo" />
            <div className="profile-data">
              <p>
                <b>Name: </b>
                {this.state.userData?.name}
              </p>
              <p>
                <b>Bio: </b>
                {this.state.userData?.bio}
              </p>
              <p>
                <b>Followers: </b>
                {this.state.userData?.followers}
              </p>
              <p>
                <b>Following: </b>
                {this.state.userData?.following}
              </p>
              <p>
                <b>Location: </b>
                {this.state.userData?.location}
              </p>
            </div>
          </div>
        ) : (
          <ShimmerDetails />
        )}
      </>
    );
  }
}

export default Profile;
