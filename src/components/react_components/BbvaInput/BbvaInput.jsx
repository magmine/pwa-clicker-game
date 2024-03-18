import React from "react";
import { BbvaInputWC } from "../../lit_components/bbva-input/bbva-input";
import { createComponent } from "@lit/react";

const BbvaInput = createComponent({
    tagName: "bbva-input",
    elementClass: BbvaInputWC,
    react: React,
});

export default BbvaInput;
