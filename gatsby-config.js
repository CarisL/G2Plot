const { repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        // eslint-disable-next-line quotes
        GATrackingId: `UA-148148901-2`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'G2Plot',
    description: 'A collection of charts made with the Grammar of Graphics',
    siteUrl: 'https://g2plot-v2-beta.antv.vision/',
    githubUrl: repository.url,
    versions: {
      '2.x': 'https://g2plot-v2-beta.antv.vision/',
      '1.x': 'https://g2plot.antv.vision/',
    },
    navs: [
      {
        slug: 'docs/manual',
        title: {
          zh: '使用文档',
          en: 'Manual',
        },
        order: 1,
      },
      {
        slug: 'examples',
        title: {
          zh: '图表示例',
          en: 'Examples',
        },
        order: 0,
      },
      {
        slug: 'https://charts.ant.design/',
        title: {
          zh: 'React 版本',
          en: 'React Version',
        },
      },
    ],
    docs: [],
    examples: [
      {
        slug: 'line',
        icon: 'line', // 图表名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '折线图',
          en: 'Line Charts',
        },
      },
      {
        slug: 'area',
        icon: 'area',
        title: {
          zh: '面积图',
          en: 'Area Charts',
        },
      },
      {
        slug: 'column',
        icon: 'column',
        title: {
          zh: '柱形图',
          en: 'Column Charts',
        },
      },
      {
        slug: 'bar',
        icon: 'bar',
        title: {
          zh: '条形图',
          en: 'Bar Charts',
        },
      },
      {
        slug: 'pie',
        icon: 'pie',
        title: {
          zh: '饼图',
          en: 'Pie Charts',
        },
      },
      {
        slug: 'dual-axes',
        icon: 'line',
        title: {
          zh: '双轴图',
          en: 'DualAxes Charts',
        },
      },
      {
        slug: 'scatter',
        icon: 'point',
        title: {
          zh: '散点图',
          en: 'Scatter Charts',
        },
      },
      {
        slug: 'histogram',
        icon: 'histogram',
        title: {
          zh: '直方图',
          en: 'Histogram Charts',
        },
      },
      {
        slug: 'radar',
        icon: 'radar',
        title: {
          zh: '雷达图',
          en: 'Radar Charts',
        },
      },
      {
        slug: 'box',
        icon: 'box',
        title: {
          zh: '箱型图',
          en: 'Box Charts',
        },
      },
      {
        slug: 'funnel',
        icon: 'funnel',
        title: {
          zh: '漏斗图',
          en: 'Funnel Charts',
        },
      },
      {
        slug: 'tiny-line',
        icon: 'line',
        title: {
          zh: '迷你折线图',
          en: 'Tiny Line',
        },
      },
      {
        slug: 'tiny-area',
        icon: 'area',
        title: {
          zh: '迷你面积图',
          en: 'Tiny Area',
        },
      },
      {
        slug: 'tiny-column',
        icon: 'column',
        title: {
          zh: '迷你柱形图',
          en: 'Tiny Column',
        },
      },
      {
        slug: 'ring-progress',
        icon: 'other',
        title: {
          zh: '进度环图',
          en: 'Ring Progress',
        },
      },
      {
        slug: 'progress',
        icon: 'other',
        title: {
          zh: '进度条图',
          en: 'Tiny Progress',
        },
      },
      // OTHERS
      {
        slug: 'general',
        icon: 'other',
        title: {
          zh: '图表通用配置',
          en: 'General Configration',
        },
      },
    ],
    docsearchOptions: {
      apiKey: '200ec461f4aa0bb4f0e761566f1a1336',
      indexName: 'antv_g2plot',
    },
  },
};
