interface BODYPARAMSTYPE {
  [attr: string]: any
}

interface PARAMSTYPE {
  preUrl?: string
  appid?: string
  functionId: string
  body?: string
  bodyParams?: BODYPARAMSTYPE
}

let baseUrl: string = "//beta-api.m.jd.com/api?"

function to(promise) {
  if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
    return new Promise((resolve, reject) => {
      reject(new Error('参数必须是 promise'));
    }).catch((err) => {
      return [err, null];
    });
  }
  return promise.then(data => {
    return [null, data];
  }).catch(err => {
    return [err, null];
  });
}

async function api({
  preUrl = baseUrl,
  appid = "nb-house",
  functionId = '',
  bodyParams
}: PARAMSTYPE) {
  let params: string = ''
  if (bodyParams && Object.keys(bodyParams).length !== 0) {
    params = JSON.stringify(bodyParams)
  }
  let path = `${preUrl}appid=${appid}&functionId=${functionId}&body=${params}&t=${new Date().getTime()}`;
  const res = await fetch(path, { credentials: 'include' });
  // const result = await res.json();
  return to(res.json())
}

export default api


/**
 * 使用 [error, result] = await insertUserClueWithValidMsg(params);
 */