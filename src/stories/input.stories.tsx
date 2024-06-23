import type { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "../input";
import styles from "./input.stories.module.css";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  render: (props) => <Input {...props} />,
};

type Story = StoryObj<InputProps>;

export const Default: Story = {
  render: (props) => (
    <div className={styles.root}>
      <div>
        <label>Sample input</label>
        <Input {...props} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "An input can be disabled.",
      },
    },
  },
  render: () => (
    <div className={styles.root}>
      <div>
        <label>Disabled input</label>
        <Input disabled value="disabled value" />
      </div>
    </div>
  ),
};

export const Size: Story = {
  parameters: {
    docs: {
      description: {
        story: "An input can have different sizes.",
      },
    },
  },
  render: () => (
    <div className={styles.root}>
      <div>
        <label>Small input</label>
        <Input size="small" />
      </div>
      <div>
        <label>Medium input</label>
        <Input size="medium" />
      </div>
      <div>
        <label>Large input</label>
        <Input size="large" />
      </div>
    </div>
  ),
};

export default meta;
