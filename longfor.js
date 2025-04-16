/*
#!name=龙湖开门
#!desc=去除龙湖开门弹窗

[rewrite_local]

^https:\/\/.*\.longfor\.com\/management\/app\/api\/uHome\/ext\/checkOweFee.*$ url script-response-body https://raw.githubusercontent.com/stupid-pao/Rewrite/refs/heads/master/longfor.js

[mitm]
hostname = *.longfor.com

https://pms-c-api.longfor.com/management/app/api/uHome/ext/checkOweFee?projectId=3782427840320

*/


var body = $response.body;

try {
    let obj = JSON.parse(body);
    console.log(obj)
    obj.data.oweFee = false

    body = JSON.stringify(obj);

    $done({ body });
} catch (error) {
    console.error("Error processing response: ", error)
    $done({});
}

