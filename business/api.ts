import Request from './fetch'

const getUserPhoneByPin = () => Request({
    functionId: 'nbhouse_getUserPhoneByPin'
})

const insertUserClueWithValidMsg = (bodyParams) => Request({
    functionId: 'nbhouse_insertUserClueWithValidMsg',
    bodyParams
})

const insertUserClue = (bodyParams) => Request({
    functionId: 'nbhouse_insertUserClue',
    bodyParams
})
const sendValidMsg = (bodyParams) => Request({
    functionId: 'nbhouse_sendValidMsg',
    bodyParams
})

export {
    getUserPhoneByPin,
    insertUserClueWithValidMsg,
    insertUserClue,
    sendValidMsg,
}

/**
 * 使用 [error, result] = await insertUserClueWithValidMsg(params);
 */