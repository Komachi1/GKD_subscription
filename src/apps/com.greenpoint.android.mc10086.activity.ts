import { defineAppConfig } from '../types';
export default defineAppConfig({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules: [
        {
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12662361',
        },
      ],
    },
    {
      key: 10,
      name: '通知提示-请求推送通知弹窗',
      desc: '请求推送通知弹窗，点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="开启推送通知"] +(2) LinearLayout > [text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12662213',
            'https://i.gkd.li/i/13327880',
          ],
        },
        {
          quickFind: true,
          matches: '[text="授权提醒"] +3 [text="拒绝"]',
          snapshotUrls: 'https://i.gkd.li/i/13775652',
        },
      ],
    },
    {
      key: 11,
      name: '权限提示-请求获取剪贴板权限弹窗',
      desc: '请求获取剪贴板权限弹窗，点击不允许',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules: [
        {
          matches:
            '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12662251',
            'https://i.gkd.li/i/13775651',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮小图标',
      quickFind: true,
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12662265',
        },
        {
          key: 1,
          matches: '[vid="close_btn_bottom"]',
          exampleUrls:
            'https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c',
          snapshotUrls: 'https://i.gkd.li/i/14570369',
        },
      ],
    },
    {
      key: 13,
      name: '评价提示-请求好评弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
          snapshotUrls: 'https://i.gkd.li/i/12662345',
        },
      ],
    },
  ],
});
