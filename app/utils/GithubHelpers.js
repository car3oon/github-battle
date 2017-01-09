import axios from 'axios';

const CLIENT_ID = '81d8f190c826e7009811';
const SECRET_ID = '46c2d8dc9202d8708aec7cd2a8a7e517c94b5542';
const PARAM = "?client_id=" + CLIENT_ID + "&client_secret" + SECRET_ID; 

var getUserInfo = (username) => {
  return axios.get('https://api.github.com/users/' + username + PARAM);
} 

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

export default helpers;
