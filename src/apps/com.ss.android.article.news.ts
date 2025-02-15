import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="升级版本"] +n [desc="关闭"][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/12685000',
        'https://i.gkd.li/i/12840104',
        'https://i.gkd.li/i/13316081',
      ],
    },
    {
      key: 2,
      name: '浮窗广告',
      rules: [
        {
          key: 0,
          name: '首页-浮窗广告',
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            'FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13762123',
        },
        {
          key: 1,
          name: '视频页-浮窗广告',
          activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
          matches:
            'FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView + ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13761236',
        },
      ],
    },
    {
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          matches: '[text^="开启通知"] + LinearLayout > [text="暂不开启"]',
          snapshotUrls: ['https://i.gkd.li/i/12706699'],
        },
        {
          matches:
            '[text^="开启通知"] < LinearLayout +2 ImageView[desc="关闭"]',
          snapshotUrls: ['https://i.gkd.li/i/12840217'],
        },
      ],
    },
    {
      key: 11,
      name: '竖屏视频广告',
      desc: '检测到广告时,点击右上角[更多]图标按钮,出现菜单,点击不感兴趣',
      activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
      rules: [
        {
          key: -1,
          preKeys: [0, 1, 2, 3],
          actionCd: 35000, //APP更新后点击不感兴趣不会跳过当前视频了，所以需要冷却一下等下一次重新跳过广告视频
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/12679277',
        },
        {
          key: 0,
          name: '点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text="头条优惠券无门槛全平台通用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12679280',
            'https://i.gkd.li/i/12733282',
            'https://i.gkd.li/i/12763251',
            'https://i.gkd.li/i/12763252',
          ],
        },
        {
          key: 1,
          name: '点击右上角[更多]图标按钮-抖音直播',
          matches:
            '@ImageView[clickable=true][desc="更多"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$="广告"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12733281'],
        },
        {
          key: 2,
          name: '第二种广告界面；点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >n TextView[text$="广告"]',
          snapshotUrls: ['https://i.gkd.li/i/13185633'],
        },
        {
          key: 3,
          name: '第三种广告界面；点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout +2 LinearLayout > TextView[text$="广告"]',
          snapshotUrls: ['https://i.gkd.li/i/13186082'],
        },
      ],
    },
    {
      key: 12,
      name: '信息流广告',
      desc: '点击右上角x按钮,点击不感兴趣',
      rules: [
        {
          name: '点击右上角x按钮',
          key: 0,
          activityIds: [
            'com.ss.android.article.news.activity.MainActivity',
            'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
          ],
          matches: 'UIView[text^="不感兴趣"][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/i/12733098',
            'https://i.gkd.li/i/12755264',
            'https://i.gkd.li/i/12836272',
            'https://i.gkd.li/i/12840162',
            'https://i.gkd.li/i/13093576',
            'https://i.gkd.li/i/12733098',
          ],
          exampleUrls: [
            'https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif', //这是 https://i.gkd.li/i/12840162
          ],
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          key: 1,
          activityIds: [
            'com.ss.android.article.news.activity.MainActivity',
            'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
          ],
          matches:
            '@ViewGroup[clickable=true] > ImageView + TextView[text="不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/i/12733152',
            'https://i.gkd.li/i/12755265',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '底部话题推荐弹窗',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          name: '话题谈论',
          matches:
            'FlattenUIText[text="参与讨论"] + FlattenUIImage[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12706699'],
        },
      ],
    },
    {
      key: 14,
      name: '自动观看广告视频',
      desc: '自动观看广告并等待30s后关闭',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击【看视频】',
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            '[id="com.bytedance.novel.api:id/component_ad_dialog_button_video"]',
          snapshotUrls: 'https://i.gkd.li/i/13402468',
        },
        {
          name: '等待30s点击【关闭】',
          actionDelay: 30000,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: 'UIText[text="广告"] +n UIText[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13402480',
        },
      ],
    },
    {
      key: 15,
      quickFind: true,
      name: '局部广告-底部热榜弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.ss.android.article.news.activity.MainActivity',
          matches:
            '@FlattenUIImage[clickable=true] <n FrameLayout <<2 FrameLayout - LinearLayout [text="首页"]',
          snapshotUrls: 'https://i.gkd.li/i/13828331',
        },
      ],
    },
    {
      key: 16,
      name: '局部广告-评论区广告',
      desc: '点击X',
      rules: [
        {
          name: '评论广告',
          activityIds: 'com.bytedance.ugc.UgcDetailInfoActivity',
          matches:
            '[text="点击查看"] < LinearLayout +n FrameLayout > [desc="举报"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13915287',
            'https://i.gkd.li/i/13817019',
          ],
        },
        {
          name: '活动横幅广告',
          activityIds: 'com.bytedance.ugc.UgcDetailInfoActivity',
          matches:
            'TextView[text.length>0] < LinearLayout - ImageView +n ImageView',
          snapshotUrls: ['https://i.gkd.li/i/13825373'],
        },
      ],
    },
  ],
});
