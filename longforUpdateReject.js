


var body = $response.body;

try {
    // let obj = JSON.parse(body);
    // console.log(obj)
    final = {
        "msg" : "success",
        "data" : {
            "versionName" : "1.15.4",
            "content" : "",
            "downloadUrl" : "",
            "checksum" : "",
            "title" : "",
            "forceUpdate" : 0,
            "haveNewVersion" : 0,
            "versionCode" : 202507032047
        },
        "code" : 0
    }

    body = JSON.stringify(final);

    $done({ body });
} catch (error) {
    console.error("Error processing response: ", error)
    $done({});
}

// body1 = {
//   "msg" : "success",
//   "data" : {
//     "versionName" : "1.15.4",
//     "content" : "龙湖APP本次更新主要内容：\n1.新增“租好房”板块，为您提供安全、贴心、品质的租住服务！\n2.提升弱网状态蓝牙开门能力，开门更便捷\n3.其他问题修复、文案及体验优化等\n\n使用中的任何问题，可联系客服或龙湖信箱反馈给我们哦!",
//     "downloadUrl" : "https:\/\/apps.apple.com\/app\/id6636468806",
//     "checksum" : "",
//     "title" : "发现新版本",
//     "forceUpdate" : 0,
//     "haveNewVersion" : 1,
//     "versionCode" : 202507032047
//   },
//   "code" : 0
// }