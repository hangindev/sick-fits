import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import User, { CURRENT_USER_QUERY } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <User>
        {({ data: { me }, loading }) => {
          if (loading) return null;
          return (
            <Mutation
              mutation={ADD_TO_CART_MUTATION}
              variables={{
                id,
              }}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
              onError={error => alert(error.message.replace("GraphQL error: ",""))}
            >
              {(addToCart, { loading }) => (
                <button disabled={loading} onClick={() => {
                    if(!me) {
                      alert("Please sign in. 😉");
                      return;
                    }
                    addToCart();
                  }
                }>
                  Add{loading && 'ing'} To Cart 🛒
                </button>
              )}
            </Mutation>
          )}
        }
      </User>
    );
  }
}
export default AddToCart;
export { ADD_TO_CART_MUTATION };
