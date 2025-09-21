import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '类脑宝宝教程',
  description: '类脑宝宝教程 VitePress 版',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '搭建部署', link: '/build/' },
      { text: '酒馆使用', link: '/silly/' },
      { text: '获取AI渠道', link: '/get_ai/' },
      { text: '类脑和 DC 相关', link: '/leinao_about/' },
      { text: 'GitHub', link: 'https://github.com/songdaopi/down' }
    ],
    sidebar: {
      '/build/': [
        {
          text: '搭建部署',
          items: [
            { text: '首页', link: '/build/' },
            { text: 'Windows本地部署酒馆与clewd教程', link: '/build/silly' },
            { text: '通过 Github Desktop 在PC本地安装酒馆/Clewd/YouChat_Proxy', link: '/build/gitdesk' },
            { text: 'VPS 云端部署酒馆与Clewd', link: '/build/vps' },
            { text: '傻瓜式图文教程: SillyTavern Docker 一键部署教程', link: '/build/dock' }
          ]
        }
      ],
      '/silly/': [
        {
          text: '酒馆使用',
          items: [
            { text: '首页', link: '/silly/' },
            { text: '酒馆介绍——萌新向', link: '/silly/tavern' },
            { text: 'VPS酒馆更新', link: '/silly/up' },
            { text: '正确导入/导出更新后角色卡的方法', link: '/silly/char' },
            { text: '前端卡问题自查教程', link: '/silly/css' },
            { text: '酒馆常见问题', link: '/silly/que' },
            { text: '解放双手: 用移动设备连接搭建在PC端的酒馆', link: '/silly/pc' },
            { text: '世界书相关', link: '/silly/lorebook' }
          ]
        }
      ],
      '/get_ai/': [
        {
          text: '获取AI渠道',
          items: [
            { text: '首页', link: '/get_ai/' },
            { text: 'Clewd报错大全', link: '/get_ai/clewd' },
            { text: 'Pro退款流教程', link: '/get_ai/pro_refund' },
            { text: 'Gemini（哈基米）模型介绍、获取和使用教程', link: '/get_ai/Gemini' }
          ]
        }
      ],
      '/leinao_about/': [
        {
          text: '类脑和 DC 相关',
          items: [
            { text: '首页', link: '/leinao_about/' },
            { text: '一种通用制卡思路', link: '/leinao_about/make_card' },
            { text: 'Discord的特殊用法', link: '/leinao_about/discord' }
          ]
        }
      ],
      '/': [
        {
          text: '首页',
          items: [
            { text: '开始', link: '/' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: '目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/songdaopi/down' }
    ],
    search: {
      provider: 'local'
    }
  }
})