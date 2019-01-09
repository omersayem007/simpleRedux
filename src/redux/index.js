import axios from 'axios';
const apiUrl ='https://jsonplaceholder.typicode.com/users';

const fetchPosts = (users) => {
    return {
      type: 'FETCH_USER',
      users
    }
  };
  
 const fetchAllPosts = () => {

    return (dispatch) => {
      return  axios.get(apiUrl)
        .then(response => {
          dispatch(fetchPosts(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };

  };

export default fetchAllPosts;