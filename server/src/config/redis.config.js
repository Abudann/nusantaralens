import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_HOST,
});
redisClient.on('error', (err) => console.error('Redis Error', err));

await redisClient.connect();

export default redisClient;
