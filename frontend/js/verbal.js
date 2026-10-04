// ============================================================
// APTIPREP - VERBAL ABILITY QUIZ
// 5 TOPICS × 50 QUESTIONS = 250 QUESTIONS
// ============================================================


// ============================================================
// GET TOPIC FROM URL
// ============================================================

const urlParams = new URLSearchParams(window.location.search);

const topic = urlParams.get("topic") || "Synonyms";


// ============================================================
// SYNONYMS - 50 QUESTIONS
// ============================================================

const synonymsQuestions = [

    {
        question: "Choose the synonym of 'Abundant'.",
        options: ["Scarce", "Plentiful", "Small", "Weak"],
        answer: "B",
        explanation: "Abundant means available in large quantities. Plentiful has the same meaning."
    },

    {
        question: "Choose the synonym of 'Accurate'.",
        options: ["Wrong", "Correct", "Rough", "False"],
        answer: "B",
        explanation: "Accurate means correct or exact."
    },

    {
        question: "Choose the synonym of 'Brave'.",
        options: ["Cowardly", "Courageous", "Weak", "Lazy"],
        answer: "B",
        explanation: "Brave means courageous."
    },

    {
        question: "Choose the synonym of 'Calm'.",
        options: ["Peaceful", "Angry", "Noisy", "Wild"],
        answer: "A",
        explanation: "Calm means peaceful and quiet."
    },

    {
        question: "Choose the synonym of 'Clever'.",
        options: ["Foolish", "Intelligent", "Slow", "Lazy"],
        answer: "B",
        explanation: "Clever means intelligent or smart."
    },

    {
        question: "Choose the synonym of 'Difficult'.",
        options: ["Easy", "Hard", "Simple", "Light"],
        answer: "B",
        explanation: "Difficult means hard to do or understand."
    },

    {
        question: "Choose the synonym of 'Famous'.",
        options: ["Unknown", "Popular", "Hidden", "Weak"],
        answer: "B",
        explanation: "Famous means well known or popular."
    },

    {
        question: "Choose the synonym of 'Honest'.",
        options: ["Truthful", "Dishonest", "Clever", "Cruel"],
        answer: "A",
        explanation: "Honest means truthful."
    },

    {
        question: "Choose the synonym of 'Huge'.",
        options: ["Tiny", "Enormous", "Small", "Short"],
        answer: "B",
        explanation: "Huge means extremely large or enormous."
    },

    {
        question: "Choose the synonym of 'Immediate'.",
        options: ["Delayed", "Instant", "Late", "Slow"],
        answer: "B",
        explanation: "Immediate means instant or occurring without delay."
    },

    {
        question: "Choose the synonym of 'Important'.",
        options: ["Unimportant", "Significant", "Small", "Ordinary"],
        answer: "B",
        explanation: "Important means significant."
    },

    {
        question: "Choose the synonym of 'Kind'.",
        options: ["Cruel", "Gentle", "Angry", "Harsh"],
        answer: "B",
        explanation: "Kind means gentle and caring."
    },

    {
        question: "Choose the synonym of 'Lazy'.",
        options: ["Active", "Idle", "Busy", "Energetic"],
        answer: "B",
        explanation: "Lazy means idle or unwilling to work."
    },

    {
        question: "Choose the synonym of 'Loyal'.",
        options: ["Faithful", "Dishonest", "Disloyal", "Careless"],
        answer: "A",
        explanation: "Loyal means faithful."
    },

    {
        question: "Choose the synonym of 'Modern'.",
        options: ["Ancient", "Contemporary", "Old", "Historic"],
        answer: "B",
        explanation: "Modern means contemporary or current."
    },

    {
        question: "Choose the synonym of 'Necessary'.",
        options: ["Optional", "Essential", "Useless", "Extra"],
        answer: "B",
        explanation: "Necessary means essential or required."
    },

    {
        question: "Choose the synonym of 'Obvious'.",
        options: ["Hidden", "Clear", "Difficult", "Secret"],
        answer: "B",
        explanation: "Obvious means clear or easily understood."
    },

    {
        question: "Choose the synonym of 'Polite'.",
        options: ["Rude", "Courteous", "Angry", "Harsh"],
        answer: "B",
        explanation: "Polite means courteous and respectful."
    },

    {
        question: "Choose the synonym of 'Quick'.",
        options: ["Slow", "Fast", "Late", "Weak"],
        answer: "B",
        explanation: "Quick means fast."
    },

    {
        question: "Choose the synonym of 'Rare'.",
        options: ["Common", "Unusual", "Normal", "Frequent"],
        answer: "B",
        explanation: "Rare means uncommon or unusual."
    },

    {
        question: "Choose the synonym of 'Rich'.",
        options: ["Poor", "Wealthy", "Weak", "Small"],
        answer: "B",
        explanation: "Rich means wealthy."
    },

    {
        question: "Choose the synonym of 'Simple'.",
        options: ["Easy", "Complex", "Difficult", "Complicated"],
        answer: "A",
        explanation: "Simple means easy or uncomplicated."
    },

    {
        question: "Choose the synonym of 'Strong'.",
        options: ["Weak", "Powerful", "Small", "Fragile"],
        answer: "B",
        explanation: "Strong means powerful."
    },

    {
        question: "Choose the synonym of 'Temporary'.",
        options: ["Permanent", "Short-term", "Lasting", "Eternal"],
        answer: "B",
        explanation: "Temporary means existing for a limited time."
    },

    {
        question: "Choose the synonym of 'Useful'.",
        options: ["Useless", "Helpful", "Harmful", "Weak"],
        answer: "B",
        explanation: "Useful means helpful."
    },

    {
        question: "Choose the synonym of 'Victory'.",
        options: ["Defeat", "Success", "Failure", "Loss"],
        answer: "B",
        explanation: "Victory means success in a competition or conflict."
    },

    {
        question: "Choose the synonym of 'Wise'.",
        options: ["Foolish", "Sensible", "Careless", "Weak"],
        answer: "B",
        explanation: "Wise means sensible and having good judgment."
    },

    {
        question: "Choose the synonym of 'Begin'.",
        options: ["Start", "Finish", "Stop", "End"],
        answer: "A",
        explanation: "Begin means start."
    },

    {
        question: "Choose the synonym of 'Brief'.",
        options: ["Long", "Short", "Huge", "Wide"],
        answer: "B",
        explanation: "Brief means short in duration or length."
    },

    {
        question: "Choose the synonym of 'Dangerous'.",
        options: ["Safe", "Risky", "Secure", "Calm"],
        answer: "B",
        explanation: "Dangerous means risky or unsafe."
    },

    {
        question: "Choose the synonym of 'Eager'.",
        options: ["Unwilling", "Enthusiastic", "Lazy", "Bored"],
        answer: "B",
        explanation: "Eager means enthusiastic or very interested."
    },

    {
        question: "Choose the synonym of 'Furious'.",
        options: ["Happy", "Angry", "Calm", "Peaceful"],
        answer: "B",
        explanation: "Furious means extremely angry."
    },

    {
        question: "Choose the synonym of 'Generous'.",
        options: ["Selfish", "Charitable", "Cruel", "Mean"],
        answer: "B",
        explanation: "Generous means willing to give or share."
    },

    {
        question: "Choose the synonym of 'Humble'.",
        options: ["Proud", "Modest", "Arrogant", "Rude"],
        answer: "B",
        explanation: "Humble means modest and not arrogant."
    },

    {
        question: "Choose the synonym of 'Improve'.",
        options: ["Worsen", "Develop", "Damage", "Reduce"],
        answer: "B",
        explanation: "Improve means to develop or make better."
    },

    {
        question: "Choose the synonym of 'Intelligent'.",
        options: ["Smart", "Foolish", "Lazy", "Weak"],
        answer: "A",
        explanation: "Intelligent means smart."
    },

    {
        question: "Choose the synonym of 'Large'.",
        options: ["Tiny", "Big", "Short", "Narrow"],
        answer: "B",
        explanation: "Large means big."
    },

    {
        question: "Choose the synonym of 'Maintain'.",
        options: ["Destroy", "Preserve", "Remove", "Break"],
        answer: "B",
        explanation: "Maintain means preserve or keep in good condition."
    },

    {
        question: "Choose the synonym of 'Permit'.",
        options: ["Allow", "Prevent", "Stop", "Reject"],
        answer: "A",
        explanation: "Permit means allow."
    },

    {
        question: "Choose the synonym of 'Precise'.",
        options: ["Exact", "Wrong", "Approximate", "Rough"],
        answer: "A",
        explanation: "Precise means exact."
    },

    {
        question: "Choose the synonym of 'Rapid'.",
        options: ["Slow", "Fast", "Weak", "Late"],
        answer: "B",
        explanation: "Rapid means very fast."
    },

    {
        question: "Choose the synonym of 'Reject'.",
        options: ["Accept", "Refuse", "Approve", "Allow"],
        answer: "B",
        explanation: "Reject means refuse or decline."
    },

    {
        question: "Choose the synonym of 'Silent'.",
        options: ["Quiet", "Noisy", "Loud", "Busy"],
        answer: "A",
        explanation: "Silent means quiet."
    },

    {
        question: "Choose the synonym of 'Tired'.",
        options: ["Energetic", "Exhausted", "Active", "Fresh"],
        answer: "B",
        explanation: "Tired means exhausted or lacking energy."
    },

    {
        question: "Choose the synonym of 'Vacant'.",
        options: ["Occupied", "Empty", "Busy", "Full"],
        answer: "B",
        explanation: "Vacant means empty or unoccupied."
    },

    {
        question: "Choose the synonym of 'Abandon'.",
        options: ["Leave", "Keep", "Protect", "Hold"],
        answer: "A",
        explanation: "Abandon means leave completely."
    },

    {
        question: "Choose the synonym of 'Assist'.",
        options: ["Help", "Harm", "Stop", "Prevent"],
        answer: "A",
        explanation: "Assist means help."
    },

    {
        question: "Choose the synonym of 'Confident'.",
        options: ["Uncertain", "Self-assured", "Afraid", "Weak"],
        answer: "B",
        explanation: "Confident means self-assured."
    },

    {
        question: "Choose the synonym of 'Decline'.",
        options: ["Increase", "Decrease", "Grow", "Expand"],
        answer: "B",
        explanation: "Decline can mean decrease."
    },

    {
        question: "Choose the synonym of 'Essential'.",
        options: ["Necessary", "Optional", "Extra", "Useless"],
        answer: "A",
        explanation: "Essential means necessary."
    },

    {
        question: "Choose the synonym of 'Flexible'.",
        options: ["Rigid", "Adaptable", "Hard", "Fixed"],
        answer: "B",
        explanation: "Flexible means adaptable."
    }

];


