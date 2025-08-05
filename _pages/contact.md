---
yamllayout: page
title: Contact Us
permalink: /contact/
---
<h1 style="color: #ff69b4;">Get in Touch</h1>
<p><strong>Email:</strong> yourname@example.com</p>
<p><strong>Phone:</strong> (123) 456-7890</p>
<p><strong>Address:</strong> 123 Home Studio Lane, Your City</p>

<h2 style="color: #00ced1;">Send Us a Message</h2>
<form action="YOUR_FORMSPREE_ENDPOINT" method="POST">
  <label for="name">Name:</label>

  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>

  <input type="email" id="email" name="email" required>

  <label for="message">Message:</label>

  <textarea id="message" name="message" required></textarea>

  <button type="submit" style="background-color: #ff69b4; color: white;">Send</button>
</form>


Sign up at [formspree.io](https://formspree.io), create a form, and replace `YOUR_FORMSPREE_ENDPOINT` with your unique URL.

