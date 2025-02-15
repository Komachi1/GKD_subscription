import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.uanmi.miaojiaccount',
  name: '熊猫记账',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      global: true,
      rules: [
        {
          key: 1,
          matches: '[vid="rl_splash"] >3 View[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/101449500/9c0991ab-cb0e-4174-b822-504cf43f55a2',
          snapshotUrls: 'https://i.gkd.li/i/14537398',
        },
      ],
    },
  ],
});