// ============================================================
// ANTONYMS - 50 QUESTIONS
// ============================================================

const antonymsQuestions = [

    {
        question: "Choose the antonym of 'Abundant'.",
        options: ["Plentiful", "Scarce", "Enough", "Large"],
        answer: "B",
        explanation: "Abundant means plentiful. Its opposite is scarce."
    },

    {
        question: "Choose the antonym of 'Accept'.",
        options: ["Receive", "Reject", "Agree", "Approve"],
        answer: "B",
        explanation: "Reject means refuse to accept."
    },

    {
        question: "Choose the antonym of 'Ancient'.",
        options: ["Old", "Modern", "Historic", "Past"],
        answer: "B",
        explanation: "Modern is the opposite of ancient."
    },

    {
        question: "Choose the antonym of 'Artificial'.",
        options: ["Natural", "Fake", "Man-made", "False"],
        answer: "A",
        explanation: "Natural is the opposite of artificial."
    },

    {
        question: "Choose the antonym of 'Arrive'.",
        options: ["Reach", "Depart", "Come", "Enter"],
        answer: "B",
        explanation: "Depart means leave, which is opposite of arrive."
    },

    {
        question: "Choose the antonym of 'Brave'.",
        options: ["Courageous", "Cowardly", "Strong", "Bold"],
        answer: "B",
        explanation: "Cowardly is the opposite of brave."
    },

    {
        question: "Choose the antonym of 'Bright'.",
        options: ["Shiny", "Dark", "Clear", "Brilliant"],
        answer: "B",
        explanation: "Dark is the opposite of bright."
    },

    {
        question: "Choose the antonym of 'Broad'.",
        options: ["Wide", "Narrow", "Large", "Big"],
        answer: "B",
        explanation: "Narrow is the opposite of broad."
    },

    {
        question: "Choose the antonym of 'Calm'.",
        options: ["Peaceful", "Agitated", "Quiet", "Still"],
        answer: "B",
        explanation: "Agitated is the opposite of calm."
    },

    {
        question: "Choose the antonym of 'Cheap'.",
        options: ["Low-cost", "Expensive", "Affordable", "Small"],
        answer: "B",
        explanation: "Expensive is the opposite of cheap."
    },

    {
        question: "Choose the antonym of 'Clever'.",
        options: ["Smart", "Foolish", "Intelligent", "Wise"],
        answer: "B",
        explanation: "Foolish is the opposite of clever."
    },

    {
        question: "Choose the antonym of 'Complex'.",
        options: ["Difficult", "Simple", "Complicated", "Hard"],
        answer: "B",
        explanation: "Simple is the opposite of complex."
    },

    {
        question: "Choose the antonym of 'Create'.",
        options: ["Build", "Destroy", "Make", "Produce"],
        answer: "B",
        explanation: "Destroy is the opposite of create."
    },

    {
        question: "Choose the antonym of 'Cruel'.",
        options: ["Kind", "Harsh", "Rough", "Angry"],
        answer: "A",
        explanation: "Kind is the opposite of cruel."
    },

    {
        question: "Choose the antonym of 'Difficult'.",
        options: ["Hard", "Easy", "Tough", "Complex"],
        answer: "B",
        explanation: "Easy is the opposite of difficult."
    },

    {
        question: "Choose the antonym of 'Early'.",
        options: ["Soon", "Late", "Quick", "Fast"],
        answer: "B",
        explanation: "Late is the opposite of early."
    },

    {
        question: "Choose the antonym of 'Empty'.",
        options: ["Vacant", "Full", "Blank", "Clear"],
        answer: "B",
        explanation: "Full is the opposite of empty."
    },

    {
        question: "Choose the antonym of 'Expand'.",
        options: ["Grow", "Contract", "Increase", "Extend"],
        answer: "B",
        explanation: "Contract means become smaller."
    },

    {
        question: "Choose the antonym of 'Famous'.",
        options: ["Popular", "Unknown", "Known", "Popular"],
        answer: "B",
        explanation: "Unknown is the opposite of famous."
    },

    {
        question: "Choose the antonym of 'Generous'.",
        options: ["Kind", "Selfish", "Helpful", "Charitable"],
        answer: "B",
        explanation: "Selfish is the opposite of generous."
    },

    {
        question: "Choose the antonym of 'Genuine'.",
        options: ["Real", "Fake", "True", "Original"],
        answer: "B",
        explanation: "Fake is the opposite of genuine."
    },

    {
        question: "Choose the antonym of 'Happy'.",
        options: ["Joyful", "Sad", "Glad", "Cheerful"],
        answer: "B",
        explanation: "Sad is the opposite of happy."
    },

    {
        question: "Choose the antonym of 'Honest'.",
        options: ["Truthful", "Dishonest", "Fair", "Sincere"],
        answer: "B",
        explanation: "Dishonest is the opposite of honest."
    },

    {
        question: "Choose the antonym of 'Humble'.",
        options: ["Modest", "Arrogant", "Simple", "Polite"],
        answer: "B",
        explanation: "Arrogant is the opposite of humble."
    },

    {
        question: "Choose the antonym of 'Increase'.",
        options: ["Grow", "Decrease", "Expand", "Rise"],
        answer: "B",
        explanation: "Decrease is the opposite of increase."
    },

    {
        question: "Choose the antonym of 'Innocent'.",
        options: ["Pure", "Guilty", "Good", "Simple"],
        answer: "B",
        explanation: "Guilty is the opposite of innocent."
    },

    {
        question: "Choose the antonym of 'Intelligent'.",
        options: ["Smart", "Foolish", "Clever", "Wise"],
        answer: "B",
        explanation: "Foolish is the opposite of intelligent."
    },

    {
        question: "Choose the antonym of 'Kind'.",
        options: ["Gentle", "Cruel", "Helpful", "Friendly"],
        answer: "B",
        explanation: "Cruel is the opposite of kind."
    },

    {
        question: "Choose the antonym of 'Large'.",
        options: ["Big", "Small", "Huge", "Wide"],
        answer: "B",
        explanation: "Small is the opposite of large."
    },

    {
        question: "Choose the antonym of 'Maximum'.",
        options: ["Highest", "Minimum", "Greatest", "Largest"],
        answer: "B",
        explanation: "Minimum is the opposite of maximum."
    },

    {
        question: "Choose the antonym of 'Modern'.",
        options: ["Current", "Ancient", "New", "Recent"],
        answer: "B",
        explanation: "Ancient is the opposite of modern."
    },

    {
        question: "Choose the antonym of 'Permanent'.",
        options: ["Lasting", "Temporary", "Fixed", "Stable"],
        answer: "B",
        explanation: "Temporary is the opposite of permanent."
    },

    {
        question: "Choose the antonym of 'Polite'.",
        options: ["Courteous", "Rude", "Respectful", "Gentle"],
        answer: "B",
        explanation: "Rude is the opposite of polite."
    },

    {
        question: "Choose the antonym of 'Powerful'.",
        options: ["Strong", "Weak", "Mighty", "Forceful"],
        answer: "B",
        explanation: "Weak is the opposite of powerful."
    },

    {
        question: "Choose the antonym of 'Private'.",
        options: ["Personal", "Public", "Secret", "Hidden"],
        answer: "B",
        explanation: "Public is the opposite of private."
    },

    {
        question: "Choose the antonym of 'Quick'.",
        options: ["Fast", "Slow", "Rapid", "Swift"],
        answer: "B",
        explanation: "Slow is the opposite of quick."
    },

    {
        question: "Choose the antonym of 'Rich'.",
        options: ["Wealthy", "Poor", "Affluent", "Prosperous"],
        answer: "B",
        explanation: "Poor is the opposite of rich."
    },

    {
        question: "Choose the antonym of 'Rough'.",
        options: ["Hard", "Smooth", "Uneven", "Harsh"],
        answer: "B",
        explanation: "Smooth is the opposite of rough."
    },

    {
        question: "Choose the antonym of 'Safe'.",
        options: ["Secure", "Dangerous", "Protected", "Safe"],
        answer: "B",
        explanation: "Dangerous is the opposite of safe."
    },

    {
        question: "Choose the antonym of 'Simple'.",
        options: ["Easy", "Complicated", "Plain", "Clear"],
        answer: "B",
        explanation: "Complicated is the opposite of simple."
    },

    {
        question: "Choose the antonym of 'Strong'.",
        options: ["Powerful", "Weak", "Mighty", "Firm"],
        answer: "B",
        explanation: "Weak is the opposite of strong."
    },

    {
        question: "Choose the antonym of 'Success'.",
        options: ["Victory", "Failure", "Achievement", "Progress"],
        answer: "B",
        explanation: "Failure is the opposite of success."
    },

    {
        question: "Choose the antonym of 'Temporary'.",
        options: ["Short", "Permanent", "Brief", "Limited"],
        answer: "B",
        explanation: "Permanent is the opposite of temporary."
    },

    {
        question: "Choose the antonym of 'Transparent'.",
        options: ["Clear", "Opaque", "Visible", "Open"],
        answer: "B",
        explanation: "Opaque is the opposite of transparent."
    },

    {
        question: "Choose the antonym of 'Useful'.",
        options: ["Helpful", "Useless", "Practical", "Beneficial"],
        answer: "B",
        explanation: "Useless is the opposite of useful."
    },

    {
        question: "Choose the antonym of 'Victory'.",
        options: ["Success", "Defeat", "Win", "Achievement"],
        answer: "B",
        explanation: "Defeat is the opposite of victory."
    },

    {
        question: "Choose the antonym of 'Visible'.",
        options: ["Clear", "Invisible", "Open", "Bright"],
        answer: "B",
        explanation: "Invisible is the opposite of visible."
    },

    {
        question: "Choose the antonym of 'Wise'.",
        options: ["Sensible", "Foolish", "Intelligent", "Smart"],
        answer: "B",
        explanation: "Foolish is the opposite of wise."
    },

    {
        question: "Choose the antonym of 'Build'.",
        options: ["Construct", "Destroy", "Create", "Develop"],
        answer: "B",
        explanation: "Destroy is the opposite of build."
    },

    {
        question: "Choose the antonym of 'Include'.",
        options: ["Contain", "Exclude", "Add", "Accept"],
        answer: "B",
        explanation: "Exclude is the opposite of include."
    },

    {
        question: "Choose the antonym of 'Remember'.",
        options: ["Recall", "Forget", "Know", "Learn"],
        answer: "B",
        explanation: "Forget is the opposite of remember."
    }

];


