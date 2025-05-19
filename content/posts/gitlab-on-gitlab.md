---
title: "GitLab on GitLab: How the DevOps Platform Builds Itself and a Culture of Iteration"
date: "2025-05-18"
excerpt: "GitLab isn't just a comprehensive DevSecOps platform for its customers; it's the very foundation upon which GitLab itself is built, operated, and scaled. This deep, pervasive practice of 'dogfooding'—or 'GitLab on GitLab'—is fundamental to its product development, remote-first culture, and its mission to empower everyone to contribute."
tags: ["GitLab", "DevOps", "DevSecOps", "CI/CD", "Source Code Management", "Product Development", "Dogfooding", "Open Core", "Remote Work", "Company Culture", "GitLab on GitLab"]
---

In the world of software development, the ultimate testament to a platform's capability is often whether its own creators rely on it for their most critical tasks. For GitLab, the comprehensive DevSecOps platform, this isn't just a talking point—it's a fundamental operational reality. GitLab runs its entire company, develops its vast software, manages its complex infrastructure (including GitLab.com), and fosters its all-remote culture using its own single application. This profound commitment to "eating your own dogfood," or as they often put it, "GitLab on GitLab," is not just a practice; it's a core tenet that shapes the product, drives innovation, and ensures a deep empathy with its global user base.

### The Entire Company Runs on GitLab: A Single Source of Truth

GitLab's vision, as often articulated by CEO Sid Sijbrandij and reflected in their extensive [public handbook](https://handbook.gitlab.com/handbook/), is to provide a single application for the entire software development lifecycle. This vision is most powerfully validated by their own internal adoption. From idea to production, GitLab uses GitLab for:

* **Source Code Management:** The millions of lines of code that constitute GitLab itself are managed in GitLab repositories. Every merge request, every code review, and every version iteration happens within their own platform.
* **Continuous Integration/Continuous Deployment (CI/CD):** GitLab's robust CI/CD capabilities are the engine behind their own development velocity. They use GitLab CI/CD to automatically build, test, package, and deploy GitLab.com and its various components multiple times a day. The [GitLab Handbook page on "Dogfooding CI/CD"](https://handbook.gitlab.com/handbook/engineering/infrastructure/library/ci-cd/) provides a glimpse into how seriously they take this internal proving ground.
* **Plan and Project Management:** All work, from strategic initiatives and new feature development (organized via Epics, Issues, and Iterations) to marketing campaigns and HR projects, is planned, tracked, and managed using GitLab's own planning tools. This ensures that these features are robust and genuinely useful for diverse team workflows.
* **Security (DevSecOps):** GitLab champions a "Shift Left" security approach, and they apply this to their own development by integrating their suite of security scanning tools (SAST, DAST, Dependency Scanning, Secret Detection, etc.) directly into their CI/CD pipelines. This internal use is critical for refining these DevSecOps capabilities.
* **Collaboration and Communication:** As a pioneering all-remote company with team members in over 65 countries, asynchronous communication and transparent collaboration are vital. GitLab (the product) serves as the central hub. Merge requests are key collaboration points, issues track discussions, and the entire company handbook—a sprawling, living document of over 2,000 pages detailing how they operate—is a GitLab project, open to contributions and iterations from all team members. This transparency, a core GitLab value, is enabled by their own platform.
* **Operating GitLab.com:** The SRE (Site Reliability Engineering) and infrastructure teams responsible for the massive GitLab.com SaaS offering use GitLab's monitoring, deployment, and incident management capabilities to keep the service running. This is arguably the most demanding "dogfooding" environment, pushing the platform to its limits in terms of scale and reliability.

### How "GitLab on GitLab" Drives Product Evolution

This deep immersion in their own platform provides a continuous, high-fidelity feedback loop that directly shapes the product:

* **Real-World Problem Solving:** When GitLab's own engineers encounter a bottleneck in their CI/CD pipelines, a missing feature in issue tracking, or a cumbersome aspect of code review, they are experiencing the same pain points their users might. This creates a powerful internal impetus to build solutions that address these real-world needs.
* **User-Centric Design for Developers:** Because GitLab's primary internal users are developers, DevOps engineers, and product managers, the platform naturally evolves to meet the sophisticated demands of technical users who value efficiency, automation, and a comprehensive toolset.
* **Rapid Iteration:** With a monthly release cycle ("every month on the 22nd," as highlighted by [Sid Sijbrandij in an InfoQ interview](https://www.infoq.com/articles/gitlab-sid-interview-sw-development/)), the ability to quickly test and validate new features internally is crucial. "GitLab on GitLab" allows for rapid iteration based on immediate internal feedback.
* **Feature Prioritization:** The features that solve the most significant internal pain points or unlock substantial productivity gains for GitLab's own teams are often strong candidates for broader development and release.
* **AI Integration (GitLab Duo):** As GitLab integrates AI capabilities across the DevSecOps lifecycle with GitLab Duo (e.g., AI-assisted code suggestions, vulnerability explanations, value stream forecasts), its own teams are among the first to utilize and refine these tools in their daily workflows, shaping the future of AI-powered software development from within.

### The All-Remote Context: Shaping a Platform for Distributed Teams

GitLab's all-remote culture is not just a work style; it's a product shaper. Because the entire company collaborates and builds software without a central physical office, the GitLab platform has been inherently designed and optimized for asynchronous workflows, clear communication trails (via issues and merge requests), and transparency. This makes it an exceptionally strong platform for other distributed teams and organizations embracing remote or hybrid work models. Their [All-Remote guide](https://about.gitlab.com/company/all-remote/) is a testament to their expertise, and the platform reflects these ingrained practices.

### Benefits of a Transparent, Dogfooding Culture

The "GitLab on GitLab" approach, coupled with their commitment to transparency (much of their handbook and roadmap are public), yields significant benefits:

* **Authenticity and Trust:** Users and customers can see that GitLab believes in its own product enough to run its entire business on it.
* **High-Quality, Battle-Tested Features:** Features are rigorously tested in a demanding, real-world environment before reaching the wider community.
* **Deep Understanding of User Needs:** GitLab developers have an intrinsic understanding of the challenges and desires of other software development teams.
* **Strong Community Alignment:** By being open about their processes and using their own product, they foster a strong connection with their open-source community.

While the primary users within GitLab are highly technical, the company also focuses on making the platform accessible. However, the depth and breadth of features, as noted in some external analyses like a [SentinelOne article on GitLab CI/CD Security](https://www.sentinelone.com/cybersecurity-101/cloud-security/gitlab-ci-cd-security/), can sometimes present a learning curve for new users—a common challenge for comprehensive platforms that GitLab likely continuously addresses through documentation and UI refinements based on broad feedback.

### Conclusion: The Ultimate DevOps Proving Ground

GitLab's commitment to using its own platform for every facet of its operations is a powerful demonstration of confidence and a critical driver of its innovation. By making its own teams the first and most demanding users, GitLab ensures that its DevSecOps platform is not just a collection of features but a deeply integrated, battle-tested solution designed to meet the real-world challenges of modern software development. The "GitLab on GitLab" philosophy means that when users choose GitLab, they're adopting a platform that is continuously shaped and validated by a global team of experts who don't just build the future of DevOps—they live it every day.