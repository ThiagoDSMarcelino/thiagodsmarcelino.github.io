import React from "react";

import { ProgressBarContainer, Filled, Label } from './styled';

export default function ProgressBar(props) {
    const { bgcolor, completed } = props;

    return (
        <ProgressBarContainer>
          <Filled bgcolor={bgcolor} completed={completed}>
            <Label>{completed}</Label>
          </Filled>
        </ProgressBarContainer>
    );
}