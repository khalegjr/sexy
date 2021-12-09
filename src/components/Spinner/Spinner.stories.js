import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  message: "Please wait...",
};
