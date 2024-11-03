import './module.css';

const Profile = (props) =>
{
    return (
        <>
            <div className={`profileCard`}>
                <img className="profileCard-avatar" src={props.avatar} alt={`${props.username} Avatar`}/>
                <h2 className="profileCard-username">{props.username}</h2>
                <h3 className="profileCard-tag">{props.tag}</h3>
                <p className="profileCard-city">{props.location}</p>
                <ul className="profileCard-stats">
                    <li className="profileCard-stat">
                        <span className="stat-label">Followers</span>
                        <span className="stat-value">{props.stats.followers}</span>
                    </li>
                    <li className="profileCard-stat">
                        <span className="stat-label">Views</span>
                        <span className="stat-value">{props.stats.views}</span>
                    </li>
                    <li className="profileCard-stat">
                        <span className="stat-label">Likes</span>
                        <span className="stat-value">{props.stats.likes}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}


export default Profile;