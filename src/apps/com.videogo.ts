import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.videogo',
  name: '萤石云视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      actionCdKey: 1,
      global: true,
      rules: [
        {
          key: 1,
          name: '穿山甲SDK',
          matches: '[vid="ad_content"] >n View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14076262',
        },
      ],
    },
    {
      key: 1,
      name: '主页广告',
      quickFind: true,
      activityIds: ['com.videogo.main.MainTabActivity'],
      rules: [
        {
          key: 0,
          matches: '[id="com.videogo:id/ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13255684',
        },
        {
          preKeys: 0,
          matches: '[id="com.videogo:id/ad_closead_nointerest"]',
          snapshotUrls: 'https://i.gkd.li/i/13255697',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-在线值守试用弹窗',
      desc: '点击x',
      activityIds: 'com.videogo.main.MainTabActivity',
      rules:
        '[text="了解并试用服务"] <<n ViewGroup[index=0][childCount=2] > ViewGroup[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14065785',
    },
  ],
});
