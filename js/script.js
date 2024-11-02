// JavaScript Document
// Smooth scroll and section fade-in effect
window.addEventListener('scroll', function() {
    const fadeInSections = document.querySelectorAll('.fade-in');
    
    fadeInSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;
        
        if (sectionTop < triggerPoint) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});






<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    
    $to = "your-email@example.com";
    $headers = "From: " . $email;
    $email_subject = "Contact Form: " . $subject;
    $email_body = "You have received a new message from the contact form.\n\n" .
                  "Name: $name\n" .
                  "Email: $email\n\n" .
                  "Message:\n$message";

    
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again.";
    }
}
?>
