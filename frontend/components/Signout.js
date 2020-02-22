import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {removeToken} from "../lib/auth"

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => (
  <Mutation mutation={SIGN_OUT_MUTATION} >
    {signout => <button onClick={() => {
        removeToken();
        signout();
        window.location = '/';
    }}>
      Sign Out
    </button>}
  </Mutation>
);
export default Signout;
