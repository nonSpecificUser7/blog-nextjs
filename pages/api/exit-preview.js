const exitPreview = (_, res) => {
    res.clearPreviewData()
    res.writeHead(307, { location: '/' })
    res.end()
}

export default exitPreview
