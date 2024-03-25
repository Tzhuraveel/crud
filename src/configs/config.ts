import * as process from 'process';

export default () => ({
  mongo: {
    url: process.env.DATABASE_URL,
  },
});
