function log(url) {
    var image = new Image();
    image.onload = function() {
        var style = [
            'font-size: 1px;',
            'padding: ' + this.height * .5 + 'px ' + this.width * .5 + 'px;',
            'background-size: ' + this.width + 'px ' + this.height + 'px;',
            'background: url('+ url +');'
        ].join(' ');
        console.log('%c ', style);
    };
    image.src = url;
}

console.image = log;