import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maidu.gkld',
  name: '公考雷达',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '首页右侧悬浮广告',
      activityIds: 'com.maidu.gkld.ui.main.MainActivity',
      rules:
        '[id="com.maidu.gkld:id/fl_float"] + [id="com.maidu.gkld:id/close_image_view"]',
      snapshotUrls: 'https://i.gkd.li/import/12715291',
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: 'com.maidu.gkld.ui.main.MainActivity',
      rules:
        '[id="com.maidu.gkld:id/ll_open_app_notice"] + [id="com.maidu.gkld:id/iv_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12715250',
    },
  ],
});
