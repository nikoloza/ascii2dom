(function (file) {
    var ascii,
        asciiFile = new XMLHttpRequest();

    asciiFile.open('GET', file, false);

    asciiFile.onreadystatechange = function () {
        if (asciiFile.readyState === 4) {
            if (asciiFile.status === 200 || asciiFile.status === 0) {
                ascii = asciiFile.responseText;
            }
        }
    };

    asciiFile.send(null);

    ascii = ascii.split('\n');

    var section = document.getElementsByTagName('section')[0];
    section.write  = '';

    var line;
    Array.prototype.forEach.call(ascii, function (value) {
        line = value.split('');

        var div = document.createElement('div');

        Array.prototype.forEach.call(line, function (value) {
            var span = document.createElement('span'),
                spanClass;

            switch (value) {
                case '.':
                    spanClass = 'blue';
                    break;
                case '+':
                    spanClass = 'red';
                    break;
                case ';':
                    spanClass = 'green';
                    break;
                case '`':
                    spanClass = 'yellow';
                    break;
                case '#':
                    spanClass = 'lilac';
                    break;
                case '@':
                    spanClass = 'pink';
                    break;
                case ':':
                    spanClass = 'brown';
                    break;
            }

            if (span.classList) span.classList.add(spanClass);
            else span.className += ' ' + spanClass;

            div.appendChild(span);

        });

        var clear = document.createElement('div');
        clear.className += 'clear';

        section.appendChild(div);

    });

    console.log(ascii.length + ' rows and ' + line.length + ' columns have been created');

})('ascii');
