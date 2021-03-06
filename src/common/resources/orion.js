// const basePath = '/v2/entities';
const basePath = (process && process.env && process.env.NODE_ENV === 'development') ?
  '/v2/entities' :
  'http://67.205.174.57:1026/v2/entities';

const orionActions = {
  list: { method: 'GET', url: `${basePath}` },
  post: { method: 'POST', url: `${basePath}` },
  get: { method: 'GET', url: `${basePath}{/id}` },
  update: { method: 'PUT', url: `${basePath}{/id}` },
};

export const orionResource = resource => resource(`${basePath}`, {}, orionActions);

export default orionResource;
