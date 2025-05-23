---
title: "Secure Thyself: Inside New Relic's DevSecOps Feedback Loop" 
date: "2025-05-08" excerpt: "Explore how New Relic is turning the lens of observability inward, using its own security products to embed security into the development lifecycle and solve the universal challenge of alert fatigue." 
tags: \["DevSecOps", "Security", "Observability", "Vulnerability Management", "Product Development", "APM", "Cloud Security"\]
---
For decades, security has often been treated as a final, fortified gate in the software development lifecycle—a checkpoint managed by a specialized team before code ships to production. But in an era of high-velocity CI/CD pipelines and complex cloud-native architectures, that model is fundamentally broken. The modern approach, DevSecOps, calls for security to be a shared responsibility, woven into every stage of development. For a company like New Relic, whose very business is providing deep insight into complex systems, this isn't just a philosophy they sell; it's a principle they must live by.

To build a credible security product in today's landscape, a company must first look inward. It needs to confront the same challenges its customers face: tool sprawl, alert fatigue, and the constant tension between speed and safety. New Relic's journey into security observability is a prime example of this, where the development of its own tools is intrinsically linked to the needs of its own engineering teams.

### **The Internal Problem: A Flood of Signals, A Puddle of Context**

Imagine being an engineer at New Relic. You operate a planet-scale platform that ingests over 120 petabytes of data every month, running on thousands of nodes across dozens of Kubernetes clusters. The performance and reliability of this system are paramount. But so is its security.

In such an environment, security signals come from everywhere: static code analysis tools, dependency scanners, cloud configuration monitors, and runtime threat detectors. The result is often a deluge of alerts, each siloed within its own tool. This creates a cascade of problems that New Relic's own teams would inevitably face:

* **Alert Fatigue:** When developers are bombarded with low-context security warnings, they quickly become noise. Legitimate threats can get lost in the flood.  
* **Lack of Prioritization:** Is a 'critical' vulnerability in a non-production, internal-only service more important than a 'medium' vulnerability in a core production library? Without context from an observability platform, it's nearly impossible to know.  
* **Developer Friction:** Tossing a security report "over the wall" to a developer without actionable context forces them to stop coding, switch tools, and begin a time-consuming investigation.

Solving this for their customers meant first solving it for themselves. This necessity appears to be the driving force behind **New Relic Vulnerability Management**.

### **Building the Solution: From APM to IAST**

New Relic's history is rooted in Application Performance Monitoring (APM). Their agents already live deep within an application's runtime, observing performance metrics and tracing requests. This existing footprint provided a unique advantage. Why couldn't that same agent also watch for security vulnerabilities?

This logical extension led to the development of their own security offerings. A key move was the acquisition of K2 Cyber Security, which brought powerful **Interactive Application Security Testing (IAST)** technology into the fold. As detailed in a [DevOps.com article](https://devops.com/new-relics-bolsters-observability-platform/), IAST allows New Relic to use its agents to detect and validate vulnerabilities *as the application runs*, without requiring separate, disruptive scans.

In their blog post, ["Streamlined security: Integrating IAST into your DevSecOps strategy,"](https://newrelic.com/blog/best-practices/iast-devsecops) New Relic champions a vision where security is not a separate step but an integrated part of the workflow. The post states, "IAST operates live, immediately spotlighting vulnerabilities," and emphasizes "fewer false alarms." This isn't just marketing copy; it's a direct solution to the internal pain points of alert fatigue and developer friction. By building these capabilities into the platform their own engineers use daily, New Relic could refine a system that provides:

* **Unified Visibility:** Bringing native vulnerability detection alongside third-party security signals into the same platform where performance data lives.  
* **Context-Rich Prioritization:** Correlating a vulnerability with the specific application entity, its environment (production, staging), and its performance impact.  
* **A "Single Pane of Glass":** Allowing developers, SREs, and security teams to look at the same data, breaking down the silos that create so many issues.

### **The Risk of a Unified Vision**

Did this strategy lead them astray? There's no evidence of a major misstep, but it does introduce a new, more nuanced set of challenges. By championing a platform that unifies observability and security, New Relic is also championing a significant cultural shift. The tool is designed to empower developers to take on more security responsibility.

The potential pitfall here is not in the technology itself, but in the implementation of the culture it requires. For an organization—whether it's New Relic internally or one of their customers—that isn't ready for this "shift-left" mindset, a unified tool can feel complex. It asks developers and operations engineers to engage with a domain that has traditionally been someone else's problem. If the organizational structure and training aren't in place to support this shift, the tool's power can become a source of complexity rather than a solution.

The case study of their customer, Dustin, as detailed on the [New Relic blog](https://newrelic.com/blog/how-to-relic/monitoring-solution-merger-dustin), highlights the goal: to use a unified tool to "make sure that when we did get an alert, it was accurate and valuable." The unstated challenge is the organizational work required to get to that point.

### **Conclusion: Charting a Secure Path Forward**

New Relic's foray into security is a natural evolution of its core mission. They are applying the principles of observability to one of the most complex and critical domains in modern software. By building the security tools they need internally, they've created a powerful feedback loop. The daily challenges faced by their own engineers in securing a massive, dynamic platform directly inform the features and philosophy of their Vulnerability Management product.

This approach of "securing thyself" is more than just a development strategy. It’s a testament to the belief that in the world of DevSecOps, you can't effectively solve a problem for your customers until you've first solved it for yourself. The result is a platform that doesn't just find vulnerabilities, but provides the context needed to fix them, aiming to make security an integral, observable, and manageable part of everyone's workflow.