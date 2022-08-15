nums = ['k','M','B','T','Qa','Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD', 'Vi', 'UnV'];


function Beautify(num,floats)
{
if (!isFinite(num)) return 'Infinity'
if(num < 1e3 || num >= parseFloat('1e' + 3*(nums.length))) return Math.round(num)
var i = 0;
while(num >= 1000)
{
num/=1000;
i++;
}
num = Math.round(num*1000)/1000;
if(num>=1000)
{
num/=1000;
i++;
num = Math.round(num*1000)/1000;
} //deals with rounding errors
num = num.toFixed(3);
return num + nums[i - 1]
}
