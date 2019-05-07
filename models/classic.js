import { HTTP } from '../util/http.js'

class ClassicModel extends HTTP{
    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
            }
        })
    }
    getClassic(index,nexrOrPrevious,sCallback) {
        this.request({
            url: `classic/${index}/${nexrOrPrevious}`,
            success: (res) => {
                wx.setStorageSync(res.index, res);
                sCallback(res)
            }
        })
    }
    isFirst(index) {
        return index==1?true:false
    }
    isLatest(index) {
        let latestIndex = this._getLatestIndex()
        return latestIndex == index?true:false
    }
    _setLatestIndex(index) {
        wx.setStorageSync('latest',index)
    }
    _getLatestIndex() {
        return wx._getLatestIndex('latest')
    }

}

export { ClassicModel }