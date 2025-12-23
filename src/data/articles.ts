export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: number;
  image: string;
  imageCaption?: string;
  imageCredit?: string;
  featured?: boolean;
  breaking?: boolean;
  premium?: boolean;
  tags: string[];
}

export const authors = {
  elena: {
    name: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    bio: "Senior correspondent covering global politics and international relations. Former bureau chief in Brussels."
  },
  marcus: {
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    bio: "Technology editor exploring the intersection of innovation and society. Previously at Wired and The Verge."
  },
  sarah: {
    name: "Sarah Okonkwo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    bio: "Economics correspondent specializing in market analysis and financial policy. PhD from LSE."
  },
  james: {
    name: "James Morrison",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    bio: "Culture critic and essayist. Author of 'The Modern Mind' and regular contributor to major publications."
  },
  maya: {
    name: "Maya Patel",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    bio: "Investigative journalist covering climate, environment, and sustainability. Pulitzer Prize finalist."
  }
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "global-climate-summit-historic-agreement",
    title: "World Leaders Reach Historic Agreement at Global Climate Summit",
    excerpt: "In an unprecedented move, 195 nations commit to net-zero emissions by 2050, marking a pivotal moment in the fight against climate change.",
    content: `The halls of the United Nations conference center in Geneva fell silent as Secretary-General António Guterres announced what many had considered impossible just weeks ago: a binding agreement among 195 nations to achieve net-zero carbon emissions by 2050.

The agreement, dubbed the "Geneva Accord," represents the most ambitious climate commitment in human history. After three weeks of intense negotiations, delegations from every corner of the globe put aside their differences to forge a path toward a sustainable future.

"This is not just an agreement on paper," declared European Commission President Ursula von der Leyen. "This is a promise to our children and grandchildren that we will leave them a planet worth inheriting."

The accord establishes several key mechanisms:

A Global Carbon Tax: Starting in 2026, participating nations will implement a minimum carbon price of $75 per ton, rising to $150 by 2035. This measure alone is expected to reduce global emissions by 25% within the decade.

Technology Transfer Fund: Developed nations have committed $500 billion annually to help developing countries transition to clean energy. This fund will support everything from solar installations in Sub-Saharan Africa to electric vehicle infrastructure in Southeast Asia.

Reforestation Mandate: Each signatory must restore forest cover to pre-industrial levels within their borders or contribute to international reforestation efforts equivalent to 10% of their annual emissions.

The reaction from the scientific community has been cautiously optimistic. Dr. Katherine Hayhoe, chief scientist at The Nature Conservancy, called the agreement "a necessary first step, but stressed that implementation will be the true test."

Critics, however, point to enforcement challenges. How will nations be held accountable? What penalties exist for those who fall short? These questions remain partially unanswered, though the accord does establish an International Climate Court with binding arbitration powers.

Financial markets responded favorably to the news. Clean energy stocks surged, with the S&P Global Clean Energy Index rising 8% in early trading. Meanwhile, traditional energy companies saw modest declines, though analysts suggest this reflects a gradual transition rather than an abrupt shift.

The path forward will not be easy. Industries must transform, economies must adapt, and millions of workers will need retraining for the green economy. But for the first time in decades, the world appears united in its commitment to address the existential threat of climate change.

As the final gavel fell in Geneva, protesters gathered outside erupted in cheers. After years of marches, strikes, and advocacy, their message had finally been heard. The work, they know, has only begun.`,
    category: "World",
    author: authors.maya,
    publishedAt: "2024-12-23",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=1200&h=675&fit=crop",
    imageCaption: "Delegates celebrate after the signing of the Geneva Accord",
    imageCredit: "Photo by UN/Mark Garten",
    featured: true,
    tags: ["Climate", "Environment", "United Nations", "Politics"]
  },
  {
    id: "2",
    slug: "artificial-intelligence-transforms-healthcare",
    title: "The Quiet Revolution: How AI Is Reshaping Modern Medicine",
    excerpt: "From early cancer detection to personalized treatment plans, artificial intelligence is transforming healthcare in ways that were science fiction just a decade ago.",
    content: `Dr. Sarah Chen remembers the exact moment she realized medicine would never be the same. It was 3 AM in the radiology department at Johns Hopkins, and she was reviewing a routine chest X-ray. The AI system flagged something she might have missed: a 3-millimeter nodule in the patient's left lung.

Three months later, that nodule was confirmed as early-stage lung cancer. The patient, a 52-year-old non-smoker, underwent surgery and is now cancer-free. Without the AI's assistance, Dr. Chen estimates the cancer might not have been caught for another year—possibly too late for a favorable outcome.

This story is becoming increasingly common in hospitals worldwide. Artificial intelligence, once the domain of tech companies and research laboratories, has quietly infiltrated every aspect of modern healthcare. And the results are nothing short of revolutionary.

The Numbers Tell the Story

A landmark study published last month in The Lancet found that AI-assisted diagnosis improved accuracy by 31% across a range of conditions, from skin cancer to diabetic retinopathy. Perhaps more importantly, AI systems reduced diagnostic time by an average of 47%, allowing physicians to see more patients without sacrificing quality of care.

At Memorial Sloan Kettering Cancer Center, an AI system now analyzes genetic data from tumor biopsies to recommend personalized treatment protocols. Early data suggests patients receiving AI-recommended treatments have 23% better outcomes than those following standard protocols.

"We're not replacing doctors," clarifies Dr. Michael Thompson, chief of digital health at the Cleveland Clinic. "We're augmenting them. AI handles pattern recognition and data analysis at a scale no human could match. This frees physicians to focus on what humans do best: empathy, complex decision-making, and patient relationships."

The Privacy Paradox

But this medical revolution comes with profound ethical questions. AI systems require vast amounts of patient data to function effectively. Who owns this data? How is it protected? What happens when algorithms make mistakes?

These questions have no easy answers. The European Union has taken the lead with strict regulations governing health AI, requiring extensive testing and transparency about how algorithms make decisions. The United States, by contrast, has adopted a more laissez-faire approach, leading to concerns about patient safety and data privacy.

Dr. Chen, for her part, remains optimistic. "Every technology has risks," she acknowledges. "But when I see a patient's life saved by early detection, when I watch families reunited because we caught something in time—I know we're on the right path."

The future of medicine, it seems, will be written in algorithms as much as in prescription pads.`,
    category: "Technology",
    author: authors.marcus,
    publishedAt: "2024-12-22",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=675&fit=crop",
    imageCaption: "AI-powered diagnostic systems are transforming hospital radiology departments",
    imageCredit: "Photo by National Cancer Institute",
    tags: ["AI", "Healthcare", "Technology", "Innovation"]
  },
  {
    id: "3",
    slug: "global-economy-crossroads-2025",
    title: "At the Crossroads: Navigating the New Global Economic Order",
    excerpt: "As traditional power centers shift and emerging markets rise, economists warn of volatility ahead while pointing to unprecedented opportunities.",
    content: `The old economic order is dying. What comes next remains uncertain.

For seven decades, the global economy operated under a relatively stable framework: American-led institutions, dollar dominance, and free trade as an organizing principle. That era is ending. In its place, a more fragmented, multipolar system is emerging—one that brings both risks and opportunities.

The numbers are striking. China's economy, barely a rounding error in global GDP in 1980, now accounts for 18% of world output. India is projected to become the world's third-largest economy by 2027. Meanwhile, the United States and European Union, while still dominant, see their relative shares declining year over year.

"We're witnessing the most significant redistribution of global economic power since the Industrial Revolution," notes Professor Janet Yellen, former U.S. Treasury Secretary. "How we manage this transition will shape the next century."

The Dollar Question

Central to this transition is the future of the U.S. dollar. For decades, the greenback has served as the world's reserve currency, giving the United States enormous advantages in trade and finance. But challenges are mounting.

China and Russia have accelerated efforts to conduct bilateral trade in their own currencies. Saudi Arabia has signaled openness to accepting yuan for oil sales. Even traditional allies like France have questioned dollar hegemony.

Yet reports of the dollar's demise may be premature. No alternative currently offers the liquidity, stability, and institutional backing that makes the dollar indispensable to global finance. The euro remains hamstrung by European political fragmentation; the yuan by China's capital controls and lack of rule of law.

Investment Implications

For investors, this new landscape demands a fundamental rethinking of portfolio construction. Geographic diversification becomes essential. Emerging market exposure, long treated as an afterthought, must become a core holding.

But not all emerging markets are created equal. Countries with strong institutions, demographic tailwinds, and technological adoption—India, Indonesia, Vietnam—offer the most compelling long-term stories. Others, weighed down by corruption, debt, or political instability, may struggle even as the emerging market tide rises.

The coming decade will reward adaptability and punish complacency. For those prepared to navigate its complexities, the new global economic order offers opportunities without precedent.`,
    category: "Economy",
    author: authors.sarah,
    publishedAt: "2024-12-21",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop",
    imageCaption: "Trading floors worldwide are adapting to new economic realities",
    imageCredit: "Photo by Aditya Vyas",
    tags: ["Economy", "Finance", "Global Markets", "Trade"]
  },
  {
    id: "4",
    slug: "renaissance-museums-digital-age",
    title: "Beyond the Frame: Museums Reimagine Art for the Digital Age",
    excerpt: "From virtual reality galleries to AI-curated exhibitions, the world's great museums are reinventing the cultural experience for a new generation.",
    content: `The Louvre is empty. Not because of a strike or pandemic, but by design. It's 2 AM in Paris, and inside the world's most visited museum, something extraordinary is happening: a virtual tour for 50,000 simultaneous visitors from six continents.

They're here for the debut of "Mona Lisa: Unveiled," an immersive VR experience that allows viewers to examine every brushstroke, explore the painting's history, and even "step inside" the landscape behind da Vinci's most famous subject. The $40 ticket price hasn't deterred interest; the experience sold out in 17 minutes.

Welcome to the museum of the future.

A Necessary Evolution

The pandemic forced museums worldwide to confront an existential question: how do you remain relevant when physical presence is impossible? The answers they developed have outlasted lockdowns, fundamentally reshaping cultural institutions.

"We discovered that digital isn't a replacement for physical visits—it's a complement that expands our reach exponentially," explains Laurence des Cars, President-Director of the Louvre. "Someone in rural Japan who may never afford a trip to Paris can now experience our collection. That's democratization of culture in its truest form."

The numbers support this vision. Since launching its digital initiatives, the Louvre has seen in-person attendance actually increase by 15%. Visitors who experience virtual exhibitions often become motivated to see originals in person.

Technology as Curator

Perhaps more revolutionary than virtual access is the emergence of AI-assisted curation. The Metropolitan Museum of Art now employs machine learning algorithms to discover unexpected connections between works separated by centuries and continents.

Recent AI analysis revealed striking compositional similarities between a 16th-century Persian miniature and a Kandinsky abstract, leading to an acclaimed exhibition exploring the hidden geometries underlying art across cultures. Human curators had never noticed the connection.

"The algorithm doesn't replace curatorial judgment," clarifies Max Hollein, the Met's director. "It augments it, suggesting possibilities we might never have considered. The final decisions remain profoundly human."

The Purist Pushback

Not everyone celebrates these changes. Critics worry that digital experiences diminish the contemplative encounter that makes art meaningful. "There's a sanctity to standing before a masterpiece," argues art historian Robert Hughes. "Pixels cannot replicate the communion between viewer and object."

Museums are attempting to address these concerns. The Uffizi in Florence has designated "device-free hours" for visitors seeking unmediated experiences. The Prado in Madrid offers guided contemplation sessions in its galleries, encouraging deep engagement with single works.

The debate continues, but one thing is clear: the museum of the 21st century will be neither purely physical nor purely digital, but something entirely new.`,
    category: "Culture",
    author: authors.james,
    publishedAt: "2024-12-20",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=1200&h=675&fit=crop",
    imageCaption: "Virtual reality exhibitions are attracting millions of digital visitors",
    imageCredit: "Photo by Stem List",
    tags: ["Art", "Museums", "Technology", "Culture"]
  },
  {
    id: "5",
    slug: "democracy-under-pressure",
    title: "Democracy Under Pressure: The Global Struggle for Free Elections",
    excerpt: "As authoritarian movements gain ground worldwide, advocates for democracy face their greatest challenge since the Cold War.",
    content: `Freedom House's latest report makes for sobering reading. For the 18th consecutive year, global freedom has declined. More people now live under authoritarian rule than at any point since 1989. Democracy, once thought triumphant, is retreating.

The trends are undeniable. In every region, from Latin America to Southeast Asia, from Eastern Europe to Africa, democratic norms face sustained assault. Elections are manipulated, opposition suppressed, media silenced, and civil society squeezed.

"We're in a democratic recession," warns Larry Diamond, senior fellow at Stanford's Hoover Institution. "Whether it becomes a full depression depends on actions taken in the next few years."

The Authoritarian Playbook

What makes the current moment distinctive is not crude military coups—those have actually declined. Instead, aspiring autocrats have developed sophisticated techniques for hollowing out democratic institutions while maintaining democratic facades.

The playbook is now familiar: capture courts and election commissions, restrict media independence, use legal mechanisms to disqualify opponents, and manipulate social media to spread disinformation. By the time citizens realize what's happening, the damage is often done.

Hungary's Viktor Orbán pioneered these methods in the European Union itself, transforming a constitutional democracy into what he proudly calls an "illiberal state." Others have studied and adapted his approach.

Technology's Double Edge

The role of technology remains contested. Digital tools have enabled protest movements from Hong Kong to Belarus. Social media spreads awareness of repression instantaneously. Encrypted messaging protects activists.

But the same technologies serve authoritarian purposes. China's surveillance state represents the most comprehensive system of social control ever created. Facial recognition, AI-powered monitoring, and social credit systems create what scholars call "digital authoritarianism"—a model now being exported worldwide.

The democratic world has been slow to recognize these threats. Only recently have Western governments begun developing coordinated responses to authoritarian tech adoption and influence operations.

Reasons for Hope

Yet the picture is not uniformly dark. Pro-democracy movements continue to emerge, often in the most unlikely places. In Thailand, youth-led protests have challenged military-backed rule. In Belarus, despite brutal repression, opposition to Lukashenko's regime persists.

Most significantly, public opinion surveys consistently show that majorities everywhere prefer democracy to alternatives. The appetite for freedom remains. What's needed now is leadership capable of channeling that appetite into durable institutions.`,
    category: "Politics",
    author: authors.elena,
    publishedAt: "2024-12-19",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=675&fit=crop",
    imageCaption: "Citizens worldwide continue to demand free and fair elections",
    imageCredit: "Photo by Flo Maderebner",
    tags: ["Politics", "Democracy", "Elections", "Human Rights"]
  },
  {
    id: "6",
    slug: "space-race-private-sector",
    title: "The New Space Race: Private Companies Lead Humanity's Push Beyond Earth",
    excerpt: "SpaceX, Blue Origin, and a new generation of startups are transforming space exploration from government monopoly to commercial frontier.",
    content: `Sixty-five years after Sputnik, the space race has returned—but this time, it's not between superpowers. It's between billionaires.

SpaceX, Elon Musk's rocket company, has fundamentally altered the economics of space access. Its reusable Falcon 9 rocket has slashed launch costs by 90% compared to traditional expendable vehicles. The company now conducts more orbital launches than all other entities combined, including national space agencies.

"What we're seeing is the industrialization of space," explains former NASA administrator Charles Bolden. "The same pattern that transformed aviation a century ago is now happening beyond the atmosphere."

The Competition Intensifies

Jeff Bezos's Blue Origin, after years of development, is accelerating its launch cadence. Its massive New Glenn rocket promises to challenge SpaceX's dominance in commercial launch services. Meanwhile, Rocket Lab has carved out a lucrative niche in small satellite deployment, conducting launches at a fraction of competitors' prices.

The numbers are staggering. In 2023, private companies launched more than 2,500 satellites—more than the entire previous history of spaceflight combined. This year's tally is on track to exceed 3,000.

Satellites enable technologies we now take for granted: GPS navigation, weather forecasting, global communications. The new satellite constellations promise even more: global broadband internet, precision agriculture, climate monitoring at unprecedented resolution.

Beyond Earth Orbit

The most ambitious players are looking beyond Earth orbit entirely. SpaceX's Starship, the largest rocket ever built, is designed with Mars colonization in mind. Musk has spoken openly of establishing a self-sustaining city on the Red Planet within decades.

Blue Origin's vision centers on orbital manufacturing and eventually moving polluting industries off-Earth to preserve our home planet. Bezos imagines millions of people living and working in space by century's end.

These visions once seemed fantastical. Rapidly falling costs and demonstrated capabilities make them increasingly plausible—if still decades away.

The Governance Gap

This commercial explosion has outpaced regulatory frameworks. Who owns resources extracted from asteroids? What rules govern conduct in lunar orbit? How are disputes resolved between companies operating beyond any nation's jurisdiction?

The 1967 Outer Space Treaty, negotiated when space activity was exclusively governmental, provides only general principles. A new legal framework is urgently needed, yet negotiations have stalled amid great-power competition.

"We risk a lawless frontier," warns University of Nebraska space law professor Frans von der Dunk. "The time to establish rules is now, before conflicts crystallize positions."

The final frontier is opening. Whether humanity rises to the occasion remains to be seen.`,
    category: "Technology",
    author: authors.marcus,
    publishedAt: "2024-12-18",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1200&h=675&fit=crop",
    imageCaption: "Commercial rockets now dominate orbital launch activity",
    imageCredit: "Photo by SpaceX",
    tags: ["Space", "Technology", "SpaceX", "Innovation"],
    premium: true
  },
  {
    id: "7",
    slug: "food-security-climate-change",
    title: "Feeding 10 Billion: The Race to Reinvent Agriculture",
    excerpt: "As climate change threatens traditional farming and population growth continues, scientists and entrepreneurs are developing radical new approaches to food production.",
    content: `In a nondescript warehouse in San Francisco, rows of leafy greens grow under purple LED lights, stacked 20 layers high. No soil, no sunlight, no pesticides. Just water, nutrients, and precisely calibrated algorithms optimizing every aspect of plant growth.

This is Plenty, one of dozens of vertical farming startups betting that the future of agriculture lies indoors. Their facility uses 95% less water than traditional farming and produces yields 350 times greater per square foot. Lettuce grown here reaches grocery stores within hours of harvest, not days.

"We're not trying to replace all farming," clarifies CEO Arama Kukutai. "We're adding capacity in places where traditional agriculture is impossible—deserts, cities, regions with contaminated soil. Climate change is making those places more numerous every year."

The Scale of the Challenge

By 2050, Earth's population will exceed 10 billion. To feed everyone adequately, food production must increase by 60% compared to current levels. Yet climate change is making this harder, not easier.

Rising temperatures are shifting agricultural zones poleward, disrupting patterns farmers have relied upon for centuries. Extreme weather events—droughts, floods, heat waves—are becoming more frequent and severe. Pests and diseases are spreading to new regions as winters become milder.

Traditional breeding approaches cannot keep pace with these changes. The solution, many scientists believe, lies in technology.

From Lab to Field

Gene editing tools like CRISPR are enabling rapid development of crop varieties resistant to drought, disease, and pests. Unlike earlier genetic modification techniques, CRISPR can make precise changes using the plant's own genes, potentially easing regulatory and consumer acceptance.

At the International Rice Research Institute in the Philippines, researchers have developed rice varieties that can survive complete submersion for weeks—essential for farmers in flood-prone regions of South Asia. Field trials show yield advantages of 30% in flood years.

Meanwhile, cellular agriculture companies are working to produce meat, dairy, and eggs without animals. Eat Just's cultured chicken recently received regulatory approval in Singapore, making it the first lab-grown meat legally sold anywhere in the world.

The Business Case

Venture capital is pouring into food technology. Investment in "agtech" and "foodtech" reached $50 billion globally in 2023, up from under $10 billion just five years prior. The thesis is simple: climate pressures and population growth create markets for solutions.

Whether these technologies can scale quickly enough remains uncertain. Vertical farms struggle with energy costs and capital intensity. Cultured meat prices, while falling, remain far above conventional products. Gene editing faces regulatory hurdles and public skepticism in many markets.

Yet the imperative is clear. The alternative to agricultural innovation is hunger on a scale the modern world has never known.`,
    category: "World",
    author: authors.maya,
    publishedAt: "2024-12-17",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=675&fit=crop",
    imageCaption: "Vertical farms are transforming urban food production",
    imageCredit: "Photo by Markus Spiske",
    tags: ["Agriculture", "Climate", "Food", "Technology"],
    breaking: true
  },
  {
    id: "8",
    slug: "mental-health-crisis-youth",
    title: "The Anxious Generation: Understanding Youth Mental Health",
    excerpt: "Rates of depression and anxiety among young people have reached historic highs. Experts debate causes and solutions as a generation struggles.",
    content: `Dr. Maria Santos has been a child psychiatrist for three decades. She's never seen anything like this.

"My waiting list used to be four weeks. Now it's four months," she says. "And the severity has increased. I'm seeing conditions in 12-year-olds that I used to only see in adults."

The statistics confirm what clinicians observe daily. Among American teenagers, rates of major depressive episodes have increased 60% since 2011. Anxiety diagnoses have more than doubled. Emergency room visits for self-harm have tripled among girls.

Similar patterns appear across the developed world. The United Kingdom, Canada, Australia, and much of Western Europe report parallel trends. Something is happening to young people, and it's happening everywhere.

The Smartphone Hypothesis

The timing is conspicuous. Youth mental health began deteriorating around 2012—precisely when smartphone ownership among teenagers reached saturation. Social psychologist Jean Twenge has documented the correlation in exhaustive detail.

Her thesis: social media is rewiring adolescent brains in ways that increase anxiety, depression, and social comparison. The algorithmic delivery of content optimized for engagement creates feedback loops that exploit developmental vulnerabilities.

"Adolescence has always been turbulent," Twenge acknowledges. "But smartphones have removed the offline spaces where young people could escape and develop autonomy. The social world now follows them everywhere, 24/7."

The Case Against Simplicity

Not everyone accepts this explanation. Critics point out that correlation doesn't establish causation. Maybe depressed teenagers are more likely to use social media, rather than social media causing depression. Maybe increased awareness and reduced stigma have simply made young people more willing to report mental health struggles.

Other factors surely contribute: economic insecurity, climate anxiety, political polarization, the lingering effects of pandemic isolation. Attributing everything to smartphones may be convenient but reductive.

Psychologist Candice Odgers has published research finding little evidence that moderate social media use harms most young people. The effects, she argues, are concentrated among already vulnerable populations.

Finding Solutions

Whatever the causes, the demand for solutions is urgent. Schools are implementing social-emotional learning curricula. Some jurisdictions have restricted smartphone use in classrooms. Waiting lists for child psychiatrists have prompted experimentation with digital therapeutics and peer support models.

Parents face impossible choices. Restricting teenagers' phone access can isolate them from peer social life that has migrated online. Yet unlimited access brings clear risks.

There are no easy answers. What's certain is that a generation is suffering, and the adults in their lives are struggling to help.`,
    category: "Culture",
    author: authors.james,
    publishedAt: "2024-12-16",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=675&fit=crop",
    imageCaption: "Mental health resources for young people are overwhelmed by demand",
    imageCredit: "Photo by Priscilla Du Preez",
    tags: ["Mental Health", "Youth", "Society", "Social Media"]
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedArticle = (): Article | undefined => {
  return articles.find(article => article.featured);
};

export const getLatestArticles = (count: number = 8): Article[] => {
  return [...articles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, count);
};

export const getTrendingArticles = (count: number = 5): Article[] => {
  return [...articles].sort(() => Math.random() - 0.5).slice(0, count);
};

export const categories = ["Politics", "Economy", "Technology", "Culture", "Opinion", "World"];
