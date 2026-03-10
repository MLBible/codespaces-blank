---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: sidenav
title: Courses
permalink: /courses/
---

<div class="course-grid">
  {% for item in site.data.navigation.sidebar_menu %}
    {% include course-card.html 
       title=item.title 
       url=item.url 
       description=item.description 
       category=item.category %}
  {% endfor %}
</div>