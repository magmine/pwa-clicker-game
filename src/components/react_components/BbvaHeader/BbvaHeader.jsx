import React from "react";
import { createComponent } from "@lit/react";
import { BbvaHeaderWC } from "../../lit_components/bbva-header/bbva-header";

const BbvaHeader = createComponent({
    tagName: "bbva-header",
    elementClass: BbvaHeaderWC,
    react: React,
});

export default BbvaHeader;