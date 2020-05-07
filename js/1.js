var typeWriter = {
    msg: function (msg) {
        return msg;
    },
    len: function () {
        return this.msg.length;
    },
    seq: 0,
    speed: 20,
    type: function () {
        var _this = this;
        $('.dzjtxt').html(_this.msg.substring(0, _this.seq));
        if (_this.seq == _this.len()) {
            _this.seq = 0;
            clearTimeout(t);
        }
        else {
            _this.seq++;
            var t = setTimeout(function () { _this.type() }, this.speed);
        }
    }
}
function dzj() {
    var msg = $('.dzjtxt').html();
    $('.dzjtxt').css({
        'white-space': 'pre-line',
        'line-height': '12px'
    })
    console.log(msg)
    $('dzjtxt').html('')
    function getMsg() {
        return msg;
    }
    typeWriter.msg = getMsg(msg);
    typeWriter.type();
}

setTimeout(function () {
    dzj();
}, 5)