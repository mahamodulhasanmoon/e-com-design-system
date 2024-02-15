import React from "react";
import Button from "./Button";
import { Meta} from '@storybook/react'

export default {
    title:'UI/Atoms/Button',
    component:Button
} as Meta<typeof Button>
export const Primary = ()=>  <Button title="primary-btn">button</Button>