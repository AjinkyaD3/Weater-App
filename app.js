const btn_search = document.getElementById("searchbtn");
const dp_loc = document.getElementById("locationdisplay");
const dp_wheather = document.getElementById("wheather");
const dp_div = document.getElementById("display");
const dp_img = document.getElementById("image");
const dp_temp_c = document.getElementById("temp_c");
const dp_temp_f = document.getElementById("temp_f");
const dp_date = document.getElementById("date");
const _0x1a7c=["\x33\x36\x32\x62\x33\x38\x64\x62\x33\x39\x38\x33\x34\x64\x31\x37\x62\x39\x65\x36\x31\x37\x30\x38\x32\x33\x33\x31\x31\x32"];
const key=_0x1a7c[0];

let city = "";

btn_search.addEventListener("click", () => {
    ip_location = document.getElementById("location");
    city = ip_location.value;

    fetchData();
});

let data;
async function fetchData() {
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`;
    try {
        let response = await fetch(apiUrl);
        data = await response.json();
        console.log("API ====>>"+data);
        console.log(data.location.name + " this is location ");
        console.log(data.location.localtime + " this is date ");
        console.log(data.current.temp_c + " this is wheather ");
        console.log(data.current.temp_f + " this is wheather ");
        dp_loc.innerHTML = "Location :" + data.location.name;
        dp_wheather.innerHTML = "Weather is :" + data.current.condition.text;
        dp_img.src = data.current.condition.icon;
        dp_temp_c.innerHTML = "Temp in C :" + data.current.temp_c;
        dp_temp_f.innerHTML = "Temp in F :" + data.current.temp_f;
        dp_date.innerHTML = "Date :" + data.location.localtime;
        dp_div.classList.add('shadow');
    } catch (error) {
        console.log("Error fetching data: ====>>>>", error);
        dp_loc.innerHTML = "Error";
        dp_div.classList.add('none');
        dp_wheather.innerHTML = "Error";
        dp_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADWCAMAAACaPYwcAAAAvVBMVEX////yBQW6BATlQ0PyKCjVMjLfi4vcPDzzICDpQ0PwNTXuwcHyDAz/+fn//PzzERH0Li7qtLTGLi6+ERH78PDtvLz239/VZWXoqqrDIyPuPj7wysrJISH55+fxMTHNS0vRV1fHNDTvPDzaenrOTU34e3v8zs75jIz3Xl792Nj6m5v7ra34fX38xMT02dnilJTKPj7Xbm74c3P3Zmb2SUn5k5P8y8vBHR32UVH7t7f7rKz3YWH6o6P5hYX6mppJmrqMAAAIEUlEQVR4nO2da1viPBCGCRSoWCgCclIOCwuIiiKeYN91///PeptW6KRt2sSVKdtr7o9L6WZI8mQyM4m5HEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEFknIeLx+l43Xhv5j2a7431ePp48ZB2w75M67I0buRlNMaly1baTdSm3e3ITTqY1um2026oBq1up3do+3W5cNavGKZtMcs2jUr/rFC+Pnza63T/kT57KK33E6lY6BssCqNfKO6n27r0D0y0q2lv30sSk3zT9r3Wm16l3ex49kY1y30z1iYPs19unr5hg5InE9eFoYJNHsOC12WN0iDt5kvojtwGFs9UOgp02VnR/d6om7YBUbSn7ni61jTKM8ztseb09OT+YuQNv3iZkGF4Q3F0kbYZItXSO29WufIloziVMn/Be6matimA9pM3/uwvW8WY7Y3Ep9MZiFfjv+wq2GHjU5H6S3daFfSlIohZcCfYZdoGuVz8cAfgXxvFcQfij1MQDteq4uRbrGJsUjwNuzyr/nZa+VROwi7XqnL926xirF5O367z9Xdb9WnX+jxFq5aj77fq067RMjWrBh0+r9S9dVWGfH51UvPop1zZv08tfCpc56cpWfXouOzN/hGsYqzPX/2YilXnfM/4PatwmDO+s0xDNlrcESxYRzLL4n7UOIWgVInLxdd2VyoYXDZK6Fad98SJtYEbiuqHcvPrv8EOa7nxP+DTq4c+DLm2F2D7ZvDT5X+qW68P8K3BDH7Ch2EH2aouH4LCVkT42XMPir7vPZw+C2GmmnwY4oZtBty9CGi7uar5D1RXKuuZtZ2Dr/wOuCt97mygLsqP3GkKtrEyh48sFIZhHXhItVVoH8qdKMzFa+B4uM1wd9yIdiVaNdyBcfsWVtWKoxprxO56DOrFJ6JsPCcsavYCPD2/iXiigNpdLWdmXUd5uCZsaK6d4ARDEaxtop4YOr7hCG1N7ko6y1lEV2BYVedxsmE9w63HJnomFjDFsBM5s1xMYXrdxnghQ7B+D14lYSs+u7DWrqtmWAYPqMpGZQ76dSVVTUcMm0iBw1J4zQJs4KPLZ8lTxi14aiffX/fxPENHMIryRckW5fAlWg6htiy30pcx23E1RihWnUsFw6MOV6PaMlIOoVxUY6zyRAPF4eVjMNYzMt/g40GXyMF6AVYN7mOj3BWsUfjTGYNxDRE9vSjZGC5977F1m7BoO6PwJ4JV7Wb8GOTMoDM/uA92wB34NMkqPgqbCMkhvhYn7Tqse/iN+URsOpSLu0RHf4KzIk8dxynROa//hi7PUmj7wv+o1n5JehOzr1Fiaz9j1mIfYwW+UgOyYW+hXEjkX6CMMblaPaUomjUR5NCPbUzARmP5rBIaOMvne0d3d68UppbLDG6UWnvZqOx8EVQM5PDJdXT/yVGMplo6VfSitm7HmNBnelUL45hNBM0oJa1aB+q3QszG9TYW/j9Vf6nmJIoIC/KTkmJ4P7MQs3GssDegxG6unD9yNOPp2GaNkxfjPdZQkI2FXQFWvQ2V49zOgjw+tllrnXSCsAFur8DWWbpjicCRwvWxzWooCqHHTPaaWfJ3DzhS2Di2We/5vEb60VzUol5Si/faAwzz+fdjm+WorU6axNhF1Ga17rQqbgxnTTm2Wc7aqNMmqz4PvyMcv43FdP5PBLP06tC2IbtWyf6tgI1jlmYGchaYXu2o+G0cFo5Zmq0SYza5lq5VjJ1kb7HhSpANbbOQeku3xvNG3FZoD0KkuaVZD3kTjETsNKv0MJRQc91i7GUVesdOr78x1i09L4O78eF3tG61OhzDy9DzCZl5F7Vfr0nyPtFg+IRaHjwz7yN9wlxNw4FH8eA19ltM9OAHMLixig28i2DstzR2x4xtfEtqy/4NfM9KXXgwdsfqsQxxd/wwYQYMblR3yrKBEctQjzwx6Lw/cJEwdzC4sVB8DUrkSTlOyIa/QJjJTZsEghuKsoESJ1SM6jouzyv41n6hEoMbanahRHUVY/CMffh9VdsdcgtCTHRVV/GaUWLwahkTZsN+Gfij1vyAC5mKHCJlTFTyW8x6gRmELfgZTBjcaL0m24WU31LJRrKXNkijillWMbhxnzgMkbKRybnjQBr1NfDhFsrhIFE2kHLHyZl+ZsG8SDiNKgQ35tv4/kLL9CfVZThWAT1uh38BE5am5d7iV2W0uoyEKhrHa4dyEZVGNXbA7mpMaRBmFU1CzRPbAqlrR8fahcxybhbzGyHWPMVWqDGY8pZWqIl1bMHCDQBihVpcPSGr78CD8nrCDXSHIgtaXTDrCWOqP5kNhldc9actyMZSlsNDrf6U1uoy8xXIRWytbv0Obr4kXhRura60stqGnmxCZbVY/vonUg5xK6tldfBsAxfahKoL60VSkOKDXQcfeWohoG/JpxY2sMWDiKUA+9RC5BkTZoCfv7pLDpJagmzMQws3/hmTiBNBYhnGUqXqwvgDUynB8tcUTgRFnN8SDjolObD778BRW70T7Urj/FbotJ0Fix9bMX4DxOqLBSnwt0jntF3wbKRQkKZ+hlB69jCls5GBk6wbWAEeUUwtRayaPxygSe0ka0bPHWf1lHhWz/Rn9QaGjN6XkdXbTbJ6F01Wbw7K6j1PWb2VK6t3qGX1xrus3k+Y1dskcxm9+zOX1Ztacxm9VzeX1VuQcxm9s5qTyRvGOZm8D56Tydv7XbL4txY8sviXMfZk7++YEARBEARBEARBEARBEARBEARBEARBEARBEMQ/wv++Iq7SKJLJjwAAAABJRU5ErkJggg==";
        dp_temp_c.innerHTML = "Error";
        dp_temp_f.innerHTML = "Error";
        dp_date.innerHTML = "Error";

    }
}
document.onkeydown = function (e) {
    if (e.ctrlKey && e.keyCode === 85) {
        return false;
    }
};
document.addEventListener("contextmenu", function (event) {
    // Prevent the default context menu
    event.preventDefault();
});
document.addEventListener("keydown", function (e) {
    // Check if Ctrl + Shift + I is pressed
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
});
