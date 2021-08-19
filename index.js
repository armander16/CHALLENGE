// CHALLENGE BACKEND
// Write a program that prints all the numbers from 1 to 100. However, for multiples of 3, instead of the number, print “Music”. For multiples of 5 print “TI”. For numbers which are multiples of both 3 and 5, print “Musical”.
// But here's the catch: you can use only one `if`. No multiple branches, ternary operators or `else`.
// # Requirements
// * 1 if
// * You can't use `else`, `else if` or ternary
// * Unit tests
// * Feel free to apply your SOLID knowledge
// * You can write the challenge in any language you want. We are big fans of NodeJS, Javascript and TypeScript.
// # Submission
// Create a repository on GitLab, GitHub or any other similar service and just send us the link.

console.log('CHALLENGE BACKEND');
var out;

        for( var i = 1 ; i <=100; i++ ){
            out = multiplos(i);
            console.log(out);
        };

    function multiplos (data){
        var tres ;
        var cinco;
        var cambio;
        tres = data % 3 ;
        cinco = data % 5 ;
        cambio =[
                    [ 'Musical', 'Música', 'Música', 'Música', 'Música'],
                    [ 'TI' ],
                    ['TI' ]
                ];
            if(tres == 0 || cinco  == 0  ){
                data = cambio [tres][cinco];
            }

            return data;
    };


    module.exports = multiplos;
