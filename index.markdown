---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---
<!-- HERO SECTION -->
<section class="horizontal-scroll-section">
  <div class="scroll-wrapper">
    
    <div class="promo-card courses-theme">
      <div class="content-side">
        <span class="badge">New lessons added.</span>
        <h1>Unlock 50+ <br>AI & Data Lessons.</h1>
        <p class="price-text">Free for a <strong>limited time period</strong> only.</p>
        <a href="/courses" class="cta-button">Explore Catalog →</a>
      </div>
      <div class="graphic-side">
        <div class="shape circle-shape"></div>
      </div>
    </div>

    <div class="promo-card counselling-theme">
      <div class="content-side">
        <span class="badge">1-on-1 Mentorship</span>
        <h1>Expert Career <br>Counselling.</h1>
        <p class="price-text">Talk to an industry veteran <strong>only at INR 500.</strong></p>
        <a href="/counselling" class="cta-button">Book a Session →</a>
      </div>
      <div class="graphic-side">
        <div class="shape diamond-shape"></div>
      </div>
    </div>

  </div>
</section>

<!-- AUTO SCROLL METRICS -->
<section class="metrics">
  <div class="metrics-track">
    {% comment %} Loop twice for seamless scrolling {% endcomment %}
    {% for i in (1..2) %}
      {% for item in site.data.metrics %}
        <div class="metric">
          <h3>{{ item.value }}</h3>
          <span>{{ item.label }}</span>
        </div>
      {% endfor %}
    {% endfor %}
  </div>
</section>


<section class="container">
<h2>Trending Courses</h2>
<div class="course-grid">
  {% for item in site.data.navigation.trending_courses %}
    {% include course-card.html 
       title=item.title 
       url=item.url 
       description=item.description 
       category=item.category %}
  {% endfor %}
</div>
</section>