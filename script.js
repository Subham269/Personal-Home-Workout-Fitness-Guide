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
    document.getElementById("maintenance").textContent= "Maintenance calories : "+Math.round(maintenance) + " calories";
    

}
