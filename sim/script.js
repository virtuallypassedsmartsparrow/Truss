// Global variables
var category = "";
var page = " ";



var values = { // m for model
    // m: 0, // Already pulled from smartsparrow. How to I set random inputs?
    // L: 0,
    // b: 0,
    // I_G: 0,
    // I_o: 0,
    // O_x_1: 0,
    // O_y_1: 0,
    // O_1: 0,
    // w_1: 0,
    // alpha_1: 0,
    // w_2: 0,
    // alpha_2: 0,
    // V_2: 0,
    // O_x_2: 0,
    // O_y_2: 0,
    // O_2: 0,
    F1: 0,
    F2: 0,
    F3: 0,
    theta1: 0,
    theta2: 0,
    theta3: 0,
    theta4: 0,
    theta5: 0,
    Ay: 0,
    Ky: 0,
    Kx: 0,
    KI: 0,
    KL: 0,
    LI: 0,
    LJ: 0,
    JI: 0,
    JH: 0,
    CE: 0,
    DE: 0,
    DF: 0,

    KI_sign: 0,
    KL_sign: 0,
    LI_sign: 0,
    LJ_sign: 0,
    JI_sign: 0,
    JH_sign: 0,
    CE_sign: 0,
    DE_sign: 0,
    DF_sign: 0,

};

var valuesRounded = {
    // m: 0, // all these should be 0 for some reason. I guess it doesn't matter?
    // L: 0,
    // b: 0,
    // I_G: 0,
    // I_o: 0,
    // O_x_1: 0,
    // O_y_1: 0,
    // O_1: 0,
    // w_1: 0,
    // alpha_1: 0,
    // w_2: 0,
    // alpha_2: 0,
    // V_2: 0,
    // O_x_2: 0,
    // O_y_2: 0,
    // O_2: 0,
    F1: 0,
    F2: 0,
    F3: 0,
    theta1: 0,
    theta2: 0,
    theta3: 0,
    theta4: 0,
    theta5: 0,
    Ay: 0,
    Ky: 0,
    Kx: 0,
    KI: 0,
    KL: 0,
    LI: 0,
    LJ: 0,
    JI: 0,
    JH: 0,
    CE: 0,
    DE: 0,
    DF: 0,

    KI_sign: 0,
    KL_sign: 0,
    LI_sign: 0,
    LJ_sign: 0,
    JI_sign: 0,
    JH_sign: 0,
    CE_sign: 0,
    DE_sign: 0,
    DF_sign: 0,
};

var names = { //choose how to write variable string.
    // m: "m",
    // L: "L",
    // b: "b",
    // I_G: "I<sub>G</sub>",
    // I_o: "I<sub>o</sub>",
    // O_x_1: "O<sub>x</sub>",
    // O_y_1: "O<sub>y</sub>",
    // O_1: "O",
    // w_1: "&#969",
    // alpha_1: "&#945",
    // w_2: "&#969",
    // alpha_2: "&#945",
    // V_2: "V<sub>A</sub>",
    // O_x_2: "O<sub>x</sub>",
    // O_y_2: "O<sub>y</sub>",
    // O_2: "O",
    F1: "F<sub>1</sub>",
    F2: "F<sub>2</sub>",
    F3: "F<sub>3</sub>",
    theta1: "&#952<sub>1</sub>",
    theta2: "&#952<sub>2</sub>",
    theta3: "&#952<sub>3</sub>",
    theta4: "&#952<sub>4</sub>",
    theta5: "&#952<sub>5</sub>",
    Ay: "A<sub>y</sub>",
    Ky: "K<sub>y</sub>",
    Kx: "K<sub>x</sub>",
    KI: "KI",
    KL: "KL",
    LI: "LI",
    LJ: "LJ",
    JI: "JI",
    JH: "JH",
    CE: "CE",
    DE: "DE",
    DF: "DF",

    KI_sign: "KI_sign",
    KL_sign: "KL_sign",
    LI_sign: "LI_sign",
    LJ_sign: "LJ_sign",
    JI_sign: "JI_sign",
    JH_sign: "JH_sign",
    CE_sign: "CE_sign",
    DE_sign: "DE_sign",
    DF_sign: "DF_sign",
};

