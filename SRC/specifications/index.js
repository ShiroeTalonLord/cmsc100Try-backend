import { readFileSync } from 'fs';


const {
  name: title,
  description,
  version,
  license
} = JSON.parse(readFileSync('package.json', 'utf8'));

const servers = [
  {
    url: 'http://localhost:8080',
    description: 'Local Development Server'
  }
];

/* c8 ignore start */
if (process.env.GITPOD_WORKSPACE_URL) {
  const [, gitpodUrl] = process.env.GITPOD_WORKSPACE_URL.split('https://');
  servers.unshift({
    url: `https://${process.env.PORT || 8080}-${gitpodUrl}`,
    description: 'Gitpod Development server'
  });
}
/* c8 ignore stop */

export const specification = {
  openapi: '3.1.0',
  servers,
  info: {
    description,
    version,
    title,
    license: {
      name: license,
      url: 'https://spdx.org/licenses/Apache-2.0.html'
    }
  },
  tags: [],
  externalDocs: {},
  components: {},
  security: []
};
