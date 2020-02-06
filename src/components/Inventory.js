import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import base, { firebaseApp } from "../base";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    updateFish: PropTypes.func,
    delete: PropTypes.func
  };

  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    // OPTIONAL: Uncomment and auth/firebase with Cypress
    // firebase.auth().onAuthStateChanged(user => {
    //   if(user) {
    //     this.authHandler({user})
    //   }
    // });
  }

  // OPTIONAL: Uncomment and auth/firebase with Cypress
  // authHandler = async (authData) => {
  //   const store = await base.fetch(this.props.storeID, {content: this});
  //   if (!store.owner ) {
  //     await base.post(`${this.props.storeID}/owner`, {
  //       data: authData.user.uid
  //     });
  //   }
  //   this.setState({
  //     uid: authData.user.uid,
  //     owner: store.owner || authData.user.uid
  //   });
  // };

  // OPTIONAL: Uncomment and auth/firebase with Cypress
  // authenticate = provider => {
  //   const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  //   firebaseApp
  //     .auth()
  //     .signInWithPopup(authProvider)
  //     .then(this.authHandler);
  // };

  // OPTIONAL: Uncomment and auth/firebase with Cypress
  // logout = async () => {
  //   await firebase.auth().signOut();
  //   this.setState({ uid: null })
  // };

  render() {
    // OPTIONAL: Uncomment and auth/firebase with Cypress
    // const logout = <button onClick={this.logout}>Log out!</button>

    // Check if the user is logged in
    // OPTIONAL: Uncomment and auth/firebase with Cypress
    // if (!this.state.uid) {
    //   return (<Login authenticate={this.authenticate} />);
    // }

    // Check they are not the owner of the store
    // OPTIONAL: Uncomment and auth/firebase with Cypress
    // if (this.state.uid != this.state.owner ) {
    //   return (
    //     <div>
    //       <p>Sorry you are not the owner</p>
    //       {logout}
    //     </div>
    //   );
    // }

    // If they user is logged in and matched
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/* {logout} */}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button type="button" onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
