import React from 'react';
import RepoItem from './repoItem';

const Repos = ({ repos }) => {
  return (
    <div className="card text-center">
      <h3>User Repositories</h3>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
