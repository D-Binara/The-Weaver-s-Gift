import React from "react";
import GitHubUserCard from "../components/GitHubUserCard";

const Contributors: React.FC = () => {
  return (
    <main className="min-h-screen">
      <div className=" flex justify-center gap-10 py-10 flex-wrap">
        <GitHubUserCard username="D-Binara" />
        <GitHubUserCard username="Matheus-Parreira" />
          <GitHubUserCard username="ChaudaryHammad" />
          <GitHubUserCard username="trungnguyenM01" />
          <GitHubUserCard username="nsrabt" />
          <GitHubUserCard username="HtcYlmz" />
      </div>
    </main>
  );
};

export default Contributors;
