Number.prototype.isInteger = function () {
    "use strict";
    var ans = false;
    if (this % 1 == 0) {
        ans = true;
    }
    return ans;
};

Number.prototype.isDivisor = function (num) {
    "use strict";
    var ans = false;
    if ((this / num).isInteger()) {
        ans = true;
    }
    return ans;
};

Number.prototype.divisors = function () {
    "use strict";
    var ans = [],
        max = this;
    for (i = 1; i < max; i += 1) {
        if (max.isDivisor(i)) {
            ans.push(i);
        }
    }
    if (ans.length > 30) {
        console.log("amount " + ans.length);
    }
    return ans;
};

Number.prototype.primeFactorization = function () {
    "use strict";

};