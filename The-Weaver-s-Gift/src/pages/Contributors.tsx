import React from 'react';
import GitHubUserCard from "../components/GitHubUserCard";

const Contributors: React.FC = () => {
  return (
      <main>
        <div>
          <GitHubUserCard username="D-Binara" />
          <GitHubUserCard username="Matheus-Parreira" />
        </div>
      </main>
  );
};

export default Contributors;
