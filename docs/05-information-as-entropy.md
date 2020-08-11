---
layout: lecture
title: "5: Information as Entropy"
reading: ["SN4EQIZ5=>cc. 6-7"]
nav_order: 5
---

{% include math.html %}

## Table of contents
{: .no_toc .text-delta } 
1. TOC 
{:toc}

# Review and Introduction 

Shannon is famous for his article title "A mathematical theory of communication" in which he came up with the idea of "information" as ENTROPY. 

Concretely, Shannon was faced with the challenge of trying to think of messages or information in the most compressed form possible without loss of data. 

For example, he asked: what is the minimal amount of information required to transmit a voice recording so that the sound could be re-produced? 

Voice recording is not actually the recording of sound, but the encoding of something called "information" in such a way that a "seemingly" identical sound can be re-produced. 

In the same way the "storage" of a pdf on your hard drive (containing a visually encoded page layout), is not actually the saving of an image or "look". It is the storage of something called "information" in such a way that the "look" you experienced when saved the file can be "reproduced" or "reconstructed" when you open it again.

In order for this to be possible, there needs to be an idea of a "quantifiable idea information" that is separate from something we can hear or see, but precise enough to be machine actionable and for the machine to reconstruct a particular view or message.

[We also saw](04-wires-code-ideas#) this need for an idea of "quantifiable information" divorced from sounds or visual letters arise in the telegraph age as companies and customers sought a way to fairly charge from the transmissions of messages. 

Thus a new kind of question emerges, how much information does a message contain? (Just as we might have previously asked, how many letters or sounds does a message contain). And in that very question, we see a information separated from the notion of a message, and we see "information" spoken of as analogous to the media of letters or sounds. But where we are familiar with letters and sounds, it less clear just what "information" is, much less how to quantify it.


# Information as Entropy

Shannon's breakthrough is related to an insight we start to see in our earlier reading of Ong.

Ong noted that in verbal communications there are hundreds of "communicative redundancies" present in our verbal communication in order to assure the error-free transmission of the message. 

{:#to-make-yourself-clear}
> p. 104: "to make yourself clear without gesture, without facial expression, without intonation, without a real hearer, you have to foresee circumspectly all possible meanings of a statement may have for a possible reader in any possible situation, and you have to make your language work so as to come clear all by itself, with no existential context. The need for this exquisite circumspection makes writing the agonizing work it commonly is." <span class="citation" data-reading="MKVLEEA6=>p. 101" data-annotation="https://hyp.is/cpWMJNXQEeqOdIe8DF4few/s3.amazonaws.com/lum-faculty-jcwitt-public/pl399/Ong_2002_Writing_Restructures_Consciousness,_chapter_4.pdf">

Shannon noticed the same kinds of redundancies in our visual encoding of information. 

<!-- link to his paper: Markov Chains?-->

For example, he showed that there are statistical patterns in our language that create lower and higher probabilities for the appearance of a given word or letter, based on the words or letters that precede. 

For example, if I write "q", there is a high probability that the next letter is "u", and a very low probability that the next letter will be a consonant. 

Because of this high level of predictability, I need less information to communicate this message "qu" than I would for example "qk". 

For example, I could transmit "q" and tell a receiver to always add a "u" unless "q" is followed by a "/". In rare occasions an extra "/" will have to be transmitted, but all "qu" transmissions will have been dramatically reduced in size.

And his idea was that if we could identify the minimal amount of information in the message apart from these redundancies, we would have identified the essence of the "information" abstracted from its visual or linguistic encoding.

In terms of the above example, Shannon wants us to see that "qu", despite its visual appearances, points to one piece information (within a pre-defined symbol set), even though it is typically visually represented in a way that looks like two". Neither "q or u" or even "qu" is the information. Rather the pattern is the logical profile that is pointed at by the visual symbol (just as a visual triangle points at the logical properties that constitute an ideal triangle). This is logical profile is a describable statistical frequency within the context of other linguistic symbols.

At the heart of his theory was the idea that information was fundamentally the amount **uncertainty** or **predictability** in a system or what he called "entropy" (borrowing for the tendency in thermodynamics of energy to dissolve from something organized and structure to something unstructured). That "u" follows "q" is highly predictable, therefore there is less entropy and less information. That "k" follows "q" is less predictable and contains more entropy and therefore contains more information. 

Let's watch a short video that tries to explain this:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2s3aJfRr9gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For most of us I think this leads to a fairly confusing way of thinking about information, as evidenced by the [comment thread](https://www.khanacademy.org/computing/computer-science/informationtheory/moderninfotheory/v/information-entropy) of this video: 

Question from Daniel Hollas: 

> This definition of information seems somehow unintuitive to me. For example, if I wrote a book, in which I would just randomly select letters from the alphabet, would it contain more information than the "normal" books with words in it? Or did I miss something?

Answer from Nick Corrado:

> You've got it right. Indeed, it is unintuitive, but consider this. If you compare a normal English text with another text of the same length, but with all the vowels (which are often redundant) taken out, the second text surely has more information. After all, the second text is the same length, but it's missing letters that are just "taking up space," and it's doing something with that space instead. A random selection of letters definitely has the highest information: you can't reduce any of it by removing redundancy the way you can in English by removing all the vowels.

> If these examples seem a little abstract, just consider what we do in newspaper and on the Internet every day: we remove letters and even whole words (articles like "the" don't convey much information) to say more in the same space, or the same in less space. A newspaper doesn't have less information by being denser: on the contrary, it can fit more!

Let me go over this once quickly with two small examples and then we can think about an application to a text and how we encode our texts.

## Example 1: 

All encoding systems have a set of available symbols. 

Let's suppose we have an alphabet of 32 characters, and the letter z is number 32. 

I could communicate this as a "picture of the letter z", but this would require hundreds of pieces of information within a very large set of spatial information. Think of the range possible visual positions, and then think about drawing the letter z with a select set of spatial symbols. 

But Shannon shows there is something more essential about "Z" than how it looks. 

What is important is its statistical relationship to the characteristics of the 32-character set.

He says: the amount of information a system needs to communicate it symbols and to differentiate them from one another can be calculated as follows:

Take the `Sum` of the `probability` of the available symbols `times` the `log2` the `inverse of that probability`. 

$$H = -\sum_{i}^{n} p_i \log_2 p_i$$

In the above equation: 

* $$H$$ is the symbol for Information
* $$n$$ is the number of symbols in the set
* $$i$$ is a given symbol within that set
* $$p_i$$ is the probability of a given symbol


So, for a 32 symbol set, where the probability of each symbol is 1/32, the uncertainty or entropy of a message composed of a single symbol would be calculated as follows.


$$H = -\sum_{i=1}^{n=32} 1/32 * \log_2 1/32$$

$$H = -\sum_{i=1}^{n=32}1/32 * - 5 = 0.15625 * 32 = 5$$


So H or Information = 5

Why 5?

Because it only takes me on average five questions (and never more) to identify the letter in question.

What is critical here, is not so much the math, but the reduction of information to a new essence. 

Shannon asks us to consider: what do we really care about? Do we care about how a Z looks, or do we care about something more fundamental, something that the "look" of the Z is pointing to? 

If the latter, then we should be thinking about to encode this information independent of how its looks or sound, so that it can be represented in any medium in any way we want.

## Example 2: 

Let's say we are watching a coin toss game and we want to communicate who won the game.

The intuitive thing to do is to communicate the scores. 

Tie (00), Player 1(1/0), Player 2 (0/1)

In a coin toss, we have a set of 2 (heads or tails) and to communicate the score, we have to communicate the result of each player. 

So, we need the entropy of x and the entropy of y 

$$H_x = -\sum_{i=1}^{n=2}p_i log_2 p_i = -2(0.5 log_2 0.5) = 1$$

$$H_y = -\sum_{i=1}^{n=2}p_i log_2 p_i = -2(0.5 log_2 0.5) = 1$$

In total, it will always take 2 ($$H_x + H_y$$) bits to communicate the full context of this game and the "look" of the end result.

But again, Shannon asks us to consider what the information, the essence of the message, really is, and to think critically about what are encoding. 

The information we want to communicate is the winner, but the way we are communicating is by transmitting the "the full results of the entire context" without thinking about the precise information needed to successfully communicate. Not being precise, creates redundancies that can be helpful but can also be distracting noise that confuse or ambiguate the essential information.

If we want to communicate the information precisely and not merely visual "look" of the game, we can do so more efficiently by being more precise. 
	
We can always send player 1's score, and then only send further bits when it was not a tie. 

But in this case the probability of sending a second bit is affected by the previous.
It is in this case, a **dependent variable**. Its value or presence depends on what came before.
 <!-- markov chain, dependent variable -->

Because we know the tie happens 50 percent of the time, we know the second question will have to be asked half the time, and therefore the probability of either result is 1/4.

So, we can have something like: 

Player one's score (whether they win/lose, whether head or tails, so the summation of just one symbol) 

$$ H_x = -1(0.5 log_2 0.5) = .5$$

Since the players draw happens half of the time, the probability of the second bit changes. (Again it is a **dependent variable**)

Because now we are asking, NOT "what is it", BUT "is it **different** from player one's score", the probability of its being different is 1/4 for heads and 1/4 for tails, or in total 1/2

So to communicate this difference we have new calculation: 

$$ H_y = -2(0.5 log_2 0.5) = 1$$

Combined the maximum number of bits to communicate the essential information is therefore not 2, but always 1.5 ($$H_x + H_y$$)

Here the counter-intuitive point by Shannon (and made by Ong in a different context) is once more asserted. 

The urgency to create more flexible and abstract information has also forced us to be more precise and scientific. 

We are tempted to transmit that the scores of the game and then expect the receiver to use the context clues (the "communicative" redundancies") to access the essential message. 

But not only is this communication more expensive (requiring two bits, instead of 1.5), it also less precise. 

The transmission of the "look" of the game creates the possibilities of error through the further processing required by the receiver. The more efficient communication requires less processing and less possibility for error the on part of the receiver. 

In our example 50% of the time the receiver receives an answer that needs no further processing. Was it a tie? (a single bit is returned, player one's score, followed by nothing else). The processor immediately knows that it was a tie, and no comparison is required

In contrast, when both scores are sent all the time, 100% percent of the time, the processor must receive both scores, compare them, and then interpret them, creating the need for more interpretation and more room for ambiguity and error.

**In sum** 

What are we trying to communicate? Who the winner is? Our instinct was to communicate the "look" of the game, from which a human interpreter would then determine who the winner is. But if we abstract from the "look", we realize the essence of what we intended to communicate is something else, something more abstract, namely who one. This abstraction allows us to encode the message in a sequences of yes's and no's that requires no further processing (semantic interpretation) on the part of the receiver. This efficiency then makes it possible to transmit this information not just in a "look" but in a "sound" or through "electronic impulses" or even the ordering of rocks or notches on wood. It allows for the automatic transformation of information across diverse media.

# Applications

Let's step back a little from these details and consider some downstream effect. 

Of considerable importance in the manner in which Shannon concern for efficiency forces us to be more precise about we want to communicate. 

And this precision is a key part of what allows for the automatic transference of a message across media. 

I'd like to think about this with a concrete consideration of how we "visually encode" the "look of a text" and why this has historically tethered our texts to a particular presentation. 

Then, I'd like to think about what new possibilities emerge when pursue a more efficient (and consequently more precise encoding) of that to which the visual encoding points.

## Activity: Beyond Visual Encoding

So, here instead of continuing to babble, I'd like to do an exercise. 

I'd like to try to thematize the "visual enccoding" of the printed book and identify the amount of different types of information are present in a text and to identify how they are "encoded".

To facilitate this exercise, I think it helpful to introduce a few distinctions or technical terms. 

What we are saying here is that printed books are secretly filled with "data" about "data". But this metadata is much a part of the book medium itself and part of accustomed way we encounter information and it fades into the background. We see it, use it, and interpret it constantly to get access to the message. But in our eagerness to arrive at the message, we rarely thematize it. 

For example, the text of heading and the text of paragraph are both data, but we instinctively know that the "heading data" should be read differently than that "paragraph data. 

Our awareness that a particular string function in special way shows our awareness that this string of data belongs to a particular class or type of data. We sometimes call these "data-types".

Further, there are "relationships" asserted between the heading and the paragraph or division to which this heading is a heading. The kind of "relationship" is another kind of data type and each specific relationship is the data communicated.

How do we recognize this? Where do we get this information? How does the printed text communicate this?

So, with the example texts here, I'd like us to draw boxes around distinct data types, and give that data type a name, and I'd like us to draw lines, to indicate relationships, and to classify the kinds of relationships that are present. 

•	How many datatypes are communicated?
•	How are these data types "visually encoded"? 
•	What are the context clues that indicate this?
•	How many context clues are required to ensure that this information is transmitted?
•	Where is the data type unclear ambiguous, where is a guess required? What context information is being used to facilitate this guess?

The tendency of the book paradigm is to record the **look**, and the expect the reader to understand the intention behind this look and find the deeper significance, namely that the text in visualized in this way belongs to specific data type. 

But Shannon's pursuit of efficiency for us to think more precisely. Aren't we really just trying to communicate this data-type, which is a symbol with a set of symbols that has certain profile and meaning. If so, what if we could instead of visual encoding our text, we directly identity the data-type we wish to communicate.

In such a case, no human interpreter would be required to mediate the transition from one "look" to another "look" or from one media representation to another. 

Consider the example below: 

<iframe src="https://jsfiddle.net/cw6sfnjk/embedded/html,css,result/dark/" width="100%" style="min-height: 500px"></iframe>
<!-- add iframe code snippet with XML visuall encoding a text, bold, italic, etc --> 
<!-- try to manipulate look through, css, view the confusion -->
<!-- add iframe code snippet with XML visual encoding a text, bold, italic, etc label instead with data types, paragragph, title, name. etc. --> 
<!-- could add video of creating pdf from same source document -->


<!-- Cut notes
[visual and semantic encoding discussion] (10 min) 

Let me conclude this little exercise and apply this more directly to our encoding of a text.

Yesterday, we looked at some print layouts and talked about the kind of "visual encoding" that occurs in a print layout. 

Visual encoding is perhaps as remarkable for its ability to communicate lots of different types of information as for the amount of variated ways it does this. 

The communication of information visually like speech is replete with "redundancies" and "ambiguities" that have to be sorted out by a processor like a human brain. 

Shannon shows us that this kind of encoding is not only more expensive, but highly imprecise and error prone, making machine processing very difficult.  

It encodes the look of information in a particular context, and then expects the receiver to perform hundreds of inferences to ultimately access the essential information. 

Semantic encoding is the name given to a type of text encoding that tries to look past the visual look of a text and encourages us to identify the essential information. 

And a type of semantic encoding familiar to many textual scholars is XML or TEI.

[but we should that semantic markup is not identical to xml. It is completely possible to use XML to try to record the "look" of a text, or instructions about how it should be visualized. This is called presentational markup.

In contrast, descriptive markup, aims to identify the type of information with a limited set of data types. In terms of entropy, the aim is to dramatically reduce the number of symbols in a set, and therefore reduce the amount of entropy/uncertainty in our encoding.

For example: Instead of trying to transmit the look or position of header or paragraph, and then requiring the receiver to use these context clues to understand the difference between a heading text and paragraph text, semantic code is uninterested in the "look" and instead tries to identify the essential information by explicitly assigning a symbol <p> or <head> from a limited set of symbols (something like 500 available symbols). 

[apparatus example, lombardpress-schema example]

Let me try to illustrate in a more familiar environment, namely in the context of constructing a critical apparatus, and compare my encoding in contrast to the recommendations of the TEI guidelines.

A traditional visually encoded apparatus might try to visual communicate the same information in a lots of different ways. 

Consider a transposition: 

105 cum fides] fides ante cum B C
105 cum fides] fides cum B C
19 fides cum B C
19 fides cum transpositio B C

The point is there are lots of micro variations in the attempts to visually encode this information (and this is only a small part of the visual presentation. The position of the apparatus, the font size, etc) but in terms of information there is really one thing that is happening. A transposition is being recorded. 

But the interpretation of this visualization requires and expansive knowledge the entire context the other possible kinds of visualizations representation. To lose any part of this visualization, the placement within a footnote, the italics, the capital letters, the number, the square bracket, would threaten data loss.

Even in TEI it can be tempting to want to record this in terms of the look expected on a printed page.

<app>
  <lem>fides</lem>
  <rdg wit="#V">
    fides <desc>ante</desc> cum <wit>B C</wit>
  </rdg>
</app>

In both the cases, the size of the "set" of possible symbols is so large and ill-defined, that the communication of the essential information difficult. The entropy is very high, and this makes it very hard for the computer to reliably process this information.

The kind of encoding that Shannon is recommending, albeit at a much deeper level, is to recognize, despite the variations in presentation seen here, how many other kinds of variants there are and the probability that this variation is a transposition.

The number of possible variation types is many times smaller than the ways in which choose to present or visually encode the variation. 

So, his point is, let's encode the information in this more efficient way. This will then make it possible to transmit that information into multiple context without data loss and to re-construct any presentation we might desire.

This it turns out is precisely what we've tried to do in our Lombardpress TEI customization schema. 

In our schema, unlike general TEI, would do not leave a space for editors encode what they want to see on the printed page. 

[lombardpres-schema example]

Instead we've constructed a catalogue of possible variation types (we've created a limited SET of possible symbols), and then we instruct the editor to identify which variation type they want to record. (In this case, we no longer need to record information like "om." or "transposition" or square bracket or line number because the visual indicators to add new information). The variation type is a more efficient way to carry all the information needed. 

And that means we can return to any visual presentation type without data loss.

[lbp-print example]

And this is something that "semantic encoding" does for every data type. It tries to identify the information to its most succinct form without data loss, which in turn means that information efficiently and accurately be transmitted, communicated, in a variety of different contexts.

And here I think is an example of new consciousness forming. Just as writing forced us to be more precise and created new modes of consciousness. 

Here an example of semantic encoding sharpening our notion of variant types. 

In a print only world, we had to record each of these variants individually, thus there was very little pushing us classify them and to think of them instances of defined classes. 

But our new approach to information is asking us to take consider them in an entirely new light.


--- 

<!-- # Letters and raw statistical frequency

"signal rate" how many differences can be sent per second with these difference bleeding into each other.

"channel capacity" determined by
1. symbol rate, number of clearly distinguishable signals per second, "baud", = n = n symbol transfers per second. 
2. How many differences per symbol (s) (symbol space.)

Message space = S to power of N 

3 symbols ^ (2 (2 symbols per second)) = 9 messages possible messages over the 2 seconds. 

# Shanon and Markov Chains

The problem is that the probability of a letter in a message in not a zero sum game. 

The probability is not 1/26 for each letter.

A letter is word, a word in a message is a "dependent variable". It's probability is affected by the previous outcome. 

But this is what Markov chains attempted to describe. 

Claude Shannon is credited with seeing the application of Markove chains to human language and thus to ultimately to the quantification of message to be communicated independent of the number of letters. 

[explain markov chain] [video]

explain Shannon's use of a markov chain [video] 

 -->
