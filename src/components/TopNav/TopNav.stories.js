import React from "react";
import TopNav from "./TopNav";

export default {
   title: "상단 네비게이션",
   component: TopNav,
};

const Template = (args) => <TopNav {...args} />;
export const Default = Template.bind({});
Default.args = {
   is_login: true,
};