var units = { //write the units
    // m: "kg",
    // L: "m",
    // b: "m",
    // I_G: "kgm<sup>2</sup>",
    // I_o: "kgm<sup>2</sup>",
    // O_x_1: "N",
    // O_y_1: "N",
    // O_1: "N",
    // w_1: "rad s<sup>-1</sup>",
    // alpha_1: "rad s<sup>-2</sup>",
    // w_2: "rad s<sup>-1</sup>",
    // alpha_2: "rad s<sup>-2</sup>",
    // V_2: "m/s",
    // O_x_2: "N",
    // O_y_2: "N",
    // O_2: "N",
    F1: "N",
    F2: "N",
    F3: "N",
    theta1: "deg",
    theta2: "deg",
    theta3: "deg",
    theta4: "deg",
    theta5: "deg",
    Ay: "N",
    Ky: "N",
    Kx: "N",
    KI: "N",
    KL: "N",
    LI: "N",
    LJ: "N",
    JI: "N",
    JH: "N",
    CE: "N",
    DE: "N",
    DF: "N",

    KI_sign: "N",
    KL_sign: "N",
    LI_sign: "N",
    LJ_sign: "N",
    JI_sign: "N",
    JH_sign: "N",
    CE_sign: "N",
    DE_sign: "N",
    DF_sign: "N",
};


// Get values from SS
var model = new pipit.CapiAdapter.CapiModel({

    // m: " ", 
    // L: " ",
    // b: " ",
    // I_G: " ",
    // I_o: " ",
    // O_x_1: " ",
    // O_y_1: " ",
    // O_1: " ",
    // w_1: " ",
    // alpha_1: " ",
    // w_2: " ",
    // alpha_2: " ",
    // V_2: " ",
    // O_x_2: " ",
    // O_y_2: " ",
    // O_2: " ",

    F1: 0,
    F2: 0,
    F3: 0,
    theta1: 0,
    theta2: 0,
    theta3: 0,
    theta4: 0,
    theta5: 0,
    Ay: 0,
    Ky: 0,
    Kx: 0,
    KI: 0,
    KL: 0,
    LI: 0,
    LJ: 0,
    JI: 0,
    JH: 0,
    CE: 0,
    DE: 0,
    DF: 0,

    KI_sign: 0,
    KL_sign: 0,
    LI_sign: 0,
    LJ_sign: 0,
    JI_sign: 0,
    JH_sign: 0,
    CE_sign: 0,
    DE_sign: 0,
    DF_sign: 0,

    page: "10",
});
// I think this exposes the values to Smart Sparrow. :D
pipit.CapiAdapter.expose('F1', model);
pipit.CapiAdapter.expose('F2', model);
pipit.CapiAdapter.expose('F3', model);
pipit.CapiAdapter.expose('theta1', model);
pipit.CapiAdapter.expose('theta2', model);
pipit.CapiAdapter.expose('theta3', model);
pipit.CapiAdapter.expose('theta4', model);
pipit.CapiAdapter.expose('theta5', model);
pipit.CapiAdapter.expose('Ay', model);
pipit.CapiAdapter.expose('Ky', model);
pipit.CapiAdapter.expose('Kx', model);
pipit.CapiAdapter.expose('KI', model);
pipit.CapiAdapter.expose('KL', model);
pipit.CapiAdapter.expose('LI', model);
pipit.CapiAdapter.expose('LJ', model);
pipit.CapiAdapter.expose('JI', model);
pipit.CapiAdapter.expose('JH', model);
pipit.CapiAdapter.expose('CE', model);
pipit.CapiAdapter.expose('DE', model);
pipit.CapiAdapter.expose('DF', model);

pipit.CapiAdapter.expose('KI_sign', model);
pipit.CapiAdapter.expose('KL_sign', model);
pipit.CapiAdapter.expose('LI_sign', model);
pipit.CapiAdapter.expose('LJ_sign', model);
pipit.CapiAdapter.expose('JI_sign', model);
pipit.CapiAdapter.expose('JH_sign', model);
pipit.CapiAdapter.expose('CE_sign', model);
pipit.CapiAdapter.expose('DE_sign', model);
pipit.CapiAdapter.expose('DF_sign', model);
pipit.CapiAdapter.expose('page', model);

//this gets the values from Smart Sparrow. So does that mean I need to put inputs into Smart Sparrow variable tab? Either way, I'm sure these are just the inputs
//I think I can place M R theta_deg in variables. Then make pages # in iniitial state. Then i'm done??!
pipit.Controller.notifyOnReady();

model.on("change:F1", function() {
    draw();
});
model.on("change:F2", function() {
    draw();
});
model.on("change:F3", function() {
    draw();
});
model.on("change:page", function() {
     draw();
});

// This is JQuery right? 
$("#selectBox").change(function() {
    draw();
});

