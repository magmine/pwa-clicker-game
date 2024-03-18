import React from "react";
import { BbvaButtonWC } from "../../lit_components/bbva-button/bbva-button";
import { createComponent } from "@lit/react";

const BbvaButton = createComponent({
    tagName: "bbva-button",
    elementClass: BbvaButtonWC,
    react: React,
});

export default BbvaButton;
