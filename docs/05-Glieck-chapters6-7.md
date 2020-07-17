---
layout: default
title: "5: Glieck cc. 6-7"
nav_order: 5
---

1. TOC 
{:toc}

# I. Information as Entropy



The are several stages in the history of performing this abstraction, but I want to focus on the one of the most important. 

Namely, Claude Shannon's new idea of "information" and how this new idea of information, helped enable the possibility of a new kind of encoding, that would enable a new kind of "communication."

For a moment, this will take us to very abstract place, seemingly far removed from the "text". 

I hope Shannon's theory is interesting for you in itself. 

But after we've move through it, I hope we can see its implications for the way we "encode" our texts, even if we are applying his theory several abstractions higher. 

[Main Message to be a achieved through below analysis]

Specifically, why visual encoding is a kind of encoding with high levels of Entropy and therefore is imprecise, difficult, and expensive to communicate and process. While in contrast, Semantic encoding has much lower level of Entropy and makes it feasible for our texts to become "machine-actionable".

Shannon is famous for his article title "A mathematical theory of communication" in which he came up with the idea of "information" as ENTROPY. [write on board]

Concretely, Shannon was faced with the challenge of trying to think of messages or information in the most compressed form possible without loss of data. 

For example, he asked: what is the minimal amount of information required to transmit a voice recording so that the sound could be re-produced. 

or: What is the minimal amount of information required to transmit the information traditional communicated throuh the "visual encoding of a text" (as we discussed yesterday)

Remember, voice recording is not actually the recording of sound, but the encoding of something called "information" in such a way that a "seemingly" identical sound can be re-produced. 

In the same way the "storage" of a pdf on your hard drive (containing a visually encoded page layout), is not actually the saving of an image or "look". It is the storage of something called "information" in such a way that the "look" you experienced when saved the file can be "reproduced" or "reconstructed" when you open it again.

In order for this to be possible, there needs to be an idea of a "quantifiable idea information" that is separate from something we can hear or see, but precise enough to be machine actionable and for the machine to reconstruct a particular view.

This required an enormous abstraction. 

So, I think the advantages of this abstraction are somewhat clear. 

But how do we perform it? 

Shannon's breakthrough is related to insight we already start to emerge in our reading of Ong yesterday. 

Ong noted that in verbal communications there are hundreds of "communicative redundancies" present in our verbal communication in order to assure the error-free transmission of the message. 

[quote 1] p. 104: "to make yourself clear without gesture, without facial expression, without intonation, without a real hearer, you have to foresee circumspectly all possible meanings of a statement may have for a possible reader in any possible situation, and you have to make your language work so as to come clear all by itself, with no existential context. The need for this exquisite circumspection makes writing the agonizing work it commonly is."]

Shannon noticed the same kinds of redundancies in our visual encoding of information. 

[handout 03-01]

For example, he showed that there are statistical patterns in our language that create lower and higher probabilities for the appearance of a given word or letter, based on the words or letters that precede. 

For example, if I write "q", there is a high probability that the next letter is "u", and a very low probability that the next letter will be a consonant. 

