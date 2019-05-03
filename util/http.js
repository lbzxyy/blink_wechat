import { config } from '../config.js'
const tips = {
    1: '抱歉，出现了一个错误',
    1005: '1005错误'
}
class HTTP {
    request(params){
        if(!params.method) {
            params.method = "GET"
        }
        wx.request({
            url: config.api_base_url + params.url,
            method: params.method,
            data: params.data,
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                
                // 处理状态情况
                let code = res.statusCode.toString()
                if(code.startsWith('2')){ // 状态码是2开头的 说明请求成功
                    params.success && params.success(res.data)
                }else{
                    wx.showToast({
                        title: '错误',
                        icon: 'none',
                        image: '',
                        duration: 1500,
                        mask: false,
                        success: (result)=>{
                            
                        },
                        fail: ()=>{},
                        complete: ()=>{}
                    });
                }
            },
            fail:(error) => {
                wx.showToast({
                    title: '错误',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result)=>{
                        
                    },
                    fail: ()=>{},
                    complete: ()=>{}
                });
            }

        })
    }
    _show_error(erro_code){
        wx.showToast({
            title: tips[erro_code],
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result)=>{
                
            },
            fail: ()=>{},
            complete: ()=>{}
        })
    }
}

export {
    HTTP
}