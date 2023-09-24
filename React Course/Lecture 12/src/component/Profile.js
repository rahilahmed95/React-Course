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
          <div className="flex flex-col justify-center items-center my-28">
            <img className="w-[30%]" src={this.state.userData?.avatar_url} alt="avatar-logo" />
            <div className="my-8 text-md">
              <p className="mb-3">
                <b>Name: </b>
                {this.state.userData?.name}
              </p>
              <p className="mb-3">
                <b>Bio: </b>
                {this.state.userData?.bio}
              </p>
              <p className="mb-3">
                <b>Followers: </b>
                {this.state.userData?.followers}
              </p>
              <p className="mb-3">
                <b>Following: </b>
                {this.state.userData?.following}
              </p>
              <p className="mb-3">
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
