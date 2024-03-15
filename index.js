// ex1

for(let i = 0; i <= 10; i++) console.log(i)

let i = 0;

while(i <= 10) {
    console.log(i)
    i++
}

while(i <= 10) {
    console.log(i++)
}

let i = 0;

do {
    console.log(i)
    i++
} while (i <= 10)

do {
    console.log(i++)
} while (i <= 10)


// ex2

let word = 'Pneumonoultramicroscopicsilicovolcanoconiosis'

for(let i = 0; i < word.length; i++) {
    console.log(word[i])
}



// ex3

// 3.1
// method1/arrowFunc
const arrowFunc = (i = 0) => {
    for(let i = 0; i <= 10; i++) console.log(i)
}

arrowFunc()


// method2/arrowFunc
const arrowFunc1 = (a = 0) => {
    if (a <= 10) {
        console.log(a);
        arrowFunc1(a + 1);
    }
}

arrowFunc1();


// method1/funcDeclaration
function funcDeclaration(i = 0) {
    for(let i = 0; i <= 10; i++) console.log(i)
}

funcDeclaration()


// method2/funcDeclaration
function funcDeclaration1(a = 0) {
    if (a <= 10) {
        console.log(a);
        funcDeclaration1(a + 1);
    }
}

funcDeclaration1()

// method1/funcExpression
const funcExpression = function (i = 0) {
    for(let i = 0; i <= 10; i++) console.log(i)
}

funcExpression()


// method2/funcExpression
const funcExpression1 = function (a = 0) {
    if (a <= 10) {
        console.log(a);
        funcExpression1(a + 1);
    }
}

funcExpression1()


// 3.2
let word = 'Pneumonoultramicroscopicsilicovolcanoconiosis'

const arrowFunc = (i = 0) => {
    for (let i = 0; i < word.length; i++) {
        console.log(word[i])
    }
}

arrowFunc()


function funcDeclaration(i = 0) {
    for(let i = 0; i < word.length; i++) {
        console.log(word[i])
    }
}

funcDeclaration()


const funcExpression = function (i = 0) {
    for(let i = 0; i < word.length; i++) {
                console.log(word[i])
}
}

funcExpression()