/* export const setConfigData = () => {
    const result = {{{ boardParams }}}
    const boardParams = JSON.parse(result)
    if (!window.boardParamsConfig) {
        window.boardParamsConfig = []
    }
    window.boardParamsConfig.push(boardParams)
} */

export const getConfigData = () => {
    const arrayList = window.boardParamsConfig || []
    return arrayList[arrayList.length - 1] || {}
}

