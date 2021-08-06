module.exports.init = userDataSource => ({
  getUsers: () => userDataSource.findAll()
});