//this is the generic function which does all the magic. It gets the values from SS then calculates them then figures out which catagory its in (how does it know what question #? from getvaleusformSS function!!) then displays the values
function draw() {
    getValuesFromSS();
    calculateVariables();

    category = $("#selectBox option:selected").val();
    sendValuesToSS();
    displayValues();
}

//there is no need to send the input values back to smart sparrow. so only send the values that have been calculated.
function sendValuesToSS() {
    model.set("theta1", values.theta1);
    model.set("theta2", values.theta2);
    model.set("theta3", values.theta3);
    model.set("theta4", values.theta4);
    model.set("theta5", values.theta5);
    model.set("Ay", values.Ay);
    model.set("Ky", values.Ky);
    model.set("Kx", values.Kx);
    model.set("KI", values.KI);
    model.set("KL", values.KL);
    model.set("LI", values.LI);
    model.set("LJ", values.LJ);
    model.set("JI", values.JI);
    model.set("JH", values.JH);
    model.set("CE", values.CE);
    model.set("DE", values.DE);
    model.set("DF", values.DF);

    model.set("KI_sign", values.KI_sign);
    model.set("KL_sign", values.KL_sign);
    model.set("LI_sign", values.LI_sign);
    model.set("LJ_sign", values.LJ_sign);
    model.set("JI_sign", values.JI_sign);
    model.set("JH_sign", values.JH_sign);
    model.set("CE_sign", values.CE_sign);
    model.set("DE_sign", values.DE_sign);
    model.set("DF_sign", values.DF_sign);
}
// what is the purpose of the num == 4 ? Is this to make it fit to the table somehow?
function displayValues() {
    var show = getShowVariables();
    var s = "<table class=right><tr><td>";
    var num = 1;

    $.each(show, function(i, e) {
        var name = names[e]; // objects can reference members by object.property or by object['property'], allowing you to use variables
        var value = valuesRounded[e];
        var unit = units[e];

        s += name + " = " + value + " " + unit + "<br>";

        if (num == 4) {
            s += "</td><td>";
            num = 0
        }
        num++;

    });

    s += "</td></tr></table>";

    $("#right")[0].innerHTML = s;
}







//THIS IS A HUGE PROBLEM!! I DON'T WANT TO GET THE VALUES FROM ANOTHER SIM (TMIN, TMAX) SHOULD I JUST PLACE THEM IN VARIABLES (LOOK BELOW)








