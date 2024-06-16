import type { Meta, StoryObj } from "@storybook/react";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";
import Button, { ButtonProps } from "../button";
import styles from "./button.stories.module.css";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  render: (props) => <Button {...props} />,
};

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Example",
  },
};

export const Shape: Story = {
  parameters: {
    docs: {
      description: {
        story: "A button can be rounded, circular, or square.",
      },
    },
  },
  render: () => (
    <div className={styles.innerWrapper}>
      <Button>Rounded</Button>
      <Button shape="circular">Circular</Button>
      <Button shape="square">Square</Button>
    </div>
  ),
};

export const Appearance: Story = {
  parameters: {
    docs: {
      description: {
        story: `- **\`(undefined)\`**: the button appears with the default style
- **\`primary\`**: emphasizes the button as a primary action.
- **\`outline\`**: removes background styling.
- **\`subtle\`**: minimizes emphasis to blend into the background until hovered or focused
- **\`transparent\`**: removes background and border styling.`,
      },
    },
  },
  render: () => (
    <div className={styles.innerWrapper}>
      <Button icon={<CalendarMonthRegular />}>Default</Button>
      <Button appearance="primary" icon={<CalendarMonthRegular />}>
        Primary
      </Button>
      <Button appearance="outline" icon={<CalendarMonthRegular />}>
        Outline
      </Button>
      <Button appearance="subtle" icon={<CalendarMonthRegular />}>
        Subtle
      </Button>
      <Button appearance="transparent" icon={<CalendarMonthRegular />}>
        Transparent
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A button can be disabled. The primary example of this pattern is when the disabled button is in a menu or a commandbar and is seldom used for standalone buttons.",
      },
    },
  },
  render: () => (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Button>Enabled state</Button>
        <Button disabled>Disabled state</Button>
      </div>
      <div className={styles.innerWrapper}>
        <Button appearance="primary">Enabled state</Button>
        <Button appearance="primary" disabled>
          Disabled state
        </Button>
      </div>
    </div>
  ),
};

export default meta;
