module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 打包
        'ci' // 修改项目继续集成流程的提交
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  },
  prompt: {
    // 可选类型
    types: [
      { value: 'feat', name: 'feat: 新功能' },
      { value: 'fix', name: 'fix: 修复' },
      { value: 'docs', name: 'docs: 文档变更' },
      { value: 'style', name: 'style: 代码格式(不影响代码运行的变动)' },
      {
        value: 'refactor',
        name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
      },
      { value: 'perf', name: 'perf: 性能优化' },
      { value: 'test', name: 'test: 增加测试' },
      { value: 'chore', name: 'chore: 构建过程或辅助工具的变动' },
      { value: 'revert', name: 'revert: 回退' },
      { value: 'build', name: 'build: 打包' },
      { value: 'ci', name: 'ci: 修改项目继续集成流程的提交' }
    ],
    // 消息步骤
    messages: {
      type: '请选择提交类型:',
      scope: '请输入提交范围(可选):',
      customScope: '请输入自定义范围:',
      subject: '请简要描述提交(必填):',
      body: '请输入详细描述(可选):',
      footer: '请输入要关闭的issue(可选):',
      confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
    },
    // 跳过问题
    skipQuestions: ['body', 'footer', 'footerPrefix'],
    // subject文字长度默认是72
    subjectLimit: 72
  }
}
