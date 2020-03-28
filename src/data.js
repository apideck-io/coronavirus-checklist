export const steps = [
  {
    id: 'do',
    title:'Do',
    description: 'Take the following measures to stop or slow down the spread of the Coronavirus.',
    items: [
      {
        id: 'wash-your-hands',
        title: 'Wash your hands - 20 seconds with soap and warm water.',
        role: ['individual'],
        paragraphs: [
          "[Here are great options](https://www.seattletimes.com/life/wellness/coronavirus-prevention-10-awesome-tunes-to-sing-while-you-wash-your-hands/?utm_medium=social&utm_campaign=owned_echobox_tw_m&utm_source=Twitter#Echobox=1583369786) of songs to sing to help you pass the time. Unlike some really stubborn viruses (like polio), viruses in the coronavirus family typically don’t survive longer than a [few hours on most surfaces hard surfaces; though it can be up to days. Bleach or ethanol are more effective at decontaminating surfaces than they are disinfecting humanskin](https://www.journalofhospitalinfection.com/article/S0195-6701(20)30046-3/fulltext). So don’t hoard the hand sanitizer, that should be used only when you do not have any access to a soap and water sink. At a restaurant? Wash your hands. At school? Wash your hands. Vigorous handwashing with soap really is vital to reduce transmission; the awesome science of why is [here](https://twitter.com/PalliThordarson/status/1236549305189597189). **If you do nothing else at all, do wash your hands.**",
          "Bonus: [I Will Survive hand washing challenge (CNN)](https://edition.cnn.com/videos/entertainment/2020/03/13/gloria-gaynor-coronavirus-hand-washing-tiktok-challenge-mxp-vpx.hln/video/playlists/atv-trending-videos/)"
        ],
        links: [
          {
            href: "https://www.flattenthecurve.com/",
            title: "Flatten the curve"
          }
        ]
      },
      {
        id: 'cover-coughs-sneezes',
        title: 'Cover coughs and sneezes',
        role: ['individual'],
        paragraphs: [
          `* **Cover your mouth and nose** with a tissue when you cough or sneeze or use the inside of your elbow.
          * **Throw used tissues** in the trash.
          * Immediately **wash your hands** with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.`
        ],
        links: [
          {
            href: "https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html",
            title: "Centers for Disease Control and Prevention"
          }
        ]
      },
      {
        id: 'facemask',
        title: 'Wear a facemask if you are sick',
        role: ['individual'],
        paragraphs: [
          '**If you are sick:** You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s office. If you are not able to wear a facemask (for example, because it causes trouble breathing), then you should do your best to cover your coughs and sneezes, and people who are caring for you should wear a facemask if they enter your room. [Learn what to do if you are sick.](/coronavirus/2019-ncov/about/steps-when-sick.html)',
          '**If you are NOT sick:** You do not need to wear a facemask unless you are caring for someone who is sick (and they are not able to wear a facemask). Facemasks may be in short supply and they should be saved for caregivers.'
        ],
        links: [
          {
            href: "https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html",
            title: "Centers for Disease Control and Prevention"
          },
          {
            href: "https://smartairfilters.com/en/blog/best-materials-make-diy-face-mask-virus/",
            title: "What are the Best Materials for Making a DIY Face Mask?"
          }
        ]
      },
      {
        id: 'clean-and-disinfect',
        title: 'Clean and disinfect',
        role: ['individual'],
        paragraphs: [
          '**Clean AND disinfect [frequently touched surfaces](/coronavirus/2019-ncov/community/home/cleaning-disinfection.html) daily**. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.',
        ],
        links: [
          {
            href: "https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html",
            title: "Centers for Disease Control and Prevention"
          },
          {
            href: "https://coronachecklist.org/"
          }
        ]
      },
      {
        id: 'social-distancing',
        title: 'Social distancing - 6 feet is safest from infectious droplet spread',
        role: ['individual'],
        paragraphs: [
          'In the absence of a vaccine or treatment “[social distancing](https://qz.com/1816060/a-chart-of-the-1918-spanish-flu-shows-why-social-distancing-works/),” or limiting non-essential gatherings, is one way to slow that spread. Of course, in a growing list of places including China, Italy, and New Rochelle, New York, government-issued quarantines, curfews, and other restrictions are already in effect. And some employers and schools have already mandated work- or study-from-home, removing the pressure of deciding whether to keep ourselves or our children home.',
          "It is best to stand at a distance from people. 6 feet or more is safest from infectious droplet spread. The higher your underlying risk factors (age, recent major surgery, cancer, immunocompromised, asthma, diabetes, etc), the more you should avoid crowds. &nbsp;",
          "CDC has recommended that [older adults ‘stay at home as much as possible’](https://fox8.com/news/coronavirus/cdc-older-adults-should-stay-at-home-as-much-as-possible-due-to-coronavirus/). But keep in mind that over the longer term, this isolation could have negative impacts on many people’s mental health. Cultivating meaningful relationships is a well established but under-appreciated determinant for all health outcomes. So DO see the people you love, but consider doing so via lower-risk activities. For instance, go for a walk outside with a smaller group of people rather than attending an event indoors. Go to the beach. Ride bikes. Golf. Picnic more. This is not going away in one week, so pace yourself."
        ],
        links: [
          {
            href: "https://www.flattenthecurve.com/",
            title: "Flatten the curve"
          },
          {
            href: 'https://qz.com/1816095/should-i-stay-home-because-of-coronavirus/',
            title: 'Quartz - The ethics of staying home in the face of coronavirus'
          },
          {
            href: 'https://www.washingtonpost.com/graphics/2020/world/corona-simulator/',
            title: 'The Washington Post - The effect of lockdown and social distancing'
          },
          {
            href: 'https://www.theatlantic.com/family/archive/2020/03/coronavirus-what-does-social-distancing-mean/607927/',
            title: 'The Dos and Don’ts of ‘Social Distancing’ - The Atlantic'
          },
          {
            href: 'https://www.today.com/health/social-distancing-coronavirus-social-distancing-t175379'
          },
          {
            href: 'https://virtualassembly.club/',
            title: 'Directory of free virtual events, courses & tools'
          },
          {
            href: 'https://socialdistancing.works/',
            title: 'Encourage people to self-quarantine is by adding a mask to our profile pic'
          }
        ]
      },
      {
        id: 'professional-distancing',
        title: 'Work remote - if your job allows it',
        role: ['individual'],
        paragraphs: [
          'As the coronavirus spreads around the world, public-health experts are encouraging people to engage in social distancing: The limiting of non-essential gatherings. And thanks to technology, many professionals can now work from anywhere with a laptop and a high-speed internet connection.',
          'Yet some employees are finding themselves flummoxed by bosses who insist on working together in a shared office space. If you’re in this position and trying to figure out how to broach the topic with your manager, consider [these templates](https://qz.com/work/1818508/how-to-tell-your-boss-youre-working-from-home-because-of-coronavirus/) from a few employees who have told their bosses gently and effectively that gathering in the office is, well, non-essential.',
          'Most companies already have taken proactive measures to enable their employees to work remotely. List: [https://stayinghome.club/]'
        ],
        links: [
          {
            href: 'https://qz.com/1816095/should-i-stay-home-because-of-coronavirus/',
            title: 'Quartz - The ethics of staying home in the face of coronavirus'
          },
          {
            href: 'https://wfhmanual.com/',
            title: 'A super huge collection of WFH tips and resources'
          }
        ]
      },
      {
        id: 'flu-shot',
        title: 'Get your flu shot (and if you’re 60+, pneumonia vaccine)',
        role: ['individual'],
        paragraphs: [ 
          "Better late than never. The flu vaccine won’t protect you at all against Coronavirus. However it DOES reduce your likelihood of contracting flu. And therefore your likelihood of needing to be hospitalized, which also reduces your chances of contracting Coronavirus while you are there. If you’re 60+ get your pneumonia vaccine as well for the same reason."
        ],
        links: [
          {
            href: "https://www.flattenthecurve.com/",
            title: "Flatten the curve"
          }
        ]
      },
      {
        id: 'medic-visits',
        title: 'Medic visits - Cancel all non-essential face-to-face medic',
        role: ['individual'],
        paragraphs: [ 
          "Hospitals are hot spots for transmission; get your vaccinations at a pharmacy rather than at the doctor. Find ways to do your physical therapy at home if possible.",
          "Telemedicine professionals, this is your time to save the day, for everyone’s benefit but especially those in rural areas who are hard hit and without easy access to medical care. https://doxy.me and https://vsee.com/clinic/ provide free HIPAA compliant video platforms for telehealth.",
          "JHU is developing resources here for hospital staff and administrators; more info [here](https://www.cbsnews.com/news/coronavirus-containment-dr-jon-lapook-60-minutes-2020-03-08/)."
        ],
        links: [
          {
            href: "https://www.flattenthecurve.com/",
            title: "Flatten the curve"
          }
        ]
      },
      {
        id: 'travel',
        title: 'Travel - Cancel all non-essential travel anywhere',
        role: ['individual'],
        paragraphs: [ 
          "This illness can [start slow and accelerate suddenly](https://www.nejm.org/doi/full/10.1056/NEJMoa2001191). If you are away from home when it does, you’re away from the systems that could keep you fed and cared for even if you turn out not to have a bad case. Even if you remain healthy, you could end up being quarantined. It is atbest boring, at worst [terrible conditions](https://twitter.com/alankilbourne2/status/1236541651692204033), not to mention potentially really expensive. You could risk getting infected even if you are careful. Travel history is increasingly irrelevant to risk, especially because we are flying a bit blind with the lack of testing, but the available data of confirmed infections is available [here](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6) from Johns Hopkins University. Strain genetics information is available [here](https://nextstrain.org/ncov?label=clade:B4&m=div).",
          "In case you don't have any other option to travel, you should practice basic hygiene that can help [keep you from getting sick on planes](https://www.cnet.com/how-to/how-to-avoid-getting-sick-on-planes/)."
        ],
        links: [
          {
            href: "https://www.flattenthecurve.com/",
            title: "Flatten the curve"
          }
        ]
      },
      {
        id: 'stock-up',
        title: 'Slowly stock up on food and essentials - Gradually, and responsibly',
        role: ['individual'],
        paragraphs: [ 
          "“Experts aren’t telling you to stock up on essentials because they think you’re going to run out of food & society is going to collapse. It’s because a [few days of panic buying & high demands cause more panic & stress systems unnecessarily](https://twitter.com/firefoxx66/status/1233666678841597952). Also, being in line with hundreds of people isn’t wise. Go off peak. Buy a little more than what you need. Preparedness isn’t about doing nothing, but also about not overreacting. It’s about doing your part to put the [*slack in our systems*](https://twitter.com/firefoxx66/status/1233666678841597952) so that short disruptions are smooth as possible, can absorb extra load, & resources remain available for those most in need."
        ],
        links: [
          {
            href: "https://www.flattenthecurve.com/",
            title: "Flatten the curve"
          }
        ]
      },
      {
        id: 'mental-health',
        title: 'Take care of your mental health',
        role: ['individual'],
        paragraphs: [
          "Check out these resources that could be useful in promoting wellness and maintaining good mental health throughout these stressful times.",
          "[Headspace](https://www.headspace.com/) – This app helps you to de-stress, increase focus, and decreases frequency of burn-out through guided meditation via the app. It has been implemented in workplaces to increase productivity and could be useful to assuage feelings of anxiety in tense times such as these.",
          "[Calm](https://www.calm.com/) – A multifaceted app that gives you access to breathing exercises, soothing music, guided meditation, and serene scenes of nature that can all contribute to a sense of wellbeing."
        ],
        links: [
          {
            href: "https://www.cdc.gov/coronavirus/2019-ncov/prepare/managing-stress-anxiety.html"
          },
          {
            href: 'https://www.healthline.com/health-news/taking-care-of-your-mental-health-during-covid19-outbreak',
            title: 'Being Mindful of Your Mental Health During the COVID-19 Outbreak'
          },
          {
            href: 'https://afsp.org/taking-care-of-your-mental-health-in-the-face-of-uncertainty/',
            title: 'Taking Care of Your Mental Health in the Face of Uncertainty'
          }
        ]
      },
      {
        id: 'keep-smiling',
        title: 'Keep smiling and stay positive',
        role: ['individual'],
        paragraphs: [ 
          "Keeping on a smile and staying positive can help us through these challenging times.",
          "[Join the #CoronaVirusChallenge](https://twitter.com/hashtag/CoronaVirusChallenge)"
        ]
      },
      {
        id: 'keep-your-sanity',
        title: 'Keep your sanity',
        role: ['individual'],
        paragraphs: [ 
        ],
        links: [
          {
            href: "https://edition.cnn.com/2020/03/19/health/coronavirus-cabin-fever-definition-quarantine-wellness/index.html",
            title: "Do I have 'cabin fever?' What it is, how to 'cure' it"
          },
          {
            href: "https://www.staysane.co/",
            title: "StaySane.co - A collection of crowdsourced content while in self-isolation"
          }
        ]
      },
      {
        id: 'learn',
        title: 'Read about viruses - Get your knowledge up to speed (BONUS)',
        role: ['individual'],
        paragraphs: [ 
          "Reading about the topic will reduce anxiety and help you cope with the outbreak more easily."
        ],
        links: [
          {
            href: "https://www.theverge.com/2020/3/12/21175486/coronavirus-covid-19-pandemic-cases-outbreak-guide-information-who-cdc",
            title: "The Verge - A GUIDE TO THE COVID-19 PANDEMIC"
          }
        ]
      },
      {
        id: 'keep-track',
        title: 'Keep track of the spread of the coronavirus (BONUS)',
        role: ['individual'],
        paragraphs: [ 
          "Stay updated and keep track of the reported coronavirus cases for your country and around the globe."
        ],
        links: [
          {
            href: "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6",
            title: "An online dashboard (by CSSE and WHO) to keep up with all reported cases"
          },
          {
            href: "https://covy.app/",
            title: "Visualize the growth of COVID-19 in your area"
          }
        ]
      },
      {
        id: 'response-plan',
        title: 'Update your response plan',
        role: ['business'],
        paragraphs: [ 
          "Review your existing emergency preparedness and response plans and identify potential gaps for a pandemic emergency."
        ],
        links: [
          {
            href: "https://icma.org/coronavirus-resources-plan-and-prepare-now-it-hits-your-community"
          },
          {
            href: "https://www.cdc.gov/coronavirus/2019-ncov/community/guidance-business-response.html"
          }
        ]
      },
      {
        id: 'employee-health',
        title: 'Prioritize employee health over business results',
        role: ['business'],
        paragraphs: [ 
          "Employee health, safety and well-being during this time is paramount. Employers need to be proactive in protecting their people and minimising the risk to staff and business continuity. The people profession needs to be at the forefront of the plans and critical decisions being made about the workforce."
        ],
        links: [
          {
            href: "https://www.cipd.co.uk/news-views/coronavirus",
          }
        ]
      },
      {
        id: 'provide-tissues',
        title: 'Provide tissues and no-touch disposal receptacles',
        role: ['business'],
        links: [
          {
            href: "https://coronachecklist.org/",
          }
        ]
      },
      {
        id: 'sick-employees',
        title: 'Actively encourage sick employees to stay home',
        role: ['business'],
        paragraphs: [ 
          "Employees who have symptoms of acute respiratory illness are recommended to stay home and not come to work until they are free of fever (100.4° F / 37.8° C or greater using an oral thermometer), signs of a fever, and any other symptoms for at least 24 hours, without the use of fever-reducing or other symptom-altering medicines (e.g. cough suppressants). Employees should notify their supervisor and stay home if they are sick.",
          "Employers should maintain flexible policies that permit employees to stay home to care for a sick family member. Employers should be aware that more employees may need to stay at home to care for sick children or other sick family members than is usual."
        ],
        links: [
          {
            href: "https://www.cdc.gov/coronavirus/2019-ncov/community/guidance-business-response.html"
          },
          {
            href: "https://communications.frostbrowntodd.com/404/2779/march-2020/families-first-coronavirus-response-act--what-employers-need-to-know.asp?sid=44e5d1ac-a044-431b-9644-036388fef077",
            title: "Families First Coronavirus Response Act: What Employers Need to Know (🇺🇸)"
          }
        ]
      },
      {
        id: 'update-business hours',
        title: 'Update your business hours',
        role: ['business'],
        paragraphs: [ 
          "Google is asking businesses to update its Google My Business listings if the business is affected by COVID-19\. Google posted a new [help document](https://support.google.com/business/answer/9773423?p=covid_19) describing that businesses can update their business hours, phone numbers, business descriptions and/or use Google Posts to share more information."
        ],
        links: [
          {
            href: "https://searchengineland.com/google-my-business-tells-businesses-affected-by-the-coronavirus-to-update-listings-330331",
            title: ""
          }
        ]
      },
      {
        id: 'update-customers-partners',
        title: 'Update customers and partners',
        role: ['business'],
        paragraphs: [
          "Keep your customers and partners in the loop about the measures you're taking to ensure business continuity."
        ]
      },
      {
        id: 'remote-work',
        title: 'Remote Work - Enable your employees to work from home',
        role: ['business'],
        paragraphs: [ 
          "Join the Work from Home (WFH) movement."
        ],
        links: [
          {
            href: "https://www.theverge.com/2020/3/11/21171349/remote-work-how-to-home-coronavirus-quarantine-productivity-tips",
          },
          {
            href: "https://www.nytimes.com/2020/03/10/technology/working-from-home.html",
          },
          {
            href: "https://www.linkedin.com/pulse/how-crush-when-you-send-your-team-home-office-first-time-lukas-hertig/"
          },
          {
            href: "https://medium.com/iubenda/coronavirus-and-remote-working-a-practical-guide-aa5a60def85b"
          },
          {
            href: "https://get.arc.dev/remote-work-faqs",
            title: "Remote Work FAQs: Answers from WFH Experts"
          },
          {
            href: "https://www.notion.so/notion/Remote-work-wiki-1b21ef5501714fffa9f5c5c25677371f",
            title: "Remote work wiki by Notion"
          }
        ]
      },
      {
        id: 'remote-sales-survival-guide',
        title: 'Remote Sales Survival Guide ',
        role: ['business'],
        paragraphs: [ 
          "The no bullsh!t guide to selling—and surviving—in a time of adversity."
        ],
        links: [
          {
            href: "https://close.com/remote-sales/?ref=coronaviruschecklist",
          },
      },
      {
        id: 'remote-tools',
        title: 'Remote Tools - Equip your remote workforce with the right stack',
        role: ['business'],
        paragraphs: [ 
          "Review your current software stack and equip your team with the right tools to be productive at home."
        ],
        links: [
          {
            href: "https://glitch.com/remote/",
          },
          {
            href: "https://standuply.com/330-remote-work-tools",
          },
          {
            href: "https://www.remotesteam.com/"
          },
          {
            href: "https://techcrunch.com/2020/03/17/zoombombing/",
            title: "Beware of ‘ZoomBombing:’ screensharing filth to video calls"
          }
        ]
      },
      {
        id: 'data-security-standards',
        title: 'Maintain data security and protection standards',
        role: ['business'],
        paragraphs: [
          "Secure your remote setup. Granted, setting up a company to allow remote work is not an overnight job. It requires time and effort — but more importantly, investment and budget. It’s an even bigger task to do it securely and without opening a door for hackers to walk in. But with the coronavirus spreading, now’s a better time than ever to roll out a plan.",
          "As organisations implement emergency measures, it is important to be aware of the privacy implications of any steps being taken. Any measures which involve processing of personal data are likely to give rise to data protection compliance issues that will need to be managed consistent with applicable data protection regulations."
        ],
        links: [
          {
            href: "https://techcrunch.com/2020/03/12/companies-secure-work-from-home-coronavirus/",
          },
          {
            href: "https://blogs.dlapiper.com/privacymatters/eu-eu-data-protection-covid-19/",
            title: "EU DATA PROTECTION : COVID-19"
          }
        ]
      },
      {
        id: 'review-marketing-spend',
        title: 'Review marketing spend',
        role: ['business'],
        paragraphs: [ 
          "With softening sales, you might find that your customer lifetime values have declined, in turn suggesting the need to rein in customer acquisition spending to maintain consistent returns on marketing spending. With greater economic and fundraising uncertainty, you might even want to consider raising the bar on ROI for marketing spend."
        ],
        links: [
          {
            href: "https://www.cnbc.com/2020/03/05/sequoia-capital-alerts-companies-about-coronavirus-economic-fallout.html"
          },
          {
            href: "https://www.bloomberg.com/news/articles/2020-03-17/amazon-cut-spending-on-google-advertising-in-recent-days",
            title: "Amazon Cut Spending on Google Advertising in Recent Days"
          }
        ]
      },
      {
        id: 'review-sales-forecasts',
        title: 'Review sales forecasts',
        role: ['business'],
        paragraphs: [ 
          "Even if you don’t see any direct or immediate exposure for your company, anticipate that your customers may revise their spending habits. Deals that seemed certain may not close. The key is to not be caught flat-footed."
        ],
        links: [
          {
            href: "https://medium.com/sequoia-capital/coronavirus-the-black-swan-of-2020-7c72bdeb9753"
          }
        ]
      },
      {
        id: 'hiring-plan',
        title: 'Revisit your hiring plan',
        role: ['business'],
        paragraphs: [
          "Avoid hiring people without factoring an updated sales forecast and budget based on the new economic reality.",
          "The team is the most expensive and important asset in every SaaS company. But, if you go out of business, you’ll lose all of these assets, so it’s essential to make the hard choices in time.",
          "That might mean voluntary or involuntary exits. You could literally ask those who believe in the vision and long-term to raise their hands and tell you who they are. It might mean the end of a bonus structure. It might mean asking people to take salary reductions (it’s pay cuts or headcount reductions — depending on the team, the leaders need to figure out which puts the business in better shape)."
        ],
        links: [
          {
            href: "https://techcrunch.com/2020/03/13/the-good-saas-times-will-end-and-challenges-are-coming/",
          }
        ]
      },
      {
        id: 'fundraising',
        title: 'Review fundraising',
        role: ['business'],
        paragraphs: [ 
          "Private financings could soften significantly, as happened in 2001 and 2009. What would you do if fundraising on attractive terms proves difficult in 2020 and 2021? Could you turn a challenging situation into an opportunity to set yourself up for enduring success? Many of the most iconic companies were forged and shaped during difficult times. We partnered with Cisco shortly after Black Monday in 1987. Google and PayPal soldiered through the aftermath of the dot-com bust. More recently, Airbnb, Square, and Stripe were founded in the midst of the Global Financial Crisis. Constraints focus the mind and provide fertile ground for creativity.",
          "Investors will be reconsidering or renegotiating ongoing fundraising deals. Covid-19 is obviously a materially adverse effect and a valid reason to cancel any commitment. It is vital for founders to go into (or stay in) lean and mean mode. Don’t put your hopes on raising funds, but on making money."
        ],
        links: [
          {
            href: "https://medium.com/sequoia-capital/coronavirus-the-black-swan-of-2020-7c72bdeb9753",
          },
          {
            href: "https://techcrunch.com/2020/03/12/doing-deals-through-zoom-these-investors-have-some-tips/"
          },
          {
            href: "https://medium.com/techventures/the-impact-of-covid-19-on-ventures-52c8a9c47ca9"
          }
        ]
      },
      {
        id: 'improve-cash-position',
        title: 'Improve your cash position',
        role: ['business'],
        paragraphs: [
          "Know your cash. A simple statement, but unfortunately, it’s rarely the case. You can’t rely on stories, promises and spreadsheets — you need to log in to your bank account multiple times a week. This isn’t hard and you’ll build a gut feel for your cash position and its movements quickly.",
          "Know your cash revenue. Annual and Monthly Run Rate (ARR/MRR) matters, the Profit and Loss account matters, but in tough times, cash is king. If you get low on cash, and think you’re profitable because your P&L says so, you run a serious risk of going out of business.",
          "Cash forecasting is essential — your run rate and your cash often don’t correlate — any pre-payments show up in revenue, but you don’t get that cash every month, so it may already be gone. The same goes for booked revenue that hasn’t paid and sits in aged accounts receivable (AR) — again, revenue but no cash."
        ],
        links: [
          {
            href: "https://techcrunch.com/2020/03/13/the-good-saas-times-will-end-and-challenges-are-coming/",
          }
        ]
      },
      {
        id: 'cost-optimization',
        title: 'Cost optimization - Audit your credit card statement',
        role: ['business'],
        paragraphs: [
          "Audit your credit card statement — do you really need all those SaaS tools? Or better yet, cancel your credit card and get a new one — only re-add the tools you want as the dunning emails come on. I guarantee you’ll find things you’ve been paying for that you didn’t even know about."
        ],
        links: [
          {
            href: "https://techcrunch.com/2020/03/13/the-good-saas-times-will-end-and-challenges-are-coming/",
          }
        ]
      },
      {
        id: 'donate-and-support',
        title: 'Donate and support if you have the financial capacity',
        role: ['business'],
        paragraphs: [
          "Examples:",
          "Bill Gates, who recently left his position on Microsoft’s board, announced the Bill & Melinda Gates Foundation was teaming up with Wellcome and Mastercard to fund treatments to the tune of $125 million. Yesterday, Facebook announced it was committing $20 million in donations to support relief efforts. Apple announced a similar $15 million in donations, along with letting customers skip the March payment on their Apple Cards without risking interest payments. ISPs like AT&T, Charter, CenturyLink, Comcast, T-Mobile, Verizon, Sprint and Cox, meanwhile, have promised not to overcharge, charge late fees or terminate service, in an attempt to keep people connected.",
          "Alibaba co-founder Jack Ma today released a statement noting plans to donate 500,000 test kits and one million face masks. The donation follows similar ones to Japan and Europe, following the devastating impact on his own country.",
          "Zoom CEO Eric Yuan announced that his video conferencing platform would be available for free to K-12 schools in Japan, Italy and the U.S. The move comes as the service is seeing a massive spike in downloads as many businesses and schools are attempting to adapt to working and learning remotely.",
          "Full list: https://techagainstcoronavirus.com/",
          "Donate your software at https://softwaredonation.org/"
        ],
        links: [
          {
            href: "https://techcrunch.com/2020/03/14/how-big-tech-is-taking-on-covid-19/",
          },
          {
            href: "https://www.forbes.com/sites/alexkonrad/2020/03/13/zoom-video-coronavirus-eric-yuan-schools/#4649c5214e71"
          }
        ]
      }
    ]
  },
  {
    id: 'dont',
    title:'Don\'t',
    description: 'Take the following measures to stop or slow down the spread of the Coronavirus.',
    items: [
      {
        id: 'dont-wait',
        title: 'Do not just wait - speed is of the essence',
        role: ['individual'],
        paragraphs: [
          "There [is no advantage to being late to adopt policies.](https://twitter.com/TomBossert/status/1236399377087959041) We are not yet in the peak and already many people are being turned away.",
        ],
        links: [
          {
            href: "https://www.flattenthecurve.com/",
            title: "Flatten the curve"
          }
        ]
      },
      {
        id: 'dont-touch-your-face',
        title: 'Do not touch your face',
        role: ['individual'],
        paragraphs: [
          "[That is the most common way the virus enters the body.](https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html) It is really hard to avoid; this is also why we advise staying home and avoiding crowds. It is also why top-down measures (event cancellation and imposed quarantine etc) work. The average person, even ones with baseline good hygiene, touch their faces constantly already without thinking about it. Especially with allergy season coming up, please keep this in mind.",
        ],
        links: [
          {
            href: "https://www.flattenthecurve.com/",
            title: "Flatten the curve"
          },
          {
            href: "https://www.theatlantic.com/ideas/archive/2020/03/trick-stop-touching-your-face/608050/",
            title: "A Trick to Stop Touching Your Face - The Atlantic"
          },
          {
            href: "https://donottouchyourface.com/"
          }
        ]
      },
      {
        id: 'dont-visit-your-parents',
        title: 'Do not visit your parents or elderlies',
        role: ['individual'],
        paragraphs: [
          "Your parents are part the most vulerable demographic due to their weakened immune systems. Try to check in on them by phone or Skype.",
        ],
        "links": [
          {
            href: "https://www.bbc.com/news/uk-51855011",
            title: "Coronavirus elderly advice: How can I look after my older relatives? - BBC"
          }
        ]
      },
      {
        id: 'dont-business-travel',
        title: 'Don\'t take unnecessary risks by letting your employees travel',
        role: ['business'],
        paragraphs: [
          "Many companies have banned all “non-essential” travel and some have banned all international travel. While travel companies are directly impacted, all companies that depend on in-person meetings to conduct sales, business development, or partnership discussions are being affected.",
        ],
        "links": [
          {
            href: "https://www.cnbc.com/2020/03/05/sequoia-capital-alerts-companies-about-coronavirus-economic-fallout.html"
          }
        ]
      },
      {
        id: 'dont-panic',
        title: 'Don\'t panic',
        role: ['business'],
        paragraphs: [
          "Difficult times bring out the true character of company leaders. Be human, but do your best to keep a level head under pressure. Show stability towards your team and take the measures above to derisk as much as possible.",
        ],
        links: [
          "https://www.geekwire.com/2020/advice-startups-coronavirus-outbreak-curb-expenses-assess-hiring-dont-panic-human/"
        ]
      }
    ]
  }
]

export const resourceLinks = {
  "": [
    "https://www.who.int/health-topics/coronavirus",
    "https://www.flattenthecurve.com/",
    "https://staythefuckhome.com/",
    "https://stayinghome.club/",
    "https://techagainstcoronavirus.com/",
    "https://covidpages.com/",
    "http://covid-solidarity.org/",
    "https://helpwithcovid.com/"
  ],
  "Trackers": [
    "https://ncov2019.live/",
    "https://edition.cnn.com/interactive/2020/health/coronavirus-maps-and-cases/",
    "https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/world-map.html",
    "https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd",
    "https://covy.app/",
    "https://public.tableau.com/profile/jason.yang6304#!/vizhome/corona_virus/CoronaVirus"
  ],
  "Research": [
    "https://github.com/midas-network/COVID-19"
  ],
  "🇧🇪 Belgium": [
    "https://www.info-coronavirus.be/",
    "https://www.coronadenktank.be/",
    "https://worksmarter.eu/bedrijven-die-van-thuis-werken-corona/",
    "https://www.blijfgewoonthuis.be/",
    "https://getaccountable.typeform.com/to/AJx2xu",
    "http://helpper-corona.be",
    "https://www.facebook.com/letssupport.be",
    "https://www.hulpvoorhelden.be/",
    "https://www.feedthenurses.be/"
  ],
  "🇨🇦 Canada": [
    "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html"
  ],
  "🇬🇧 United Kingdom": [
    "https://www.cipd.co.uk/news-views/coronavirus"
  ],
  "🇺🇸 United States": [
    "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
    "https://saveourfaves.org/"
  ],
  "Startups and businesses": [
    "https://docs.google.com/document/d/10tOPCtmiuruWAI69kcPdumKU8IiDOqL5FM9c_9XYThw/edit?fbclid=IwAR1TqSotjIxfsYGNfFO3mzBTj0xaHaIJdCqM_t7eb6gbQAMGbjvP69Swlv4&pli=1",
    "https://techcrunch.com/2020/03/13/the-good-saas-times-will-end-and-challenges-are-coming/",
    "https://medium.com/@feliks/the-corona-crisis-checklist-for-start-up-ceos-5294dd05e5c2",
    "https://medium.com/techventures/the-impact-of-covid-19-on-ventures-52c8a9c47ca9"
  ],
  "ResTech": [
    "https://thespoon.tech/own-a-restaurant-here-are-some-resources-for-surviving-covid-19/"
  ],
  "Students and teachers": [
    "https://www.notion.so/Remote-wiki-for-students-teachers-ac514cd3dce9440fad05022c93401c05"
  ]
}

export const roles = {
  'individual': 'Individuals, Households, and Families',
  'business': 'Businesses and Startups'
}
