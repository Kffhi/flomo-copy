import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            eslintrc: {
                enabled: true, // Default `false`
                filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            }
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `$main-color: orange;`
                additionalData: `@import '@/styles/variables.scss';`
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
        }
    },
    base: './', // 设置打包路径
    server: {
        port: 3000, // 设置服务启动端口号
        open: false, // 设置服务启动时是否自动打开浏览器
        cors: true // 允许跨域

        // 设置代理，根据我们项目实际情况配置
        // proxy: {
        //   '/api': {
        //     target: 'http://xxx.xxx.xxx.xxx:8000',
        //     changeOrigin: true,
        //     secure: false,
        //     rewrite: (path) => path.replace('/api/', '/')
        //   }
        // }
    }
})