// ============================================================
// SPOTTING ERRORS - 50 QUESTIONS
// ============================================================

const spottingErrorsQuestions = [

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He go to college every day.",
            "He goes to college every day.",
            "He going to college every day.",
            "He gone to college every day."
        ],
        answer: "B",
        explanation: "With 'He', the singular verb 'goes' is used."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She have a new phone.",
            "She has a new phone.",
            "She having a new phone.",
            "She haves a new phone."
        ],
        answer: "B",
        explanation: "With 'She', we use 'has'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "They was happy.",
            "They were happy.",
            "They is happy.",
            "They be happy."
        ],
        answer: "B",
        explanation: "'They' takes the plural verb 'were'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "I has completed my work.",
            "I have completed my work.",
            "I having completed my work.",
            "I had completes my work."
        ],
        answer: "B",
        explanation: "With 'I', use 'have'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He did not went there.",
            "He did not go there.",
            "He did not goes there.",
            "He did not going there."
        ],
        answer: "B",
        explanation: "After 'did not', use the base verb."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She is senior than me.",
            "She is senior to me.",
            "She is senior from me.",
            "She is senior with me."
        ],
        answer: "B",
        explanation: "The correct expression is 'senior to'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He is good in mathematics.",
            "He is good at mathematics.",
            "He is good on mathematics.",
            "He is good for mathematics."
        ],
        answer: "B",
        explanation: "The correct preposition is 'at'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She is married with a doctor.",
            "She is married to a doctor.",
            "She is married from a doctor.",
            "She is married by a doctor."
        ],
        answer: "B",
        explanation: "The correct expression is 'married to'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "I am interested on music.",
            "I am interested in music.",
            "I am interested at music.",
            "I am interested for music."
        ],
        answer: "B",
        explanation: "We say 'interested in'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He is afraid from dogs.",
            "He is afraid of dogs.",
            "He is afraid with dogs.",
            "He is afraid at dogs."
        ],
        answer: "B",
        explanation: "The correct phrase is 'afraid of'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She discussed about the problem.",
            "She discussed the problem.",
            "She discussed on the problem.",
            "She discussed for the problem."
        ],
        answer: "B",
        explanation: "'Discuss' does not require 'about'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He returned back home.",
            "He returned home.",
            "He returned to back home.",
            "He back returned home."
        ],
        answer: "B",
        explanation: "'Return' already means go back."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She entered into the room.",
            "She entered the room.",
            "She entered in the room.",
            "She entered to the room."
        ],
        answer: "B",
        explanation: "'Enter' can directly take an object."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He is capable to do it.",
            "He is capable of doing it.",
            "He is capable for doing it.",
            "He is capable in doing it."
        ],
        answer: "B",
        explanation: "Use 'capable of + -ing'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "I prefer tea than coffee.",
            "I prefer tea to coffee.",
            "I prefer tea from coffee.",
            "I prefer tea over than coffee."
        ],
        answer: "B",
        explanation: "The correct structure is 'prefer X to Y'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "Neither Ram nor Ravi are present.",
            "Neither Ram nor Ravi is present.",
            "Neither Ram nor Ravi were present.",
            "Neither Ram nor Ravi have present."
        ],
        answer: "B",
        explanation: "The singular subject near the verb takes 'is'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "Each students has a book.",
            "Each student has a book.",
            "Each student have a book.",
            "Each students have a book."
        ],
        answer: "B",
        explanation: "'Each' takes a singular noun and singular verb."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "One of my friend is here.",
            "One of my friends is here.",
            "One of my friends are here.",
            "One of my friend are here."
        ],
        answer: "B",
        explanation: "After 'one of', use a plural noun."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "The news are good.",
            "The news is good.",
            "The news were good.",
            "The news have good."
        ],
        answer: "B",
        explanation: "'News' is treated as singular."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "Mathematics are difficult.",
            "Mathematics is difficult.",
            "Mathematics were difficult.",
            "Mathematics have difficult."
        ],
        answer: "B",
        explanation: "'Mathematics' takes a singular verb."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He has been working since two hours.",
            "He has been working for two hours.",
            "He has been working from two hours.",
            "He has been working by two hours."
        ],
        answer: "B",
        explanation: "Use 'for' with a duration."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She has lived here since 2020.",
            "She has lived here for 2020.",
            "She has lived here from 2020.",
            "She has lived here by 2020."
        ],
        answer: "A",
        explanation: "Use 'since' with a starting point."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "I am living here since Monday.",
            "I have been living here since Monday.",
            "I was living here since Monday.",
            "I live here since Monday."
        ],
        answer: "B",
        explanation: "Present perfect continuous shows an action continuing from the past."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He can sings well.",
            "He can sing well.",
            "He can singing well.",
            "He can sang well."
        ],
        answer: "B",
        explanation: "A modal verb is followed by the base verb."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "You should to study.",
            "You should study.",
            "You should studying.",
            "You should studied."
        ],
        answer: "B",
        explanation: "'Should' is followed by the base verb."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He must to leave now.",
            "He must leave now.",
            "He must leaving now.",
            "He must left now."
        ],
        answer: "B",
        explanation: "'Must' takes the base verb."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She did her work carefully.",
            "She did her work careful.",
            "She did her work care.",
            "She did her work carefulness."
        ],
        answer: "A",
        explanation: "'Carefully' is the correct adverb."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He speaks English fluent.",
            "He speaks English fluently.",
            "He speaks English fluency.",
            "He speaks English more fluent."
        ],
        answer: "B",
        explanation: "'Fluently' correctly modifies the verb 'speaks'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She sings beautiful.",
            "She sings beautifully.",
            "She sings beauty.",
            "She sings beautify."
        ],
        answer: "B",
        explanation: "'Beautifully' is the correct adverb."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He is more taller than me.",
            "He is taller than me.",
            "He is most taller than me.",
            "He is tall than me."
        ],
        answer: "B",
        explanation: "Do not use 'more' with 'taller'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "This is the most easiest question.",
            "This is the easiest question.",
            "This is more easiest question.",
            "This is easiest than that."
        ],
        answer: "B",
        explanation: "'Easiest' already expresses the superlative."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She is one of the best student.",
            "She is one of the best students.",
            "She is one of the better student.",
            "She is one of best student."
        ],
        answer: "B",
        explanation: "After 'one of the', use a plural noun."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He as well as his friends are coming.",
            "He as well as his friends is coming.",
            "He as well as his friends were coming.",
            "He as well as his friends have coming."
        ],
        answer: "B",
        explanation: "The main subject 'He' is singular."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "The furniture are expensive.",
            "The furniture is expensive.",
            "The furniture were expensive.",
            "The furniture have expensive."
        ],
        answer: "B",
        explanation: "'Furniture' is uncountable and singular."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He gave me an useful book.",
            "He gave me a useful book.",
            "He gave me useful an book.",
            "He gave me the useful a book."
        ],
        answer: "B",
        explanation: "'Useful' begins with a consonant sound."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She is an university student.",
            "She is a university student.",
            "She is university a student.",
            "She is the university student."
        ],
        answer: "B",
        explanation: "'University' begins with a consonant sound."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He is an honest man.",
            "He is a honest man.",
            "He is honest a man.",
            "He is the honest an man."
        ],
        answer: "A",
        explanation: "'Honest' begins with a vowel sound."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "I saw him yesterday.",
            "I have seen him yesterday.",
            "I had saw him yesterday.",
            "I see him yesterday."
        ],
        answer: "A",
        explanation: "A completed action at a definite past time uses simple past."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She went to Chennai last week.",
            "She has gone to Chennai last week.",
            "She goes to Chennai last week.",
            "She had go to Chennai last week."
        ],
        answer: "A",
        explanation: "'Last week' indicates a completed past action."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "If I was you, I would study.",
            "If I were you, I would study.",
            "If I am you, I would study.",
            "If I be you, I would study."
        ],
        answer: "B",
        explanation: "The standard hypothetical form is 'If I were you'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "Unless you don't study, you will fail.",
            "Unless you study, you will fail.",
            "Unless you studied, you fail.",
            "Unless you not study, you will fail."
        ],
        answer: "B",
        explanation: "'Unless' already expresses a negative condition."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He is looking for his keys.",
            "He is looking his keys.",
            "He is looking at for his keys.",
            "He looking for his keys."
        ],
        answer: "A",
        explanation: "The correct phrase is 'look for'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She depends of her parents.",
            "She depends on her parents.",
            "She depends at her parents.",
            "She depends from her parents."
        ],
        answer: "B",
        explanation: "The correct preposition is 'on'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He insisted to go.",
            "He insisted on going.",
            "He insisted for going.",
            "He insisted at going."
        ],
        answer: "B",
        explanation: "The correct structure is 'insist on + ing'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She apologized to me for being late.",
            "She apologized me for being late.",
            "She apologized at me for being late.",
            "She apologized with me for being late."
        ],
        answer: "A",
        explanation: "The correct structure is 'apologize to someone for something'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He congratulated me for my success.",
            "He congratulated me on my success.",
            "He congratulated me at my success.",
            "He congratulated my success."
        ],
        answer: "B",
        explanation: "The correct phrase is 'congratulate someone on'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She is fond with music.",
            "She is fond of music.",
            "She is fond at music.",
            "She is fond for music."
        ],
        answer: "B",
        explanation: "The correct expression is 'fond of'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He is responsible of the project.",
            "He is responsible for the project.",
            "He is responsible at the project.",
            "He is responsible with the project."
        ],
        answer: "B",
        explanation: "The correct preposition is 'for'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "She is good at solving problems.",
            "She is good in solving problems.",
            "She is good on solving problems.",
            "She is good for solving problems."
        ],
        answer: "A",
        explanation: "The correct expression is 'good at'."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "He has fewer money.",
            "He has less money.",
            "He has few money.",
            "He has lesser money."
        ],
        answer: "B",
        explanation: "'Money' is uncountable, so 'less' is used."
    },

    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "There are much students here.",
            "There are many students here.",
            "There is many students here.",
            "There are more much students here."
        ],
        answer: "B",
        explanation: "'Students' is countable plural, so 'many' is used."
    }

];


