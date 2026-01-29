export default {
  branches: [
    'main',
    { name: 'staging', prerelease: true },
    { name: 'dev', prerelease: true },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
