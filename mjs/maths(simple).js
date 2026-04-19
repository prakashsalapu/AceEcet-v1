// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "The determinant of orthogonal matrise is",
    answer:"±1", 
    options: [
      "1 only",
      "0",
      "±1",
      "2"
    ]
  },
    {
    numb: 2,
    question: "What is the another name of craments rule",
    answer: "Determinant",
    options: [
      "Matrix Method",
      "cramerts^-1",
      "Determinant",
      "fractional"
    ]
  },
    {
    numb: 3,
    question: "The number of partial fractions of 28 (2-2) is",
    answer: "None of these",
    options: [
      "4",
      "3",
      "2",
      "None of these"
    ]
  },
    {
    numb: 4,
    question: "tan 15°+tan 75°=",
    answer: "4",
    options: [
      "4",
      "√3",
      "2√3",
      "0"
    ]
  },
    {
    numb: 5,
    question: "Sinh2x + cosh2x=",
    answer: "2e^2",
    options: [
      "2e^2x",
      "3e^2x",
      "e2x",
      "None of these"
    ]
  },
  {
    numb: 6,
    question: "a+b=2b cosc-cosa/sina-sinc=",
    answer: "tan 2b",
    options: [
      "cot b",
      "cot 2b",
      "tan 2b",
      "tan B"
    ]
  }, {
    numb: 7,
    question: "sin 50°- sin70°+ sin10° =",
    answer: "1",
    options: [
      "-1",
      "0",
      "1",
      "3/2"
    ]
  }, {
    numb: 8,
    question: "The standard form of parabola is",
    answer: "y^2=4ax",
    options: [
      "y^2=4ax",
      "x^2=4ax",
      "x=y^2x",
      "none"
    ]
  }, {
    numb: 9,
    question: "the slope of a line, whose inclination is 45° is",
    answer: "0",
    options: [
      "0",
      "1",
      "2",
      "none"
    ]
  }, {
    numb: 10,
    question: "The intercept Made on xaris by the circle x^2+y^2+2gx+2fy+e=0 is",
    answer: "2√g^2-c",
    options: [
      "2√g^2-c",
      "3√g-c",
      "2√g^2-2",
      "All of these above"
    ]
  }, {
    numb: 11,
    question: "The formulea of Eccentricity of Ellips is",
    answer: "√1+a^2/b^2",
    options: [
      "√1+a^2/b^2",
      "√1-a^2/b^2",
      "√1-a/b",
      "none"
    ]
  }, {
    numb: 12,
    question: "d/dx(sinx) =",
    answer: "cosx",
    options: [
      "sinx", 
      "cotx",
      "cosx",
      "all the above"
    ]
  }, {
    numb: 13,
    question: "log_a(mn) =",
    answer: "log a ^ m +log a ^ n",
    options: [
      "log_a(m) +log a ^ m",
      "log_a ^ m +log a",
      "log_a ^ m +log a ^ n",
      "none"
    ]
  }, {
    numb: 14,
    question: "d/dx (sinh^- 1 x) =",
    answer: "1/(sqrt(1 + x ^ 2))",
    options: [
      "1/(sqrt(1 - x ^ 2))",
      "1/(sqrt(1 + x ^ 2))",
      "1/(sqrt(1 - x))",
      "none"
    ]
  }, {
    numb: 15,
    question: "e^1/2 logx=",
    answer: "1/(sqrt(x))",
    options: [
      "1/(sqrt(x))",
      "1/(sqrt(y))",
      "1/(sqrt(x ^ 2))",
      "none"
    ]
  }, {
    numb: 16,
    question: "integrate cosecx.cotx.dx=",
    answer: "- cos ecx + c",
    options: [
      "- cos ecx + c",
      "cot x + c",
      "cotxtc",
      "- tan x - c"
    ]
  }, {
    numb: 17,
    question: "integrate uv dx =",
    answer: "u * integrate v dx - int dv dx ( int vdx)dx",
    options: [
      "u * integrate v dx - int dv dx ( int vdx)dx",
      "u * integrate v dx - int dv dx ( int udx)dx",
      "v * integrate v dx - int dv dx(int vdx) dx",
      "v * integrate v dx - int dv dx(int udx) dx", 
    ]
  }, {
    numb: 18,
    question: "integrate e^2 sinxdx=",
    answer: "(e ^ x)/2 * [sin x - cos x] + c",
    options: [
      "(e ^ x)/2 * [cot x - tan x] - c",
      "(e ^ x)/2 * [cosec - cosx] + c",
      "(e ^ x)/2 * [sin x - cos x] + c",
      "(e ^ x)/2 * [sin x - cos x] + c"
    ]
  }, {
    numb: 19,
    question: "A + C =B Rightarrow tan A-tanstanc=",
    answer: "tana + tanB+ tanc",
    options: [
      "tana + tanB+ tanc",
      "tanB-tanA-tanc",
      "tanA + tanc - tanB ",
      "-(tan A + tanB + tan c)"
    ]
  }, {
    numb: 20,
    question: "cosh(x) + cosh(- x) =",
    answer: "coshx",
    options: [
      "e^x",
      "2 sinhx",
      "e^-x",
      "coshx"
    ]
  }, {
    numb: 21,
    question: "The order and degree of the differentialcquation [1 + (d/dx (y))] ^ (3/2) = p d^2y/dx^2",
    answer: "2,2",
    options: [
      "2,2",
      "2,1",
      "3,2",
      "3,4"
    ]
  }, {
    numb: 22,
    question: "1 The order and degree of the different al Equation underline d overline y =d^2y d x^ 2 = [y + ((dy)/(dx))] ^ (1/4) ;",
    answer: "1,2",
    options: [
      "1,2",
      "2,4",
      "3,2",
      "3,4"
    ]
  }, {
    numb: 23,
    question: "integrate cosec(ax+b) cot(ax+b) dx=",
    answer: "- 1/a * co * (sec[ax + b]) + c",
    options: [
      "1/a * log([[ax + b]]) + c",
      "- 1/a * co * (sec[ax + b]) + c",
      "1/a * co * sec(ax + b) + c",
      "1/a * e^ax + c"
    ]
  }, {
    numb: 24,
    question: "|z_{1}*z_{2}| =",
    answer: "|z_{1}||z_{2}|",
    options: [
      "|z_{1}*z_{2}| =",
      "|z_{1}||z_{2}|",
      "|z_{2}||z_{1}|",
      "none"
    ]
  }, {
    numb: 25,
    question: "arg|z1/z2| =",
    answer: "arg(z1) -arg(z2) ",
    options: [
      "arg (z2)-arg(z1)",
      "arg(z1) - arg(z1)",
      "arg (z1) -arg (z2)",
      "all of the above"
    ]
  },
  
];