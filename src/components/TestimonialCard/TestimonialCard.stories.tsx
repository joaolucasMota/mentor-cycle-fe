import { Meta, StoryObj } from "@storybook/react";
import TestimonialCard from "./TestimonialCard";

const meta = {
  title: "Data Display/TestimonialCard",
  component: TestimonialCard,
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel risus lobortis, fringilla magna sit amet, dapibus turpis. Duis vitae facilisis sapien, vitae rhoncus mauris. Pellentesque ultricies lacus id augue rhoncus, ut mollis mauris ultrices. Duis efficitur orci quis metus aliquam faucibus. Morbi vitae lorem vel est fringilla maximus. Donec rutrum mollis dolor, ac efficitur quam interdum eu. Praesent pharetra aliquet est, in imperdiet lorem posuere sed. Morbi id turpis leo.",
    maxLines: 2,
  },
};
