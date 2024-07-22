module.exports = {
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!axios)/'],
};
