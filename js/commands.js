function RunCommand(text) {
    while (text.charAt(0) === ' ') {
        text = text.substring(1)
    }
    while (text.charAt(-1) === ' ') {
        text = text.substring(0, string.length - 1)
    }
    let texts = text.split(' ')
    for (i = 0; i < texts.length; i++) {
        if (texts[i] == '') {
            texts.splice(i, 1)
        }
    }
    if (texts.length == 0) {
        NewLine()
        return
    }
    if (texts[0].length > 0) {
        header = document.getElementById('lines')
        header.append(temp = document.createElement('span'))
        upperBase = texts[0].toUpperCase()
        switch (upperBase) {
            case 'CMD':
                window.open('index.html', '_blank')
                line = 'Opening new window...'
                header.append(temp = document.createElement('br'))
                temp.innerHTML = fillSpace(line)
                break
            case 'COLOR':
                themes = [['#262845', '#eda031', '#e7ffee', '#262845', 'https://lospec.com/palette-list/bumblebit'],
                          ['#181D1A', '#D3E4D3', '#7C8477', '#D3E4D3', 'https://lospec.com/palette-list/tinylittlegirl'],
                          ['#252B2C', '#E1F0F0', '#56AEC4', '#E1F0F0', 'https://lospec.com/palette-list/bluetiger-3c'],
                          ['#314E52', '#D3D3D3', '#F2A154', '#314E52', 'https://lospec.com/palette-list/rusty-steam'],
                          ['#AB4949', '#E3E8C9', '#7DA257', '#E3E8C9', 'https://lospec.com/palette-list/tree-frog'],
                          ['#4B4B4B', '#A4A4A4', '#8080FF', '#4B4B4B', 'https://lospec.com/palette-list/blue-snow']]
                if (typeof texts[1] === 'undefined') {
                    arg = 0
                } else {
                    arg = parseInt(texts[1])
                    if (isNaN(arg)) {
                        HelpCommand('help color')
                        return
                    }
                }
                if (arg > 6 || arg < 0) {
                    HelpCommand('help color')
                    return
                } else {
                    r = document.querySelector(':root')
                    r.style.setProperty('--primary', themes[arg][0])
                    r.style.setProperty('--secondary', themes[arg][1])
                    r.style.setProperty('--accent', themes[arg][2])
                    r.style.setProperty('--selection-text-color', themes[arg][3])
                    header.append(temp = document.createElement('span'))
                    temp.innerHTML = `<a href="${themes[arg][4]}" target="_blank" rel="noopener nonreferrer">` + themes[arg][4] + '</a>'
                    fill = fillSpace(themes[arg][4]).slice(themes[arg][4].length)
                    for (i = 0; i < (fill.length / 5); i++) {
                        temp.innerHTML += '&nbsp'
                    }
                }
                break
            case 'DATE':
                today = new Date().toLocaleDateString()
                day = new Date().getDay()
                switch(day) {
                    case 0:
                        day = 'Sun'
                    case 1:
                        day = 'Mon'
                    case 2:
                        day = 'Tue'
                    case 3:
                        day = 'Wed'
                    case 4:
                        day = 'Thu'
                    case 5:
                        day = 'Fri'
                    case 6:
                        day = 'Sat'
                }
                line = `The current date is: ${day} ${today}`
                header.append(temp = document.createElement('div'))
                temp.innerHTML = fillSpace(line)
                break
            case 'ECHO':
                line = text.slice(5)
                if (line.length != 0) {
                    header.append(temp = document.createElement('div'))
                }
                temp.innerHTML = fillSpace(line)
                break
            case 'EXIT':
                close()
                break
            case 'HELP':
                HelpCommand(text)
                break
            case 'REPO':
                window.open('https://github.com/Javascript-void0/javascript-void0.github.io', '_blank')
                line = 'Opening the repository...'
                header.append(temp = document.createElement('div'))
                temp.innerHTML = fillSpace(line)
                break
            case 'SYSTEMINFO':
                lines = ['                                               ',
                         'Host Name:                 Guest               ',
                         'OS Name:                   Microsoft Windows 95',
                         'OS Version:                4.1.10093 N/A Build ',
                         '                           19928               ',
                         'OS Manufacturer:           Microsoft Corporatio',
                         '                           n                   ',
                         'OS Configuration:          Standalone Workstati',
                         '                           on                  ',
                         'OS Build Type:             Multiprocessor Free ',
                         'Registered Owner:          rick@rickastley.co.u',
                         '                           k                   ',
                         'Registered Organization:   Rick Astley Inc.    ',
                         'Product ID:                00376-37102-38874-AP',
                         '                           POE                 ',
                         'Original Install Date:     04/20/1995, 5:14:53 ',
                         '                           PM                  ',
                         'System Boot Time:          04/20/1995, 5:14:54 ',
                         '                           PM                  ',
                         'System Manufacturer:       LG Corporation      ',
                         'System Model:              LG Smart Refrigerato',
                         '                           r                   ',
                         'System Type:               x69-based Refrigerat',
                         '                           or                  ',
                         'Processor(s):              1 Processor(s) Insta',
                         '                           lled.               ',
                         '                           [01]: Intel69 Family',
                         '                           8 Model 303 Stepping',
                         '                           12 GenuineIntel ~120',
                         '                           Mhz                 ',
                         'BIOS Version:              LG Corportaion 12.77',
                         '                           2, 5/4/109          ',
                         'Windows Directory:         C:\\WINDOWS         ',
                         'System Directory:          C:\\WINDOWS\\system69 ',
                         'Boot Device:               \\Device\\HarddiskVolu',
                         '                           me1                 ',
                         'System Locale:             en-us;English (Unite',
                         '                           d States)           ',
                         'Input Locale:              en-us;English (Unite',
                         '                           d States)           ',
                         'Time Zone:                 (UTC-05:00) Eastern ',
                         '                           Time (US & Canada)  ',
                         'Total Physical Memory:     32,109 MB           ',
                         'Available Physical Memory: 12,601 MB           ',
                         'Virtual Memory: Max Size:  42,933 MB           ',
                         'Virtual Memory: Available: 22,380 MB           ',
                         'Virtual Memory: In Use:    20,553 MB           ',
                         'Page File Location(s):     C:\\pagefile.sys     ',
                         'Domain:                    WORKGROUP           ',
                         'Logon Server:              \\Guest              ',
                         'Hotfix(s):                 5 Hotfix(s) Installe',
                         '                           d.                  ',
                         '                           [01]: KB1973664     ',
                         '                           [02]: KB0384861     ',
                         '                           [03]: KB1088287     ',
                         '                           [04]: KB5017363     ',
                         '                           [05]: KB5127364     ',
                         'Network Card(s):           2 NIC(s) Installed. ',
                         '                           [01]: Wireless-AC Ne',
                         '                           twork Controller    ',
                         '                                 Connection Nam',
                         '                                 e: Wi-Fi      ',
                         '                                 DHCP Enabled: ',
                         '                                 Yes           ',
                         '                                 DHCP Server:  ',
                         '                                 500.0.0.0     ',
                         '                                 IP address(es)',
                         '                                 [01]: 10.0.1.0',
                         '                                 [02]: bf90::f2',
                         '                                 4e:a3fe:b45c:4',
                         '                                 deb           ',
                         '                           [02]: Bluetooth Devi',
                         '                                 ce (Personal A',
                         '                                 rea Network)  ',
                         '                                 Connection Nam',
                         '                                 e: Bluetooth N',
                         '                                 etwork Connect',
                         '                                 ion 2         ',
                         '                                 Status:       ',
                         '                                 Media disconne',
                         '                                 cted          ',
                         'Hyper-V Requirements:      A hypervisor has bee',
                         '                           n detected. Features',
                         '                           required for Hyper-V',
                         '                           will not be displaye',
                         '                           d.                  ']
                listToHTML(lines, lines.length + 1, 0)
                return
            case 'TASKLIST':
                lines = ['Image Name                     PID    Mem Usage',
                         '========================= ======== ============',
                         'System Idle Process              0          8 K',
                         'System                           4        144 K',
                         'Secure System                  104     25,060 K',
                         'Registry                       168     66,120 K',
                         'smss.exe                       552      1,104 K',
                         'csrss.exe                      816      4,968 K',
                         'wininit.exe                    896      5,316 K',
                         'services.exe                   944      9,668 K',
                         'csrss.exe                      952      5,808 K',
                         'LsaIso.exe                     992      3,404 K',
                         'svchost.exe                  10552     17,084 K',
                         'ctfmon.exe                    1760     27,312 K',
                         'ChsIME.exe                    8536      7,904 K',
                         'RuntimeBroker.exe            11888     20,788 K',
                         'WmiPrvSE.exe                 12212      9,760 K',
                         'RtkAudUService64.exe         14292      8,952 K',
                         'svchost.exe                  16168     21,488 K',
                         'svchost.exe                   3028     15,780 K',
                         'RuntimeBroker.exe            12160     27,728 K',
                         'dasHost.exe                  10212      6,976 K',
                         'dasHost.exe                   2140      4,896 K',
                         'dasHost.exe                   7988      9,396 K',
                         'dllhost.exe                  13248     11,456 K',
                         'UserOOBEBroker.exe           18064      9,028 K',
                         'svchost.exe                   9616      5,972 K',
                         'TextInputHost.exe              520    134,380 K',
                         'LockApp.exe                  14792     29,704 K',
                         'RuntimeBroker.exe            13660     31,196 K',
                         'ShellExperienceHost.exe       9292     43,436 K',
                         'RuntimeBroker.exe             9920     17,864 K',
                         'SystemSettingsBroker.exe      2460     23,964 K',
                         'RuntimeBroker.exe            13068      8,092 K',
                         'svchost.exe                  15248     11,412 K',
                         'RuntimeBroker.exe             8372     15,284 K',
                         'backgroundTaskHost.exe       19284      1,656 K',
                         'FileCoAuth.exe               16972     27,224 K',
                         'svchost.exe                  17276      6,100 K',
                         'svchost.exe                  20228      8,088 K',
                         'chrome.exe                    5308     82,084 K',
                         'svchost.exe                  10624     18,660 K',
                         'chrome.exe                   14988     19,696 K',
                         'WUDFHost.exe                 18980      6,384 K',
                         'svchost.exe                  16744      6,060 K',
                         'svchost.exe                  14812      9,960 K',
                         'svchost.exe                   3256      7,732 K',
                         'dllhost.exe                  19376     13,500 K',
                         'smartscreen.exe              11852     23,940 K',
                         'cmd.exe                       9564      5,008 K',
                         'conhost.exe                   7288     19,832 K',
                         'tasklist.exe                 15040      9,180 K',
                         'WmiPrvSE.exe                 15824     10,124 K']
                listToHTML(lines, lines.length + 1, 0)
                return
            case 'TIME':
                current = new Date()
                hour = current.getHours()
                minute = current.getMinutes()
                second = current.getSeconds()
                millisecond = current.getMilliseconds()

                line = `The current time is: ${hour}:${minute}:${second}.${millisecond}`
                header.append(temp = document.createElement('div'))
                temp.innerHTML = fillSpace(line)
                break
            case 'TITLE':
                title = text.slice(5)
                if (title.length == 0) {
                    br = true // ?
                } else {
                    document.title = title
                }
                break
            case 'TREE':
                lines = ['Folder PATH listing for volume Local Disk     ',
                         'Volume serial number is AA2C-008A             ',
                         'C:.                                           ',
                         '├───asset                                     ',
                         '│   └───Envy-Code-R.ttf                       ',
                         '├───js                                        ',
                         '│   ├───commands.js                           ',
                         '│   ├───cursor.js                             ',
                         '│   ├───help.js                               ',
                         '│   └───input.js                              ',
                         '├───index.html                                ',
                         '├───README.md                                 ',
                         '└───style.css                                 ']
                listToHTML(lines, lines.length + 1, 0)
                return
            case 'VER':
                line = 'Microsoft Windows [Version 4.10.2222 A]'
                header.append(temp = document.createElement('div'))
                temp.innerHTML = fillSpace(line)
                break
            case 'VOL':
                lines = ['Volume in drive C is Local Disk', 'Volume Serial Number is AA2C-008A']
                for (line in lines) {
                    header.append(temp = document.createElement('div'))
                    temp.innerHTML = fillSpace(lines[line])
                }
                break
            default:
                line = `'${texts.join(' ')}' is not a recognized command. Type 'help' for list of commands. `
                header.append(temp = document.createElement('div'))
                temp.innerHTML = fillSpace(line)
                break
        }
    NewLine()
    }
}