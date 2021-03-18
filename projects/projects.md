---
layout: layouts/home.njk
title: Projects
templateClass: tmpl-post
eleventyNavigation:
  key: Projects
  order: 2
---

<!-- Website Projects starts here -->
<div class="text-center">
    <h1>Website Projects</h1>
    <hr>
    <br>
    <!-- Website images on computer starts here -->
    <div class="row"> 
    <!-- First website image starts here -->
    <div class="col-lg-3 col-sm-6">
    <div class="website-images">
    <label>Gary Tate's Web Dev Profile 
        <a href="https://gt-web-dev.site/" target="_blank"><img src="/img/websites/Gary Tate on computer image.jpg" alt="Photo of Gary Tate's web development profile website on a computer"></a>
    </label>
    </div>
    </div>
    <!-- First website image ends here -->
    <!-- Second website image starts here -->
    <div class="col-lg-3 col-sm-6">
    <div class="website-images">
    <label>Photography Blog Website
      <a href="https://garytate-photography-blog.netlify.app" target="_blank"><img src="/img/websites/Photography on computer image.jpg" alt="Photo of a Photography blog website on a computer"></a>  
    </div>
    </label> 
    </div>
    <!-- Second website image ends here -->
    <!-- Third website image starts here -->
    <div class="col-lg-3 col-sm-6">
    <div class="website-images">
    <label>Band Profile Website 
        <a href="https://garytate-band-site.netlify.app" target="_blank"><img src="/img/websites/Band website on computer image.jpg" alt="Photo of bands profile website on a computer">
    </a>
    </label>
    </div>
    </div>
    <!-- Third website image ends here -->
    <!-- Forth website image starts here -->
    <div class="col-lg-3 col-sm-6">
    <div class="website-images">
    <label>Static Website
       <a href="https://garytate-static-site.netlify.app" target="_blank"><img src="/img/websites/Static site website on computer image.jpg" alt="Photo of static website on a computer"></a> 
    </label>
    </div>
    </div>
    <!-- Forth website image ends here -->
    </div>
    <!-- Website images on computer starts here -->
</div>
 <!-- Website Projects starts here --> 
 <br>
 <br>
<hr>
<!-- JavaScript Projects starts here -->
<div class="text-center">
    <h1>JavaScript Projects</h1>
    <hr>
    <br>
</div>
<div class="row">
<!-- Simple Form starts here -->
  <div class="col-lg-4">
    <form  action="/projects/"  class="form-control form-signin" id="validation-form">
      <h2>Validation Form</h2>
      <p>This is a form that uses JavaScript to validate your inputs and lets you know if there are any errors.</p>
      <hr>
      <!-- First input starts here -->
      <label>First Name<br>
      <input name="firstName" id="firstName" type="text" placeholder="Your first name">
      </label>
      <!-- First input ends here -->
      <!-- Second input starts here -->
      <label>Last Name<br>
      <input  name="lastName" id="lastName" type="text" placeholder="Your last name">
      </label>
      <!-- Second input ends here -->
      <!-- Email input starts here -->
      <label>Your email<br>
      <input name="email" id="email" type="email" placeholder="Your email">
      </label>
      <!-- Email input ends here -->
       <!-- Password input starts here -->
      <label>Your password<br>
      <input name="password" id="password" type="password" placeholder="Your password">
      </label>
      <!-- Password input ends here -->
      <button class="btn" type="submit" id="submit" name="submit">Submit</button>
    </form>
  </div>
      <!-- Simple Form ends here -->
      <!-- Simple Form starts here -->
  <div class="col-lg-4">
    <form class="form-control form-signin">
      <h2>Simple Form</h2>
      <p>This form will take your first and last name as inputs and will display your full name.</p>
      <hr>
      <h3 id="userNameOutput">You Name</h3>
      <label>Your first name<br>
      <input name="firstName" id="simpleFormFirstName" type="text" placeholder="Your first name">
      </label>
      <label>Your last name<br>
      <input name="lastName" id="simpleFormLastName" type="text" placeholder="Your last name">
      </label>
      <button class="btn" type="button" id="name-btn" >Submit</button>
    </form>
  </div>
  <!-- Simple Form ends here -->
  <!-- Simple Calculator 1 starts here -->
  <div class="col-lg-4">
    <form class="form-control form-signin">
      <h2>Simple Calculator 1</h2>
      <p>This is a simple addition calculator. Enter two numbers and see the answer below.</p>
      <hr>
      <label>First number<br>
      <input name="num1" id="num1" type="number" placeholder="First number">
      </label>
      <h2>+</h2>
      <label>Second number<br>
      <input name="num2" id="num2" type="number" placeholder="Second number">
      </label>
      <button class="btn" type="button" id="calc-btn">Calculate!</button>
      <h1 id="answer"></h1>
    </form>
  </div>
  <!-- Simple 1 Calculator ends here -->
  
  <!-- Tip Calculator Starts here -->
  <div class="col-lg-4">
    <form class="form-control form-signin">
      <h2>Tip Calculator</h2>
      <p>Enter your bill amount and select the percentage of tip you would like to give. If there is only one person paying, you can either leave the number of people blank or enter 1.</p>
      <hr>
      <label>Bill amount<br>
      <span>£ </span><input id="billamt" type="text" placeholder="Bill amount">
      </label>
      <label>How much tip would you like to give?<br>
        <select id="serviceQual">
            <option disabled selected value="0">Choose an percentage</option>
            <option value="0.05">5&#37;</option>
            <option value="0.1">10&#37;</option>
            <option value="0.15">15&#37;</option>
            <option value="0.2">20&#37;</option>
            <option value="0.3">30&#37;</option>
            <option value="0.4">40&#37;</option>
            <option value="0.5">50&#37;</option>
        </select>
        </label>
        <label>How many people are sharing the bill?
        <input id="peopleamt" type="text" placeholder="Number of People">
        </label>
        <button class="btn" type="button" id="calculate">Calculate!</button>
  <!--calculator end-->
    <div id="totalTip">
      <h5 id="each">You will each pay a tip of:</h5>
      <h2><sup>£</sup><span id="tip">0.00</span> </h2>
    </div>
    </form>
  </div>
  <!-- Tip Calculator Starts here -->
</div>  
<!-- JavaScript Projects ends here -->
<br>
<br>

<script src="/js/projects.js"></script>
