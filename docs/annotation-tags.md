---
layout: default
title: "Annotation Tags"
---

# Official Tags

**cdr** (class discussion report): Each class discussion will have an assigned "secretary" or "class reporter". As class reporter, your job is create a page annotation (as well as text anchored annotations) for each lesson discussed during the discussion and to tag it as 'cdr'. Then anyone can come back to the page for a given lesson, filter for the 'cdr' annotations on that page and get nice summary of our in class discussions.

<div>
  <a class="view-annotations" data-tag='cdr'>View 'cdr' tags</a>

  <div id="result-cdr" class="result" data-open='false'>
  </div>
</div>

**edition-rubric**: [in unit 2 of the course](10-beyond-the-book.html#edition-rubric-discussion), I'll be asking to consider what sort of criteria we should use to evaluate a successful online text. As we read, use the "edition-rubric" tag to mark highlights and annotations of passages that you think are relevant to this discussion

<div>
  <a class="view-annotations" data-tag='edition-rubric'>View 'edition-rubric' tags</a>
  <div id="result-edition-rubric" class="result" data-open='false'>
  </div>
</div>

**feedback**: Use this tag to offer any course feedback. You can go to the [course feedback page](feedback.html) a "page" annotation and leave any feedback you want or leave a feedback comment on any other page. In either case, use the course tag "feedback" so we group these comments together

<div>
  <a class="view-annotations" data-tag='feedback'>View 'feedback' tags</a>
  <div id="result-feedback" class="result" data-open='false'>
  </div>
</div>

**glossary**: the glossary tag should be used for creating an official glossary entry for a key term has emerged in our reading our class discussion. Glossary annotation should be a bit more polished then other entries. Here want to build an official dictionary like list of terms. These entries should be substantive, interesting, and relevant to our course. 

A second entry of the same word or phrase may be permissible, but it has to be justified. We don't want to fill our list with redundant entries. If you just want to add more information or a link to an existing entry, then go to the first annotation and add a reply. But if you think there is a second definition or valence to a word/phrase that justifies a second entry, then by all means add it. But your entry should justify your decision.

<div>
  <a class="view-annotations" data-tag='glossary'>View 'glossary' tags</a>
  <div id="result-glossary"  class="result" data-open='false'>
  </div>
</div>

**gc** (glossary candidate): You may come across words that seem technical and important and seem deserving of a glossary entry. By using the 'gc' tag you can identify a word or phrase for yourself and others to come back to when your ready to add an official glossary entry. 

<div>
  <a class="view-annotations" data-tag='gc'>View 'gc' tags</a>
  <div id="result-gc"  class="result" data-open='false'>
  </div>
</div>

**nc** (needs clarification): While you should feel free to ask lots of open ended questions for yourself, for your classmates, and for me, sometimes there are particularly difficult concepts or ideas being introduced that you want to make sure we go over in our "in-person" class time together. Use the "nc" tag to highlight these areas and then make sure to focus 

<div>
  <a class="view-annotations" data-tag='nc'>View 'nc' tags</a>
  <div id="result-nc"  class="result" style="display: none" data-open='false'>
  </div>
</div>


# Crowd Sourced Tags

We should not limit the groupings of our discussion to the above official tags. We should be creative and allow groupings to emerge organically as various discussions take place. Note that annotations can have many tags at the same time.

The **edition-rubric** tag above in one such example. It's a tag associated with a particular discussion, and as we continue to find passages that seem relevant to that discussion we can connect this distributed discussion by using the corresponding tag.  

Additionally, we should feel free to be creative and even silly. Feel free to invent any tag you want, you don't need my permission to make a tag; create any tag you want, it can be serious or silly. (e.g. tag: 'RonaLife', 'what!?!?', etc.) 

As certain discussion and crowd sourced tags gain momentum, I will add them to the official list with a short description to help guide further use.



<div>

<style>
  .result{
    display: none; 
    font-size: 12px;
    background-color: #f5f6fa;
    padding: 5px;
    border-left: 5px solid #7253ed;
  }
  .result p{
    padding: 1px;
    margin: 1px;
  }
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- order of scripts is important -->
<script src="{{ '/assets/js/checkLogin.js' | absolute_url }}"></script> <!-- checkLogin fxn -->
<script src="{{ '/assets/js/displayGlossary.js' | absolute_url }}"></script> <!-- displayGlossary -->
<script type="text/javascript">
$(document).ready(() => {
  $('.view-annotations').click(function(){
    const tag = $(this).attr('data-tag');
    const openValue = $("#result-" + tag).attr('data-open');
    if (openValue === 'false'){
      const previouslyOpenedValue = $("#result-" + tag).attr('data-previouslyOpened');
      if (previouslyOpenedValue === 'true'){
        $("#result-" + tag).attr('data-open', 'true');
        $("#result-" + tag).show();
      }
      else{
        checkLogin(displayGlossary, {tag: tag});
        $("#result-" + tag).attr('data-previouslyOpened', 'true');
        $("#result-" + tag).attr('data-open', 'true');
        $("#result-" + tag).show();
      }
    }
    else
    {
      $("#result-" + tag).attr('data-open', 'false');
      $("#result-" + tag).hide();
    }
  });
});
</script>
</div>  