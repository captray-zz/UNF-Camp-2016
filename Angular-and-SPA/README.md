Open Source Modern Web Applications Tutorial

You can access relevant materials for this tutorial from http://mweb.spinspire.com.
The above site teaches you how to create modern web applications using Open Source technology stack.

We will assume that you have basic familiarity with web development (HTML, CSS, JS and Chrome Dev Tools) and are proficient in using at least one of Linux, Windows or Mac.

1. Make sure you have Google Chrome or Firefox Web Browser. We will be using their Developer Tools extensively.

2. Install NetBeans - make sure you get the "All" version. You might have to install the latest JDK also.

3. If using Windows - Install Git Bash to be able to remote login (SSH) into cloud servers. You already have this if you are using Mac or Linux.

4. Launch Git Bash (or Terminal in Linux/Mac) and create yourself a public/private key-pair using the this command - ssh-keygen -P '' -f ~/.ssh/id_rsa - which generates ~/.ssh/id_rsa private key, and ~/.ssh/id_rsa.pub public key. It is the public key (not private) that you are supposed to paste into the form at http://mweb.spinspire.com.

5. Create yourself an account on this server, using the form at http://mweb.spinspire.com.

6. Now you're all set. Just follow:

  6.a. this document: https://docs.google.com/document/d/1IfKBAvdIXHJvOXEKllTfr9wKnfrAYkjjMCyKrYKbkPM
  
  6.b. this git repo: https://bitbucket.org/jitesh_doshi/mweb
  
  6.c. this video: http://youtu.be/HVlqK5CzYGU

Create Your User Account at http://mweb.spinspire.com/

You need following info for creating account:

  Your New Username (username)
  
  Your Public Key (copy-paste your public key (~/.ssh/id_rsa.pub))

After creating your user account at above link, you will be able to ssh into this Linux box by running ssh your-new-username@mweb.spinspire.com in your Git Bash shell.