Because of this high level of predictability, I need less information to communicate this word "qu" than I would for example "qk" (for example, I could transmit "q" and tell a receiver to always add a "u" unless "q" is followed by a "/". In rare occasions an extra "/" will have to be transmitted, but all "qu" transmissions will have been dramatically reduced in size.

And his idea was that if we could identify the minimal amount of information in the message apart from these redundancies, we would have identified the essence of the "information" abstracted from its visual or linguistic encoding.

[in terms of the above example, Shannon wants us to see "qu", despite appearances, points to one piece information, even though it is typically visually represented in a way that looks like two". Neither "q or u" or even "qu" is essential information, but rather the pattern that stands behind it, namely a characterizable statistical frequency within the context of other linguistic symbols.]

As the above example shows, at the heart of his theory was the idea that information was fundamentally the amount "uncertainty" in a system or what he called "entropy" (borrowing for the tendency in thermodynamics of energy to dissolve from something organized and structure to something unstructured). 

And I have a little video here that tries to explain it.  

[Shannon Discussion] (10 min)
https://www.khanacademy.org/computing/computer-science/informationtheory/moderninfotheory/v/information-entropy

For most of us I think this leads to a fairly confusing way of thinking about information, as evidenced by the comment thread of this video

Discussion thread on https://www.khanacademy.org/computing/computer-science/informationtheory/moderninfotheory/v/information-entropy
Question from Daniel Hollas
This definition of information seems somehow unintuitive to me. For example, if I wrote a book, in which I would just randomly select letters from the alphabet, would it contain more information than the "normal" books with words in it? Or did I miss something?
Answer from Nick Corrado
You've got it right. Indeed, it is unintuitive, but consider this. If you compare a normal English text with another text of the same length, but with all the vowels (which are often redundant) taken out, the second text surely has more information. After all, the second text is the same length, but it's missing letters that are just "taking up space," and it's doing something with that space instead. A random selection of letters definitely has the highest information: you can't reduce any of it by removing redundancy the way you can in English by removing all the vowels.
If these examples seem a little abstract, just consider what we do in newspaper and on the Internet every day: we remove letters and even whole words (articles like "the" don't convey much information) to say more in the same space, or the same in less space. A newspaper doesn't have less information by being denser: on the contrary, it can fit more!

Let me go over this once quickly with two small examples and then we can think about an application to a text and how we encode our texts.

Example 1: 

All encoding systems have a set of available symbols. 

Let's suppose we have an alphabet of 32 characters, and the letter z is number 32. 

I could communicate this as a "picture of the letter z", but this would require hundreds of pieces of information within a very large set of spatial information. Think of the range possible visual positions, and then think about drawing the letter z with a select set of spatial symbols. 

But Shannon shows there is something more essential about Z than how it looks. 

What is important is its statistical relationship to the characteristics of the 32-character set.

He says: the amount of information a system needs to communicate it symbols and to differentiate them from one another can be calculated as follows:

Sum of the probability of the available symbols times the log2 the inverse of that probability. 

So, for a 32 symbol set, the uncertainty of a message of a single symbol would be calculated as follows.

	H=n=2∑i=1pi log2pi=32×(1/32log232)=5 bit.
32Sum (1/32) * log2(32) = H(entropy) = 5

Why five? 

Because it only takes me on average five questions (and never more) to identify the letter in question.

What I care about here, is not so much the math, but the reduction of information to a new essence. 

Shannon asks us to consider: what do we really care about? Do we care about how a Z looks, or do we care about something more fundamental that the "look" of the Z is pointing to? If the latter, then we should be thinking about to encode this information independent of how this Z looks, and then we can represent that information in any way we want. 

[you might think about this in your visual encoding. Do we care how the information looks, or is the "look" a means of communicating something more fundamental? What is that? 

[possibleCut] Example 2: 

Let's say we are watching a coin toss game and we want to communicate who won the game.

The intuitive thing to do is to communicate the scores. 

Tie (00), Player 1(1/0), Player 2 (0/1)

In a coin toss, we have a set of 2 (heads or tails) and to communicate the score, we have to communicate the result of each player. 

So, we need the entropy of x and the entropy of y 

Hx=-∑i=12pilog2pi= (0.5log20.5)=1 bit.
+ 
Hy=-∑i=12pilog2pi= (0.5log20.5)=1 bit.

In total, it will always take 2 bits to communicate the full context of this game and the "look" of the end result. .

But again, Shannon asks us to consider what the information, the essence of the message, really is, and to think critically about what are encoding. 

The information we want to communicate is the winner, but the way we are communicating is by transmitting the "the full results of the entire context" without thinking about the precise information needed to successfully communicate. Not being precise, creates redundancies that can be helpful but can also be distracting noise that confuse or ambiguate the essential information.

If we want to communicate the information precisely and not the "look" of the game, we can do so more efficiently by being more precise. 
	
We can always send player 1's score, and then only send further bits when it was not a tie. 

But the probability of sending a second bit is affected by the previous. 
Because we know the tie happens 50 percent of the time, we know the second question will have to be asked half the time, and therefore the probability of either result is 1/4.
So, we can have something like: 
Player one's score (win/lose)0.5log22  =. 5
Since draw happens half of the time, the probability of the second bit changes. Because now we are asking, "is it different from player one's score", the probability of it being different is 1/4 for heads and 1/4 for tails
Player two' score win (win)0.25log24 + (lose)0.25log24 = 1
Combined the maximum number of bits to communicate the essential information is always 1.5
For my part, here the counter-intuitive point (made by Ong in a different context) is once more asserted. The urgency to create more flexible and abstract information has also forced us to be more precise and scientific, just as the move from oral to written text, required the development of more precision in our writing.

The essential information to be communicated is first: "is player 2's score different from player" and "only secondarily, how does it differ"? 

We are tempted to transmit that the scores of the game and then expect the receiver to use the context clues (the "communicative" redundancies") to access the essential message. 

But not only is this communication more expensive (requiring two bits, instead of 1.5), it also less precise. 

It creates the possibilities of error through the further processing required by the receiver. The more efficient communication requires less processing and less possibility for error the on part of the receiver. 

In our example 50% of the time the receiver receives an answer that needs no further processing. Was it a tie? (a single bit is returned, player one's score, followed by nothing else). The processor immediately knows that it was a tie, and no comparison is required

In contrast, one both scores are sent all the time, 100% percent of the time, the processor must receive both scores, compare them, and then interpret them, creating the need for more interpretation and more room for ambiguity and error.

[endPossibleCut]


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
