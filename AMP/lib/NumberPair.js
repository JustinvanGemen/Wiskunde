class NumberPair {
    constructor(a, b) {
        console.log("Start Divident = ", a);
        console.log("Start Divisor = ", b);
        this.a = a;
        this.b = b;
    };

    sum() {
        return this.a + this.b;
    };
    
    longDivision() {
        
        var ans;
        var divident = this.a;
        var divisor = this.b;
        var quotient = Math.floor(divident/divisor);
        var rest = divident % divisor;
        var rests = [];
        var quotients = [];
        
        ans = quotient + ".";
        
        while(rests.indexOf(rest) == -1){
            rests.push(rest);
            divident = rest *10;
            quotient = Math.floor(divident/divisor);
            rest = divident%divisor
            ans = ans + quotient;
            quotients.push(quotient);
        }
        quotients.splice(rests.indexOf(rest),0,"[");
        quotients.push("]");
        ans += quotients.join(""); 

        return ans;
    
    /*longDivision()
    {
        var ans = "";
        var divident = this.a;
        var divisor = this.b;
        var quotient = Math.floor(divident/divisor);
        var rest = divident%divisor;
        var rests = [];
        var quotients = [];
        
        ans = quotient + ".";
        
        //for(let i=0; i<100; i++)
        while(rests.indexOf(rest)==-1)
            {
                rests.push(rest);
                divident = rest * 10;
                quotient = Math.floor(divident/divisor);
                rest = divident%divisor;
                quotients.push(quotient)
                //ans = ans + quotient;
            }
        quotients.splice((rest),0,"{}");
        ans += quotients.join("");
        
        ans = quotient + " rest " + rest;
        return ans;*/
    }
}