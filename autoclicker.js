Game.PopNumber = function(el, text) {} //else it goes crazy.

var autoclicker = function(clicksatonce,clickinterval)
{
    autoclick = function()
    {
        for(j in  Object.keys(Game.clickables))
        {
            with(Game.clickables[Object.keys(Game.clickables)[j]])
            if(visible)
            {
                for(i=0;i<clicksatonce;i++)
                {
                    Click()
                }
            }
        }
    }
    
    return setInterval(autoclick,clickinterval)
}

autoclicker(100,1) /*the first number is how many clicks at once, the second is how often to do them in milliseconds. If there are a lot of clickables set it lower.*/
