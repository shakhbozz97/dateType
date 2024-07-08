var fullDate = prompt("Ennter fuul date: ");

switch (fullDate) {
  case "hh:mm YYYY/DD/MM":
    console.log("18:00 2024/08/07 ");
    break;
  case "YYYY/DD/MM hh:mm":
    console.log("2024/08/07 18:00 ");
    break;
  case "YYYY.DD.MM hh:mm":
    console.log(" 2024.08.07 18:00 ");
    break;
  case " hh:mm YYYY.DD.MM hh:mm ":
    console.log("18:00 2024.08.07 ");
    break;
  case "hh:mm YYYY.MM.DD":
    console.log("18:00 2024.07.08 ");
    break;
  case "hh:mm YYYY-MM-DD":
    console.log("18:00 2024-07-08 ");
    break;
  case "YYYY-MM-DD hh:mm":
    console.log(" 2024-07-08 18:00");
    break;
  case "hh:mm YYYY-DD-MM":
    console.log("18:00 2024-08-07 ");
    break;
  case "YYYY-MM-DD hh:mm":
    console.log(" 2024,July,07 18:00");
    break;
  case " YYYY,DD,MM hh:mm":
    console.log(" 2024-08-07 18:00");
    break;
  default:
    console.log("Uncown date");
}
