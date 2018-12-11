import React, { Component, Suspense } from "react";
import { Route, Link } from "react-router-dom";
import Profiletwo from "../profileroutes/profiletwo";

const RightCoomponent = React.lazy(() => import("../profileroutes/profileone"));

function Topics() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RightCoomponent />
    </Suspense>
  );
}

class Profile extends Component {
  render() {
    return (
      <div>
        <p>Hello I'm Profile</p>
        <button>
          <Link to={`/profile/one`}>profile-One</Link>
        </button>
        <Route path="/profile/one" component={Topics} />
        <Route path="/two" component={Profiletwo} />
      </div>
    );
  }
}

export default Profile;
