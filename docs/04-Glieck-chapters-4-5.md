---
layout: default
title: "4: Glieck cc. 4-5"
nav_order: 4
---
1. TOC 
{:toc}


# Babbage

# Telegraph 

Overarching question here: 

How is the medium posing practical problems, that, in order to solve, are requiring people to think about familiar things differently 

Kahn Video quite good here: 

https://www.khanacademy.org/computing/computer-science/informationtheory/info-theory/v/morse-code-the-information-age-language-of-coins-8-12

Key lessons through the development of morse code. 

dots and dashes implicitly create a binary decision tree through all letters in the alphabet

in order to make sending messages cheaper people developed codes books, to send a complicated message in a single word. 

telegraph companies didn't like this because they wanted to charge by the letter. 

This practical problem gave rise to a new question about how to quantify information. 

If we are trying to fairly charge for a telegraph, where neither the telegraph company or customer is being cheated we need a reliable/uniform way to measure how much information was being sent. 

But the development of the code books proved decisively that we did not yet have a clear concept of what information is, and they shown the number of letters was clearly a sufficient measure of "quantity of information".


Other problems include 

"signal rate" how many differences can be sent per second with these difference bleeding into each other.

"channel capacity" determined by
1. symbol rate, number of clearly distinguishable signals per second, "baud", = n = n symbol transfers per second. 
2. How many differences per symbol (s) (symbol space.)

Message space = S to power of N 

3 symbols ^ (2 (2 symbols per second)) = 9 messages possible messages over the 2 seconds. 



(Transition for next time to Shannon and information as entropy)