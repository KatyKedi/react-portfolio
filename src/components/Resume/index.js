import React from 'react'
import { Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


const Resume = () => {
    const docs = [{ uri: require("./Resume.pdf") }];
    return (
        <Row>
            <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
        </Row>
    )
}
export default Resume