const FriendList = (props) => {
    return (
        <>
            <div className="friendCard">
                <img src={props.avatar} alt={`${props.name}'s Avatar`} className="friendCard-avatar" />
                <h2 className="friendCard-name">{props.name}</h2>
                <p className={`frendCard-status` + ` ` + `${props.isOnline ? "friendCard-online" : "friendCard-offline" }`}>{ props.isOnline ? "Online" : "Offline" }</p>
            </div>
        </>
    )
}

export default FriendList;