// ============================================================
// SENTENCE CORRECTION - 50 QUESTIONS
// ============================================================

const sentenceCorrectionQuestions = [

    {
        question: "Choose the correct sentence.",
        options: [
            "He don't like coffee.",
            "He doesn't like coffee.",
            "He doesn't likes coffee.",
            "He not like coffee."
        ],
        answer: "B",
        explanation: "Use 'doesn't' with 'he' and the base verb 'like'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She don't know the answer.",
            "She doesn't know the answer.",
            "She doesn't knows the answer.",
            "She not knows the answer."
        ],
        answer: "B",
        explanation: "The correct form is 'doesn't know'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "They has completed the work.",
            "They have completed the work.",
            "They having completed the work.",
            "They completes the work."
        ],
        answer: "B",
        explanation: "'They' takes 'have'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "I has a meeting today.",
            "I have a meeting today.",
            "I having a meeting today.",
            "I haves a meeting today."
        ],
        answer: "B",
        explanation: "With 'I', use 'have'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He go to school yesterday.",
            "He went to school yesterday.",
            "He goes to school yesterday.",
            "He going to school yesterday."
        ],
        answer: "B",
        explanation: "'Yesterday' requires the simple past 'went'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She can sings well.",
            "She can sing well.",
            "She can singing well.",
            "She can sang well."
        ],
        answer: "B",
        explanation: "A modal verb is followed by the base form."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He should to work harder.",
            "He should work harder.",
            "He should working harder.",
            "He should worked harder."
        ],
        answer: "B",
        explanation: "'Should' takes the base verb."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She is more beautiful than her sister.",
            "She is beautiful than her sister.",
            "She is more beautiful from her sister.",
            "She is most beautiful than her sister."
        ],
        answer: "A",
        explanation: "The comparative form is 'more beautiful than'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "This is the best book I have read.",
            "This is the best book I had readed.",
            "This is best book I have read.",
            "This is the better book I have read."
        ],
        answer: "A",
        explanation: "The superlative 'best' is correctly used."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is taller then me.",
            "He is taller than me.",
            "He is more taller than me.",
            "He is tall than me."
        ],
        answer: "B",
        explanation: "Comparisons use 'than'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She has been working here since five years.",
            "She has been working here for five years.",
            "She is working here since five years.",
            "She worked here for since five years."
        ],
        answer: "B",
        explanation: "Use 'for' with a duration."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "I have known him since 2019.",
            "I have known him for 2019.",
            "I know him since 2019.",
            "I knew him since 2019."
        ],
        answer: "A",
        explanation: "Use 'since' with a starting point."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is good in English.",
            "He is good at English.",
            "He is good on English.",
            "He is good for English."
        ],
        answer: "B",
        explanation: "The standard expression is 'good at'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She is interested on coding.",
            "She is interested in coding.",
            "She is interested at coding.",
            "She is interested for coding."
        ],
        answer: "B",
        explanation: "The correct expression is 'interested in'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is afraid from heights.",
            "He is afraid of heights.",
            "He is afraid at heights.",
            "He is afraid with heights."
        ],
        answer: "B",
        explanation: "The correct phrase is 'afraid of'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She prefers tea than coffee.",
            "She prefers tea to coffee.",
            "She prefers tea from coffee.",
            "She prefers tea over than coffee."
        ],
        answer: "B",
        explanation: "Use 'prefer X to Y'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is married with a teacher.",
            "He is married to a teacher.",
            "He is married from a teacher.",
            "He is married by a teacher."
        ],
        answer: "B",
        explanation: "The correct phrase is 'married to'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She discussed about the issue.",
            "She discussed the issue.",
            "She discussed on the issue.",
            "She discussed for the issue."
        ],
        answer: "B",
        explanation: "'Discuss' does not require 'about'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He entered into the room.",
            "He entered the room.",
            "He entered in the room.",
            "He entered to the room."
        ],
        answer: "B",
        explanation: "'Enter' can directly take an object."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She returned back home.",
            "She returned home.",
            "She returned to back home.",
            "She back returned home."
        ],
        answer: "B",
        explanation: "'Return' already means go back."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is capable to solve it.",
            "He is capable of solving it.",
            "He is capable for solve it.",
            "He is capable in solve it."
        ],
        answer: "B",
        explanation: "Use 'capable of + ing'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "Each student have a book.",
            "Each student has a book.",
            "Each students has a book.",
            "Each students have a book."
        ],
        answer: "B",
        explanation: "'Each' takes a singular noun and verb."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "Every employees must attend.",
            "Every employee must attend.",
            "Every employee must attends.",
            "Every employees must attends."
        ],
        answer: "B",
        explanation: "'Every' is followed by a singular noun."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "One of my friend is here.",
            "One of my friends is here.",
            "One of my friends are here.",
            "One of my friend are here."
        ],
        answer: "B",
        explanation: "'One of' is followed by a plural noun."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "The news are surprising.",
            "The news is surprising.",
            "The news were surprising.",
            "The news have surprising."
        ],
        answer: "B",
        explanation: "'News' takes a singular verb."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "The furniture are new.",
            "The furniture is new.",
            "The furniture were new.",
            "The furniture have new."
        ],
        answer: "B",
        explanation: "'Furniture' is uncountable and singular."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He gave me an useful idea.",
            "He gave me a useful idea.",
            "He gave me useful an idea.",
            "He gave me the useful a idea."
        ],
        answer: "B",
        explanation: "'Useful' starts with a consonant sound."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She is an university student.",
            "She is a university student.",
            "She is university an student.",
            "She is the university a student."
        ],
        answer: "B",
        explanation: "'University' begins with a consonant sound."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is an honest person.",
            "He is a honest person.",
            "He is honest a person.",
            "He is the honest an person."
        ],
        answer: "A",
        explanation: "'Honest' begins with a vowel sound."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "I saw him yesterday.",
            "I have seen him yesterday.",
            "I had saw him yesterday.",
            "I see him yesterday."
        ],
        answer: "A",
        explanation: "A completed action at a definite past time uses simple past."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She has finished her work yesterday.",
            "She finished her work yesterday.",
            "She finish her work yesterday.",
            "She finishing her work yesterday."
        ],
        answer: "B",
        explanation: "'Yesterday' indicates simple past."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "If I was you, I would accept it.",
            "If I were you, I would accept it.",
            "If I am you, I would accept it.",
            "If I be you, I would accept it."
        ],
        answer: "B",
        explanation: "The standard hypothetical form is 'If I were you'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "Unless you don't work, you will fail.",
            "Unless you work, you will fail.",
            "Unless you not work, you fail.",
            "Unless you worked, you will fail."
        ],
        answer: "B",
        explanation: "'Unless' already expresses a negative condition."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He depends of his parents.",
            "He depends on his parents.",
            "He depends at his parents.",
            "He depends from his parents."
        ],
        answer: "B",
        explanation: "The correct preposition is 'on'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She insisted to go.",
            "She insisted on going.",
            "She insisted for going.",
            "She insisted at going."
        ],
        answer: "B",
        explanation: "Use 'insist on + ing'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He apologized me.",
            "He apologized to me.",
            "He apologized at me.",
            "He apologized with me."
        ],
        answer: "B",
        explanation: "The correct structure is 'apologize to someone'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She congratulated me for my success.",
            "She congratulated me on my success.",
            "She congratulated me at my success.",
            "She congratulated my success."
        ],
        answer: "B",
        explanation: "The correct phrase is 'congratulate someone on'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is fond with music.",
            "He is fond of music.",
            "He is fond at music.",
            "He is fond for music."
        ],
        answer: "B",
        explanation: "The correct expression is 'fond of'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She is responsible of the task.",
            "She is responsible for the task.",
            "She is responsible at the task.",
            "She is responsible with the task."
        ],
        answer: "B",
        explanation: "The correct preposition is 'for'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He can speaks English.",
            "He can speak English.",
            "He can speaking English.",
            "He can spoke English."
        ],
        answer: "B",
        explanation: "After 'can', use the base verb."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "They were playing football.",
            "They was playing football.",
            "They is playing football.",
            "They be playing football."
        ],
        answer: "A",
        explanation: "'They' takes 'were'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She were studying.",
            "She was studying.",
            "She are studying.",
            "She be studying."
        ],
        answer: "B",
        explanation: "'She' takes 'was'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "I am agree with you.",
            "I agree with you.",
            "I am agreeing with you.",
            "I agreeing with you."
        ],
        answer: "B",
        explanation: "'Agree' is normally used without 'am' here."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is knowing the answer.",
            "He knows the answer.",
            "He know the answer.",
            "He knowing the answer."
        ],
        answer: "B",
        explanation: "The simple present 'knows' is correct."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She likes to read books.",
            "She likes reading books.",
            "Both A and B",
            "She like read books."
        ],
        answer: "C",
        explanation: "Both 'likes to read' and 'likes reading' are grammatically correct."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He is taller than his brother.",
            "He is more taller than his brother.",
            "He is tall than his brother.",
            "He is most taller than his brother."
        ],
        answer: "A",
        explanation: "'Taller than' is the correct comparative form."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "This is the most interesting book.",
            "This is the more interesting book.",
            "This is most interest book.",
            "This is the interesting most book."
        ],
        answer: "A",
        explanation: "'Most interesting' is the correct superlative form."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "There is many people here.",
            "There are many people here.",
            "There are much people here.",
            "There is much people here."
        ],
        answer: "B",
        explanation: "'People' is plural, so use 'are'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "There are much water in the bottle.",
            "There is much water in the bottle.",
            "There are many water in the bottle.",
            "There is many water in the bottle."
        ],
        answer: "B",
        explanation: "'Water' is uncountable and takes 'is'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He has less books.",
            "He has fewer books.",
            "He has lesser books.",
            "He has little books."
        ],
        answer: "B",
        explanation: "Use 'fewer' with countable plural nouns."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She has fewer money.",
            "She has less money.",
            "She has few money.",
            "She has lesser money."
        ],
        answer: "B",
        explanation: "'Money' is uncountable, so use 'less'."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "He did not went to work.",
            "He did not go to work.",
            "He did not goes to work.",
            "He did not going to work."
        ],
        answer: "B",
        explanation: "After 'did not', use the base verb."
    },

    {
        question: "Choose the correct sentence.",
        options: [
            "She does not likes coffee.",
            "She does not like coffee.",
            "She does not liking coffee.",
            "She does not liked coffee."
        ],
        answer: "B",
        explanation: "After 'does not', use the base verb."
    }

];


