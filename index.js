const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "/index.html" });
    res.write("Aka Nguyen");
    res.end();
});



dashboard.listen(process.env.port || 0);

logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Restarting...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/dark03devil0/dark03devil0-/main/package.json").then((res) => {
    logger(res['data']['name'], "[ NAME ]");
    logger("Version: " + res['data']['version'], "[ VERSION ]");
    logger(res['data']['description'], "[ DESCRIPTION ]");
const chalk = require('chalkercli');
const rainbow = chalk.rainbow(`
==============================================\n\u254f                                            \u254f\n\u254f                                            \u254f\n\u254f             \x44\x41\x52\x4b\x20\x44\x45\x56\x49\x4c\x20\x52\x41\x48\x55\x4c               \u254f\n\u254f                                            \u254f\n\u254f                                            \u254f\n\u254f            \ud835\udc0d\ud835\udc00\ud835\udc0c\ud835\udc04 \x3a\x20\x44\x61\x72\x6b\x20\x44\x65\x76\x69\x6c\x20\x52\x61\x68\x75\x6c         \u254f\n\u254f            \ud835\udc01\ud835\udc08\ud835\udc11\ud835\udc13\ud835\udc07\ud835\udc03\ud835\udc00\ud835\udc18: \x32\x32\x2f\x30\x35\x2f\x31\x39\x39\x39            \u254f\n\u254f            \ud835\udc06\ud835\udc08\ud835\udc13\ud835\udc07\ud835\udc14\ud835\udc01: \x64\x61\x72\x6b\x30\x33\x64\x65\x76\x69\x6c\x30            \u254f\n\u254f             \ud835\udc16\ud835\udc0f\x3a\x20\x39\x32\x33\x33\x36\x30\x39\x35\x35\x31                 \u254f\n\u254f            \ud835\udc05\ud835\udc01 \x3a\x6d\x2e\x6d\x65\x2f\x31\x30\x30\x30\x39\x32\x39\x36\x38\x38\x31\x34\x33\x32\x34       \u254f\n\u254f                                            \u254f\n==============================================\n\n\n\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\n\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\n\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255d\u2591\u2591\n\u2588\u2588\u2551\u2591\u255a\u2550\u255d\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u255a\u2550\u255d\u2591\u2591\u2591\u2591\u2591\u255a\u2550\u255d\u255a\u2550\u255d\u2591\u2591\u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u255d\u2591\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n\n\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2557\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557\u2591\u2588\u2588\u2554\u255d\n\u2588\u2588\u2588\u2588\u2588\u2588\u2566\u255d\u2591\u255a\u2588\u2588\u2588\u2588\u2554\u255d\u2591\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2591\u2591\u255a\u2588\u2588\u2554\u255d\u2591\u2591\n\u2588\u2588\u2588\u2588\u2588\u2588\u2566\u255d\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2591\n\u255a\u2550\u2550\u2550\u2550\u2550\u255d\u2591\u2591\u2591\u2591\u255a\u2550\u255d\u2591\u2591\u2591\n\n\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2557\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2557\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\n\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\n\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u255a\u2550\u255d\u2591\u2591\u255a\u2550\u255d\u255a\u2550\u255d\u2591\u2591\u255a\u2550\u255d\u255a\u2550\u255d\u2591\u2591\u255a\u2550\u255d\u2591\u255a\u2550\u2550\u2550\u2550\u2550\u255d\u2591\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u2764\ufe0f\n\n\n\n\n\n\n\u25c6\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25c6\u300e \x44\x41\x52\x4b\x20\x44\x45\x56\x49\x4c\x20\x52\x41\x48\x55\x4c \u300f\u25c6\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25c6`).stop(); // Don't start the animation

rainbow.render(); // Display the first frame

const frame = rainbow.frame(); // Get the second frame
console.log(frame);
});
startBot();
/*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
    const local = JSON.parse(readFileSync('./package.json'));
    if (semver['lt'](local.version, res['data']['version'])) {
        if (local.autoUpdate == !![]) {
            logger('A new update is available, start update processing...', '[ UPDATE ]');
            const updateBot = {};
            updateBot.cwd = __dirname
            updateBot.stdio = 'inherit' 
            updateBot.shell = !![];
            const child = spawn('node', ['update.js'], updateBot);
            child.on('exit', function () {
                return process.exit(0);
            })
            child.on('error', function (error) {
                logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
            });
        } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        startBot();
    } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
