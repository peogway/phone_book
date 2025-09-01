const Notification = ({ message, className }) => {
	return <>{message && <div className={className}>{message}</div>}</>
}

export default Notification

