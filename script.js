function start(btn)
{
    let age=+document.getElementById("age").value;
    let gender=(document.getElementById("Gender").value);
    let height=Number(document.getElementById("height").value);
    let weight=+document.getElementById("weight").value;
    let activity=document.getElementById("activity").value;
    let goal=btn.textContent;
    let bmr;
    if(gender=="Male")
        bmr= (10 * weight) + (6.25 * height) - (5 * age) + 5;
    else
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161; 
    let maintenance = bmr * activity;
    document.getElementById("container").style.display="none";
    document.getElementById("second-container").style.display="flex";

    document.getElementById("goal").textContent= "Goal Chosen : " + goal; 
    let mains=Math.round(maintenance);
    document.getElementById("maintenance").textContent= "Maintenance calories : "+mains + " calories";
    
    if (btn.textContent == "Bulk" || btn.textContent == "Cut") {
    if (btn.textContent == "Bulk") {
        document.getElementById("cals").textContent = 
        `Light Bulk (+100 to +250) : ${mains + 100} to ${mains + 250} calories
        \n
        Moderate Bulk (+300 to +500) : ${mains + 300} to ${mains + 500} calories
        \n
        Heavy Bulk (+500 to +1000) : ${mains + 500} to ${mains + 1000} calories`;
    } else {
        document.getElementById("cals").textContent = 
        `Light Cut (-100 to -300) : ${mains - 100} to ${mains - 300} calories
        \n
        Moderate Cut (-500) : ${mains - 500} calories
        \n
        Heavy Cut (-750 to -1000) : ${mains - 750} to ${mains - 1000} calories`;
    }
}
}
function back()
{
    document.getElementById("second-container").style.display="none"
    document.getElementById("container").style.display="flex";
}

