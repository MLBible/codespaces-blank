---
layout: default
title: Interview Prep
permalink: /interviews/
use_math: true
---

# 💡 Interview Preparation Hub

{% assign grouped = site.interviews | group_by: "topic" %}

{% for group in grouped %}
<section class="topic-section">
  <h2 class="category-title">{{ group.name | replace: "-", " " | capitalize }}</h2>
  
  {% for item in group.items %}
    <div class="master-q-card">
      <small style="color: #666;">Topic: {{ item.subtopic }}</small>
      <h3>{{ item.question }}</h3>
      <div class="answer-text">
        {{ item.content | markdownify }}
      </div>
    </div>
  {% endfor %}
</section>
{% endfor %}