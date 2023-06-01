import React from 'react'
import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


const Resume = () => {
    const docs = [{ uri: require("../assets/Resume.pdf") }];
    return (
        <Container>
            <Row>
                <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
            </Row>
        </Container>
    )
}
export default Resume