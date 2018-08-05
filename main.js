EmojisAlpha = [
  "🅰",
  "🅱",
  "🌜",
  "🌛",
  "🎗",
  "🎏",
  "🌀",
  "♓",
  "🎐",
  "🎷",
  "🎋",
  "👢",
  "〽️",
  "🎵",
  "⚽",
  "🍳",
  "🌱",
  "💲",
  "🌴",
  "⛎",
  "✅",
  "🔱",
  "🍸",
  "❎",
  "💤"
]

text_to_emoji = (msg) => {
  __message = "";
  for(i=0;i<msg.length;i++){

    switch(msg[i].toLowerCase()){
      case "a":
      __message += EmojisAlpha[0];
      break;
      case "b":
      __message += EmojisAlpha[1];
      break;
      case "c":
      __message += EmojisAlpha[2];
      break;
      case "d":
      __message += EmojisAlpha[3];
      break;
      case "e":
      __message += EmojisAlpha[4];
      break;
      case "f":
      __message += EmojisAlpha[5];
      break;
      case "g":
      __message += EmojisAlpha[6];
      break;
      case "h":
      __message += EmojisAlpha[7];
      break;
      case "i":
      __message += EmojisAlpha[8];
      break;
      case "j":
      __message += EmojisAlpha[9];
      break;
      case "k":
      __message += EmojisAlpha[10];
      break;
      case "l":
      __message += EmojisAlpha[11];
      break;
      case "m":
      __message += EmojisAlpha[12];
      break;
      case "n":
      __message += EmojisAlpha[13];
      break;
      case "o":
      __message += EmojisAlpha[14];
      break;
      case "p":
      __message += "🅿";
      break;
      case "q":
      __message += EmojisAlpha[15];
      break;
      case "r":
      __message += EmojisAlpha[16];
      break;
      case "s":
      __message += EmojisAlpha[17];
      break;
      case "t":
      __message += EmojisAlpha[18];
      break;
      case "u":
      __message += EmojisAlpha[19];
      break;
      case "v":
      __message += EmojisAlpha[20];
      break;
      case "w":
      __message += EmojisAlpha[21];
      break;
      case "x":
      __message += EmojisAlpha[22];
      break;
      case "y":
      __message += EmojisAlpha[23];
      break;
      case "z":
      __message += EmojisAlpha[24];
      break;
    }

    }
  console.log(__message);
}
