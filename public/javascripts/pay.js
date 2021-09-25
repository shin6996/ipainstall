function getorderinfo() {
    const order_id = document.getElementById("order_id").textContent;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/order?order_id='+order_id, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var obj = JSON.parse(xhr.responseText);
            if (obj.code == 200)
            {
                const conversion = obj.data.conversion;

                document.getElementById("order").removeChild(document.getElementById("check_order"));

                var conversionSpan = document.createElement("span");
                conversionSpan.innerText = conversion;

                var copyBt = document.createElement("a");
                copyBt.innerText = "复制会员兑换码";

                document.getElementById("order").appendChild(conversionSpan);

                $("#order").append("<a class='copya' data-clipboard-text="+conversion+">复制会员兑换码</a>");

                var download = document.createElement("a");
                download.className = "aBt";
                download.innerText = "下载APP";
                download.href = "https://wk.hsy.mobi:1993/zb8pk";
                download.target = "view_window";
                document.getElementById("order").appendChild(download);
            }
            else
            {
                const msg = obj.msg;
                alert(msg);
            }
        }
    };
    xhr.send();
}