// ============================================================
// IDIOMS & PHRASES - 50 QUESTIONS
// ============================================================

const idiomsQuestions = [

    {
        question: "What does 'Break the ice' mean?",
        options: [
            "Break something",
            "Start a friendly conversation",
            "Become angry",
            "Stop talking"
        ],
        answer: "B",
        explanation: "It means to start a friendly conversation or make people comfortable."
    },

    {
        question: "What does 'A piece of cake' mean?",
        options: [
            "Something very easy",
            "Something expensive",
            "Something difficult",
            "Something tasty"
        ],
        answer: "A",
        explanation: "It means something very easy to do."
    },

    {
        question: "What does 'Hit the nail on the head' mean?",
        options: [
            "Make a mistake",
            "Say exactly the right thing",
            "Work hard",
            "Build something"
        ],
        answer: "B",
        explanation: "It means to identify or describe something exactly."
    },

    {
        question: "What does 'Once in a blue moon' mean?",
        options: [
            "Very often",
            "Every day",
            "Very rarely",
            "At night"
        ],
        answer: "C",
        explanation: "It means something that happens very rarely."
    },

    {
        question: "What does 'Under the weather' mean?",
        options: [
            "Feeling sick",
            "Feeling happy",
            "Travelling",
            "Working outside"
        ],
        answer: "A",
        explanation: "It means feeling unwell."
    },

    {
        question: "What does 'Cost an arm and a leg' mean?",
        options: [
            "Be very cheap",
            "Be very expensive",
            "Be dangerous",
            "Be free"
        ],
        answer: "B",
        explanation: "It means something is extremely expensive."
    },

    {
        question: "What does 'Let the cat out of the bag' mean?",
        options: [
            "Release an animal",
            "Reveal a secret",
            "Lose something",
            "Become angry"
        ],
        answer: "B",
        explanation: "It means to reveal a secret."
    },

    {
        question: "What does 'Spill the beans' mean?",
        options: [
            "Cook food",
            "Reveal secret information",
            "Make a mess",
            "Waste money"
        ],
        answer: "B",
        explanation: "It means to reveal secret information."
    },

    {
        question: "What does 'Bite the bullet' mean?",
        options: [
            "Face a difficult situation bravely",
            "Run away",
            "Become angry",
            "Win easily"
        ],
        answer: "A",
        explanation: "It means to face a difficult situation with courage."
    },

    {
        question: "What does 'Call it a day' mean?",
        options: [
            "Name a day",
            "Stop working for the day",
            "Start working",
            "Plan a holiday"
        ],
        answer: "B",
        explanation: "It means to stop working for the day."
    },

    {
        question: "What does 'Beat around the bush' mean?",
        options: [
            "Avoid the main topic",
            "Work quickly",
            "Speak clearly",
            "Travel around"
        ],
        answer: "A",
        explanation: "It means avoiding the main point."
    },

    {
        question: "What does 'In hot water' mean?",
        options: [
            "Taking a bath",
            "In trouble",
            "Feeling comfortable",
            "Feeling thirsty"
        ],
        answer: "B",
        explanation: "It means being in trouble."
    },

    {
        question: "What does 'On cloud nine' mean?",
        options: [
            "Very happy",
            "Very tired",
            "Very angry",
            "Very confused"
        ],
        answer: "A",
        explanation: "It means extremely happy."
    },

    {
        question: "What does 'Pull someone's leg' mean?",
        options: [
            "Help someone",
            "Tease or joke with someone",
            "Hurt someone",
            "Follow someone"
        ],
        answer: "B",
        explanation: "It means to tease someone."
    },

    {
        question: "What does 'Burn the midnight oil' mean?",
        options: [
            "Waste fuel",
            "Work late into the night",
            "Sleep early",
            "Travel at night"
        ],
        answer: "B",
        explanation: "It means working late at night."
    },

    {
        question: "What does 'Add fuel to the fire' mean?",
        options: [
            "Solve a problem",
            "Make a situation worse",
            "Cook food",
            "Start a machine"
        ],
        answer: "B",
        explanation: "It means making a bad situation worse."
    },

    {
        question: "What does 'A blessing in disguise' mean?",
        options: [
            "A hidden problem",
            "Something that seems bad but turns out good",
            "A religious ceremony",
            "A secret gift"
        ],
        answer: "B",
        explanation: "Something initially bad that has a positive result."
    },

    {
        question: "What does 'The ball is in your court' mean?",
        options: [
            "You are playing sports",
            "It is your responsibility to act",
            "You lost a game",
            "You should leave"
        ],
        answer: "B",
        explanation: "It means it is your turn or responsibility to act."
    },

    {
        question: "What does 'Back to square one' mean?",
        options: [
            "Start again from the beginning",
            "Win a game",
            "Move forward",
            "Take a break"
        ],
        answer: "A",
        explanation: "It means returning to the beginning."
    },

    {
        question: "What does 'Barking up the wrong tree' mean?",
        options: [
            "Choosing the wrong person or approach",
            "Working hard",
            "Being successful",
            "Making friends"
        ],
        answer: "A",
        explanation: "It means pursuing the wrong idea or person."
    },

    {
        question: "What does 'Better late than never' mean?",
        options: [
            "Being late is always good",
            "Doing something late is better than not doing it",
            "Never do anything",
            "Always be early"
        ],
        answer: "B",
        explanation: "Doing something late is better than not doing it."
    },

    {
        question: "What does 'By the book' mean?",
        options: [
            "Reading a book",
            "Following rules exactly",
            "Writing a book",
            "Buying a book"
        ],
        answer: "B",
        explanation: "It means following rules exactly."
    },

    {
        question: "What does 'Cry over spilled milk' mean?",
        options: [
            "Waste food",
            "Worry about something that cannot be changed",
            "Feel hungry",
            "Clean a table"
        ],
        answer: "B",
        explanation: "It means worrying about something that has already happened."
    },

    {
        question: "What does 'Get cold feet' mean?",
        options: [
            "Feel physically cold",
            "Become nervous or afraid",
            "Run quickly",
            "Become angry"
        ],
        answer: "B",
        explanation: "It means becoming nervous about doing something."
    },

    {
        question: "What does 'Go the extra mile' mean?",
        options: [
            "Travel one mile",
            "Make extra effort",
            "Stop working",
            "Walk slowly"
        ],
        answer: "B",
        explanation: "It means making more effort than expected."
    },

    {
        question: "What does 'Keep an eye on' mean?",
        options: [
            "Watch carefully",
            "Close your eyes",
            "Ignore something",
            "Look away"
        ],
        answer: "A",
        explanation: "It means watch or monitor carefully."
    },

    {
        question: "What does 'Kill two birds with one stone' mean?",
        options: [
            "Do two things with one action",
            "Harm animals",
            "Waste time",
            "Fail twice"
        ],
        answer: "A",
        explanation: "It means achieving two objectives with one action."
    },

    {
        question: "What does 'Miss the boat' mean?",
        options: [
            "Miss a bus",
            "Lose an opportunity",
            "Travel by boat",
            "Reach early"
        ],
        answer: "B",
        explanation: "It means missing an opportunity."
    },

    {
        question: "What does 'No pain, no gain' mean?",
        options: [
            "Success requires effort",
            "Pain is always bad",
            "Avoid all work",
            "Success is automatic"
        ],
        answer: "A",
        explanation: "It means achievement usually requires effort."
    },

    {
        question: "What does 'Out of the blue' mean?",
        options: [
            "Unexpectedly",
            "Very slowly",
            "Sadly",
            "In the morning"
        ],
        answer: "A",
        explanation: "It means unexpectedly."
    },

    {
        question: "What does 'See eye to eye' mean?",
        options: [
            "Look at someone",
            "Agree with someone",
            "Argue with someone",
            "Meet someone"
        ],
        answer: "B",
        explanation: "It means to agree with someone."
    },

    {
        question: "What does 'Speak of the devil' mean?",
        options: [
            "Talk about a dangerous person",
            "The person being discussed appears",
            "Tell a secret",
            "Stop speaking"
        ],
        answer: "B",
        explanation: "It is used when the person being discussed appears."
    },

    {
        question: "What does 'Take it with a grain of salt' mean?",
        options: [
            "Eat carefully",
            "Do not take something completely literally",
            "Cook food",
            "Believe everything"
        ],
        answer: "B",
        explanation: "It means to view information with some skepticism."
    },

    {
        question: "What does 'The tip of the iceberg' mean?",
        options: [
            "A small visible part of a much larger problem",
            "A frozen object",
            "A complete solution",
            "A small success"
        ],
        answer: "A",
        explanation: "It refers to a small visible part of something much larger."
    },

    {
        question: "What does 'Through thick and thin' mean?",
        options: [
            "Only during good times",
            "Through good and bad times",
            "Very quickly",
            "Without effort"
        ],
        answer: "B",
        explanation: "It means remaining loyal through good and bad times."
    },

    {
        question: "What does 'Time flies' mean?",
        options: [
            "Time passes quickly",
            "Time stops",
            "Time is wasted",
            "Time moves backward"
        ],
        answer: "A",
        explanation: "It means time passes very quickly."
    },

    {
        question: "What does 'Under one's nose' mean?",
        options: [
            "Far away",
            "Very obvious or nearby",
            "Hidden underground",
            "Above someone"
        ],
        answer: "B",
        explanation: "It means something is happening very close or obviously."
    },

    {
        question: "What does 'Wrap your head around something' mean?",
        options: [
            "Wear a hat",
            "Understand something difficult",
            "Forget something",
            "Avoid something"
        ],
        answer: "B",
        explanation: "It means to understand something difficult."
    },

    {
        question: "What does 'Your guess is as good as mine' mean?",
        options: [
            "You know the answer",
            "I do not know either",
            "You are correct",
            "You should guess again"
        ],
        answer: "B",
        explanation: "It means the speaker does not know the answer either."
    },

    {
        question: "What does 'Hit the sack' mean?",
        options: [
            "Go to sleep",
            "Start working",
            "Hit someone",
            "Go shopping"
        ],
        answer: "A",
        explanation: "It means go to bed or sleep."
    },

    {
        question: "What does 'In the same boat' mean?",
        options: [
            "Travelling together",
            "Being in the same situation",
            "Living near water",
            "Working together physically"
        ],
        answer: "B",
        explanation: "It means being in the same situation."
    },

    {
        question: "What does 'Jump the gun' mean?",
        options: [
            "Start too early",
            "Win a race",
            "Use a weapon",
            "Wait patiently"
        ],
        answer: "A",
        explanation: "It means doing something before the appropriate time."
    },

    {
        question: "What does 'Make ends meet' mean?",
        options: [
            "Connect two things",
            "Manage financially",
            "Finish a meeting",
            "Make friends"
        ],
        answer: "B",
        explanation: "It means managing expenses with available income."
    },

    {
        question: "What does 'On the same page' mean?",
        options: [
            "Reading a book",
            "Having the same understanding",
            "Writing together",
            "Being in the same room"
        ],
        answer: "B",
        explanation: "It means having the same understanding."
    },

    {
        question: "What does 'Put all your eggs in one basket' mean?",
        options: [
            "Cook eggs",
            "Risk everything on one plan",
            "Save money",
            "Work carefully"
        ],
        answer: "B",
        explanation: "It means depending completely on one plan or opportunity."
    },

    {
        question: "What does 'Rain cats and dogs' mean?",
        options: [
            "Animals are falling",
            "Rain very heavily",
            "Rain lightly",
            "A storm is ending"
        ],
        answer: "B",
        explanation: "It means raining very heavily."
    },

    {
        question: "What does 'Sit on the fence' mean?",
        options: [
            "Sit outside",
            "Avoid choosing a side",
            "Work hard",
            "Make a decision"
        ],
        answer: "B",
        explanation: "It means avoiding taking a definite position."
    },

    {
        question: "What does 'Steal someone's thunder' mean?",
        options: [
            "Take someone's attention or credit",
            "Steal something physical",
            "Make noise",
            "Help someone"
        ],
        answer: "A",
        explanation: "It means taking attention or credit away from someone."
    },

    {
        question: "What does 'A storm in a teacup' mean?",
        options: [
            "A real storm",
            "A lot of anger about a small issue",
            "A weather problem",
            "A serious disaster"
        ],
        answer: "B",
        explanation: "It means a big reaction to a small problem."
    },

    {
        question: "What does 'At the eleventh hour' mean?",
        options: [
            "Very early",
            "At the last moment",
            "At noon",
            "Every hour"
        ],
        answer: "B",
        explanation: "It means at the last possible moment."
    },

    {
        question: "What does 'Keep something at bay' mean?",
        options: [
            "Keep something away",
            "Bring something closer",
            "Buy something",
            "Hide something"
        ],
        answer: "A",
        explanation: "It means to keep something away."
    },

    {
        question: "What does 'Leave no stone unturned' mean?",
        options: [
            "Do nothing",
            "Search everywhere or try every possible method",
            "Move stones",
            "Give up quickly"
        ],
        answer: "B",
        explanation: "It means making every possible effort."
    },

    {
        question: "What does 'A dime a dozen' mean?",
        options: [
            "Very expensive",
            "Very common",
            "Very rare",
            "Very useful"
        ],
        answer: "B",
        explanation: "It means something is very common and easy to find."
    },

    {
        question: "What does 'Cut corners' mean?",
        options: [
            "Do something cheaply or carelessly",
            "Draw a circle",
            "Work perfectly",
            "Take a long route"
        ],
        answer: "A",
        explanation: "It means taking shortcuts, often sacrificing quality."
    },

    {
        question: "What does 'Go with the flow' mean?",
        options: [
            "Swim in a river",
            "Accept a situation without resistance",
            "Stop immediately",
            "Work against others"
        ],
        answer: "B",
        explanation: "It means accepting things as they happen."
    }

];


