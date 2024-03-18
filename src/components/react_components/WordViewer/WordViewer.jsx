import React from "react";
import { createComponent } from "@lit/react";
import { WordViewerWC } from "../../lit_components/word-viewer/word-viewer";


const WordViewer = createComponent({
    tagName: "word-viewer",
    elementClass: WordViewerWC,
    react: React,
});

export default WordViewer;