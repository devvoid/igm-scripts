Game.PopNumber = function(el, text) {} //else it goes crazy.
var autoclicker = function(clicksatonce,clickinterval)
{
    autoclick = function()
    {
        for(j in Object.keys(Game.clickables))
        {
            with(Game.clickables[Object.keys(Game.clickables)[j]])
            if(visible)
            {
                for(i=0;i= parseFloat('1e' + 3*(nums.length + 1))) return Math.round(num);
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
                num = num.toString();
                if(num.indexOf('.') == -1) num += '.000';
                else
                {
                    dec = num.indexOf('.');
                    while(num.slice(dec,num.length).length < 4) num += '0'; //adds trailing 0s (if needed) to stop the numbers jumping around.
                }
                return num + nums[i - 1];
            }
        }
    }
}