// ============================================================
// SELECT QUESTIONS BASED ON TOPIC
// ============================================================

let verbalQuestions;

const selectedTopic = topic.toLowerCase();

if (selectedTopic === "synonyms") {

    verbalQuestions = synonymsQuestions;

}
else if (selectedTopic === "antonyms") {

    verbalQuestions = antonymsQuestions;

}
else if (selectedTopic === "spotting errors") {

    verbalQuestions = spottingErrorsQuestions;

}
else if (selectedTopic === "sentence correction") {

    verbalQuestions = sentenceCorrectionQuestions;

}
else if (
    selectedTopic === "idioms & phrases" ||
    selectedTopic === "idioms and phrases"
) {

    verbalQuestions = idiomsQuestions;

}
else {

    verbalQuestions = synonymsQuestions;

}


// ============================================================
// QUIZ VARIABLES
// ============================================================

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let answerSubmitted = false;


// ============================================================
// GET HTML ELEMENTS
// ============================================================

const topicTitle = document.getElementById("topicTitle");

const questionNumber = document.getElementById("questionNumber");

const progressBar = document.getElementById("progressBar");

const questionText = document.getElementById("questionText");

const optionA = document.getElementById("optionA");

const optionB = document.getElementById("optionB");

const optionC = document.getElementById("optionC");

