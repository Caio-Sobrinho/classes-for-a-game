# classes-for-a-game
I created a generic class that represents a hero in an adventure.

At the moment only the functional part is available. Soon there will be a layout to enter the information :D

## Goal:

Create a generic class that represents a hero of an adventure and that has the following properties:

- name
- age
- type (e.g. warrior, wizard, monk, ninja)

Furthermore, it must have a method called attack that must meet the following requirements:

- display message: "{type} attacked using {attack}")
- where the {type} should be concatenating the type that is in the class property
- and in {attack} a different description must follow depending on the type, following the table below:

if magician -> in attack display (used magic)
if warrior -> in attack display (used sword)
if monk -> in attack display (used martial arts)
if ninja -> in attack display (used shuriken)

## Exit

At the end, a message should be displayed:

- "the {type} attacked using {attack}"
  ex: wizard attacked using magic
  warrior attacked using sword

I used:

- Variables
- Operators
- Repeat loops
- Decision structures
- Functions
- Classes and Objects
