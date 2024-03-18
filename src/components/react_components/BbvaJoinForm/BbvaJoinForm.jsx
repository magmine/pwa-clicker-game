import React from "react";
import { JoinFormWC } from "../../lit_components/bbva-join-form/bbva-join-form";
import { createComponent } from "@lit/react";

const BbvaJoinForm = createComponent({
    tagName: "bbva-join-form",
    elementClass: JoinFormWC,
    react: React,
});

export default BbvaJoinForm;