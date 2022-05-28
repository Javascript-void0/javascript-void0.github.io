function HelpCommand(text) {
    let texts = text.split(' ')
    if (typeof texts[1] === 'undefined') {
        lines = ['CMD            Starts a new instance of the Win',
                 '               dows command interpreter.       ',
                 'DATE           Displays the date.              ',
                 'ECHO           Displays messages, or turns comm',
                 '               and echoing on or off.          ',
                 'EXIT           Quits the CMD.EXE program (comma',
                 '               nd interpreter).                ',
                 'HELP           List the avaiable commands.     ',
                 'REPO           Opens the repository.           ',
                 'SYSTEMINFO     Displays machine specific proper',
                 '               ties and configuration.         ',
                 'TASKLIST       Displays all currently running t',
                 '               asks including services.        ',
                 'TIME           Displays the system time.       ',
                 'TITLE          Sets the window title for a CMD.',
                 '               EXE session.                    ',
                 'TREE           Graphically displays the directo',
                 '               ry structure of a drive or path.',
                 'VER            Displays the Windows version.   ',
                 'VOL            Displays a disk volume label and',
                 '               serial number.                  ',
                 '                                               ',
                 'For more information on tools see the command-l',
                 'ine reference in the online help.              ']
    } else {
        switch (texts[1].toUpperCase()) {
            case 'CMD':
                lines = ['Starts a new instance of the Windows Command in',
                         'terpreter                                      ']
                break
            case 'DATE':
                lines = ['Displays or sets the date.                     ']
                break
            case 'ECHO':
                lines = ['Displays messages.                             ',
                         '                                               ',
                         '  ECHO [message]                               ']
                break
            case 'EXIT':
                lines = ['Quits the CMD.EXE program (command interpreter)']
                break
            case 'HELP':
                lines = ['Provides help information for Windows commands.',
                         '                                               ',
                         'HELP [command]                                 ',
                         '                                               ',
                         '    command - displays help information on that',
                         '              command.                         ']
                break
            case 'REPO':
                lines = ['Opens the repository.                          ']
                break
            case 'SYSTEMINFO':
                lines = ['This tool displays operating system configurati',
                         'on information for a local or remote machine.  ']
                break
            case 'TASKLIST':
                lines = ['This tool displays a list of currently running ',
                         'processes on either a local or remote machine. ']
                break
            case 'TIME':
                lines = ['Displays or sets the date.                     ']
                break
            case 'TITLE':
                lines = ['Sets the window title for the command prompt wi',
                         'ndow.                                          ',
                         '                                               ',
                         'TITLE [string]                                 ',
                         '                                               ',
                         '  string       Specifies the title for the comm',
                         '               and prompt window.              ']
                break
            case 'TREE':
                lines = ['Graphically displays the folder structure.     ']
                break
            case 'VER':
                lines = ['Displays the Windows version.                  ']
                break
            case 'VOL':
                lines = ['Displays the disk volume label and serial numbe',
                         'r, if they exist.                              ']
                break
            default:
                lines = ['This command is not supported by the help utili',
                         'ty.                                            ']
                break
        }
    }
    listToHTML(lines)
}

function listToHTML(lines) {
    for (i = 0; i < lines.length; i++) {
        temp = document.createElement('div')
        header.append(temp)
        temp.innerHTML = lines[i].replaceAll(' ', '&nbsp')
    }
}