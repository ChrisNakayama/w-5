Age Calculator

By Christopher Nakayama

Description:

Solar Age Calculator

This program calculates age in solar years based on different planets years compared to an earth year. This program also calculates how many years left a person might have to live based on an average lifespan on earth.


Setup/Installation Requirements:


Setup/Installation Requirements:

1.Clone w-5 to desired directory or download .zip file.

2.Navigate to the directory in terminal or other command line interface with this command:

$ cd w-5

while in the root directory install nodes with:

$ npm install

3.Once bundle.js and the node_module are installed run this command:

$ npm run start

4. After $ npm run start command has completed you are ready to test! 
5. Use the command: $ npm run test 





Known Bugs:

There are no known bugs. Support and contact details:

If you have any issues or questions, please contact me at cnakayam@gmail.com.

Technologies Used:

HTML, CSS and Javascript. The diractories used are Bootstrap.css for css and jQuery 3.6.0 for JavaScript.

License: MIT

**Specs:

**Behavior:** Ensure the number entered is a positive number.
**Input:** -25
**Output:** "age is negative"

**Behavior:** Convert earth age to Mercury solar age.
**Input:** 25
**Output:** 104.17

**Behavior:** Convert earth age to Venus solar age.
**Input:** 25
**Output:** 40.32

**Behavior:** Convert earth age to Mars solar age.
**Input:** 25
**Output:** 13.30

**Behavior:** Convert earth age to Jupiter solar age.
**Input:** 25
**Output:** 2.11

**Behavior:** Calculate years left to live on Earth based on a life expectancy of 75 Earth years.
**Input:** 25
**Output:** 50

**Behavior:** Calculate years left to live on Mercury based on a life expectancy of 75 earth years.
**Input:** 25
**Output:** -86.17

**Behavior:** Calculate years left to live on Venus based on a life expectancy of 75 Earth years.
**Input:** 25
**Output:** 6.18

**Behavior:** Calculate years left to live on Mars based on a life expectancy of 75 Earth years.
**Input:** 25
**Output:** 127.70

**Behavior:** Calculate years left to live on Jupiter based on a life expectancy of 75 Earth years.
**Input:** 25
**Output:** 887.39

**Behavior:** Calculate years past Earth life expectancy based on a life expectancy of 75 earth years.
**Input:** 85
**Output:** 10

**Behavior:** Calculate years past Mercury life expectancy based on a life expectancy of 75 earth years.
**Input:** 85
**Output:** -292.10

**Behavior:** Calculate years past Venus life expectancy based on a life expectancy of 75 earth years.
**Input:** 85
**Output:** -68.27

**Behavior:** Calculate years past Mars life expectancy based on a life expectancy of 75 earth years.
**Input:** 85
**Output:** 119.91

**Behavior:** Calculate years past Jupiter life expectancy based on a life expectancy of 75 earth years.
**Input:** 85
**Output:** 1001.78

Create an age object;
Ensure that the number entered for age is a positive number;
Create a method that does the following:
  convert age to Mercury years;
  convert age to Venus years;
  convert age to Mars years;
  convert age to Jupiter years;
  compare age to life expectancy and return the difference
