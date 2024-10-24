import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/GitHubUserCard.css';

interface GitHubUserCardProps {
    username: string;
}

interface GitHubUser {
    login: string;
    avatar_url: string;
    html_url: string;
}

const GitHubUserCard: React.FC<GitHubUserCardProps> = ({ username }) => {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubUser = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                setError('User not found');
                setLoading(false);
            }
        };

        fetchGitHubUser();
    }, [username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="github-user-card">
            {user && (
                <div className="card-content">
                    <img className="avatar" src={user.avatar_url} alt={user.login} />
                    <h2 className="username">{user.login}</h2>
                    <a className="github-user-card-a" href={user.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default GitHubUserCard;
