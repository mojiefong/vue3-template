/**
 * @Author: Mojie
 * @Date: 2024-04-11 16:16:06
 */

import type { UserConfig } from 'unocss'

export const commonConfig: UserConfig = {
  shortcuts: {
    // 宽高满屏
    'wh-full': 'w-full h-full',
    // position 满屏
    'pos-full': 'fixed top-0 left-0 right-0 bottom-0',
    // position 水平居中 horizontal
    'pos-h-center': 'absolute left-50% transform -translate-x-50%',
    // flex 水平居中 horizontal
    'flex-h-center': 'flex justify-center',
    // position 垂直居中 vertical
    'pos-v-center': 'absolute top-50% transform -translate-y-50%',
    // flex 垂直居中 vertical
    'flex-v-center': 'flex items-center',
    // position 水平垂直居中
    'pos-center': 'absolute top-50% left-50% transform -translate-50%',
    // flex 水平垂直居中
    'flex-center': 'flex justify-center items-center',
  },

}
