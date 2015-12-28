function resizeObj(obj) {
    var padding = ($('body').innerWidth() - obj.width()) / 2;
    console.log('padding=' + padding);
    var left = (0 - padding) + "px";
    var paddingRight = padding + "px";
    var paddingLeft = paddingRight;
    obj.css('left', left).css('padding-left', paddingLeft).css('padding-right', paddingRight);
}