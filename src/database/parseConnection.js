var Parse = require('parse').Parse;

Parse.initialize("parsecdb");
Parse.serverURL = 'https://parsecdb.herokuapp.com/parse'

export default Parse;