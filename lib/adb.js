/**
 * @author andhikayuana@gmail.com
 * @since july, 25 2018
 * 
 * @see http://adbshell.com/commands
 * 
 * adb commands : 
 * 1. ADB Debugging
 *    - adb devices [v]
 *    - adb forward 
 *    - adb kill-server [v]
 *    - adb start-server [v]
 * 2. Wireless
 *    - adb connect
 *    - adb usb
 * 3. Package Manager
 *    - adb install
 *    - adb uninstall
 *    - adb shell pm list packages
 *    - adb shell pm path
 *    - adb shell pm clear
 * 4. File Manager
 *    - adb pull
 *    - adb push
 *    - adb shell ls
 *    - adb shell cd
 *    - adb shell rm
 *    - adb shell mkdir
 *    - adb shell touch
 *    - adb shell pwd
 *    - adb shell cp
 *    - adb shell mv
 * 5. Network
 *    - adb shell netstat
 *    - adb shell ping
 *    - adb shell netcfg
 *    - adb shell ip
 * 6. Logcat
 *    - adb logcat [-] not all
 *    - adb shell dumpsys
 *    - adb shell dumpstate
 * 7. Screenshot
 *    - adb shell screencap
 *    - adb shell screenrecord [4.4+]
 * 8. System
 *    - adb root
 *    - adb sideload
 *    - adb shell ps
 *    - adb shell top
 *    - adb shell getprop
 *    - adb shell setprop
 */
const { exec } = require('child_process')

var tester = () => { return 4 + 6; }

module.exports.tester = tester

/**
 * ADB Debugging
 */
module.exports.devices = (callback) => exec('adb devices', callback)
module.exports.killServer = (callback) => exec('adb kill-server', callback)
module.exports.startServer = (callback) => exec('adb start-server', callback)
module.exports.logcat = (callback) => exec('adb logcat', callback)
module.exports.logcatV = (callback) => exec('adb logcat *:V', callback)
module.exports.logcatD = (callback) => exec('adb logcat *:D', callback)
module.exports.logcatI = (callback) => exec('adb logcat *:I', callback)
module.exports.logcatW = (callback) => exec('adb logcat *:W', callback)
module.exports.logcatE = (callback) => exec('adb logcat *:E', callback)
module.exports.logcatF = (callback) => exec('adb logcat *:F', callback)
module.exports.logcatS = (callback) => exec('adb logcat *:S', callback)