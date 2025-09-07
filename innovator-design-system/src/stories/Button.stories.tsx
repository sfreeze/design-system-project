import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const BUTTON_VARIANTS = [
  "primary",
  "primary_outlined",
  "primary_ghost",
  "mono",
  "mono_outlined",
  "mono_ghost",
  "danger",
  "danger_outlined",
  "danger_ghost",
  "link",
] as const;

const BUTTON_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼에 표시될 텍스트나 요소",
      table: {
        category: "Content",
        type: { summary: "ReactNode" },
      },
    },
    asChild: {
      control: "boolean",
      description: "`true`일 경우 button 대신 다른 컴포넌트로 감싸 렌더링",
      table: {
        category: "Behavior",
        type: { summary: "boolean" },
        disable: false,
      },
    },
    variant: {
      control: "radio",
      description: "버튼 스타일",
      options: BUTTON_VARIANTS,
      table: {
        category: "Style",
        type: { summary: "ButtonVariant" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      description: "버튼 크기",
      options: BUTTON_SIZES,
      table: {
        category: "Style",
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화",
      table: {
        category: "State",
        type: { summary: "boolean" },
        disable: false,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "버튼",
  },
};

export const Primary: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        {BUTTON_SIZES.map((size) => (
          <Button size={size}>버튼</Button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {BUTTON_SIZES.map((size) => (
          <Button size={size}>
            <Plus />
            버튼
          </Button>
        ))}
      </div>
    </div>
  ),
};
