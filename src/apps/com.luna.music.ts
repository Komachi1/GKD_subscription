import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
      snapshotUrls: 'https://i.gkd.li/i/14232395',
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '直接关闭所有底部半屏弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.luna.biz.main.main.MainActivity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          action: 'back',
          matches:
            '[id="com.luna.music:id/design_bottom_sheet"] [id="com.luna.music:id/bullet_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13533795',
            'https://i.gkd.li/i/13533797',
            'https://i.gkd.li/i/13613296', // matches中添加[id="com.luna.music:id/design_bottom_sheet"], 避免在此误触
            'https://i.gkd.li/i/13613498', // matches中添加[id="com.luna.music:id/design_bottom_sheet"], 避免在此误触
            'https://i.gkd.li/i/13613850', // 单独matches: '[id="com.luna.music:id/design_bottom_sheet"]', 会误触
            'https://i.gkd.li/i/13660652', // activityIds: 'com.luna.biz.ad.AdActivity',
          ],
        },
        {
          name: '右小角小悬浮窗',
          matches:
            '[id="com.luna.music:id/fl_pendant_container"] > [id="com.luna.music:id/view_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13674376',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-看广告视频拿VIP',
      desc: '30s广告后点击【跳过】',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          key: 0,
          name: '等待30s点击【跳过】',
          actionDelay: 30000,
          matches: 'WebView > WebView > View TextView[text="| 跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13611006',
            'https://i.gkd.li/i/13613085',
          ],
        },
        {
          preKeys: 0,
          name: '点击【坚持退出】',
          quickFind: true,
          matches: '[id="com.byted.pangle:id/tt_negtive"][text="坚持退出"]',
          snapshotUrls: 'https://i.gkd.li/i/13613184',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-看广告获取听歌时长',
      desc: '点击领取成功-点击坚持退出',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            '[id="com.luna.music:id/exciting_video_fragment_container"] >3 FrameLayout > LynxFlattenUI[text*="领取成功"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13945430',
            'https://i.gkd.li/i/14391733',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="坚持退出"]',
          snapshotUrls: 'https://i.gkd.li/i/13945459',
        },
      ],
    },
  ],
});
