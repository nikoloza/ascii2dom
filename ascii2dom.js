function ascii(file) {

    var ascii;

    var asciiFile = new XMLHttpRequest();
    asciiFile.open("GET", file, false);

    asciiFile.onreadystatechange = function() {
        if (asciiFile.readyState === 4) {
            if (asciiFile.status === 200 || asciiFile.status == 0) {
                ascii = asciiFile.responseText;
            }
        }
    }

    asciiFile.send(null);

    var ascii = ascii.split('\n');

    Array.prototype.forEach.call(ascii, function(value, i) {
        var line = value.split(''),
            div = document.createElement("div");

        Array.prototype.forEach.call(line, function(value, i) {
            var span = document.createElement("span");

            var spanClass;
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

            div.style.height = 100 / ascii.length + '%';
            span.style.width = 100 / line.length + '%';

            div.appendChild(span);
        });

        var clear = document.createElement("div");
        clear.className += 'clear';

        var section = document.getElementsByTagName('section')[0];
        section.appendChild(div);

    });

};

ascii('ascii');