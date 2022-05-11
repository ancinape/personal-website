---
title: "My Career Chase or: How I Learned To Stop Worrying and Love the Cover Letter"
translationKey: "my-career-chase"
---

Since high school, I have wanted to be a programmer. This may be in any sector -- in private or public, local or international, profit or non-profit, as long as I got to do what I love. I wrote my resume very early, before I have even seen a college application. I thought demand for programmers was so high, companies would be dying to hire me!

I faced the truth, staring at me on rejection emails. Passion does not translate to anything worthwhile on paper. To truly achieve that career, I set out to develop some experience, enhance my resume, write new cover letters, and design this website. The process has been on-going since 2015, when I had my first internship in ITS. After I collected enough bullet points on my resume, I spent the last 6 months finalizing my application.

## Resume

My first resume was conventional. It was designed during a career fair at Yale University with advice from recruiters. The design was pragmatic and efficient -- black text on white paper with my name emboldened at the top. My contact information and skills followed suit, with my work history covering the rest of my resume.

![First Resume](/assets/img/posts/resume1.jpg "First Resume")

Although, this format works for most people, it did not stick out in the stack of other resumes. Designers and artists often color their resumes to illustrate the applicant’s character. I learned even directors at Yale’s medical campus paint their resume and format it differently, to better showcase their history. The knowledge was given to me during a meeting with one such director who showed their 2-page resume, one version including a headshot and one without, for workplaces that censor identifiable information during their candidate screenings.

I did not know where to begin. What format should I use? What colors should there be? I did not have pen and paper lying about, so I drew a basic sketch/wireframe of my new design using Xournal++. This was the same strategy I used when designing websites.

![Second Resume Sketch](/assets/img/posts/resume2.jpg "tooltip text")

The design was inspired by vexillology. My belief was if the resume is designed like a flag, it would illustrate my hobby of flag making. A canton took up the top left, like a [flag’s canton](https://en.wikipedia.org/wiki/Canton_(flag)) with my full name and informal titles. My languages took up width towards the [fly](https://en.wikipedia.org/wiki/Glossary_of_vexillology#Flag_elements). I omitted my fluency with the Russian language as it was ambiguous mixed in with the programming languages. I kept my work history as the main attraction, summarizing all of my internships into one as I was recently hired. Additionally, the end of the resume would include my hobbies, such as vexillology. This design better featured my experience with programming.

![Second Resume Completed](/assets/img/posts/resume3.jpg "tooltip text")

There was a version of my resume with and without my headshot. The color scheme was generated from [Coolors](https://coolors.co). The colors had to be pastel as to be easy to read on a screen and when printed in greyscale.

There were notable issues with this design that came as a result of simplification. There was no contact or degree information. Each line had significant empty space between and to the right. Overall, each line was too long, causing the reader’s eyes to travel far across the page, at least according to the [Baynard Institute](https://baymard.com/blog/line-length-readability).

The biggest issue was the stigma of internships. They are often dismissed from counting as work experience. An intern’s role is rarely defined so my experience may seem arbitrary to a recruiter. Since [the average recruiter spends around 7.4 seconds looking at a resume](https://www.prnewswire.com/news-releases/ladders-updates-popular-recruiter-eye-tracking-study-with-new-key-insights-on-how-job-seekers-can-improve-their-resumes-300744217.html), they could skip chunks of an application as soon as they read the word “intern.” I took to Xournal++ and sketched a new resume design, one that would address these problems.

![Third Resume Sketch](/assets/img/posts/resume4.jpg "tooltip text")

Technically, this is a wireframe, as I included a placeholder for the headshot. While there are many more lines to this design, the biggest change was the placement of work history at the bottom. My belief was if I introduced my work before my history of internships, it may dispel some of the stigma. Afterall, my work seems arbitrary in the context of my internships so I seperated them into the projects sections. I also added the frameworks sub-section under languages. Many job openings specifically required frameworks. For example, web development positions would mention React or Node.JS more often than pure JavaScript, if at all.

![Third Resume Completed](/assets/img/posts/resume5.jpg "tooltip text")

This is the final iteration of my resume. The color scheme is made up of primary colors, coincidently making up the [Pansexual flag’s colors](https://en.wikipedia.org/wiki/Pansexual_flag). The scheme was kept pastel for easier viewing on the screen and on greyscale paper. The term “frameworks” was changed to “used in” as to include tools like Unity. I removed my hobby of vexillology, kept as a surprise during the interview, and upgraded my server administration as an on-going project. By keeping the resume project-focused, a recruiter would learn of my internships last, hopefully considering me for my skills first.

## Website

Looking back at my resume, there was little I could show to a recruiter. While there were some open source projects, they were not immediately accessible. For that, I needed a website, much like this one. A website would serve its function as a project worth showing to recruiters and a place to list my work experience. I have been meaning to post my work history somewhere other than LinkedIn since their [700 million records breach](https://fortune.com/2021/06/30/linkedin-data-theft-700-million-users-personal-information-cybersecurity/).

Being a back-end programmer, I was avoiding platforms like React and searched for more beginner-friendly platforms. Through my research, I learned of static site generation through platforms like Hugo, Gatsby, and [Eleventy](https://www.11ty.dev/). It was the latter than convinced me. Eleventy is a relatively young generator brimming with documentation. Its active community led me to the interconnected blogosphere of designers and front-end programmers. I wanted to be cool like them, so I chose Eleventy as my platform.

The website also served a selfish purpose. During my research for the perfect website platform, I looked into web analytics. If I could keep track of visits on my website, I could use it as feedback on my applications, what to keep, and what to elaborate on. In most cases, applicants get ghosted or receive few genuine criticism from their rejections. Web analytics could at least indicate interest of my application. If you are here reading this article, I would know that through analytics and focus on more articles you would enjoy. In my research, Google’s was the most popular option, though it came with a lack of ownership. I would be sending data to Google without knowing what they would do it or whether it was fair to the visitors. A smaller, self-hostable analytics like [Plausible](https://plausible.io/) would suffice. Their main product is to host Plausible analytics for others, but they featured [documentation to set up one’s own Plausible Docker](https://plausible.io/docs/self-hosting). Before long, I had my own analytics running alongside my website.

![Plausible Dashboard](/assets/img/posts/plausible.jpg)

Plausible had additional notes about its use, such as being respective of one’s privacy by intentionally omitting IP addresses from the data and being easily blockable on most ad blockers. Most recruiters who come to my website will likely be using their work computers, which usually do not come installed with an ad blocker. There was a method to [get around ad blocking](https://plausible.io/docs/proxy/introduction) but I felt it would be too far. After all, I use ad blockers as well.

![Home Page in Russian](/assets/img/posts/website.jpg)

The design of the site is meant to be minimal and retro. Retro in both sense of the word. It is meant to invoke the feeling of looking at old paper, with an 80's-like computer GUI hovering above. Edges are sharp, with large gaps between elements for comfortable reading. The color scheme is [Belafonte Day](https://github.com/mbadolato/iTerm2-Color-Schemes#belafonte-day), chosen because of its contrasting but calming mix of browns. The background is covered with a grainy noise, to complement the paper-like colors. The fonts are [Elisabethische](https://fontlibrary.org/en/font/eiisabethische) and Liberation Serif, both FOSS-licensed, compatible with the Cyrillic script, and serif for extra formality.

This entire project is featured at the top of the resume as [letsgettoknow.me](letsgettoknow.me). I am proud of the way it came out. The source code for this website is available in my [Github](https://github.com/ancinape/personal-website), with more details on its creation, and how one could set it up for themselves.
## Cover Letter