// Here i'm getting all the inputs from Smart Sparrow. This is the start of the draw function. Only put in inputs because other variables won't be there
function getValuesFromSS() {
    values.F1 = model.get('F1');
    values.F2 = model.get('F2');
    page = model.get('page');
    values.F3 = model.get('F3');
}
//ones the inputs are pulled from Smart Sparrow then they're calculated (all part of the draw function). Make sure I start from elementary formulas and work done.
function calculateVariables() { 
    values.Ay = (1/5)*(5*values.F1+3*values.F2+1*values.F3);
    values.Ky = values.F1+values.F2+values.F3-values.Ay;

    values.theta1 = Math.atan(3/(7-2));
    values.theta2 = Math.atan((7-1/Math.tan(values.theta1))/1);
    values.theta3 = Math.atan(2/1);
    values.theta4 = Math.atan(1/(3-2));
    values.theta5 = Math.atan(1/3);


    values.KI = 0;
    values.KL = - values.Ky;

    values.LI = - values.KL / Math.sin(values.theta2);
    values.LJ = - values.LI * Math.cos(values.theta2);

    values.JI = -values.F3;
    values.JH = values.LJ

    values.CE = (values.Ay - values.F1)/2;
    values.DE = (values.Ay - values.F1)/Math.sin(values.theta3);
    values.DF = -values.CE - values.DE*Math.cos(values.theta3);

    if (values.KI > 0) {values.KI_sign = 1;} else if (values.KI < 0) {values.KI_sign = 2;} else {values.KI_sign = 3;}
    if (values.KL > 0) {values.KL_sign = 1;} else if (values.KL < 0) {values.KL_sign = 2;} else {values.KL_sign = 3;}

    if (values.LI > 0) {values.LI_sign = 1;} else if (values.LI < 0) {values.LI_sign = 2;} else {values.LI_sign = 3;}
    if (values.LJ > 0) {values.LJ_sign = 1;} else if (values.LJ < 0) {values.LJ_sign = 2;} else {values.LJ_sign = 3;}

    if (values.JI > 0) {values.JI_sign = 1;} else if (values.JI < 0) {values.JI_sign = 2;} else {values.JI_sign = 3;}
    if (values.JH > 0) {values.JH_sign = 1;} else if (values.JH < 0) {values.JH_sign = 2;} else {values.JH_sign = 3;}

    if (values.CE > 0) {values.CE_sign = 1;} else if (values.CE < 0) {values.CE_sign = 2;} else {values.CE_sign = 3;}
    if (values.DE > 0) {values.DE_sign = 1;} else if (values.DE < 0) {values.DE_sign = 2;} else {values.DE_sign = 3;}
    if (values.DF > 0) {values.DF_sign = 1;} else if (values.DF < 0) {values.DF_sign = 2;} else {values.DF_sign = 3;}


    // Round values into valuesRounded
    $.each(values, function(i, e) {
        valuesRounded[i] = round(values[i]);
    })
}
// case 1 = catagory 1. Is the order determiend by the order in the HTML code?
// page 3 = 30. Page 3 from start of SS tutorial? Start at page 0 or page 1? Why is crank shaft velocity page 1??!
// For case 1, pages 3,4,5,6,7,8 and 9 are all taken care of by the one return line. right?
// what is the max number of variables per category??
// what happens if I have less than 5 categories? How do I specify 3 categories for example?
function getShowVariables() {
    switch (category) {
        case "1": // Category 1
            switch (page) {
                case "10": 
                case "20": 
                case "30": 
                case "40": 
                case "50":
                case "60":
                    return ["F1", "F2", "F3"];
                    break;
            }
            break;

        case "2": // Category 2
            switch (page) {
                case "10":
                    return [];
                    break;
                case "20":
                    return ["Ay"];
                    break;
                case "30":
                case "40":
                case "50":
                case "60":
                    return ["Ay", "Kx", "Ky"];
                    break;
            }
            break;

        case "3":
            switch (page) {
                case "10":
                case "20":
                case "30":
                    return [];
                    break;
                case "40":
                case "50":
                case "60":
                    return ["KI", "KL"];
                    break;
            }
            break;

        case "4":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                    return [];
                    break;
                case "50":
                case "60":
                    return ["LI", "LJ"];
                    break;

            }
            break;

        case "5":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                    return [];
                    break;
                case "60":
                    return ["JH", "JI"];
                    break;

            }
            break;
    }
    return []; // empty
}
/*
function getShowVariables() {
    switch (category) {
        case "1": // Category 1
            switch (page) {
                case "10": //Crank Shaft Angular Velocity page
                case "20": //Input Power page
                    return ["tMax", "tMin", "tAvg"];
                    break;

                case "30": //Theta_1 and theta_2 page
                case "40": // and so on
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["tMax", "tMin", "tAvg", "P"];
                    break;
            }
            break;

        case "2": // Category 2
            switch (page) {
                case "10":
                    return [];
                    break;

                case "20":
                case "30":
                    return ["w_1_rad"];
                    break;

                case "40":
                    return ["w_1_rad", "theta_1", "theta_2"];
                    break;

                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["w_1_rad", "theta_1", "theta_2", "delta_E"];
                    break;
            }
            break;

        case "3":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["d_1", "d_2"];
                    break;
            }
            break;

        case "4":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["w_2_RPM"];
                    break;
            }
            break;

        case "5":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                    return [];
                    break;

                case "50":
                    return ["w_1_RPM", "wMin", "wMax"];
                    break;

                case "60":
                    return ["w_1_RPM", "wMin", "wMax", "C"];
                    break;

                case "70":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "i_reqd"];
                    break;

                case "80":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "rho", "i_reqd", "i_fw"];
                    break;

                case "90":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "rho", "i_reqd", "i_fw", "dI", "dO"];
                    break;
            }
            break;

    }
    return []; // empty
}
*/



// Debugging
// $.each(model.attributes, function(i, e) {
//     console.log(i + " : " + e);
// });


function round(input) {
    // if it is an integer number, return it
    if (parseInt(input) == parseFloat(input)) {
        return input;
    }

    // if the input is NaN or not available or 0, dont round
    if (isNaN(input) == true || input == " " || input == 0) {
        return input;
    }

    // if (input > 0) {
    //     var position = 0;
    //     var i = input;
    //     while (i < 1000) { // show 3 sig figs
    //         i *= 10;
    //         position++;
    //     }
    //     input = Math.round(i) / Math.pow(10, position);
    //     return input;
    // }

    var i = input;
    var sigfig = 3
    var mag = Math.floor(Math.log10(i)); 
    i = i * Math.pow(10, sigfig - mag);
    i = Math.round(i)
    i = i / Math.pow(10, sigfig - mag);
    input = i;
    
    return input;
}
