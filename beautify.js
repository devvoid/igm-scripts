nums = [
    ' thousand',
    ' million',
    ' billion',
    ' trillion',
    ' quadrillion',
    ' quintillion',
    ' sextillion',
    ' septillion',
    ' octillion',
    ' nonillion',
    ' decillion',
    ' undecillion',
    ' duodecillion',
    ' tredecillion',
    ' quattuordecillion ',
    ' quindecillion',
    ' sexdecillion',
    ' septdecillion',
    ' octodecillion',
    ' nonillion',
    ' vigintillion',
    ' unvigintillion'
];


function Beautify(num,floats)
{
    if (!isFinite(num)) {
        return 'Infinity'
    }

    if(num < 1e3 || num >= parseFloat('1e' + 3*(nums.length))) {
        return Math.round(num)
    }

    var i = 0;
    while(num >= 1000)
    {
        num/=1000;
        i++;
    }

    // Limits the number to three decimal points
    num = Math.round(num*1000)/1000;
    
    // This deals with rounding errors
    if(num>=1000) {
        num/=1000;
        i++;
        num = Math.round(num*1000)/1000;
    }
    
    num = num.toFixed(3);
    
    return num + nums[i - 1]
}
