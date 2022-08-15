(function()
{
if(l('saveBox').innerHTML.indexOf('<select name="multibuy">') == -1)
{
var multbuyopt = '<select name="multibuy">';

for(i in Game.buildings)
{
if(Game.buildings[i].visible && Game.buildings[i].real)
{
multbuyopt+= "<option value=" + Game.buildings[i].key + '>' + Game.buildings[i].name + '</option>';
}
}
multbuyopt+= '</select>';
return l('saveBox').innerHTML += multbuyopt + "<div class='button' onclick='buylots(10);'>Buy 10</div>" + "<div class='button' onclick='buylots(100);'>Buy 100</div>" + "<div class='button' onclick='sellall();'>Sell all</div>";
}
}())

sellall = function()
{
var build = document.getElementsByName('multibuy')[0].selectedOptions[0].value;
if(Game.cssData.indexOf(".sell") == -1 && Game.cssData.indexOf("#sell-" + Game.buildings[build].key) == -1)
{
if(confirm('Are you sure you want to sell all ' + Game.buildings[build].plural + '?'))
{
while(Game.buildings[build].amount > 0 && Game.buildings[build].visible)
{
Game.buildings[build].Sell();
}
}
}
}

buylots = function(amount)
{
var build = document.getElementsByName('multibuy')[0].selectedOptions[0].value;
for(i=0;i<amount;i++)
{
if(Game.buildings[build].visible && Game.buildings[build].CanBuy())
{
Game.buildings[build].Buy();
}
}
}

with(l('saveBox')){
if(innerHTML.indexOf("confirm('Are you sure you want to reset?')") == -1) innerHTML = innerHTML.replace("Game.Reset()","if(confirm('Are you sure you want to reset?')){Game.Reset()}")}

document.getElementsByName('multibuy')[0].onfocus=function(){
multbuyopt = '';
for(i in Game.buildings)
{
if(Game.buildings[i].visible && Game.buildings[i].real)
{
multbuyopt+= "<option value=" + Game.buildings[i].key + '>' + Game.buildings[i].name + '</option>';
}}
document.getElementsByName('multibuy')[0].innerHTML = multbuyopt;}
