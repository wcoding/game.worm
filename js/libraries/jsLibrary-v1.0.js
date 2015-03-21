var jsLibrary = new function() {


    this.find = function(value, obj) {

        for(var i in obj) {
            if (obj[i] === value)
                return i;
        }

        return false;
    };


    this.clone = function(o) {

        if (!o || 'object' !== typeof o) {
            return o;
        }
        var c = 'function' === typeof o.pop ? [] : {};
        var p, v;
        for (p in o) {
            if (o.hasOwnProperty(p)) {
                v = o[p];
                if (v && 'object' === typeof v) {
                    c[p] = this.clone(v);
                } else {
                    c[p] = v;
                }
            }
        }
        return c;
    };
};