// Module imports
const fs = require('fs');

// Parse our console arguments
const consoleArguments = [];
process.argv.forEach(function (element) {
    var argSeperationCharacter = new RegExp("=*");
    if (argSeperationCharacter.test(element)) {
        let keyValueOfargument = element.split("=");
        consoleArguments[keyValueOfargument[0]] = keyValueOfargument[1];
    } else {
        consoleArgs[element] = undefined;
    }
});

// Check if we have to adjust the path to the snap_history.json
let inputPath = './snap_history.json';
if (consoleArguments['file'] !== undefined) {
    inputPath = consoleArguments['file'];
    if (!inputPath.startsWith("./") && !inputPath.startsWith("/")) {
        inputPath = "./" + inputPath;
    }
}

console.log("Using '" + inputPath + "' as path to the file to parse!");
const input = require(inputPath);

const received = input["Received Snap History"];
const send = input["Sent Snap History"];

console.log("Length of received: " + received.length);

let output_received = {
    hour: {
        zero: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
        eleven: 0,
        twelve: 0,
        thirteen: 0,
        fourteen: 0,
        fifteen: 0,
        sixteen: 0,
        seventeen: 0,
        eighteen: 0,
        nineteen: 0,
        twenty: 0,
        twentyone: 0,
        twentytwo: 0,
        twentythree:0
    }
};

let i;
for(i = 0; i < received.length; i++){
    console.log("------------------------------- ");
    console.log(received[i]["Sender"]);
    console.log(received[i]["Recipient"]);
    console.log(received[i]["Media Type"]);
    const media = received[i]["Media Type"];
    let created = received[i]["Created"].split(" ")[1];
    console.log(created);
    if(media === "IMAGE"){
        const hour = created.split(":")[0];
        const minute = created.split(":")[1];
        putHourInJSON(hour);
    }
}
let output_received_raw = output_received.hour.zero + "\n" + output_received.hour.one + "\n" + output_received.hour.two + "\n" + output_received.hour.three + "\n"
+ output_received.hour.four + "\n" + output_received.hour.five + "\n" + output_received.hour.six + "\n" + output_received.hour.seven + "\n" + output_received.hour.eight + "\n"
+ output_received.hour.nine + "\n" + output_received.hour.ten + "\n" + output_received.hour.eleven + "\n" + output_received.hour.twelve + "\n" + output_received.hour.thirteen + "\n"
+ output_received.hour.fourteen + "\n" + output_received.hour.fifteen + "\n" + output_received.hour.sixteen + "\n" + output_received.hour.seventeen + "\n" + output_received.hour.eighteen + "\n"
+ output_received.hour.nineteen + "\n" + output_received.hour.twenty + "\n" + output_received.hour.twentyone + "\n" + output_received.hour.twentytwo + "\n" + output_received.hour.twentythree;

console.log(output_received_raw);

let file = fs.createWriteStream('received.txt');
file.on('error', function(err) {});
file.write(output_received_raw);
file.end();

function putHourInJSON(hour) {
    switch (hour){
        case "00": output_received.hour.zero = output_received.hour.zero+1; break;
        case "01": output_received.hour.one = output_received.hour.one+1; break;
        case "02": output_received.hour.two = output_received.hour.two+1; break;
        case "03": output_received.hour.three = output_received.hour.three+1; break;
        case "04": output_received.hour.four = output_received.hour.four+1; break;
        case "05": output_received.hour.five = output_received.hour.five+1; break;
        case "06": output_received.hour.six = output_received.hour.six+1; break;
        case "07": output_received.hour.seven = output_received.hour.seven+1; break;
        case "08": output_received.hour.eight = output_received.hour.eight+1; break;
        case "09": output_received.hour.nine = output_received.hour.nine+1; break;
        case "10": output_received.hour.ten = output_received.hour.ten+1; break;
        case "11": output_received.hour.eleven = output_received.hour.eleven+1; break;
        case "12": output_received.hour.twelve = output_received.hour.twelve+1; break;
        case "13": output_received.hour.thirteen = output_received.hour.thirteen+1; break;
        case "14": output_received.hour.fourteen = output_received.hour.fourteen+1; break;
        case "15": output_received.hour.fifteen = output_received.hour.fifteen+1; break;
        case "16": output_received.hour.sixteen = output_received.hour.sixteen+1; break;
        case "17": output_received.hour.seventeen = output_received.hour.seventeen+1; break;
        case "18": output_received.hour.eighteen = output_received.hour.eighteen+1; break;
        case "19": output_received.hour.nineteen = output_received.hour.nineteen+1; break;
        case "20": output_received.hour.twenty = output_received.hour.twenty+1; break;
        case "21": output_received.hour.twentyone = output_received.hour.twentyone+1; break;
        case "22": output_received.hour.twentytwo = output_received.hour.twentytwo+1; break;
        case "23": output_received.hour.twentythree = output_received.hour.twentythree+1; break;
        default: console.log("Error"); break;
    }
}
