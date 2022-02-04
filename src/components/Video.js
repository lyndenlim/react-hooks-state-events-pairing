function Video({embedUrl, title, views, createdAt}) {
    return (
        <>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <small>{`${views} Views`} | {`Uploaded ${createdAt}`}</small>
            <br></br>
        </>
    )
}

export default Video