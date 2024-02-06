import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.apps.photos',
  name: '谷歌相册',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-优惠提示',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.google.android.apps.photos.cloudstorage.paidfeatures.PaidFeaturesActivity',
          matches:
            '@[desc="转到上一层级"] < ViewGroup[id="com.google.android.apps.photos:id/toolbar"]',
          snapshotUrls: 'https://i.gkd.li/import/13774247',
        },
      ],
    },
  ],
});
