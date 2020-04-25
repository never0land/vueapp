import axios from 'axios'

// 请求超时设置
axios.defaults.timeout = 3000

/*
 * 设置生产环境/开发环境下的请求基路径(需后台设置允许跨域)
 * 开发环境下的跨域,也可使用webpack的devServer来设置proxy代理的方式来解决
 */
if(process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://127.0.0.1:5050/'
}else if(process.env.NODE_ENV === 'development') {
    //设置开发环境下的请求基路径, 如果是使用了webpack的devServer,来设置了代理,那么此处就不需设置了
}

// 添加request拦截器
axios.interceptors.request.use((config) => {
    // do something, 如接口请求的loading处理
    return config
}, (error) => {
    return Promise.reject(error)
})

// 添加response拦截器
axios.interceptors.response.use((response) => {
    // do something
    return response
}, (error) => {
    return Promise.reject(error)
})

/**
 * @func
 * @desc axios 请求封装
 * @param {object} req - 请求接口需要的url,method,请求头等基础信息
 * @param {object} params - 请求接口需要请求的参数
 */

const http = (req, params) => {
    return new Promise((resolve, reject) => {
        let para = {}
        if ((['get', 'delete', 'head', 'options'].indexOf(req.method) > -1)) {
            para = {
                params: params || {}
            }
        }
        if ((['post', 'put', 'patch'].indexOf(req.method) > -1)) {
            para = {
                data: params || {}
            }
        }
        axios({
            ...req,
            ...para
        }).then((response) => {
            if(response.status === 200) {
                resolve(response)
            }else {
                alert(response.data.message)
            }
        }).catch((error) => {
            reject(error)
        }).finally(() => {

        })
    })
}

// 定义所有接口请求的信息
const url = {
    movie: {
        url: '/movie/query',
        method: 'get'
    },
    book: {
        url: '/book/query',
        method: 'get'
    }
}

export {
    http,
    url
}

/**
 * 使用方式示例：
    http(url.movie).then((res) => {
        this.result = res.data.info
    })  
*/