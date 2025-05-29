/*
#!name=龙湖开门
#!desc=去除龙湖开门弹窗
url pattern: ^https:\/\/.*\.longfor\.com\/.*\/checkOweFee$

[rewrite_local]

^https:\/\/gw2c-hw-open\.longfor\.com\/supera\/C4\/v1_13_0\/entranceGuard\/checkOweFee$ url script-response-body https://raw.githubusercontent.com/stupid-pao/Rewrite/refs/heads/master/longfor.js


[mitm]
hostname = *.longfor.com

https://pms-c-api.longfor.com/management/app/api/uHome/ext/checkOweFee?projectId=3782427840320

*/


var body = $response.body;

try {
    let obj = JSON.parse(body);
    console.log(obj)
    final = {
        "code": "200",
        "message": "ok",
        "extraMessage": "",
        "extraCode": "",
        "data": {
            // "closeSecond": 0,
            // "oweFee": false
            "closeSecond": 5,
            "paymentLink": "https:\/\/c4.longfor.com\/uxj-h5\/property?webView=maia&channelCode=entrance",
            "tipTitle": "温馨提示",
            "tipContent": "您有物业费待缴纳，请您尽快查看并支付。如已缴纳请忽略。",
            "oweFee": true
        },
    }
    console.log(final)

    body = JSON.stringify(final);

    $done({ body });
} catch (error) {
    console.error("Error processing response: ", error)
    $done({});
}


/*

{
  "status": "ok",
  "code": 0,
  "data": {
    "closeSecond": 0,
    "paymentLink": null,
    "tipTitle": null,
    "tipContent": null,
    "oweFee": false
  },
  "traceId": "217399ecd8ee447ab2c32d7d3f6d8f03",
  "msg": "ok",
  "timestamp": 1744780948153
}



{"status":"ok","traceId":"d3fb3a3420094642b36ecd77ed924b1f","msg":"ok","code":0,"data":{"tipTitle":null,"tipContent":null,"oweFee":false,"closeSecond":0,"paymentLink":null},"timestamp":1744782036120}{"status":"ok","traceId":"d3fb3a3420094642b36ecd77ed924b1f","msg":"ok","code":0,"data":{"tipTitle":null,"tipContent":null,"oweFee":false,"closeSecond":0,"paymentLink":null},"timestamp":1744782036120}{"status":"ok","traceId":"d3fb3a3420094642b36ecd77ed924b1f","msg":"ok","code":0,"data":{"tipTitle":null,"tipContent":null,"oweFee":false,"closeSecond":0,"paymentLink":null},"timestamp":1744782036120}



{
  "code": "200",
  "message": "ok",
  "extraMessage": "",
  "extraCode": "",
  "data": {
    "closeSecond": 5,
    "paymentLink": "https:\/\/supera-c4.wan-prod.longfor.com\/property\/home?orderSource=SUPER_APP&channelCode=caappservice",
    "tipTitle": "温馨提示",
    "oweFee": true,
    "tipContent": "您有物业费待缴纳，请您尽快查看并支付。如已缴纳请忽略。"
  }
}
  */


