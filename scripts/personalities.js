var personalities = {
    "academic": ["Studious", "Intellectual", "Analytical", "Inquisitive", "Knowledgeable", "Learned", "Scholarly", "Educated", "Bookish", "Academic"],
    "adaptable": ["Flexible", "Versatile", "Changeable", "Pliable", "Adjustable", "Modifiable", "Mutable", "Convertible", "Malleable", "Fluid"],
    "adventurous": ["Daring", "Bold", "Brave", "Courageous", "Intrepid", "Audacious", "Heroic", "Valiant", "Dauntless", "Fearless"],
    "affectionate": ["Caring", "Loving", "Tender", "Warm", "Intimate", "Attachment", "Fondness", "Devotion", "Adoration", "Cherishing"], 
    "analytical": ["Logical", "Systematic", "Rational", "Reasoned", "Measured", "Methodical", "Calculated", "Deliberate", "Thoughtful", "Investigative"],
    "anxious": ["Worried", "Troubled", "Concerned", "Distressed", "Uneasy", "Restless", "Apprehensive", "Nervous", "Fearful", "Tense"],
    "artistic": ["Creative", "Imaginative", "Innovative", "Original", "Inventive", "Talented", "Gifted", "Inspired", "Visionary", "Expressive"],
    "articulate": ["Eloquent", "Well-spoken", "Fluent", "Expressive", "Communicative", "Descriptive", "Conversant", "Linguistic", "Silver-tongued", "Lucid"],
    "athletic": ["Fit", "Strong", "Coordinated", "Agile", "Quick", "Powerful", "Active", "Energetic", "Vigorous", "robust"],
    "authentic": ["Genuine", "Real", "Sincere", "Legitimate", "True", "Veritable", "Bona fide", "Valid", "Actual", "Faultless"], 
    "calm": ["Composed", "Serene", "Tranquil", "Peaceful", "Unruffled", "Collected", "Unflustered", "Soothing", "Placid", "Halcyon"], 
    "capable": ["Competent", "Qualified", "Skilled", "Proficient", "Talented", "Adept", "Expert", "Accomplished", "Resourceful", "Handy"],
    "cautious": ["Careful", "Vigilant", "Prudent", "Attentive", "Wary", "Conservative", "Guarded", "Circumspect", "Watchful", "Chary"],
    "charming": ["Charismatic", "Captivating", "Alluring", "Appealing", "Magnetic", "Attractive", "Delightful", "Enchanting", "Engaging", "Winsome"],
    "cheerful": ["Happy", "Joyful", "Upbeat", "Jovial", "Merry", "Bright", "Sunny", "Pleasant", "Lighthearted", "Playful"], 
    "childish": ["Immature", "Juvenile", "Silly", "Foolish", "Naive", "Innocent", "Babyish", "Kid-like", "Puerile", "Infantile"],
    "clever": ["Smart", "Brilliant", "Quick-witted", "Sharp", "Ingenious", "Canny", "Astute", "Perceptive", "Sagacious", "Resourceful"],
    "compassionate": ["Caring", "Kind", "Sympathetic", "Considerate", "Benevolent", "Empathetic", "Altruistic", "Thoughtful", "Humane", "Selfless"],
    "complex": ["Complicated", "Intricate", "Involved", "Difficult", "Perplexing", "Entangled", "Convoluted", "Obscure", "Multifaceted", "Embroiled"],
    "confident": ["Self-assured", "Poised", "Assertive", "Sure", "Positive", "Bold", "Certain", "Resolute", "Determined", "Convinced"],
    "contemplative": ["Reflective", "Meditative", "Pensive", "Ruminative", "Cogitative", "Thoughtful", "Contemplating", "Deliberative", "Pondering", "Musing"],
    "cooperative": ["Helpful", "Supportive", "Collaborative", "Contributory", "Assisting", "Participatory", "Accommodating", "Obliging", "Agreeable", "Willing"],
    "courageous": ["Brave", "Valiant", "Heroic", "Intrepid", "Daring", "Bold", "Audacious", "Fearless", "Plucky", "Dauntless"],
    "crazy": ["Wild", "Mad", "Insane", "Irrational", "Unhinged", "Unstable", "Manic", "Chaotic", "Erratic", "Outlandish"],
    "creative": ["Inventive", "Imaginative", "Innovative", "Original", "Visionary", "Inspired", "Unconventional", "Talented", "Artistic", "Gifted"],
    "curious": ["Inquisitive", "Interested", "Eager", "Enthusiastic", "Fascinated", "Informed", "Inquiring", "Questioning", "Exploring", "Discovering"],
    "cunning": ["Clever", "Crafty", "Sly", "Wily", "Shrewd", "Artful", "Conniving", "Scheming", "Devious", "Manipulative"],
    "decisive": ["Determined", "Resolute", "Firm", "Assertive", "Decided", "Conclusive", "Definite", "Absolute", "Clear-cut", "Unwavering"],
    "devoted": ["Dedicated", "Loyal", "Faithful", "Committed", "Steadfast", "Fervent", "Die-hard", "Passionate", "Ardent", "Allegiant"], 
    "diplomatic": ["Tactful", "Discreet", "Polite", "Respectful", "Discerning", "Sensitive", "Prudent", "Judicious", "Subtle", "Gradual"],
    "dramatic": ["Expressive", "Theatrical", "Flamboyant", "Melodramatic", "Demonstrative", "Passionate", "Audacious", "Vivacious", "Exaggerated", "Sensational"],
    "dutiful": ["Responsible", "Obligated", "Conscientious", "Faithful", "Dedicated", "Loyal", "Committed", "Devoted", "Attentive", "Diligent"],
    "dynamic": ["Energetic", "Lively", "Vibrant", "Active", "Vigorous", "Forceful", "Zestful", "Vital", "Animated", "Spirited"],
    "earnest": ["Sincere", "Serious", "Dedicated", "Zealous", "Solemn", "Grave", "Sober", "Somber", "Genuine", "Fervent"],
    "eccentric": ["Quirky", "Odd", "Unconventional", "Strange", "Peculiar", "Idiosyncratic", "Offbeat", "Bizarre", "Outlandish", "Erratic"],
    "educated": ["Learned", "Knowledgeable", "Informed", "Scholarly", "Academic", "Intellectual", "Cultured", "Literary", "Studious", "Articulate"],
    "efficient": ["Capable", "Competent", "Productive", "Effective", "Skillful", "Expedient", "Proficient", "Streamlined", "Businesslike", "Expert"],
    "eloquent": ["Well-spoken", "Articulate", "Expressive", "Fluent", "Persuasive", "Silver-tongued", "Compelling", "Commanding", "Charismatic", "Meaningful"],
    "empathetic": ["Compassionate", "Understanding", "Sympathetic", "Relating", "Sensitive", "Identifying", "Caring", "Responsive", "Perceptive", "Intuitive"],
    "energetic": ["Lively", "Vigorous", "Dynamic", "Zealous", "Spirited", "Active", "Animated", "Vital", "Zestful", "Zippy"],
    "engaging": ["Charming", "Captivating", "Interesting", "Appealing", "Likeable", "Enjoyable", "Pleasant", "Affable", "Approachable", "Welcoming"], 
    "enigmatic": ["Mysterious", "Cryptic", "Obscure", "Ambiguous", "Unclear", "Vague", "Confusing", "Uncertain", "Inscrutable", "Equivocal"],
    "enthusiastic": ["Eager", "Excited", "Passionate", "Fervent", "Zealous", "Ardent", "Avid", "Gung ho", "Keen", "Motivated"],
    "ethical": ["Moral", "Principled", "Upright", "Honorable", "Conscientious", "Just", "Scrupulous", "Righteous", "Virtuous", "Integrity"],
    "extravagant": ["Lavish", "Ornate", "Opulent", "Luxurious", "Flamboyant", "Immoderate", "Profligate", "Grandiose", "Ostentatious", "Splendid"],
    "fair": ["Impartial", "Even-handed", "Reasonable", "Open-minded", "Equitable", "Balanced", "Objective", "Candid", "Unbiased", "Neutral"],
    "faithful": ["Loyal", "Trustworthy", "Reliable", "Devoted", "Dedicated", "Steadfast", "Allegiant", "Constant", "True", "Dutiful"],
    "family-oriented": ["Domestic", "Home-loving", "Traditional", "Conservative", "Committed", "Devoted", "Marriage-minded", "Close-knit", "Loyal", "Cherishing"],
    "feminine": ["Graceful", "Sensitive", "Soft", "Gentle", "Tender", "Intuitive", "Compassionate", "Nurturing", "Delicate", "Empathetic"], 
    "fierce": ["Intense", "Ferocious", "Fearsome", "Savage", "Formidable", "Violent", "Forceful", "Vicious", "Wild", "Unrelenting"],
    "foolish": ["Silly", "Absurd", "Ridiculous", "Preposterous", "Irrational", "Dumb", "Imprudent", "Unwise", "Sensless", "Nonsensical"],
    "forgiving": ["Compassionate", "Merciful", "Lenient", "Tolerant", "Patient", "Clement", "Understanding", "Accommodating", "Charitable", "Magnanimous"],
    "friendly": ["Outgoing", "Sociable", "Congenial", "Cordial", "Warm", "Approachable", "Affable", "Gracious", "Neighbourly", "Welcoming"],
    "fun-loving": ["Playful", "Happy", "Carefree", "Spirited", "Lighthearted", "Merry", "Jovial", "Cheerful", "Lively", "Mirthful"],
    "geeky": ["Nerdy", "Intellectual", "Bookish", "Academic", "Scientific", "Technical", "Brainy", "Intelligent", "Studious", "Knowledgeable"],
    "generous": ["Benevolent", "Charitable", "Altruistic", "Humanitarian", "Noble", "Magnanimous", "Munificent", "Lavish", "Bountiful", "Open-handed"],
    "gentle": ["Mild", "Kind", "Tender", "Soft", "Meek", "Docile", "Benevolent", "Calm", "Tranquil", "Compassionate"],
    "giving": ["Generous", "Caring", "Charitable", "Altruistic", "Selfless", "Benevolent", "Philanthropic", "Unselfish", "Donating", "Contributing"],
    "gracious": ["Kind", "Benevolent", "Cordial", "Polite", "Hospitable", "Charitable", "Merciful", "Courteous", "Munificent", "Magnanimous"],
    "gregarious": ["Sociable", "Extraverted", "Convivial", "Friendly", "Outgoing", "Affable", "Amiable", "Lively", "Boisterous", "Garrulous"],
    "grounded": ["Practical", "Realistic", "Stable", "Reasonable", "Down-to-earth", "Level-headed", "Commonsensical", "Matter-of-fact", "Pragmatic", "Solid"],
    "guarded": ["Cautious", "Wary", "Careful", "Prudent", "Circumspect", "Judicious", "Alert", "Watchful", "Vigilant", "Attentive"],
    "helpful": ["Useful", "Supportive", "Cooperative", "Assisting", "Accommodating", "Handy", "Instrumental", "Advantageous", "Constructive", "Beneficial"],
    "hopeful": ["Optimistic", "Confident", "Positive", "Upbeat", "Aspirational", "Promising", "Bright", "Rosy", "Cheerful", "Future-oriented"],
    "humble": ["Modest", "Unassuming", "Meek", "Self-effacing", "Unpretentious", "Deferential", "Unobtrusive", "Docile", "Retiring", "Unboastful"],
    "hyped": ["Brisk", "Pumped", "Excited", "Enthusiastic", "Eager", "Animated", "Electrified", "Revved up", "Activated", "Amped"],
    "hyperactive": ["Energetic", "Restless", "Antsy", "Jumpy", "Fidgety", "Excitable", "Erratic", "Frenetic", "Impulsive", "Exuberant"], 
    "idealistic": ["Visionary", "Utopian", "Quixotic", "Romantic", "Dreamy", "Aspiring", "Impractical", "Theoretical", "Perfectionist", "Principled"],
    "imaginative": ["Creative", "Inventive", "Innovative", "Original", "Resourceful", "Visionary", "Ingenious", "Clever", "Artistic", "Talented"],
    "impulsive": ["Spontaneous", "Hasty", "Reckless", "Unrestrained", "Impetuous", "Rash", "Unthinking", "Inconsiderate", "Compulsive", "Imprudent"],
    "independent": ["Self-reliant", "Self-sufficient", "Autonomous", "Freethinking", "Self-governing", "Individualistic", "Unconstrained", "Emancipated", "Detached", "Free-spirited"],
    "industrious": ["Hardworking", "Diligent", "Dedicated", "Assiduous", "Sedulous", "Conscientious", "Productive", "Untiring", "Tireless", "Committed"],
    "innocent": ["Naive", "Ingenuous", "Guileless", "Pure", "Wholesome", "Simple", "Uncorrupted", "Virtuous", "Blameless", "Innocuous"],
    "insightful": ["Perceptive", "Intuitive", "Discerning", "Astute", "Sagacious", "Shrewd", "Judicious", "Penetrating", "Thoughtful", "Incisive"],
    "intelligent": ["Brilliant", "Gifted", "Smart", "Sharp", "Knowledgeable", "Clever", "Quick-witted", "Rational", "Logical", "Brainy"],
    "intense": ["Extreme", "Passionate", "Fierce", "Vehement", "Powerful", "Profound", "Acute", "Ardent", "Fervent", "Impassioned"],
    "intuitive": ["Instinctive", "Automatic", "Spontaneous", "Natural", "Subconscious", "Sensitive", "Prophetic", "Psychic", "Extrasensory", "Clairvoyant"],
    "inventive": ["Creative", "Innovative", "Imaginative", "Original", "Pioneering", "Resourceful", "Visionary", "Ingenious", "Enterprising", "Unconventional"],
    "joyful": ["Happy", "Jubilant", "Cheerful", "Ecstatic", "Blissful", "Jovial", "Elated", "Rapturous", "Mirthful", "Gleeful"],
    "keen": ["Eager", "Enthusiastic", "Earnest", "Ardent", "Fervent", "Avid", "Excited", "Zealous", "Passionate", "Motivated"],
    "kind": ["Caring", "Compassionate", "Generous", "Benevolent", "Gracious", "Polite", "Thoughtful", "Cordial", "Warmhearted", "Helpful"],
    "knowledgeable": ["Well-informed", "Educated", "Experienced", "Learned", "Worldly", "Informed", "Aware", "Knowledgeable", "Enlightened", "Erudite"],
    "laid-back": ["Relaxed", "Easygoing", "Calm", "Unflappable", "Mellow", "Casual", "Placid", "Cool", "Nonchalant", "Carefree"],
    "level-headed": ["Rational", "Reasonable", "Logical", "Sensible", "Sober", "Practical", "Prudent", "Balanced", "Down-to-earth", "Composed"],
    "liar": ["Dishonest", "Untruthful", "Deceitful", "Unreliable", "Misleading", "Fraudulent", "Double-dealing", "Two-faced", "Treacherous", "Deceptive"],
    "lively": ["Energetic", "Vivacious", "Dynamic", "animated", "Playful", "Cheerful", "Bubbly", "Exuberant", "Zestful", "Spirited"],
    "logical": ["Rational", "Reasonable", "Sensible", "Analytical", "Coherent", "Consistent", "Orderly", "Methodical", "Systematic", "Sequential"],
    "loving": ["Affectionate", "Caring", "Warm", "Tender", "Compassionate", "Romantic", "Passionate", "Cherishing", "Devoted", "Attached"],
    "loyal": ["Faithful", "Trustworthy", "Allegiant", "True", "Reliable", "Staunch", "Devoted", "Dedicated", "Steadfast", "Constant"],
    "masculine": ["Strong", "Tough", "Assertive", "Powerful", "Authoritative", "Protective", "Confident", "Robust", "Forceful", "Fearless"],
    "mature": ["Responsible", "Grown-up", "Worldy", "Experienced", "Seasoned", "Adult", "Accomplished", "Developed", "Sophisticated", "Grounded"],
    "methodical": ["Systematic", "Ordered", "Regimented", "Logical", "Planned", "Organized", "Structured", "Programmed", "Step-by-step", "Sequential"],
    "meticulous": ["Precise", "Thorough", "Perfect", "Conscientious", "Accurate", "Careful", "Scrupulous", "Attentive", "Diligent", "Painstaking"],
    "mindful": ["Conscious", "Present", "Aware", "Alert", "Attentive", "Observant", "Thoughtful", "Regardful", "Heedful", "Vigilant"],
    "modest": ["Humble", "Unpretentious", "Unassuming", "Meek", "Reserved", "Shy", "Plain", "Simple", "Unobtrusive", "Demure"],
    "musical": ["Melodic", "Harmonious", "Rhythmic", "Lyrical", "Tuneful", "Soulful", "Symphonic", "Operatic", "Orchestral", "Choral"],
    "neat": ["Orderly", "Organized", "Methodical", "Tidy", "Systematic", "Arranged", "Composed", "Uncluttered", "Unmessy", "Structured"],
    "nerd": ["Intelligent", "Bookish", "Studious", "Academic", "Scientific", "Technical", "Intellectual", "Brainy", "Knowledgeable", "Precise"],
    "noble": ["Honorable", "Dignified", "Exalted", "Distinguished", "Upright", "Virtuous", "Principled", "Ethical", "Highborn", "Lordly"],
    "nurturing": ["Caring", "Loving", "Supportive", "Protective", "Compassionate", "Benevolent", "Parental", "Helpful", "Tender", "Sympathetic"],
    "obedient": ["Compliant", "Submissive", "Dutiful", "Respectful", "Deferential", "Obedient", "Conforming", "Passive", "Docile", "Yielding"], 
    "observant": ["Perceptive", "Insightful", "Discerning", "Vigilant", "Mindful", "Attentive", "Keen", "Watchful", "Noticing", "Acutely aware"],
    "open-minded": ["Receptive", "Tolerant", "Broad-minded", "Liberal", "Unprejudiced", "Objective", "Unbiased", "Impartial", "Nonjudgmental", "Flexible"],
    "optimistic": ["Positive", "Hopeful", "Confident", "Upbeat", "Cheerful", "Encouraging", "Bright", "Promising", "Favorable", "Auspicious"],
    "orderly": ["Organized", "Methodical", "Systematic", "Structrued", "Neat", "Tidy", "Regimented", "Composed", "Disciplined", "Arranged"],
    "outgoing": ["Extroverted", "Sociable", "Friendly", "Interactive", "Lively", "Expressive", "Gregarious", "Talkative", "Vivacious", "Animated"],
    "parent": ["Nurturing", "Caring", "Loving", "Protective", "Guiding", "Supportive", "Selfless", "Devoted", "Sacrificing", "Responsible"],
    "partner": ["Supportive", "Understanding", "Collaborative", "Companionable", "Cooperative", "Communicative", "Sharing", "United", "Allied", "Harmonious"],
    "patient": ["Tolerant", "Understanding", "Unflappable", "Composed", "Resilient", "Stoic", "Long-suffering", "Imperturbable", "Uncomplaining", "Serene"],
    "peaceful": ["Calm", "Tranquil", "Harmonious", "Serene", "Placid", "Quiet", "Stable", "Undisturbed", "Halcyon", "Nonviolent"],
    "pensive": ["Thoughtful", "Contemplative", "Reflective", "Meditative", "Wistful", "Dreamy", "Introspective", "Retrospective", "Brooding", "Deliberative"],
    "perceptive": ["Insightful", "Observant", "Intuitive", "Discerning", "Shrewd", "Astute", "Sagacious", "Judicious", "Discriminating", "Keen"],
    "perfectionist": ["Precise", "Meticulous", "Rigorous", "Demanding", "Uncompromising", "Strict", "Conscientious", "Critical", "Fussy", "Particular"],
    "perseverant": ["Steadfast", "Persistent", "Tenacious", "Resolute", "Determined", "Diligent", "Unwavering", "Unfaltering", "Indefatigable", "Tireless"], 
    "persuasive": ["Convincing", "Compelling", "Influential", "Cogent", "Eloquent", "Articulate", "Forceful", "Authoritative", "Contagious", "Impressive"],
    "philosophical": ["Contemplative", "Thoughtful", "Reasoned", "Rational", "Analytical", "Metaphysical", "Meditative", "Reflective", "Profound", "Abstract"],
    "plainspoken": ["Frank", "Candid", "Direct", "Forthright", "Blunt", "Unambiguous", "Explicit", "Clear-cut", "Matter-of-fact", "Straightforward"],
    "playful": ["Fun", "Funny", "Humorous", "Witty", "Cheeky", "Joking", "Whimsical", "Mischievous", "Lighthearted", "Comedic"],  
    "poised": ["Confident", "Composed", "Collected", "Self-possessed", "Assured", "Equilibrium", "Balanced", "Tranquil", "Unruffled", "Serene"],
    "polite": ["Courteous", "Well-mannered", "Civil", "Respectful", "Cultured", "Refined", "Diplomatic", "Tactful", "Gracious", "Cordial"],
    "positive": ["Upbeat", "Optimistic", "Hopeful", "Encouraging", "Constructive", "Affirmative", "Confident", "Promising", "Bright", "Auspicious"],
    "pragmatic": ["Practical", "Sensible", "Realistic", "Down-to-earth", "Logical", "Reasonable", "Rational", "Level-headed", "Matter-of-fact", "Expedient"], 
    "precise": ["Exact", "Accurate", "Meticulous", "Rigorous", "Thorough", "Perfect", "Methodical", "Careful", "Word-for-word", "Letter-perfect"],
    "principled": ["Ethical", "Righteous", "Upright", "Honorable", "High-minded", "Idealistic", "Noble", "Discreet", "Conscientious", "Moralistic"],
    "proactive": ["Initiative", "Enterprising", "Driven", "Energetic", "Pioneering", "Determined", "Dynamic", "Motivated", "Progressive", "Ambitious"],
    "professional": ["Skilled", "Expert", "Efficient", "Businesslike", "Competent", "Trained", "Qualified", "Methodical", "Systematic", "Conscientious"],
    "protective": ["Safeguarding", "Defending", "Shielding", "Careful", "Cautious", "Prudent", "Concerned", "Mindful", "Attentive", "Sheltering"],
    "prudent": ["Wise", "Discreet", "Cautious", "Judicious", "Sensible", "Careful", "Thoughtful", "Deliberate", "Practical", "Shrewd"],
    "punctual": ["Prompt", "On-time", "Precise", "Regular", "Organized", "Timely", "Scheduled", "Regimented", "Systematic", "Dependable"],
    "pure": ["Innocent", "Virginal", "Wholesome", "Virtuous", "Moral", "Decent", "Upright", "Modest", "Untainted", "Uncorrupted"],
    "quiet": ["Reserved", "Shy", "Silent", "Demure", "Tranquil", "Still", "Introverted", "Peaceful", "Calm", "Mild-mannered"],
    "quirky": ["Eccentric", "Odd", "Peculiar", "Idiosyncratic", "Unconventional", "Offbeat", "Strange", "Weird", "Bizarre", "Singular"],
    "rational": ["Logical", "Reasonable", "Sensible", "Practical", "Realistic", "Sane", "Level-headed", "Coherent", "Analytical", "Clear-thinking"],
    "realistic": ["Practical", "Pragmatic", "Down-to-earth", "Valid", "Authentic", "Genuine", "Tangible", "Commonsensical", "Level-headed", "Well-grounded"],
    "rebellious": ["Defiant", "Disobedient", "Unruly", "Recalcitrant", "Uncontrollable", "Noncompliant", "Disruptive", "Wayward", "Resistant", "Obstinate"], 
    "reflective": ["Contemplative", "Thoughtful", "Meditative", "Mindful", "Philosophical", "Pondering", "Ruminative", "Introspective", "Retrospective", "Wistful"],
    "reliable": ["Dependable", "Trustworthy", "Responsible", "Consistent", "Steady", "Reputable", "Conscientious", "Stable", "Tried and true", "Solid"],
    "resilient": ["Tough", "Hardy", "Robust", "Durable", "Tenacious", "Indestructible", "Unbreakable", "Sturdy", "Unshakable", "Determined"],  
    "resourceful": ["Inventive", "Imaginative", "Creative", "Enterprising", "Clever", "Adaptable", "Ingenious", "Handy", "Capable", "Practical"],
    "respectful": ["Polite", "Courteous", "Civil", "Deferential", "Reverent", "Honorable", "Considerate", "Thoughtful", "Regardful", "Esteeming"],
    "responsible": ["Reliable", "Dependable", "Trustworthy", "Conscientious", "Dutiful", "Accountable", "Answerable", "Obligated", "Answerable", "Capable"],
    "restrained": ["Reserved", "Controlled", "Repressed", "Measured", "Moderate", "Temperate", "Disciplined", "Contained", "Muted", "Subdued"],
    "reverent": ["Respectful", "Solemn", "Sacred", "Spiritual", "Devout", "Pious", "Religious", "Holy", "Hallowed", "Venerating"],
    "romantic": ["Passionate", "Affectionate", "Ardent", "Fervent", "Loving", "Tender", "Amorous", "Sentimental", "Intimate", "Emotional"], 
    "sarcastic": ["Ironic", "Cynical", "Mocking", "Scornful", "Contemptuous", "Derisive", "Satirical", "Sneering", "Caustic", "Snarky"],
    "scholarly": ["Academic", "Learned", "Bookish", "Studious", "Erudite", "Intellectual", "Knowledgeable", "Informed", "Well-read", "Literary"],
    "scientific": ["Analytical", "Methodical", "Experimental", "Observant", "Investigative", "Logical", "Systematic", "Rational", "Technical", "Precise"],
    "self-assured": ["Confident", "Poised", "Composed", "Firm", "Unwavering", "Decisive", "Assertive", "Sure", "Positive", "Bold"],
    "self-disciplined": ["Restrained", "Principled", "Regulated", "Strict", "Rigorous", "Controlled", "Resolute", "Focused", "Determined", "Teetotaler"],
    "selfless": ["Altruistic", "Unselfish", "Charitable", "Benevolent", "Magnanimous", "Generous", "Philanthropic", "Sacrificing", "Humanitarian", "Noble"],
    "sensitive": ["Empathetic", "Compassionate", "Caring", "Intuitive", "Understanding", "Sensible", "Perceptive", "Sympathetic", "Warm", "Tenderhearted"], 
    "sentimental": ["Nostalgic", "Wistful", "Yearning", "Sad", "Attached", "Emotional", "Romantic", "Affectionate", "Tender", "Passionate"],
    "serious": ["Solemn", "Sober", "Sincere", "Grave", "Earnest", "Severe", "Grim", "Humorless", "Resolute", "Uncompromising"],
    "shrewd": ["Astute", "Savvy", "Clever", "Cunning", "Crafty", "Calculating", "Judicious", "Insightful", "Prudent", "Artful"],
    "silly": ["Foolish", "Ridiculous", "Absurd", "Preposterous", "Zany", "Outlandish", "Wacky", "Goofy", "Lighthearted", "Nonsensical"],
    "sincere": ["Genuine", "Earnest", "Heartfelt", "Candid", "Direct", "Honest", "Truthful", "Authentic", "Open", "Transparent"],
    "skillful": ["Expert", "Masterful", "Proficient", "Accomplished", "Talented", "Trained", "Polished", "Seasoned", "Savvy", "Adroit"],
    "smart": ["Brilliant", "Intelligent", "Clever", "Quick-witted", "Genius", "Gifted", "Bright", "Astute", "Savvy", "Sharp"],
    "sociable": ["Friendly", "Outgoing", "Gregarious", "Congenial", "Affable", "Garrulous", "Conversational", "Talkative", "Companionable", "Hospitable"],
    "sophisticated": ["Cultured", "Refined", "Civilized", "Cosmopolitan", "Urbanized", "Polished", "Suave", "Debonair", "Worldly", "Discerning"],
    "spiritual": ["Devout", "Pious", "Religious", "Sacred", "Divine", "Reverent", "Rapturous", "Mystical", "Transcendent", "Enlightened"],
    "spontaneous": ["Impulsive", "Unplanned", "Unpremeditated", "Unscripted", "Impromptu", "Natural", "Instinctive", "Intuitive", "Impetuous", "Unrehearsed"],
    "steady": ["Stable", "Secure", "Constant", "Reliable", "Solid", "Firm", "Unwavering", "Unflinching", "Unflappable", "Unvarying"],
    "stoic": ["Impassive", "Unemotional", "Dispassionate", "Unperturbed", "Composed", "Imperturbable", "Resigned", "Equable", "Steely", "Philosophical"],
    "strong-willed": ["Stubborn", "Headstrong", "Resolute", "Determined", "Obstinate", "Unyielding", "Tenacious", "Inflexible", "Opposite", "Uncompromising"],
    "studious": ["Scholarly", "Academic", "Bookish", "Intellectual", "Learned", "Diligent", "Dedicated", "Attentive", "Curious", "Inquisitive"],
    "stupid": ["Foolish", "Unintelligent", "Ignorant", "Dim-witted", "Brainless", "Mindless", "Oblivious", "Slow", "Dull", "Dense"],
    "suave": ["Charming", "Debonair", "Sophisticated", "Urbane", "Stylish", "Slick", "Smooth", "Refined", "Worldly", "Cultured"],
    "submissive": ["Docile", "Compliant", "Obedient", "Passive", "Resigned", "Meek", "Subservient", "Deferential", "Timid", "Unresisting"],
    "supportive": ["Helpful", "Encouraging", "Nurturing", "Assisting", "Backing", "Advocating", "Promoting", "Bolstering", "Reinforcing", "Comforting"],  
    "sweet": ["Kind", "Caring", "Pleasant", "Agreeable", "Good-natured", "Friendly", "Helpful", "Thoughtful", "Obliging", "Generous"],
    "sympathetic": ["Compassionate", "Empathetic", "Understanding", "Caring", "Considerate", "Kind", "Thoughtful", "Relating", "Warmhearted", "Commiserating"],
    "systematic": ["Methodical", "Ordered", "Organized", "Structured", "Programmed", "Logical", "Planned", "Procedural", "Sequential", "Regimented"],
    "technical": ["Specialized", "Mechanical", "Practical", "Methodical", "Systematic", "Analytical", "Precise", "Skilled", "Technological", "Engineered"],
    "tenderhearted": ["Kind", "Compassionate", "Caring", "Loving", "Sensitive", "Warm", "Sympathetic", "Understanding", "Gentle", "Softhearted"],
    "thorough": ["Comprehensive", "Exhaustive", "Complete", "Meticulous", "Diligent", "Precise", "Rigorous", "In-depth", "Detailed", "Systematic"], 
    "tidy": ["Neat", "Orderly", "Organized", "Uncluttered", "Arranged", "Composed", "Systematic", "Methodical", "Unmessy", "Well-kept"],
    "tolerant": ["Accepting", "Patient", "Broad-minded", "Open-minded", "Indulgent", "Liberal", "Permissive", "Forgiving", "Lenient", "Allowing"],
    "tough": ["Strong", "Resilient", "Robust", "Hardy", "Rugged", "Durable", "Stalwart", "Sturdy", "Hardened", "Hard-as-nails"],
    "traditional": ["Conventional", "Customary", "Established", "Long-standing", "Classical", "Conservative", "Orthodox", "Time-honored", "Old-fashioned", "Staid"],
    "trickster": ["Crafty", "Cunning", "Mischievous", "Sly", "Devious", "Artful", "Wily", "Elusive", "Scheming", "Clever"],
    "trusting": ["Faithful", "Unsuspecting", "Reliant", "Believing", "Accepting", "Confident", "Optimistic", "Hopeful", "Credulous", "Dependable"],
    "unassuming": ["Humble", "Modest", "Down-to-earth", "Unpretentious", "Self-effacing", "Unobtrusive", "Plain", "Ordinary", "Simple", "Unaffected"],
    "understanding": ["Compassionate", "Sympathetic", "Empathetic", "Tolerant", "Patient", "Perceptive", "Insightful", "Accommodating", "Forgiving", "Accepting"],
    "unflappable": ["Composed", "Calm", "Collected", "Unruffled", "Imperturbable", "Unshakable", "Steady", "Even-tempered", "Cool-headed", "Impassive"],
    "unique": ["Distinct", "Rare", "Uncommon", "Special", "Singular", "One-of-a-kind", "Different", "Standout", "Extraordinary", "Unparalleled"],
    "unpredictable": ["Erratic", "Irregular", "Inconsistent", "Unstable", "Variable", "Capricious", "Mercurial", "Volatile", "Unforeseeable", "Undependable"],
    "unpretentious": ["Simple", "Plain", "Modest", "Unassuming", "Unaffected", "Self-effacing", "Down-to-earth", "Unobtrusive", "Natural", "Unprepossessing"], 
    "upbeat": ["Positive", "Optimistic", "Hopeful", "Encouraging", "Cheerful", "Promising", "Bright", "Auspicious", "Confident", "Hyped"],
    "urbane": ["Sophisticated", "Refined", "Polished", "Suave", "Cosmopolitan", "Worldly", "Cultured", "Civilized", "Gentrified", "Stylish"],
    "versatile": ["Adaptable", "Flexible", "Multitalented", "Resourceful", "All-purpose", "Multifaceted", "Multiskilled", "Well-rounded", "Dynamic", "Agile"],
    "vigilant": ["Watchful", "On-guard", "Alert", "Observant", "Wary", "Mindful", "Attentive", "Cautious", "Hedging", "Argus-eyed"],
    "vivacious": ["Lively", "Animated", "Spirited", "Bubbly", "Energetic", "Vibrant", "Zestful", "Dynamic", "Playful", "Peppy"],
    "warmhearted": ["Caring", "Kind", "Compassionate", "Considerate", "Benevolent", "Sympathetic", "Thoughtful", "Altruistic", "Charitable", "Loving"],
    "whimsical": ["Fanciful", "Playful", "Quirky", "Witty", "Capricious", "Frivolous", "Unconventional", "Eccentric", "Zany", "Lighthearted"],
    "wise": ["Sagacious", "Prudent", "Discerning", "Judicious", "Sensible", "Shrewd", "Astute", "Savvy", "Perceptive", "Insightful"],
    "witty": ["Clever", "Humorous", "Amusing", "Entertaining", "Comedic", "Smart", "Funny", "Jocular", "Sparkling", "Playful"], 
    "youthful": ["Young", "Vibrant", "Fresh", "Lively", "Sprightly", "Vivacious", "Energetic", "Spirited", "Playful", "Lighthearted"],
    "zany": ["Wacky", "Goofy", "Slapstick", "Kooky", "Crazy", "Eccentric", "Quirky", "Wild", "Madcap", "Off-the-wall"],
    "zealous": ["Passionate", "Fervent", "Devoted", "Ardent", "Enthusiastic", "Intense", "Gung-ho", "Fanatical", "Overt", "Extreme"],
};
var personalitiesNSFW = {
    "abuser": ["Unyielding", "Manipulative", "Intimidating", "Aggressive", "Controlling", "Deceptive", "Vindictive", "Cruel", "Unpredictable", "Insensitive"],
    "addict": ["Drug addict", "Fixated", "Obsessed", "Uncontrolled", "Desperate", "Withdrawn", "Dependent", "Fixated", "Hooked", "Enslaved"],
    "alcoholic": ["Disoriented", "Impulsive", "Unpredictable", "Irresponsible", "Neglectful", "Unstable", "Reckless", "Regretful", "Disoriented", "Isolated"],
    "asexual": ["Disinterested in sex", "Non-sexual", "Abstinent", "Celibate", "Platonic", "Passionless", "Frigid", "Cold", "Disconnected", "Detached"],
    "cheating": ["Dishonest", "Unfaithful", "Sly", "Unreliable", "Conniving", "Cunning", "Deceptive", "Treacherous", "Two-faced", "Double-dealing"],
    "coquettish": ["Teasing", "Coy", "Kittenish", "Frisky", "Sexy", "Coquettish", "Captivating", "Flirtatious", "Playful", "Bewitching"],
    "debauched": ["Uninhibited", "Impulsive", "Sensual", "Indulgent", "Adventurous", "Energetic", "Passionate", "Daring", "Lustful", "Wild"],
    "depressed": ["Hopeless", "Melancholic", "Sad", "Apathetic", "Isolated", "Tired", "Pessimistic", "Unmotivated", "Despairing", "Gloomy"],
    "desirous": ["Yearning", "Longing", "Yearning", "Impatient", "Ambitious", "Restless", "Enthusiastic", "Determined", "Passionate", "Eager"],
    "desirable": ["Confident", "Glamorous", "Charismatic", "Alluring", "Extravagant", "Bold", "Sensual", "Dominant", "Passionate", "Unapologetic"],
    "dominant": ["Assertive", "In control", "Confident", "Strong-willed", "Firm", "Decisive", "Courageous", "Bold", "Disciplined", "Demanding"],
    "dominatrix": ["Commanding", "Demanding", "Assertive", "Strict", "Controlling", "Power-hungry", "Rigid", "Domineering", "Autocratic", "Authoritarian"],
    "easy": ["Promiscuous", "Loose", "Trashy", "Unprincipled", "Amenable", "Carefree", "Accessible", "Reckless", "Irresponsible", "Negligent"],
    "exhibitionist": ["Likes to be seen", "Adventurous", "Outgoing", "Confident", "Uninhibited", "Bold", "Playful", "Spontaneous", "Daring", "Open-minded"],
    "fetishist": ["Passionate", "Devoted", "Excitable", "Single-minded", "Curious", "Adventurous", "Expressive", "Open-minded", "Enthusiastic", "Obsessive"],
    "flirtatious": ["Mischievous", "Playful", "Light-hearted", "Charismatic", "Witty", "Confident", "Charming", "Entertaining", "Energetic", "Expressive"],
    "intimate": ["Close", "Personal", "Private", "Familiar", "Trusted", "Cherished", "Treasured", "Beloved", "Confidential", "Secret"],
    "killer": ["Cold-hearted", "Heartless", "Impulsive", "Remorseless", "Deceptive", "Dangerous", "Ruthless", "Unpredictable", "Violent", "Merciless"],
    "lover": ["Devoted", "Affectionate", "Ardent", "Passionate", "Fervent", "Enamored", "Smitten", "Besotted", "Devoted", "Attached"],
    "lustful": ["Covetous", "Greedy", "Avaricious", "Desirous", "Desiring", "Ravenous", "Voracious", "Insatiable", "Famished", "Starving"],
    "masochistic": ["Self-punishing", "Self-denying", "Enduring", "Submissive", "Enduring", "Stoic", "Long-suffering", "Meek", "Self-sacrificing", "Mortifying"],
    "nudist": ["Uninhibited", "Natural", "Open", "Comfortable", "Free-spirited", "Non-judgmental", "Relaxed", "Adventurous", "Body-positive", "Confident"],
    "nymph": ["Female", "Feminine", "Graceful", "Delicate", "Refined", "Dainty", "Picturesque", "Idyllic", "Pastoral", "Arcadian"],
    "nymphomaniac": ["Obsessive", "Unceasing", "Excessive", "Extreme", "Immoderate", "Unrestrained", "Uncontrolled", "Unmanageable", "Unquenchable", "Unsatisfiable"],
    "pain seeker": ["Enduring", "Patient", "Submissive", "Resilient", "Brave", "Tolerant", "Eager", "Humble", "Resistant", "Self-harm"],
    "polyamorous": ["Loving", "Open-hearted", "Honest", "Communicative", "Understanding", "Flexible", "Generous", "Respectful", "Adaptable", "Empathetic"],
    "predator": ["Dominant", "Instinctive", "Animalistic", "Passionate", "Rough", "Impulsive", "Powerful", "Wild", "Assertive", "Untamed"],
    "prostitute": ["Exploited", "Abused", "Victimized", "Marginalized", "Oppressed", "Subservient", "Disenfranchised", "Ostracized", "Stigmatized", "Maltreated"],
    "provocative": ["Daring", "Disruptive", "Adventurous", "Controversial", "Subversive", "Challenging", "Defiant", "Rebellious", "Confrontational", "Disobedient"],
    "psychopath": ["Duplicitous", "Impulsive", "Callous", "Unemotional", "Deceptive", "Insincere", "Irresponsible", "Reckless", "Narcissistic", "Charming"],
    "racist": ["Bigoted", "Prejudiced", "Biased", "Discriminatory", "Hateful", "Xenophobic", "Intolerant", "Anti-Semitic", "Supremacist", "Chauvinistic"],
    "sadistic": ["Cruel", "Brutal", "Inhumane", "Merciless", "Ruthless", "Savage", "Vicious", "Malicious", "Heartless", "Unsympathetic"],
    "satyr": ["Licentious", "Libidinous", "Seductive", "Lascivious", "Lewd", "Debauched", "Tainted", "Impure", "Corrupted", "Depraved"],
    "seductive": ["Tempting", "Enticing", "Tantalizing", "Bewitching", "Enchanting", "Captivating", "Mesmerizing", "Hypnotic", "Beguiling", "Alluring"],
    "sensualist": ["Tactile", "Passionate", "Appreciative", "In the moment", "Sensitive", "Intuitive", "Romantic", "Attuned", "Indulgent", "Patient"],
    "sexoholic": ["Addicted", "Compulsive", "Obsessed", "Predatory", "Insatiable", "Ravenous", "Voracious", "Craving", "Lustful", "Desperate"],
    "sexual": ["Passionate", "Lustful", "Sensual", "Carnal", "Amorous", "Romantic", "Affectionate", "Loving", "Intimate", "Ardent"],
    "slave": ["Subjugated", "Subordinate", "Subservient", "Obedient", "Servile", "Beholden", "Indentured", "Subject", "Bondsman", "Thrall"],
    "slut": ["Wild", "Uninhibited", "Sex partner", "Open", "Audacious", "Flirtatious", "Easygoing", "Slutty", "Temptress", "Sexual Obsessive"], 
    "submissive": ["Docile", "Passive", "Compliant", "Obedient", "Yielding", "Deferential", "Respectful", "Servile", "Obsequious", "Self-effacing"],
    "swinger": ["Open-minded", "Adventurous", "Sociable", "Flexible", "Communicative", "Respectful", "Fun-loving", "Friendly", "Non-jealous", "Confident"],
    "temptress": ["Seductress", "Enchantress", "Siren", "Vixen", "Bewitcher", "Charmer", "Belle", "Circe", "Delilah", "Lorelei"],
    "transgressive": ["Iconoclastic", "Heretical", "Contrary", "Disobedient", "Subversive", "Unorthodox", "Defiant", "Radical", "Nonconformist", "Unconventional"],
    "unfaithful": ["Disloyal", "Betraying", "Treacherous", "Deceitful", "Adulterous", "False", "Untrue", "Backstabbing", "Double-crossing", "Perfidious"],
    "victim": ["Vulnerable", "Insecure", "Fearful", "Defensive", "Quiet", "Submissive", "Anxious", "Pessimistic", "Sensitive", "Resigned"],
    "violent": ["Aggressive", "Impulsive", "Explosive", "Volatile", "Unpredictable", "Intimidating", "Ruthless", "Brutal", "Fierce", "Destructive"],
    "virgin": ["Chaste", "Virtuous", "Innocent", "Pure", "Maidenly", "Untouched", "Wholesome", "Immaculate", "Fresh", "Unspoiled"],
    "voyeur": ["Peeping Tom", "Snoop", "Spy", "Sneak", "Peeper", "Lurker", "Eavesdropper", "Intruder", "Interloper", "Trespasser"],
    "vulgar": ["Coarse", "Crass", "Rude", "Offensive", "Indelicate", "Crude", "Foul", "Profane", "Smutty", "Obscene"],
    "whore": ["Harlot", "Call girl", "Tempting", "Hooker", "Streetwalker", "Hustler", "Seductive", "Working girl", "Escort", "Courtesan"]
};