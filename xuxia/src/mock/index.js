var Mock = require("mockjs")
var Random = Mock.Random

var list = {
    "data": [{
            "id": 1,
            "num": 1,
            "checked": false,
            "name": "冠益乳燕麦黄桃发酵乳250g*2",
            "price": "12.5",
            "img": "https://image.missfresh.cn/product_images/D6DBFE9CC8161552FB6EF2A806213CAA.JPG"
        },
        {
            "id": 2,
            "num": 1,
            "checked": false,
            "name": "西班牙脐橙180-280g*2个",
            "price": "16",
            "img": "https://image.missfresh.cn/bf24a6e7e96e40b7ba9fa9306ee3ddd9.jpg"
        },
        {
            "id": 3,
            "num": 1,
            "checked": false,
            "name": "活润草莓桑葚果粒酸奶370g",
            "price": "12.5",
            "img": "https://image.missfresh.cn/product_images/0D246798BDC03467E5B5E3D6E6A8069A.JPG"
        },
        {
            "id": 4,
            "num": 1,
            "checked": false,
            "name": "小仙炖鲜炖冰糖燕窝70g三瓶装",
            "price": "78",
            "img": "https://image.missfresh.cn/60dd6cc0ede6429d8dab3d0b9736915c.jpg"
        },
        {
            "id": 5,
            "num": 1,
            "checked": false,
            "name": "狮王清新洋甘菊味洗衣液 900g",
            "price": "32.5",
            "img": "https://image.missfresh.cn/d8d59ea658fc41658bbc61078b088b17.jpg"
        }
    ]
}
module.exports = function(app) {
    app.get("/api/shopCart", function(req, res, next) {
        res.send(list)
    })
}