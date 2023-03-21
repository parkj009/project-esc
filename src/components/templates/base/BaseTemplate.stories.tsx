import { StoryFn, Meta } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as Meta<typeof BaseTemplate>;

const Template: StoryFn<typeof BaseTemplate> = (args) => {
  return <BaseTemplate {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate;
