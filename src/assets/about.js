export default `
# 宝珂院项目

七宝写给世界上最幸福的女孩的一个小网站

其他想说的：暂时没有。

## 开发日志

本项目使用目前使用 [Vue](https://vuejs.org/)+[Vuetify](https://vuetifyjs.com/) 框架进行开发。为配合Vuetify请不要使用最新的Vue-Cli 4.X。使用以往的Vue-Cli 3.x会有更好的适配体验

### 2020-08-31

选择基本页面布局，顶部**bar**，左侧**navigation-drawer**底部**foot**配置每个模块相应功能，初始化首页和使用 markdown 文档来填充 about 页面，md 使用**markdown-it-vue**

\`\`\`bash
npm install markdown - it - vue - D
\`\`\`

同时引入图标库

\`\`\`bash
npm install @mdi/js -D
\`\`\`

### 2020-08-27

尝试引入 **Vuetify** 框架 由于各种原因无法与**Vue-Cli 4.5.4/Vue 3** 适配

\`\`\`bash
vue add vuetify
\`\`\`

其中无法处理的报错为 在 vue 中找不到 Vue 模块。推测原因是 Vue3 改写了 vue 模块下的功能的调用方式。bootstrap-vue 用同样的问题。所以退回版本使用**Vue-Cli 3.x/Vue 2**。目前初始化环境正常。

### 2020-08-25

使用 **Vue-Cli 4.X** 初始化项目 创建了一个简单的首页。

\`\`\`bash
vue create chtholly
\`\`\`
`;