const optionD = document.getElementById("optionD");

const textA = document.getElementById("textA");

const textB = document.getElementById("textB");

const textC = document.getElementById("textC");

const textD = document.getElementById("textD");

const submitBtn = document.getElementById("submitBtn");

const nextBtn = document.getElementById("nextBtn");

const answerMessage = document.getElementById("answerMessage");

const explanation = document.getElementById("explanation");


// ============================================================
// OPTION BUTTONS
// ============================================================

const optionButtons = [

    optionA,
    optionB,
    optionC,
    optionD

];


// ============================================================
// DISPLAY QUESTION
// ============================================================

function displayQuestion() {

    const question = verbalQuestions[currentQuestion];

    selectedAnswer = null;

    answerSubmitted = false;


    topicTitle.textContent = topic;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${verbalQuestions.length}`;


    progressBar.style.width =
        `${((currentQuestion + 1) / verbalQuestions.length) * 100}%`;


    questionText.textContent =
        question.question;


    textA.textContent =
        question.options[0];

    textB.textContent =
        question.options[1];

    textC.textContent =
        question.options[2];

    textD.textContent =
        question.options[3];


    // Reset option styles

    optionButtons.forEach(button => {

        button.classList.remove(
            "selected",
            "correct",
            "wrong"
        );

        button.disabled = false;

    });


    // Reset messages

    answerMessage.style.display = "none";

    answerMessage.className = "answer-message";

    answerMessage.textContent = "";


    explanation.style.display = "none";

    explanation.textContent = "";


    // Buttons

    submitBtn.style.display = "inline-block";

    nextBtn.style.display = "none";

}


// ============================================================
// SELECT OPTION
// ============================================================

function selectOption(answer) {

    if (answerSubmitted) {
        return;
    }


    selectedAnswer = answer;


    optionButtons.forEach(button => {

        button.classList.remove("selected");

    });


    if (answer === "A") {

        optionA.classList.add("selected");

    }

    else if (answer === "B") {

        optionB.classList.add("selected");

    }

    else if (answer === "C") {

        optionC.classList.add("selected");

    }

    else if (answer === "D") {

        optionD.classList.add("selected");

    }

}


// ============================================================
// OPTION CLICK EVENTS
// ============================================================

optionA.addEventListener("click", function () {

    selectOption("A");

});

optionB.addEventListener("click", function () {

    selectOption("B");

});

optionC.addEventListener("click", function () {

    selectOption("C");

});

optionD.addEventListener("click", function () {

    selectOption("D");

});


// ============================================================
// SUBMIT ANSWER
// ============================================================

submitBtn.addEventListener("click", function () {

    if (answerSubmitted) {
        return;
    }


    if (!selectedAnswer) {

        alert("Please select an answer.");

        return;

    }


    answerSubmitted = true;


    const question =
        verbalQuestions[currentQuestion];


    const correctAnswer =
        question.answer;


    // Disable options

    optionButtons.forEach(button => {

        button.disabled = true;

    });


    // Show correct answer

    if (correctAnswer === "A") {

        optionA.classList.add("correct");

    }

    else if (correctAnswer === "B") {

        optionB.classList.add("correct");

    }

    else if (correctAnswer === "C") {

        optionC.classList.add("correct");

    }

    else if (correctAnswer === "D") {

        optionD.classList.add("correct");

    }


    // Check answer

    if (selectedAnswer === correctAnswer) {

        score++;


        answerMessage.textContent =
            "✓ Correct Answer!";

        answerMessage.className =
            "answer-message correct-message";

    }

    else {

        // Mark selected wrong answer

        if (selectedAnswer === "A") {

            optionA.classList.add("wrong");

        }

        else if (selectedAnswer === "B") {

            optionB.classList.add("wrong");

        }

        else if (selectedAnswer === "C") {

            optionC.classList.add("wrong");

        }

        else if (selectedAnswer === "D") {

            optionD.classList.add("wrong");

        }


        answerMessage.textContent =
            `✗ Wrong Answer! Correct answer is ${correctAnswer}`;

        answerMessage.className =
            "answer-message wrong-message";

    }


    answerMessage.style.display = "block";


    // Explanation

    explanation.innerHTML =
        `<strong>Explanation:</strong><br>${question.explanation}`;

    explanation.style.display = "block";


    // Hide submit

    submitBtn.style.display = "none";


    // Show next

    nextBtn.style.display = "inline-block";

});


// ============================================================
// NEXT QUESTION
// ============================================================

nextBtn.addEventListener("click", function () {

    currentQuestion++;


    if (currentQuestion < verbalQuestions.length) {

        displayQuestion();

    }

    else {

        showResult();

    }

});


// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {

    const percentage =
        Math.round(
            (score / verbalQuestions.length) * 100
        );


    const quizContainer =
        document.querySelector(".quiz-container");


    quizContainer.innerHTML = `

        <div class="result-box">

            <h1>🎉 Quiz Completed!</h1>

            <h2>${topic}</h2>

            <div class="score-circle">

                ${score}/${verbalQuestions.length}

            </div>

            <p>
                <strong>Score:</strong>
                ${score} / ${verbalQuestions.length}
            </p>

            <p>
                <strong>Percentage:</strong>
                ${percentage}%
            </p>

            <button
                type="button"
                class="quiz-btn"
                onclick="location.reload()">

                Try Again

            </button>

            <button
                type="button"
                class="quiz-btn"
                onclick="window.location.href='verbal.html'">

                Back to Topics

            </button>

        </div>

    `;

}


// ============================================================
// START QUIZ
// ============================================================

displayQuestion();


// ============================================================
// DEBUG
// ============================================================

console.log("AptiPrep Verbal Ability Loaded");

console.log("Selected Topic:", topic);

console.log(
    "Questions Loaded:",
    verbalQuestions.length
);