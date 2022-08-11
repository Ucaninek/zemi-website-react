function Tag({ text, classes }) {
    return (
        <div className={`px-3 rounded-full border ${classes}`}>{text}</div>
    )
}

export default Tag;