---
layout: default
title: "Readings"
published: false
---

# Readings by Lesson 

<div>
{%- assign ordered_pages_list = site.html_pages | where_exp:"item", "item.nav_order != nil" -%}
{%- assign sorted_ordered_pages_list = ordered_pages_list | sort:"nav_order" -%}

{%- for node in sorted_ordered_pages_list -%}
  <div> 
    <p>Reading: for <a href="{{ node.url | absolute_url }}">{{ node.nav_order }} </a>:</p> 
    <ul>
      {%- for node2 in node.reading -%}
        <li class="reading" data-reading="{{node2}}"></li>
      {%- endfor -%}
    </ul>
  </div>
{%- endfor -%}
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript">
$(".reading").each(function(i, v){
      const _this = this;
      const readingid_and_chapters = $(this).attr("data-reading");
      const readingid = readingid_and_chapters.split("=>")[0];
      const url = "https://api.zotero.org/groups/2536930/items/" + readingid;
      $.get(url, function(d){
        const authors = d.data.creators.filter((c) => c.creatorType === "author");
        const author = authors.length > 1 ? authors[0].lastName + ", et al" : authors[0].lastName;
        const title = d.data.title;
        const url = d.data.url;
        const chapters = readingid_and_chapters.split("=>")[1] ? ", " + readingid_and_chapters.split("=>")[1] : "";
        const insert = url ? "<a href='" + url + "'>" + author + ", " + title + chapters + "</a>" : author + ", " + title + chapters;
        $(_this).html(insert);
      });
    });
</script>