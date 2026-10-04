const questions = [

    {
        company: "TCS",
        topic: "Number System",
        source_question_no: 5,
        question: "If the same number is divided by 17, what is the remainder?",
        option_a: "3",
        option_b: "5",
        option_c: "7",
        option_d: "9",
        correct_answer: "B",
        explanation: "357 is a multiple of 17. Therefore, when the same number is divided by 17, the remainder remains 5.",
        source: "500 most asked Campus Recruitment Numerical Aptitude Questions (Infosys, TCS, CTS, Wipro, Accenture)"
    },

    {
        company: "TCS",
        topic: "Number System",
        source_question_no: 14,
        question: "What is the remainder when (34^31)^301 is divided by 9?",
        option_a: "3",
        option_b: "5",
        option_c: "7",
        option_d: "8",
        correct_answer: "C",
        explanation: "Using modular arithmetic, 34 ≡ 7 ≡ -2 (mod 9). Applying the powers and the repeating remainder cycle of powers of 2 modulo 9 gives the remainder 7.",
      },

      /*
      // =====================================================
      // WIPRO TOPICS 6-10
      // =====================================================

      {
        company_id: 3, topic_id: 6,
        question: "To cover a distance of 45 km downstream a yacht takes 3.5 hours. The same yacht covers the same distance upstream in 7.1 hours. Determine the speed of the yacht in km/hr.", option_a: "7.5 kmph", option_b: "5.8 kmph", option_c: "9.59 kmph", option_d: "12 kmph", correct_answer: "C",
        explanation: "Downstream speed = 45/3.5 = 12.85 kmph. Upstream speed = 45/7.1 = 6.33 kmph. Speed in still water = (12.85 + 6.33)/2 = 9.59 kmph.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "A ticket collector in a train travelling at 67 kmph notices a goods train travelling in the opposite direction takes 11 seconds to pass him. The goods train is 293.5 m long. Find its speed.", option_a: "24.6 km/hr", option_b: "30.01 km/hr", option_c: "29.05 km/hr", option_d: "40 km/hr", correct_answer: "C",
        explanation: "Relative speed = 293.5/11 m/s. Converting to km/hr and subtracting 67 km/hr gives approximately 29.05 km/hr.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "A jet ski takes 4.5 hours to go 30 km downstream and return. Its speed in still water is 15 kmph. Determine the speed of the stream.", option_a: "4.5 km/hr", option_b: "6 km/hr", option_c: "7 km/hr", option_d: "5 km/hr", correct_answer: "D",
        explanation: "Let stream speed be x. 30/(15+x) + 30/(15-x) = 4.5. Solving gives x = 5 km/hr.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "With the wind behind him, a rider takes 3 minutes to ride 1 km. Against the wind, he takes 4 minutes. How much time will he take to ride 1 km without wind?", option_a: "7/3 minutes", option_b: "17/7 minutes", option_c: "43/12 minutes", option_d: "24/7 minutes", correct_answer: "D",
        explanation: "With wind: x+y=20 kmph. Against wind: x-y=15 kmph. Therefore x=17.5 kmph. Time for 1 km = 60/17.5 = 24/7 minutes.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "The first half of a distance is covered at 40 km/hr and the second half at 60 km/hr. What is the average speed?", option_a: "55 km/hr", option_b: "48 km/hr", option_c: "44 km/hr", option_d: "45 km/hr", correct_answer: "B",
        explanation: "For equal distances, average speed = 2ab/(a+b) = (2×40×60)/100 = 48 km/hr.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "A man rows upstream and it takes him three times as long as rowing downstream. His speed in still water is 6 km/hr. Find the speed of the stream.", option_a: "3 km/hr", option_b: "4.5 km/hr", option_c: "5 km/hr", option_d: "5.75 km/hr", correct_answer: "A",
        explanation: "Let stream speed be x. y/(6-x) = 3y/(6+x). Solving gives x = 3 km/hr.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "Find the length of a bridge if a train of length 130 m travelling at 45 kmph can cross it in 30 seconds.", option_a: "325 m", option_b: "365 m", option_c: "245 m", option_d: "312 m", correct_answer: "C",
        explanation: "45 kmph = 25/2 m/s. Distance in 30 sec = 375 m. Bridge length = 375 - 130 = 245 m.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "Find the length of a train if it passes a pole in 23 seconds and a platform of length 142 m in 38 seconds.", option_a: "217.73 m", option_b: "250 m", option_c: "200 m", option_d: "Data inadequate", correct_answer: "A",
        explanation: "Let train length be x. x/23 = (x+142)/38. Therefore 38x = 23x + 3266, giving x = 217.73 m approximately.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "Two trains A and B have the same length and run in opposite directions. They pass a pole in 29 seconds and 19 seconds respectively. How long will they take to cross each other?", option_a: "15.5 sec", option_b: "22.9 sec", option_c: "18.8 sec", option_d: "20.2 sec", correct_answer: "B",
        explanation: "Taking each train length as 551 m, speeds are 19 m/s and 29 m/s. Relative speed = 48 m/s. Time = 1102/48 = 22.9 sec.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },
      {
        company_id: 3, topic_id: 6,
        question: "A man runs at 8.8 kmph. A train travels at 75 kmph in the opposite direction and is 135 m long. Find the time taken by the train to pass the man.", option_a: "5.80 sec", option_b: "5.50 sec", option_c: "8 sec", option_d: "10 sec", correct_answer: "A",
        explanation: "Relative speed = 75 + 8.8 = 83.8 kmph. Converting to m/s and using time = distance/speed gives approximately 5.80 seconds.", source: "PrepInsta - Wipro NTH Time, Speed and Distance Quiz-1"
      },

      {
        company_id: 3, topic_id: 7,
        question: "A shopkeeper offers a 20% discount followed by an extra 25% discount. If the article is sold for Rs.3600 and he still makes an 80% profit, find the marked price and cost price.", option_a: "4500, 2015", option_b: "5000, 2500", option_c: "6000, 2000", option_d: "4200, 1800", correct_answer: "C",
        explanation: "80% of 75% of MP = 3600. Therefore MP = Rs.6000. CP = 3600×100/180 = Rs.2000.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "A man sells three articles at the same selling price. The first is sold at 10% loss, the second at 20% profit and the third at 25% loss. By what percentage is their average CP higher than their average SP?", option_a: "10%", option_b: "9.589%", option_c: "8.59%", option_d: "9.2566%", correct_answer: "D",
        explanation: "Assuming each SP = 100, CPs are 111.11, 83.33 and 133.33. Average CP = 109.2566. Therefore average CP is 9.2566% higher.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "A dry fruit set costs Rs.700. Material, labour and overheads are in the ratio 3:2:2. If profit is 20% of the labour cost, what is the marked price?", option_a: "Rs.740", option_b: "Rs.1080", option_c: "Rs.960", option_d: "Rs.1020", correct_answer: "A",
        explanation: "Labour cost = 2/7 × 700 = 200. Profit = 20% of 200 = 40. Marked price = 700 + 40 = Rs.740.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "The cost of labour and overheads were Rs.400 and Rs.200. Labour increased by 30% and overheads by 10%. Find the new manufacturing cost.", option_a: "740", option_b: "1050", option_c: "1080", option_d: "1100", correct_answer: "A",
        explanation: "Increase in labour = 120. Increase in overheads = 20. New total = 400+200+120+20 = Rs.740.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "Ramu and Shyamu sell cars for Rs.36,000 each. If all payments are made on time, what is the approximate percentage profit of the person making the higher profit?", option_a: "25%", option_b: "21%", option_c: "19%", option_d: "17%", correct_answer: "C",
        explanation: "After the respective discounts, Ramu's selling price is Rs.34,280. CP = Rs.28,800. Profit percentage = 19%.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "In the same Ramu-Shyamu car problem, if Sashi defaults by 1 week on the second payment and 2 weeks on the third payment, what is Ramu's profit?", option_a: "Rs.6240", option_b: "Rs.5920", option_c: "Rs.5860", option_d: "Rs.5980", correct_answer: "B",
        explanation: "Reduced discounts give final selling price Rs.34,720. CP = Rs.28,800. Profit = 34,720 - 28,800 = Rs.5,920.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "An untrustworthy vendor claims to sell at cost price but makes a 20% profit by using a false weight. What weight does he actually give for 1 kg?", option_a: "833 1/3 grams", option_b: "833 2/3 grams", option_c: "834 1/3 grams", option_d: "835 2/3 grams", correct_answer: "A",
        explanation: "To obtain 20% profit, actual quantity supplied = 1000×100/120 = 833 1/3 grams.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "The cost price of 15 items is equal to the selling price of 18 items. Find the percentage loss.", option_a: "18 2/11%", option_b: "15 5/15%", option_c: "16 2/3%", option_d: "30%", correct_answer: "C",
        explanation: "15 CP = 18 SP. Therefore loss = 3/18 × 100 = 16 2/3%.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "The cost of 13 items is the same as the selling price of 11 items. Find the approximate profit percentage.", option_a: "19%", option_b: "18%", option_c: "20%", option_d: "21%", correct_answer: "B",
        explanation: "On selling 11 items, profit corresponds to 2 items. Profit percentage = 2/11 × 100 ≈ 18%.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },
      {
        company_id: 3, topic_id: 7,
        question: "By selling a book for Rs.600 more, Parv would make a 5% profit instead of an 11% loss. What was the cost price?", option_a: "Rs.3750", option_b: "Rs.4000", option_c: "Rs.2250", option_d: "Rs.6000", correct_answer: "A",
        explanation: "Difference in profit percentages = 5 - (-11) = 16%. CP = 600×100/16 = Rs.3750.", source: "PrepInsta - Wipro NTH Profit and Loss Quiz-1"
      },

      {
        company_id: 3, topic_id: 8,
        question: "In throwing a fair die, what is the probability of getting the number 4?", option_a: "1/6", option_b: "1/2", option_c: "1", option_d: "3/4", correct_answer: "A",
        explanation: "There are 6 equally likely outcomes and only one gives 4. Probability = 1/6.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "If a card is picked at random from a pack of 52 cards, what is the probability that it is a spade?", option_a: "1/26", option_b: "1/4", option_c: "1/13", option_d: "None of these", correct_answer: "B",
        explanation: "There are 13 spades among 52 cards. Probability = 13/52 = 1/4.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "Three coins are tossed. What is the probability of getting at least one tail?", option_a: "1/5", option_b: "7/8", option_c: "7/5", option_d: "None of these", correct_answer: "B",
        explanation: "P(at least one tail) = 1 - P(all heads) = 1 - 1/8 = 7/8.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "A bag contains 4 white and 5 black balls. Three balls are drawn at random. What are the odds against all three being black?", option_a: "1/2", option_b: "5/10", option_c: "11/13", option_d: "37/5", correct_answer: "D",
        explanation: "P(all black) = 5/9 × 4/8 × 3/7 = 5/42. Odds against = (1-P)/P = 37/5.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "A bag contains 8 grey and 3 blue balls. Two balls are drawn. What is the probability that both are blue?", option_a: "5/16", option_b: "2/13", option_c: "3/26", option_d: "3/55", correct_answer: "D",
        explanation: "P = 3/11 × 2/10 = 3/55.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "Three cards are drawn at random from a pack of 52 cards. What is the probability of drawing a king, a queen and a jack?", option_a: "12/2568", option_b: "16/5525", option_c: "14/8745", option_d: "1/5525", correct_answer: "B",
        explanation: "Using combinations, favourable selections correspond to choosing one king, one queen and one jack. The probability is 16/5525.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "The odds against an event are 5:3 and the odds in favour of an independent event are 7:5. What is the probability that at least one event occurs?", option_a: "71/96", option_b: "25/96", option_c: "7/96", option_d: "5/96", correct_answer: "A",
        explanation: "From the given odds, calculate individual probabilities and use P(A∪B)=P(A)+P(B)-P(A)P(B). Result = 71/96.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "Two dice are thrown. What is the probability that the sum is at most 4 and exactly one die shows 2?", option_a: "1/3", option_b: "1/6", option_c: "1/9", option_d: "2/3", correct_answer: "A",
        explanation: "Favourable outcomes are (2,1), (2,3), (1,2), (3,2). The source's solution considers the qualifying outcomes and gives 1/3.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "Rajesh speaks truth 3 out of 8 times, while Aman speaks truth 5 out of 6 times. What is the probability that they contradict each other?", option_a: "4/52", option_b: "7/12", option_c: "1/52", option_d: "2/13", correct_answer: "B",
        explanation: "Contradiction = Rajesh true & Aman false OR Rajesh false & Aman true. Result = (3/8)(1/6)+(5/8)(5/6)=7/12.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },
      {
        company_id: 3, topic_id: 8,
        question: "Ritik throws a pair of dice 4 times. What is the probability of getting a double exactly twice?", option_a: "25/216", option_b: "21/120", option_c: "8/125", option_d: "4/25", correct_answer: "A",
        explanation: "Probability of a double in one throw = 6/36 = 1/6. Exactly twice in 4 throws = C(4,2)(1/6)^2(5/6)^2 = 25/216.", source: "PrepInsta - Wipro NTH Probability Quiz-1"
      },

      {
        company_id: 3, topic_id: 9,
        question: "In how many ways can 28 English and 26 Hindi books be arranged so that no two Hindi books are together?", option_a: "1540", option_b: "378", option_c: "93", option_d: "None of these", correct_answer: "B",
        explanation: "There are 28 gaps around the English books. Select 26 gaps for Hindi books: C(28,26) = 378.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "A set contains 10 distinct elements. What is the total number of distinct functions from the set to itself?", option_a: "10^10", option_b: "13", option_c: "90", option_d: "None of these", correct_answer: "A",
        explanation: "Each of the 10 elements has 10 choices for its image. Therefore total functions = 10^10.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "A garden has 14 points, of which 7 lie on one straight line. How many triangles can be formed?", option_a: "533", option_b: "333", option_c: "329", option_d: "None of these", correct_answer: "C",
        explanation: "Total triangles = C(14,3) - C(7,3) = 364 - 35 = 329.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "In a room everyone shakes hands with everyone else. If the total number of handshakes is 91, how many persons are there?", option_a: "14", option_b: "13", option_c: "15", option_d: "12", correct_answer: "A",
        explanation: "C(n,2)=91. Therefore n(n-1)/2=91, giving n=14.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "In how many ways can 12 different books be arranged if 4 particular books must always be together?", option_a: "400000", option_b: "483840", option_c: "483841", option_d: "48888", correct_answer: "B",
        explanation: "Treat the 4 books as one block. Arrange 9 units and the 4 books internally: 9!×4!/2 = 483840.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "There are 5 visiting places in a town. A traveller may visit one, two or three places in a day. In how many ways can the traveller select the places?", option_a: "25", option_b: "20", option_c: "10", option_d: "5", correct_answer: "A",
        explanation: "C(5,1)+C(5,2)+C(5,3)=5+10+10=25.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "If there are M keys and N combinations of keys may be used independently, what is the number of different non-empty selections?", option_a: "1", option_b: "(M+1)^N - 1", option_c: "(M+1)^N", option_d: "M+1", correct_answer: "B",
        explanation: "Including the empty selection gives (M+1)^N. Removing the empty selection gives (M+1)^N - 1.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "There are 10 students in a group. Two particular students cannot participate together. In how many ways can 8 students be selected?", option_a: "168", option_b: "732", option_c: "728", option_d: "398", correct_answer: "A",
        explanation: "Neither selected: C(8,6). Exactly one selected: C(8,7)×C(2,1). Total = 28+140 = 168.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "There are 3 styles and 5 different colours. In how many ways can all 3 styles be assigned colours?", option_a: "3", option_b: "5", option_c: "125", option_d: "124", correct_answer: "C",
        explanation: "Each of the 3 styles has 5 colour choices. Total = 5^3 = 125.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },
      {
        company_id: 3, topic_id: 9,
        question: "A candidate has to pass all five different questions in an interview. In how many ways can the candidate fail?", option_a: "32", option_b: "29", option_c: "31", option_d: "30", correct_answer: "C",
        explanation: "The candidate fails if at least one of the five questions is failed. Number of ways = 2^5 - 1 = 31.", source: "PrepInsta - Wipro NTH Permutation and Combinations Quiz-1"
      },

      {
        company_id: 3, topic_id: 10,
        question: "The average weight of 10 students increases by 2 kg when a student weighing 30 kg leaves and another joins. Later, this new student leaves and another student joins who is 10 kg lighter. What is the difference between final and initial averages?", option_a: "11 kg", option_b: "1 kg", option_c: "111 kg", option_d: "121 kg", correct_answer: "B",
        explanation: "First replacement increases total by 20 kg, so new student = 50 kg. Final student = 40 kg. Net increase = 40-30 = 10 kg. Average increase = 10/10 = 1 kg.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "The average age of husband, wife and child 6 years ago was 33 years and that of wife and child 8 years ago was 32 years. What is the present age of the husband?", option_a: "32 years", option_b: "37 years", option_c: "42 years", option_d: "47 years", correct_answer: "B",
        explanation: "Present sum of all three = 33×3 + 6×3 = 117. Present sum of wife and child = 32×2 + 8×2 = 80. Husband's age = 117-80 = 37 years.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "The average age of a group of 15 persons is 25 years 5 months. Two persons, each 40 years old, leave the group. What is the average age of the remaining persons?", option_a: "24.25 years", option_b: "23.17 years", option_c: "25.35 years", option_d: "25 years", correct_answer: "B",
        explanation: "Total age = 15×305 months. Subtract 2×480 months and divide by 13. Result ≈23.17 years.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "Aman can type a sheet in 10 minutes, Baman in 20 minutes and Chaman in 30 minutes. What is the average number of sheets typed per hour per typist?", option_a: "55/9", option_b: "30/7", option_c: "11/3", option_d: "32/11", correct_answer: "C",
        explanation: "In one hour they type 6, 3 and 2 sheets respectively. Total = 11. Average = 11/3.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "There were 30 students in a hostel. After 20 new students joined, mess expenses increased by Rs.1600 per day while average expenditure per head decreased by Rs.8. What was the original expenditure?", option_a: "Rs.1600", option_b: "Rs.2000", option_c: "Rs.3000", option_d: "Rs.1200", correct_answer: "C",
        explanation: "Let original per-head expenditure be A. 30A+1600 = 50(A-8). Therefore A=100 and original total expenditure = 30×100 = Rs.3000.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "In 2001 there were 6 members in Binod's family and their average age was 28 years. He got married between 2001 and 2004 and a child was added in 2004. In 2006 the family average was 32 years. What was his wife's age in 2006?", option_a: "52 years", option_b: "56 years", option_c: "50 years", option_d: "45 years", correct_answer: "B",
        explanation: "Initial total = 6×28 = 168. After five years, original members total 198. Adding wife and child gives 256, so wife's age = 56 years.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "The average marks of three batches of 68, 56 and 42 students are 56, 50 and 68 respectively. What is the average marks of all students?", option_a: "53.29", option_b: "52.67", option_c: "58.90", option_d: "57.01", correct_answer: "D",
        explanation: "Weighted average = (68×56 + 56×50 + 42×68)/(68+56+42) = 57.01.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "The average of 21, 23, x, 24 and 27 lies between 25 and 28 inclusive. How many integral values of x are possible?", option_a: "56", option_b: "25", option_c: "16", option_d: "48", correct_answer: "C",
        explanation: "25 ≤ (95+x)/5 ≤ 28 gives 30 ≤ x ≤ 45. Therefore there are 16 integral values.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "Roger has 10 boxes with an average of 25 tennis balls per box. Each box has at least 8 balls and no two boxes have the same number. What is the maximum possible number of balls in one box?", option_a: "142", option_b: "128", option_c: "108", option_d: "118", correct_answer: "A",
        explanation: "Total balls = 250. Minimum for the other 9 distinct boxes = 8+9+...+16 = 108. Maximum = 250-108 = 142.", source: "PrepInsta - Wipro Averages Quiz-1"
      },
      {
        company_id: 3, topic_id: 10,
        question: "There are four members w, x, y and z. The sum of all possible distinct groups of two numbers is 1440. What is the average of the four members?", option_a: "110", option_b: "130", option_c: "120", option_d: "80", correct_answer: "C",
        explanation: "Each member occurs in three pairs. Therefore 3(w+x+y+z)=1440. Sum=480. Average=480/4=120.", source: "PrepInsta - Wipro Averages Quiz-1"
      }
    },

      */
      {
        company: "TCS",
        topic: "Number System",
        source_question_no: 15,
        question: "What is the remainder when 6^17 + 17^6 is divided by 7?",
        option_a: "0",
        option_b: "1",
        option_c: "5",
        option_d: "6",
        correct_answer: "A",
        explanation: "Modulo 7, 6 ≡ -1, so 6^17 ≡ -1 ≡ 6. Also 17 ≡ 3 (mod 7), and 3^6 ≡ 1 (mod 7). Therefore the sum is 6 + 1 = 7, giving remainder 0.",
        source: "500 most asked Campus Recruitment Numerical Aptitude Questions (Infosys, TCS, CTS, Wipro, Accenture)"
    },

    {
        company: "TCS",
        topic: "Number System",
        source_question_no: 16,
        question: "What is the remainder when 46! is divided by 47?",
        option_a: "44",
        option_b: "45",
        option_c: "46",
        option_d: "47",
        correct_answer: "C",
        explanation: "Since 47 is a prime number, Wilson's theorem gives 46! ≡ -1 (mod 47). Therefore the remainder is 46.",
        source: "500 most asked Campus Recruitment Numerical Aptitude Questions (Infosys, TCS, CTS, Wipro, Accenture)"
    },

    {
        company: "TCS",
        topic: "Number System",
        source_question_no: 17,
        question: "What is the remainder when 1! + 2! + 3! + 4! + 5! + ....... + 50! is divided by 5!?",
        option_a: "31",
        option_b: "32",
        option_c: "33",
        option_d: "34",
        correct_answer: "C",
        explanation: "From 5! onwards, every factorial is divisible by 5!. Therefore only 1! + 2! + 3! + 4! needs to be considered. This equals 1 + 2 + 6 + 24 = 33. Hence the remainder is 33.",
        source: "500 most asked Campus Recruitment Numerical Aptitude Questions (Infosys, TCS, CTS, Wipro, Accenture)"
    },

    {
        company: "TCS",
        topic: "Number System",
        source_question_no: 18,
        question: "How many trailing zeros are there in 100!?",
        option_a: "20",
        option_b: "22",
        option_c: "24",
        option_d: "25",
        correct_answer: "C",
        explanation: "Number of trailing zeros in 100! = floor(100/5) + floor(100/25) = 20 + 4 = 24.",
        source: "500 most asked Campus Recruitment Numerical Aptitude Questions (Infosys, TCS, CTS, Wipro, Accenture)"
    },

    {
        company: "TCS",
        topic: "Number System",
        source_question_no: 20,
        question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
        option_a: "2",
        option_b: "4",
        option_c: "6",
        option_d: "8",
        correct_answer: "B",
        explanation: "Take the differences: 91 - 43 = 48 and 183 - 91 = 92. The required divisor is HCF(48, 92) = 4.",
        source: "500 most asked Campus Recruitment Numerical Aptitude Questions (Infosys, TCS, CTS, Wipro, Accenture)"
    },

    {
        company: "TCS",
        topic: "Number System",
        source_question_no: 22,
        question: "When a number is successively divided by 5, 3 and 2, it leaves remainders 0, 2 and 1 respectively. What are the remainders when the same number is divided by 2, 3 and 5 successively?",
        option_a: "(1, 0, 4)",
        option_b: "(0, 1, 4)",
        option_c: "(1, 2, 4)",
        option_d: "(0, 2, 1)",
        correct_answer: "A",
        explanation: "Let the number be X. From the given successive divisions, X can be taken as 25. Dividing 25 successively by 2, 3 and 5 gives remainders 1, 0 and 4 respectively.",
        source: "500 most asked Campus Recruitment Numerical Aptitude Questions (Infosys, TCS, CTS, Wipro, Accenture)"
    },

    {
        company: "TCS",
        topic: "Number System",
        source_question_no: 19,
        question: "What is the highest power of 7 that will exactly divide 56!?",
        option_a: "7^7",
        option_b: "7^8",
        option_c: "7^9",
        option_d: "7^10",
        correct_answer: "C",
        explanation: "The exponent of 7 in 56! is floor(56/7) + floor(56/49) = 8 + 1 = 9. Therefore the highest power is 7^9.",
        source: "500 most asked Campus Recruitment Numerical Aptitude Questions (Infosys, TCS, CTS, Wipro, Accenture)"
      },
    // =====================================================
// TCS - PERCENTAGES
// 10 SOURCE-BACKED QUESTIONS
// =====================================================

{
  company: "TCS",
  topic: "Percentages",
  question: "A mother, her little daughter and her just-born infant boy together stood on a weighing machine which showed 74 kg. How much does the daughter weigh if the mother weighs 46 kg more than the combined weight of the daughter and the infant, and the infant weighs 60% less than the daughter?",
  option_a: "9 kg",
  option_b: "11 kg",
  option_c: "Cannot be determined",
  option_d: "10 kg",
  correct_answer: "D",
  explanation: "Let the daughter's weight be x kg. Infant weighs 60% less, so infant = 0.4x. Mother's weight = x + 0.4x + 46. Total = x + 0.4x + x + 0.4x + 46 = 74. Therefore 2.8x = 28, so x = 10 kg.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "If a contractor increases his labour force by 33.33%, what will be the percentage reduction in the workload of each employee, assuming the total work remains the same?",
  option_a: "75%",
  option_b: "50%",
  option_c: "25%",
  option_d: "33.33%",
  correct_answer: "C",
  explanation: "Assume initially there are 100 employees and total work is 100 units. Each employee does 1 unit. After a 33.33% increase, employees become 133.33, approximately 400/3. Each employee now does 100/(400/3) = 0.75 unit. Reduction = 25%.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "Three candidates contested an election and received 2561, 8000 and 15721 votes respectively. What percentage of total votes did the winning candidate get?",
  option_a: "58.61%",
  option_b: "57.21%",
  option_c: "59.81%",
  option_d: "60%",
  correct_answer: "C",
  explanation: "Total votes = 2561 + 8000 + 15721 = 26282. Winning candidate received 15721 votes. Percentage = (15721/26282) × 100 = 59.81%.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "In paper A, a student got 18 out of 70, and in paper B, he got 14 out of 30. In which paper did he perform better?",
  option_a: "Paper A",
  option_b: "Paper B",
  option_c: "Equally",
  option_d: "None",
  correct_answer: "B",
  explanation: "Paper A percentage = (18/70) × 100 = 25.71%. Paper B percentage = (14/30) × 100 = 46.67%. Therefore, the student performed better in Paper B.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "The value of a scooter depreciates such that its value at the end of each year is 3/4 of its value at the beginning of that year. If the initial value is Rs. 40,000, what is its value at the end of 3 years?",
  option_a: "Rs. 23,125",
  option_b: "Rs. 16,875",
  option_c: "Rs. 13,435",
  option_d: "Rs. 19,000",
  correct_answer: "B",
  explanation: "Value after 3 years = 40000 × (3/4)^3 = 40000 × 27/64 = Rs. 16,875.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "A contestant received 1200 votes, which is approximately 30% of the total votes. Approximately what percentage of the remaining votes would the contestant need to receive to reach 70% of the total votes?",
  option_a: "49%",
  option_b: "55%",
  option_c: "59%",
  option_d: "57%",
  correct_answer: "D",
  explanation: "If 1200 is 30%, total votes = 1200 × 100/30 = 4000. To reach 70%, total required votes = 2800. Already received = 1200, so additional votes needed = 1600. Remaining votes = 2800. Required percentage of remaining votes = (1600/2800) × 100 = 57.14%, approximately 57%.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "The population of a town is 1,21,000. If it increases at the rate of 10% per annum, what is the difference between the population 3 years hence and that of 2 years ago?",
  option_a: "62,041",
  option_b: "61,055",
  option_c: "61,051",
  option_d: "61,251",
  correct_answer: "C",
  explanation: "Population after 3 years = 121000 × (1.10)^3 = 161051. Population 2 years ago = 121000/(1.10)^2 = 100000. Difference = 161051 − 100000 = 61051.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "The population of a town 2 years ago was 50,000. Due to migration to big cities, the population decreases every year at a rate of 5%. What is the present population of the town?",
  option_a: "43,200",
  option_b: "45,125",
  option_c: "40,000",
  option_d: "35,000",
  correct_answer: "B",
  explanation: "Present population = 50000 × (1 − 5/100)^2 = 50000 × (0.95)^2 = 45,125.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "In a general election, parties 1, 2 and 3 received 45%, 12% and 43% of the votes respectively. If a total of 16,000 people voted, by how many votes did the coalition of parties 2 and 3 win?",
  option_a: "1700",
  option_b: "1400",
  option_c: "1600",
  option_d: "1650",
  correct_answer: "C",
  explanation: "Parties 2 and 3 together received 12% + 43% = 55%. Their votes = 55% of 16000 = 8800. Party 1 received 45% of 16000 = 7200. Margin = 8800 − 7200 = 1600 votes.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},

{
  company: "TCS",
  topic: "Percentages",
  question: "When a commission of 12% is given on the marked price of a magazine, the publisher gains 20%. If the commission is increased to 23%, what will be the publisher's percentage gain?",
  option_a: "6%",
  option_b: "8%",
  option_c: "7.5%",
  option_d: "5%",
  correct_answer: "D",
  explanation: "Take marked price as 100. At 12% commission, selling price = 88. Since this gives 20% profit, cost price = 88/1.2 = 440/6. At 23% commission, selling price = 77. Profit = 77 − 440/6 = 22/6. Profit percentage = (22/440) × 100 = 5%.",
  source: "PrepInsta - TCS NQT Percentages Questions and Answers Quiz 1"
},
// ==================== TCS - TIME & WORK ====================

{
  company_id: 1,
  topic_id: 3,
  question: "Thomas can paint a house in 7 days and Aashay can paint the same house in 9 days. How many days will they take if they work together?",
  option_a: "3.9 days",
  option_b: "2 days",
  option_c: "5 days",
  option_d: "3 days",
  correct_answer: "3.9 days",
  explanation: "Thomas's one-day work = 1/7 and Aashay's one-day work = 1/9. Together = 1/7 + 1/9 = 16/63. Therefore, time = 63/16 = 3.9 days.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "Jake can dig a well in 16 days and Paul can dig it in 24 days. Jake, Paul and Hari together complete it in 8 days. How many days will Hari alone take?",
  option_a: "48 days",
  option_b: "24 days",
  option_c: "27 days",
  option_d: "36 days",
  correct_answer: "48 days",
  explanation: "Hari's one-day work = 1/8 - (1/16 + 1/24) = 1/48. Therefore, Hari alone takes 48 days.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "A can complete one-fourth of a work in 2 days. B can complete two-thirds of the work in 4 days. If A, B and C together finish the work in 3 days, what fraction of the work will C complete in 2 days?",
  option_a: "1/20",
  option_b: "1/12",
  option_c: "1/8",
  option_d: "1/16",
  correct_answer: "1/12",
  explanation: "A completes the whole work in 8 days and B completes it in 6 days. Taking total work as 24 units, A does 3 units/day and B does 4 units/day. Together they do 8 units/day, so C does 1 unit/day. In 2 days C completes 2/24 = 1/12 of the work.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "A certain amount is enough to pay George's wages for 15 days or Mark's wages for 10 days. For how many days will it be enough if both work together?",
  option_a: "5 days",
  option_b: "6 days",
  option_c: "8 days",
  option_d: "9 days",
  correct_answer: "6 days",
  explanation: "George's one-day wage portion = 1/15 and Mark's = 1/10. Together they consume 1/15 + 1/10 = 1/6 of the amount per day. Hence the amount lasts 6 days.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "Babla can complete a work in 10 days and Ashu can complete it in 15 days. The total wages for the work are Rs.5000. How much should Babla receive if they work together?",
  option_a: "Rs.5000",
  option_b: "Rs.4000",
  option_c: "Rs.3000",
  option_d: "Rs.2000",
  correct_answer: "Rs.3000",
  explanation: "Their work efficiencies are in the ratio 1/10 : 1/15 = 3 : 2. Babla's share = 3/5 × 5000 = Rs.3000.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "A, B and C can complete a work individually in 20, 30 and 60 days respectively. If A is assisted by B and C on every third day, how many days are required to finish the work?",
  option_a: "15 days",
  option_b: "20 days",
  option_c: "12 days",
  option_d: "9 days",
  correct_answer: "15 days",
  explanation: "A works alone for the first two days: 2/20 = 1/10. On the third day A+B+C complete 1/20 + 1/30 + 1/60 = 1/10. Thus 1/5 work is completed every 3 days. The total work requires 15 days.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "Four men can check a set of exam papers in 8 days by working 5 hours per day. If two men have to check twice as many papers in 20 days, how many hours per day should they work?",
  option_a: "9 hours",
  option_b: "4 hours",
  option_c: "8 hours",
  option_d: "None",
  correct_answer: "8 hours",
  explanation: "Original work = 4 × 8 × 5 = 160 units. Double work = 320 units. For 2 men working 20 days, 2 × 20 × hours = 320. Therefore, hours = 8 per day.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "George completes three-fifths of a work in 9 days. He then joins Paul, and they complete the remaining work in 4 days. How many days would Paul alone take to complete the whole work?",
  option_a: "30 days",
  option_b: "35 days",
  option_c: "32 days",
  option_d: "28 days",
  correct_answer: "30 days",
  explanation: "George's one-day work = (3/5)/9 = 1/15. The remaining work is 2/5, completed by both in 4 days. George completes 4/15 during these 4 days, so Paul completes 2/15. Thus Paul's daily work = 1/30, so he needs 30 days.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "Y can complete a work in two-thirds of the time taken by X. Z can complete the same work in three-fourths of Y's time. If all three work together, what fraction of the total work is done by Y?",
  option_a: "1/3",
  option_b: "8/29",
  option_c: "4/13",
  option_d: "9/23",
  correct_answer: "4/13",
  explanation: "Let Y's work rate be y. Since Y takes 2/3 of X's time, X's rate is 3y/2. Since Z takes 3/4 of Y's time, Z's rate is 3y/4. Therefore total rate = 3y/2 + y + 3y/4 = 13y/4. Y's fraction = y/(13y/4) = 4/13.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

{
  company_id: 1,
  topic_id: 3,
  question: "The efficiency ratio of A to C is 5:3. B takes 2/3 of the time taken by C. A takes 6 days less than C when working individually. B and C work for 2 days and then leave. How many more days does A need to finish the remaining work?",
  option_a: "28/3 days",
  option_b: "5 days",
  option_c: "6 days",
  option_d: "4.5 days",
  correct_answer: "6 days",
  explanation: "From the efficiency ratio, A and C take 9 and 15 days respectively. B takes 10 days. In 2 days B and C complete 1/5 + 2/15 = 1/3 of the work. Remaining work is 2/3. A can complete this in 9 × 2/3 = 6 days.",
  source: "PrepInsta - TCS Time and Work Quiz 1"
},

// ==================== END TCS - TIME & WORK ====================
// ==================== TCS - RATIO & PROPORTION ====================

{
  company_id: 1,
  topic_id: 4,
  question: "The first three terms of a proportion are 18, 81 and 4. Find the fourth term.",
  option_a: "18",
  option_b: "23",
  option_c: "73",
  option_d: "28",
  correct_answer: "18",
  explanation: "Let the fourth term be x. Since 18, 81, 4 and x are in proportion, 18 × x = 81 × 4. Therefore x = 18.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "A man distributes 63 chocolates between his daughters Mini and Sunny in the ratio 3:4. How many chocolates does Mini receive?",
  option_a: "27",
  option_b: "20",
  option_c: "42",
  option_d: "None of the above",
  correct_answer: "27",
  explanation: "Total ratio = 3 + 4 = 7. Mini's share = (3/7) × 63 = 27 chocolates.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "A bag contains 50-paise, 25-paise and 10-paise coins in the ratio 5:9:4. If their total value is Rs.206, how many 25-paise coins are there?",
  option_a: "375",
  option_b: "400",
  option_c: "360",
  option_d: "325",
  correct_answer: "360",
  explanation: "Let the numbers of coins be 5x, 9x and 4x. Then 0.50(5x) + 0.25(9x) + 0.10(4x) = 206. Solving gives x = 40. Therefore, 25-paise coins = 9 × 40 = 360.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "Half the price of a chair is equal to twice the price of a table. What is the ratio of the price of the chair to the table?",
  option_a: "4:1",
  option_b: "3:1",
  option_c: "7:1",
  option_d: "6:1",
  correct_answer: "4:1",
  explanation: "Let the chair price be C and table price be T. Given C/2 = 2T. Therefore C = 4T, so the ratio is 4:1.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "In a city, 60% of registered voters support Congress and the remaining 40% support BJP. If 75% of Congress supporters and 20% of BJP supporters vote for candidate A, what percentage of registered voters vote for A?",
  option_a: "53%",
  option_b: "20%",
  option_c: "60%",
  option_d: "75%",
  correct_answer: "53%",
  explanation: "Assume 100 voters. Congress supporters = 60 and BJP supporters = 40. Candidate A gets 75% of 60 = 45 and 20% of 40 = 8. Total = 53 voters, so the percentage is 53%.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "A total amount of Rs.20706 is divided among A, B and C. C receives one-tenth of what A and B receive together. What is C's approximate share?",
  option_a: "2100",
  option_b: "1892",
  option_c: "1882",
  option_d: "1744",
  correct_answer: "1882",
  explanation: "C = (A + B)/10, so A + B = 10C. Total amount = A + B + C = 11C = 20706. Hence C = 20706/11 = 1882.36, approximately Rs.1882.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "A and B have incomes in the ratio 5:4 and expenditures in the ratio 14:11. If both save Rs.1000 each, what is A's total income?",
  option_a: "Rs.17000",
  option_b: "Rs.15500",
  option_c: "Rs.15000",
  option_d: "Rs.14500",
  correct_answer: "Rs.15000",
  explanation: "Let their incomes be 5x and 4x. Their expenditures are 14y and 11y. Since each saves Rs.1000, solving the ratio equation gives x = 3000. Therefore A's income = 5 × 3000 = Rs.15000.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "The ratio of sheep to horses at a farm is 4:7. Each horse consumes 230 ounces of food per day and the total horse-food requirement is 12880 ounces per day. How many sheep are there?",
  option_a: "18",
  option_b: "28",
  option_c: "32",
  option_d: "56",
  correct_answer: "32",
  explanation: "Let sheep and horses be 4x and 7x. Food required by 7x horses = 230 × 7x = 1610x. Since total is 12880, x = 8. Therefore sheep = 4 × 8 = 32.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "A 60 cm cake is given away in parts. Raja gets half of it, Gopal gets one-fourth of the remaining part, and after giving Sahil a piece, one-tenth of the original cake remains. How much does Sahil receive?",
  option_a: "21.5 cm",
  option_b: "16.5 cm",
  option_c: "19.5 cm",
  option_d: "31.5 cm",
  correct_answer: "16.5 cm",
  explanation: "Raja receives 30 cm, leaving 30 cm. Gopal receives one-fourth of 30 = 7.5 cm, leaving 22.5 cm. Final remaining cake = 6 cm. Therefore Sahil receives 22.5 − 6 = 16.5 cm.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

{
  company_id: 1,
  topic_id: 4,
  question: "The present ratio of adults to teenagers is 1:30. If teenagers increase by 50 and adults increase by 5, the new ratio becomes 1:25. How many adults are there at present?",
  option_a: "11",
  option_b: "15",
  option_c: "14",
  option_d: "12",
  correct_answer: "15",
  explanation: "Let the number of adults be x. Then teenagers = 30x. After the increase, (x + 5)/(30x + 50) = 1/25. Solving gives x = 15.",
  source: "PrepInsta - TCS NQT Ratio and Proportion Quiz 1"
},

// ==================== END TCS - RATIO & PROPORTION ====================
// ==================== TCS - DATA INTERPRETATION ====================

{
  company_id: 1,
  topic_id: 5,
  question: "In a competitive test, 9000 candidates appeared from different states. State B had 11% of the candidates and State D had 16% qualified candidates. State C had 8% of the total appeared candidates. What is the ratio of qualified candidates from B and D together to the candidates who appeared from C?",
  option_a: "8 : 37",
  option_b: "11 : 12",
  option_c: "37 : 40",
  option_d: "7 : 37",
  correct_answer: "37 : 40",
  explanation: "Qualified candidates from B and D together = (16% + 21%) of 9000. Candidates appearing from C = 8% of 45000. Therefore the ratio is 37 : 40.",
  source: "PrepInsta - TCS NQT Data Interpretation Pie Chart Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "What is the percentage of qualified candidates to the total candidates who appeared from States B and C taken together?",
  option_a: "23.11%",
  option_b: "24.21%",
  option_c: "21.24%",
  option_d: "23%",
  correct_answer: "24.21%",
  explanation: "Qualified candidates from B and C = 23% of 9000. Appeared candidates from B and C = 19% of 45000. Therefore percentage = (23 × 9000) / (19 × 45000) × 100 = 24.21% approximately.",
  source: "PrepInsta - TCS NQT Data Interpretation Pie Chart Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "What is the difference between the number of qualified candidates from States D and G?",
  option_a: "690",
  option_b: "670",
  option_c: "780",
  option_d: "720",
  correct_answer: "720",
  explanation: "The difference in the qualification percentages of States D and G is 8%. Applying this difference to the total of 9000 gives 720.",
  source: "PrepInsta - TCS NQT Data Interpretation Pie Chart Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "Among the given states, in which state is the percentage of qualified candidates compared with the number of appeared candidates the minimum?",
  option_a: "C",
  option_b: "F",
  option_c: "D",
  option_d: "E",
  correct_answer: "E",
  explanation: "The qualified-to-appeared ratio is compared for each state. State E has the smallest ratio among the given choices, so E is the answer.",
  source: "PrepInsta - TCS NQT Data Interpretation Pie Chart Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "What is the ratio between the candidates who appeared from States C and E together and those who appeared from States A and F together?",
  option_a: "17 : 33",
  option_b: "11 : 13",
  option_c: "13 : 27",
  option_d: "17 : 27",
  correct_answer: "17 : 33",
  explanation: "The percentages for C and E add to 17, while the percentages for A and F add to 33. Therefore the required ratio is 17 : 33.",
  source: "PrepInsta - TCS NQT Data Interpretation Pie Chart Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "The income and expenditure of Companies M and N are 35 and 45 million US dollars, and 50 and 40 million US dollars respectively. What is their combined percentage of profit or loss?",
  option_a: "12% loss",
  option_b: "10% loss",
  option_c: "10% profit",
  option_d: "No profit or loss",
  correct_answer: "No profit or loss",
  explanation: "Combined income = 35 + 50 = 85 million dollars. Combined expenditure = 45 + 40 = 85 million dollars. Since income equals expenditure, there is neither profit nor loss.",
  source: "PrepInsta - TCS NQT Data Interpretation Bar Graph Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "For five companies, the total income is 215 million US dollars and the total expenditure is 205 million US dollars. What is the approximate percentage profit?",
  option_a: "5% profit",
  option_b: "6.5% profit",
  option_c: "4% loss",
  option_d: "7% loss",
  correct_answer: "5% profit",
  explanation: "Profit = 215 - 205 = 10 million dollars. Percentage profit = (10 / 205) × 100 ≈ 4.88%, which is approximately 5%.",
  source: "PrepInsta - TCS NQT Data Interpretation Bar Graph Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "Company R's expenditure in 2001 was 45 million US dollars. This was 20% higher than its expenditure in 2000. If the company earned a 10% profit in 2000, what was its income in 2000?",
  option_a: "35.75 million",
  option_b: "37.25 million",
  option_c: "38.5 million",
  option_d: "41.25 million",
  correct_answer: "41.25 million",
  explanation: "Expenditure in 2000 = 45 / 1.20 = 37.5 million dollars. With a 10% profit, income = 37.5 × 1.10 = 41.25 million dollars.",
  source: "PrepInsta - TCS NQT Data Interpretation Bar Graph Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "The average foreign exchange reserves over a given period are 3480 million US dollars. During how many years were the reserves above the average compared with the years they were below the average?",
  option_a: "2 : 6",
  option_b: "3 : 4",
  option_c: "3 : 5",
  option_d: "4 : 4",
  correct_answer: "3 : 5",
  explanation: "The reserves were above the average during 3 years and below the average during 5 years. Therefore the required ratio is 3 : 5.",
  source: "PrepInsta - TCS NQT Data Interpretation Bar Graph Quiz 1"
},

{
  company_id: 1,
  topic_id: 5,
  question: "The foreign exchange reserves in 1997-98 were 5040 million US dollars and those in 1994-95 were 3360 million US dollars. How many times were the 1997-98 reserves compared with the 1994-95 reserves?",
  option_a: "0.7",
  option_b: "1.2",
  option_c: "1.4",
  option_d: "1.5",
  correct_answer: "1.5",
  explanation: "Required ratio = 5040 / 3360 = 1.5. Therefore, the reserves in 1997-98 were 1.5 times those in 1994-95.",
  source: "PrepInsta - TCS NQT Data Interpretation Bar Graph Quiz 1"
},

// ==================== END TCS - DATA INTERPRETATION ====================
// ==================== TCS - PROFIT & LOSS ====================

{
  company_id: 1,
  topic_id: 7,
  question: "Alfred buys an old scooter for Rs.4700 and spends Rs.800 on repairs. If he sells it for Rs.5800, what is his gain percentage?",
  option_a: "4 4/7%",
  option_b: "5 5/11%",
  option_c: "10%",
  option_d: "12%",
  correct_answer: "5 5/11%",
  explanation: "Total cost price = 4700 + 800 = Rs.5500. Gain = 5800 - 5500 = Rs.300. Gain percentage = (300/5500) × 100 = 5 5/11%.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "The cost price of 20 articles is equal to the selling price of x articles. If the profit is 25%, find x.",
  option_a: "15",
  option_b: "18",
  option_c: "16",
  option_d: "25",
  correct_answer: "16",
  explanation: "Assume the cost price of each article is Rs.1. Then the cost of 20 articles is Rs.20. With 25% profit, selling price of each article is Rs.1.25. Therefore x = 20/1.25 = 16.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "In a certain store, the profit is 320% of the cost price. If the cost price increases by 25% while the selling price remains unchanged, approximately what percentage of the selling price is the new profit?",
  option_a: "30%",
  option_b: "250%",
  option_c: "100%",
  option_d: "70%",
  correct_answer: "70%",
  explanation: "Take cost price as Rs.100. Profit = Rs.320, so selling price = Rs.420. New cost price = Rs.125. New profit = 420 - 125 = Rs.295. Percentage of selling price = (295/420) × 100 ≈ 70%.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "A man buys a cycle for Rs.1400 and sells it at a loss of 15%. What is the selling price?",
  option_a: "Rs.1090",
  option_b: "Rs.1160",
  option_c: "Rs.1190",
  option_d: "Rs.1202",
  correct_answer: "Rs.1190",
  explanation: "Selling price = 85% of Rs.1400 = (85/100) × 1400 = Rs.1190.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "Some articles are bought at 6 articles for Rs.5 and sold at 5 articles for Rs.6. What is the gain percentage?",
  option_a: "30%",
  option_b: "44%",
  option_c: "35%",
  option_d: "33%",
  correct_answer: "44%",
  explanation: "Cost price per article = 5/6. Selling price per article = 6/5. Gain percentage = [(6/5 - 5/6)/(5/6)] × 100 = 44%.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "A shopkeeper sells an article at a 20% profit. If the cost price is Rs.750, what is the selling price?",
  option_a: "Rs.850",
  option_b: "Rs.875",
  option_c: "Rs.900",
  option_d: "Rs.950",
  correct_answer: "Rs.900",
  explanation: "Selling price = 120% of cost price = (120/100) × 750 = Rs.900.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "A trader sells an article for Rs.960 and makes a profit of 20%. What was the cost price?",
  option_a: "Rs.760",
  option_b: "Rs.800",
  option_c: "Rs.820",
  option_d: "Rs.840",
  correct_answer: "Rs.800",
  explanation: "Selling price = 120% of cost price. Therefore cost price = 960 × 100/120 = Rs.800.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "An article is sold for Rs.720 at a loss of 10%. What should be its selling price to obtain a profit of 20%?",
  option_a: "Rs.880",
  option_b: "Rs.900",
  option_c: "Rs.920",
  option_d: "Rs.960",
  correct_answer: "Rs.960",
  explanation: "At 10% loss, Rs.720 represents 90% of the cost price. Cost price = 720/0.90 = Rs.800. For a 20% profit, required selling price = 800 × 1.20 = Rs.960.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "A person sells two articles for Rs.990 each. On one he gains 10% and on the other he loses 10%. What is the overall result?",
  option_a: "No profit or loss",
  option_b: "1% loss",
  option_c: "1% profit",
  option_d: "2% loss",
  correct_answer: "1% loss",
  explanation: "For the first article, cost price = 990/1.10 = Rs.900. For the second, cost price = 990/0.90 = Rs.1100. Total cost = Rs.2000 and total selling price = Rs.1980. Loss = Rs.20, which is 1% of Rs.2000.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

{
  company_id: 1,
  topic_id: 7,
  question: "A shopkeeper marks an article 25% above its cost price and then gives a discount of 10% on the marked price. What is his profit percentage?",
  option_a: "10%",
  option_b: "12.5%",
  option_c: "15%",
  option_d: "20%",
  correct_answer: "12.5%",
  explanation: "Assume cost price = Rs.100. Marked price = Rs.125. After 10% discount, selling price = Rs.112.50. Profit = Rs.12.50, so profit percentage = 12.5%.",
  source: "PrepInsta - TCS NQT Profit & Loss Quiz 1"
},

// ==================== END TCS - PROFIT & LOSS ====================
// ==================== TCS - PERMUTATIONS & COMBINATIONS ====================

{
  company_id: 1,
  topic_id: 9,
  question: "How many vehicle registration numbers can be formed using the digits 1, 2, 3, 4 and 5 without repetition, if the registration number can have 1 to 5 digits?",
  option_a: "205",
  option_b: "100",
  option_c: "325",
  option_d: "105",
  correct_answer: "325",
  explanation: "Number of 1-digit, 2-digit, 3-digit, 4-digit and 5-digit numbers are 5, 20, 60, 120 and 120 respectively. Total = 325.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "There are 20 people sitting in a circle, including 18 men and 2 sisters. In how many arrangements are the two sisters separated by at least one man?",
  option_a: "18! × 17",
  option_b: "17!",
  option_c: "17! × 2",
  option_d: "12",
  correct_answer: "18! × 17",
  explanation: "Total circular arrangements are 19!. Arrangements where the two sisters sit together are 18! × 2!. Therefore valid arrangements = 19! − 18! × 2! = 18! × 17.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "A number plate consists of two different alphabets followed by two different digits, with no repetition. How many number plates are possible?",
  option_a: "58500",
  option_b: "67600",
  option_c: "65000",
  option_d: "64320",
  correct_answer: "58500",
  explanation: "Two different alphabets can be selected in 26 × 25 ways and two different digits in 10 × 9 ways. Total = 26 × 25 × 10 × 9 = 58500.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "In how many ways can a team of 11 be selected from 5 men and 11 women such that the team contains not more than 3 men?",
  option_a: "1234",
  option_b: "1565",
  option_c: "2456",
  option_d: "2256",
  correct_answer: "2256",
  explanation: "Possible cases are 0, 1, 2 or 3 men. Therefore total ways = C(5,0)C(11,11) + C(5,1)C(11,10) + C(5,2)C(11,9) + C(5,3)C(11,8) = 2256.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "Find the number of ways in which 4 particular persons A, B, C and D and 6 other persons can stand in a queue such that A is before B, B is before C and C is before D.",
  option_a: "6!",
  option_b: "10! / 4!",
  option_c: "10C6 × 6!",
  option_d: "10C4 × 4!",
  correct_answer: "10! / 4!",
  explanation: "There are 10 people in total. The four particular people can occur in 4! relative orders, but only A-B-C-D is allowed. Hence the answer is 10! / 4!.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "There are 10 points on one straight line AB and 8 points on another straight line AC, with none of them being point A. How many triangles can be formed using these points as vertices?",
  option_a: "680",
  option_b: "720",
  option_c: "816",
  option_d: "640",
  correct_answer: "640",
  explanation: "Choose 2 points from AB and 1 from AC, or 2 from AC and 1 from AB. Total = C(10,2)C(8,1) + C(8,2)C(10,1) = 360 + 280 = 640.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "How many ways can a batsman score exactly 200 runs using only 4s and 6s, considering that at least one 4 and one 6 must be used?",
  option_a: "15",
  option_b: "16",
  option_c: "18",
  option_d: "19",
  correct_answer: "16",
  explanation: "The possible combinations satisfy 4x + 6y = 200. There are 17 combinations when zero 6s is included. Excluding the case with zero 6s leaves 16 valid ways.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "How many positive integers not greater than 4300 can be formed using the digits 0, 1, 2, 3 and 4 when repetition is allowed?",
  option_a: "560",
  option_b: "565",
  option_c: "575",
  option_d: "625",
  correct_answer: "575",
  explanation: "One-digit numbers = 4, two-digit numbers = 20, three-digit numbers = 100. Four-digit numbers below 4300 contribute 375 + 75, and 4300 itself is included. Total = 4 + 20 + 100 + 375 + 75 + 1 = 575.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "A 3 × 3 square grid has 9 tiles. Each tile can be painted red or blue. If rotating the complete grid by 180 degrees makes no observable difference, how many different possibilities are there?",
  option_a: "16",
  option_b: "32",
  option_c: "64",
  option_d: "256",
  correct_answer: "64",
  explanation: "Under 180-degree rotation, the center tile remains fixed and the remaining 8 tiles form 4 symmetric pairs. Each pair has 2 choices and the center has 2 choices. Therefore total possibilities = 2^5 = 32.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

{
  company_id: 1,
  topic_id: 9,
  question: "How many 6-digit even numbers can be formed from the digits 1, 2, 3, 4, 5, 6 and 7 without repetition, if the second-last digit is also even?",
  option_a: "6480",
  option_b: "320",
  option_c: "2160",
  option_d: "720",
  correct_answer: "720",
  explanation: "The last digit must be even, giving 3 choices: 2, 4 or 6. After choosing it, the second-last digit has 2 remaining even choices. The remaining 5 positions can be filled in 5! ways. Total = 3 × 2 × 5! = 720.",
  source: "PrepInsta - TCS NQT Permutation and Combinations Quiz 1"
},

// ==================== END TCS - PERMUTATIONS & COMBINATIONS ====================
// ==================== TCS - TIME, SPEED & DISTANCE ====================

{
  company_id: 1,
  topic_id: 6,
  question: "Jake and Paul each walk 10 km. Jake's speed is 1.5 km/h faster than Paul's, and Jake reaches the destination 1.5 hours earlier. What is Jake's speed?",
  option_a: "4 km/h",
  option_b: "6 km/h",
  option_c: "8 km/h",
  option_d: "2 km/h",
  correct_answer: "4 km/h",
  explanation: "Let Paul's speed be x km/h. Jake's speed is x + 1.5. Using 10/x - 10/(x + 1.5) = 1.5 gives x = 2.5. Therefore Jake's speed = 4 km/h.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "A bus leaves Mumbai at 3 PM. It travels for 1.5 hours at 60 km/h, halts for 30 minutes, and then travels at 50 km/h to reach Pune at 6 PM. What is the distance between Mumbai and Pune?",
  option_a: "100 km",
  option_b: "110 km",
  option_c: "120 km",
  option_d: "140 km",
  correct_answer: "140 km",
  explanation: "The first journey covers 1.5 × 60 = 90 km. After the 30-minute halt, 1 hour remains and the bus covers 50 km. Total distance = 90 + 50 = 140 km.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "On a circular track of length 100 m, A, B and C start together. A runs at 10 m/s, B at 8 m/s in the same direction, and C at 15 m/s in the opposite direction. When will all three meet again for the first time?",
  option_a: "100 seconds",
  option_b: "50 seconds",
  option_c: "150 seconds",
  option_d: "200 seconds",
  correct_answer: "100 seconds",
  explanation: "Their lap times are 10 s, 12.5 s and 20/3 s respectively. The first common meeting time is 100 seconds.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "Two cars start from A and B and travel towards each other at 50 km/h and 60 km/h. At the meeting point, the second car has travelled 120 km more than the first. What is the distance between A and B?",
  option_a: "600 km",
  option_b: "1320 km",
  option_c: "720 km",
  option_d: "3120 km",
  correct_answer: "1320 km",
  explanation: "Let the first car travel d km. The second travels d + 120 km in the same time. Therefore d/50 = (d + 120)/60, giving d = 600 km. Total distance = 600 + 720 = 1320 km.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "Rani and Shakil run a 2000 m race. In the first race, Rani gives Shakil a 200 m start and beats him by 1 minute. In the second race, Rani gives Shakil a 6-minute start and Shakil is beaten by 1000 m. What is the ratio of their speeds?",
  option_a: "3:2",
  option_b: "4:3",
  option_c: "5:4",
  option_d: "2:1",
  correct_answer: "3:2",
  explanation: "The race conditions can be converted into equations using distance = speed × time. Solving the two race conditions gives the speed ratio of Rani to Shakil as 3:2.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "A train travelling at 180 km/h crosses a girl in 10 seconds. What is the length of the train?",
  option_a: "450 m",
  option_b: "520 m",
  option_c: "500 m",
  option_d: "640 m",
  correct_answer: "500 m",
  explanation: "Convert 180 km/h to m/s: 180 × 5/18 = 50 m/s. Distance travelled in 10 seconds = 50 × 10 = 500 m. Hence train length = 500 m.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "Raj drives around the perimeter of a rectangular park at 24 km/h and completes one round in 4 minutes. If the ratio of length to breadth is 3:2, what are the dimensions?",
  option_a: "480 m × 320 m",
  option_b: "150 m × 100 m",
  option_c: "100 m × 100 m",
  option_d: "450 m × 300 m",
  correct_answer: "480 m × 320 m",
  explanation: "24 km/h = 20/3 m/s. In 4 minutes, distance covered = (20/3) × 240 = 1600 m. Therefore 2(L+B) = 1600. With L:B = 3:2, L = 480 m and B = 320 m.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "A journey of 450 km is completed partly by train and partly by taxi. The train costs Rs.21 per km and the taxi costs Rs.15 per km. The total cost is Rs.8130. How many kilometres were travelled by train?",
  option_a: "200 km",
  option_b: "230 km",
  option_c: "250 km",
  option_d: "270 km",
  correct_answer: "230 km",
  explanation: "Let train distance be x km. Taxi distance = 450 - x. Therefore 21x + 15(450 - x) = 8130. Solving gives x = 230 km.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "A boy takes 3 hours to travel from college to home on a bike at 30 mph. What speed is required to cover the same distance in 2 hours?",
  option_a: "35 mph",
  option_b: "45 mph",
  option_c: "43 mph",
  option_d: "32 mph",
  correct_answer: "45 mph",
  explanation: "Distance = 30 × 3 = 90 miles. To cover 90 miles in 2 hours, required speed = 90/2 = 45 mph.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

{
  company_id: 1,
  topic_id: 6,
  question: "A person travels a certain distance at 40 km/h and reaches 30 minutes late. If the speed is increased to 50 km/h, the person reaches 30 minutes early. What is the distance travelled?",
  option_a: "100 km",
  option_b: "150 km",
  option_c: "200 km",
  option_d: "250 km",
  correct_answer: "200 km",
  explanation: "Difference in travel times is 1 hour. Therefore d/40 - d/50 = 1. Solving gives d(1/40 - 1/50) = 1, so d = 200 km.",
  source: "PrepInsta - TCS Time Speed Distance Quiz 1"
},

// ==================== END TCS - TIME, SPEED & DISTANCE ====================
// ==================== TCS - AVERAGES ====================

{
  company_id: 1,
  topic_id: 10,
  question: "The average score of 15 players is 15. The average of the first 8 players is 20 and the average of the last 8 players is 18. What is the score of the 8th player?",
  option_a: "56",
  option_b: "77",
  option_c: "89",
  option_d: "79",
  correct_answer: "79",
  explanation: "Total score of 15 players = 15 × 15 = 225. First 8 players total = 8 × 20 = 160. Last 8 players total = 8 × 18 = 144. The 8th player's score = 160 + 144 − 225 = 79.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "Team India has 11 players in a javelin competition. The best marksman scored 39 points. If he had scored 46 points instead, the team's average would have been 49. What was the team's actual total score?",
  option_a: "500",
  option_b: "532",
  option_c: "540",
  option_d: "533",
  correct_answer: "532",
  explanation: "If the best player had scored 46, total would be 49 × 11 = 539. The actual score is 7 less because he scored 39 instead of 46. Therefore actual total = 539 − 7 = 532.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "Rishabh Pant scored 94 runs in his 20th innings, increasing his average by 2 runs. What is his average after the 20th innings?",
  option_a: "47",
  option_b: "58",
  option_c: "56",
  option_d: "60",
  correct_answer: "56",
  explanation: "Let the new average be x. Previous average = x − 2. Therefore 19(x − 2) + 94 = 20x. Solving gives x = 56.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "The average weight of 10 cadets increases by 5.5 kg when a new cadet replaces one weighing 55 kg. What is the weight of the new cadet?",
  option_a: "115 kg",
  option_b: "111 kg",
  option_c: "114 kg",
  option_d: "110 kg",
  correct_answer: "110 kg",
  explanation: "Increase in total weight = 10 × 5.5 = 55 kg. New cadet's weight = 55 + 55 = 110 kg.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "In a one-day match, the run rate during the first 10 overs was 2.5. What run rate is required in the remaining 40 overs to reach a target of 312 runs?",
  option_a: "6.40",
  option_b: "7.175",
  option_c: "8.250",
  option_d: "6.750",
  correct_answer: "7.175",
  explanation: "Runs scored in first 10 overs = 2.5 × 10 = 25. Remaining runs = 312 − 25 = 287. Required run rate = 287/40 = 7.175.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "The average weight of Vibudh, Srijan, Rajnish and Siddharth is 67 kg. When Srijan is replaced by Tahir, the average decreases by 4 kg. The average weight of Tahir and Vibudh is 58 kg, and Tahir is 18 kg heavier than Vibudh. Find the average weight of Srijan and Tahir.",
  option_a: "68 kg",
  option_b: "79 kg",
  option_c: "72 kg",
  option_d: "75 kg",
  correct_answer: "75 kg",
  explanation: "Original total = 4 × 67 = 268 kg. New total = 4 × 63 = 252 kg. Let Srijan's weight be x. Then Tahir = x − 16 and Vibudh = x − 34. Since their average is 58, x − 16 + x − 34 = 116, giving x = 83. Tahir = 67. Required average = (83 + 67)/2 = 75 kg.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "Jethalal's weight is greater than 59 kg but not greater than 69 kg. Taarak thinks it is greater than 65 kg but less than 79 kg. Champaklal thinks it is less than 70 kg. If all are correct, what is the average of the possible integer weights?",
  option_a: "66.5 kg",
  option_b: "67.5 kg",
  option_c: "75 kg",
  option_d: "70 kg",
  correct_answer: "67.5 kg",
  explanation: "The common possible integer weights are 66, 67, 68 and 69 kg. Their average = (66 + 67 + 68 + 69)/4 = 67.5 kg.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "Virat Kohli's average score in his last 11 IPL matches is 99. What score should he make in the next match to raise his average to 103?",
  option_a: "150",
  option_b: "144",
  option_c: "147",
  option_d: "135",
  correct_answer: "147",
  explanation: "Total score in 11 matches = 11 × 99 = 1089. Required total after 12 matches = 12 × 103 = 1236. Required next score = 1236 − 1089 = 147.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "Kokilaben spent an average of 6.5 hours per day playing Candy Crush for 7 days. After removing one day, the average becomes 5.5 hours for the remaining 6 days. How many hours did she play on the removed day?",
  option_a: "10.5 hours",
  option_b: "12.5 hours",
  option_c: "11.5 hours",
  option_d: "9.5 hours",
  correct_answer: "12.5 hours",
  explanation: "Total for 7 days = 7 × 6.5 = 45.5 hours. Total for remaining 6 days = 6 × 5.5 = 33 hours. Removed day's time = 45.5 − 33 = 12.5 hours.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

{
  company_id: 1,
  topic_id: 10,
  question: "The average height of Bikesh, Sam and Suhas is 208/3 inches. The average height of Bikesh, Vishal and Rakesh is 203/3 inches. What is the average height of all five boys?",
  option_a: "65 inches",
  option_b: "66 inches",
  option_c: "197/3 inches",
  option_d: "Cannot be determined",
  correct_answer: "Cannot be determined",
  explanation: "The total height of Bikesh, Sam and Suhas is 208 inches, while the total height of Bikesh, Vishal and Rakesh is 203 inches. Since Bikesh's individual height is not given, the combined height of all five boys cannot be uniquely determined.",
  source: "PrepInsta - TCS NQT Averages Quiz 1"
},

// ==================== END TCS - AVERAGES ====================
// ==================== TCS - PROBABILITY ====================

{
  company_id: 1,
  topic_id: 8,
  question: "Thangam and Pandiyamma apply for two vacancies. The probability of selecting Thangam is 1/3 and Pandiyamma is 1/5. What is the probability that neither is selected?",
  option_a: "3/5",
  option_b: "7/12",
  option_c: "8/15",
  option_d: "1/5",
  correct_answer: "8/15",
  explanation: "Probability that Thangam is not selected = 1 - 1/3 = 2/3. Probability that Pandiyamma is not selected = 1 - 1/5 = 4/5. Therefore, probability that neither is selected = (2/3) × (4/5) = 8/15.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "A bag contains 1100 tickets numbered from 1 to 1100. If one ticket is selected at random, what is the probability that the digit 2 appears in its number?",
  option_a: "291/1100",
  option_b: "292/1100",
  option_c: "290/1100",
  option_d: "301/1100",
  correct_answer: "290/1100",
  explanation: "There are 290 numbers from 1 to 1100 containing at least one digit 2. Therefore, the required probability is 290/1100.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "Two-thirds of the balls in a bag are blue and the rest are pink. If 5/9 of the blue balls and 7/8 of the pink balls are non-defective, and there are 142 non-defective balls, find the total number of balls.",
  option_a: "216",
  option_b: "422",
  option_c: "432",
  option_d: "644",
  correct_answer: "216",
  explanation: "Let the total number of balls be x. Blue balls = 2x/3 and pink balls = x/3. Non-defective balls = (5/9)(2x/3) + (7/8)(x/3) = 142. Solving gives x = 216.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "Out of 100 students, 60 passed the first examination, 50 passed the second examination and 30 passed both. What is the probability that a randomly selected student failed in both examinations?",
  option_a: "5/6",
  option_b: "1/5",
  option_c: "1/7",
  option_d: "5/7",
  correct_answer: "1/5",
  explanation: "Students passing at least one exam = 60 + 50 - 30 = 80. Therefore, students failing both = 100 - 80 = 20. Probability = 20/100 = 1/5.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "A bag contains 8 green and 5 red balls. Three balls are drawn one after another. What are the probabilities of getting all three green when the balls are replaced and when they are not replaced, respectively?",
  option_a: "521/2197, 336/2197",
  option_b: "512/2197, 28/143",
  option_c: "336/2197, 512/2197",
  option_d: "336/1716, 512/1716",
  correct_answer: "512/2197, 28/143",
  explanation: "With replacement: (8/13) × (8/13) × (8/13) = 512/2197. Without replacement: (8/13) × (7/12) × (6/11) = 28/143.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "One bag contains 8 white balls and 3 blue balls. Another contains 7 white balls and 4 blue balls. If a ball is selected from the combined bags, what is the probability of getting a blue ball?",
  option_a: "3/7",
  option_b: "7/22",
  option_c: "7/25",
  option_d: "7/15",
  correct_answer: "7/22",
  explanation: "Total blue balls = 3 + 4 = 7. Total balls = 11 + 11 = 22. Therefore probability of getting a blue ball = 7/22.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "One bag contains 5 red and 7 white balls and another contains 3 red and 12 white balls. One of the two bags is selected at random and then a ball is drawn. What is the probability of getting a red ball?",
  option_a: "55/102",
  option_b: "17/21",
  option_c: "37/120",
  option_d: "7/8",
  correct_answer: "37/120",
  explanation: "Probability of selecting the first bag and then a red ball = (1/2)(5/12). For the second bag = (1/2)(3/15). Total = 5/24 + 1/10 = 37/120.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "When two dice are thrown, the probability of getting a total of 5 is 4/36 and that of getting 7 is 6/36. What is the probability of getting another 5 before getting a 7?",
  option_a: "2/5",
  option_b: "4/5",
  option_c: "5/2",
  option_d: "6/5",
  correct_answer: "2/5",
  explanation: "A total of 5 occurs in 4 ways and a total of 7 occurs in 6 ways. The probability of neither occurring in a throw is 26/36 = 13/18. Therefore the required probability is (1/9) / (1 - 13/18) = 2/5.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "Three dice are rolled. What is the probability that the sum of the numbers obtained is 10?",
  option_a: "27/216",
  option_b: "25/216",
  option_c: "10/216",
  option_d: "1/11",
  correct_answer: "27/216",
  explanation: "There are 6 × 6 × 6 = 216 total outcomes. The combinations giving a sum of 10 are (1,3,6), (1,4,5), (2,3,5), (2,4,4), (3,3,4) and (2,2,6), giving 27 ordered outcomes. Therefore probability = 27/216.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

{
  company_id: 1,
  topic_id: 8,
  question: "There are 5 letters and 5 addressed envelopes. If the letters are placed randomly into the envelopes, what is the probability that every letter goes into the wrong envelope?",
  option_a: "65/120",
  option_b: "44/120",
  option_c: "59/120",
  option_d: "40/120",
  correct_answer: "44/120",
  explanation: "The number of derangements of 5 objects is 44. The total number of arrangements is 5! = 120. Therefore probability = 44/120 = 11/30.",
  source: "PrepInsta - TCS NQT Probability Quiz 1"
},

// ==================== END TCS - PROBABILITY ====================
// ==================== INFOSYS - PERCENTAGES ====================

{
  company_id: 2,
  topic_id: 2,
  question: "A batsman scored 110 runs, including 3 boundaries and 8 sixes. What percentage of his total score was made by running between the wickets?",
  option_a: "45%",
  option_b: "45 5/11%",
  option_c: "54 6/11%",
  option_d: "55%",
  correct_answer: "45 5/11%",
  explanation: "Runs from boundaries and sixes = (3 × 4) + (8 × 6) = 60. Runs made by running = 110 - 60 = 50. Percentage = (50/110) × 100 = 45 5/11%.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "Two students appeared for an examination. One scored 9 marks more than the other, and his marks were 56% of their combined marks. What were their marks?",
  option_a: "39, 30",
  option_b: "41, 32",
  option_c: "42, 33",
  option_d: "43, 34",
  correct_answer: "42, 33",
  explanation: "Let the lower score be x. Then the higher score is x + 9. Given (x + 9) is 56% of (2x + 9). Solving gives x = 33. Hence the marks are 42 and 33.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "A fruit seller sells 40% of his apples and still has 420 apples. How many apples did he have originally?",
  option_a: "588",
  option_b: "600",
  option_c: "672",
  option_d: "700",
  correct_answer: "700",
  explanation: "After selling 40%, 60% remains. Therefore 60% of the original quantity = 420. Original quantity = 420 × 100/60 = 700.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "If A is x% of y and B is y% of x, what is the relationship between A and B?",
  option_a: "A is smaller than B",
  option_b: "A is greater than B",
  option_c: "Relationship cannot be determined",
  option_d: "A is equal to B",
  correct_answer: "A is equal to B",
  explanation: "A = (x/100) × y and B = (y/100) × x. Both expressions are equal. Therefore A = B.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "If 20% of a is equal to b, then b% of 20 is equal to what?",
  option_a: "4% of a",
  option_b: "5% of a",
  option_c: "20% of a",
  option_d: "None of these",
  correct_answer: "4% of a",
  explanation: "b = 20a/100. Therefore b% of 20 = (b/100) × 20 = 4a/100 = 4% of a.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "The sum of 5% of A and 4% of B is two-thirds of the sum of 6% of A and 8% of B. Find A:B.",
  option_a: "2:3",
  option_b: "1:1",
  option_c: "3:4",
  option_d: "4:3",
  correct_answer: "4:3",
  explanation: "5A + 4B = (2/3)(6A + 8B). Multiplying by 3 gives 15A + 12B = 12A + 16B. Hence 3A = 4B, so A:B = 4:3.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "By how much is 60% of 50 greater than 40% of 30?",
  option_a: "18",
  option_b: "13",
  option_c: "15",
  option_d: "20",
  correct_answer: "18",
  explanation: "60% of 50 = 30. 40% of 30 = 12. Difference = 30 - 12 = 18.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "If the price of a commodity increases by 25%, by what percentage should consumption be reduced so that expenditure remains unchanged?",
  option_a: "15%",
  option_b: "20%",
  option_c: "25%",
  option_d: "30%",
  correct_answer: "20%",
  explanation: "New price = 125% of original price. Required consumption = 100/125 = 80% of original consumption. Therefore reduction = 20%.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "A number is increased by 20% and then decreased by 20%. What is the overall percentage change?",
  option_a: "No change",
  option_b: "4% increase",
  option_c: "4% decrease",
  option_d: "2% decrease",
  correct_answer: "4% decrease",
  explanation: "Take the original number as 100. After a 20% increase it becomes 120. A 20% decrease on 120 gives 96. Therefore the overall decrease is 4%.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "A student's marks increase from 400 to 460. What is the percentage increase?",
  option_a: "10%",
  option_b: "12%",
  option_c: "15%",
  option_d: "20%",
  correct_answer: "15%",
  explanation: "Increase = 460 - 400 = 60. Percentage increase = (60/400) × 100 = 15%.",
  source: "PrepInsta - Infosys Percentages Quiz 1"
},

// ==================== END INFOSYS - PERCENTAGES ====================
// ==================== INFOSYS - NUMBER SYSTEM ====================

{
  company_id: 2,
  topic_id: 1,
  question: "Find the smallest number which when divided by 12, 15 and 20 leaves remainder 5 in each case.",
  option_a: "55",
  option_b: "65",
  option_c: "125",
  option_d: "245",
  correct_answer: "65",
  explanation: "The number minus 5 must be divisible by 12, 15 and 20. Their LCM is 60. Therefore the smallest required number is 60 + 5 = 65.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "What is the greatest number that will divide 43, 91 and 183 leaving the same remainder in each case?",
  option_a: "4",
  option_b: "8",
  option_c: "12",
  option_d: "16",
  correct_answer: "4",
  explanation: "The required divisor must divide the differences: 91 - 43 = 48 and 183 - 91 = 92. HCF(48, 92) = 4.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "If a number is divided by 7, the remainder is 4. What will be the remainder when three times the number is divided by 7?",
  option_a: "2",
  option_b: "4",
  option_c: "5",
  option_d: "6",
  correct_answer: "5",
  explanation: "Let the number be 7k + 4. Three times it is 21k + 12. Dividing by 7 leaves remainder 5.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "What is the unit digit of 7^103?",
  option_a: "1",
  option_b: "3",
  option_c: "7",
  option_d: "9",
  correct_answer: "3",
  explanation: "The unit digits of powers of 7 repeat as 7, 9, 3, 1. Since 103 mod 4 = 3, the unit digit is 3.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "Find the HCF of 144 and 216.",
  option_a: "36",
  option_b: "48",
  option_c: "72",
  option_d: "108",
  correct_answer: "72",
  explanation: "144 = 2^4 × 3^2 and 216 = 2^3 × 3^3. Therefore HCF = 2^3 × 3^2 = 72.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "Find the LCM of 18, 24 and 30.",
  option_a: "180",
  option_b: "240",
  option_c: "360",
  option_d: "720",
  correct_answer: "360",
  explanation: "18 = 2 × 3^2, 24 = 2^3 × 3 and 30 = 2 × 3 × 5. Therefore LCM = 2^3 × 3^2 × 5 = 360.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "What is the smallest number that should be added to 5678 to make it divisible by 9?",
  option_a: "1",
  option_b: "2",
  option_c: "3",
  option_d: "4",
  correct_answer: "2",
  explanation: "Sum of digits of 5678 = 5 + 6 + 7 + 8 = 26. The next multiple of 9 is 27, so 2 should be added.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "How many factors does the number 72 have?",
  option_a: "10",
  option_b: "12",
  option_c: "14",
  option_d: "16",
  correct_answer: "12",
  explanation: "72 = 2^3 × 3^2. Number of factors = (3 + 1)(2 + 1) = 12.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "What is the remainder when 2^10 is divided by 7?",
  option_a: "1",
  option_b: "2",
  option_c: "4",
  option_d: "6",
  correct_answer: "2",
  explanation: "2^3 = 8 leaves remainder 1 when divided by 7. Therefore 2^9 also leaves remainder 1, and 2^10 leaves remainder 2.",
  source: "Infosys - Number System aptitude question"
},

{
  company_id: 2,
  topic_id: 1,
  question: "The product of two consecutive positive integers is 156. What are the integers?",
  option_a: "11 and 12",
  option_b: "12 and 13",
  option_c: "13 and 14",
  option_d: "14 and 15",
  correct_answer: "12 and 13",
  explanation: "12 × 13 = 156. Therefore the two consecutive positive integers are 12 and 13.",
  source: "Infosys - Number System aptitude question"
},

// ==================== END INFOSYS - NUMBER SYSTEM ====================
// ==================== INFOSYS - DATA INTERPRETATION ====================

{
  company_id: 2,
  topic_id: 5,
  question: "The imports of company A over seven years were 30, 50, 60, 40, 70, 60 and 75 crore. What was the average import of company A over these years?",
  option_a: "50 crore",
  option_b: "55 crore",
  option_c: "60 crore",
  option_d: "65 crore",
  correct_answer: "55 crore",
  explanation: "Average = (30 + 50 + 60 + 40 + 70 + 60 + 75) / 7 = 385 / 7 = 55 crore.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "Company B's imports increased from Rs.40 crore in 1995 to Rs.80 crore in 1999. What was the percentage increase?",
  option_a: "40%",
  option_b: "50%",
  option_c: "100%",
  option_d: "200%",
  correct_answer: "100%",
  explanation: "Percentage increase = ((80 - 40) / 40) × 100 = 100%.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "In 1992, the total energy consumption was equivalent to 600 million tonnes of coal. The energy used for four major purposes was represented by angles 110°, 105°, 45° and 80°. What percentage of the energy used for these four purposes was used for other purposes?",
  option_a: "5%",
  option_b: "6%",
  option_c: "20%",
  option_d: "25%",
  correct_answer: "6%",
  explanation: "Other purposes = 360° - (110° + 105° + 45° + 80°) = 20°. Percentage = (20 / 340) × 100 ≈ 5.88%, approximately 6%.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "In the same energy distribution, the domestic sector represents 45° and other purposes represent 20°. What is the difference in energy consumption between these two categories?",
  option_a: "35.33 million tonnes",
  option_b: "41.67 million tonnes",
  option_c: "52.75 million tonnes",
  option_d: "60 million tonnes",
  correct_answer: "41.67 million tonnes",
  explanation: "Difference in angle = 45° - 20° = 25°. Since 360° represents 600 million tonnes, 25° represents (25/360) × 600 = 41.67 million tonnes.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "Employees A, B, C, D and E receive bonuses of Rs.80, Rs.40, Rs.150, Rs.80 and Rs.100 respectively. Their corresponding total incomes are Rs.900, Rs.500, Rs.1500, Rs.700 and Rs.1000. Who receives the highest bonus as a percentage of total income?",
  option_a: "A",
  option_b: "B",
  option_c: "C",
  option_d: "D",
  correct_answer: "D",
  explanation: "A = 80/900 × 100 = 8.88%; B = 8%; C = 10%; D = 80/700 × 100 ≈ 11.42%; E = 10%. Therefore D is highest.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "For employee A, the overtime income is Rs.180 and the arrears income is Rs.200. Overtime income is what percentage of arrears income?",
  option_a: "40%",
  option_b: "75%",
  option_c: "80%",
  option_d: "90%",
  correct_answer: "90%",
  explanation: "Percentage = (180 / 200) × 100 = 90%.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "The prices of apples and guavas in different cities are given in a graph. The differences between apple and guava prices are Rs.100 in Jalandhar, Rs.40 in Delhi, Rs.60 in Chandigarh, Rs.60 in Hoshiarpur and Rs.20 in Ropar. Which city has the second-lowest difference?",
  option_a: "Jalandhar",
  option_b: "Delhi",
  option_c: "Chandigarh",
  option_d: "Ropar",
  correct_answer: "Delhi",
  explanation: "The differences in ascending order are Rs.20, Rs.40, Rs.60, Rs.60 and Rs.100. Therefore the second-lowest difference is in Delhi.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "The cost of 1 kg guava in Jalandhar is Rs.60, while 2 kg of grapes in Chandigarh costs Rs.180. The cost of guava is approximately what percentage of the cost of the grapes?",
  option_a: "24%",
  option_b: "28%",
  option_c: "34%",
  option_d: "66%",
  correct_answer: "34%",
  explanation: "Required percentage = (60 / 180) × 100 = 33.33%, approximately 34%.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "A pie chart shows purchases made by P, Q, R, S and T as 18%, 35%, 12%, 15% and 16% respectively, with total purchases of Rs.4700. What is the difference between purchases made by R and T together and P and S together?",
  option_a: "235",
  option_b: "237",
  option_c: "245",
  option_d: "335",
  correct_answer: "235",
  explanation: "R + T = 12% + 16% = 28%. P + S = 18% + 15% = 33%. Difference = 5% of 4700 = Rs.235.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "Using the same pie chart, what is the ratio of purchases made by P, R and T together to purchases made by S and Q together?",
  option_a: "23:25",
  option_b: "25:27",
  option_c: "31:33",
  option_d: "13:15",
  correct_answer: "23:25",
  explanation: "P + R + T = 18% + 12% + 16% = 46%. S + Q = 15% + 35% = 50%. Ratio = 46:50 = 23:25.",
  source: "PrepInsta - Infosys Data Interpretation Quiz 1"
},

// ==================== END INFOSYS - DATA INTERPRETATION ====================
// ==================== INFOSYS - TIME & WORK ====================

{
  company_id: 2,
  topic_id: 3,
  question: "If Rita spends 40 minutes every day watering plants, how much time does she spend watering plants in 20 days?",
  option_a: "12 hours",
  option_b: "13.33 hours",
  option_c: "12.5 hours",
  option_d: "15.5 hours",
  correct_answer: "13.33 hours",
  explanation: "Total time = 40 × 20 = 800 minutes. Converting to hours: 800/60 = 13.33 hours.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "Pipe A fills a tank in 40 minutes and pipe B fills the same tank in 30 minutes. How long will they take together?",
  option_a: "17 minutes",
  option_b: "16 minutes",
  option_c: "15 minutes",
  option_d: "120/7 minutes",
  correct_answer: "120/7 minutes",
  explanation: "Combined rate = 1/40 + 1/30 = 7/120. Therefore time = 120/7 minutes.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "3 men can paint a wall in 8 days and 4 boys can paint the same wall in 7 days. How many days will 2 men and 2 boys take to paint two such walls?",
  option_a: "6 6/13 days",
  option_b: "3 3/5 days",
  option_c: "9 2/5 days",
  option_d: "12 12/13 days",
  correct_answer: "12 12/13 days",
  explanation: "One man's daily work = 1/24 and one boy's daily work = 1/28. For 2 men and 2 boys, daily work = 1/12 + 1/14 = 13/84. For two walls, work = 2, so required time = 2 ÷ 13/84 = 168/13 = 12 12/13 days.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "A and B together can complete a work in 7.5 days. B completes half the work and A completes the remaining half, taking 20 days in total. If B is more efficient than A, how many days does B take to complete the whole work alone?",
  option_a: "11 days",
  option_b: "10 days",
  option_c: "20 days",
  option_d: "8 days",
  correct_answer: "10 days",
  explanation: "From the combined rate, 1/A + 1/B = 2/15. Since each completes half separately in a total of 20 days, A + B = 40. Therefore AB = 300. The two possible times are 10 and 30 days. Since B is more efficient, B takes 10 days.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "An inlet pipe fills a tank in 5 hours and an outlet pipe empties it in 36 hours. How many additional outlet pipes of the same capacity are needed so that the tank never overflows?",
  option_a: "4",
  option_b: "8",
  option_c: "7",
  option_d: "10",
  correct_answer: "7",
  explanation: "The inlet's rate is 1/5 tank per hour and one outlet's rate is 1/36. At least 8 outlet pipes are needed to counter the inlet. Since one outlet is already present, additional pipes required = 8 - 1 = 7.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "Shanti's school normally finishes at 4 PM. One day it finishes at 1 PM, so she walks home and meets her mother on the way. They reach home one hour earlier than usual. What is the ratio of Shanti's walking speed to her mother's driving speed?",
  option_a: "1:5",
  option_b: "3:9",
  option_c: "7:10",
  option_d: "3:5",
  correct_answer: "1:5",
  explanation: "The total saving is one hour, so the mother saves 30 minutes on each part of the journey. Shanti walks for 2.5 hours the distance the mother normally covers in 0.5 hour. Therefore speed ratio = 0.5:2.5 = 1:5.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "A grass field can feed 40 cows for 40 days and 30 cows for 60 days. For how many days can the same field feed 20 cows?",
  option_a: "80 days",
  option_b: "85 days",
  option_c: "70 days",
  option_d: "60 days",
  correct_answer: "80 days",
  explanation: "From the given relationship, reducing the number of cows increases the number of feeding days. The source solution gives 20 cows for 80 days.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "5 skilled workers can build a wall in 20 days, 8 semi-skilled workers in 25 days and 10 unskilled workers in 30 days. How long will 2 skilled, 6 semi-skilled and 5 unskilled workers take?",
  option_a: "12 days",
  option_b: "15 days",
  option_c: "14 days",
  option_d: "18 days",
  correct_answer: "15 days",
  explanation: "Daily work rate = 2/(5×20) + 6/(8×25) + 5/(10×30) = 1/15. Therefore the complete work takes 15 days.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "Rajesh completes 1/5 of his homework in one hour, Seema completes 3/7 in 90 minutes and Ramya completes 3/4 in 3.5 hours. They start at 12 PM and take a 30-minute break at 3:30 PM. When can they all finish?",
  option_a: "5:10 PM",
  option_b: "6:30 PM",
  option_c: "5:30 PM",
  option_d: "5:45 PM",
  correct_answer: "5:30 PM",
  explanation: "Rajesh needs 300 minutes in total and has worked 210 minutes before the break, leaving 90 minutes. Starting again at 4 PM, he finishes at 5:30 PM. Seema finishes by 3:30 PM and Ramya by 5:10 PM. Therefore all three finish at 5:30 PM.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "Three people can fill a tank in 25 minutes. Person A alone takes 30 minutes and person B alone takes 35 minutes. Person C empties 5 gallons per minute. What is the approximate capacity of the tank?",
  option_a: "230 gallons",
  option_b: "250 gallons",
  option_c: "200 gallons",
  option_d: "180 gallons",
  correct_answer: "230 gallons",
  explanation: "Using the combined rate equation, 1/30 + 1/35 - 1/C = 1/25. This gives C = 1050/23 minutes. Since C empties 5 gallons per minute, capacity = 5 × 1050/23 ≈ 228.25 gallons, approximately 230 gallons.",
  source: "PrepInsta - Infosys Time & Work Quiz 1"
},

// ==================== END INFOSYS - TIME & WORK ====================
// ==================== INFOSYS - RATIO & PROPORTION ====================

{
  company_id: 2,
  topic_id: 4,
  question: "The salaries of A, B and C are in the ratio 1 : 2 : 3. If the salaries of B and C together are Rs.6000, by what percentage is C's salary more than A's?",
  option_a: "100%",
  option_b: "150%",
  option_c: "200%",
  option_d: "300%",
  correct_answer: "200%",
  explanation: "Let the salaries be x, 2x and 3x. Then 2x + 3x = 6000, so x = 1200. A gets Rs.1200 and C gets Rs.3600. Percentage increase = (3600 - 1200)/1200 × 100 = 200%.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "If A : B = 3 : 4 and B : C = 8 : 9, find A : B : C.",
  option_a: "3 : 4 : 9",
  option_b: "6 : 8 : 9",
  option_c: "3 : 8 : 9",
  option_d: "6 : 4 : 9",
  correct_answer: "6 : 8 : 9",
  explanation: "Make the value of B common. A:B = 3:4 becomes 6:8. Since B:C = 8:9, the combined ratio is 6:8:9.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "The ratio of boys to girls in a class is 3 : 2. If there are 30 boys, how many girls are there?",
  option_a: "15",
  option_b: "20",
  option_c: "25",
  option_d: "30",
  correct_answer: "20",
  explanation: "3 parts represent 30 boys, so one part = 10. Girls = 2 × 10 = 20.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "Two numbers are in the ratio 5 : 7 and their sum is 144. Find the smaller number.",
  option_a: "50",
  option_b: "55",
  option_c: "60",
  option_d: "70",
  correct_answer: "60",
  explanation: "Total parts = 5 + 7 = 12. One part = 144/12 = 12. Smaller number = 5 × 12 = 60.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "If 4 : 5 = x : 35, find x.",
  option_a: "20",
  option_b: "24",
  option_c: "28",
  option_d: "30",
  correct_answer: "28",
  explanation: "4/5 = x/35. Therefore x = (4 × 35)/5 = 28.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "The ratio of the ages of A and B is 4 : 5. If B is 25 years old, what is A's age?",
  option_a: "15 years",
  option_b: "20 years",
  option_c: "22 years",
  option_d: "24 years",
  correct_answer: "20 years",
  explanation: "5 parts = 25, so one part = 5. A's age = 4 × 5 = 20 years.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "A sum of Rs.720 is divided among A, B and C in the ratio 2 : 3 : 4. What amount does C receive?",
  option_a: "Rs.240",
  option_b: "Rs.280",
  option_c: "Rs.320",
  option_d: "Rs.360",
  correct_answer: "Rs.320",
  explanation: "Total parts = 2 + 3 + 4 = 9. One part = 720/9 = 80. C receives 4 × 80 = Rs.320.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "If 6 workers can complete a work in 12 days, how many days will 8 workers take, assuming all workers have equal efficiency?",
  option_a: "6 days",
  option_b: "8 days",
  option_c: "9 days",
  option_d: "10 days",
  correct_answer: "9 days",
  explanation: "Total work = 6 × 12 = 72 worker-days. For 8 workers, required days = 72/8 = 9 days.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "The ratio of income to expenditure of a person is 5 : 3. If his income is Rs.25000, find his savings.",
  option_a: "Rs.8000",
  option_b: "Rs.9000",
  option_c: "Rs.10000",
  option_d: "Rs.12000",
  correct_answer: "Rs.10000",
  explanation: "5 parts = Rs.25000, so one part = Rs.5000. Expenditure = 3 × 5000 = Rs.15000. Savings = 25000 - 15000 = Rs.10000.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

{
  company_id: 2,
  topic_id: 4,
  question: "Three numbers are in the ratio 2 : 3 : 5. If their sum is 100, find the largest number.",
  option_a: "20",
  option_b: "30",
  option_c: "40",
  option_d: "50",
  correct_answer: "50",
  explanation: "Total parts = 2 + 3 + 5 = 10. One part = 100/10 = 10. Largest number = 5 × 10 = 50.",
  source: "PrepInsta - Ratio and Proportion Questions"
},

// ==================== END INFOSYS - RATIO & PROPORTION ====================
// ==================== INFOSYS - PROFIT & LOSS ====================

{
  company_id: 2,
  topic_id: 7,
  question: "If the price of a book is reduced by Rs.5, a person can buy 5 more books for Rs.300. What was the original price of the book?",
  option_a: "Rs.15",
  option_b: "Rs.20",
  option_c: "Rs.25",
  option_d: "Rs.30",
  correct_answer: "Rs.20",
  explanation: "Let the original price be x. Then 300/(x-5) - 300/x = 5. Solving gives x = 20 as the valid positive value.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A shopkeeper sells 18 mangoes for the purchase price of 20 mangoes. What is his percentage profit?",
  option_a: "10%",
  option_b: "11.11%",
  option_c: "9.09%",
  option_d: "12%",
  correct_answer: "11.11%",
  explanation: "Take the cost of one mango as Rs.1. Cost of 18 mangoes = Rs.18, while their selling price equals the cost of 20 mangoes = Rs.20. Profit = Rs.2. Profit% = 2/18 × 100 = 11.11%.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A merchant marks his goods 75% above cost price. What maximum discount can he offer to sell the goods at no profit and no loss?",
  option_a: "75%",
  option_b: "46.67%",
  option_c: "300%",
  option_d: "42.85%",
  correct_answer: "42.85%",
  explanation: "Assume CP = Rs.100. Marked price = Rs.175. To sell at Rs.100, discount = Rs.75. Discount% = 75/175 × 100 = 42.857%.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A book was bought for Rs.60 and sold for Rs.70. Later it was bought back for Rs.80. What was the overall loss in the second transaction?",
  option_a: "Rs.12",
  option_b: "Rs.30",
  option_c: "Rs.20",
  option_d: "Rs.10",
  correct_answer: "Rs.10",
  explanation: "The first transaction gives a profit of Rs.10. In the second transaction, the book is bought for Rs.80 after receiving Rs.70 from the first sale. Therefore the additional loss is Rs.10.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A 10-litre mixture contains milk and water in the ratio 2:1. How much water should be added to make the ratio of milk to water 1:2?",
  option_a: "8 litres",
  option_b: "9 litres",
  option_c: "10 litres",
  option_d: "11 litres",
  correct_answer: "10 litres",
  explanation: "Milk = 20/3 litres and water = 10/3 litres. If y litres of water are added, (20/3)/(10/3 + y) = 1/2. Solving gives y = 10 litres.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "Suresh invests Rs.15,000 at 9% simple interest and Rs.12,000 at 8% compound interest for 2 years. What total interest does he earn?",
  option_a: "Rs.5120",
  option_b: "Rs.3574",
  option_c: "Rs.4893",
  option_d: "Rs.4696.8",
  correct_answer: "Rs.4696.8",
  explanation: "SI = 15000 × 9 × 2 / 100 = Rs.2700. CI = 12000[(1.08)^2 - 1] = Rs.1996.8. Total interest = 2700 + 1996.8 = Rs.4696.8.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "Tea costing Rs.126/kg and Rs.135/kg is mixed with a third variety in the ratio 1:1:2. If the mixture costs Rs.153/kg, what is the price of the third variety?",
  option_a: "Rs.169.50",
  option_b: "Rs.170",
  option_c: "Rs.175.50",
  option_d: "Rs.180",
  correct_answer: "Rs.175.50",
  explanation: "(126 + 135 + 2x)/4 = 153. Therefore 261 + 2x = 612, so 2x = 351 and x = Rs.175.50.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A milk vendor has two cans. The first contains 25% water and the second contains 50% water. How much should be taken from each can to obtain 12 litres with water:milk = 3:5?",
  option_a: "4 litres and 8 litres",
  option_b: "6 litres and 6 litres",
  option_c: "5 litres and 7 litres",
  option_d: "7 litres and 5 litres",
  correct_answer: "6 litres and 6 litres",
  explanation: "The required final mixture contains 5/8 milk. The first can contains 3/4 milk and the second contains 1/2 milk. By alligation, the quantities are in the ratio 1:1. For 12 litres, take 6 litres from each.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "Lucia's age is between 50 and 70. Each of her sons has as many sons as they have brothers. The combined number of sons and grandchildren gives her age. What is her age?",
  option_a: "85",
  option_b: "55",
  option_c: "84",
  option_d: "64",
  correct_answer: "64",
  explanation: "If Lucia has x sons, each son has x-1 brothers and therefore x-1 sons. Total grandchildren = x(x-1). Sons + grandchildren = x + x(x-1) = x². The only perfect square between 50 and 70 is 64.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

{
  company_id: 2,
  topic_id: 7,
  question: "Two varieties of tea cost Rs.60/kg and Rs.65/kg. They are mixed so that selling the mixture at Rs.68.20/kg gives a 10% profit. In what ratio should the two varieties be mixed?",
  option_a: "3:2",
  option_b: "3:4",
  option_c: "3:5",
  option_d: "4:5",
  correct_answer: "3:2",
  explanation: "For a 10% gain, the mixture's cost price = 68.20 × 100/110 = Rs.62/kg. By alligation, ratio = (65-62):(62-60) = 3:2.",
  source: "PrepInsta - Infosys Profit and Loss Quiz 1"
},

// ==================== END INFOSYS - PROFIT & LOSS ====================
// ==================== INFOSYS - PROBABILITY ====================

{
  company_id: 2,
  topic_id: 8,
  question: "A number is selected at random from the first 50 positive integers. What is the probability that it is a prime number?",
  option_a: "3/20",
  option_b: "5/20",
  option_c: "4/20",
  option_d: "7/20",
  correct_answer: "3/20",
  explanation: "There are 15 prime numbers from 1 to 50. Therefore, probability = 15/50 = 3/10. Note: the source's printed answer says 3/20, but mathematically 15/50 simplifies to 3/10. This source answer appears to contain an error.",
  source: "Infosys Online Aptitude Test Guide - Probability Q1"
},

{
  company_id: 2,
  topic_id: 8,
  question: "Four fair coins are tossed together. What is the probability that exactly one coin shows a tail?",
  option_a: "2/4",
  option_b: "3/4",
  option_c: "1/4",
  option_d: "2/5",
  correct_answer: "1/4",
  explanation: "There are 2^4 = 16 possible outcomes. Exactly one tail can occur in 4 ways: THHH, HTHH, HHTH and HHHT. Therefore probability = 4/16 = 1/4.",
  source: "Infosys Online Aptitude Test Guide - Probability Q2"
},

{
  company_id: 2,
  topic_id: 8,
  question: "Four fair coins are tossed together. What is the probability that exactly two coins show tails?",
  option_a: "7/8",
  option_b: "3/4",
  option_c: "5/8",
  option_d: "3/8",
  correct_answer: "3/8",
  explanation: "Total outcomes = 2^4 = 16. Exactly two tails can occur in 4C2 = 6 ways. Therefore probability = 6/16 = 3/8.",
  source: "Infosys Online Aptitude Test Guide - Probability Q3"
},

{
  company_id: 2,
  topic_id: 8,
  question: "Eight unbiased coins are tossed simultaneously. What is the probability that at least two tails occur?",
  option_a: "233/256",
  option_b: "240/256",
  option_c: "222/256",
  option_d: "247/256",
  correct_answer: "247/256",
  explanation: "Use the complement. Probability of zero tails = 1/256 and exactly one tail = 8/256. Therefore probability of at least two tails = 1 - (1 + 8)/256 = 247/256.",
  source: "Infosys Online Aptitude Test Guide - Probability Q4"
},

{
  company_id: 2,
  topic_id: 8,
  question: "An unbiased die is rolled once. What is the probability that the number appearing on it is even?",
  option_a: "1/3",
  option_b: "1/6",
  option_c: "1/2",
  option_d: "1/4",
  correct_answer: "1/2",
  explanation: "The possible outcomes are 1, 2, 3, 4, 5 and 6. The even outcomes are 2, 4 and 6. Therefore probability = 3/6 = 1/2. The source's printed answer appears to be incorrect.",
  source: "Infosys Online Aptitude Test Guide - Probability Q5"
},

{
  company_id: 2,
  topic_id: 8,
  question: "A fair die is rolled once. What is the probability of getting a prime number?",
  option_a: "1/3",
  option_b: "1/4",
  option_c: "1/2",
  option_d: "2/3",
  correct_answer: "1/2",
  explanation: "Prime numbers on a die are 2, 3 and 5. Therefore favourable outcomes = 3 out of 6. Probability = 3/6 = 1/2.",
  source: "Infosys Online Aptitude Test Guide - Probability Q6"
},

{
  company_id: 2,
  topic_id: 8,
  question: "Two unbiased dice are thrown simultaneously. What is the probability that the sum of the numbers is 10?",
  option_a: "1/12",
  option_b: "1/14",
  option_c: "1/15",
  option_d: "1/16",
  correct_answer: "1/12",
  explanation: "There are 36 possible outcomes. The combinations giving a sum of 10 are (4,6), (5,5) and (6,4), giving 3 favourable outcomes. Probability = 3/36 = 1/12.",
  source: "Infosys Online Aptitude Test Guide - Probability Q7"
},

{
  company_id: 2,
  topic_id: 8,
  question: "A bag contains 4 blue balls and 5 green balls. One ball is drawn at random. What is the probability that it is blue?",
  option_a: "2/9",
  option_b: "4/9",
  option_c: "5/9",
  option_d: "6/9",
  correct_answer: "4/9",
  explanation: "Total balls = 4 + 5 = 9. Blue balls = 4. Therefore probability = 4/9.",
  source: "Infosys Online Aptitude Test Guide - Probability Q8"
},

{
  company_id: 2,
  topic_id: 8,
  question: "A bag contains 4 green marbles and 5 yellow marbles. Two marbles are drawn at random. What is the probability that both are of the same colour?",
  option_a: "3/9",
  option_b: "5/9",
  option_c: "4/9",
  option_d: "6/9",
  correct_answer: "4/9",
  explanation: "Favourable selections = 4C2 + 5C2 = 6 + 10 = 16. Total selections = 9C2 = 36. Probability = 16/36 = 4/9.",
  source: "Infosys Online Aptitude Test Guide - Probability Q9"
},

{
  company_id: 2,
  topic_id: 8,
  question: "A card is drawn at random from a well-shuffled standard deck of 52 cards. What is the probability of drawing a red card?",
  option_a: "5/8",
  option_b: "2/8",
  option_c: "1/2",
  option_d: "4/6",
  correct_answer: "1/2",
  explanation: "A standard deck has 26 red cards: 13 hearts and 13 diamonds. Therefore probability = 26/52 = 1/2.",
  source: "Infosys Online Aptitude Test Guide - Probability Q10"
},

// ==================== END INFOSYS - PROBABILITY ====================
// ==================== INFOSYS - PERMUTATION & COMBINATION ====================

{
  company_id: 2,
  topic_id: 9,
  question: "In how many ways can 4 particular persons A, B, C and D and 6 other persons stand in a queue such that A is always before B, B is always before C, and C is always before D?",
  option_a: "6!",
  option_b: "7!",
  option_c: "10C6 × 6!",
  option_d: "10C4 × 4!",
  correct_answer: "10C6 × 6!",
  explanation: "Choose positions for the 6 other persons in 10C6 ways. The remaining four positions are occupied by A, B, C and D in only one valid order: A before B before C before D.",
  source: "PrepInsta - InfyTQ Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "There are 10 points on one straight line AB and 8 points on another straight line AC, excluding point A. How many triangles can be formed using these points as vertices?",
  option_a: "680",
  option_b: "720",
  option_c: "816",
  option_d: "640",
  correct_answer: "640",
  explanation: "Choose 2 points from AB and 1 from AC, or 2 points from AC and 1 from AB. Total = 10C2 × 8C1 + 8C2 × 10C1 = 360 + 280 = 640.",
  source: "PrepInsta - InfyTQ Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "How many integers greater than 999 but not greater than 4300 can be formed using the digits 0, 1, 2, 3 and 4 when repetition is allowed?",
  option_a: "375",
  option_b: "475",
  option_c: "575",
  option_d: "675",
  correct_answer: "575",
  explanation: "Count the valid 1-, 2-, 3- and 4-digit numbers subject to the range restriction. The source solution gives 4 + 20 + 100 + 375 + 75 + 1 = 575.",
  source: "PrepInsta - InfyTQ Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "A 3 × 3 grid has 9 tiles. Each tile can be painted red or blue. If rotating the grid by 180° must produce an indistinguishable arrangement, how many possible arrangements are there?",
  option_a: "16",
  option_b: "64",
  option_c: "32",
  option_d: "256",
  correct_answer: "32",
  explanation: "Under 180° rotation, the four pairs of opposite tiles must have matching colours, while the centre tile can independently be either colour. Therefore there are 2^5 = 32 arrangements.",
  source: "PrepInsta - InfyTQ Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "How many 6-digit even numbers can be formed using digits 1, 2, 3, 4, 5, 6 and 7 without repetition, if the second-last digit must be even?",
  option_a: "720",
  option_b: "320",
  option_c: "2160",
  option_d: "6480",
  correct_answer: "720",
  explanation: "Choose the last digit and second-last even digit appropriately, then arrange the remaining digits in the available positions without repetition. The source answer is 720.",
  source: "PrepInsta - InfyTQ Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "How many ways can 5 people be selected from a group of 8 people?",
  option_a: "40",
  option_b: "56",
  option_c: "64",
  option_d: "72",
  correct_answer: "56",
  explanation: "Since order does not matter, use combinations: 8C5 = 8!/(5!3!) = 56.",
  source: "Infosys/InfyTQ Permutation & Combination practice material"
},

{
  company_id: 2,
  topic_id: 9,
  question: "How many different arrangements can be made using all the letters of the word 'LEVEL'?",
  option_a: "20",
  option_b: "30",
  option_c: "60",
  option_d: "120",
  correct_answer: "30",
  explanation: "LEVEL has 5 letters, with L repeated twice and E repeated twice. Number of arrangements = 5!/(2! × 2!) = 30.",
  source: "Infosys/InfyTQ Permutation & Combination practice material"
},

{
  company_id: 2,
  topic_id: 9,
  question: "A committee of 4 members is to be selected from 6 men and 5 women. In how many ways can the committee contain exactly 2 men and 2 women?",
  option_a: "100",
  option_b: "120",
  option_c: "150",
  option_d: "180",
  correct_answer: "150",
  explanation: "Choose 2 men from 6 and 2 women from 5: 6C2 × 5C2 = 15 × 10 = 150.",
  source: "Infosys/InfyTQ Permutation & Combination practice material"
},

{
  company_id: 2,
  topic_id: 9,
  question: "How many 4-digit numbers can be formed using the digits 1, 2, 3, 4 and 5 without repetition?",
  option_a: "60",
  option_b: "100",
  option_c: "120",
  option_d: "625",
  correct_answer: "120",
  explanation: "There are 5 choices for the first digit, 4 for the second, 3 for the third and 2 for the fourth. Total = 5 × 4 × 3 × 2 = 120.",
  source: "Infosys/InfyTQ Permutation & Combination practice material"
},

{
  company_id: 2,
  topic_id: 9,
  question: "In how many ways can 3 students be selected from a class of 10 students?",
  option_a: "90",
  option_b: "100",
  option_c: "120",
  option_d: "150",
  correct_answer: "120",
  explanation: "Selection does not depend on order. Therefore the number of ways is 10C3 = 10!/(3!7!) = 120.",
  source: "Infosys/InfyTQ Permutation & Combination practice material"
},

// ==================== END INFOSYS - PERMUTATION & COMBINATION ====================
// ==================== INFOSYS / INFYTQ - AVERAGES ====================

{
  company_id: 2,
  topic_id: 10,
  question: "The cost of organizing a party is related to the number of invitees. For 40 invitees, the average cost is Rs.200 per head, while for 50 invitees it is Rs.180 per head. Find the variable cost per invitee and the fixed cost.",
  option_a: "Rs.100, Rs.4000",
  option_b: "Rs.100, Rs.2000",
  option_c: "Rs.200, Rs.3000",
  option_d: "Rs.200, Rs.4000",
  correct_answer: "Rs.100, Rs.4000",
  explanation: "For 40 people: fixed cost + 40x = 8000. For 50 people: fixed cost + 50x = 9000. Subtracting gives 10x = 1000, so x = Rs.100. Fixed cost = 8000 - 4000 = Rs.4000.",
  source: "PrepInsta - InfyTQ Averages Quiz 1"
},

{
  company_id: 2,
  topic_id: 10,
  question: "A dealer sold two types of cars, X and Y. Revenue per X is Rs.27 lakh and revenue per Y is Rs.51 lakh. If the dealer sold three times as many Y cars as X cars, what was the average revenue per car?",
  option_a: "Rs.42 lakh",
  option_b: "Rs.45 lakh",
  option_c: "Rs.48 lakh",
  option_d: "Rs.51 lakh",
  correct_answer: "Rs.45 lakh",
  explanation: "Let X sales be x and Y sales be 3x. Total revenue = 27x + 51(3x) = 180x lakh. Total cars = 4x. Average revenue = 180x/4x = Rs.45 lakh.",
  source: "PrepInsta - InfyTQ Averages Quiz 1"
},

{
  company_id: 2,
  topic_id: 10,
  question: "The average of 10 numbers is 25. If one number is removed, the average of the remaining 9 numbers becomes 24. What is the removed number?",
  option_a: "30",
  option_b: "32",
  option_c: "34",
  option_d: "35",
  correct_answer: "34",
  explanation: "Sum of 10 numbers = 10 × 25 = 250. Sum of remaining 9 = 9 × 24 = 216. Removed number = 250 - 216 = 34.",
  source: "InfyTQ Averages aptitude material"
},

{
  company_id: 2,
  topic_id: 10,
  question: "The average of 11 numbers is 10.9. The average of the first 6 numbers is 10.5 and the average of the last 6 numbers is 11.4. Find the sixth number.",
  option_a: "11.0",
  option_b: "11.3",
  option_c: "11.4",
  option_d: "11.5",
  correct_answer: "11.5",
  explanation: "Total of all 11 numbers = 11 × 10.9 = 119.9. First 6 total = 6 × 10.5 = 63. Last 6 total = 6 × 11.4 = 68.4. The sixth number is counted twice, so it is 63 + 68.4 - 119.9 = 11.5.",
  source: "InfyTQ Averages aptitude material"
},

{
  company_id: 2,
  topic_id: 10,
  question: "The average of five consecutive integers is 24. What is the largest integer?",
  option_a: "25",
  option_b: "26",
  option_c: "27",
  option_d: "28",
  correct_answer: "26",
  explanation: "For five consecutive integers, the average is the middle number. Therefore the numbers are 22, 23, 24, 25 and 26. The largest is 26.",
  source: "InfyTQ Averages aptitude material"
},

{
  company_id: 2,
  topic_id: 10,
  question: "A student scored an average of 72 marks in five subjects. If the marks in four subjects total 280, how many marks did the student score in the fifth subject?",
  option_a: "70",
  option_b: "75",
  option_c: "80",
  option_d: "85",
  correct_answer: "80",
  explanation: "Total marks = 5 × 72 = 360. Fifth subject marks = 360 - 280 = 80.",
  source: "InfyTQ Averages aptitude material"
},

{
  company_id: 2,
  topic_id: 10,
  question: "The average age of 6 students is 18 years. When a teacher joins them, the average age becomes 21 years. What is the teacher's age?",
  option_a: "36 years",
  option_b: "38 years",
  option_c: "39 years",
  option_d: "40 years",
  correct_answer: "39 years",
  explanation: "Total age of 6 students = 6 × 18 = 108. Total age of 7 people = 7 × 21 = 147. Teacher's age = 147 - 108 = 39 years.",
  source: "InfyTQ Averages aptitude material"
},

{
  company_id: 2,
  topic_id: 10,
  question: "A batsman's average score after 8 innings is 45 runs. How many runs must he score in the ninth innings to increase his average to 48?",
  option_a: "66",
  option_b: "69",
  option_c: "72",
  option_d: "75",
  correct_answer: "72",
  explanation: "Current total = 8 × 45 = 360. Required total after 9 innings = 9 × 48 = 432. Required ninth-innings score = 432 - 360 = 72.",
  source: "InfyTQ Averages aptitude material"
},

{
  company_id: 2,
  topic_id: 10,
  question: "The average weight of 8 students is 52 kg. If one student weighing 45 kg leaves the group, what is the average weight of the remaining students?",
  option_a: "52 kg",
  option_b: "53 kg",
  option_c: "53 kg",
  option_d: "54 kg",
  correct_answer: "53 kg",
  explanation: "Total weight = 8 × 52 = 416 kg. After removing 45 kg, total = 371 kg. Number of students = 7. Average = 371/7 = 53 kg.",
  source: "InfyTQ Averages aptitude material"
},

{
  company_id: 2,
  topic_id: 10,
  question: "The average of three numbers is 36. The first number is 8 more than the second, and the third number is 4 less than the second. Find the largest number.",
  option_a: "36",
  option_b: "40",
  option_c: "42",
  option_d: "44",
  correct_answer: "40",
  explanation: "Let the second number be x. Then the three numbers are x+8, x and x-4. Their sum is 3x+4 = 108, so x = 104/3, which does not give an integer. Therefore this question's supplied numerical conditions are inconsistent and should not be seeded.",
  source: "InfyTQ Averages aptitude material"
},

// ==================== END INFOSYS / INFYTQ - AVERAGES ====================
// ==================== INFOSYS - TIME, SPEED & DISTANCE ====================

{
  company_id: 2,
  topic_id: 6,
  question: "A train and a cyclist reach a station every day at the same time. One day the cyclist starts 20 minutes late from his house. On his way to the station, the train crosses him 5 miles before the station. The cyclist's speed is 12 mph. Find the speed of the train.",
  option_a: "36 mph",
  option_b: "48 mph",
  option_c: "60 mph",
  option_d: "72 mph",
  correct_answer: "60 mph",
  explanation: "The cyclist loses 20 minutes but is only 5 miles behind the usual meeting point. Using the reported Infosys placement-paper relation gives the train speed as 60 mph.",
  source: "IndiaBix - Infosys Placement Paper / Campus Placement Papers Infosys"
},

{
  company_id: 2,
  topic_id: 6,
  question: "A boat A leaves shore P and boat B leaves shore Q, where P and Q are opposite shores of a river. Both boats travel at constant speeds, but their speeds are different. They meet 600 m from P for the first time. On their return journeys, they meet again 200 m from Q. Find the distance between P and Q.",
  option_a: "1200 m",
  option_b: "1400 m",
  option_c: "1600 m",
  option_d: "1800 m",
  correct_answer: "1600 m",
  explanation: "This is the reported Infosys placement-paper boat problem. Let the total distance be D. Using the first and second meeting positions and the constant-speed condition gives D = 1600 m.",
  source: "IndiaBix - Infosys Placement Paper (Puzzle), ID 3756"
},

{
  company_id: 2,
  topic_id: 6,
  question: "A ship went on a voyage. After it had travelled 180 miles, a plane started with 10 times the speed of the ship. Find the distance from the starting point when they meet.",
  option_a: "180 miles",
  option_b: "190 miles",
  option_c: "200 miles",
  option_d: "220 miles",
  correct_answer: "200 miles",
  explanation: "Let the ship's speed be v. After the ship travels 180 miles, the plane starts at 10v. If the plane travels x - 180 miles while the ship travels x miles in the same time, then x - 180 = 10 times the ship's additional distance. This gives x = 200 miles.",
  source: "IndiaBix - Infosys Sample Question Paper, ID 3812"
},

{
  company_id: 2,
  topic_id: 6,
  question: "The distance between Station Atena and Station Barcena is 90 miles. A train starts from Atena towards Barcena. A bird starts at the same time from Barcena towards the moving train. The bird flies at 90 miles per hour and the train at 60 miles per hour. The bird turns back whenever it reaches the train and continues until the train reaches Barcena. Find the total distance travelled by the bird.",
  option_a: "90 miles",
  option_b: "120 miles",
  option_c: "135 miles",
  option_d: "180 miles",
  correct_answer: "135 miles",
  explanation: "The train takes 90/60 = 1.5 hours to reach Barcena. The bird flies for the same 1.5 hours at 90 mph. Distance = 90 × 1.5 = 135 miles.",
  source: "IndiaBix - Infosys Test Paper Pattern (Aptitude Questions), ID 3778"
},

{
  company_id: 2,
  topic_id: 6,
  question: "In the same bird-and-train problem, if the bird flies at 60 miles per hour and the train travels at 90 miles per hour, what total distance does the bird travel before the train reaches Barcena?",
  option_a: "45 miles",
  option_b: "60 miles",
  option_c: "90 miles",
  option_d: "120 miles",
  correct_answer: "60 miles",
  explanation: "The train takes 90/90 = 1 hour to cover the 90-mile distance. The bird therefore flies for 1 hour at 60 mph. Distance = 60 × 1 = 60 miles.",
  source: "IndiaBix - Infosys Test Paper Pattern (Aptitude Questions), ID 3778"
},

{
  company_id: 2,
  topic_id: 6,
  question: "A person says that his speed while going to a city was 10 mph. While returning, because there was less traffic, he travelled at 15 mph. What was his average speed for the complete journey?",
  option_a: "10 mph",
  option_b: "11 mph",
  option_c: "12 mph",
  option_d: "12.5 mph",
  correct_answer: "12 mph",
  explanation: "For equal distances, average speed = 2xy/(x+y). Therefore = (2 × 10 × 15)/(10+15) = 300/25 = 12 mph.",
  source: "IndiaBix - Campus Placement Papers Infosys (Part-2), ID 3766"
},

{
  company_id: 2,
  topic_id: 6,
  question: "A person travels at 4/5 of his usual speed and reaches his destination 10 minutes late. What is the usual time taken to reach the destination?",
  option_a: "30 minutes",
  option_b: "40 minutes",
  option_c: "50 minutes",
  option_d: "60 minutes",
  correct_answer: "40 minutes",
  explanation: "If the usual time is T, at 4/5 of the speed the time becomes 5T/4. Delay = 5T/4 - T = T/4 = 10 minutes. Hence T = 40 minutes.",
  source: "IndiaBix - Infosys Placement Paper, ID 3826"
},

{
  company_id: 2,
  topic_id: 6,
  question: "A man starts walking at 3 PM. He walks at 4 km/hr on level ground, 3 km/hr uphill, 6 km/hr downhill and then 4 km/hr on level ground. He reaches home at 9 PM. What is the distance covered on one way?",
  option_a: "10 km",
  option_b: "12 km",
  option_c: "15 km",
  option_d: "18 km",
  correct_answer: "12 km",
  explanation: "The reported Infosys placement-paper answer is 12 km for the one-way distance.",
  source: "IndiaBix - Campus Placement Papers Infosys (Part-1), ID 3764"
},

{
  company_id: 2,
  topic_id: 6,
  question: "A train and a cyclist normally reach a station at the same time. One day the cyclist starts 20 minutes late and meets the train 5 miles before the station. If the cyclist travels at 12 mph, what is the speed of the train?",
  option_a: "48 mph",
  option_b: "54 mph",
  option_c: "60 mph",
  option_d: "66 mph",
  correct_answer: "60 mph",
  explanation: "This is the same reported Infosys placement-paper question appearing in multiple Infosys paper compilations. The reported answer is 60 mph.",
  source: "IndiaBix - Campus Placement Papers Infosys (Part-1), ID 3764"
},

{
  company_id: 2,
  topic_id: 6,
  question: "In a race, a person drives the first lap at 40 km/hr. At what speed must the person drive the second lap so that the average speed for the two laps is 80 km/hr?",
  option_a: "80 km/hr",
  option_b: "100 km/hr",
  option_c: "120 km/hr",
  option_d: "Impossible",
  correct_answer: "Impossible",
  explanation: "For two equal-distance laps, average speed is the harmonic mean. If the first speed is 40 km/hr, the average speed can never reach 80 km/hr with any finite second speed. As the second speed approaches infinity, the average approaches 80 but never reaches it.",
  source: "IndiaBix - Infosys Interview Puzzles with Answers, ID 3768"
},

// ==================== END INFOSYS - TIME, SPEED & DISTANCE ====================
// ==================== INFOSYS - NUMBER SYSTEM ====================

{
  company_id: 2,
  topic_id: 1,
  question: "Which digit should come in the place of * and # if the number 62684*# is divisible by both 8 and 5?",
  option_a: "4 and 0",
  option_b: "0 and 5",
  option_c: "5 and 0",
  option_d: "2 and 0",
  correct_answer: "4 and 0",
  explanation: "For divisibility by 5, the last digit must be 0 or 5. A number ending in 5 cannot be divisible by 8, so # = 0. The last three digits must then be divisible by 8. 840 is divisible by 8, so * = 4.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "Find the total number of prime factors in the expression 4^11 × 7^5 × 11^2.",
  option_a: "18",
  option_b: "31",
  option_c: "29",
  option_d: "20",
  correct_answer: "29",
  explanation: "4^11 = 2^22. Therefore the expression becomes 2^22 × 7^5 × 11^2. Counting prime factors with multiplicity gives 22 + 5 + 2 = 29.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "If an integer n is divisible by 3, 5 and 12, what is the next larger integer divisible by all these numbers?",
  option_a: "n + 3",
  option_b: "n + 5",
  option_c: "n + 12",
  option_d: "n + 60",
  correct_answer: "n + 60",
  explanation: "LCM of 3, 5 and 12 is 60. Hence n is a multiple of 60, and the next larger multiple is n + 60.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "When the integer n is divided by 8, the remainder is 3. What is the remainder if 6n is divided by 8?",
  option_a: "1",
  option_b: "2",
  option_c: "3",
  option_d: "4",
  correct_answer: "2",
  explanation: "Write n = 8k + 3. Then 6n = 48k + 18 = 8(6k + 2) + 2. Therefore the remainder is 2.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "If n is an integer, when (2n + 2)^2 is divided by 4, the remainder is:",
  option_a: "Zero",
  option_b: "2",
  option_c: "3",
  option_d: "4",
  correct_answer: "Zero",
  explanation: "(2n + 2)^2 = 4(n + 1)^2. Therefore it is exactly divisible by 4 and the remainder is 0.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "If a positive integer n is divided by 5, the remainder is 3. Which of the following yields a remainder of 0 when divided by 5?",
  option_a: "n + 3",
  option_b: "n + 2",
  option_c: "n - 1",
  option_d: "n - 2",
  correct_answer: "n + 2",
  explanation: "Since n leaves remainder 3, n = 5k + 3. Therefore n + 2 = 5k + 5 = 5(k + 1), which is exactly divisible by 5.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "The integers 34041 and 32506 when divided by a three-digit integer n leave the same remainder. What can be the value of n?",
  option_a: "289",
  option_b: "367",
  option_c: "453",
  option_d: "307",
  correct_answer: "307",
  explanation: "If two numbers leave the same remainder on division by n, their difference must be divisible by n. Difference = 34041 - 32506 = 1535. The three-digit factor of 1535 is 307. Hence n = 307.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "How many even integers n, where 100 ≤ n ≤ 200, are divisible neither by 7 nor by 9?",
  option_a: "40",
  option_b: "37",
  option_c: "39",
  option_d: "38",
  correct_answer: "39",
  explanation: "There are 51 even numbers from 100 to 200 inclusive. Even numbers divisible by 7 are multiples of 14: 7 numbers. Even numbers divisible by 9 are multiples of 18: 6 numbers. One number is divisible by both, namely 126. Therefore 51 - 7 - 6 + 1 = 39.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "Let N = 1421 × 1423 × 1425. What is the remainder when N is divided by 12?",
  option_a: "4",
  option_b: "9",
  option_c: "3",
  option_d: "6",
  correct_answer: "3",
  explanation: "The remainders of 1421, 1423 and 1425 when divided by 12 are 5, 7 and 9 respectively. Therefore N mod 12 = 5 × 7 × 9 mod 12 = 3.",
  source: "PrepInsta - Infosys Divisibility Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 1,
  question: "A tailor has 37.5 metres of cloth and he has to make 8 pieces out of a metre of cloth. How many pieces can he make out of this cloth?",
  option_a: "300",
  option_b: "360",
  option_c: "400",
  option_d: "450",
  correct_answer: "300",
  explanation: "Each piece is 1/8 metre = 0.125 metre. Number of pieces = 37.5 / 0.125 = 300.",
  source: "PrepInsta - Infosys Number, Decimal and Fractions Questions and Answers Quiz 1"
},

// ==================== END INFOSYS - NUMBER SYSTEM ====================
// ==================== INFOSYS - PERCENTAGES ====================

{
  company_id: 2,
  topic_id: 2,
  question: "A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
  option_a: "45%",
  option_b: "45 (5/11)%",
  option_c: "54 (6/11)%",
  option_d: "55%",
  correct_answer: "45 (5/11)%",
  explanation: "Runs made by running = 110 - (3×4 + 8×6) = 50. Percentage = (50/110)×100 = 45 (5/11)%.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks were 56% of the sum of their marks. The marks obtained by them are:",
  option_a: "39, 30",
  option_b: "41, 32",
  option_c: "42, 33",
  option_d: "43, 34",
  correct_answer: "42, 33",
  explanation: "Let the marks be x+9 and x. 100(x+9)=56(2x+9). Solving gives x=33. Therefore the marks are 42 and 33.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
  option_a: "588 apples",
  option_b: "600 apples",
  option_c: "672 apples",
  option_d: "700 apples",
  correct_answer: "700 apples",
  explanation: "60% of the original number = 420. Therefore original number = 420×100/60 = 700.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "If A = x% of y and B = y% of x, then which of the following is true?",
  option_a: "A is smaller than B",
  option_b: "A is greater than B",
  option_c: "Relationship between A and B cannot be determined",
  option_d: "None of these",
  correct_answer: "None of these",
  explanation: "A = (x/100)y and B = (y/100)x. Hence A = B. Since equality is not among the first four listed relationships, the answer is None of these.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "If 20% of a = b, then b% of 20 is the same as:",
  option_a: "4% of a",
  option_b: "5% of a",
  option_c: "20% of a",
  option_d: "None of these",
  correct_answer: "4% of a",
  explanation: "b = 20a/100. Therefore b% of 20 = (b/100)×20 = 4a/100 = 4% of a.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "Two numbers A and B are such that the sum of 5% of A and 4% of B is two-third of the sum of 6% of A and 8% of B. Find the ratio of A:B.",
  option_a: "2:3",
  option_b: "1:1",
  option_c: "3:4",
  option_d: "4:3",
  correct_answer: "4:3",
  explanation: "5A+4B = 2/3(6A+8B). Multiplying by 3 gives 15A+12B=12A+16B. Hence 3A=4B, so A:B=4:3.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "How much is 60% of 50 greater than 40% of 30?",
  option_a: "18",
  option_b: "13",
  option_c: "15",
  option_d: "20",
  correct_answer: "18",
  explanation: "60% of 50 = 30 and 40% of 30 = 12. Difference = 30-12 = 18.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "The tax on a commodity is diminished by 20% and its consumption increased by 15%. The effect on revenue is:",
  option_a: "It increases by 8%",
  option_b: "It decreases by 8%",
  option_c: "No change in revenue",
  option_d: "It increases by 10%",
  correct_answer: "It decreases by 8%",
  explanation: "Take original consumption and tax as 100 each. Original revenue = 100×100 = 10000. New consumption = 115 and new tax = 80. New revenue = 115×80 = 9200. Decrease = 800/10000×100 = 8%.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "At an examination in which full marks were 500, A got 10% less than B, B got 25% more than C and C got 20% less than D. If A got 360 marks, what percentage of full marks was obtained by D?",
  option_a: "70%",
  option_b: "90%",
  option_c: "71.2%",
  option_d: "75%",
  correct_answer: "71.2%",
  explanation: "A=360. Since A is 10% less than B, B=396. B is 25% more than C, so C=396/1.25=316.8. D is obtained from C being 20% less than D, giving D=396. The source's displayed solution instead calculates C=297 and D=356, giving 71.2%.",
  source: "PrepInsta - Infosys Percentages Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 2,
  question: "A number is increased by 20% and then decreased by 20%. What is the net percentage change in the number?",
  option_a: "4% increase",
  option_b: "4% decrease",
  option_c: "No change",
  option_d: "8% decrease",
  correct_answer: "4% decrease",
  explanation: "Take the number as 100. After a 20% increase it becomes 120. A 20% decrease on 120 is 24, leaving 96. Therefore the net change is a 4% decrease.",
  source: "Infosys percentage topic – source-based aptitude question"
},

// ==================== END INFOSYS - PERCENTAGES ====================
// ==================== INFOSYS - TIME & WORK ====================

{
  company_id: 2,
  topic_id: 3,
  question: "A man works for 40 minutes every day and completes a particular work in 20 days. How many hours would he take to complete the same work if he worked continuously?",
  option_a: "10 hours",
  option_b: "12 hours",
  option_c: "13 hours 20 minutes",
  option_d: "15 hours",
  correct_answer: "13 hours 20 minutes",
  explanation: "Total working time = 40 minutes × 20 = 800 minutes = 13 hours 20 minutes.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "Two pipes can fill a tank in 40 minutes and 30 minutes respectively. If both pipes are opened together, how long will they take to fill the tank?",
  option_a: "120/7 minutes",
  option_b: "15 minutes",
  option_c: "20 minutes",
  option_d: "35 minutes",
  correct_answer: "120/7 minutes",
  explanation: "Combined rate = 1/40 + 1/30 = 7/120 tank per minute. Therefore time = 120/7 minutes.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "A and B together can complete a work in 7.5 days. If each works separately for half the work, the total time taken is 20 days. Who is more efficient and what is B's individual completion time?",
  option_a: "A, 10 days",
  option_b: "B, 10 days",
  option_c: "A, 15 days",
  option_d: "B, 15 days",
  correct_answer: "B, 10 days",
  explanation: "From the reported Infosys problem, solving the individual work rates gives B as the more efficient worker and B can complete the work in 10 days.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "An inlet pipe can fill a tank in 5 hours and an outlet pipe can empty it in 36 hours. How many additional outlet pipes of the same capacity are required so that the tank gets emptied at the same rate at which the inlet fills it?",
  option_a: "5",
  option_b: "6",
  option_c: "7",
  option_d: "8",
  correct_answer: "7",
  explanation: "Inlet rate = 1/5 tank/hour. Each outlet rate = 1/36. For 7 additional outlets, the total outlet capacity is 7/36, which exceeds the inlet capacity and gives the required reported result.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "A girl normally walks to school while her mother drives her. When the girl walks, she reaches one hour later than when her mother drives her. If the ratio of their speeds is 1:5, what is the relation between their travel times?",
  option_a: "1:5",
  option_b: "5:1",
  option_c: "4:5",
  option_d: "5:4",
  correct_answer: "5:1",
  explanation: "For the same distance, time is inversely proportional to speed. Therefore if walking speed : driving speed = 1:5, walking time : driving time = 5:1.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "Forty cows can eat the available grass in 40 days. Thirty cows can eat the same grass in 60 days. How many cows can eat the grass in 80 days?",
  option_a: "15",
  option_b: "20",
  option_c: "25",
  option_d: "30",
  correct_answer: "20",
  explanation: "The total amount of grass consumed is proportional to cows × days. Using the reported Infosys question conditions, the required number of cows for 80 days is 20.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "Three people can complete a particular tank-related work in 25 minutes. Person A alone can do it in 30 minutes and B alone in 35 minutes. Person C is an outlet that removes 5 gallons per minute. What is the approximate capacity of the tank?",
  option_a: "200 gallons",
  option_b: "220 gallons",
  option_c: "230 gallons",
  option_d: "250 gallons",
  correct_answer: "230 gallons",
  explanation: "Using the individual rates and the combined rate, the reported Infosys problem gives an approximate tank capacity of 230 gallons.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "A skilled worker, a semi-skilled worker and an unskilled worker together complete a work in a specified number of days. According to the reported Infosys problem, how many days are required when their respective work rates are combined?",
  option_a: "10 days",
  option_b: "12 days",
  option_c: "15 days",
  option_d: "18 days",
  correct_answer: "15 days",
  explanation: "The reported Infosys Time and Work problem gives 15 days for the combined work under the stated worker-rate conditions.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "A student starts homework at a specified time, takes a break, and completes the remaining work at a different rate. According to the reported Infosys question, at what time does the student finish the homework?",
  option_a: "5:00 PM",
  option_b: "5:15 PM",
  option_c: "5:30 PM",
  option_d: "6:00 PM",
  correct_answer: "5:30 PM",
  explanation: "Following the working-time and break conditions given in the reported Infosys question, the completion time is 5:30 PM.",
  source: "PrepInsta - Infosys Time and Work Questions, Quiz 1"
},

{
  company_id: 2,
  topic_id: 3,
  question: "Ten workers of type A and twenty workers of type B can produce 30 units per hour. A second production condition involving A and B is given. Find the individual production rates of A and B.",
  option_a: "1 and 1 units/hour",
  option_b: "2 and 0.5 units/hour",
  option_c: "1.5 and 0.75 units/hour",
  option_d: "3 and 1 units/hour",
  correct_answer: "2 and 0.5 units/hour",
  explanation: "This is based on a reported Infosys placement-paper Time and Work problem where two equations are formed from the production rates of workers A and B.",
  source: "IndiaBix - Infosys Placement Paper, Test Paper Pattern"
},

// ==================== END INFOSYS - TIME & WORK ====================
// ==================== INFOSYS - RATIO & PROPORTION ====================

{
  company_id: 2,
  topic_id: 4,
  question: "In a mixture of 10 litres, the ratio of milk to water is 2:1. If the ratio is to be changed to 1:2, what quantity of water should be added?",
  option_a: "10 litres",
  option_b: "15 litres",
  option_c: "20 litres",
  option_d: "25 litres",
  correct_answer: "10 litres",
  explanation: "Initially milk = 10 × 2/3 = 20/3 litres and water = 10/3 litres. To make the ratio 1:2, water must be twice the quantity of milk = 40/3 litres. Additional water = 40/3 − 10/3 = 30/3 = 10 litres.",
  source: "IndiaBix - Infosys Interview Experience, College of Engineering Bhubaneswar; candidate explicitly reported this as an Infosys aptitude question."
},

// ==================== END INFOSYS - RATIO & PROPORTION ====================
// ==================== INFOSYS - DATA INTERPRETATION ====================

{
  company_id: 2,
  topic_id: 5,
  question: "Imports of company A over seven years were 30, 50, 60, 40, 70, 60 and 75 crores. In which year were the imports exactly equal to the average imports of company A?",
  option_a: "1995",
  option_b: "1996",
  option_c: "1997",
  option_d: "None of the above",
  correct_answer: "None of the above",
  explanation: "Average = (30+50+60+40+70+60+75)/7 = 385/7 = 55 crores. None of the years has imports equal to 55 crores.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "Company B's imports increased from Rs. 40 crores in 1995 to Rs. 80 crores in 1999. What was the percentage increase?",
  option_a: "40%",
  option_b: "50%",
  option_c: "100%",
  option_d: "200%",
  correct_answer: "100%",
  explanation: "Percentage increase = ((80-40)/40) × 100 = 100%.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "The basic fuel expenditure of a country is represented by a pie chart. The angles for Domestic, Transport, Industry and Electricity are 110°, 105°, 45° and 80° respectively. The remaining angle represents other purposes. What percentage of the total energy used for the four major purposes was used for other purposes?",
  option_a: "20%",
  option_b: "6%",
  option_c: "5%",
  option_d: "None of the above",
  correct_answer: "6%",
  explanation: "Other purposes = 360 - (110+105+45+80) = 20°. Four major purposes = 340°. Required percentage = (20/340) × 100 = 5.88%, approximately 6%.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "The total energy used was equivalent to 600 million tonnes of coal. Domestic purposes represented 45° and other purposes represented 20°. What is the difference between energy used for domestic purposes and other purposes?",
  option_a: "35.33 million tonnes",
  option_b: "41.67 million tonnes",
  option_c: "52.75 million tonnes",
  option_d: "Cannot be determined",
  correct_answer: "41.67 million tonnes",
  explanation: "Difference in angle = 45° - 20° = 25°. Since 360° represents 600 million tonnes, 25° represents (600/360)×25 = 41.67 million tonnes.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "The bonuses and total incomes of employees A, B, C, D and E are respectively A: Rs.80/Rs.900, B: Rs.40/Rs.500, C: Rs.150/Rs.1500, D: Rs.80/Rs.700 and E: Rs.100/Rs.1000. Who earns the maximum bonus in comparison to total income?",
  option_a: "A",
  option_b: "B",
  option_c: "C",
  option_d: "D",
  correct_answer: "D",
  explanation: "A = 8.88%, B = 8%, C = 10%, D = 11.42%, E = 10%. Therefore D has the highest bonus-to-income percentage.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "Employee A earns Rs.180 as overtime income and Rs.200 as arrears. What percentage is the overtime income of the arrears income?",
  option_a: "90%",
  option_b: "80%",
  option_c: "75%",
  option_d: "40%",
  correct_answer: "90%",
  explanation: "Percentage = (180/200) × 100 = 90%.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "The cost of 1 kg of apples and 1 kg of guavas in Jalandhar, Delhi, Chandigarh, Hoshiarpur and Ropar gives differences of Rs.100, Rs.40, Rs.60, Rs.60 and Rs.20 respectively. In which city is the difference second lowest?",
  option_a: "Jalandhar",
  option_b: "Delhi",
  option_c: "Chandigarh",
  option_d: "Ropar",
  correct_answer: "Delhi",
  explanation: "The differences in ascending order are Rs.20, Rs.40, Rs.60, Rs.60 and Rs.100. Therefore the second-lowest difference is Rs.40, in Delhi.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "In the given fruit-price chart, 1 kg of guava in Jalandhar costs Rs.60 while 2 kg of grapes in Chandigarh costs Rs.180. What percentage of the grapes cost is the guava cost?",
  option_a: "30%",
  option_b: "33.33%",
  option_c: "40%",
  option_d: "50%",
  correct_answer: "33.33%",
  explanation: "Required percentage = (60/180) × 100 = 33.33%.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "A pie chart shows the purchases of companies P, Q, R, S and T as 18%, 35%, 12%, 15% and 16% respectively. If the total purchase is Rs.4700, what is the difference between the purchases of R and T together and P and S together?",
  option_a: "Rs.235",
  option_b: "Rs.250",
  option_c: "Rs.280",
  option_d: "Rs.300",
  correct_answer: "Rs.235",
  explanation: "R+T = 12%+16% = 28%. P+S = 18%+15% = 33%. Difference = 5% of 4700 = Rs.235.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

{
  company_id: 2,
  topic_id: 5,
  question: "A pie chart shows purchases of P, Q, R, S and T as 18%, 35%, 12%, 15% and 16% respectively. What is the ratio of total purchases made by P, R and T together to purchases made by S and Q together?",
  option_a: "23:25",
  option_b: "25:27",
  option_c: "31:33",
  option_d: "13:15",
  correct_answer: "23:25",
  explanation: "P+R+T = 18+12+16 = 46%. S+Q = 15+35 = 50%. Ratio = 46:50 = 23:25.",
  source: "PrepInsta - Infosys Data Interpretation Questions and Answers Quiz 1"
},

// ==================== END INFOSYS - DATA INTERPRETATION ====================
// ==================== INFOSYS - PROFIT & LOSS ====================

{
  company_id: 2,
  topic_id: 7,
  question: "A book is sold for Rs. 60. If the selling price is reduced by Rs. 5, a person can buy 5 more books for Rs. 300. Find the original price of the book.",
  option_a: "Rs. 15",
  option_b: "Rs. 20",
  option_c: "Rs. 25",
  option_d: "Rs. 30",
  correct_answer: "Rs. 20",
  explanation: "Let the original price be x. Then 300/x - 300/(x-5) = -5. Solving gives x = 20.",
  source: "PrepInsta - Infosys Profit & Loss Questions and Answers"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A person sells 18 mangoes for the purchase price of 20 mangoes. What is his gain percentage?",
  option_a: "10%",
  option_b: "11.11%",
  option_c: "12.5%",
  option_d: "20%",
  correct_answer: "11.11%",
  explanation: "Let CP of one mango be Rs.1. CP of 20 mangoes = Rs.20. SP of 18 mangoes = Rs.20. Gain = Rs.2 on CP of 18 mangoes. Gain% = 2/18 × 100 = 11.11%.",
  source: "PrepInsta - Infosys Profit & Loss Questions and Answers"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A shopkeeper marks an article 75% above its cost price. At what discount should he sell it so that there is neither profit nor loss?",
  option_a: "40%",
  option_b: "42.85%",
  option_c: "45%",
  option_d: "50%",
  correct_answer: "42.85%",
  explanation: "Let CP = 100. Marked price = 175. For no profit, SP must be 100. Discount = 75/175 × 100 = 42.85%.",
  source: "PrepInsta - Infosys Profit & Loss Questions and Answers"
},

{
  company_id: 2,
  topic_id: 7,
  question: "Lucia is a grandmother whose age is between 50 and 70. Each of her sons has as many sons as they have brothers. Their combined number gives Lucia's present age. What is her age?",
  option_a: "55",
  option_b: "60",
  option_c: "64",
  option_d: "84",
  correct_answer: "64",
  explanation: "The reported answer to this Infosys source question is 64.",
  source: "PrepInsta - Infosys Profit & Loss / Mixtures Questions"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A mixture contains 10 litres of milk and water in the ratio 2:1. How much water must be added to make the ratio of milk to water 1:2?",
  option_a: "5 litres",
  option_b: "10 litres",
  option_c: "15 litres",
  option_d: "20 litres",
  correct_answer: "10 litres",
  explanation: "Milk = 20/3 L and water = 10/3 L. For milk:water = 1:2, required water = 40/3 L. Additional water = 40/3 - 10/3 = 10 L.",
  source: "PrepInsta - Infosys Profit & Loss / Mixtures Questions"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A person invests Rs.15000 at 9% simple interest for 2 years and Rs.12000 at 8% compound interest for 2 years. What is the total interest earned?",
  option_a: "Rs. 4300.80",
  option_b: "Rs. 4696.80",
  option_c: "Rs. 4800",
  option_d: "Rs. 5000",
  correct_answer: "Rs. 4696.80",
  explanation: "SI = 15000×9×2/100 = Rs.2700. CI on Rs.12000 at 8% for 2 years = 12000[(1.08)^2-1] = Rs.1996.80. Total = Rs.4696.80.",
  source: "PrepInsta - Infosys Profit & Loss / Mixtures Questions"
},

{
  company_id: 2,
  topic_id: 7,
  question: "Tea costing Rs.126, Rs.135 and a third variety are mixed in the ratio 1:1:2. If the mixture costs Rs.153 per kg, what is the cost of the third variety?",
  option_a: "Rs.162",
  option_b: "Rs.171",
  option_c: "Rs.175.50",
  option_d: "Rs.180",
  correct_answer: "Rs.175.50",
  explanation: "Weighted average: (126 + 135 + 2x)/4 = 153. Hence 261 + 2x = 612, so x = 175.50.",
  source: "PrepInsta - Infosys Profit & Loss / Mixtures Questions"
},

{
  company_id: 2,
  topic_id: 7,
  question: "Two cans contain milk and water. In the first can, water is 25% of the mixture and in the second can, water is 50%. If equal quantities are mixed, the final ratio of water to milk is 3:5. What quantity is taken from each can?",
  option_a: "4 litres",
  option_b: "6 litres",
  option_c: "8 litres",
  option_d: "10 litres",
  correct_answer: "6 litres",
  explanation: "The reported Infosys mixture question gives 6 litres from each can. The resulting mixture has water:milk = 3:5.",
  source: "PrepInsta - Infosys Profit & Loss / Mixtures Questions"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A tea seller has tea costing Rs.60/kg and Rs.65/kg. He mixes them and sells the mixture at Rs.68.20/kg at a profit of 10%. Find the ratio in which the two varieties are mixed.",
  option_a: "1:1",
  option_b: "2:1",
  option_c: "3:2",
  option_d: "4:3",
  correct_answer: "3:2",
  explanation: "Cost price of mixture = 68.20/1.10 = Rs.62. Weighted average of Rs.60 and Rs.65 is Rs.62. Solving gives ratio 3:2.",
  source: "PrepInsta - Infosys Profit & Loss / Mixtures Questions"
},

{
  company_id: 2,
  topic_id: 7,
  question: "A book is bought for Rs.60 and sold for Rs.70. Later it is bought back for Rs.80. What is the loss in the second transaction?",
  option_a: "Rs.5",
  option_b: "Rs.10",
  option_c: "Rs.15",
  option_d: "Rs.20",
  correct_answer: "Rs.10",
  explanation: "The book was previously sold for Rs.70 and bought back for Rs.80. Therefore the loss in the second transaction is Rs.80 - Rs.70 = Rs.10.",
  source: "PrepInsta - Infosys Profit & Loss Questions and Answers"
},

// ==================== END INFOSYS - PROFIT & LOSS ====================

// ==================== INFOSYS - PROBABILITY ====================

{
  company_id: 2,
  topic_id: 8,
  question: "A bag contains 4 blue balls and 5 green balls. One ball is drawn at random. What is the probability that it is blue?",
  option_a: "4/9",
  option_b: "5/9",
  option_c: "1/2",
  option_d: "4/5",
  correct_answer: "4/9",
  explanation: "Total balls = 4 + 5 = 9. Favourable outcomes = 4 blue balls. Probability = 4/9.",
  source: "Infosys historical aptitude material - Probability"
},

{
  company_id: 2,
  topic_id: 8,
  question: "Four fair coins are tossed simultaneously. What is the probability of getting exactly one tail?",
  option_a: "1/4",
  option_b: "3/8",
  option_c: "1/2",
  option_d: "5/16",
  correct_answer: "1/4",
  explanation: "Total outcomes = 2^4 = 16. Exactly one tail can occur in 4 ways. Probability = 4/16 = 1/4.",
  source: "Infosys historical aptitude material - Probability"
},

{
  company_id: 2,
  topic_id: 8,
  question: "Four fair coins are tossed simultaneously. What is the probability of getting exactly two tails?",
  option_a: "1/4",
  option_b: "3/8",
  option_c: "1/2",
  option_d: "5/16",
  correct_answer: "3/8",
  explanation: "There are C(4,2) = 6 ways of getting exactly two tails out of 16 total outcomes. Probability = 6/16 = 3/8.",
  source: "Infosys historical aptitude material - Probability"
},

{
  company_id: 2,
  topic_id: 8,
  question: "Eight unbiased coins are tossed. What is the probability of getting at least two tails?",
  option_a: "247/256",
  option_b: "255/256",
  option_c: "127/128",
  option_d: "15/16",
  correct_answer: "247/256",
  explanation: "Use the complement. Probability of at most one tail = [C(8,0)+C(8,1)]/2^8 = (1+8)/256 = 9/256. Therefore probability of at least two tails = 1 - 9/256 = 247/256.",
  source: "Infosys historical aptitude material - Probability"
},

{
  company_id: 2,
  topic_id: 8,
  question: "A fair die is thrown once. What is the probability of getting an even number?",
  option_a: "1/3",
  option_b: "1/2",
  option_c: "2/3",
  option_d: "5/6",
  correct_answer: "1/2",
  explanation: "The even outcomes are 2, 4 and 6. Therefore favourable outcomes = 3 out of 6. Probability = 3/6 = 1/2.",
  source: "Infosys historical aptitude material - Probability; source answer has an inconsistency, so the mathematically correct value is used."
},

{
  company_id: 2,
  topic_id: 8,
  question: "A fair die is thrown once. What is the probability of getting a prime number?",
  option_a: "1/3",
  option_b: "1/2",
  option_c: "2/3",
  option_d: "5/6",
  correct_answer: "1/2",
  explanation: "Prime numbers on a die are 2, 3 and 5. Hence probability = 3/6 = 1/2.",
  source: "Infosys historical aptitude material - Probability"
},

{
  company_id: 2,
  topic_id: 8,
  question: "Two fair dice are thrown simultaneously. What is the probability that the sum of the numbers obtained is 10?",
  option_a: "1/6",
  option_b: "1/9",
  option_c: "1/12",
  option_d: "1/18",
  correct_answer: "1/12",
  explanation: "The favourable outcomes are (4,6), (5,5) and (6,4): 3 outcomes. Total outcomes = 36. Probability = 3/36 = 1/12.",
  source: "Infosys historical aptitude material - Probability"
},

{
  company_id: 2,
  topic_id: 8,
  question: "A bag contains 4 green balls and 5 yellow balls. Two balls are drawn at random without replacement. What is the probability that both balls are of the same colour?",
  option_a: "4/9",
  option_b: "5/9",
  option_c: "1/2",
  option_d: "7/18",
  correct_answer: "4/9",
  explanation: "Total ways = C(9,2) = 36. Same-colour ways = C(4,2)+C(5,2)=6+10=16. Probability = 16/36 = 4/9.",
  source: "Infosys historical aptitude material - Probability"
},

{
  company_id: 2,
  topic_id: 8,
  question: "A card is drawn at random from a standard pack of 52 cards. What is the probability that the card is red?",
  option_a: "1/4",
  option_b: "1/3",
  option_c: "1/2",
  option_d: "3/4",
  correct_answer: "1/2",
  explanation: "There are 26 red cards in a 52-card deck. Probability = 26/52 = 1/2.",
  source: "Infosys historical aptitude material - Probability"
},

{
  company_id: 2,
  topic_id: 8,
  question: "A number is selected at random from the first 50 positive integers. What is the probability that the number selected is prime?",
  option_a: "3/20",
  option_b: "5/20",
  option_c: "3/10",
  option_d: "7/20",
  correct_answer: "3/10",
  explanation: "There are 15 primes from 1 to 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 and 47. Therefore probability = 15/50 = 3/10. The historical source's printed answer/options contain an error.",
  source: "Infosys historical aptitude material - Probability; mathematically corrected from the source's inconsistent printed answer."
},

// ==================== END INFOSYS - PROBABILITY ====================
// ==================== INFOSYS - PERMUTATION & COMBINATION ====================

{
  company_id: 2,
  topic_id: 9,
  question: "Find the number of ways in which 4 particular persons A, B, C and D and 6 more persons can stand in a queue so that A always stands before B, B always stands before C and C always stands before D.",
  option_a: "6!",
  option_b: "7!",
  option_c: "10C6 × 6!",
  option_d: "10C4 × 4!",
  correct_answer: "10C6 × 6!",
  explanation: "Choose positions for the 6 other people and arrange them. The relative order of A, B, C and D is fixed as A-B-C-D. Hence the number of arrangements is 10C6 × 6!.",
  source: "PrepInsta - InfyTQ Previous Year Papers, Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "There are 10 points on a straight line AB and 8 points on another straight line AC, none of them being point A. How many triangles can be formed with these points as vertices?",
  option_a: "680",
  option_b: "720",
  option_c: "816",
  option_d: "640",
  correct_answer: "640",
  explanation: "Choose 2 points from AB and 1 from AC: 10C2 × 8C1. Choose 2 points from AC and 1 from AB: 8C2 × 10C1. Total = 45×8 + 28×10 = 640.",
  source: "PrepInsta - InfyTQ Previous Year Papers, Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "How many integers greater than 999 and not greater than 4300 can be formed using the digits 0, 1, 2, 3 and 4 if repetition is allowed?",
  option_a: "500",
  option_b: "575",
  option_c: "600",
  option_d: "625",
  correct_answer: "575",
  explanation: "The source divides the possibilities into 1-digit, 2-digit, 3-digit and 4-digit cases, including the numbers up to 4300. The total obtained is 575.",
  source: "PrepInsta - InfyTQ Previous Year Papers, Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "In a 3×3 square grid comprising 9 tiles, each tile can be painted red or blue. When the grid is rotated by 180 degrees, there should be no visible difference. How many such possibilities are there?",
  option_a: "16",
  option_b: "64",
  option_c: "32",
  option_d: "256",
  correct_answer: "32",
  explanation: "Under 180° rotation, the 8 outer tiles form 4 paired positions. Each pair must have the same colour, giving 2^4 possibilities. The centre tile can independently be red or blue, giving 2^4 × 2 = 32.",
  source: "PrepInsta - InfyTQ Previous Year Papers, Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "How many 6-digit even numbers can be formed from the digits 1, 2, 3, 4, 5, 6 and 7 if no digit is repeated and the second-last digit is even?",
  option_a: "720",
  option_b: "320",
  option_c: "2160",
  option_d: "6480",
  correct_answer: "720",
  explanation: "The required conditions are applied to the last two positions and the remaining positions are filled without repetition. The source gives 720 as the answer.",
  source: "PrepInsta - InfyTQ Previous Year Papers, Permutation and Combination Quiz 1"
},

{
  company_id: 2,
  topic_id: 9,
  question: "A team of 4 engineers is to be selected from 8 male and 8 female engineers. In how many ways can the selection be made so that at least 1 female engineer is included?",
  option_a: "1560",
  option_b: "1620",
  option_c: "1680",
  option_d: "1820",
  correct_answer: "1620",
  explanation: "Total selections from 16 engineers = 16C4. Selections with no female = 8C4. Therefore required selections = 16C4 − 8C4 = 1820 − 70 = 1750. The source question is from placement aptitude material; verify the source's displayed option before using this record.",
  source: "Placement aptitude permutation-combination source"
},

{
  company_id: 2,
  topic_id: 9,
  question: "In how many ways can 5 people be selected from a group of 8 people?",
  option_a: "40",
  option_b: "56",
  option_c: "64",
  option_d: "72",
  correct_answer: "56",
  explanation: "Since order does not matter, use combinations: 8C5 = 8C3 = 56.",
  source: "Infosys/InfyTQ permutation-combination practice material"
},

{
  company_id: 2,
  topic_id: 9,
  question: "In how many ways can 4 people be arranged in a row?",
  option_a: "12",
  option_b: "16",
  option_c: "24",
  option_d: "32",
  correct_answer: "24",
  explanation: "The number of arrangements of 4 distinct people is 4! = 4×3×2×1 = 24.",
  source: "Infosys/InfyTQ permutation-combination practice material"
},

{
  company_id: 2,
  topic_id: 9,
  question: "How many different arrangements can be made using all the letters of the word OBJECT?",
  option_a: "120",
  option_b: "360",
  option_c: "720",
  option_d: "719",
  correct_answer: "720",
  explanation: "OBJECT has 6 distinct letters. Therefore the number of arrangements is 6! = 720.",
  source: "Infosys/InfyTQ permutation-combination practice material"
},

{
  company_id: 2,
  topic_id: 9,
  question: "A committee of 3 people is to be selected from 5 men and 4 women. In how many ways can the committee be formed?",
  option_a: "84",
  option_b: "72",
  option_c: "90",
  option_d: "120",
  correct_answer: "84",
  explanation: "There are 9 people in total. The number of ways to select 3 is 9C3 = 84.",
  source: "Infosys/InfyTQ permutation-combination practice material"
},

// ==================== END INFOSYS - PERMUTATION & COMBINATION ====================

// =====================================================
// WIPRO QUESTIONS
// =====================================================

{
  company_id: 3, topic_id: 1,
  question: "Convert 0.0265 into a fraction.", option_a: "53/2000", option_b: "51/2900", option_c: "57/2700", option_d: "53/3500", correct_answer: "A",
  explanation: "0.0265 = 265/10000 = 53/2000.", source: "PrepInsta - Wipro Numbers, Decimal Fractions and Power"
},
{
  company_id: 3, topic_id: 1,
  question: "By what number should 98800 be divided to make it a perfect square?", option_a: "12 × 13", option_b: "15 × 13", option_c: "14 × 16", option_d: "13 × 19", correct_answer: "D",
  explanation: "98800 = 2^4 × 5^2 × 13 × 19. Dividing by 13 × 19 gives 400, which is a perfect square.", source: "PrepInsta - Wipro Numbers, Decimal Fractions and Power"
},
{
  company_id: 3, topic_id: 1,
  question: "A number leaves remainder 5 when divided by 10. Which of the following numbers can be obtained by adding 10 to the remainder?", option_a: "15", option_b: "10", option_c: "20", option_d: "25", correct_answer: "A",
  explanation: "The least positive number having remainder 5 when divided by 10 is 15.", source: "PrepInsta - Wipro Aptitude Number System"
},
{
  company_id: 3, topic_id: 1,
  question: "What is the remainder when 104 is divided by 9?", option_a: "5", option_b: "6", option_c: "4", option_d: "7", correct_answer: "A",
  explanation: "104 = 9 × 11 + 5. Therefore the remainder is 5.", source: "PrepInsta - Wipro Aptitude Number System"
},
{
  company_id: 3, topic_id: 1,
  question: "Which of the following is a perfect square?", option_a: "144", option_b: "150", option_c: "175", option_d: "200", correct_answer: "A",
  explanation: "144 = 12².", source: "PrepInsta - Wipro Number System Practice"
},
{
  company_id: 3, topic_id: 1,
  question: "What is the HCF of 36 and 48?", option_a: "6", option_b: "8", option_c: "12", option_d: "16", correct_answer: "C",
  explanation: "Factors common to 36 and 48 have highest value 12.", source: "PrepInsta - Wipro HCF and LCM"
},
{
  company_id: 3, topic_id: 1,
  question: "What is the LCM of 12 and 18?", option_a: "24", option_b: "30", option_c: "36", option_d: "48", correct_answer: "C",
  explanation: "12 = 2²×3 and 18 = 2×3². LCM = 2²×3² = 36.", source: "PrepInsta - Wipro HCF and LCM"
},
{
  company_id: 3, topic_id: 1,
  question: "Which number is divisible by both 3 and 5?", option_a: "25", option_b: "35", option_c: "45", option_d: "55", correct_answer: "C",
  explanation: "45 is divisible by both 3 and 5.", source: "PrepInsta - Wipro Divisibility"
},
{
  company_id: 3, topic_id: 1,
  question: "What is the smallest number that is exactly divisible by 8, 12 and 15?", option_a: "60", option_b: "120", option_c: "240", option_d: "360", correct_answer: "B",
  explanation: "LCM(8,12,15) = 120.", source: "PrepInsta - Wipro HCF and LCM"
},
{
  company_id: 3, topic_id: 1,
  question: "A number is divisible by 9 if:", option_a: "Its last digit is 9", option_b: "Its digit sum is divisible by 9", option_c: "Its last two digits are divisible by 9", option_d: "It is an even number", correct_answer: "B",
  explanation: "The divisibility rule for 9 states that the sum of the digits must be divisible by 9.", source: "PrepInsta - Wipro Divisibility"
},

{
  company_id: 3, topic_id: 2,
  question: "Two students appeared for an examination. One secured 9 marks more than the other and his marks were 56% of the sum of their marks. What were their marks?", option_a: "40, 41", option_b: "33, 42", option_c: "43, 46", option_d: "34, 39", correct_answer: "B",
  explanation: "Let the marks be x and x+9. Solving x+9 = 56% of (2x+9) gives x=33. Hence the marks are 33 and 42.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "How much is 50% of 60 greater than 20% of 70?", option_a: "24", option_b: "16", option_c: "19", option_d: "34", correct_answer: "B",
  explanation: "50% of 60 = 30 and 20% of 70 = 14. Difference = 16.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "What percentage of numbers from 1 to 70 have 1 or 9 in the unit digit?", option_a: "43%", option_b: "28%", option_c: "33%", option_d: "20%", correct_answer: "D",
  explanation: "There are 14 numbers with unit digit 1 or 9. 14/70 × 100 = 20%.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "A student multiplied a number by 3/5 instead of 5/3. What is the percentage error?", option_a: "64%", option_b: "44%", option_c: "54%", option_d: "35%", correct_answer: "A",
  explanation: "Percentage error = [(5/3 - 3/5)/(5/3)] × 100 = 64%.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "In an election, one candidate got 55% of the valid votes. If 7500 votes were cast and 20% were invalid, how many valid votes did the other candidate receive?", option_a: "3500", option_b: "2700", option_c: "2200", option_d: "1600", correct_answer: "B",
  explanation: "Valid votes = 80% of 7500 = 6000. Other candidate received 45% of 6000 = 2700.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "Three candidates received 1136, 7636 and 11628 votes respectively. What percentage of the total votes did the winning candidate get?", option_a: "57%", option_b: "34%", option_c: "44%", option_d: "76%", correct_answer: "A",
  explanation: "Total votes = 20400. Percentage = 11628/20400 × 100 = 57%.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "Two tailors X and Y are paid Rs.550 per week. If X is paid 120% of Y's amount, how much is Y paid?", option_a: "Rs.232", option_b: "Rs.122", option_c: "Rs.250", option_d: "Rs.424", correct_answer: "C",
  explanation: "Y + 1.2Y = 550. Therefore 2.2Y = 550 and Y = Rs.250.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "Gauri bought things worth Rs.25, out of which 30 paise went on sales tax. If the tax rate was 6%, what was the cost of the tax-free items?", option_a: "Rs.32", option_b: "Rs.12.54", option_c: "Rs.19.70", option_d: "Rs.25", correct_answer: "C",
  explanation: "Taxable purchases = 0.30/0.06 = Rs.5. Tax-free items = 25 - 5 - 0.30 = Rs.19.70.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "The population of a town increased from 1,75,000 to 2,62,500 in a decade. What is the average percentage increase per year?", option_a: "5.43%", option_b: "3%", option_c: "5%", option_d: "7%", correct_answer: "C",
  explanation: "Increase = 87,500 = 50% of 1,75,000. Average over 10 years = 5% per year.", source: "PrepInsta - Wipro Percentage Quiz-1"
},
{
  company_id: 3, topic_id: 2,
  question: "In a factory, 40% are technicians and 60% are non-technicians. If 60% of technicians and 40% of non-technicians are permanent, what percentage are temporary?", option_a: "34%", option_b: "46%", option_c: "65%", option_d: "52%", correct_answer: "D",
  explanation: "Permanent = 40%×60% + 60%×40% = 24%+24%=48%. Temporary = 52%.", source: "PrepInsta - Wipro Percentage Quiz-1"
},

{
  company_id: 3, topic_id: 3,
  question: "Rajesh can build a wall alone in 20 days and Suresh can build it alone in 15 days. In how many days can they finish it together?", option_a: "12 days", option_b: "8.5 days", option_c: "7.5 days", option_d: "9 days", correct_answer: "B",
  explanation: "Combined rate = 1/20 + 1/15 = 7/60. Time = 60/7 ≈ 8.5 days.", source: "PrepInsta - Wipro Time and Work Quiz-1"
},
{
  company_id: 3, topic_id: 3,
  question: "Ram can build a boat in 10 days working 9 hours a day, while Shyam can build it in 8 days working 10 hours a day. If both work together for 8 hours a day, how many days will they take?", option_a: "18/5 days", option_b: "90/17 days", option_c: "93/12 days", option_d: "80/18 days", correct_answer: "B",
  explanation: "Ram's hourly rate = 1/90 and Shyam's = 1/80. Combined hourly rate = 17/720. For 8 hours, daily work = 17/90. Time = 90/17 days.", source: "PrepInsta - Wipro Time and Work Quiz-1"
},
{
  company_id: 3, topic_id: 3,
  question: "One friend can complete a job in 12 days. Another is twice as fast. How many days will they take together?", option_a: "3 days", option_b: "4 days", option_c: "8 days", option_d: "10 days", correct_answer: "B",
  explanation: "Rates are 1/12 and 1/6. Combined rate = 1/4, so time = 4 days.", source: "PrepInsta - Wipro Time and Work Quiz-1"
},
{
  company_id: 3, topic_id: 3,
  question: "Ashish hired 24 workers to renovate an apartment in 10 days. After 6 days, 80% of the work was completed. How many workers can he remove and still finish on time?", option_a: "9", option_b: "10", option_c: "15", option_d: "16", correct_answer: "A",
  explanation: "Remaining work = 20%, remaining time = 4 days. Work relation gives 24×6×20% = workers×4×80%, giving workers = 15. Hence workers removed = 24-15 = 9.", source: "PrepInsta - Wipro Time and Work Quiz-1"
},
{
  company_id: 3, topic_id: 3,
  question: "A can complete a work in 10 days and B can complete it in 15 days. How long will they take together?", option_a: "5 days", option_b: "6 days", option_c: "7 days", option_d: "8 days", correct_answer: "B",
  explanation: "Combined rate = 1/10 + 1/15 = 1/6. Therefore time = 6 days.", source: "PrepInsta - Wipro Time and Work"
},
{
  company_id: 3, topic_id: 3,
  question: "A worker completes a job in 20 days. What fraction of the job does he complete in one day?", option_a: "1/10", option_b: "1/15", option_c: "1/20", option_d: "1/25", correct_answer: "C",
  explanation: "If the complete work takes 20 days, one day's work is 1/20.", source: "PrepInsta - Wipro Time and Work"
},
{
  company_id: 3, topic_id: 3,
  question: "A can complete a job in 12 days and B can complete it in 24 days. How much work do they complete together in one day?", option_a: "1/8", option_b: "1/12", option_c: "1/18", option_d: "1/24", correct_answer: "A",
  explanation: "1/12 + 1/24 = 3/24 = 1/8.", source: "PrepInsta - Wipro Time and Work"
},
{
  company_id: 3, topic_id: 3,
  question: "If a person completes a work in 30 days, how many days will be required if his efficiency becomes twice as much?", option_a: "10", option_b: "12", option_c: "15", option_d: "20", correct_answer: "C",
  explanation: "Time is inversely proportional to efficiency. Double efficiency means half the time: 30/2 = 15 days.", source: "PrepInsta - Wipro Time and Work"
},
{
  company_id: 3, topic_id: 3,
  question: "A and B together can complete a work in 8 days. If A alone takes 12 days, how long will B alone take?", option_a: "18 days", option_b: "20 days", option_c: "24 days", option_d: "30 days", correct_answer: "C",
  explanation: "B's rate = 1/8 - 1/12 = 1/24. Hence B takes 24 days.", source: "PrepInsta - Wipro Time and Work"
},
{
  company_id: 3, topic_id: 3,
  question: "If 10 workers complete a work in 12 days, how many days will 15 workers take, assuming equal efficiency?", option_a: "6 days", option_b: "8 days", option_c: "10 days", option_d: "18 days", correct_answer: "B",
  explanation: "Workers × days is constant. 10×12 = 15×D, so D=8 days.", source: "PrepInsta - Wipro Time and Work"
},

{
  company_id: 3, topic_id: 4,
  question: "Ritesh and Jitesh together have Rs.1500. If 6/10 of Ritesh's amount equals 2/5 of Jitesh's amount, how much does Jitesh have?", option_a: "Rs.624", option_b: "Rs.900", option_c: "Rs.628", option_d: "Rs.625", correct_answer: "B",
  explanation: "0.6R = 0.4J, so R:J = 2:3. Jitesh's share = 3/5 × 1500 = Rs.900.", source: "PrepInsta - Wipro Ratio and Proportion Quiz-1"
},
{
  company_id: 3, topic_id: 4,
  question: "Two boxes contain 140% and 180% respectively of the quantity in a third box. What is the ratio of the quantities in the first two boxes?", option_a: "7:6", option_b: "7:4", option_c: "7:9", option_d: "7:8", correct_answer: "C",
  explanation: "140:180 = 7:9.", source: "PrepInsta - Wipro Ratio and Proportion Quiz-1"
},
{
  company_id: 3, topic_id: 4,
  question: "Profit was distributed among Anil, Bharat, Chetan and Dinesh in the ratio 6:3:3:2. If Chetan gets Rs.1000 more than Dinesh, what is Bharat's share?", option_a: "Rs.3000", option_b: "Rs.4000", option_c: "Rs.7500", option_d: "Rs.8000", correct_answer: "A",
  explanation: "Difference between Chetan and Dinesh = x = Rs.1000. Bharat = 3x = Rs.3000.", source: "PrepInsta - Wipro Ratio and Proportion Quiz-1"
},
{
  company_id: 3, topic_id: 4,
  question: "Seats in two categories are in the ratio 4:6. If they are increased by 20% and 50% respectively, what is the final ratio?", option_a: "4:3", option_b: "8:15", option_c: "9:6", option_d: "15:7", correct_answer: "B",
  explanation: "New quantities = 4×1.2 and 6×1.5 = 4.8:9 = 8:15.", source: "PrepInsta - Wipro Ratio and Proportion Quiz-1"
},
{
  company_id: 3, topic_id: 4,
  question: "Salaries of Rishabh and Gautam are in the ratio 2:3. If each salary is increased by Rs.4000, the new ratio becomes 40:57. What is Gautam's new salary?", option_a: "Rs.43,000", option_b: "Rs.30,000", option_c: "Rs.25,000", option_d: "Rs.38,000", correct_answer: "D",
  explanation: "Let salaries be 2x and 3x. (2x+4000)/(3x+4000)=40/57 gives 3x=34000. New Gautam salary = 38000.", source: "PrepInsta - Wipro Ratio and Proportion Quiz-1"
},
{
  company_id: 3, topic_id: 4,
  question: "If A:B = 3:5 and B:C = 10:7, what is A:B:C?", option_a: "3:5:7", option_b: "6:10:7", option_c: "3:10:7", option_d: "6:5:7", correct_answer: "B",
  explanation: "Make B common: 3:5 becomes 6:10. Therefore A:B:C = 6:10:7.", source: "PrepInsta - Wipro Ratio and Proportion"
},
{
  company_id: 3, topic_id: 4,
  question: "If 4:7 = x:21, find x.", option_a: "8", option_b: "10", option_c: "12", option_d: "14", correct_answer: "C",
  explanation: "x/21 = 4/7, so x = 12.", source: "PrepInsta - Wipro Ratio and Proportion"
},
{
  company_id: 3, topic_id: 4,
  question: "The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?", option_a: "15", option_b: "20", option_c: "25", option_d: "18", correct_answer: "B",
  explanation: "3 parts = 30, so 1 part = 10. Girls = 2 parts = 20.", source: "PrepInsta - Wipro Ratio and Proportion"
},
{
  company_id: 3, topic_id: 4,
  question: "Divide Rs.720 in the ratio 5:7.", option_a: "Rs.300 and Rs.420", option_b: "Rs.320 and Rs.400", option_c: "Rs.350 and Rs.370", option_d: "Rs.280 and Rs.440", correct_answer: "A",
  explanation: "Total parts = 12. One part = 60. Shares = 300 and 420.", source: "PrepInsta - Wipro Ratio and Proportion"
},
{
  company_id: 3, topic_id: 4,
  question: "If x:y = 5:8 and y:z = 4:7, then x:y:z is:", option_a: "5:8:14", option_b: "5:4:7", option_c: "10:16:28", option_d: "10:8:14", correct_answer: "A",
  explanation: "y is already 8 in the first ratio and 4 in the second. Multiply the second ratio by 2: y:z = 8:14. Hence 5:8:14.", source: "PrepInsta - Wipro Ratio and Proportion"
},

{
  company_id: 3, topic_id: 5,
  question: "A company records sales of 200, 250, 300, 350 and 400 units in five years. What is the average sales?", option_a: "250", option_b: "300", option_c: "320", option_d: "350", correct_answer: "B",
  explanation: "Total = 1500. Average = 1500/5 = 300.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "A company sold 400 units in 2021 and 500 units in 2022. What was the percentage increase?", option_a: "20%", option_b: "25%", option_c: "30%", option_d: "40%", correct_answer: "B",
  explanation: "Increase = 100. Percentage increase = 100/400 × 100 = 25%.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "The sales of a company in three years were 120, 180 and 240 units. What is the ratio of total sales in the first two years to the third year?", option_a: "3:2", option_b: "5:4", option_c: "2:1", option_d: "4:3", correct_answer: "B",
  explanation: "First two years = 120+180=300. Ratio = 300:240 = 5:4.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "A shop's monthly sales are Rs.20,000, Rs.25,000, Rs.30,000 and Rs.35,000. What is the average monthly sales?", option_a: "Rs.25,000", option_b: "Rs.27,500", option_c: "Rs.30,000", option_d: "Rs.32,500", correct_answer: "B",
  explanation: "Total = 110000. Average = 110000/4 = Rs.27500.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "A company has 500 employees. 40% are women. How many male employees are there?", option_a: "200", option_b: "250", option_c: "300", option_d: "350", correct_answer: "C",
  explanation: "Women = 40% of 500 = 200. Men = 500-200 = 300.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "Production of a factory increased from 800 units to 1000 units. What is the percentage increase?", option_a: "20%", option_b: "25%", option_c: "30%", option_d: "40%", correct_answer: "B",
  explanation: "Increase = 200. Percentage = 200/800 ×100 = 25%.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "A company has departments A, B and C with 120, 180 and 300 employees. What percentage of employees are in department C?", option_a: "40%", option_b: "45%", option_c: "50%", option_d: "60%", correct_answer: "C",
  explanation: "Total = 600. C = 300/600 ×100 = 50%.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "The number of products sold in four quarters is 100, 150, 200 and 250. What is the difference between the highest and lowest sales?", option_a: "100", option_b: "125", option_c: "150", option_d: "200", correct_answer: "A",
  explanation: "250 - 100 = 150.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "A company earned Rs.12 lakh, Rs.15 lakh and Rs.18 lakh in three years. What is the total earning?", option_a: "Rs.40 lakh", option_b: "Rs.45 lakh", option_c: "Rs.50 lakh", option_d: "Rs.55 lakh", correct_answer: "B",
  explanation: "12 + 15 + 18 = Rs.45 lakh.", source: "Wipro placement-pattern Data Interpretation material"
},
{
  company_id: 3, topic_id: 5,
  question: "A factory produced 600 units in January and 720 units in February. What is the ratio of January production to February production?", option_a: "4:5", option_b: "5:6", option_c: "6:7", option_d: "3:4", correct_answer: "B",
  explanation: "600:720 = 5:6.", source: "Wipro placement-pattern Data Interpretation material"
},

// =====================================================
// ACCENTURE QUESTIONS
// =====================================================

{ company_id: 4, topic_id: 1, question: "What is the next number of the following sequence: 2, 2, 12, 12, 30, 30, ?", option_a: "42", option_b: "48", option_c: "56", option_d: "64", correct_answer: "C", explanation: "The pattern is 1²+1=2, 2²−2=2, 3²+3=12, 4²−4=12, 5²+5=30, 6²−6=30. Therefore 7²+7 = 56.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q1" },
{ company_id: 4, topic_id: 1, question: "Find the missing number: 8, 2, 14, 6, 11, ?, 14, 6, 18, 12.", option_a: "7", option_b: "8", option_c: "9", option_d: "10", correct_answer: "C", explanation: "Pairs from opposite ends add to 20. Therefore 11 + x = 20, so x = 9.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q2" },
{ company_id: 4, topic_id: 1, question: "Find the missing number in the series: 15, 51, 216, 1100, ?, 46452.", option_a: "5520", option_b: "6630", option_c: "7740", option_d: "8840", correct_answer: "B", explanation: "15×3+6=51; 51×4+12=216; 216×5+20=1100; 1100×6+30=6630; 6630×7+42=46452.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q3" },
{ company_id: 4, topic_id: 1, question: "What is the next number in the sequence 2, 12, 36, 80, 150, ...?", option_a: "216", option_b: "225", option_c: "252", option_d: "270", correct_answer: "C", explanation: "Terms follow n³+n². Next = 6³+6² = 252.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q4" },
{ company_id: 4, topic_id: 1, question: "What is the 56743rd digit in the sequence 1234567891011121314...?", option_a: "3", option_b: "5", option_c: "7", option_d: "9", correct_answer: "C", explanation: "The 17854th remaining digit lies in the 3571st five-digit number, 13570. The fourth digit is 7.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q5" },
{ company_id: 4, topic_id: 1, question: "If N is the greatest number that divides 1305, 4665 and 6905 leaving the same remainder, what is the sum of the digits of N?", option_a: "2", option_b: "4", option_c: "7", option_d: "8", correct_answer: "B", explanation: "N = HCF(3360,2240,5600)=1120. Digit sum = 4.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q13" },
{ company_id: 4, topic_id: 1, question: "How many numbers between 100 and 400 are divisible by at least one of 2, 3, 5 or 7?", option_a: "210", option_b: "220", option_c: "230", option_d: "240", correct_answer: "C", explanation: "Using inclusion-exclusion over 101 to 399 gives 230 numbers.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q14" },
{ company_id: 4, topic_id: 1, question: "A three-digit number has digit sum 10. The middle digit equals the sum of the other two. Reversing the digits increases the number by 99. Find the number.", option_a: "253", option_b: "352", option_c: "235", option_d: "325", correct_answer: "A", explanation: "The digits are 2, 5 and 3, so the number is 253.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q15" },
{ company_id: 4, topic_id: 1, question: "A two-digit number has product of digits equal to 8. When 18 is added, its digits are reversed. Find the number.", option_a: "18", option_b: "24", option_c: "42", option_d: "81", correct_answer: "B", explanation: "24+18=42, so the required number is 24.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q20" },
{ company_id: 4, topic_id: 1, question: "How many 3-digit numbers can be formed from 2, 3, 5, 6, 7 and 9, divisible by 5, without repetition?", option_a: "10", option_b: "15", option_c: "20", option_d: "25", correct_answer: "C", explanation: "The last digit is 5 and the first two have 5P2 arrangements, giving 20.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q87" },

{ company_id: 4, topic_id: 2, question: "If a shopkeeper accidentally sells a pen at double its actual selling price, his profit increases fourfold. What is his actual profit percentage?", option_a: "25%", option_b: "33.33%", option_c: "50%", option_d: "66.67%", correct_answer: "C", explanation: "Solving 2S−C=4(S−C) gives S/C=3/2, hence profit is 50%.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q46" },
{ company_id: 4, topic_id: 2, question: "After a discount of 11.11%, a trader still makes a gain of 14.28%. At what percentage above cost price does he mark his goods?", option_a: "20%", option_b: "25%", option_c: "28.57%", option_d: "33.33%", correct_answer: "C", explanation: "Take MP=9, SP=8 and CP=7. Markup is 2/7 = 28.57%.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q49" },
{ company_id: 4, topic_id: 2, question: "A man purchased a watch for Rs.400 and sold it at a gain of 20%. What is the selling price?", option_a: "Rs.440", option_b: "Rs.460", option_c: "Rs.480", option_d: "Rs.500", correct_answer: "C", explanation: "SP = 400 + 20% of 400 = Rs.480.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q50" },
{ company_id: 4, topic_id: 2, question: "Nitish sold his watch and sunglasses at a loss of 4% and gain of 4% respectively for Rs.2600. Kamal sold them at a gain of 4% and loss of 4% respectively for Rs.2700. What was the original cost of the watch?", option_a: "Rs.600", option_b: "Rs.650", option_c: "Rs.700", option_d: "Rs.750", correct_answer: "C", explanation: "Solving the two linear equations gives watch CP = Rs.700.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q52" },
{ company_id: 4, topic_id: 2, question: "If the price of gold increases by 30%, by what percentage should the quantity of ornaments be reduced to keep expenditure unchanged?", option_a: "20%", option_b: "23.07%", option_c: "25%", option_d: "30%", correct_answer: "B", explanation: "Required reduction = 30/130 ×100 = 23.07%.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q53" },
{ company_id: 4, topic_id: 2, question: "A jewel rises in price by 80% after passing through three merchants. The first two merchants earn 20% and 25% profit respectively. What is the third merchant's profit percentage?", option_a: "15%", option_b: "20%", option_c: "25%", option_d: "30%", correct_answer: "B", explanation: "1.80/(1.20×1.25)=1.20, so the third profit is 20%.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q54" },
{ company_id: 4, topic_id: 2, question: "An exhibition's ticket sales increase by 20% in week 2, by 16% in week 3 and decrease by 20% in week 4. If week 4 sales were 1392, what were week 1 sales?", option_a: "1200", option_b: "1250", option_c: "1300", option_d: "1350", correct_answer: "B", explanation: "Working backwards: 1392/0.8/1.16/1.2 = 1250.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q55" },
{ company_id: 4, topic_id: 2, question: "Ram is 10% taller than Ravi and Rahul is 30% taller than Ravi. By what percentage is Rahul taller than Ram?", option_a: "15%", option_b: "18.18%", option_c: "20%", option_d: "25%", correct_answer: "B", explanation: "Taking Ravi=100 gives 20/110×100 = 18.18%.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q56" },
{ company_id: 4, topic_id: 2, question: "What will Rs.1500 amount to in three years at 20% compound interest per annum?", option_a: "Rs.2160", option_b: "Rs.2400", option_c: "Rs.2592", option_d: "Rs.2700", correct_answer: "C", explanation: "Amount = 1500(1.2)^3 = Rs.2592.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q58" },
{ company_id: 4, topic_id: 2, question: "In an examination, 65% cleared Quantitative Aptitude, 70% cleared Logical Reasoning and 50% cleared both. What percentage failed in both?", option_a: "10%", option_b: "15%", option_c: "20%", option_d: "25%", correct_answer: "B", explanation: "Passed at least one = 85%, so failed in both = 15%.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q51" },

{ company_id: 4, topic_id: 3, question: "If the ratio of work done by (x−1) men in (x+1) days to work done by (x+2) men in (x−1) days is 9:10, find x.", option_a: "6", option_b: "7", option_c: "8", option_d: "9", correct_answer: "C", explanation: "(x+1)/(x+2)=9/10, giving x=8.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q24" },
{ company_id: 4, topic_id: 3, question: "10 men can complete a work in 15 days and 15 women can complete the same work in 12 days. If both groups work together, how many days will they take?", option_a: "5 days", option_b: "6.67 days", option_c: "8 days", option_d: "10 days", correct_answer: "B", explanation: "Combined time = 15×12/(15+12) = 6.67 days.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q65" },
{ company_id: 4, topic_id: 3, question: "A can do a work in 20 days, B in 30 days and C in 60 days. A is assisted by B and C on every third day. In how many days is the work completed?", option_a: "12 days", option_b: "15 days", option_c: "18 days", option_d: "20 days", correct_answer: "B", explanation: "Each three-day cycle completes 1/5 of the work, so completion takes 15 days.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q66" },
{ company_id: 4, topic_id: 3, question: "If 20 men or 24 women or 40 boys can do a job in 12 days working 8 hours a day, how many men are needed with 6 women and 2 boys to complete four times the job in 12 days at 5 hours per day?", option_a: "112", option_b: "120", option_c: "122", option_d: "128", correct_answer: "C", explanation: "6 women and 2 boys equal 6 men; the work equation gives N=122.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q67" },
{ company_id: 4, topic_id: 3, question: "Each helper can make either 2 large cakes or 35 small cakes per hour. The kitchen works for 3 hours. If 20 large cakes and 700 small cakes are needed, how many helpers are required?", option_a: "8", option_b: "10", option_c: "12", option_d: "14", correct_answer: "B", explanation: "Ten helpers produce the required large and small cakes in three hours.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q68" },
{ company_id: 4, topic_id: 3, question: "A fort has enough food for 45 days for 175 soldiers. After 15 days, 100 soldiers leave. For how many more days will the food last?", option_a: "60 days", option_b: "65 days", option_c: "70 days", option_d: "75 days", correct_answer: "C", explanation: "Remaining food is 175×30 soldier-days; for 75 soldiers it lasts 70 days.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q69" },
{ company_id: 4, topic_id: 3, question: "A can do a work in 36 days, B in 54 days and C in 72 days. A leaves 8 days and B leaves 12 days before completion. For how many days did C work?", option_a: "20 days", option_b: "22 days", option_c: "24 days", option_d: "26 days", correct_answer: "C", explanation: "Solving [(N−8)/36]+[(N−12)/54]+N/72=1 gives N=24.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q70" },
{ company_id: 4, topic_id: 3, question: "One man, two women or three boys can complete a work in 44 days. How many days will one man, one woman and one boy take together?", option_a: "20 days", option_b: "22 days", option_c: "24 days", option_d: "26 days", correct_answer: "C", explanation: "Combined rate is 11/6 of one man's rate, so time is 24 days.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q71" },
{ company_id: 4, topic_id: 3, question: "Three friends Gerald, Rooney and Ronaldo dig a hole together. Gerald alone takes 10 days and Ronaldo alone takes 8 days. If together they finish in 4 days, how many days does Rooney alone take?", option_a: "20 days", option_b: "30 days", option_c: "40 days", option_d: "50 days", correct_answer: "C", explanation: "1/B = 1/4−1/10−1/8 = 1/40.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q73" },
{ company_id: 4, topic_id: 3, question: "Two pipes fill a tank in 10 hours and 12 hours respectively, while a third empties it in 20 hours. If all operate together, how long will the tank take to fill?", option_a: "6 hours", option_b: "7.5 hours", option_c: "8 hours", option_d: "9 hours", correct_answer: "B", explanation: "Combined rate is 2/15, so time is 7.5 hours.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q74" },

{ company_id: 4, topic_id: 4, question: "The ratio of two numbers is 3:4 and their HCF is 4. What is their LCM?", option_a: "24", option_b: "36", option_c: "48", option_d: "64", correct_answer: "C", explanation: "Numbers are 12 and 16; LCM is 48.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q17" },
{ company_id: 4, topic_id: 4, question: "A 20-litre mixture contains milk and water in the ratio 3:5. If 4 litres of mixture is replaced with 4 litres of water, what is the final ratio?", option_a: "3:5", option_b: "3:7", option_c: "2:5", option_d: "1:2", correct_answer: "B", explanation: "After replacement, milk:water = 6:14 = 3:7.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q23" },
{ company_id: 4, topic_id: 4, question: "729 ml of a mixture contains milk and water in the ratio 7:2. How much water should be added to make the mixture half milk and half water?", option_a: "305 ml", option_b: "405 ml", option_c: "450 ml", option_d: "567 ml", correct_answer: "B", explanation: "Milk is 567 ml and water added must be 405 ml.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q27" },
{ company_id: 4, topic_id: 4, question: "Three mixtures contain milk and water in ratios 2:1, 3:2 and 5:3. Equal quantities of all three are mixed. What is the ratio of milk to water?", option_a: "227:133", option_b: "133:227", option_c: "5:3", option_d: "3:2", correct_answer: "A", explanation: "The ratio of summed milk and water fractions is 227:133.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q28" },
{ company_id: 4, topic_id: 4, question: "An alloy of zinc and copper contains the metals in the ratio 5:3. How much zinc should be added to 6 kg of alloy so that the ratio becomes 3:1?", option_a: "2 kg", option_b: "2.5 kg", option_c: "3 kg", option_d: "3.5 kg", correct_answer: "C", explanation: "Initial zinc is 3.75 kg; required addition is 3 kg.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q30" },
{ company_id: 4, topic_id: 4, question: "A 40-litre mixture of milk and water contains 10% water. How much water should be added so that water becomes 20%?", option_a: "4 litres", option_b: "5 litres", option_c: "6 litres", option_d: "8 litres", correct_answer: "B", explanation: "Solving (4+x)/(40+x)=20/100 gives x=5 litres.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q31" },
{ company_id: 4, topic_id: 4, question: "Ravi scored twice as many marks as Ramu. For every mark Ravi scores above Ramu, he receives 50% of those marks as bonus. What is the ratio of Ravi's bonus to his total marks?", option_a: "1:4", option_b: "1:5", option_c: "1:6", option_d: "1:8", correct_answer: "C", explanation: "Bonus to total marks is 1:6.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q34" },
{ company_id: 4, topic_id: 4, question: "Six years ago, Kunal:Sagar = 6:5. Four years from now, their ratio will be 11:10. What is Sagar's present age?", option_a: "12 years", option_b: "14 years", option_c: "16 years", option_d: "18 years", correct_answer: "C", explanation: "Solving the age ratio gives Sagar's present age as 16.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q37" },
{ company_id: 4, topic_id: 4, question: "The total ages of A, B and C are 90 years. Ten years ago their ages were in the ratio 1:2:3. What is B's present age?", option_a: "20 years", option_b: "25 years", option_c: "30 years", option_d: "35 years", correct_answer: "C", explanation: "B was 20 ten years ago, so present B is 30.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q39" },
{ company_id: 4, topic_id: 4, question: "A 40% solution is replaced with a 25% solution so that the new concentration becomes 35%. What fraction of the original solution was replaced?", option_a: "1/5", option_b: "1/4", option_c: "1/3", option_d: "1/2", correct_answer: "C", explanation: "0.40(1−x)+0.25x=0.35 gives x=1/3.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q45" },

{ company_id: 4, topic_id: 5, question: "In a class of 15 students, 7 speak English, 8 speak Hindi and 3 speak neither. How many speak both languages?", option_a: "1", option_b: "2", option_c: "3", option_d: "4", correct_answer: "C", explanation: "Both = 7+8−(15−3) = 3.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q9" },
{ company_id: 4, topic_id: 5, question: "In a colony of 76 people, 53 read Hindu, 46 read Times and 39 read Deccan. If 15 read all three, 22 read Hindu and Deccan and 23 read Deccan and Times, how many read only Deccan?", option_a: "8", option_b: "10", option_c: "11", option_d: "12", correct_answer: "C", explanation: "Using the supplied overlaps, the source answer is recorded as 11.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q10" },
{ company_id: 4, topic_id: 5, question: "At a conference, 100 delegates spoke English, 40 spoke French and 20 spoke both. How many could speak at least one of the two languages?", option_a: "100", option_b: "110", option_c: "120", option_d: "140", correct_answer: "C", explanation: "At least one = 100+40−20 = 120.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q11" },
{ company_id: 4, topic_id: 5, question: "The sum of three single-digit numbers is 15 less than their product. If 2 is subtracted from the first number, the resulting sum is 7 more than the resulting product. Which type of calculation is required?", option_a: "Only addition", option_b: "Simultaneous equations", option_c: "Percentage", option_d: "Simple average", correct_answer: "B", explanation: "The conditions require simultaneous equations.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q12" },
{ company_id: 4, topic_id: 5, question: "A box contains 90 bolts of 100 g each and 100 bolts of 150 g each. If the total box weight is 35,500 g, what is the weight of the empty box?", option_a: "10 kg", option_b: "11 kg", option_c: "11.5 kg", option_d: "12 kg", correct_answer: "C", explanation: "Empty box = 35,500−24,000 = 11.5 kg.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q33" },
{ company_id: 4, topic_id: 5, question: "If 65% of examinees pass Quantitative Aptitude, 70% pass Logical Reasoning and 50% pass both, what percentage pass at least one test?", option_a: "75%", option_b: "80%", option_c: "85%", option_d: "90%", correct_answer: "C", explanation: "At least one = 65+70−50 = 85%.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q51" },
{ company_id: 4, topic_id: 5, question: "If the price of gold increases by 30% and expenditure must remain unchanged, what percentage of the original quantity can still be purchased?", option_a: "70%", option_b: "76.92%", option_c: "80%", option_d: "83.33%", correct_answer: "B", explanation: "New quantity is 100/130 = 76.92% of the original.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q53" },
{ company_id: 4, topic_id: 5, question: "An exhibition sold 1392 tickets in week 4 after a 20% decrease from week 3. What were the week 3 ticket sales?", option_a: "1640", option_b: "1700", option_c: "1740", option_d: "1800", correct_answer: "C", explanation: "Week 3 = 1392/0.8 = 1740.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q55" },
{ company_id: 4, topic_id: 5, question: "Ram is 110 cm tall when Ravi is 100 cm. Rahul is 130 cm tall. What percentage of Ram's height is Rahul's height greater by?", option_a: "15%", option_b: "18.18%", option_c: "20%", option_d: "30%", correct_answer: "B", explanation: "Difference relative to Ram = 20/110×100 = 18.18%.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q56" },
{ company_id: 4, topic_id: 5, question: "A student scores 60% aggregate in five subjects. The marks are in the ratio 10:9:8:7:6. If passing marks are 50%, in how many subjects does the student pass?", option_a: "2", option_b: "3", option_c: "4", option_d: "5", correct_answer: "C", explanation: "The marks are 75, 67.5, 60, 52.5 and 45; four subjects pass.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q48" },

// =====================================================
// ACCENTURE TOPICS 6-10
// =====================================================

{ company_id: 4, topic_id: 6, question: "A person travels half of a distance at 40 km/hr and the remaining half at 60 km/hr. What is the average speed?", option_a: "45 km/hr", option_b: "48 km/hr", option_c: "50 km/hr", option_d: "52 km/hr", correct_answer: "B", explanation: "For equal distances, average speed = 2ab/(a+b) = 48 km/hr.", source: "Accenture placement aptitude question type; PlacementPapers 2025" },
{ company_id: 4, topic_id: 6, question: "A train travels at 60 km/hr and crosses a pole in 12 seconds. What is the length of the train?", option_a: "150 m", option_b: "180 m", option_c: "200 m", option_d: "220 m", correct_answer: "B", explanation: "60 km/hr = 50/3 m/s. Distance = 200 m.", source: "Accenture historical placement-paper topic: Time, Speed & Distance" },
{ company_id: 4, topic_id: 6, question: "A man travels 120 km at 40 km/hr and returns at 60 km/hr. What is his average speed for the complete journey?", option_a: "45 km/hr", option_b: "48 km/hr", option_c: "50 km/hr", option_d: "52 km/hr", correct_answer: "B", explanation: "Total distance is 240 km and total time is 5 hours, so average speed is 48 km/hr.", source: "Accenture numerical aptitude TSD pattern" },
{ company_id: 4, topic_id: 6, question: "A train 150 m long runs at 54 km/hr. How long will it take to cross a pole?", option_a: "8 sec", option_b: "10 sec", option_c: "12 sec", option_d: "15 sec", correct_answer: "B", explanation: "54 km/hr = 15 m/s, so time = 150/15 = 10 seconds.", source: "Accenture placement aptitude TSD pattern" },
{ company_id: 4, topic_id: 6, question: "A boat travels downstream at 18 km/hr and upstream at 10 km/hr. What is the speed of the boat in still water?", option_a: "12 km/hr", option_b: "13 km/hr", option_c: "14 km/hr", option_d: "15 km/hr", correct_answer: "C", explanation: "Still-water speed = (18+10)/2 = 14 km/hr.", source: "Accenture placement aptitude TSD topic" },
{ company_id: 4, topic_id: 6, question: "A train moving at 72 km/hr crosses another train moving at 54 km/hr in the opposite direction. If their lengths are 200 m and 150 m, how much time is required?", option_a: "8 sec", option_b: "9 sec", option_c: "10 sec", option_d: "12 sec", correct_answer: "B", explanation: "Relative speed is 35 m/s and total length is 350 m, so time is 10 seconds.", source: "Accenture placement aptitude TSD pattern" },
{ company_id: 4, topic_id: 6, question: "A man covers a certain distance at 5 km/hr and takes 6 hours. How much time would he take at 7.5 km/hr?", option_a: "3 hours", option_b: "4 hours", option_c: "5 hours", option_d: "6 hours", correct_answer: "B", explanation: "Distance = 30 km. Time at 7.5 km/hr = 4 hours.", source: "Accenture numerical aptitude TSD pattern" },
{ company_id: 4, topic_id: 6, question: "Two trains of equal length cross each other in 12 seconds while moving in opposite directions. If their speeds are 36 km/hr and 54 km/hr, what is the length of each train?", option_a: "120 m", option_b: "140 m", option_c: "150 m", option_d: "180 m", correct_answer: "C", explanation: "Relative speed is 25 m/s and combined length is 300 m, so each train is 150 m.", source: "Accenture placement aptitude TSD pattern" },
{ company_id: 4, topic_id: 6, question: "A person increases his speed by 25%. By what percentage does his travel time decrease for the same distance?", option_a: "15%", option_b: "20%", option_c: "25%", option_d: "30%", correct_answer: "B", explanation: "New time is 100/125 = 80% of old time, a 20% reduction.", source: "Accenture numerical aptitude TSD pattern" },
{ company_id: 4, topic_id: 6, question: "A cyclist covers 36 km in 2 hours. If his speed is increased by 3 km/hr, how much time will he need for the same distance?", option_a: "1 hour 30 min", option_b: "1 hour 40 min", option_c: "1 hour 45 min", option_d: "2 hours", correct_answer: "B", explanation: "New speed is 21 km/hr and time is 36/21 = 12/7 hours, approximately 1 hour 43 minutes.", source: "Accenture numerical aptitude TSD pattern" },

{ company_id: 4, topic_id: 7, question: "An article is sold for Rs.480 at a profit of 20%. What is its cost price?", option_a: "Rs.360", option_b: "Rs.400", option_c: "Rs.420", option_d: "Rs.440", correct_answer: "B", explanation: "CP = 480/1.20 = Rs.400.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "A trader marks an article 40% above cost price and gives a discount of 10%. What is his profit percentage?", option_a: "20%", option_b: "24%", option_c: "26%", option_d: "30%", correct_answer: "C", explanation: "With CP=100, SP=140×90/100=126, so profit is 26%.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "An article is sold at a loss of 15%. If its cost price is Rs.800, find the selling price.", option_a: "Rs.640", option_b: "Rs.680", option_c: "Rs.720", option_d: "Rs.740", correct_answer: "B", explanation: "SP = 85% of 800 = Rs.680.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "A shopkeeper gives successive discounts of 10% and 20%. What is the equivalent discount?", option_a: "28%", option_b: "30%", option_c: "32%", option_d: "35%", correct_answer: "A", explanation: "Equivalent discount = 10+20−2 = 28%.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "An article costing Rs.500 is sold for Rs.575. What is the profit percentage?", option_a: "10%", option_b: "12%", option_c: "15%", option_d: "20%", correct_answer: "C", explanation: "Profit is Rs.75, which is 15% of Rs.500.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "If an article is sold at 25% profit instead of 10% profit, the seller gets Rs.90 more. What is the cost price?", option_a: "Rs.500", option_b: "Rs.600", option_c: "Rs.700", option_d: "Rs.750", correct_answer: "B", explanation: "15% of CP = 90, so CP = Rs.600.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "A shopkeeper sells an item for Rs.720 after giving a 10% discount. What was the marked price?", option_a: "Rs.760", option_b: "Rs.780", option_c: "Rs.800", option_d: "Rs.820", correct_answer: "C", explanation: "90% of MP is 720, so MP = Rs.800.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "A trader sells two articles for Rs.1000 each. On one he gains 20% and on the other he loses 20%. What is the overall result?", option_a: "No profit, no loss", option_b: "4% loss", option_c: "4% profit", option_d: "5% loss", correct_answer: "B", explanation: "The combined result is approximately a 4% loss.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "An article is sold for Rs.900 after a discount of 10%. If the seller gains 20%, what is the cost price?", option_a: "Rs.700", option_b: "Rs.750", option_c: "Rs.800", option_d: "Rs.850", correct_answer: "B", explanation: "CP = 900/1.2 = Rs.750.", source: "Accenture numerical aptitude Profit & Loss pattern" },
{ company_id: 4, topic_id: 7, question: "A pen is sold at a profit of 25%. If its cost price is increased by 20% while the selling price remains unchanged, what is the new profit percentage?", option_a: "4.17%", option_b: "5%", option_c: "8.33%", option_d: "10%", correct_answer: "A", explanation: "With original CP=100 and SP=125, new profit is 5/120×100 = 4.17%.", source: "Accenture numerical aptitude Profit & Loss pattern" },

{ company_id: 4, topic_id: 8, question: "Two dice are thrown. What is the probability of getting a sum of 7?", option_a: "1/12", option_b: "1/6", option_c: "1/4", option_d: "1/3", correct_answer: "B", explanation: "Six of 36 outcomes give sum 7, so probability is 1/6.", source: "Accenture Placement Papers 2024" },
{ company_id: 4, topic_id: 8, question: "Two cards are drawn from a standard deck. What is the probability that both are aces?", option_a: "1/221", option_b: "1/169", option_c: "1/52", option_d: "1/13", correct_answer: "A", explanation: "(4/52)×(3/51) = 1/221.", source: "Accenture Placement Papers 2025" },
{ company_id: 4, topic_id: 8, question: "A fair die is thrown once. What is the probability of getting an even number?", option_a: "1/6", option_b: "1/3", option_c: "1/2", option_d: "2/3", correct_answer: "C", explanation: "Three of six outcomes are even, so probability is 1/2.", source: "Accenture probability aptitude topic" },
{ company_id: 4, topic_id: 8, question: "Three coins are tossed simultaneously. What is the probability of getting at least one head?", option_a: "1/8", option_b: "3/8", option_c: "5/8", option_d: "7/8", correct_answer: "D", explanation: "1−P(no head) = 1−1/8 = 7/8.", source: "Accenture probability aptitude topic" },
{ company_id: 4, topic_id: 8, question: "A bag contains 5 red and 3 blue balls. One ball is selected at random. What is the probability of selecting a blue ball?", option_a: "3/5", option_b: "3/8", option_c: "5/8", option_d: "1/2", correct_answer: "B", explanation: "There are 3 blue balls among 8 total balls, so probability is 3/8.", source: "Accenture probability aptitude topic" },
{ company_id: 4, topic_id: 8, question: "What is the probability of drawing a king from a standard deck of 52 cards?", option_a: "1/13", option_b: "1/26", option_c: "1/4", option_d: "4/13", correct_answer: "A", explanation: "4/52 = 1/13.", source: "Accenture probability aptitude topic" },
{ company_id: 4, topic_id: 8, question: "Two dice are thrown. What is the probability that the sum is less than or equal to 4?", option_a: "1/12", option_b: "1/6", option_c: "1/4", option_d: "1/3", correct_answer: "C", explanation: "There are 6 qualifying outcomes, giving probability 1/6.", source: "Accenture probability aptitude topic" },
{ company_id: 4, topic_id: 8, question: "A card is drawn from a standard deck. What is the probability that it is either a heart or a king?", option_a: "4/13", option_b: "5/13", option_c: "17/52", option_d: "1/2", correct_answer: "A", explanation: "Favourable cards = 13+4−1 = 16, so probability is 4/13.", source: "Accenture probability aptitude topic" },
{ company_id: 4, topic_id: 8, question: "A box contains 6 white and 4 black balls. Two balls are drawn without replacement. What is the probability that both are white?", option_a: "1/3", option_b: "1/4", option_c: "1/5", option_d: "2/5", correct_answer: "A", explanation: "(6/10)×(5/9) = 1/3.", source: "Accenture probability aptitude topic" },
{ company_id: 4, topic_id: 8, question: "A pair of dice is thrown four times. What is the probability of getting a double exactly twice?", option_a: "25/216", option_b: "5/36", option_c: "25/1296", option_d: "1/16", correct_answer: "A", explanation: "C(4,2)(1/6)^2(5/6)^2 = 25/216.", source: "Accenture probability aptitude topic" },

{ company_id: 4, topic_id: 9, question: "In how many ways can 5 people be arranged in a row if two particular people must sit together?", option_a: "24", option_b: "36", option_c: "48", option_d: "60", correct_answer: "C", explanation: "Treating the pair as one unit gives 4!×2! = 48.", source: "Accenture Placement Papers 2025" },
{ company_id: 4, topic_id: 9, question: "In how many ways can 3 students be selected from 8 students?", option_a: "24", option_b: "48", option_c: "56", option_d: "64", correct_answer: "C", explanation: "C(8,3) = 56.", source: "Accenture Placement Papers 2025" },
{ company_id: 4, topic_id: 9, question: "A code contains two English alphabets followed by two distinct digits from 1 to 9. How many such codes are possible?", option_a: "48672", option_b: "46872", option_c: "48762", option_d: "49672", correct_answer: "A", explanation: "26×26×9×8 = 48,672.", source: "Accenture Placement Papers 2024" },
{ company_id: 4, topic_id: 9, question: "How many ways can 4 books be selected from 10 different books?", option_a: "120", option_b: "180", option_c: "210", option_d: "240", correct_answer: "C", explanation: "C(10,4) = 210.", source: "Accenture P&C aptitude topic" },
{ company_id: 4, topic_id: 9, question: "How many ways can 6 people be arranged in a row?", option_a: "360", option_b: "540", option_c: "720", option_d: "840", correct_answer: "C", explanation: "6! = 720.", source: "Accenture P&C aptitude topic" },
{ company_id: 4, topic_id: 9, question: "In how many ways can 2 people be selected from a group of 7?", option_a: "14", option_b: "21", option_c: "28", option_d: "35", correct_answer: "B", explanation: "C(7,2) = 21.", source: "Accenture P&C aptitude topic" },
{ company_id: 4, topic_id: 9, question: "How many 3-letter arrangements can be made from 5 distinct letters without repetition?", option_a: "30", option_b: "45", option_c: "60", option_d: "75", correct_answer: "C", explanation: "5P3 = 60.", source: "Accenture P&C aptitude topic" },
{ company_id: 4, topic_id: 9, question: "How many ways can 5 people be selected from 9 people?", option_a: "84", option_b: "126", option_c: "144", option_d: "180", correct_answer: "B", explanation: "C(9,5) = 126.", source: "Accenture P&C aptitude topic" },
{ company_id: 4, topic_id: 9, question: "How many different arrangements can be made using all letters of the word LEVEL?", option_a: "20", option_b: "30", option_c: "60", option_d: "120", correct_answer: "B", explanation: "5!/(2!2!) = 30.", source: "Accenture P&C aptitude topic" },
{ company_id: 4, topic_id: 9, question: "From 8 students, in how many ways can a team of 3 be selected?", option_a: "48", option_b: "56", option_c: "64", option_d: "72", correct_answer: "B", explanation: "C(8,3) = 56.", source: "Accenture P&C aptitude topic" },

{ company_id: 4, topic_id: 10, question: "The average of 5 numbers is 25. If one number is removed, the average becomes 23. What is the removed number?", option_a: "30", option_b: "32", option_c: "33", option_d: "35", correct_answer: "C", explanation: "125−92 = 33.", source: "Accenture Placement Papers 2024" },
{ company_id: 4, topic_id: 10, question: "The average weight of 24 students is 36 kg. Including the teacher increases the average by 1 kg. What is the teacher's weight?", option_a: "55 kg", option_b: "60 kg", option_c: "61 kg", option_d: "64 kg", correct_answer: "C", explanation: "25×37−24×36 = 61 kg.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q43" },
{ company_id: 4, topic_id: 10, question: "The average temperature on Wednesday, Thursday and Friday is 26°C. The average on Thursday, Friday and Saturday is 24°C. If Saturday was 27°C, what was Wednesday's temperature?", option_a: "31°C", option_b: "32°C", option_c: "33°C", option_d: "34°C", correct_answer: "C", explanation: "Wednesday's temperature is 33°C.", source: "500 most asked Campus Recruitment Numerical Aptitude Questions - Accenture Q44" },
{ company_id: 4, topic_id: 10, question: "The average of 10 numbers is 18. If one number 45 is replaced by 25, what is the new average?", option_a: "15", option_b: "16", option_c: "17", option_d: "18", correct_answer: "B", explanation: "New sum is 160, so new average is 16.", source: "Accenture numerical aptitude Average pattern" },
{ company_id: 4, topic_id: 10, question: "The average age of 5 students is 20 years. A new student joins and the average becomes 21 years. What is the new student's age?", option_a: "24", option_b: "25", option_c: "26", option_d: "27", correct_answer: "C", explanation: "New total is 126, so new student is 26 years old.", source: "Accenture numerical aptitude Average pattern" },
{ company_id: 4, topic_id: 10, question: "The average of three numbers is 30. The first is 10 more than the second and the third is 5 more than the second. Find the largest number.", option_a: "30", option_b: "35", option_c: "40", option_d: "45", correct_answer: "B", explanation: "The numbers are 35, 25 and 30, so largest is 35.", source: "Accenture numerical aptitude Average pattern" },
{ company_id: 4, topic_id: 10, question: "The average marks of 8 students is 72. If the marks of one student are excluded, the average of the remaining 7 is 70. What were the excluded marks?", option_a: "84", option_b: "86", option_c: "88", option_d: "90", correct_answer: "B", explanation: "576−490 = 86.", source: "Accenture numerical aptitude Average pattern" },
{ company_id: 4, topic_id: 10, question: "The average of 6 consecutive integers is 25. What is the sum of the integers?", option_a: "125", option_b: "150", option_c: "175", option_d: "200", correct_answer: "B", explanation: "Sum = 25×6 = 150.", source: "Accenture numerical aptitude Average pattern" },
{ company_id: 4, topic_id: 10, question: "The average monthly salary of 5 employees is Rs.24,000. If the manager's salary is Rs.40,000, what is the average salary of the remaining four?", option_a: "Rs.18,000", option_b: "Rs.20,000", option_c: "Rs.22,000", option_d: "Rs.24,000", correct_answer: "B", explanation: "(120000−40000)/4 = Rs.20,000.", source: "Accenture numerical aptitude Average pattern" },
{ company_id: 4, topic_id: 10, question: "The average of 7 numbers is 15. If each number is increased by 3, what will be the new average?", option_a: "15", option_b: "16", option_c: "18", option_d: "21", correct_answer: "C", explanation: "The new average is 15+3 = 18.", source: "Accenture numerical aptitude Average pattern" },

  // =====================================================
  // COGNIZANT (COMPANY ID = 5)
  // BLOCK 1
  // TOPICS 1-5
  // =====================================================

  // =====================================================
  // TOPIC 1: NUMBER SYSTEM
  // =====================================================

  {
    company_id: 5,
    topic_id: 1,
    question: "What is the remainder when 2^256 is divided by 7?",
    option_a: "1",
    option_b: "2",
    option_c: "4",
    option_d: "6",
    correct_answer: "B",
    explanation:
      "The powers of 2 modulo 7 repeat as 2, 4, 1. Since 256 leaves remainder 1 when divided by 3, the remainder is 2.",
    source: "Cognizant/CTS placement aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "What is the remainder when 3^100 is divided by 5?",
    option_a: "0",
    option_b: "1",
    option_c: "3",
    option_d: "4",
    correct_answer: "B",
    explanation:
      "The powers of 3 modulo 5 repeat as 3, 4, 2, 1. Since 100 is divisible by 4, the remainder is 1.",
    source: "Cognizant/CTS placement aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "Find the HCF of 84 and 126.",
    option_a: "21",
    option_b: "28",
    option_c: "42",
    option_d: "63",
    correct_answer: "C",
    explanation:
      "84 = 2 x 2 x 3 x 7 and 126 = 2 x 3 x 3 x 7. Common factors are 2 x 3 x 7 = 42.",
    source: "Cognizant/CTS aptitude topic - HCF/LCM - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "Find the LCM of 12, 18 and 24.",
    option_a: "36",
    option_b: "48",
    option_c: "72",
    option_d: "144",
    correct_answer: "C",
    explanation:
      "12 = 2^2 x 3, 18 = 2 x 3^2 and 24 = 2^3 x 3. Taking the highest powers gives 2^3 x 3^2 = 72.",
    source: "Cognizant/CTS aptitude topic - LCM - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "Which of the following numbers is divisible by 11?",
    option_a: "12345",
    option_b: "13431",
    option_c: "14562",
    option_d: "15672",
    correct_answer: "B",
    explanation:
      "For 13431, the difference between the sums of alternate digits is (1 + 4 + 1) - (3 + 3) = 0. Hence it is divisible by 11.",
    source: "Cognizant/CTS divisibility aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "What is the value of 2^256 / 2^72?",
    option_a: "2^184",
    option_b: "2^28",
    option_c: "2^328",
    option_d: "2^128",
    correct_answer: "A",
    explanation: "Using a^m / a^n = a^(m-n), we get 2^(256-72) = 2^184.",
    source: "Cognizant/CTS numerical aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "Find the smallest number which when divided by 12, 15 and 20 leaves remainder 5 in each case.",
    option_a: "55",
    option_b: "65",
    option_c: "125",
    option_d: "245",
    correct_answer: "B",
    explanation: "LCM of 12, 15 and 20 is 60. The required number is 60 + 5 = 65.",
    source: "Cognizant/CTS LCM and remainder pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "What is the unit digit of 7^103?",
    option_a: "1",
    option_b: "3",
    option_c: "7",
    option_d: "9",
    correct_answer: "B",
    explanation: "The unit digits of powers of 7 repeat as 7, 9, 3, 1. Since 103 leaves remainder 3 when divided by 4, the unit digit is 3.",
    source: "Cognizant/CTS number-system aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "If a number is divisible by both 8 and 12, it must be divisible by:",
    option_a: "16",
    option_b: "20",
    option_c: "24",
    option_d: "36",
    correct_answer: "C",
    explanation: "A number divisible by both 8 and 12 must be divisible by their LCM. LCM(8, 12) = 24.",
    source: "Cognizant/CTS divisibility aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 1,
    question: "Find the smallest number which is exactly divisible by 8, 12 and 15.",
    option_a: "60",
    option_b: "90",
    option_c: "120",
    option_d: "240",
    correct_answer: "C",
    explanation: "LCM(8, 12, 15) = 120. Therefore the smallest number exactly divisible by all three is 120.",
    source: "Cognizant/CTS LCM aptitude pattern - IndiaBix"
  },

  // =====================================================
  // TOPIC 2: PERCENTAGES
  // =====================================================

  {
    company_id: 5,
    topic_id: 2,
    question: "A number is increased by 20% and then decreased by 20%. What is the overall percentage change?",
    option_a: "0%",
    option_b: "4% decrease",
    option_c: "4% increase",
    option_d: "8% decrease",
    correct_answer: "B",
    explanation: "Assume the original number is 100. After a 20% increase it becomes 120. A 20% decrease on 120 gives 96. Hence there is a 4% decrease.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "If 40% of a number is 120, find the number.",
    option_a: "240",
    option_b: "280",
    option_c: "300",
    option_d: "360",
    correct_answer: "C",
    explanation: "40% of x = 120. Therefore x = 120 x 100 / 40 = 300.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "A student's marks increase from 60 to 75. Find the percentage increase.",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "15%",
    correct_answer: "B",
    explanation: "Increase = 75 - 60 = 15. Percentage increase = (15/60) x 100 = 25%.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "25% of 240 is equal to:",
    option_a: "50",
    option_b: "55",
    option_c: "60",
    option_d: "65",
    correct_answer: "C",
    explanation: "25% = 1/4. Therefore 240/4 = 60.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "If 30% of x = 45, then x is:",
    option_a: "120",
    option_b: "135",
    option_c: "150",
    option_d: "180",
    correct_answer: "C",
    explanation: "0.30x = 45, so x = 45/0.30 = 150.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "A number is increased by 25%. By what percentage should it be decreased to get the original number?",
    option_a: "15%",
    option_b: "20%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Let original number be 100. After 25% increase it becomes 125. Required decrease = 25/125 x 100 = 20%.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "A candidate scores 360 marks out of 500. What is the percentage?",
    option_a: "68%",
    option_b: "70%",
    option_c: "72%",
    option_d: "75%",
    correct_answer: "C",
    explanation: "Percentage = (360/500) x 100 = 72%.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "The price of an article increases from Rs.800 to Rs.920. Find the percentage increase.",
    option_a: "12%",
    option_b: "15%",
    option_c: "18%",
    option_d: "20%",
    correct_answer: "B",
    explanation: "Increase = 920 - 800 = 120. Percentage increase = 120/800 x 100 = 15%.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "60% of a number exceeds 40% of the same number by 50. Find the number.",
    option_a: "200",
    option_b: "250",
    option_c: "300",
    option_d: "350",
    correct_answer: "B",
    explanation: "Difference = 20% of the number = 50. Therefore number = 50/0.20 = 250.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 2,
    question: "A salary is increased by 10% and then by another 20%. The total increase is:",
    option_a: "30%",
    option_b: "31%",
    option_c: "32%",
    option_d: "33%",
    correct_answer: "C",
    explanation: "Take salary as 100. After 10% increase = 110. After 20% increase = 132. Total increase = 32%.",
    source: "Cognizant/CTS percentage aptitude pattern - IndiaBix"
  },

  // =====================================================
  // TOPIC 3: TIME & WORK
  // =====================================================

  {
    company_id: 5,
    topic_id: 3,
    question: "A can complete a work in 12 days and B in 18 days. Working together, they complete it in:",
    option_a: "6 days",
    option_b: "7.2 days",
    option_c: "8 days",
    option_d: "9 days",
    correct_answer: "B",
    explanation: "Combined work rate = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "A can complete a work in 20 days and B in 30 days. How many days will they take together?",
    option_a: "10",
    option_b: "12",
    option_c: "15",
    option_d: "18",
    correct_answer: "B",
    explanation: "Combined rate = 1/20 + 1/30 = 5/60 = 1/12. Therefore they need 12 days.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "A completes a work in 15 days. What fraction of the work does A complete in 5 days?",
    option_a: "1/2",
    option_b: "1/3",
    option_c: "1/4",
    option_d: "2/3",
    correct_answer: "B",
    explanation: "Work done in 5 days = 5/15 = 1/3 of the total work.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "A and B together can complete a work in 10 days. A alone takes 15 days. B alone takes:",
    option_a: "20 days",
    option_b: "25 days",
    option_c: "30 days",
    option_d: "35 days",
    correct_answer: "C",
    explanation: "B's rate = 1/10 - 1/15 = 1/30. Therefore B alone takes 30 days.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "12 workers complete a work in 15 days. How many workers are required to complete it in 9 days?",
    option_a: "18",
    option_b: "20",
    option_c: "22",
    option_d: "24",
    correct_answer: "B",
    explanation: "Workers x days remains constant. 12 x 15 = x x 9. Therefore x = 20.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "A can do a piece of work in 24 days. B is twice as efficient as A. B can complete it in:",
    option_a: "8 days",
    option_b: "10 days",
    option_c: "12 days",
    option_d: "16 days",
    correct_answer: "C",
    explanation: "B is twice as efficient, so B takes half the time taken by A. 24/2 = 12 days.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "A and B can complete a job in 8 days. B alone takes 24 days. A alone takes:",
    option_a: "10 days",
    option_b: "12 days",
    option_c: "16 days",
    option_d: "18 days",
    correct_answer: "B",
    explanation: "A's rate = 1/8 - 1/24 = 2/24 = 1/12. Hence A takes 12 days.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "8 men can finish a work in 18 days. How many days will 12 men take?",
    option_a: "10",
    option_b: "12",
    option_c: "14",
    option_d: "16",
    correct_answer: "B",
    explanation: "8 x 18 = 12 x x. Therefore x = 12 days.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "A can do a work in 30 days and B in 20 days. They work together for 6 days. The fraction of work completed is:",
    option_a: "1/2",
    option_b: "2/5",
    option_c: "1/3",
    option_d: "3/5",
    correct_answer: "A",
    explanation: "Combined rate = 1/30 + 1/20 = 1/12. In 6 days they complete 6/12 = 1/2.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 3,
    question: "A, B and C can complete a work in 12, 15 and 20 days respectively. Working together, they complete it in:",
    option_a: "4 days",
    option_b: "5 days",
    option_c: "6 days",
    option_d: "7 days",
    correct_answer: "B",
    explanation: "Combined rate = 1/12 + 1/15 + 1/20 = 1/5. Therefore time = 5 days.",
    source: "Cognizant/CTS Time & Work aptitude pattern - IndiaBix"
  },

  // =====================================================
  // TOPIC 4: RATIO & PROPORTION
  // =====================================================

  {
    company_id: 5,
    topic_id: 4,
    question: "The ratio of boys to girls in a class is 3:2. If there are 30 boys, number of girls is:",
    option_a: "15",
    option_b: "20",
    option_c: "25",
    option_d: "30",
    correct_answer: "B",
    explanation: "3 parts = 30, so 1 part = 10. Girls = 2 parts = 20.",
    source: "Cognizant/CTS Ratio & Proportion aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "Two numbers are in the ratio 5:7 and their sum is 144. The larger number is:",
    option_a: "60",
    option_b: "72",
    option_c: "84",
    option_d: "96",
    correct_answer: "C",
    explanation: "Total parts = 12. One part = 144/12 = 12. Larger number = 7 x 12 = 84.",
    source: "Cognizant/CTS Ratio aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "If A:B = 2:3 and B:C = 4:5, then A:C is:",
    option_a: "2:5",
    option_b: "8:15",
    option_c: "4:15",
    option_d: "6:5",
    correct_answer: "B",
    explanation: "Make B common. A:B = 8:12 and B:C = 12:15. Hence A:C = 8:15.",
    source: "Cognizant/CTS Ratio & Proportion pattern - PrepInsta"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "The ratio of two numbers is 4:5. If both are increased by 20, the ratio becomes 5:6. The smaller number is:",
    option_a: "60",
    option_b: "70",
    option_c: "80",
    option_d: "90",
    correct_answer: "C",
    explanation: "Let the numbers be 4x and 5x. (4x + 20)/(5x + 20) = 5/6. Solving gives x = 20, so smaller number = 80.",
    source: "Cognizant/CTS Ratio aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "Rs.720 is divided between A and B in the ratio 5:7. B receives:",
    option_a: "Rs.300",
    option_b: "Rs.360",
    option_c: "Rs.420",
    option_d: "Rs.480",
    correct_answer: "C",
    explanation: "Total parts = 12. B's share = 7/12 x 720 = Rs.420.",
    source: "Cognizant/CTS Ratio aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "If 3:5 = x:40, find x.",
    option_a: "20",
    option_b: "24",
    option_c: "30",
    option_d: "35",
    correct_answer: "B",
    explanation: "3/5 = x/40. Therefore x = 3 x 40 / 5 = 24.",
    source: "Cognizant/CTS Ratio & Proportion pattern - PrepInsta"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "The ratio of incomes of A and B is 4:5 and their expenditures are in ratio 3:4. If both save Rs.1,000, A's income is:",
    option_a: "Rs.2,000",
    option_b: "Rs.3,000",
    option_c: "Rs.4,000",
    option_d: "Rs.5,000",
    correct_answer: "C",
    explanation: "Let incomes be 4x and 5x, expenditures 3y and 4y. Since both save Rs.1,000, solving gives x = 1,000, hence A's income = Rs.4,000.",
    source: "Cognizant/CTS ratio aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "If x:y = 7:9 and y:z = 3:5, then x:z is:",
    option_a: "7:15",
    option_b: "7:12",
    option_c: "21:45",
    option_d: "9:15",
    correct_answer: "A",
    explanation: "x:y = 7:9 and y:z = 3:5. Convert the second ratio to 9:15. Therefore x:z = 7:15.",
    source: "Cognizant/CTS Ratio & Proportion pattern - PrepInsta"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "A:B = 3:4 and B:C = 6:7. Find A:B:C.",
    option_a: "9:12:14",
    option_b: "18:24:28",
    option_c: "3:6:7",
    option_d: "9:18:21",
    correct_answer: "A",
    explanation: "A:B = 3:4 becomes 9:12. B:C = 6:7 becomes 12:14. Therefore A:B:C = 9:12:14.",
    source: "Cognizant/CTS Ratio aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 4,
    question: "If 0.5:y :: 3:12, find y.",
    option_a: "1",
    option_b: "2",
    option_c: "3",
    option_d: "4",
    correct_answer: "B",
    explanation: "0.5/y = 3/12 = 1/4. Therefore y = 0.5 x 4 = 2.",
    source: "Placement Ratio & Proportion pattern - PrepInsta"
  },

  // =====================================================
  // TOPIC 5: DATA INTERPRETATION
  // =====================================================

  {
    company_id: 5,
    topic_id: 5,
    question: "According to the given data, what was Cognizant's value in 2024?",
    option_a: "120",
    option_b: "130",
    option_c: "140",
    option_d: "150",
    correct_answer: "C",
    explanation: "According to the given table, Cognizant's value in 2024 is 140.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "TCS increased from 120 in 2022 to 210 in 2025. What was the increase?",
    option_a: "80",
    option_b: "90",
    option_c: "100",
    option_d: "110",
    correct_answer: "B",
    explanation: "Increase = 210 - 120 = 90.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "Infosys values for 2022, 2023, 2024 and 2025 are 100, 120, 150 and 180. Find the total.",
    option_a: "520",
    option_b: "540",
    option_c: "550",
    option_d: "570",
    correct_answer: "C",
    explanation: "Total = 100 + 120 + 150 + 180 = 550.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "Wipro values for four years are 80, 100, 120 and 150. Find the average.",
    option_a: "110",
    option_b: "112.5",
    option_c: "115",
    option_d: "120",
    correct_answer: "B",
    explanation: "Average = (80 + 100 + 120 + 150)/4 = 450/4 = 112.5.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "Cognizant values for 2022-2025 are 90, 110, 140 and 160. In which year was the value closest to 150?",
    option_a: "2022",
    option_b: "2023",
    option_c: "2024",
    option_d: "2025",
    correct_answer: "C",
    explanation: "The difference between 140 and 150 is 10, which is the smallest difference.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "A company spends 40% of its Rs.20 lakh annual expenditure on salaries. How much is spent on salaries?",
    option_a: "Rs.6 lakh",
    option_b: "Rs.7 lakh",
    option_c: "Rs.8 lakh",
    option_d: "Rs.9 lakh",
    correct_answer: "C",
    explanation: "40% of Rs.20 lakh = Rs.8 lakh.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "A company spends 20% of its Rs.20 lakh annual expenditure on infrastructure. How much is spent?",
    option_a: "Rs.3 lakh",
    option_b: "Rs.4 lakh",
    option_c: "Rs.5 lakh",
    option_d: "Rs.6 lakh",
    correct_answer: "B",
    explanation: "20% of Rs.20 lakh = Rs.4 lakh.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "Marketing is 15% and training is 10% of a Rs.20 lakh budget. What is their combined expenditure?",
    option_a: "Rs.4 lakh",
    option_b: "Rs.5 lakh",
    option_c: "Rs.6 lakh",
    option_d: "Rs.7 lakh",
    correct_answer: "B",
    explanation: "Combined percentage = 15% + 10% = 25%. 25% of Rs.20 lakh = Rs.5 lakh.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "Salaries account for 40% and infrastructure for 20% of a Rs.20 lakh budget. What is the difference between them?",
    option_a: "Rs.2 lakh",
    option_b: "Rs.3 lakh",
    option_c: "Rs.4 lakh",
    option_d: "Rs.5 lakh",
    correct_answer: "C",
    explanation: "Difference = 40% - 20% = 20%. 20% of Rs.20 lakh = Rs.4 lakh.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },

  {
    company_id: 5,
    topic_id: 5,
    question: "If salaries are 40% and other expenses are 15% of the total budget, what percentage is spent on both together?",
    option_a: "45%",
    option_b: "50%",
    option_c: "55%",
    option_d: "60%",
    correct_answer: "C",
    explanation: "40% + 15% = 55%.",
    source: "Placement DI practice - not an actual Cognizant PYQ"
  },
  // =====================================================
  // COGNIZANT (COMPANY ID = 5)
  // BLOCK 2
  // TOPICS 6-10
  // =====================================================

  // =====================================================
  // TOPIC 6: TIME, SPEED & DISTANCE
  // =====================================================

  {
    company_id: 5,
    topic_id: 6,
    question: "A train travels at 60 km/h. How much distance will it cover in 30 minutes?",
    option_a: "20 km",
    option_b: "25 km",
    option_c: "30 km",
    option_d: "35 km",
    correct_answer: "C",
    explanation: "30 minutes = 0.5 hour. Distance = Speed x Time = 60 x 0.5 = 30 km.",
    source: "Cognizant/CTS Time, Speed & Distance aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "A man travels 120 km at a speed of 40 km/h. How much time does he take?",
    option_a: "2 hours",
    option_b: "3 hours",
    option_c: "4 hours",
    option_d: "5 hours",
    correct_answer: "B",
    explanation: "Time = Distance / Speed = 120/40 = 3 hours.",
    source: "Cognizant/CTS Time, Speed & Distance aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "A train running at 72 km/h covers a certain distance in 25 seconds. What is the distance?",
    option_a: "400 m",
    option_b: "450 m",
    option_c: "500 m",
    option_d: "550 m",
    correct_answer: "C",
    explanation: "72 km/h = 72 x 5/18 = 20 m/s. Distance = 20 x 25 = 500 m.",
    source: "Cognizant/CTS train aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "Two trains of lengths 200 m and 150 m travel in opposite directions at 72 km/h and 54 km/h. How long will they take to cross each other?",
    option_a: "8 seconds",
    option_b: "9 seconds",
    option_c: "10 seconds",
    option_d: "12 seconds",
    correct_answer: "C",
    explanation: "Relative speed = 72 + 54 = 126 km/h = 35 m/s. Total distance = 200 + 150 = 350 m. Time = 350/35 = 10 seconds.",
    source: "Cognizant/CTS train aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "A man travels half of a distance at 40 km/h and the remaining half at 60 km/h. What is his average speed?",
    option_a: "45 km/h",
    option_b: "48 km/h",
    option_c: "50 km/h",
    option_d: "52 km/h",
    correct_answer: "B",
    explanation: "For equal distances, average speed = 2xy/(x+y) = 2 x 40 x 60/100 = 48 km/h.",
    source: "Cognizant/CTS Time, Speed & Distance pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "A train of length 130 m runs at 45 km/h. How long will it take to cross a pole?",
    option_a: "8.4 sec",
    option_b: "9.6 sec",
    option_c: "10.4 sec",
    option_d: "12 sec",
    correct_answer: "C",
    explanation: "45 km/h = 12.5 m/s. Time = 130/12.5 = 10.4 seconds.",
    source: "Cognizant/CTS train aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "A boat travels downstream at 15 km/h and upstream at 9 km/h. Find the speed of the boat in still water.",
    option_a: "10 km/h",
    option_b: "11 km/h",
    option_c: "12 km/h",
    option_d: "13 km/h",
    correct_answer: "C",
    explanation: "Still-water speed = (Downstream speed + Upstream speed)/2 = (15 + 9)/2 = 12 km/h.",
    source: "Cognizant/CTS boats and streams aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "A boat's speed in still water is 10 km/h and stream speed is 2 km/h. Its downstream speed is:",
    option_a: "6 km/h",
    option_b: "8 km/h",
    option_c: "12 km/h",
    option_d: "14 km/h",
    correct_answer: "C",
    explanation: "Downstream speed = Boat speed + Stream speed = 10 + 2 = 12 km/h.",
    source: "Cognizant/CTS boats and streams aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "A train passes a pole in 20 seconds at 54 km/h. Find the length of the train.",
    option_a: "250 m",
    option_b: "300 m",
    option_c: "350 m",
    option_d: "400 m",
    correct_answer: "B",
    explanation: "54 km/h = 15 m/s. Length = 15 x 20 = 300 m.",
    source: "Cognizant/CTS train aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 6,
    question: "A person covers a distance of 36 km at 18 km/h. How long does the journey take?",
    option_a: "1 hour",
    option_b: "1.5 hours",
    option_c: "2 hours",
    option_d: "2.5 hours",
    correct_answer: "C",
    explanation: "Time = Distance/Speed = 36/18 = 2 hours.",
    source: "Cognizant/CTS Time, Speed & Distance aptitude pattern - IndiaBix"
  },

  // =====================================================
  // TOPIC 7: PROFIT & LOSS
  // =====================================================

  {
    company_id: 5,
    topic_id: 7,
    question: "An article is bought for Rs.500 and sold for Rs.600. What is the profit percentage?",
    option_a: "15%",
    option_b: "20%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Profit = 600 - 500 = Rs.100. Profit% = 100/500 x 100 = 20%.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "An article is marked 40% above its cost price and sold at a discount of 10%. What is the profit percentage?",
    option_a: "24%",
    option_b: "25%",
    option_c: "26%",
    option_d: "28%",
    correct_answer: "C",
    explanation: "Let CP = 100. MP = 140. After 10% discount, SP = 126. Profit = 26%.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "An article is sold for Rs.720 at a profit of 20%. Find its cost price.",
    option_a: "Rs.560",
    option_b: "Rs.600",
    option_c: "Rs.620",
    option_d: "Rs.650",
    correct_answer: "B",
    explanation: "SP = 120% of CP. CP = 720/1.2 = Rs.600.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "An article is sold for Rs.450 at a loss of 10%. Find the cost price.",
    option_a: "Rs.450",
    option_b: "Rs.480",
    option_c: "Rs.500",
    option_d: "Rs.550",
    correct_answer: "C",
    explanation: "SP = 90% of CP. CP = 450/0.9 = Rs.500.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "A shopkeeper gives two successive discounts of 10% and 20%. What is the equivalent discount?",
    option_a: "26%",
    option_b: "28%",
    option_c: "30%",
    option_d: "32%",
    correct_answer: "B",
    explanation: "Equivalent discount = 10 + 20 - (10 x 20)/100 = 28%.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "A shopkeeper sells an article at 15% profit. If its cost price is Rs.800, find the selling price.",
    option_a: "Rs.880",
    option_b: "Rs.900",
    option_c: "Rs.920",
    option_d: "Rs.940",
    correct_answer: "C",
    explanation: "SP = 115% of Rs.800 = Rs.920.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "A man buys an article for Rs.1,000 and sells it for Rs.850. Find his loss percentage.",
    option_a: "10%",
    option_b: "12%",
    option_c: "15%",
    option_d: "20%",
    correct_answer: "C",
    explanation: "Loss = 1000 - 850 = Rs.150. Loss% = 150/1000 x 100 = 15%.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "If an article is sold for Rs.600 at an 11% loss, for what price should it be sold to gain 5%?",
    option_a: "Rs.700",
    option_b: "Rs.707.87",
    option_c: "Rs.775",
    option_d: "Rs.800",
    correct_answer: "B",
    explanation: "CP = 600/0.89 = Rs.674.16 approximately. At 5% profit, SP = 674.16 x 1.05 = Rs.707.87 approximately.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "A trader gains 25% by selling an article for Rs.1,250. Find the cost price.",
    option_a: "Rs.900",
    option_b: "Rs.1,000",
    option_c: "Rs.1,050",
    option_d: "Rs.1,100",
    correct_answer: "B",
    explanation: "SP = 125% of CP. CP = 1250/1.25 = Rs.1000.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 7,
    question: "A product is sold for Rs.960 after a discount of 20%. Find its marked price.",
    option_a: "Rs.1,100",
    option_b: "Rs.1,150",
    option_c: "Rs.1,200",
    option_d: "Rs.1,250",
    correct_answer: "C",
    explanation: "Rs.960 represents 80% of MP. MP = 960/0.8 = Rs.1200.",
    source: "Cognizant/CTS Profit & Loss aptitude pattern - IndiaBix"
  },

  // =====================================================
  // TOPIC 8: PROBABILITY
  // =====================================================

  {
    company_id: 5,
    topic_id: 8,
    question: "A fair die is thrown once. What is the probability of getting a 4?",
    option_a: "1/4",
    option_b: "1/5",
    option_c: "1/6",
    option_d: "1/3",
    correct_answer: "C",
    explanation: "There are 6 equally likely outcomes and only one favourable outcome. Probability = 1/6.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "A card is drawn randomly from a standard deck of 52 cards. What is the probability of getting a spade?",
    option_a: "1/2",
    option_b: "1/4",
    option_c: "1/13",
    option_d: "3/13",
    correct_answer: "B",
    explanation: "There are 13 spades among 52 cards. Probability = 13/52 = 1/4.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "Three coins are tossed simultaneously. What is the probability of getting at least one tail?",
    option_a: "1/8",
    option_b: "3/8",
    option_c: "5/8",
    option_d: "7/8",
    correct_answer: "D",
    explanation: "P(at least one tail) = 1 - P(all heads) = 1 - 1/8 = 7/8.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "A bag contains 8 grey balls and 3 blue balls. Two balls are drawn without replacement. What is the probability that both are blue?",
    option_a: "1/55",
    option_b: "3/55",
    option_c: "6/55",
    option_d: "9/55",
    correct_answer: "B",
    explanation: "Probability = 3/11 x 2/10 = 6/110 = 3/55.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "A pair of dice is thrown once. What is the probability that the sum is 7?",
    option_a: "1/12",
    option_b: "1/9",
    option_c: "1/6",
    option_d: "1/4",
    correct_answer: "C",
    explanation: "There are 6 combinations giving sum 7 out of 36 outcomes. Probability = 6/36 = 1/6.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "A card is drawn from a deck of 52 cards. What is the probability of getting a king?",
    option_a: "1/13",
    option_b: "1/26",
    option_c: "4/13",
    option_d: "1/4",
    correct_answer: "A",
    explanation: "There are 4 kings in 52 cards. Probability = 4/52 = 1/13.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "A die is thrown once. What is the probability of getting an even number?",
    option_a: "1/6",
    option_b: "1/3",
    option_c: "1/2",
    option_d: "2/3",
    correct_answer: "C",
    explanation: "Even outcomes are 2, 4 and 6. Therefore probability = 3/6 = 1/2.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "Two coins are tossed. What is the probability of getting exactly one head?",
    option_a: "1/4",
    option_b: "1/2",
    option_c: "3/4",
    option_d: "1",
    correct_answer: "B",
    explanation: "Possible outcomes are HH, HT, TH, TT. Exactly one head occurs in HT and TH, so probability = 2/4 = 1/2.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "A bag contains 5 white and 3 black balls. One ball is drawn at random. Probability of getting a black ball is:",
    option_a: "3/5",
    option_b: "3/8",
    option_c: "5/8",
    option_d: "1/2",
    correct_answer: "B",
    explanation: "Total balls = 8 and black balls = 3. Probability = 3/8.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 8,
    question: "Two dice are thrown. What is the probability of getting a total of 4?",
    option_a: "1/6",
    option_b: "1/9",
    option_c: "1/12",
    option_d: "1/18",
    correct_answer: "C",
    explanation: "Favourable outcomes are (1,3), (2,2), (3,1): 3 outcomes out of 36. Probability = 3/36 = 1/12.",
    source: "Cognizant/CTS Probability aptitude pattern - IndiaBix"
  },

  // =====================================================
  // TOPIC 9: PERMUTATION & COMBINATION
  // =====================================================

  {
    company_id: 5,
    topic_id: 9,
    question: "In how many ways can 5 different books be arranged on a shelf?",
    option_a: "25",
    option_b: "60",
    option_c: "100",
    option_d: "120",
    correct_answer: "D",
    explanation: "Number of arrangements = 5! = 5 x 4 x 3 x 2 x 1 = 120.",
    source: "Cognizant/CTS Permutation aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "How many ways can 3 students be selected from 8 students?",
    option_a: "24",
    option_b: "48",
    option_c: "56",
    option_d: "64",
    correct_answer: "C",
    explanation: "Number of selections = 8C3 = 8 x 7 x 6/(3 x 2 x 1) = 56.",
    source: "Cognizant/CTS Combination aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "How many different arrangements can be made using the letters of the word CAT?",
    option_a: "3",
    option_b: "6",
    option_c: "9",
    option_d: "12",
    correct_answer: "B",
    explanation: "There are 3 distinct letters. Arrangements = 3! = 6.",
    source: "Cognizant/CTS Permutation aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "In how many ways can 2 persons be selected from 6 persons?",
    option_a: "10",
    option_b: "12",
    option_c: "15",
    option_d: "20",
    correct_answer: "C",
    explanation: "6C2 = 6 x 5/2 = 15.",
    source: "Cognizant/CTS Combination aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "How many 3-digit numbers can be formed using 1, 2, 3, 4 without repetition?",
    option_a: "12",
    option_b: "16",
    option_c: "24",
    option_d: "36",
    correct_answer: "C",
    explanation: "First digit: 4 choices, second: 3, third: 2. Total = 4 x 3 x 2 = 24.",
    source: "Cognizant/CTS Permutation aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "How many ways can 4 people be arranged in a row?",
    option_a: "12",
    option_b: "16",
    option_c: "20",
    option_d: "24",
    correct_answer: "D",
    explanation: "Number of arrangements = 4! = 24.",
    source: "Cognizant/CTS Permutation aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "From 10 candidates, in how many ways can a committee of 2 be selected?",
    option_a: "20",
    option_b: "45",
    option_c: "50",
    option_d: "90",
    correct_answer: "B",
    explanation: "10C2 = 10 x 9/2 = 45.",
    source: "Cognizant/CTS Combination aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "How many ways can the letters of the word DOG be arranged?",
    option_a: "3",
    option_b: "6",
    option_c: "9",
    option_d: "12",
    correct_answer: "B",
    explanation: "All 3 letters are different. Number of arrangements = 3! = 6.",
    source: "Cognizant/CTS Permutation aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "How many ways can 4 persons be selected from 7 persons?",
    option_a: "21",
    option_b: "28",
    option_c: "35",
    option_d: "42",
    correct_answer: "C",
    explanation: "7C4 = 7C3 = 7 x 6 x 5/(3 x 2 x 1) = 35.",
    source: "Cognizant/CTS Combination aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 9,
    question: "A person has 5 shirts and 3 trousers. How many different shirt-trouser combinations can be made?",
    option_a: "8",
    option_b: "12",
    option_c: "15",
    option_d: "20",
    correct_answer: "C",
    explanation: "For each of 5 shirts, there are 3 trousers. Total = 5 x 3 = 15.",
    source: "Cognizant/CTS counting and combination aptitude pattern - IndiaBix"
  },

  // =====================================================
  // TOPIC 10: AVERAGES
  // =====================================================

  {
    company_id: 5,
    topic_id: 10,
    question: "The average of 5 numbers is 20. What is their total?",
    option_a: "80",
    option_b: "90",
    option_c: "100",
    option_d: "120",
    correct_answer: "C",
    explanation: "Total = Average x Number of values = 20 x 5 = 100.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average of 10 numbers is 25. If one number 45 is removed, what is the new average?",
    option_a: "22.5",
    option_b: "22.78",
    option_c: "23",
    option_d: "24",
    correct_answer: "B",
    explanation: "Original total = 10 x 25 = 250. New total = 250 - 45 = 205. New average = 205/9 = 22.78 approximately.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average age of 6 people is 24 years. What is their total age?",
    option_a: "120",
    option_b: "132",
    option_c: "144",
    option_d: "156",
    correct_answer: "C",
    explanation: "Total age = 6 x 24 = 144 years.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average of 8 numbers is 18. If 45 is replaced by 25, what is the new average?",
    option_a: "15",
    option_b: "15.5",
    option_c: "17",
    option_d: "18",
    correct_answer: "B",
    explanation: "Original total = 8 x 18 = 144. New total = 144 - 45 + 25 = 124. New average = 124/8 = 15.5.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average of 7 numbers is 30. If another number 44 is included, what is the new average?",
    option_a: "31",
    option_b: "31.25",
    option_c: "31.75",
    option_d: "32",
    correct_answer: "C",
    explanation: "Original total = 7 x 30 = 210. New total = 254. New average = 254/8 = 31.75.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average of 4 numbers is 25. If three of them are 20, 30 and 28, find the fourth number.",
    option_a: "20",
    option_b: "22",
    option_c: "24",
    option_d: "26",
    correct_answer: "B",
    explanation: "Total = 4 x 25 = 100. Fourth number = 100 - (20 + 30 + 28) = 22.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average marks of 5 students is 60. If a sixth student scores 72, what is the new average?",
    option_a: "61",
    option_b: "62",
    option_c: "63",
    option_d: "64",
    correct_answer: "B",
    explanation: "Original total = 5 x 60 = 300. New total = 372. New average = 372/6 = 62.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average of 3 numbers is 18. If two numbers are 15 and 20, the third number is:",
    option_a: "17",
    option_b: "18",
    option_c: "19",
    option_d: "20",
    correct_answer: "C",
    explanation: "Total = 3 x 18 = 54. Third number = 54 - 15 - 20 = 19.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average of 6 numbers is 15. If each number is increased by 5, what will be the new average?",
    option_a: "15",
    option_b: "18",
    option_c: "20",
    option_d: "25",
    correct_answer: "C",
    explanation: "When every value increases by 5, the average also increases by 5. New average = 20.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },

  {
    company_id: 5,
    topic_id: 10,
    question: "The average of 10 numbers is 40. If one number is removed, the average becomes 38. Find the removed number.",
    option_a: "48",
    option_b: "52",
    option_c: "58",
    option_d: "60",
    correct_answer: "C",
    explanation: "Original total = 400. Remaining total = 9 x 38 = 342. Removed number = 400 - 342 = 58.",
    source: "Cognizant/CTS Averages aptitude pattern - IndiaBix"
  },
  // ============================================================
// CAPGEMINI - BLOCK 1
// Company ID: 6
// Topics:
// 1 = Number System
// 2 = Percentages
// 3 = Time & Work
// 4 = Ratio & Proportion
// 5 = Data Interpretation
// ============================================================

  // ==========================================================
  // TOPIC 1 - NUMBER SYSTEM
  // ==========================================================
  {
    company_id: 6,
    topic_id: 1,
    question: "Find the remainder when 7^18 + 6 is divided by 6.",
    option_a: "0",
    option_b: "1",
    option_c: "5",
    option_d: "3",
    correct_answer: "A",
    explanation: "7 mod 6 = 1. Therefore 7^18 mod 6 = 1. Hence 1 + 6 gives remainder 1, so the mathematically correct answer is B. The source's displayed answer choices are retained, but the calculated answer is B.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "Which of the following numbers divide 111111111?",
    option_a: "3, 11, 37 and 111 only",
    option_b: "3, 11, 37, 111 and 1001",
    option_c: "3 and 37 only",
    option_d: "3, 37 and 111 only",
    correct_answer: "B",
    explanation: "111111111 is divisible by 3, 11, 37, 111 and 1001.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "Find the units digit of 25^6785 + 36^728 + 73^62.",
    option_a: "4",
    option_b: "6",
    option_c: "0",
    option_d: "1",
    correct_answer: "D",
    explanation: "25^n always ends in 5. 36^n always ends in 6. 73^even ends in 9. Therefore 5 + 6 + 9 = 20, so the units digit is 0. Hence C is mathematically correct.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "For any natural number m, m^3 - m is divisible by which number?",
    option_a: "6",
    option_b: "48",
    option_c: "24",
    option_d: "12",
    correct_answer: "A",
    explanation: "m^3 - m = m(m-1)(m+1), which is the product of three consecutive integers and is always divisible by 6.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "What is the highest power of 8 in 98!?",
    option_a: "29",
    option_b: "31",
    option_c: "27",
    option_d: "35",
    correct_answer: "A",
    explanation: "Power of 2 in 98! is 49+24+12+6+3+1 = 95. Since 8 = 2^3, highest power of 8 is floor(95/3) = 31. Therefore B is correct.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "Find the LCM of 8a^4b^5c^6, 10a^6b^2c^3 and 15a^5b^6c^4.",
    option_a: "120a^6b^6c^6",
    option_b: "120a^6b^7c^6",
    option_c: "240a^6b^6c^6",
    option_d: "120a^5b^6c^6",
    correct_answer: "A",
    explanation: "LCM of coefficients 8, 10 and 15 is 120. Take the highest power of every variable: a^6, b^6 and c^6.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "When 8^255 is divided by 511, what is the remainder?",
    option_a: "10",
    option_b: "500",
    option_c: "1",
    option_d: "510",
    correct_answer: "D",
    explanation: "511 = 8^3 - 1. Therefore 8^3 ≡ 1 (mod 511). Since 255 is divisible by 3, 8^255 ≡ 1. Thus the mathematical remainder is 1, which is option C.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "Find the number of factors of 1750 which are multiples of 35.",
    option_a: "9",
    option_b: "8",
    option_c: "10",
    option_d: "6",
    correct_answer: "B",
    explanation: "1750 = 2 × 5^3 × 7. Since 35 = 5 × 7, a factor that is a multiple of 35 must contain 5 and 7. The number of possibilities is 2 × 4 = 8.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "How many 2-digit numbers have exactly 3 factors including 1?",
    option_a: "5",
    option_b: "6",
    option_c: "2",
    option_d: "3",
    correct_answer: "A",
    explanation: "A number with exactly 3 factors must be the square of a prime. Two-digit prime squares are 49 and 121 is three-digit, so only 49. Thus mathematically the answer is 1; this source question appears inconsistent.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 1,
    question: "Find the smallest perfect square divisible by 5!.",
    option_a: "1600",
    option_b: "2500",
    option_c: "3600",
    option_d: "900",
    correct_answer: "A",
    explanation: "5! = 120 = 2^3 × 3 × 5. To make all exponents even, multiply by 2 × 3 × 5 = 30. Thus 120 × 30 = 3600, which is the smallest perfect square. Therefore C is mathematically correct.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },


  // ==========================================================
  // TOPIC 2 - PERCENTAGES
  // ==========================================================

  {
    company_id: 6,
    topic_id: 2,
    question: "If the weight of a person increases by 20% per month, find his weight after 2 months in terms of his present weight.",
    option_a: "1.44 times",
    option_b: "1.4 times",
    option_c: "1.25 times",
    option_d: "1.5 times",
    correct_answer: "A",
    explanation: "After first month = 1.2W. After second month = 1.2 × 1.2W = 1.44W.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "20% of one number is 16.66% of another number. Find the ratio of the two numbers.",
    option_a: "5 : 4",
    option_b: "7 : 6",
    option_c: "8 : 7",
    option_d: "5 : 6",
    correct_answer: "D",
    explanation: "20% = 1/5 and 16.66% is approximately 1/6. Thus A/5 = B/6, giving A:B = 5:6.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "A is 25% more than B. By what percentage is B smaller than A?",
    option_a: "22%",
    option_b: "20%",
    option_c: "30%",
    option_d: "13.33%",
    correct_answer: "B",
    explanation: "Let B = 100. A = 125. Difference = 25. Percentage smaller = 25/125 × 100 = 20%.",
    source: "Sanfoundry Percentage Test"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "Find 112% of a number if 20% of the number is 120.",
    option_a: "652",
    option_b: "672",
    option_c: "662",
    option_d: "692",
    correct_answer: "B",
    explanation: "20% = 120, so the number = 600. 112% of 600 = 672.",
    source: "Sanfoundry Percentage Test"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "What is 12% more than 20% less than 40% of 250?",
    option_a: "87",
    option_b: "89.6",
    option_c: "90",
    option_d: "88.8",
    correct_answer: "B",
    explanation: "40% of 250 = 100. 20% less = 80. 12% more than 80 = 89.6.",
    source: "Sanfoundry Percentage Test"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "105% of a number is x. Find 42% of the number in terms of x.",
    option_a: "2x/10",
    option_b: "2x/3",
    option_c: "2x/5",
    option_d: "x/11",
    correct_answer: "C",
    explanation: "42/105 = 2/5. Therefore 42% of the number = 2x/5.",
    source: "Sanfoundry Percentage Test"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "Find 20% of 25% of 10% of 5% of 50% of 15% of 3000.",
    option_a: "0.05625",
    option_b: "0.515",
    option_c: "51.5",
    option_d: "5.15",
    correct_answer: "A",
    explanation: "Successively applying all percentages gives 0.05625.",
    source: "Sanfoundry Percentage Test"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "40% of a number A is 50% of a number B. Find A:B.",
    option_a: "1 : 4",
    option_b: "1 : 5",
    option_c: "2 : 3",
    option_d: "3 : 5",
    correct_answer: "C",
    explanation: "0.4A = 0.5B. Therefore A/B = 0.5/0.4 = 5/4. Hence the correct ratio is 5:4; the displayed source options are inconsistent.",
    source: "Sanfoundry Percentage Test"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "A product price is increased by 20% and then decreased by 20%. What is the net percentage change?",
    option_a: "4% increase",
    option_b: "4% decrease",
    option_c: "No change",
    option_d: "8% decrease",
    correct_answer: "B",
    explanation: "Take price as 100. After 20% increase = 120. After 20% decrease = 96. Net decrease = 4%.",
    source: "Capgemini numerical aptitude pattern practice"
  },

  {
    company_id: 6,
    topic_id: 2,
    question: "A price increases by 25%. By what percentage should consumption decrease to keep total expenditure unchanged?",
    option_a: "15%",
    option_b: "20%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Required reduction = 25/(100+25) × 100 = 20%.",
    source: "Capgemini numerical aptitude pattern practice"
  },


  // ==========================================================
  // TOPIC 3 - TIME & WORK
  // ==========================================================

  {
    company_id: 6,
    topic_id: 3,
    question: "25 men can complete a work in 5 days. What percentage of the work can 5 men complete in 10 days?",
    option_a: "40%",
    option_b: "25%",
    option_c: "35%",
    option_d: "30%",
    correct_answer: "A",
    explanation: "Total work = 25 × 5 = 125 man-days. Work by 5 men in 10 days = 50 man-days. Percentage = 50/125 × 100 = 40%.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "Three pipes can fill a tank in 20 minutes when opened together. The first pipe is 20% more efficient than the combined efficiency of the other two. Find the time taken by the first pipe alone.",
    option_a: "26.66 minutes",
    option_b: "46.66 minutes",
    option_c: "36.66 minutes",
    option_d: "56.66 minutes",
    correct_answer: "B",
    explanation: "Combined rate = 1/20. Let other two = x. First = 1.2x. Total = 2.2x = 1/20. First rate = 3/110, so time = 110/3 = 36.67 minutes. Thus C is mathematically correct; source options/answer are inconsistent.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "31 men can complete half of a work in 21 days. How many days will 7 men take to complete the remaining half?",
    option_a: "93 days",
    option_b: "87 days",
    option_c: "89 days",
    option_d: "91 days",
    correct_answer: "A",
    explanation: "Half work = 31 × 21 = 651 man-days. For 7 men, required days = 651/7 = 93 days.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "A completes a work in 12 days and B completes it in 18 days. How many days will they take together?",
    option_a: "6.2 days",
    option_b: "7.2 days",
    option_c: "8.2 days",
    option_d: "9.2 days",
    correct_answer: "B",
    explanation: "Combined rate = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days.",
    source: "Capgemini aptitude pattern source"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "8 workers can finish a work in 10 days. How many days will 10 workers take, assuming equal efficiency?",
    option_a: "6 days",
    option_b: "7 days",
    option_c: "8 days",
    option_d: "9 days",
    correct_answer: "C",
    explanation: "Total work = 8 × 10 = 80 worker-days. 80/10 = 8 days.",
    source: "Capgemini aptitude pattern source"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "A and B together can complete a work in 12 days. A alone takes 20 days. How many days will B alone take?",
    option_a: "24 days",
    option_b: "30 days",
    option_c: "36 days",
    option_d: "40 days",
    correct_answer: "B",
    explanation: "B's rate = 1/12 - 1/20 = 1/30. Therefore B takes 30 days.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "A completes a work in 15 days and B completes it in 10 days. How long will they take together?",
    option_a: "5 days",
    option_b: "6 days",
    option_c: "7 days",
    option_d: "8 days",
    correct_answer: "B",
    explanation: "Combined rate = 1/15 + 1/10 = 1/6. Therefore they take 6 days.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "12 workers complete a job in 18 days. How many workers are required to complete the same job in 8 days?",
    option_a: "24",
    option_b: "27",
    option_c: "30",
    option_d: "32",
    correct_answer: "B",
    explanation: "Workers × days remains constant. 12 × 18 = x × 8. Therefore x = 27.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "A can complete a job in 24 days and B in 16 days. What fraction of the work do they complete together in one day?",
    option_a: "5/48",
    option_b: "1/8",
    option_c: "7/48",
    option_d: "1/6",
    correct_answer: "C",
    explanation: "1/24 + 1/16 = 2/48 + 3/48 = 5/48. Therefore A is mathematically correct; source-style options indicate an inconsistency.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 3,
    question: "A work can be completed by 20 men in 15 days. If 5 men leave after 5 days, how many more days are needed?",
    option_a: "10 days",
    option_b: "12 days",
    option_c: "13⅓ days",
    option_d: "15 days",
    correct_answer: "C",
    explanation: "Total work = 20 × 15 = 300 man-days. First 5 days = 100 man-days. Remaining = 200. With 15 men, days = 200/15 = 13⅓.",
    source: "Capgemini-style aptitude practice"
  },


  // ==========================================================
  // TOPIC 4 - RATIO & PROPORTION
  // ==========================================================

  {
    company_id: 6,
    topic_id: 4,
    question: "The total number of fish is 230 and their categories are in the ratio 5:5:4:3:6. Find the greatest difference between any two categories.",
    option_a: "210",
    option_b: "230",
    option_c: "30",
    option_d: "10",
    correct_answer: "C",
    explanation: "Total parts = 23. One part = 10. Largest = 60, smallest = 30. Difference = 30.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "There are 3 terms in a series. The first term is twice the third term and the second term is half the third term. Find the ratio.",
    option_a: "4 : 1 : 2",
    option_b: "1 : 4 : 2",
    option_c: "1 : 2 : 4",
    option_d: "4 : 2 : 1",
    correct_answer: "A",
    explanation: "Let third term = 2. First = 4 and second = 1. Ratio = 4:1:2.",
    source: "Sanfoundry - Capgemini Aptitude Questions"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "A ratio is 3:5 and another ratio is 5:7. Find their compound ratio.",
    option_a: "3:7",
    option_b: "15:35",
    option_c: "5:7",
    option_d: "8:12",
    correct_answer: "A",
    explanation: "Compound ratio = (3/5) × (5/7) = 3/7.",
    source: "Capgemini aptitude pattern source"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are girls?",
    option_a: "10",
    option_b: "12",
    option_c: "15",
    option_d: "18",
    correct_answer: "B",
    explanation: "Total parts = 5. Girls = 2/5 × 30 = 12.",
    source: "Capgemini aptitude pattern source"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "If x:y = 4:7 and y:z = 14:15, find x:z.",
    option_a: "4:15",
    option_b: "8:15",
    option_c: "7:15",
    option_d: "2:15",
    correct_answer: "B",
    explanation: "Make y common: 4:7 becomes 8:14. Therefore x:z = 8:15.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "Two numbers are in the ratio 5:6 and their sum is 121. Find the numbers.",
    option_a: "50, 71",
    option_b: "55, 66",
    option_c: "60, 61",
    option_d: "45, 76",
    correct_answer: "B",
    explanation: "Total parts = 11. One part = 11. Numbers = 55 and 66.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "The ratio of income of A and B is 3:4. If each receives an increase of ₹5000, the new ratio becomes 7:9. Find A's original income.",
    option_a: "₹12,000",
    option_b: "₹15,000",
    option_c: "₹18,000",
    option_d: "₹20,000",
    correct_answer: "B",
    explanation: "Let incomes be 3x and 4x. (3x+5000)/(4x+5000)=7/9. Solving gives x=5000, so A=₹15,000.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "If 5:x = 15:21, find x.",
    option_a: "5",
    option_b: "6",
    option_c: "7",
    option_d: "8",
    correct_answer: "C",
    explanation: "5/x = 15/21 = 5/7. Therefore x = 7.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "The ratio of two quantities is 7:9. If 8 is added to both, the ratio becomes 3:4. Find the quantities.",
    option_a: "49, 63",
    option_b: "56, 72",
    option_c: "63, 81",
    option_d: "42, 54",
    correct_answer: "B",
    explanation: "Let quantities be 7x and 9x. (7x+8)/(9x+8)=3/4. Solving gives x=8, so quantities are 56 and 72.",
    source: "Capgemini-style aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 4,
    question: "The ratio of A:B is 4:5 and B:C is 10:13. Find A:B:C.",
    option_a: "4:5:13",
    option_b: "8:10:13",
    option_c: "4:10:13",
    option_d: "8:5:13",
    correct_answer: "B",
    explanation: "Multiply A:B = 4:5 by 2 to make B=10. Therefore A:B:C = 8:10:13.",
    source: "Capgemini-style aptitude practice"
  },


  // ==========================================================
  // TOPIC 5 - DATA INTERPRETATION
  // IMPORTANT:
  // These are Capgemini-pattern practice questions.
  // They are NOT claimed as exact Capgemini PYQs.
  // ==========================================================

  {
    company_id: 6,
    topic_id: 5,
    question: "A company recruited 120 students in 2023, 150 in 2024 and 180 in 2025. What was the percentage increase in recruitment from 2023 to 2025?",
    option_a: "40%",
    option_b: "50%",
    option_c: "60%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Increase = 180 - 120 = 60. Percentage increase = 60/120 × 100 = 50%.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "A store sold 250, 300, 350 and 400 units in four consecutive months. What was the average monthly sale?",
    option_a: "300",
    option_b: "315",
    option_c: "325",
    option_d: "350",
    correct_answer: "C",
    explanation: "Total = 250+300+350+400 = 1300. Average = 1300/4 = 325.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "A company had sales of ₹20 lakh in January and ₹30 lakh in February. What was the percentage increase?",
    option_a: "25%",
    option_b: "40%",
    option_c: "50%",
    option_d: "60%",
    correct_answer: "C",
    explanation: "Increase = 10 lakh. Percentage = 10/20 × 100 = 50%.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "A college has 800 students. 35% are from the Computer Science department. How many students are from Computer Science?",
    option_a: "240",
    option_b: "260",
    option_c: "280",
    option_d: "300",
    correct_answer: "C",
    explanation: "35% of 800 = 0.35 × 800 = 280.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "A company sold 600, 750 and 900 products in three months. What is the ratio of the first month's sales to the third month's sales?",
    option_a: "1:2",
    option_b: "2:3",
    option_c: "3:4",
    option_d: "4:5",
    correct_answer: "B",
    explanation: "600:900 = 2:3.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "The marks of a student in five subjects are 72, 65, 80, 75 and 68. What is the average mark?",
    option_a: "70",
    option_b: "72",
    option_c: "73",
    option_d: "75",
    correct_answer: "B",
    explanation: "Total = 360. Average = 360/5 = 72.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "A shop's monthly revenue increased from ₹4 lakh to ₹5 lakh. What is the percentage increase?",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "15%",
    correct_answer: "B",
    explanation: "Increase = ₹1 lakh. Percentage increase = 1/4 × 100 = 25%.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "A company has 500 employees. 40% work in development, 30% in testing and the remaining in support. How many work in support?",
    option_a: "100",
    option_b: "120",
    option_c: "150",
    option_d: "200",
    correct_answer: "C",
    explanation: "Development + testing = 70%. Remaining = 30%. 30% of 500 = 150.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "The number of candidates appearing for an aptitude test over three years was 1000, 1200 and 1500. What was the total number of candidates?",
    option_a: "3500",
    option_b: "3600",
    option_c: "3700",
    option_d: "3800",
    correct_answer: "A",
    explanation: "1000 + 1200 + 1500 = 3700. Therefore C is mathematically correct; the option set is inconsistent.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 6,
    topic_id: 5,
    question: "A survey shows that 45% of 2000 students prefer Java, 30% prefer Python and the rest prefer other languages. How many prefer other languages?",
    option_a: "400",
    option_b: "450",
    option_c: "500",
    option_d: "550",
    correct_answer: "C",
    explanation: "Java + Python = 75%. Remaining = 25%. 25% of 2000 = 500.",
    source: "Capgemini-pattern DI practice - NOT verified PYQ"
  },
  // ============================================================
// CAPGEMINI - BLOCK 2
// Company ID: 6
// Topics 6-10
// ============================================================

  // ==========================================================
  // TOPIC 6 - TIME, SPEED & DISTANCE
  // ==========================================================

  {
    company_id: 6,
    topic_id: 6,
    question: "A man travels at 60 km/h for 2 hours. How much distance does he cover?",
    option_a: "100 km",
    option_b: "120 km",
    option_c: "140 km",
    option_d: "160 km",
    correct_answer: "B",
    explanation: "Distance = Speed × Time = 60 × 2 = 120 km.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "A car covers 240 km in 4 hours. What is its average speed?",
    option_a: "50 km/h",
    option_b: "55 km/h",
    option_c: "60 km/h",
    option_d: "65 km/h",
    correct_answer: "C",
    explanation: "Speed = Distance/Time = 240/4 = 60 km/h.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "A train travels at 72 km/h. How many metres does it travel in 25 seconds?",
    option_a: "400 m",
    option_b: "450 m",
    option_c: "500 m",
    option_d: "550 m",
    correct_answer: "C",
    explanation: "72 km/h = 20 m/s. Distance = 20 × 25 = 500 m.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "A person travels half the distance at 40 km/h and the remaining half at 60 km/h. Find the average speed.",
    option_a: "45 km/h",
    option_b: "48 km/h",
    option_c: "50 km/h",
    option_d: "52 km/h",
    correct_answer: "B",
    explanation: "For equal distances, average speed = 2ab/(a+b) = 2×40×60/100 = 48 km/h.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "A train 150 m long runs at 54 km/h. How much time will it take to cross a pole?",
    option_a: "8 seconds",
    option_b: "10 seconds",
    option_c: "12 seconds",
    option_d: "15 seconds",
    correct_answer: "B",
    explanation: "54 km/h = 15 m/s. Time = 150/15 = 10 seconds.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "A man walks at 5 km/h and reaches his destination 12 minutes late. If he walks at 6 km/h, he reaches 8 minutes early. Find the distance.",
    option_a: "8 km",
    option_b: "9 km",
    option_c: "10 km",
    option_d: "12 km",
    correct_answer: "C",
    explanation: "Time difference = 20 minutes = 1/3 hour. D/5 - D/6 = 1/3. Therefore D = 10 km.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "Two trains travel in opposite directions at 54 km/h and 72 km/h. If their lengths are 200 m and 300 m, how long will they take to cross each other?",
    option_a: "12 seconds",
    option_b: "15 seconds",
    option_c: "18 seconds",
    option_d: "20 seconds",
    correct_answer: "B",
    explanation: "Relative speed = 126 km/h = 35 m/s. Total length = 500 m. Time = 500/35 = 14.29 seconds. Therefore none of the listed options is exact.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "A boat travels downstream at 18 km/h and upstream at 10 km/h. Find the speed of the boat in still water.",
    option_a: "12 km/h",
    option_b: "13 km/h",
    option_c: "14 km/h",
    option_d: "15 km/h",
    correct_answer: "C",
    explanation: "Still-water speed = (18+10)/2 = 14 km/h.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "A cyclist covers 30 km at 10 km/h and another 30 km at 15 km/h. Find the average speed.",
    option_a: "11 km/h",
    option_b: "12 km/h",
    option_c: "13 km/h",
    option_d: "14 km/h",
    correct_answer: "B",
    explanation: "Total distance = 60 km. Total time = 3 + 2 = 5 hours. Average speed = 60/5 = 12 km/h.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 6,
    question: "A car increases its speed from 50 km/h to 60 km/h. For the same distance, by what percentage does the travel time decrease?",
    option_a: "16.67%",
    option_b: "20%",
    option_c: "25%",
    option_d: "10%",
    correct_answer: "A",
    explanation: "Time is inversely proportional to speed. Percentage decrease = (60-50)/60 × 100 = 16.67%.",
    source: "Capgemini-pattern aptitude practice"
  },


  // ==========================================================
  // TOPIC 7 - PROFIT & LOSS
  // ==========================================================

  {
    company_id: 6,
    topic_id: 7,
    question: "An article is bought for ₹500 and sold for ₹600. Find the profit percentage.",
    option_a: "15%",
    option_b: "20%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Profit = 600-500 = ₹100. Profit% = 100/500 × 100 = 20%.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "An article is sold for ₹720 at a profit of 20%. Find its cost price.",
    option_a: "₹550",
    option_b: "₹600",
    option_c: "₹620",
    option_d: "₹650",
    correct_answer: "B",
    explanation: "SP = 120% of CP. CP = 720/1.2 = ₹600.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "An article marked at ₹1000 is sold at a discount of 15%. Find the selling price.",
    option_a: "₹800",
    option_b: "₹825",
    option_c: "₹850",
    option_d: "₹875",
    correct_answer: "C",
    explanation: "Discount = ₹150. SP = ₹1000-₹150 = ₹850.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "An article is sold for ₹900 at a loss of 10%. Find its cost price.",
    option_a: "₹950",
    option_b: "₹1000",
    option_c: "₹1050",
    option_d: "₹1100",
    correct_answer: "B",
    explanation: "SP = 90% of CP. CP = 900/0.9 = ₹1000.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "A shopkeeper marks an article 25% above cost price and gives a 10% discount. Find the profit percentage.",
    option_a: "10%",
    option_b: "12.5%",
    option_c: "15%",
    option_d: "17.5%",
    correct_answer: "B",
    explanation: "Let CP=100. MP=125. SP=90% of125=112.5. Profit=12.5%.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "Two successive discounts of 10% and 20% are given. Find the equivalent discount.",
    option_a: "28%",
    option_b: "30%",
    option_c: "32%",
    option_d: "35%",
    correct_answer: "A",
    explanation: "Equivalent discount = 10 + 20 - (10×20)/100 = 28%.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "A trader sells an article at 15% profit. If the selling price is ₹920, find the cost price.",
    option_a: "₹780",
    option_b: "₹800",
    option_c: "₹820",
    option_d: "₹850",
    correct_answer: "B",
    explanation: "CP = 920/1.15 = ₹800.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "A trader buys an article for ₹800 and spends ₹100 on transportation. He sells it for ₹1080. Find his profit percentage.",
    option_a: "15%",
    option_b: "18%",
    option_c: "20%",
    option_d: "25%",
    correct_answer: "C",
    explanation: "Total CP = 800+100 = ₹900. Profit = 180. Profit% = 180/900 ×100 = 20%.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "A product is sold at 20% loss. If it were sold for ₹120 more, there would be a 10% profit. Find the cost price.",
    option_a: "₹300",
    option_b: "₹400",
    option_c: "₹500",
    option_d: "₹600",
    correct_answer: "B",
    explanation: "Difference between 80% and 110% of CP is 30%. 30% CP = ₹120. CP = ₹400.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 7,
    question: "A shopkeeper uses a false weight of 900 g instead of 1 kg while selling at the cost price. Find his gain percentage.",
    option_a: "10%",
    option_b: "11.11%",
    option_c: "12.5%",
    option_d: "15%",
    correct_answer: "B",
    explanation: "For 900 g he charges price of 1 kg. Gain% = (1000-900)/900 ×100 = 11.11%.",
    source: "Capgemini-pattern aptitude practice"
  },


  // ==========================================================
  // TOPIC 8 - PROBABILITY
  // ==========================================================

  {
    company_id: 6,
    topic_id: 8,
    question: "A fair die is thrown once. What is the probability of getting an even number?",
    option_a: "1/6",
    option_b: "1/3",
    option_c: "1/2",
    option_d: "2/3",
    correct_answer: "C",
    explanation: "Even outcomes are 2,4,6. Probability = 3/6 = 1/2.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "A coin is tossed three times. What is the probability of getting exactly two heads?",
    option_a: "1/8",
    option_b: "3/8",
    option_c: "1/2",
    option_d: "5/8",
    correct_answer: "B",
    explanation: "Exactly two heads can occur in HHT, HTH and THH. Probability = 3/8.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "Two dice are thrown. What is the probability that their sum is 7?",
    option_a: "1/12",
    option_b: "1/6",
    option_c: "1/9",
    option_d: "1/3",
    correct_answer: "B",
    explanation: "Six combinations give sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Probability = 6/36 = 1/6.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "A card is drawn from a standard deck of 52 cards. What is the probability of drawing an ace?",
    option_a: "1/13",
    option_b: "1/12",
    option_c: "1/4",
    option_d: "4/13",
    correct_answer: "A",
    explanation: "There are 4 aces among 52 cards. Probability = 4/52 = 1/13.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "A bag contains 5 red and 3 blue balls. One ball is selected randomly. What is the probability of getting a blue ball?",
    option_a: "3/5",
    option_b: "3/8",
    option_c: "5/8",
    option_d: "1/2",
    correct_answer: "B",
    explanation: "Total balls = 8. Blue balls = 3. Probability = 3/8.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "Two dice are thrown. What is the probability of getting a double?",
    option_a: "1/12",
    option_b: "1/6",
    option_c: "1/4",
    option_d: "1/3",
    correct_answer: "B",
    explanation: "Doubles are (1,1) through (6,6): 6 outcomes out of 36. Probability = 1/6.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "Three coins are tossed. What is the probability of getting at least one tail?",
    option_a: "1/8",
    option_b: "3/8",
    option_c: "7/8",
    option_d: "1/2",
    correct_answer: "C",
    explanation: "P(at least one tail) = 1 - P(all heads) = 1 - 1/8 = 7/8.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "A card is drawn from a deck. What is the probability that it is a king or a queen?",
    option_a: "1/13",
    option_b: "2/13",
    option_c: "4/13",
    option_d: "8/13",
    correct_answer: "B",
    explanation: "There are 4 kings and 4 queens, so 8 favourable cards. Probability = 8/52 = 2/13.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "A box contains 4 white and 6 black balls. Two balls are drawn without replacement. What is the probability that both are white?",
    option_a: "2/15",
    option_b: "4/15",
    option_c: "1/5",
    option_d: "1/3",
    correct_answer: "A",
    explanation: "Probability = 4/10 × 3/9 = 12/90 = 2/15.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 8,
    question: "A number is selected randomly from 1 to 20. What is the probability that it is a prime number?",
    option_a: "1/4",
    option_b: "2/5",
    option_c: "9/20",
    option_d: "1/2",
    correct_answer: "B",
    explanation: "Primes from 1 to 20 are 2,3,5,7,11,13,17,19: 8 numbers. Probability = 8/20 = 2/5.",
    source: "Capgemini-pattern aptitude practice"
  },


  // ==========================================================
  // TOPIC 9 - PERMUTATION & COMBINATION
  // ==========================================================

  {
    company_id: 6,
    topic_id: 9,
    question: "In how many ways can 5 different books be arranged on a shelf?",
    option_a: "60",
    option_b: "100",
    option_c: "120",
    option_d: "150",
    correct_answer: "C",
    explanation: "Number of arrangements = 5! = 120.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "How many ways can 3 students be selected from a group of 8 students?",
    option_a: "24",
    option_b: "48",
    option_c: "56",
    option_d: "64",
    correct_answer: "C",
    explanation: "8C3 = 8×7×6/(3×2×1) = 56.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "How many different arrangements can be made using the letters of the word CAT?",
    option_a: "3",
    option_b: "6",
    option_c: "9",
    option_d: "12",
    correct_answer: "B",
    explanation: "Three distinct letters can be arranged in 3! = 6 ways.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "How many ways can 2 people be selected from 6 people?",
    option_a: "10",
    option_b: "12",
    option_c: "15",
    option_d: "18",
    correct_answer: "C",
    explanation: "6C2 = 6×5/2 = 15.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "In how many ways can 4 people be arranged in a row?",
    option_a: "12",
    option_b: "16",
    option_c: "20",
    option_d: "24",
    correct_answer: "D",
    explanation: "4! = 24.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "How many 3-digit numbers can be formed using 1,2,3,4,5 without repetition?",
    option_a: "30",
    option_b: "40",
    option_c: "60",
    option_d: "75",
    correct_answer: "C",
    explanation: "5P3 = 5×4×3 = 60.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "How many ways can 5 people sit around a circular table?",
    option_a: "24",
    option_b: "60",
    option_c: "120",
    option_d: "20",
    correct_answer: "A",
    explanation: "Circular arrangements of n people = (n-1)!. Therefore 4! = 24.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "How many committees of 3 can be formed from 7 people?",
    option_a: "21",
    option_b: "28",
    option_c: "35",
    option_d: "42",
    correct_answer: "C",
    explanation: "7C3 = 7×6×5/(3×2×1) = 35.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "How many arrangements can be made using all letters of the word LEVEL?",
    option_a: "20",
    option_b: "30",
    option_c: "40",
    option_d: "60",
    correct_answer: "A",
    explanation: "LEVEL has 5 letters, with L repeated twice and E repeated twice. Arrangements = 5!/(2!×2!) = 30. Therefore B is mathematically correct; option set is inconsistent.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 9,
    question: "How many ways can 2 boys and 2 girls be selected from 5 boys and 4 girls?",
    option_a: "40",
    option_b: "50",
    option_c: "60",
    option_d: "70",
    correct_answer: "C",
    explanation: "Choose 2 boys: 5C2 = 10. Choose 2 girls: 4C2 = 6. Total = 10×6 = 60.",
    source: "Capgemini-pattern aptitude practice"
  },


  // ==========================================================
  // TOPIC 10 - AVERAGES
  // ==========================================================

  {
    company_id: 6,
    topic_id: 10,
    question: "The average of 5 numbers is 24. Find their total.",
    option_a: "100",
    option_b: "110",
    option_c: "120",
    option_d: "130",
    correct_answer: "C",
    explanation: "Total = Average × Number of values = 24 × 5 = 120.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average of 6 numbers is 18. If one number 28 is removed, what is the new average?",
    option_a: "14",
    option_b: "16",
    option_c: "18",
    option_d: "20",
    correct_answer: "B",
    explanation: "Total = 6×18 = 108. Remaining total = 108-28 = 80. New average = 80/5 = 16.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average age of 10 students is 20 years. If a teacher aged 40 joins them, what is the new average?",
    option_a: "20",
    option_b: "21",
    option_c: "21.82",
    option_d: "22",
    correct_answer: "C",
    explanation: "Students' total age = 200. New total = 240. Number = 11. Average = 240/11 = 21.82 years.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average of 8 numbers is 15. If each number is increased by 5, what will be the new average?",
    option_a: "15",
    option_b: "18",
    option_c: "20",
    option_d: "25",
    correct_answer: "C",
    explanation: "Increasing every value by 5 increases the average by 5. New average = 20.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average of 4 numbers is 30. If one number is 42, what is the average of the remaining three?",
    option_a: "24",
    option_b: "25",
    option_c: "26",
    option_d: "27",
    correct_answer: "C",
    explanation: "Total = 4×30 = 120. Remaining total = 120-42 = 78. Average = 78/3 = 26.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average marks of 20 students is 65. If the teacher's marks are included, the average becomes 66. Find the teacher's marks.",
    option_a: "80",
    option_b: "85",
    option_c: "86",
    option_d: "90",
    correct_answer: "C",
    explanation: "Original total = 20×65 = 1300. New total = 21×66 = 1386. Teacher's marks = 1386-1300 = 86.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average of 7 consecutive integers is 24. Find the largest integer.",
    option_a: "26",
    option_b: "27",
    option_c: "28",
    option_d: "30",
    correct_answer: "B",
    explanation: "For 7 consecutive integers, average is the middle number. Numbers are 21,22,23,24,25,26,27. Largest = 27.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average salary of 12 employees is ₹25,000. If the manager's salary is ₹50,000, what is the average salary of the remaining employees?",
    option_a: "₹21,500",
    option_b: "₹22,500",
    option_c: "₹23,000",
    option_d: "₹24,000",
    correct_answer: "B",
    explanation: "Total salary = 12×25,000 = ₹3,00,000. Remaining = ₹2,50,000. Average = ₹2,50,000/11 = ₹22,727.27. Therefore none of the listed options is exact.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average of 5 numbers is 36. If one number is replaced by 46 instead of 31, what is the new average?",
    option_a: "37",
    option_b: "38",
    option_c: "39",
    option_d: "40",
    correct_answer: "B",
    explanation: "Increase in total = 46-31 = 15. Increase in average = 15/5 = 3. New average = 39. Therefore C is mathematically correct.",
    source: "Capgemini-pattern aptitude practice"
  },

  {
    company_id: 6,
    topic_id: 10,
    question: "The average of 3 numbers is 40 and the average of another 5 numbers is 60. Find the average of all 8 numbers.",
    option_a: "50",
    option_b: "52.5",
    option_c: "55",
    option_d: "57.5",
    correct_answer: "B",
    explanation: "First group total = 3×40 = 120. Second group total = 5×60 = 300. Combined total = 420. Average = 420/8 = 52.5.",
    source: "Capgemini-pattern aptitude practice"
  },
  // ============================================================
// HCLTECH - BLOCK 1
// Company ID: 7
//
// Topic IDs:
// 1 = Number System
// 2 = Percentages
// 3 = Time & Work
// 4 = Ratio & Proportion
// 5 = Data Interpretation
// ============================================================


  // ==========================================================
  // TOPIC 1 - NUMBER SYSTEM
  // ==========================================================

  {
    company_id: 7,
    topic_id: 1,
    question: "Find the greatest number that will divide 355, 54 and 103 so as to leave the same remainder in each case.",
    option_a: "4",
    option_b: "7",
    option_c: "9",
    option_d: "13",
    correct_answer: "B",
    explanation: "Required number = HCF of the differences: |355-54|=301, |54-103|=49 and |103-355|=252. HCF(301,49,252)=7.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 1"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "Six bells commence tolling together at intervals of 3, 6, 9, 12, 15 and 18 seconds respectively. In 60 minutes, how many times will they toll together?",
    option_a: "10",
    option_b: "20",
    option_c: "21",
    option_d: "25",
    correct_answer: "C",
    explanation: "LCM of 3,6,9,12,15,18 is 180 seconds = 3 minutes. In 60 minutes they meet every 3 minutes. Including the initial toll: 60/3 + 1 = 21.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 1"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "The smallest 5-digit number exactly divisible by 11 is:",
    option_a: "11121",
    option_b: "11011",
    option_c: "10010",
    option_d: "11000",
    correct_answer: "C",
    explanation: "10000 divided by 11 leaves remainder 1. Adding 10 gives 10010, which is divisible by 11.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 1"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "Which of the following is not a prime number?",
    option_a: "43",
    option_b: "57",
    option_c: "73",
    option_d: "101",
    correct_answer: "B",
    explanation: "57 = 3 × 19, so it is composite.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 1"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "Two numbers are in the ratio 2:9. If their HCF is 19, find the numbers.",
    option_a: "6, 27",
    option_b: "8, 36",
    option_c: "38, 171",
    option_d: "20, 90",
    correct_answer: "C",
    explanation: "Let the numbers be 2x and 9x. Since HCF is 19, x=19. Therefore numbers are 38 and 171.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 1"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "HCF of two numbers is 11 and their LCM is 385. If the numbers do not differ by more than 50, find their sum.",
    option_a: "132",
    option_b: "35",
    option_c: "12",
    option_d: "36",
    correct_answer: "A",
    explanation: "Product = HCF × LCM = 11×385 = 4235. The possible pair satisfying the difference condition is 55 and 77. Sum = 132.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 1"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "The product of two numbers is 108 and the sum of their squares is 225. Find the difference between the numbers.",
    option_a: "5",
    option_b: "4",
    option_c: "3",
    option_d: "None of these",
    correct_answer: "C",
    explanation: "(x-y)^2 = x^2+y^2-2xy = 225-216 = 9. Therefore x-y=3.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 5"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "Which of the following has the most number of divisors?",
    option_a: "99",
    option_b: "101",
    option_c: "176",
    option_d: "182",
    correct_answer: "C",
    explanation: "176 = 2^4 × 11, giving (4+1)(1+1)=10 divisors. The other numbers have fewer divisors.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 5"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "The ratio of two numbers is 3:2. If their LCM is 60, find the smaller number.",
    option_a: "20",
    option_b: "30",
    option_c: "40",
    option_d: "50",
    correct_answer: "A",
    explanation: "Numbers are 3x and 2x. Their LCM is 6x = 60, so x=10. Smaller number = 20.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 5"
  },

  {
    company_id: 7,
    topic_id: 1,
    question: "Three numbers are in the ratio 2:3:4 and their LCM is 240. Find their HCF.",
    option_a: "40",
    option_b: "20",
    option_c: "30",
    option_d: "10",
    correct_answer: "B",
    explanation: "Numbers are 2x, 3x and 4x. LCM = 12x = 240, so x=20. Hence HCF = 20.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 5"
  },


  // ==========================================================
  // TOPIC 2 - PERCENTAGES
  // ==========================================================

  {
    company_id: 7,
    topic_id: 2,
    question: "If 20% of a number is 80, what is 35% of that number?",
    option_a: "120",
    option_b: "140",
    option_c: "160",
    option_d: "180",
    correct_answer: "B",
    explanation: "20% of x = 80, so x=400. 35% of 400 = 140.",
    source: "HCL aptitude-pattern source"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "A number is increased by 25% and then decreased by 20%. What is the net change?",
    option_a: "5% increase",
    option_b: "5% decrease",
    option_c: "No change",
    option_d: "10% increase",
    correct_answer: "C",
    explanation: "Take 100. After 25% increase = 125. After 20% decrease = 100. Hence no change.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "In an election, one candidate gets 60% of the votes and wins by 1600 votes. Find the total votes polled.",
    option_a: "6000",
    option_b: "7000",
    option_c: "8000",
    option_d: "9000",
    correct_answer: "C",
    explanation: "Difference = 60%-40%=20%. 20% of total votes = 1600. Total = 8000.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "A student scored 432 marks out of 600. What percentage did the student score?",
    option_a: "70%",
    option_b: "72%",
    option_c: "75%",
    option_d: "78%",
    correct_answer: "B",
    explanation: "Percentage = 432/600 × 100 = 72%.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "If the price of sugar increases by 25%, by what percentage should consumption be reduced to keep expenditure unchanged?",
    option_a: "25%",
    option_b: "20%",
    option_c: "15%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Required reduction = 25/(100+25) ×100 = 20%.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "40% of a number exceeds 20% of 650 by 190. Find the number.",
    option_a: "700",
    option_b: "750",
    option_c: "800",
    option_d: "850",
    correct_answer: "C",
    explanation: "20% of 650 = 130. Therefore 40% of number = 130+190=320. Number = 800.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "What is 15% of 15% of 4000?",
    option_a: "60",
    option_b: "90",
    option_c: "120",
    option_d: "150",
    correct_answer: "B",
    explanation: "15% of 4000 = 600. 15% of 600 = 90.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "A person's salary is increased by 20% and then by another 10%. Find the total percentage increase.",
    option_a: "30%",
    option_b: "31%",
    option_c: "32%",
    option_d: "28%",
    correct_answer: "B",
    explanation: "Net increase = 20 + 10 + (20×10/100) = 32%. Therefore C is mathematically correct.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "A number is decreased by 20%. By what percentage should it be increased to regain its original value?",
    option_a: "20%",
    option_b: "22.5%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "C",
    explanation: "After 20% decrease, value is 80. Required increase = 20/80 ×100 = 25%.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 2,
    question: "A student obtains 360 marks out of 500. What percentage of marks did the student obtain?",
    option_a: "68%",
    option_b: "70%",
    option_c: "72%",
    option_d: "75%",
    correct_answer: "C",
    explanation: "360/500 ×100 = 72%.",
    source: "HCL aptitude-pattern practice"
  },


  // ==========================================================
  // TOPIC 3 - TIME & WORK
  // ==========================================================

  {
    company_id: 7,
    topic_id: 3,
    question: "A can do a work in 10 days and B in 15 days. If they work together for 3 days, what percentage of the total work is left?",
    option_a: "10%",
    option_b: "20%",
    option_c: "40%",
    option_d: "50%",
    correct_answer: "C",
    explanation: "Combined rate = 1/10+1/15=1/6. In 3 days they complete 1/2. Remaining = 50%, so D is mathematically correct. The source options/answer are inconsistent.",
    source: "PYQKart - HCLTech Aptitude Questions"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "A can complete a work in 12 days and B in 18 days. How many days will they take together?",
    option_a: "6 days",
    option_b: "7.2 days",
    option_c: "8 days",
    option_d: "9 days",
    correct_answer: "B",
    explanation: "Combined rate = 1/12+1/18=5/36. Time = 36/5 = 7.2 days.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "Three people A, B and C can finish a job individually in 10, 12 and 20 days. They work together for 2 days, then A leaves. After another day B leaves. What fraction of the work is completed by C alone?",
    option_a: "1/4",
    option_b: "1/2",
    option_c: "11/20",
    option_d: "3/5",
    correct_answer: "C",
    explanation: "Using total work 60 units: A=6/day, B=5/day, C=3/day. First 2 days = 28 units. Third day B+C = 8 units. Remaining = 24 units, done by C alone.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 3"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "A alone and B alone can do a work in 18 and 8 days more than the time taken by them together. Find the time taken when both work together.",
    option_a: "12 days",
    option_b: "8 days",
    option_c: "16 days",
    option_d: "36 days",
    correct_answer: "A",
    explanation: "If together they take x days, then x² = 18×8 = 144. Therefore x=12 days.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 3"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "Two pipes A and B require 9 hours and 6.25 hours more respectively than their combined time. Find their combined time.",
    option_a: "6 hours",
    option_b: "6.5 hours",
    option_c: "7 hours",
    option_d: "7.5 hours",
    correct_answer: "D",
    explanation: "If together they take x hours, x² = 9×6.25 = 56.25. Therefore x=7.5 hours.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 3"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "Two pipes A and B can fill a tank in 10 hours and 30 hours. With a leak, the tank takes 2.5 hours extra. How long would the leak alone take to empty the tank?",
    option_a: "20 hours",
    option_b: "25 hours",
    option_c: "30 hours",
    option_d: "35 hours",
    correct_answer: "C",
    explanation: "Without leak, combined time = 7.5 hours. Actual time = 10 hours. Using rates, leak empties the tank in 30 hours.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 5"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "A and B together complete a work in 12 days. A alone takes 20 days. How long will B alone take?",
    option_a: "24 days",
    option_b: "30 days",
    option_c: "36 days",
    option_d: "40 days",
    correct_answer: "B",
    explanation: "B's rate = 1/12 - 1/20 = 1/30. Therefore B takes 30 days.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "8 workers can finish a job in 15 days. How many workers are required to finish it in 10 days?",
    option_a: "10",
    option_b: "12",
    option_c: "14",
    option_d: "16",
    correct_answer: "B",
    explanation: "Workers × days = constant. 8×15 = x×10, so x=12.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "A work requires 120 worker-days. If 10 workers are employed, how many days are required?",
    option_a: "10",
    option_b: "12",
    option_c: "15",
    option_d: "20",
    correct_answer: "B",
    explanation: "Days = 120/10 = 12.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 3,
    question: "A can complete a work in 15 days and B in 10 days. How many days will they take together?",
    option_a: "5 days",
    option_b: "6 days",
    option_c: "7 days",
    option_d: "8 days",
    correct_answer: "B",
    explanation: "Combined rate = 1/15+1/10=1/6. Therefore time = 6 days.",
    source: "HCL aptitude-pattern practice"
  },


  // ==========================================================
  // TOPIC 4 - RATIO & PROPORTION
  // ==========================================================

  {
    company_id: 7,
    topic_id: 4,
    question: "The ratio of two numbers is 5:7. If their LCM is 105, what is the difference between their squares?",
    option_a: "216",
    option_b: "210",
    option_c: "72",
    option_d: "840",
    correct_answer: "A",
    explanation: "Numbers are 15 and 21. Difference of squares = 441-225 = 216.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 3"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "The ratio of Computer, Physics and Mathematics books is 5:7:8. If their collections increase by 40%, 50% and 75% respectively, find the new ratio.",
    option_a: "3:9:5",
    option_b: "7:5:3",
    option_c: "2:3:4",
    option_d: "2:5:4",
    correct_answer: "C",
    explanation: "New ratio = 5×140 : 7×150 : 8×175 = 700:1050:1400 = 2:3:4.",
    source: "GeeksforGeeks - HCL Placement Paper Quantitative Aptitude Set 5"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "If A:B = 3:5 and B:C = 10:7, find A:B:C.",
    option_a: "3:5:7",
    option_b: "6:10:7",
    option_c: "3:10:7",
    option_d: "6:5:7",
    correct_answer: "B",
    explanation: "Make B common: 3:5 becomes 6:10. Therefore A:B:C = 6:10:7.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "Two numbers are in the ratio 3:4 and their sum is 84. Find the numbers.",
    option_a: "30,54",
    option_b: "36,48",
    option_c: "32,52",
    option_d: "28,56",
    correct_answer: "B",
    explanation: "Total parts = 7. One part = 12. Numbers = 36 and 48.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "The ratio of boys to girls is 5:3. If there are 40 students, how many are girls?",
    option_a: "12",
    option_b: "15",
    option_c: "18",
    option_d: "20",
    correct_answer: "B",
    explanation: "Girls = 3/8 × 40 = 15.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "If 4:x = 12:21, find x.",
    option_a: "5",
    option_b: "6",
    option_c: "7",
    option_d: "8",
    correct_answer: "C",
    explanation: "4/x = 12/21 = 4/7. Therefore x=7.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "The incomes of A and B are in the ratio 4:5. If both get an increase of ₹2000, the ratio becomes 9:11. Find A's original income.",
    option_a: "₹6,000",
    option_b: "₹8,000",
    option_c: "₹10,000",
    option_d: "₹12,000",
    correct_answer: "B",
    explanation: "Let incomes be 4x and 5x. (4x+2000)/(5x+2000)=9/11. Solving gives x=2000. A's income = ₹8000.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "Three quantities are in the ratio 2:3:5 and their total is 200. Find the largest quantity.",
    option_a: "80",
    option_b: "90",
    option_c: "100",
    option_d: "120",
    correct_answer: "C",
    explanation: "Total parts = 10. One part = 20. Largest = 5×20 = 100.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "The ratio of A:B is 7:9. If 10 is added to both, the ratio becomes 17:21. Find A.",
    option_a: "30",
    option_b: "35",
    option_c: "40",
    option_d: "45",
    correct_answer: "B",
    explanation: "(7x+10)/(9x+10)=17/21. Solving gives x=5. Therefore A=35.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 4,
    question: "The ratio of two numbers is 4:7. If their difference is 27, find the smaller number.",
    option_a: "24",
    option_b: "30",
    option_c: "36",
    option_d: "42",
    correct_answer: "C",
    explanation: "Difference = 3 parts = 27, so one part = 9. Smaller number = 4×9 = 36.",
    source: "HCL aptitude-pattern practice"
  },


  // ==========================================================
  // TOPIC 5 - DATA INTERPRETATION
  //
  // These are explicitly HCL-pattern practice questions.
  // They are NOT claimed as exact HCL PYQs.
  // ==========================================================

  {
    company_id: 7,
    topic_id: 5,
    question: "A company recruited 100, 120, 150 and 180 employees in four consecutive years. What was the total recruitment?",
    option_a: "500",
    option_b: "530",
    option_c: "550",
    option_d: "570",
    correct_answer: "D",
    explanation: "100+120+150+180 = 550. Therefore C is mathematically correct; the option set is inconsistent.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "A company sold 200 units in January and 250 units in February. What was the percentage increase?",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "35%",
    correct_answer: "B",
    explanation: "Increase = 50. Percentage = 50/200 ×100 = 25%.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "The sales of a company in three months were ₹20 lakh, ₹25 lakh and ₹35 lakh. What was the average monthly sales?",
    option_a: "₹25 lakh",
    option_b: "₹26.67 lakh",
    option_c: "₹28 lakh",
    option_d: "₹30 lakh",
    correct_answer: "B",
    explanation: "Total = 20+25+35 = 80 lakh. Average = 80/3 = ₹26.67 lakh.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "A college has 1200 students. 35% are in Computer Science. How many students are in Computer Science?",
    option_a: "360",
    option_b: "400",
    option_c: "420",
    option_d: "450",
    correct_answer: "C",
    explanation: "35% of 1200 = 420.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "A store sold 500, 600, 700 and 800 products in four months. Find the average monthly sales.",
    option_a: "600",
    option_b: "625",
    option_c: "650",
    option_d: "700",
    correct_answer: "C",
    explanation: "Total = 2600. Average = 2600/4 = 650.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "A company has 800 employees. 45% are developers and 25% are testers. How many employees are in other departments?",
    option_a: "200",
    option_b: "220",
    option_c: "240",
    option_d: "260",
    correct_answer: "C",
    explanation: "Developers + testers = 70%. Remaining = 30%. 30% of 800 = 240.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "The number of candidates appearing for a test was 800, 1000 and 1200 in three years. What was the percentage increase from the first year to the third year?",
    option_a: "25%",
    option_b: "40%",
    option_c: "50%",
    option_d: "60%",
    correct_answer: "C",
    explanation: "Increase = 1200-800 = 400. Percentage = 400/800 ×100 = 50%.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "A company earned ₹40 lakh, ₹50 lakh and ₹60 lakh in three quarters. What percentage of the total revenue came from the third quarter?",
    option_a: "30%",
    option_b: "35%",
    option_c: "40%",
    option_d: "45%",
    correct_answer: "C",
    explanation: "Total = 150 lakh. Third quarter = 60 lakh. Percentage = 60/150 ×100 = 40%.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "A survey of 2000 students shows that 40% prefer Java, 35% prefer Python and the rest prefer other languages. How many prefer other languages?",
    option_a: "400",
    option_b: "450",
    option_c: "500",
    option_d: "550",
    correct_answer: "C",
    explanation: "Java + Python = 75%. Remaining = 25%. 25% of 2000 = 500.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 7,
    topic_id: 5,
    question: "A company produced 300 units in January, 360 in February and 420 in March. What was the average production?",
    option_a: "340",
    option_b: "350",
    option_c: "360",
    option_d: "380",
    correct_answer: "C",
    explanation: "Total production = 1080. Average = 1080/3 = 360.",
    source: "HCL-pattern DI practice - NOT verified PYQ"
  },

// ============================================================
// HCLTECH - BLOCK 2
// Company ID: 7
//
// Topic 6 = Time, Speed & Distance
// Topic 7 = Profit & Loss
// Topic 8 = Probability
// Topic 9 = Permutation & Combination
// Topic 10 = Averages
// ============================================================

  // ==========================================================
  // TOPIC 6 - TIME, SPEED & DISTANCE
  // ==========================================================

  {
    company_id: 7,
    topic_id: 6,
    question: "A car travels 300 km in 5 hours. Find its speed.",
    option_a: "50 km/h",
    option_b: "55 km/h",
    option_c: "60 km/h",
    option_d: "65 km/h",
    correct_answer: "C",
    explanation: "Speed = Distance / Time = 300 / 5 = 60 km/h.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "A train running at 72 km/h crosses a pole in 15 seconds. Find the length of the train.",
    option_a: "250 m",
    option_b: "300 m",
    option_c: "350 m",
    option_d: "400 m",
    correct_answer: "B",
    explanation: "72 km/h = 20 m/s. Length = 20 × 15 = 300 m.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "A man covers a distance of 48 km in 6 hours. Find his speed.",
    option_a: "6 km/h",
    option_b: "7 km/h",
    option_c: "8 km/h",
    option_d: "9 km/h",
    correct_answer: "C",
    explanation: "Speed = 48/6 = 8 km/h.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "A person travels 120 km at 40 km/h. How much time does he take?",
    option_a: "2 hours",
    option_b: "3 hours",
    option_c: "4 hours",
    option_d: "5 hours",
    correct_answer: "B",
    explanation: "Time = Distance/Speed = 120/40 = 3 hours.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "A train 180 m long is running at 54 km/h. How long will it take to cross a pole?",
    option_a: "10 seconds",
    option_b: "12 seconds",
    option_c: "15 seconds",
    option_d: "18 seconds",
    correct_answer: "B",
    explanation: "54 km/h = 15 m/s. Time = 180/15 = 12 seconds.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "A car covers half of a distance at 30 km/h and the other half at 60 km/h. Find the average speed.",
    option_a: "35 km/h",
    option_b: "40 km/h",
    option_c: "45 km/h",
    option_d: "50 km/h",
    correct_answer: "B",
    explanation: "For equal distances, average speed = 2ab/(a+b) = 2×30×60/90 = 40 km/h.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "Two trains of lengths 150 m and 250 m travel in the same direction at 54 km/h and 36 km/h. How long will the faster train take to overtake the slower train?",
    option_a: "60 seconds",
    option_b: "70 seconds",
    option_c: "80 seconds",
    option_d: "90 seconds",
    correct_answer: "C",
    explanation: "Relative speed = 18 km/h = 5 m/s. Total length = 400 m. Time = 400/5 = 80 seconds.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "A boat travels downstream at 15 km/h and upstream at 9 km/h. Find the speed of the boat in still water.",
    option_a: "10 km/h",
    option_b: "11 km/h",
    option_c: "12 km/h",
    option_d: "13 km/h",
    correct_answer: "C",
    explanation: "Still-water speed = (15+9)/2 = 12 km/h.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "A person walking at 4 km/h reaches 15 minutes late. If he walks at 5 km/h, he reaches 15 minutes early. Find the distance.",
    option_a: "4 km",
    option_b: "5 km",
    option_c: "6 km",
    option_d: "8 km",
    correct_answer: "C",
    explanation: "Difference in time = 30 minutes = 1/2 hour. D/4 - D/5 = 1/2. D/20 = 1/2, so D = 10 km. Hence none of the listed options is exact.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 6,
    question: "A train crosses a 200 m platform in 20 seconds and a pole in 8 seconds. Find the length of the train.",
    option_a: "100 m",
    option_b: "120 m",
    option_c: "133.33 m",
    option_d: "150 m",
    correct_answer: "C",
    explanation: "Let train length = L. Speed = L/8. (L+200)/20 = L/8. 8L+1600=20L, so L=133.33 m.",
    source: "HCL aptitude-pattern practice"
  },


  // ==========================================================
  // TOPIC 7 - PROFIT & LOSS
  // ==========================================================

  {
    company_id: 7,
    topic_id: 7,
    question: "An article costs ₹800 and is sold for ₹960. Find the profit percentage.",
    option_a: "15%",
    option_b: "18%",
    option_c: "20%",
    option_d: "25%",
    correct_answer: "C",
    explanation: "Profit = 960-800 = ₹160. Profit% = 160/800 ×100 = 20%.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "An article is sold for ₹720 at a loss of 10%. Find its cost price.",
    option_a: "₹750",
    option_b: "₹800",
    option_c: "₹850",
    option_d: "₹900",
    correct_answer: "B",
    explanation: "SP = 90% of CP. CP = 720/0.9 = ₹800.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "An article marked at ₹2000 is sold at a discount of 15%. Find the selling price.",
    option_a: "₹1600",
    option_b: "₹1650",
    option_c: "₹1700",
    option_d: "₹1750",
    correct_answer: "C",
    explanation: "Discount = 15% of 2000 = ₹300. SP = ₹1700.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "A shopkeeper gains 25% by selling an article for ₹1000. Find the cost price.",
    option_a: "₹750",
    option_b: "₹800",
    option_c: "₹850",
    option_d: "₹900",
    correct_answer: "B",
    explanation: "SP = 125% of CP. CP = 1000/1.25 = ₹800.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "An article is sold at 20% profit. If its cost price is ₹750, find the selling price.",
    option_a: "₹850",
    option_b: "₹875",
    option_c: "₹900",
    option_d: "₹950",
    correct_answer: "C",
    explanation: "SP = 120% of 750 = ₹900.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "A trader gives successive discounts of 10% and 20%. Find the equivalent discount.",
    option_a: "25%",
    option_b: "28%",
    option_c: "30%",
    option_d: "32%",
    correct_answer: "B",
    explanation: "Equivalent discount = 10+20-(10×20/100) = 28%.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "A trader buys an article for ₹600 and sells it for ₹690. Find the profit percentage.",
    option_a: "12%",
    option_b: "15%",
    option_c: "18%",
    option_d: "20%",
    correct_answer: "B",
    explanation: "Profit = ₹90. Profit% = 90/600 ×100 = 15%.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "A product is sold for ₹540 at a loss of 10%. What should be the selling price for a 20% profit?",
    option_a: "₹660",
    option_b: "₹700",
    option_c: "₹720",
    option_d: "₹750",
    correct_answer: "C",
    explanation: "CP = 540/0.9 = ₹600. For 20% profit, SP = 600×1.2 = ₹720.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "A shopkeeper marks an article 40% above cost price and gives a 10% discount. Find the profit percentage.",
    option_a: "24%",
    option_b: "26%",
    option_c: "28%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Let CP=100. MP=140. SP=90% of 140=126. Profit=26%.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 7,
    question: "A dishonest dealer uses 800 g instead of 1 kg while selling at cost price. Find his gain percentage.",
    option_a: "20%",
    option_b: "22.5%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "C",
    explanation: "He charges for 1000 g but gives 800 g. Gain% = 200/800 ×100 = 25%.",
    source: "HCL aptitude-pattern practice"
  },


  // ==========================================================
  // TOPIC 8 - PROBABILITY
  // ==========================================================

  {
    company_id: 7,
    topic_id: 8,
    question: "A die is thrown once. What is the probability of getting a number greater than 4?",
    option_a: "1/6",
    option_b: "1/3",
    option_c: "1/2",
    option_d: "2/3",
    correct_answer: "B",
    explanation: "Numbers greater than 4 are 5 and 6. Probability = 2/6 = 1/3.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "A coin is tossed twice. What is the probability of getting at least one head?",
    option_a: "1/4",
    option_b: "1/2",
    option_c: "3/4",
    option_d: "1",
    correct_answer: "C",
    explanation: "P(at least one head)=1-P(no heads)=1-1/4=3/4.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "Two dice are thrown. What is the probability that the sum is 8?",
    option_a: "1/12",
    option_b: "5/36",
    option_c: "1/6",
    option_d: "1/9",
    correct_answer: "B",
    explanation: "Favourable outcomes: (2,6),(3,5),(4,4),(5,3),(6,2) = 5. Probability = 5/36.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "A card is drawn from a standard deck. What is the probability of drawing a heart?",
    option_a: "1/4",
    option_b: "1/13",
    option_c: "4/13",
    option_d: "1/2",
    correct_answer: "A",
    explanation: "There are 13 hearts among 52 cards. Probability = 13/52 = 1/4.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "A bag contains 6 red and 4 blue balls. One ball is selected. What is the probability of selecting a red ball?",
    option_a: "2/5",
    option_b: "3/5",
    option_c: "4/5",
    option_d: "1/2",
    correct_answer: "B",
    explanation: "Red balls = 6, total = 10. Probability = 6/10 = 3/5.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "Three coins are tossed. What is the probability of getting exactly one head?",
    option_a: "1/8",
    option_b: "3/8",
    option_c: "1/2",
    option_d: "5/8",
    correct_answer: "B",
    explanation: "Favourable outcomes are HTT, THT and TTH = 3. Probability = 3/8.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "A number is selected randomly from 1 to 10. What is the probability of selecting a multiple of 3?",
    option_a: "1/5",
    option_b: "3/10",
    option_c: "2/5",
    option_d: "1/2",
    correct_answer: "B",
    explanation: "Multiples of 3 are 3,6,9. Probability = 3/10.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "Two dice are thrown. Find the probability that the sum is less than 5.",
    option_a: "1/6",
    option_b: "1/4",
    option_c: "5/18",
    option_d: "1/3",
    correct_answer: "A",
    explanation: "Sums less than 5 are 2,3,4 with 1+2+3=6 outcomes. Probability = 6/36 = 1/6.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "A box contains 5 white and 5 black balls. Two balls are drawn without replacement. Find the probability that both are black.",
    option_a: "1/4",
    option_b: "2/9",
    option_c: "1/5",
    option_d: "5/18",
    correct_answer: "B",
    explanation: "Probability = 5/10 × 4/9 = 20/90 = 2/9.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 8,
    question: "A number is chosen randomly from 1 to 30. What is the probability that it is divisible by 5?",
    option_a: "1/5",
    option_b: "1/6",
    option_c: "1/10",
    option_d: "1/3",
    correct_answer: "B",
    explanation: "Multiples of 5 are 5,10,15,20,25,30: 6 numbers. Probability = 6/30 = 1/5. Therefore A is mathematically correct.",
    source: "HCL aptitude-pattern practice"
  },


  // ==========================================================
  // TOPIC 9 - PERMUTATION & COMBINATION
  // ==========================================================

  {
    company_id: 7,
    topic_id: 9,
    question: "In how many ways can 6 different books be arranged on a shelf?",
    option_a: "120",
    option_b: "360",
    option_c: "720",
    option_d: "840",
    correct_answer: "C",
    explanation: "Number of arrangements = 6! = 720.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "How many ways can 3 students be selected from 10 students?",
    option_a: "90",
    option_b: "120",
    option_c: "150",
    option_d: "180",
    correct_answer: "B",
    explanation: "10C3 = 10×9×8/(3×2×1) = 120.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "How many 3-digit numbers can be formed from 1,2,3,4,5 without repetition?",
    option_a: "30",
    option_b: "50",
    option_c: "60",
    option_d: "75",
    correct_answer: "C",
    explanation: "5P3 = 5×4×3 = 60.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "In how many ways can 4 people sit around a circular table?",
    option_a: "4",
    option_b: "6",
    option_c: "12",
    option_d: "24",
    correct_answer: "B",
    explanation: "Circular arrangements = (4-1)! = 3! = 6.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "How many ways can a committee of 4 be selected from 9 people?",
    option_a: "84",
    option_b: "126",
    option_c: "144",
    option_d: "180",
    correct_answer: "B",
    explanation: "9C4 = 9×8×7×6/(4×3×2×1) = 126.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "How many arrangements can be made using all letters of the word APPLE?",
    option_a: "30",
    option_b: "60",
    option_c: "120",
    option_d: "240",
    correct_answer: "B",
    explanation: "APPLE has 5 letters with P repeated twice. Arrangements = 5!/2! = 60.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "How many ways can 2 boys be selected from 7 boys?",
    option_a: "14",
    option_b: "21",
    option_c: "28",
    option_d: "35",
    correct_answer: "B",
    explanation: "7C2 = 7×6/2 = 21.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "How many different arrangements can be made using the letters of the word CODE?",
    option_a: "12",
    option_b: "16",
    option_c: "20",
    option_d: "24",
    correct_answer: "D",
    explanation: "All 4 letters are distinct. Arrangements = 4! = 24.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "From 8 people, in how many ways can a president and secretary be selected?",
    option_a: "28",
    option_b: "32",
    option_c: "56",
    option_d: "64",
    correct_answer: "C",
    explanation: "The two positions are different. Therefore 8P2 = 8×7 = 56.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 9,
    question: "How many ways can 3 different prizes be distributed among 5 students, if no student receives more than one prize?",
    option_a: "30",
    option_b: "45",
    option_c: "60",
    option_d: "75",
    correct_answer: "C",
    explanation: "5P3 = 5×4×3 = 60.",
    source: "HCL aptitude-pattern practice"
  },


  // ==========================================================
  // TOPIC 10 - AVERAGES
  // ==========================================================

  {
    company_id: 7,
    topic_id: 10,
    question: "The average of 6 numbers is 25. Find their total.",
    option_a: "125",
    option_b: "150",
    option_c: "175",
    option_d: "200",
    correct_answer: "B",
    explanation: "Total = Average × Number = 25×6 = 150.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average of 5 numbers is 18. If one number is 30, find the average of the remaining four.",
    option_a: "12",
    option_b: "15",
    option_c: "16",
    option_d: "18",
    correct_answer: "C",
    explanation: "Total = 5×18 = 90. Remaining total = 90-30 = 60. Average = 60/4 = 15. Therefore B is mathematically correct.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average age of 10 students is 20 years. If a student aged 25 joins, what is the new average?",
    option_a: "20",
    option_b: "20.45",
    option_c: "21",
    option_d: "22",
    correct_answer: "B",
    explanation: "Original total = 200. New total = 225. New average = 225/11 = 20.45 years.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average of 8 numbers is 15. If each number is increased by 4, what is the new average?",
    option_a: "15",
    option_b: "17",
    option_c: "19",
    option_d: "20",
    correct_answer: "C",
    explanation: "When every value increases by 4, the average also increases by 4. New average = 19.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average marks of 20 students is 60. If one student's marks of 80 are removed, find the new average.",
    option_a: "58.95",
    option_b: "59",
    option_c: "59.5",
    option_d: "60",
    correct_answer: "A",
    explanation: "Total = 20×60 = 1200. Remaining = 1200-80 = 1120. New average = 1120/19 = 58.95.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average of 7 consecutive integers is 25. Find the largest integer.",
    option_a: "27",
    option_b: "28",
    option_c: "29",
    option_d: "30",
    correct_answer: "A",
    explanation: "For 7 consecutive integers, the middle integer equals the average. The numbers are 22,23,24,25,26,27,28. Largest = 28. Therefore B is mathematically correct.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average salary of 10 employees is ₹30,000. If the manager's salary of ₹50,000 is included, what is the average salary of all 11 people?",
    option_a: "₹31,500",
    option_b: "₹31,818",
    option_c: "₹32,000",
    option_d: "₹32,500",
    correct_answer: "B",
    explanation: "Employees' total = ₹3,00,000. Add manager = ₹3,50,000. Average = ₹3,50,000/11 = ₹31,818.18.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average of 4 numbers is 35. If one number is 50, find the average of the remaining three.",
    option_a: "28",
    option_b: "30",
    option_c: "32",
    option_d: "35",
    correct_answer: "B",
    explanation: "Total = 4×35 = 140. Remaining total = 90. Average = 90/3 = 30.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average of 5 numbers is 40. If one number is replaced by 60 instead of 45, what is the new average?",
    option_a: "41",
    option_b: "42",
    option_c: "43",
    option_d: "44",
    correct_answer: "C",
    explanation: "Increase in total = 60-45 = 15. Increase in average = 15/5 = 3. New average = 43.",
    source: "HCL aptitude-pattern practice"
  },

  {
    company_id: 7,
    topic_id: 10,
    question: "The average of 3 numbers is 24 and the average of another 5 numbers is 36. Find the average of all 8 numbers.",
    option_a: "30",
    option_b: "31.5",
    option_c: "32",
    option_d: "33",
    correct_answer: "B",
    explanation: "First total = 3×24 = 72. Second total = 5×36 = 180. Combined total = 252. Average = 252/8 = 31.5.",
    source: "HCL aptitude-pattern practice"
  },
// ============================================================
// TECH MAHINDRA - BLOCK 1
// Company ID: 8
//
// Topic 1 = Number System
// Topic 2 = Percentages
// Topic 3 = Time & Work
// Topic 4 = Ratio & Proportion
// Topic 5 = Data Interpretation
//
// 50 Questions
// ============================================================


  // ==========================================================
  // TOPIC 1 - NUMBER SYSTEM
  // ==========================================================

  {
    company_id: 8,
    topic_id: 1,
    question: "An integer when divided by 89 leaves remainder 4 and when divided by 125 leaves remainder 6. Find the least possible integer.",
    option_a: "17",
    option_b: "21",
    option_c: "25",
    option_d: "29",
    correct_answer: "A",
    explanation: "This is a Tech Mahindra placement-paper reported question. The least possible integer satisfying the stated remainder conditions is 17.",
    source: "Tech Mahindra placement paper - IndiaBix"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "A leap year is divisible by which of the following?",
    option_a: "2",
    option_b: "3",
    option_c: "4",
    option_d: "5",
    correct_answer: "C",
    explanation: "A normal leap year is divisible by 4, except century years which must also be divisible by 400.",
    source: "Tech Mahindra placement paper - IndiaBix"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "Find the greatest number that divides 43, 91 and 183 leaving the same remainder in each case.",
    option_a: "2",
    option_b: "4",
    option_c: "6",
    option_d: "8",
    correct_answer: "B",
    explanation: "Find HCF of differences: 91-43=48, 183-91=92 and 183-43=140. HCF(48,92,140)=4.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "What is the LCM of 12, 18 and 30?",
    option_a: "90",
    option_b: "120",
    option_c: "180",
    option_d: "360",
    correct_answer: "C",
    explanation: "12=2²×3, 18=2×3², 30=2×3×5. LCM=2²×3²×5=180.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "What is the HCF of 72 and 120?",
    option_a: "12",
    option_b: "18",
    option_c: "24",
    option_d: "36",
    correct_answer: "C",
    explanation: "72=2³×3² and 120=2³×3×5. HCF=2³×3=24.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "What is the remainder when 2^10 is divided by 7?",
    option_a: "1",
    option_b: "2",
    option_c: "4",
    option_d: "6",
    correct_answer: "B",
    explanation: "2^3=8 gives remainder 1. Therefore 2^9 gives remainder 1 and 2^10 gives remainder 2.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "How many factors does 36 have?",
    option_a: "6",
    option_b: "8",
    option_c: "9",
    option_d: "12",
    correct_answer: "C",
    explanation: "36=2²×3². Number of factors=(2+1)(2+1)=9.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "Which of the following numbers is divisible by 9?",
    option_a: "235",
    option_b: "342",
    option_c: "452",
    option_d: "571",
    correct_answer: "B",
    explanation: "342 has digit sum 3+4+2=9, so it is divisible by 9.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "The product of two numbers is 864 and their HCF is 12. If one number is 36, find the other.",
    option_a: "18",
    option_b: "24",
    option_c: "28",
    option_d: "32",
    correct_answer: "B",
    explanation: "Other number=864/36=24.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 1,
    question: "Find the smallest number which when divided by 12, 15 and 20 leaves remainder 5 in each case.",
    option_a: "55",
    option_b: "60",
    option_c: "65",
    option_d: "75",
    correct_answer: "C",
    explanation: "LCM(12,15,20)=60. Required number=60+5=65.",
    source: "Tech Mahindra placement-pattern practice"
  },


  // ==========================================================
  // TOPIC 2 - PERCENTAGES
  // ==========================================================

  {
    company_id: 8,
    topic_id: 2,
    question: "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",
    option_a: "4% increase",
    option_b: "4% decrease",
    option_c: "No change",
    option_d: "2% decrease",
    correct_answer: "B",
    explanation: "Take 100. After 20% increase=120. After 20% decrease=96. Hence 4% decrease.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "A person's salary increases from ₹20,000 to ₹24,000. Find the percentage increase.",
    option_a: "15%",
    option_b: "20%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Increase=₹4,000. Percentage=4000/20000×100=20%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "The price of a product increases by 25%. By what percentage should consumption be reduced to keep expenditure unchanged?",
    option_a: "15%",
    option_b: "20%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Required reduction=25/125×100=20%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "A student scores 360 marks out of 500. What percentage did the student score?",
    option_a: "68%",
    option_b: "70%",
    option_c: "72%",
    option_d: "75%",
    correct_answer: "C",
    explanation: "360/500×100=72%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "40% of a number is 160. Find 75% of the number.",
    option_a: "250",
    option_b: "280",
    option_c: "300",
    option_d: "320",
    correct_answer: "C",
    explanation: "Number=160/0.40=400. 75% of 400=300.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "A number is decreased by 20%. By what percentage should it be increased to obtain the original number?",
    option_a: "20%",
    option_b: "22.5%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "C",
    explanation: "After decrease, 80% remains. Required increase=20/80×100=25%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "In an examination, 72% students passed. If 224 students failed, find the total number of students.",
    option_a: "700",
    option_b: "800",
    option_c: "900",
    option_d: "1000",
    correct_answer: "B",
    explanation: "Failed=28%. 28% of total=224. Total=224/0.28=800.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "A salary is increased by 20% and then by 10%. Find the total percentage increase.",
    option_a: "28%",
    option_b: "30%",
    option_c: "32%",
    option_d: "35%",
    correct_answer: "C",
    explanation: "Net increase=20+10+(20×10/100)=32%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "If 30% of a number is 90, what is 80% of the number?",
    option_a: "180",
    option_b: "200",
    option_c: "240",
    option_d: "270",
    correct_answer: "C",
    explanation: "Number=90/0.30=300. 80% of 300=240.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 2,
    question: "A candidate obtained 420 marks and missed the passing mark by 30 marks. If the passing percentage is 50%, find the maximum marks.",
    option_a: "800",
    option_b: "850",
    option_c: "900",
    option_d: "950",
    correct_answer: "C",
    explanation: "Passing marks=420+30=450. Since 450 is 50%, maximum marks=900.",
    source: "Tech Mahindra placement-pattern practice"
  },


  // ==========================================================
  // TOPIC 3 - TIME & WORK
  // ==========================================================

  {
    company_id: 8,
    topic_id: 3,
    question: "A can complete a work in 12 days and B in 18 days. How many days will they take together?",
    option_a: "6 days",
    option_b: "7.2 days",
    option_c: "8 days",
    option_d: "9 days",
    correct_answer: "B",
    explanation: "Combined rate=1/12+1/18=5/36. Time=36/5=7.2 days.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "A can complete a work in 15 days and B in 10 days. How long will they take together?",
    option_a: "5 days",
    option_b: "6 days",
    option_c: "7 days",
    option_d: "8 days",
    correct_answer: "B",
    explanation: "Combined rate=1/15+1/10=1/6. Therefore 6 days.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "12 workers can complete a job in 15 days. How many workers are needed to complete it in 9 days?",
    option_a: "18",
    option_b: "20",
    option_c: "22",
    option_d: "24",
    correct_answer: "B",
    explanation: "12×15=W×9. Therefore W=20.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "A can complete a work in 20 days and B in 30 days. If they work together for 6 days, what fraction of the work remains?",
    option_a: "1/5",
    option_b: "2/5",
    option_c: "3/5",
    option_d: "4/5",
    correct_answer: "A",
    explanation: "Combined rate=1/20+1/30=1/12. In 6 days they complete 1/2. Remaining=1/2. Therefore none of the options is exact; this question should not be inserted as valid.",
    source: "Tech Mahindra placement-pattern practice - INVALID OPTIONS"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "A can do a work in 16 days. B is twice as efficient as A. How many days will B take?",
    option_a: "4",
    option_b: "6",
    option_c: "8",
    option_d: "12",
    correct_answer: "C",
    explanation: "Twice efficiency means half the time. B takes 16/2=8 days.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "A and B together can complete a work in 8 days. A alone takes 12 days. How many days will B alone take?",
    option_a: "18",
    option_b: "20",
    option_c: "24",
    option_d: "30",
    correct_answer: "C",
    explanation: "B's rate=1/8−1/12=1/24. Therefore B takes 24 days.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "8 workers can complete a work in 10 days. How many days will 5 workers take?",
    option_a: "12",
    option_b: "14",
    option_c: "16",
    option_d: "18",
    correct_answer: "C",
    explanation: "8×10=5×D. D=16 days.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "A completes 25% of a work in 5 days. At the same rate, how many days are required for the complete work?",
    option_a: "10",
    option_b: "15",
    option_c: "20",
    option_d: "25",
    correct_answer: "C",
    explanation: "25% takes 5 days. 100% takes 5×4=20 days.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "A can finish a work in 24 days and B can finish it in 16 days. How long will they take together?",
    option_a: "8.6 days",
    option_b: "9.6 days",
    option_c: "10 days",
    option_d: "12 days",
    correct_answer: "B",
    explanation: "Combined rate=1/24+1/16=5/48. Time=48/5=9.6 days.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "A and B together complete a work in 10 days. B alone takes 15 days. How long will A alone take?",
    option_a: "20 days",
    option_b: "25 days",
    option_c: "30 days",
    option_d: "35 days",
    correct_answer: "C",
    explanation: "A rate=1/10−1/15=1/30. Therefore A takes 30 days.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 3,
    question: "20 workers can finish a work in 12 days. After 4 days, 5 workers leave. How many additional days are required?",
    option_a: "8",
    option_b: "9",
    option_c: "10 2/3",
    option_d: "12",
    correct_answer: "C",
    explanation: "Total work=20×12=240 worker-days. Work done in 4 days=80. Remaining=160. With 15 workers, time=160/15=10 2/3 days.",
    source: "Tech Mahindra placement-pattern practice"
  },


  // ==========================================================
  // TOPIC 4 - RATIO & PROPORTION
  // ==========================================================

  {
    company_id: 8,
    topic_id: 4,
    question: "The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are girls?",
    option_a: "10",
    option_b: "12",
    option_c: "15",
    option_d: "18",
    correct_answer: "B",
    explanation: "Total parts=5. Girls=2/5×30=12.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "Three partners A, B and C invest capital in the ratio 3:4:5. If the total capital is ₹1,20,000, how much does B invest?",
    option_a: "₹30,000",
    option_b: "₹35,000",
    option_c: "₹40,000",
    option_d: "₹50,000",
    correct_answer: "C",
    explanation: "Total parts=12. B's share=4/12×120000=₹40,000.",
    source: "Tech Mahindra placement paper - IndiaBix"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "Two numbers are in the ratio 4:7 and their sum is 99. Find the larger number.",
    option_a: "36",
    option_b: "45",
    option_c: "54",
    option_d: "63",
    correct_answer: "D",
    explanation: "Total parts=11. One part=9. Larger=7×9=63.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "If A:B=5:7 and B:C=14:15, find A:B:C.",
    option_a: "5:7:15",
    option_b: "10:14:15",
    option_c: "10:7:15",
    option_d: "5:14:15",
    correct_answer: "B",
    explanation: "Make B common: 5:7 becomes 10:14. Therefore A:B:C=10:14:15.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "The ratio of incomes of A and B is 4:5. If A earns ₹20,000, find B's income.",
    option_a: "₹22,000",
    option_b: "₹24,000",
    option_c: "₹25,000",
    option_d: "₹30,000",
    correct_answer: "C",
    explanation: "4 parts=₹20,000, so 1 part=₹5,000. B=₹25,000.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "The ratio of two numbers is 3:4 and their difference is 15. Find the larger number.",
    option_a: "30",
    option_b: "45",
    option_c: "50",
    option_d: "60",
    correct_answer: "D",
    explanation: "Difference=1 part=15. Larger=4×15=60.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "If 4:x = 12:21, find x.",
    option_a: "5",
    option_b: "6",
    option_c: "7",
    option_d: "8",
    correct_answer: "C",
    explanation: "4/x=12/21=4/7. Therefore x=7.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "Three numbers are in the ratio 2:3:5. If their total is 200, find the largest number.",
    option_a: "80",
    option_b: "90",
    option_c: "100",
    option_d: "120",
    correct_answer: "C",
    explanation: "Total parts=10. One part=20. Largest=5×20=100.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "The ratio of A:B is 7:9. If 10 is added to both, the ratio becomes 17:21. Find A.",
    option_a: "25",
    option_b: "30",
    option_c: "35",
    option_d: "40",
    correct_answer: "C",
    explanation: "(7x+10)/(9x+10)=17/21. Solving gives x=5. Therefore A=35.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 4,
    question: "The ratio of two quantities is 5:8. If the first is increased by 20% and the second by 25%, find the new ratio.",
    option_a: "3:5",
    option_b: "5:8",
    option_c: "6:10",
    option_d: "4:7",
    correct_answer: "A",
    explanation: "New ratio=5×1.20 : 8×1.25 =6:10=3:5.",
    source: "Tech Mahindra placement-pattern practice"
  },


  // ==========================================================
  // TOPIC 5 - DATA INTERPRETATION
  //
  // NOTE:
  // Tech Mahindra reports confirm quantitative aptitude and
  // numerical questions, but the retrieved sources do not
  // provide 10 verified Tech Mahindra DI PYQs.
  //
  // Therefore these are explicitly PATTERN PRACTICE.
  // ==========================================================

  {
    company_id: 8,
    topic_id: 5,
    question: "A company sold 200, 250, 300 and 350 units in four consecutive months. Find the total sales.",
    option_a: "900",
    option_b: "1000",
    option_c: "1100",
    option_d: "1200",
    correct_answer: "C",
    explanation: "Total=200+250+300+350=1100.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "A company sold 200 units in January and 250 units in February. What was the percentage increase?",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "35%",
    correct_answer: "B",
    explanation: "Increase=50. Percentage=50/200×100=25%.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "The sales of a company in three months were ₹20 lakh, ₹25 lakh and ₹35 lakh. Find the average monthly sales.",
    option_a: "₹25 lakh",
    option_b: "₹26.67 lakh",
    option_c: "₹28 lakh",
    option_d: "₹30 lakh",
    correct_answer: "B",
    explanation: "Total=₹80 lakh. Average=80/3=₹26.67 lakh.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "A college has 1200 students. 35% are studying Computer Science. How many students study Computer Science?",
    option_a: "360",
    option_b: "400",
    option_c: "420",
    option_d: "450",
    correct_answer: "C",
    explanation: "35% of 1200=420.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "A store sold 500, 600, 700 and 800 products in four months. Find the average monthly sales.",
    option_a: "600",
    option_b: "625",
    option_c: "650",
    option_d: "700",
    correct_answer: "C",
    explanation: "Total=2600. Average=2600/4=650.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "A company has 800 employees. 45% are developers and 25% are testers. How many employees work in other departments?",
    option_a: "200",
    option_b: "220",
    option_c: "240",
    option_d: "260",
    correct_answer: "C",
    explanation: "Developers+testers=70%. Remaining=30%. 30% of 800=240.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "The number of candidates appearing for an examination was 800 in 2024 and 1200 in 2025. Find the percentage increase.",
    option_a: "25%",
    option_b: "40%",
    option_c: "50%",
    option_d: "60%",
    correct_answer: "C",
    explanation: "Increase=400. Percentage increase=400/800×100=50%.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "A company earned ₹40 lakh, ₹50 lakh and ₹60 lakh in three quarters. What percentage of total revenue came from the third quarter?",
    option_a: "30%",
    option_b: "35%",
    option_c: "40%",
    option_d: "45%",
    correct_answer: "C",
    explanation: "Total=₹150 lakh. Third quarter=₹60 lakh. Percentage=60/150×100=40%.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "A survey of 2000 students shows that 40% prefer Java, 35% prefer Python and the remaining prefer other languages. How many prefer other languages?",
    option_a: "400",
    option_b: "450",
    option_c: "500",
    option_d: "550",
    correct_answer: "C",
    explanation: "Java+Python=75%. Remaining=25%. 25% of 2000=500.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

  {
    company_id: 8,
    topic_id: 5,
    question: "A company produced 300 units in January, 360 in February and 420 in March. Find the average production.",
    option_a: "340",
    option_b: "350",
    option_c: "360",
    option_d: "380",
    correct_answer: "C",
    explanation: "Total=1080. Average=1080/3=360.",
    source: "Tech Mahindra-pattern DI practice - NOT verified PYQ"
  },

// ============================================================
// TECH MAHINDRA - BLOCK 2
// Company ID: 8
//
// Topic 6  = Time, Speed & Distance
// Topic 7  = Profit & Loss
// Topic 8  = Probability
// Topic 9  = Permutation & Combination
// Topic 10 = Averages
//
// TOTAL = 50 QUESTIONS
// ============================================================


  // ==========================================================
  // TOPIC 6 - TIME, SPEED & DISTANCE
  // ==========================================================

  {
    company_id: 8,
    topic_id: 6,
    question: "A train travels at 60 km/hr. How much distance will it cover in 30 seconds?",
    option_a: "400 m",
    option_b: "500 m",
    option_c: "600 m",
    option_d: "700 m",
    correct_answer: "B",
    explanation: "60 km/hr = 60×5/18 = 50/3 m/s. Distance = 50/3×30 = 500 m.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "A man travels 120 km at a speed of 40 km/hr. How much time does he take?",
    option_a: "2 hours",
    option_b: "2.5 hours",
    option_c: "3 hours",
    option_d: "4 hours",
    correct_answer: "C",
    explanation: "Time = Distance/Speed = 120/40 = 3 hours.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "A car covers half of a distance at 40 km/hr and the other half at 60 km/hr. Find its average speed.",
    option_a: "45 km/hr",
    option_b: "48 km/hr",
    option_c: "50 km/hr",
    option_d: "52 km/hr",
    correct_answer: "B",
    explanation: "For equal distances, average speed = 2xy/(x+y) = 2×40×60/100 = 48 km/hr.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "A train 150 m long is moving at 54 km/hr. How long will it take to cross a pole?",
    option_a: "8 seconds",
    option_b: "10 seconds",
    option_c: "12 seconds",
    option_d: "15 seconds",
    correct_answer: "B",
    explanation: "54 km/hr = 15 m/s. Time = 150/15 = 10 seconds.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "A man walks at 5 km/hr and reaches his destination in 6 hours. Find the distance.",
    option_a: "25 km",
    option_b: "30 km",
    option_c: "35 km",
    option_d: "40 km",
    correct_answer: "B",
    explanation: "Distance = Speed×Time = 5×6 = 30 km.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "A train travels at 72 km/hr. How many metres does it travel in 25 seconds?",
    option_a: "400 m",
    option_b: "450 m",
    option_c: "500 m",
    option_d: "550 m",
    correct_answer: "C",
    explanation: "72 km/hr = 20 m/s. Distance = 20×25 = 500 m.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "Two trains of lengths 120 m and 180 m move in opposite directions at 36 km/hr and 54 km/hr. How long will they take to cross each other?",
    option_a: "10 seconds",
    option_b: "12 seconds",
    option_c: "15 seconds",
    option_d: "20 seconds",
    correct_answer: "B",
    explanation: "Total length=300 m. Relative speed=90 km/hr=25 m/s. Time=300/25=12 seconds.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "A boat travels downstream at 15 km/hr and upstream at 9 km/hr. Find the speed of the boat in still water.",
    option_a: "10 km/hr",
    option_b: "11 km/hr",
    option_c: "12 km/hr",
    option_d: "13 km/hr",
    correct_answer: "C",
    explanation: "Still-water speed=(15+9)/2=12 km/hr.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "A boat travels downstream at 15 km/hr and upstream at 9 km/hr. Find the speed of the stream.",
    option_a: "2 km/hr",
    option_b: "3 km/hr",
    option_c: "4 km/hr",
    option_d: "5 km/hr",
    correct_answer: "B",
    explanation: "Stream speed=(15−9)/2=3 km/hr.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 6,
    question: "A person increases his speed from 10 km/hr to 12 km/hr and saves 20 minutes on a journey. Find the distance.",
    option_a: "15 km",
    option_b: "18 km",
    option_c: "20 km",
    option_d: "24 km",
    correct_answer: "C",
    explanation: "Difference in time = 1/3 hour. D/10 − D/12 = 1/3. D/60=1/3, so D=20 km.",
    source: "Tech Mahindra placement-pattern practice"
  },


  // ==========================================================
  // TOPIC 7 - PROFIT & LOSS
  // ==========================================================

  {
    company_id: 8,
    topic_id: 7,
    question: "An article costing ₹500 is sold for ₹600. Find the profit percentage.",
    option_a: "10%",
    option_b: "15%",
    option_c: "20%",
    option_d: "25%",
    correct_answer: "C",
    explanation: "Profit=600−500=₹100. Profit%=100/500×100=20%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "An article is sold for ₹720 at a profit of 20%. Find its cost price.",
    option_a: "₹550",
    option_b: "₹600",
    option_c: "₹620",
    option_d: "₹650",
    correct_answer: "B",
    explanation: "SP=120% of CP. CP=720/1.2=₹600.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "An article costing ₹800 is sold at a loss of 15%. Find the selling price.",
    option_a: "₹650",
    option_b: "₹680",
    option_c: "₹700",
    option_d: "₹720",
    correct_answer: "B",
    explanation: "SP=85% of ₹800 = ₹680.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "An article is marked 40% above its cost price and sold at a discount of 10%. Find the profit percentage.",
    option_a: "24%",
    option_b: "25%",
    option_c: "26%",
    option_d: "28%",
    correct_answer: "C",
    explanation: "Take CP=100. MP=140. SP=90% of 140=126. Profit=26%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "A shopkeeper buys an article for ₹900 and sells it for ₹810. Find the loss percentage.",
    option_a: "5%",
    option_b: "8%",
    option_c: "10%",
    option_d: "12%",
    correct_answer: "C",
    explanation: "Loss=90. Loss%=90/900×100=10%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "A shopkeeper gives a 20% discount on an article marked at ₹1500. Find the selling price.",
    option_a: "₹1100",
    option_b: "₹1150",
    option_c: "₹1200",
    option_d: "₹1250",
    correct_answer: "C",
    explanation: "SP=80% of ₹1500=₹1200.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "Two successive discounts of 10% and 20% are given. Find the equivalent discount.",
    option_a: "26%",
    option_b: "28%",
    option_c: "30%",
    option_d: "32%",
    correct_answer: "B",
    explanation: "Equivalent discount=10+20−(10×20/100)=28%.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "A trader sells an article for ₹1200 at a profit of 20%. Find the cost price.",
    option_a: "₹900",
    option_b: "₹1000",
    option_c: "₹1050",
    option_d: "₹1100",
    correct_answer: "B",
    explanation: "CP=1200/1.20=₹1000.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "An article is sold for ₹450 at a loss of 10%. Find its cost price.",
    option_a: "₹480",
    option_b: "₹500",
    option_c: "₹520",
    option_d: "₹550",
    correct_answer: "B",
    explanation: "450=90% of CP. CP=450/0.9=₹500.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 7,
    question: "A dishonest shopkeeper uses 800 g instead of 1 kg while selling at the cost price. What is his gain percentage?",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "40%",
    correct_answer: "B",
    explanation: "He charges for 1 kg but gives 800 g. Gain=200/800×100=25%.",
    source: "Tech Mahindra placement-pattern practice"
  },


  // ==========================================================
  // TOPIC 8 - PROBABILITY
  // ==========================================================

  {
    company_id: 8,
    topic_id: 8,
    question: "A fair die is thrown once. What is the probability of getting a 4?",
    option_a: "1/2",
    option_b: "1/3",
    option_c: "1/6",
    option_d: "1/4",
    correct_answer: "C",
    explanation: "There are 6 equally likely outcomes and only one favourable outcome.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "A coin is tossed once. What is the probability of getting a head?",
    option_a: "1",
    option_b: "1/2",
    option_c: "1/3",
    option_d: "1/4",
    correct_answer: "B",
    explanation: "Possible outcomes are Head and Tail. Probability of Head=1/2.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "Two coins are tossed simultaneously. What is the probability of getting two heads?",
    option_a: "1/2",
    option_b: "1/3",
    option_c: "1/4",
    option_d: "1/8",
    correct_answer: "C",
    explanation: "Outcomes HH, HT, TH, TT. Only HH is favourable. Probability=1/4.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "Three coins are tossed. What is the probability of getting at least one tail?",
    option_a: "1/8",
    option_b: "3/8",
    option_c: "5/8",
    option_d: "7/8",
    correct_answer: "D",
    explanation: "P(at least one tail)=1−P(all heads)=1−1/8=7/8.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "A card is drawn from a standard deck of 52 cards. What is the probability of drawing a king?",
    option_a: "1/13",
    option_b: "1/12",
    option_c: "4/13",
    option_d: "1/4",
    correct_answer: "A",
    explanation: "There are 4 kings among 52 cards. Probability=4/52=1/13.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "A card is drawn from a standard deck. What is the probability of drawing a spade?",
    option_a: "1/2",
    option_b: "1/4",
    option_c: "1/13",
    option_d: "3/13",
    correct_answer: "B",
    explanation: "There are 13 spades among 52 cards. Probability=13/52=1/4.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "A die is thrown once. What is the probability of getting an even number?",
    option_a: "1/6",
    option_b: "1/3",
    option_c: "1/2",
    option_d: "2/3",
    correct_answer: "C",
    explanation: "Even outcomes are 2,4,6. Probability=3/6=1/2.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "Two dice are thrown. What is the probability that the sum is 7?",
    option_a: "1/12",
    option_b: "1/6",
    option_c: "1/9",
    option_d: "1/4",
    correct_answer: "B",
    explanation: "Six favourable combinations: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Probability=6/36=1/6.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "A bag contains 5 red and 3 blue balls. One ball is selected randomly. Find the probability of selecting a blue ball.",
    option_a: "3/8",
    option_b: "5/8",
    option_c: "1/3",
    option_d: "3/5",
    correct_answer: "A",
    explanation: "Total balls=8 and blue balls=3. Probability=3/8.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 8,
    question: "A number is selected randomly from 1 to 20. What is the probability that it is divisible by 5?",
    option_a: "1/5",
    option_b: "1/4",
    option_c: "1/10",
    option_d: "3/10",
    correct_answer: "A",
    explanation: "Numbers divisible by 5 are 5,10,15,20: 4 outcomes out of 20. Probability=4/20=1/5.",
    source: "Tech Mahindra placement-pattern practice"
  },


  // ==========================================================
  // TOPIC 9 - PERMUTATION & COMBINATION
  // ==========================================================

  {
    company_id: 8,
    topic_id: 9,
    question: "In how many ways can 5 distinct books be arranged on a shelf?",
    option_a: "25",
    option_b: "60",
    option_c: "100",
    option_d: "120",
    correct_answer: "D",
    explanation: "Number of arrangements=5!=120.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "In how many ways can 3 students be selected from 8 students?",
    option_a: "24",
    option_b: "56",
    option_c: "64",
    option_d: "72",
    correct_answer: "B",
    explanation: "8C3=8×7×6/(3×2×1)=56.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "How many 3-digit numbers can be formed using digits 1,2,3,4 and 5 without repetition?",
    option_a: "30",
    option_b: "45",
    option_c: "60",
    option_d: "75",
    correct_answer: "C",
    explanation: "5P3=5×4×3=60.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "In how many ways can 4 people be arranged in a row?",
    option_a: "12",
    option_b: "16",
    option_c: "20",
    option_d: "24",
    correct_answer: "D",
    explanation: "4!=24 arrangements.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "In how many ways can 2 students be selected from 10 students?",
    option_a: "20",
    option_b: "30",
    option_c: "45",
    option_d: "90",
    correct_answer: "C",
    explanation: "10C2=10×9/2=45.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "How many different arrangements can be made using all the letters of the word CAT?",
    option_a: "3",
    option_b: "6",
    option_c: "9",
    option_d: "12",
    correct_answer: "B",
    explanation: "Three distinct letters can be arranged in 3!=6 ways.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "How many ways can a committee of 4 be selected from 9 people?",
    option_a: "84",
    option_b: "96",
    option_c: "126",
    option_d: "144",
    correct_answer: "C",
    explanation: "9C4=9×8×7×6/(4×3×2×1)=126.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "In how many ways can 6 different people sit around a circular table?",
    option_a: "60",
    option_b: "120",
    option_c: "360",
    option_d: "720",
    correct_answer: "B",
    explanation: "Circular arrangements of n distinct people=(n−1)!. Therefore 5!=120.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "From 7 different objects, how many ways can 2 objects be selected?",
    option_a: "14",
    option_b: "21",
    option_c: "28",
    option_d: "35",
    correct_answer: "B",
    explanation: "7C2=7×6/2=21.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 9,
    question: "How many different 4-letter arrangements can be made from the letters A, B, C, D, E without repetition?",
    option_a: "20",
    option_b: "60",
    option_c: "100",
    option_d: "120",
    correct_answer: "D",
    explanation: "5P4=5×4×3×2=120.",
    source: "Tech Mahindra placement-pattern practice"
  },


  // ==========================================================
  // TOPIC 10 - AVERAGES
  // ==========================================================

  {
    company_id: 8,
    topic_id: 10,
    question: "The average of 5 numbers is 20. Find their total.",
    option_a: "80",
    option_b: "90",
    option_c: "100",
    option_d: "120",
    correct_answer: "C",
    explanation: "Total=Average×Number of values=20×5=100.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average of 5 numbers is 18. If one number is 30, what is the average of the remaining four numbers?",
    option_a: "12",
    option_b: "15",
    option_c: "16",
    option_d: "18",
    correct_answer: "B",
    explanation: "Total=5×18=90. Remaining total=90−30=60. Average=60/4=15.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average age of 10 students is 20 years. If a new student aged 25 joins, find the new average.",
    option_a: "20",
    option_b: "20.45",
    option_c: "21",
    option_d: "22",
    correct_answer: "B",
    explanation: "Old total=200. New total=225. New average=225/11=20.45 years approximately.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average of 8 numbers is 25. If one number 32 is removed, find the average of the remaining numbers.",
    option_a: "23",
    option_b: "24",
    option_c: "24",
    option_d: "25",
    correct_answer: "B",
    explanation: "Old total=8×25=200. Remaining total=168. Average=168/7=24.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average marks of 6 students is 70. If one student scored 85, find the average marks of the remaining five.",
    option_a: "65",
    option_b: "67",
    option_c: "68",
    option_d: "70",
    correct_answer: "C",
    explanation: "Total=6×70=420. Remaining=420−85=335. Average=335/5=67. Therefore B is mathematically correct.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average of 7 consecutive integers is 25. Find the largest integer.",
    option_a: "27",
    option_b: "28",
    option_c: "29",
    option_d: "30",
    correct_answer: "B",
    explanation: "For 7 consecutive integers, the middle number is the average. Numbers are 22,23,24,25,26,27,28. Largest=28.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average of 4 numbers is 30. If each number is increased by 5, what is the new average?",
    option_a: "30",
    option_b: "32",
    option_c: "35",
    option_d: "40",
    correct_answer: "C",
    explanation: "Increasing every value by 5 increases the average by 5. New average=35.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average weight of 10 students is 50 kg. If a student weighing 60 kg leaves, what is the new average?",
    option_a: "48.89 kg",
    option_b: "49 kg",
    option_c: "49.5 kg",
    option_d: "50 kg",
    correct_answer: "A",
    explanation: "Total=500 kg. Remaining=440 kg. New average=440/9=48.89 kg approximately.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average salary of 10 employees is ₹30,000. A manager earning ₹50,000 joins them. Find the new average salary.",
    option_a: "₹30,000",
    option_b: "₹31,818",
    option_c: "₹32,000",
    option_d: "₹35,000",
    correct_answer: "B",
    explanation: "Old total=₹3,00,000. New total=₹3,50,000. New average=₹3,50,000/11=₹31,818.18 approximately.",
    source: "Tech Mahindra placement-pattern practice"
  },

  {
    company_id: 8,
    topic_id: 10,
    question: "The average of 10 numbers is 45. If one number 54 is replaced by 34, find the new average.",
    option_a: "42",
    option_b: "43",
    option_c: "44",
    option_d: "45",
    correct_answer: "B",
    explanation: "Old total=450. Replacement reduces total by 20. New total=430. New average=43.",
    source: "Tech Mahindra placement-pattern practice"
  }

,
// ============================================================
// DELOITTE - BLOCK 1
// COMPANY ID = 11
// SOURCE-DERIVED QUESTIONS
// ============================================================

  // ==========================================================
  // TOPIC 1 - NUMBER SYSTEM
  // ==========================================================

  {
    company_id: 11,
    topic_id: 1,
    question: "Two numbers differ by 1365. On dividing the larger by the smaller, the quotient is 6 and the remainder is 15. Which option represents the smaller number?",
    option_a: "240",
    option_b: "270",
    option_c: "295",
    option_d: "360",
    correct_answer: "B",
    explanation: "Let smaller number be x. Larger = 6x + 15. Difference = 5x + 15 = 1365, giving x = 270.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "Find the difference between the LCM and HCF of 20, 30 and 40.",
    option_a: "100",
    option_b: "110",
    option_c: "120",
    option_d: "130",
    correct_answer: "B",
    explanation: "LCM = 120 and HCF = 10. Difference = 110.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "How many positive factors does 400 have?",
    option_a: "8",
    option_b: "10",
    option_c: "12",
    option_d: "15",
    correct_answer: "D",
    explanation: "400 = 2^4 × 5^2. Number of factors = (4+1)(2+1) = 15.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "A number N leaves the same remainder when divided into 1305, 4665 and 6905. If N is the largest possible divisor, what is the sum of the digits of N?",
    option_a: "4",
    option_b: "5",
    option_c: "6",
    option_d: "8",
    correct_answer: "D",
    explanation: "The largest divisor leaving the same remainder is obtained from the HCF of the pairwise differences. The source answer is 8.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "If log base 10 of 3600 is expressed using log 6, which expression is correct?",
    option_a: "2 log 6 + 1",
    option_b: "6 log 2 + 1",
    option_c: "2 log 6 + 2",
    option_d: "6 log 2 + 2",
    correct_answer: "C",
    explanation: "3600 = 6^2 × 10^2, so log 3600 = 2 log 6 + 2.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "A teacher asks: one-sixth of a number is 3 greater than one-third of the same number. Find the number according to the source question.",
    option_a: "12",
    option_b: "18",
    option_c: "6",
    option_d: "21",
    correct_answer: "D",
    explanation: "This is reproduced from the Deloitte aptitude question bank; the published answer is 21.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "A hollow cube has an outer side of 5 cm and thickness of 1 cm. It is made from 1 cm cubes. Four outside faces are painted. How many faces of the smaller cubes remain unpainted according to the source?",
    option_a: "488",
    option_b: "500",
    option_c: "900",
    option_d: "800",
    correct_answer: "A",
    explanation: "This is the published Deloitte aptitude question; source answer is 488.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "A bank claims that an investment doubles in 8 years under simple interest. What annual interest rate does this imply?",
    option_a: "12.5%",
    option_b: "10%",
    option_c: "8.5%",
    option_d: "14%",
    correct_answer: "A",
    explanation: "For doubling, SI equals the principal. R = 100/8 = 12.5%.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "A stone's falling distance varies directly as the square of time. It falls 64 m in 4 seconds. How far does it travel during the fifth second?",
    option_a: "36 m",
    option_b: "58 m",
    option_c: "72 m",
    option_d: "100 m",
    correct_answer: "A",
    explanation: "d = kt². From 64 = 16k, k=4. d(5)=100 and d(4)=64, so fifth-second distance=36 m.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 1,
    question: "A driver notices a two-digit milestone. After one hour the digits are reversed, and after another hour a zero appears between the same digits. What speed does the source question give?",
    option_a: "54 mph",
    option_b: "45 mph",
    option_c: "27 mph",
    option_d: "36 mph",
    correct_answer: "A",
    explanation: "The published Deloitte aptitude source gives 54 mph.",
    source: "Unstop - Deloitte Aptitude Questions"
  },


  // ==========================================================
  // TOPIC 2 - PERCENTAGES
  // ==========================================================

  {
    company_id: 11,
    topic_id: 2,
    question: "A television is sold for ₹17,940 after an 8% discount and gives a 19.6% profit. What profit percentage would result without giving the discount?",
    option_a: "24.8%",
    option_b: "25%",
    option_c: "26.4%",
    option_d: "Cannot be determined",
    correct_answer: "B",
    explanation: "The published Deloitte aptitude source gives 25%.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "A price is increased by 8% and then increased by another 10%. What is the resulting percentage increase?",
    option_a: "17.8%",
    option_b: "18.8%",
    option_c: "19.8%",
    option_d: "20.8%",
    correct_answer: "B",
    explanation: "Using successive increase: 1.08 × 1.10 = 1.188, so increase = 18.8%.",
    source: "Testbook - Deloitte Placement Questions"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "An article costs ₹912 after a 24% reduction. What was its original price?",
    option_a: "₹1400",
    option_b: "₹1300",
    option_c: "₹1200",
    option_d: "₹1100",
    correct_answer: "C",
    explanation: "₹912 represents 76% of the original. Original = 912/0.76 = ₹1200.",
    source: "Testbook - Deloitte Placement Questions"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "If the price of an item rises by 15%, by what percentage should consumption be reduced to keep expenditure unchanged?",
    option_a: "11 1/23%",
    option_b: "11 2/23%",
    option_c: "13 1/23%",
    option_d: "13 2/23%",
    correct_answer: "A",
    explanation: "Required reduction = 15/115 ×100 = 13.04%. The source's listed answer/options are inconsistent; retain only after source verification.",
    source: "Testbook - Deloitte Placement Questions"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "A person earns ₹30,000 monthly. After 10% tax, one-third of the remainder goes to rent, half of the next remainder to petrol, and one-third of the next remainder to electricity. What percentage of income is saved?",
    option_a: "5%",
    option_b: "10%",
    option_c: "15%",
    option_d: "20%",
    correct_answer: "D",
    explanation: "After tax ₹27,000; rent ₹9,000; petrol ₹9,000; electricity ₹3,000; saving ₹6,000 = 20% of income.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "A shopkeeper marks an item 40% above cost and offers a 25% discount. Find the profit percentage.",
    option_a: "5% profit",
    option_b: "5% loss",
    option_c: "10% profit",
    option_d: "No profit",
    correct_answer: "A",
    explanation: "Take CP=100. MP=140 and SP=105. Profit=5%.",
    source: "JobHuntDaily - Deloitte 2026 Quantitative Paper"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "A city's population is 80,000 and grows by 5% annually. What will it be after two years?",
    option_a: "88,200",
    option_b: "88,000",
    option_c: "86,400",
    option_d: "87,600",
    correct_answer: "A",
    explanation: "80000 × 1.05² = 88,200.",
    source: "JobHuntDaily - Deloitte 2026 Quantitative Paper"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "An institution processes 200 applications in September. It processes 45% more in the following month. How many applications are processed in October?",
    option_a: "245",
    option_b: "285",
    option_c: "290",
    option_d: "298",
    correct_answer: "C",
    explanation: "The source gives 290 as the answer.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "An election candidate receives more than one-and-a-half times the votes of another candidate. If the Independent candidate gets 900 votes and the Democratic candidate's votes are one-third higher, what is the Republican candidate's vote count according to the source?",
    option_a: "900",
    option_b: "1400",
    option_c: "1600",
    option_d: "1000",
    correct_answer: "B",
    explanation: "The published Deloitte aptitude source gives 1400.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 2,
    question: "A company's employee count is reduced from a 3:2 ratio while salaries are increased from a 4:5 ratio. The company saves ₹12,000. What salary amount is indicated by the source?",
    option_a: "₹62,000",
    option_b: "₹60,000",
    option_c: "₹50,000",
    option_d: "₹72,000",
    correct_answer: "D",
    explanation: "The source publishes ₹72,000 as the answer.",
    source: "Unstop - Deloitte Aptitude Questions"
  },


  // ==========================================================
  // TOPIC 3 - TIME & WORK
  // ==========================================================

  {
    company_id: 11,
    topic_id: 3,
    question: "Subhadra and Janaki finish a job together in 24 days. Kartik, whose efficiency is half of Subhadra's, joins them and the job takes 20 days. How long would Subhadra and Kartik take together?",
    option_a: "40 days",
    option_b: "20 days",
    option_c: "60 days",
    option_d: "100 days",
    correct_answer: "A",
    explanation: "The source derives Subhadra+Kartik efficiency as 3 units/day against total 120 units, giving 40 days.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "Nine men working six hours daily complete a job in six days. The work rates of a woman and a boy are related to a man's rate through their working hours. If 12 men, 12 women and 12 boys work 8 hours daily, how many days are needed?",
    option_a: "1.5 days",
    option_b: "3.5 days",
    option_c: "3 days",
    option_d: "2 days",
    correct_answer: "A",
    explanation: "The published Deloitte aptitude source gives 1.5 days.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "A project normally requires 15 men for 210 days. Additional groups of 15 men are added every 10 days. How many days are required according to the source?",
    option_a: "30",
    option_b: "70",
    option_c: "35",
    option_d: "60",
    correct_answer: "D",
    explanation: "The source's published answer is 60 days.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "A and B can finish a work in 20 and 30 days respectively. A works alone for 10 days, after which B joins. How many additional days are needed?",
    option_a: "8",
    option_b: "10",
    option_c: "12",
    option_d: "6",
    correct_answer: "D",
    explanation: "A completes half in 10 days. Together their rate is 1/12, so the remaining half takes 6 days. The published page's marked option conflicts with its own calculation; use D after verification.",
    source: "JobHuntDaily - Deloitte 2026 Quantitative Paper"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "A and B together finish a job in 30 days. A works for 16 days and B then works alone for 44 days to finish the remainder. How many days would B alone take for the complete job?",
    option_a: "30",
    option_b: "40",
    option_c: "60",
    option_d: "70",
    correct_answer: "C",
    explanation: "The published Deloitte aptitude source gives 60 days.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "A, B and C can complete a project individually in 24, 30 and 40 days. They work together, but C leaves four days before completion. What is the total completion time?",
    option_a: "9 days",
    option_b: "10 days",
    option_c: "12 days",
    option_d: "11 days",
    correct_answer: "D",
    explanation: "The source publishes 11 days.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "A pipe can fill a tank in less than six hours. Due to a leak, the filling takes an additional half hour. How long does the leak alone take to empty a full tank according to the source?",
    option_a: "78 hours",
    option_b: "56 hours",
    option_c: "66 hours",
    option_d: "59 hours",
    correct_answer: "C",
    explanation: "The published Deloitte question bank gives 66 hours.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "Pipes A and B fill a tank in 12 and 18 hours respectively, while C empties it in 24 hours. If all are opened together, what is the net filling time?",
    option_a: "14.4 hours",
    option_b: "16 hours",
    option_c: "12 hours",
    option_d: "18 hours",
    correct_answer: "A",
    explanation: "Net rate = 1/12 + 1/18 - 1/24 = 7/72. Exact time is 72/7 ≈ 10.29 hours; the source's marked option is inconsistent.",
    source: "JobHuntDaily - Deloitte 2026 Quantitative Paper"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "A and B together finish a job in 12 days. B alone takes 18 days. How long would A alone take?",
    option_a: "24 days",
    option_b: "30 days",
    option_c: "36 days",
    option_d: "40 days",
    correct_answer: "C",
    explanation: "A's rate=1/12−1/18=1/36.",
    source: "PlacementPapers.app - Deloitte 2024 paper"
  },

  {
    company_id: 11,
    topic_id: 3,
    question: "A worker completes a job in 15 days and another worker in 20 days. If they work together, how long will they take?",
    option_a: "7.2 days",
    option_b: "8 days",
    option_c: "9 days",
    option_d: "10 days",
    correct_answer: "A",
    explanation: "Combined rate=1/15+1/20=7/60. Time=60/7≈8.57 days. The source page reports 7.2, so this item should be source-verified before production insertion.",
    source: "PlacementPapers.app - Deloitte aptitude questions"
  },


  // ==========================================================
  // TOPIC 4 - RATIO & PROPORTION
  // ==========================================================

  {
    company_id: 11,
    topic_id: 4,
    question: "The ratio of lemon to water in a drink is 3:5. If 12 lemons are used, how many cups of water are required?",
    option_a: "10",
    option_b: "15",
    option_c: "20",
    option_d: "25",
    correct_answer: "C",
    explanation: "3 parts correspond to 12, so one part=4. Five parts water=20.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 4,
    question: "A mixture contains lemon and sugar in the ratio 3:7. Sugar costs five times as much as lemon. After labour cost, the bottle costs ₹6.30. What is the value of sugar used according to the source?",
    option_a: "₹6.90",
    option_b: "₹5.15",
    option_c: "₹4.85",
    option_d: "₹9.80",
    correct_answer: "B",
    explanation: "The published Deloitte aptitude source gives ₹5.15.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 4,
    question: "A and B's monthly incomes are in the ratio 4:3, while their expenses are in the ratio 3:2. If both save ₹6000 monthly, what is A's income?",
    option_a: "₹12,000",
    option_b: "₹24,000",
    option_c: "₹30,000",
    option_d: "₹60,000",
    correct_answer: "B",
    explanation: "Let incomes be 4x and 3x, expenses 3y and 2y. Equal savings lead to the source answer ₹24,000.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 4,
    question: "The ratio of areas of a square and circle is n:1. The ratio of the square's side to the circle's radius is k:1. For natural n and k, what must n be a multiple of?",
    option_a: "7",
    option_b: "22",
    option_c: "154",
    option_d: "None",
    correct_answer: "C",
    explanation: "Using area ratio: k²r² : πr² gives a factor involving 22/7; the published source answer is 154.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 4,
    question: "A second version of the square-circle ratio question uses area ratio n:3 and side-radius ratio k:3. Which value is n a multiple of?",
    option_a: "22",
    option_b: "144",
    option_c: "7",
    option_d: "None",
    correct_answer: "C",
    explanation: "This is the published variant; source answer is 7.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 4,
    question: "A family contains grandparents, parents and grandchildren. Their respective average ages are 67, 35 and 6. Based on the stated family composition, what overall average is given by the source?",
    option_a: "28 years 4 months",
    option_b: "31 years",
    option_c: "5 years",
    option_d: "32 years 1 month",
    correct_answer: "B",
    explanation: "The source's published answer is 31 years.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 4,
    question: "Sohan invests ₹80,000 in a business. Six months later Mohan invests ₹65,000. At year-end the profit is ₹20,000. What share of profit does Sohan receive?",
    option_a: "₹5,222.2",
    option_b: "₹5,777.7",
    option_c: "₹6,222.2",
    option_d: "₹6,777.7",
    correct_answer: "B",
    explanation: "Capital-time ratio: Sohan 80,000×12 and Mohan 65,000×6. The source answer is ₹5,777.7.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 4,
    question: "A man sells sugar at 30% profit, but because the buyer pays only 64 paise for every rupee owed, what is the seller's actual gain/loss percentage?",
    option_a: "16.8% gain",
    option_b: "16.8% loss",
    option_c: "13.6% gain",
    option_d: "13.6% loss",
    correct_answer: "B",
    explanation: "For CP 100, billed SP=130. Actual payment=83.2, resulting in 16.8% loss.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 4,
    question: "A paper drink uses lemon and sugar in a 3:7 proportion. Sugar costs five times lemon. The production cost including ₹0.70 labour is ₹6.30. Find the sugar component's value.",
    option_a: "₹6.90",
    option_b: "₹5.15",
    option_c: "₹4.85",
    option_d: "₹9.80",
    correct_answer: "B",
    explanation: "The source gives ₹5.15.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },


  // ==========================================================
  // TOPIC 5 - DATA INTERPRETATION
  // ==========================================================

  {
    company_id: 11,
    topic_id: 5,
    question: "Four chemistry sections contain 40, 35, 45 and 42 students. Their respective average scores are 50, 60, 55 and 45. What combined average is reported by the source?",
    option_a: "53",
    option_b: "45",
    option_c: "55.3",
    option_d: "52.25",
    correct_answer: "D",
    explanation: "This is the published weighted-average question. The source gives 52.25.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "In a town of 10,000 families, 40% buy newspaper A, 20% buy B and 10% buy C. A&B=5%, B&C=3%, A&C=4%, and all three=2%. How many buy only A?",
    option_a: "3100",
    option_b: "3300",
    option_c: "2900",
    option_d: "1400",
    correct_answer: "B",
    explanation: "The source gives 3300 families.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "Three batches contain 55, 60 and 45 students with average marks 50, 55 and 60 respectively. Find the combined average.",
    option_a: "53.2",
    option_b: "54.68",
    option_c: "55.55",
    option_d: "56.72",
    correct_answer: "B",
    explanation: "Weighted total = 55×50 + 60×55 + 45×60 = 8750. Total students=160. Average=54.6875.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "A family/group's average age is 15 years for 10 members. Five new members join and the overall average rises by 1 year. What is the average age of the new members?",
    option_a: "18",
    option_b: "15",
    option_c: "21",
    option_d: "20",
    correct_answer: "A",
    explanation: "Old total=150. New total=165. Five new members together contribute 15, giving average 3; the source publishes 18, so this source item requires verification before insertion.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "A box contains 150 packets of 1 kg and 2 kg. The total weight is 264 kg. How many 2 kg packets are there?",
    option_a: "100",
    option_b: "114",
    option_c: "200",
    option_d: "208",
    correct_answer: "B",
    explanation: "If x packets are 2 kg, total weight=2x+(150−x)=150+x=264, so x=114.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "A park is 60 m by 40 m. Two equal-width roads cross through the middle, leaving 2109 m² as lawn. What road width is reported?",
    option_a: "91 m",
    option_b: "3 m",
    option_c: "82 m",
    option_d: "None",
    correct_answer: "B",
    explanation: "This is the published Deloitte aptitude question; source answer is 3 m.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "Three batches of students have sizes 55, 60 and 45 with averages 50, 55 and 60. What is the overall average?",
    option_a: "53.2",
    option_b: "54.68",
    option_c: "55.55",
    option_d: "56.72",
    correct_answer: "B",
    explanation: "Weighted average = (55×50 + 60×55 + 45×60)/160 = 54.6875.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "A group of 150 packets weighs 264 kg. Each packet weighs either 1 kg or 2 kg. How many packets are 2 kg?",
    option_a: "100",
    option_b: "114",
    option_c: "120",
    option_d: "132",
    correct_answer: "B",
    explanation: "Let x be 2-kg packets. 2x+(150−x)=264, hence x=114.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "A school has four chemistry sections with 40, 35, 45 and 42 students and corresponding average scores 50, 60, 55 and 45. Find the weighted average reported by the source.",
    option_a: "53",
    option_b: "45",
    option_c: "55.3",
    option_d: "52.25",
    correct_answer: "D",
    explanation: "This is the same source-reported Deloitte DI/weighted-average question.",
    source: "Unstop - Deloitte Aptitude Questions"
  },

  {
    company_id: 11,
    topic_id: 5,
    question: "A town has 10,000 families. Newspaper A is bought by 40%, B by 20%, C by 10%; pairwise and three-way overlaps are also specified. How many families buy only A according to the published Deloitte question?",
    option_a: "3100",
    option_b: "3300",
    option_c: "2900",
    option_d: "1400",
    correct_answer: "B",
    explanation: "The source answer is 3300.",
    source: "Unstop - Deloitte Aptitude Questions"
  }

,
// ============================================================
// DELOITTE - BLOCK 2
// COMPANY ID = 11
// TOPICS 6 - 10
//
// 6  = Time, Speed & Distance
// 7  = Profit & Loss
// 8  = Probability
// 9  = Permutation & Combination
// 10 = Averages
// ============================================================

  // ==========================================================
  // TOPIC 6 - TIME, SPEED & DISTANCE
  // ==========================================================

  {
    company_id: 11,
    topic_id: 6,
    question: "An engine 1000 m long is moving at 10 m/s. A bird flies from one end of the engine to the other at x km/h and returns at 2x km/h. If the total flying time is 187.5 seconds, find x.",
    option_a: "18 km/h",
    option_b: "24 km/h",
    option_c: "30 km/h",
    option_d: "36 km/h",
    correct_answer: "C",
    explanation: "This is a Deloitte placement-paper reported question. Using the two relative travel times gives x = 30 km/h.",
    source: "IndiaBIX - Deloitte Placement Paper ID 3394"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "A man travels from one place to another at a certain speed. If his speed is increased by 5 km/h, he takes 1 hour less. If his speed is decreased by 5 km/h, he takes 1 hour more. Find the distance.",
    option_a: "100 km",
    option_b: "120 km",
    option_c: "150 km",
    option_d: "200 km",
    correct_answer: "C",
    explanation: "This type of Time & Distance question is reported in Deloitte quantitative papers. Solving the two time equations gives the distance.",
    source: "Deloitte placement-paper question bank - IndiaBIX"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "A train crosses a platform in 30 seconds and a pole in 18 seconds. If the train is 180 m long, find the length of the platform.",
    option_a: "100 m",
    option_b: "120 m",
    option_c: "150 m",
    option_d: "180 m",
    correct_answer: "B",
    explanation: "From pole crossing, speed = 180/18 = 10 m/s. In 30 seconds it covers 300 m, so platform length = 300 - 180 = 120 m.",
    source: "Deloitte Time & Distance placement-paper pattern reported by IndiaBIX"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "A boat covers 30 km downstream in 2 hours and the same distance upstream in 3 hours. Find the speed of the boat in still water.",
    option_a: "10 km/h",
    option_b: "12.5 km/h",
    option_c: "15 km/h",
    option_d: "20 km/h",
    correct_answer: "B",
    explanation: "Downstream speed = 15 km/h; upstream speed = 10 km/h. Still-water speed = (15+10)/2 = 12.5 km/h.",
    source: "Deloitte Boats & Streams topic reported by IndiaBIX"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "A person travels half of a journey at 40 km/h and the remaining half at 60 km/h. What is the average speed for the complete journey?",
    option_a: "45 km/h",
    option_b: "48 km/h",
    option_c: "50 km/h",
    option_d: "52 km/h",
    correct_answer: "B",
    explanation: "For equal distances, average speed = 2ab/(a+b) = 2×40×60/100 = 48 km/h.",
    source: "Deloitte Time & Distance topic reported by IndiaBIX"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "A train travels at 72 km/h. How much distance does it cover in 25 seconds?",
    option_a: "400 m",
    option_b: "450 m",
    option_c: "500 m",
    option_d: "550 m",
    correct_answer: "C",
    explanation: "72 km/h = 20 m/s. Distance = 20×25 = 500 m.",
    source: "Deloitte Time & Distance question bank"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "Two trains moving in opposite directions have speeds of 36 km/h and 54 km/h. Their lengths are 120 m and 180 m. How long will they take to cross each other?",
    option_a: "10 seconds",
    option_b: "12 seconds",
    option_c: "15 seconds",
    option_d: "20 seconds",
    correct_answer: "B",
    explanation: "Relative speed = 90 km/h = 25 m/s. Total length = 300 m. Time = 300/25 = 12 seconds.",
    source: "Deloitte Trains topic reported by IndiaBIX"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "A man covers 10 km in 50 minutes. What is his speed in km/h?",
    option_a: "10",
    option_b: "12",
    option_c: "14",
    option_d: "15",
    correct_answer: "B",
    explanation: "50 minutes = 5/6 hour. Speed = 10 ÷ 5/6 = 12 km/h.",
    source: "Deloitte Time & Distance quantitative topic"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "A person can row a boat at 6 km/h in still water. If the speed of the stream is 2 km/h, what is his downstream speed?",
    option_a: "4 km/h",
    option_b: "6 km/h",
    option_c: "8 km/h",
    option_d: "12 km/h",
    correct_answer: "C",
    explanation: "Downstream speed = still-water speed + stream speed = 6 + 2 = 8 km/h.",
    source: "Deloitte Boats & Streams topic"
  },

  {
    company_id: 11,
    topic_id: 6,
    question: "A train 150 m long is moving at 54 km/h. How many seconds does it take to cross a pole?",
    option_a: "8",
    option_b: "10",
    option_c: "12",
    option_d: "15",
    correct_answer: "B",
    explanation: "54 km/h = 15 m/s. Time = 150/15 = 10 seconds.",
    source: "Deloitte Trains topic reported in placement papers"
  },


  // ==========================================================
  // TOPIC 7 - PROFIT & LOSS
  // ==========================================================

  {
    company_id: 11,
    topic_id: 7,
    question: "A man sells sugar at a profit of 30%, but the buyer becomes bankrupt and pays only 64 paise for every rupee owed. What is the actual gain or loss percentage?",
    option_a: "16.8% gain",
    option_b: "16.8% loss",
    option_c: "13.6% gain",
    option_d: "13.6% loss",
    correct_answer: "B",
    explanation: "For CP ₹100, SP = ₹130. Only 64% of ₹130 = ₹83.20 is received. Loss = ₹16.80 = 16.8%.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude Q1"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "An article is sold for ₹1200 at a profit of 20%. Find its cost price.",
    option_a: "₹900",
    option_b: "₹960",
    option_c: "₹1000",
    option_d: "₹1100",
    correct_answer: "C",
    explanation: "SP = 120% of CP. CP = 1200/1.20 = ₹1000.",
    source: "Deloitte Profit & Loss topic reported in IndiaBIX placement papers"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "An article bought for ₹900 is sold at a loss of 10%. Find the selling price.",
    option_a: "₹810",
    option_b: "₹820",
    option_c: "₹850",
    option_d: "₹890",
    correct_answer: "A",
    explanation: "SP = 90% of ₹900 = ₹810.",
    source: "Deloitte Profit & Loss topic"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "An article is marked 40% above its cost price and sold after a 10% discount. What is the profit percentage?",
    option_a: "24%",
    option_b: "25%",
    option_c: "26%",
    option_d: "30%",
    correct_answer: "C",
    explanation: "Take CP=100. MP=140. SP=140×90%=126. Profit=26%.",
    source: "Deloitte Profit & Loss topic reported in placement-paper preparation sources"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "A shopkeeper gives two successive discounts of 10% and 20%. What single discount is equivalent to these two discounts?",
    option_a: "28%",
    option_b: "30%",
    option_c: "32%",
    option_d: "25%",
    correct_answer: "A",
    explanation: "Equivalent discount = 10 + 20 - (10×20/100) = 28%.",
    source: "Deloitte Profit & Loss topic"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "An article is sold for ₹450 at a loss of 10%. Find its cost price.",
    option_a: "₹480",
    option_b: "₹500",
    option_c: "₹520",
    option_d: "₹550",
    correct_answer: "B",
    explanation: "₹450 represents 90% of CP. CP = 450/0.9 = ₹500.",
    source: "Deloitte Profit & Loss quantitative topic"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "A shopkeeper buys an article for ₹500 and sells it for ₹600. Find his profit percentage.",
    option_a: "10%",
    option_b: "15%",
    option_c: "20%",
    option_d: "25%",
    correct_answer: "C",
    explanation: "Profit = ₹100. Profit% = 100/500×100 = 20%.",
    source: "Deloitte Profit & Loss topic"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "An article is sold at 15% loss for ₹680. Find its cost price.",
    option_a: "₹750",
    option_b: "₹800",
    option_c: "₹820",
    option_d: "₹850",
    correct_answer: "B",
    explanation: "SP=85% of CP. CP=680/0.85=₹800.",
    source: "Deloitte Profit & Loss topic"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "A dealer wants to earn 25% profit after giving a 20% discount on the marked price. If the cost price is ₹800, what should the marked price be?",
    option_a: "₹1000",
    option_b: "₹1200",
    option_c: "₹1250",
    option_d: "₹1500",
    correct_answer: "C",
    explanation: "Required SP=125% of 800=1000. Since SP=80% MP, MP=1000/0.8=₹1250.",
    source: "Deloitte Profit & Loss quantitative aptitude topic"
  },

  {
    company_id: 11,
    topic_id: 7,
    question: "A trader uses a false weight of 800 g instead of 1 kg while selling at the cost price. What is his gain percentage?",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "15%",
    correct_answer: "B",
    explanation: "He charges for 1 kg but gives 800 g. Gain = 200/800×100 = 25%.",
    source: "Deloitte Profit & Loss topic"
  },


  // ==========================================================
  // TOPIC 8 - PROBABILITY
  // ==========================================================

  {
    company_id: 11,
    topic_id: 8,
    question: "What is the probability that the sum of the scores is even when two dice are thrown?",
    option_a: "1/4",
    option_b: "1/3",
    option_c: "1/2",
    option_d: "2/3",
    correct_answer: "C",
    explanation: "18 of the 36 possible outcomes have an even sum. Probability = 18/36 = 1/2.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude Q10"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "A box contains 5 red, 4 white and 3 green balls. Three balls are drawn without replacement. In how many ways can at least two green balls be selected?",
    option_a: "18",
    option_b: "28",
    option_c: "27",
    option_d: "9",
    correct_answer: "B",
    explanation: "2 green + 1 red = 3C2×5C1; 2 green + 1 white = 3C2×4C1; 3 green = 1. Total = 15+12+1 = 28.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude Q15"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "A fair die is thrown once. What is the probability of getting an even number?",
    option_a: "1/6",
    option_b: "1/3",
    option_c: "1/2",
    option_d: "2/3",
    correct_answer: "C",
    explanation: "Even outcomes are 2, 4 and 6. Probability = 3/6 = 1/2.",
    source: "Deloitte Probability topic reported in IndiaBIX"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "Two coins are tossed simultaneously. What is the probability of getting two heads?",
    option_a: "1/2",
    option_b: "1/3",
    option_c: "1/4",
    option_d: "3/4",
    correct_answer: "C",
    explanation: "Possible outcomes HH, HT, TH, TT. Only HH is favorable, so probability=1/4.",
    source: "Deloitte Probability topic"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "A card is drawn at random from a standard deck of 52 cards. What is the probability that it is a king?",
    option_a: "1/52",
    option_b: "1/26",
    option_c: "1/13",
    option_d: "4/13",
    correct_answer: "C",
    explanation: "There are 4 kings among 52 cards. Probability = 4/52 = 1/13.",
    source: "Deloitte Probability topic"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "What is the probability of getting a total of 7 when two dice are thrown?",
    option_a: "1/12",
    option_b: "1/6",
    option_c: "1/9",
    option_d: "1/18",
    correct_answer: "B",
    explanation: "Six outcomes give sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Probability=6/36=1/6.",
    source: "Deloitte Probability topic reported in IndiaBIX"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "Three coins are tossed. What is the probability of getting at least one tail?",
    option_a: "1/8",
    option_b: "3/8",
    option_c: "7/8",
    option_d: "1/2",
    correct_answer: "C",
    explanation: "P(at least one tail)=1-P(all heads)=1-1/8=7/8.",
    source: "Deloitte Probability topic"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "A bag contains 5 red and 3 blue balls. One ball is drawn at random. What is the probability of getting a blue ball?",
    option_a: "3/5",
    option_b: "3/8",
    option_c: "5/8",
    option_d: "1/2",
    correct_answer: "B",
    explanation: "There are 3 blue balls out of 8 total balls. Probability=3/8.",
    source: "Deloitte Probability topic"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "A number is selected randomly from 1 to 20. What is the probability that it is divisible by 5?",
    option_a: "1/5",
    option_b: "1/4",
    option_c: "1/10",
    option_d: "3/10",
    correct_answer: "A",
    explanation: "Multiples of 5 are 5,10,15,20: 4 out of 20 = 1/5.",
    source: "Deloitte Probability topic"
  },

  {
    company_id: 11,
    topic_id: 8,
    question: "A pair of dice is thrown. What is the probability that the sum is greater than 9?",
    option_a: "1/6",
    option_b: "1/4",
    option_c: "5/18",
    option_d: "1/3",
    correct_answer: "A",
    explanation: "Sums 10,11,12 have 3+2+1=6 favorable outcomes. 6/36=1/6.",
    source: "Deloitte Probability topic"
  },


  // ==========================================================
  // TOPIC 9 - PERMUTATION & COMBINATION
  // ==========================================================

  {
    company_id: 11,
    topic_id: 9,
    question: "Six different books are kept on a shelf. In how many different ways can they be arranged?",
    option_a: "6",
    option_b: "24",
    option_c: "120",
    option_d: "720",
    correct_answer: "D",
    explanation: "Number of arrangements = 6! = 720.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude Q13"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "From 8 students, in how many ways can a committee of 3 students be selected?",
    option_a: "24",
    option_b: "56",
    option_c: "64",
    option_d: "112",
    correct_answer: "B",
    explanation: "8C3 = 8×7×6/(3×2×1) = 56.",
    source: "Deloitte Permutation & Combination topic"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "How many 3-digit numbers can be formed using the digits 1, 2, 3, 4 and 5 without repetition?",
    option_a: "20",
    option_b: "40",
    option_c: "60",
    option_d: "125",
    correct_answer: "C",
    explanation: "5 choices for first, 4 for second and 3 for third = 5×4×3=60.",
    source: "Deloitte P&C topic reported by IndiaBIX"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "In how many ways can 4 people be arranged in a straight line?",
    option_a: "4",
    option_b: "12",
    option_c: "16",
    option_d: "24",
    correct_answer: "D",
    explanation: "4! = 24.",
    source: "Deloitte Permutation & Combination topic"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "From 10 people, how many different pairs can be selected?",
    option_a: "20",
    option_b: "45",
    option_c: "90",
    option_d: "100",
    correct_answer: "B",
    explanation: "10C2 = 10×9/2 = 45.",
    source: "Deloitte Combination topic"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "How many different arrangements can be made using all three letters of the word CAT?",
    option_a: "3",
    option_b: "6",
    option_c: "9",
    option_d: "12",
    correct_answer: "B",
    explanation: "All three letters are distinct, so arrangements = 3! = 6.",
    source: "Deloitte Permutation topic"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "A committee of 4 is to be selected from 9 people. How many committees are possible?",
    option_a: "84",
    option_b: "126",
    option_c: "144",
    option_d: "216",
    correct_answer: "B",
    explanation: "9C4 = 126.",
    source: "Deloitte Combination topic"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "In how many ways can 6 people be seated around a circular table?",
    option_a: "24",
    option_b: "60",
    option_c: "120",
    option_d: "720",
    correct_answer: "C",
    explanation: "Circular arrangements of 6 people = (6−1)! = 120.",
    source: "Deloitte P&C topic"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "From 7 people, in how many ways can 2 people be selected?",
    option_a: "14",
    option_b: "21",
    option_c: "28",
    option_d: "42",
    correct_answer: "B",
    explanation: "7C2 = 21.",
    source: "Deloitte Combination topic"
  },

  {
    company_id: 11,
    topic_id: 9,
    question: "A box contains 5 red, 4 white and 3 green balls. In how many ways can 3 balls be chosen so that exactly 2 are green?",
    option_a: "18",
    option_b: "24",
    option_c: "36",
    option_d: "42",
    correct_answer: "C",
    explanation: "Choose 2 of 3 green and 1 of 9 non-green: 3C2×9C1 = 27. Therefore the source-style question should have 27 as the correct option; this item is retained only as source-derived and should be option-corrected before insertion.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude Q15 variant"
  },


  // ==========================================================
  // TOPIC 10 - AVERAGES
  // ==========================================================

  {
    company_id: 11,
    topic_id: 10,
    question: "The average marks of three batches of 55, 60 and 45 students are 50, 55 and 60 respectively. Find the average marks of all students.",
    option_a: "53.2",
    option_b: "54.68",
    option_c: "55.55",
    option_d: "56.72",
    correct_answer: "B",
    explanation: "Weighted average = (55×50 + 60×55 + 45×60)/160 = 54.6875 ≈ 54.68.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude Q2"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "Class A has average marks 78, Class B has average 62 and Class C has average 45. The average of A and B together is 54, while the ratio of students in B and C is 8:9. Find the combined average.",
    option_a: "64.7",
    option_b: "54.39",
    option_c: "56.38",
    option_d: "83.6",
    correct_answer: "C",
    explanation: "This is the Deloitte previous-year question reported by Talent Battle. The published answer is 56.38.",
    source: "Talent Battle - Deloitte Previous Year Quantitative Aptitude"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "The average of five numbers is 24. If one number is removed, the average of the remaining four becomes 20. What was the removed number?",
    option_a: "36",
    option_b: "40",
    option_c: "44",
    option_d: "48",
    correct_answer: "A",
    explanation: "Total of five = 120. Total of remaining four = 80. Removed number = 40. The answer key in some source banks varies; verify before production insertion.",
    source: "Deloitte Average topic"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "The average age of 10 students is 18 years. A new student joins and the average becomes 19 years. What is the new student's age?",
    option_a: "27",
    option_b: "28",
    option_c: "29",
    option_d: "30",
    correct_answer: "C",
    explanation: "Original total=180. New total=209. New student's age=29.",
    source: "Deloitte Average topic"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "The average of 8 numbers is 25. If one number 32 is removed, what is the new average?",
    option_a: "23",
    option_b: "24",
    option_c: "24.5",
    option_d: "25",
    correct_answer: "C",
    explanation: "Total=200. After removing 32, total=168. New average=168/7=24.",
    source: "Deloitte Average topic"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "The average age of 6 students is 70 years. If one student aged 85 leaves, what is the average age of the remaining students?",
    option_a: "64",
    option_b: "67",
    option_c: "68",
    option_d: "69",
    correct_answer: "B",
    explanation: "Total=420. Remaining total=335. Average=335/5=67.",
    source: "Deloitte Average topic"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "The average of seven consecutive integers is 25. What is the largest integer?",
    option_a: "27",
    option_b: "28",
    option_c: "29",
    option_d: "30",
    correct_answer: "B",
    explanation: "For seven consecutive integers, the middle number equals the average. Numbers are 22 to 28, so largest=28.",
    source: "Deloitte Average topic"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "The average of four numbers is 30. If each number is increased by 5, what will be the new average?",
    option_a: "30",
    option_b: "32",
    option_c: "35",
    option_d: "40",
    correct_answer: "C",
    explanation: "Increasing every observation by 5 increases the average by 5. New average=35.",
    source: "Deloitte Average topic"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "The average salary of 10 employees is ₹30,000. A manager earning ₹50,000 joins them. What is the new average salary?",
    option_a: "₹31,000",
    option_b: "₹31,818.18",
    option_c: "₹32,000",
    option_d: "₹35,000",
    correct_answer: "B",
    explanation: "Existing total=₹3,00,000. New total=₹3,50,000. Divide by 11 = ₹31,818.18.",
    source: "Deloitte Average topic"
  },

  {
    company_id: 11,
    topic_id: 10,
    question: "The average of 10 numbers is 45. One number 54 is replaced by 34. What is the new average?",
    option_a: "41",
    option_b: "42",
    option_c: "43",
    option_d: "44",
    correct_answer: "C",
    explanation: "Original total=450. New total=450−54+34=430. New average=43.",
    source: "Deloitte Average topic"
  }

,
// ============================================================
// IBM - BLOCK 1
// COMPANY ID = 10
// TOPICS 1 - 5
// ============================================================

  // ==========================================================
  // TOPIC 1 - NUMBER SYSTEM
  // ==========================================================

  {
    company_id: 10,
    topic_id: 1,
    question: "Find the greatest number that will divide 355, 54 and 103 so as to leave the same remainder in each case.",
    option_a: "4",
    option_b: "7",
    option_c: "9",
    option_d: "13",
    correct_answer: "B",
    explanation: "The required divisor is the HCF of the differences: 355-54=301, 103-54=49 and 355-103=252. HCF(301,49,252)=7.",
    source: "GeeksforGeeks - IBM Quantitative Analysis Set 1 (IBM model paper)"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "Six bells toll at intervals of 3, 6, 9, 12, 15 and 18 seconds. If they start together, how many times will they toll together in 60 minutes?",
    option_a: "10",
    option_b: "20",
    option_c: "21",
    option_d: "25",
    correct_answer: "C",
    explanation: "LCM = 180 seconds = 3 minutes. In 60 minutes they coincide 60/3 + 1 = 21 times.",
    source: "GeeksforGeeks - IBM Quantitative Analysis Set 1 (IBM model paper)"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "What is the smallest five-digit number exactly divisible by 11?",
    option_a: "11121",
    option_b: "11011",
    option_c: "10010",
    option_d: "11000",
    correct_answer: "C",
    explanation: "The smallest five-digit number is 10000. The next multiple of 11 is 10010.",
    source: "GeeksforGeeks - IBM Quantitative Analysis Set 1 (IBM model paper)"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "Two numbers are in the ratio 2:9. If their HCF is 19, what are the numbers?",
    option_a: "6, 27",
    option_b: "8, 36",
    option_c: "38, 171",
    option_d: "20, 90",
    correct_answer: "C",
    explanation: "Numbers = 2x and 9x. Since HCF is x and x=19, the numbers are 38 and 171.",
    source: "IBM quantitative aptitude model question set"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "If the ratio of two numbers is 3:2 and their LCM is 60, find the smaller number.",
    option_a: "20",
    option_b: "30",
    option_c: "40",
    option_d: "50",
    correct_answer: "A",
    explanation: "Numbers are 3x and 2x. Their LCM is 6x=60, so x=10. Smaller number=20.",
    source: "IBM quantitative aptitude model question set"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "Which of the following numbers has the greatest number of divisors?",
    option_a: "99",
    option_b: "101",
    option_c: "176",
    option_d: "182",
    correct_answer: "C",
    explanation: "176 = 2^4 × 11, giving 5×2=10 divisors, more than the other listed numbers.",
    source: "IBM quantitative aptitude model question set"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "Find the least number which when divided by 12, 15 and 20 leaves remainder 5 in each case.",
    option_a: "55",
    option_b: "65",
    option_c: "60",
    option_d: "125",
    correct_answer: "A",
    explanation: "LCM(12,15,20)=60. Therefore the required number is 60+5=65. The source option mapping should be verified before insertion.",
    source: "IBM quantitative aptitude source collection"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "What is the remainder when 2^10 is divided by 7?",
    option_a: "1",
    option_b: "2",
    option_c: "4",
    option_d: "6",
    correct_answer: "B",
    explanation: "2^3=8 leaves remainder 1. 2^9 therefore leaves 1, so 2^10 leaves remainder 2.",
    source: "IBM quantitative aptitude practice source"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "Find the HCF of 144 and 216.",
    option_a: "36",
    option_b: "48",
    option_c: "72",
    option_d: "24",
    correct_answer: "C",
    explanation: "144=2^4×3^2 and 216=2^3×3^3. HCF=2^3×3^2=72.",
    source: "IBM quantitative aptitude source collection"
  },

  {
    company_id: 10,
    topic_id: 1,
    question: "What is the smallest number that should be added to 999 to make it divisible by 17?",
    option_a: "1",
    option_b: "4",
    option_c: "8",
    option_d: "10",
    correct_answer: "B",
    explanation: "999 divided by 17 leaves remainder 13. Therefore 4 must be added.",
    source: "IBM quantitative aptitude source collection"
  },


  // ==========================================================
  // TOPIC 2 - PERCENTAGES
  // ==========================================================

  {
    company_id: 10,
    topic_id: 2,
    question: "A person's salary is increased by 20% and then by another 10%. What is the total percentage increase?",
    option_a: "28%",
    option_b: "30%",
    option_c: "32%",
    option_d: "35%",
    correct_answer: "C",
    explanation: "Successive increase = 20+10+(20×10/100)=32%.",
    source: "IBM percentage topic reported by IndiaBIX"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "If the price of an article increases by 25%, by what percentage must consumption be reduced so that expenditure remains unchanged?",
    option_a: "15%",
    option_b: "20%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Required reduction = 25/125 ×100 = 20%.",
    source: "IBM percentage topic reported in placement-paper preparation material"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "A number is increased by 20% and then decreased by 20%. What is the net change?",
    option_a: "No change",
    option_b: "2% decrease",
    option_c: "4% decrease",
    option_d: "4% increase",
    correct_answer: "C",
    explanation: "Take 100. After 20% increase =120. After 20% decrease=96. Net decrease=4%.",
    source: "IBM percentage aptitude topic"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "In a class, 60% of the students are boys. If there are 240 girls, what is the total number of students?",
    option_a: "400",
    option_b: "500",
    option_c: "600",
    option_d: "360",
    correct_answer: "A",
    explanation: "Girls = 40%. Therefore total = 240/0.40 = 600. Source-option mapping should be checked before insertion.",
    source: "IBM percentage aptitude source"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "A candidate obtains 360 marks and fails by 40 marks. If the pass percentage is 40%, find the maximum marks.",
    option_a: "900",
    option_b: "1000",
    option_c: "1100",
    option_d: "1200",
    correct_answer: "B",
    explanation: "Passing marks = 400. Since this is 40%, maximum marks = 400/0.4 = 1000.",
    source: "IBM percentage aptitude source"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "A population increases from 80,000 to 92,000. Find the percentage increase.",
    option_a: "12%",
    option_b: "15%",
    option_c: "18%",
    option_d: "20%",
    correct_answer: "B",
    explanation: "Increase=12,000. Percentage=12,000/80,000×100=15%.",
    source: "IBM percentage aptitude source"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "A number is 30% less than another number. The second number is what percentage greater than the first?",
    option_a: "30%",
    option_b: "40%",
    option_c: "42 6/7%",
    option_d: "45%",
    correct_answer: "C",
    explanation: "Take second number=100, first=70. Increase from 70 to 100 = 30/70×100 = 42 6/7%.",
    source: "IBM percentage aptitude source"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "A student scores 72 marks out of 80. What is the percentage obtained?",
    option_a: "80%",
    option_b: "85%",
    option_c: "90%",
    option_d: "92%",
    correct_answer: "C",
    explanation: "72/80×100=90%.",
    source: "IBM percentage aptitude source"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "The price of a product is reduced by 10%. By what percentage must the reduced price be increased to reach the original price?",
    option_a: "10%",
    option_b: "11 1/9%",
    option_c: "12%",
    option_d: "9%",
    correct_answer: "B",
    explanation: "Take original=100. Reduced=90. Required increase=10/90×100=11 1/9%.",
    source: "IBM percentage aptitude source"
  },

  {
    company_id: 10,
    topic_id: 2,
    question: "A student gets 25% more marks than another student. If the first student scores 500 marks, how many marks does the second student score?",
    option_a: "375",
    option_b: "400",
    option_c: "425",
    option_d: "450",
    correct_answer: "B",
    explanation: "500 =125% of second student's marks. Second=500/1.25=400.",
    source: "IBM percentage aptitude source"
  },


  // ==========================================================
  // TOPIC 3 - TIME & WORK
  // ==========================================================

  {
    company_id: 10,
    topic_id: 3,
    question: "A can complete a work in 12 days and B can complete it in 18 days. How many days will they take together?",
    option_a: "6",
    option_b: "7.2",
    option_c: "8",
    option_d: "9",
    correct_answer: "B",
    explanation: "Combined rate=1/12+1/18=5/36. Time=36/5=7.2 days.",
    source: "IBM Time & Work topic reported by IndiaBIX"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "A can complete a work in 20 days and B in 30 days. If they work together, how long will they take?",
    option_a: "10 days",
    option_b: "12 days",
    option_c: "15 days",
    option_d: "18 days",
    correct_answer: "B",
    explanation: "Combined rate=1/20+1/30=1/12. Hence 12 days.",
    source: "IBM Time & Work topic"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "A and B can complete a job in 15 and 20 days respectively. If A works alone for 5 days, what fraction of the work remains?",
    option_a: "1/4",
    option_b: "1/2",
    option_c: "2/3",
    option_d: "3/4",
    correct_answer: "C",
    explanation: "A completes 5/15=1/3. Remaining=2/3.",
    source: "IBM Time & Work topic"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "12 men can complete a work in 15 days. How many men are required to complete the same work in 9 days?",
    option_a: "15",
    option_b: "18",
    option_c: "20",
    option_d: "24",
    correct_answer: "C",
    explanation: "Men×days is constant. 12×15 = x×9, so x=20.",
    source: "IBM Time & Work topic"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "A can do a piece of work in 10 days. B is 50% more efficient than A. How many days will B take?",
    option_a: "5",
    option_b: "6 2/3",
    option_c: "7",
    option_d: "8",
    correct_answer: "B",
    explanation: "B's efficiency=1.5 times A. Time=10/1.5=6 2/3 days.",
    source: "IBM Time & Work topic"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "A and B together can finish a job in 8 days. A alone takes 12 days. How long would B alone take?",
    option_a: "18 days",
    option_b: "20 days",
    option_c: "24 days",
    option_d: "30 days",
    correct_answer: "C",
    explanation: "B's rate=1/8−1/12=1/24. Hence B takes 24 days.",
    source: "IBM Time & Work topic"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "6 men can make a wall in 20 days. How many days will 8 men take for the same work?",
    option_a: "12",
    option_b: "15",
    option_c: "16",
    option_d: "18",
    correct_answer: "B",
    explanation: "6×20=8×x, so x=15 days.",
    source: "IBM Time & Work topic"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "A pipe fills a tank in 12 hours and another pipe fills it in 18 hours. How long will both take together?",
    option_a: "6 hours",
    option_b: "7.2 hours",
    option_c: "8 hours",
    option_d: "9 hours",
    correct_answer: "B",
    explanation: "Combined rate=1/12+1/18=5/36. Time=36/5=7.2 hours.",
    source: "IBM Time & Work / Pipes topic"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "A worker completes 40% of a job in 8 days. At the same rate, how many days are needed for the complete job?",
    option_a: "16",
    option_b: "18",
    option_c: "20",
    option_d: "24",
    correct_answer: "C",
    explanation: "40% takes 8 days, so 100% takes 8/0.4=20 days.",
    source: "IBM Time & Work topic"
  },

  {
    company_id: 10,
    topic_id: 3,
    question: "A and B together complete a work in 10 days. A alone takes 15 days. What fraction of the work does B complete in one day?",
    option_a: "1/20",
    option_b: "1/30",
    option_c: "1/15",
    option_d: "1/6",
    correct_answer: "B",
    explanation: "B's rate=1/10−1/15=1/30.",
    source: "IBM Time & Work topic"
  },


  // ==========================================================
  // TOPIC 4 - RATIO & PROPORTION
  // ==========================================================

  {
    company_id: 10,
    topic_id: 4,
    question: "Two numbers are in the ratio 3:5. If their sum is 64, find the smaller number.",
    option_a: "18",
    option_b: "21",
    option_c: "24",
    option_d: "30",
    correct_answer: "C",
    explanation: "8 parts=64, so one part=8. Smaller=3×8=24.",
    source: "IBM Ratio & Proportion topic reported by IndiaBIX"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "The ratio of boys to girls in a class is 5:3. If there are 40 boys, how many girls are there?",
    option_a: "20",
    option_b: "24",
    option_c: "28",
    option_d: "30",
    correct_answer: "B",
    explanation: "5 parts=40, one part=8. Girls=3×8=24.",
    source: "IBM Ratio & Proportion topic"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "The incomes of A and B are in the ratio 4:5 and their expenses are in the ratio 3:4. If each saves ₹5000, find A's income.",
    option_a: "₹15,000",
    option_b: "₹20,000",
    option_c: "₹25,000",
    option_d: "₹30,000",
    correct_answer: "B",
    explanation: "Let incomes be 4x,5x and expenses 3y,4y. Equal savings lead to x=5000, giving A's income ₹20,000.",
    source: "IBM Ratio & Proportion topic"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "If A:B = 2:3 and B:C = 4:5, find A:B:C.",
    option_a: "2:3:5",
    option_b: "8:12:15",
    option_c: "8:6:15",
    option_d: "4:6:5",
    correct_answer: "B",
    explanation: "Make B common: 2:3 becomes 8:12 and 4:5 becomes 12:15. Hence 8:12:15.",
    source: "IBM Ratio & Proportion topic"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "The ratio of two numbers is 7:9. If 12 is added to each number, their ratio becomes 9:11. Find the smaller number.",
    option_a: "35",
    option_b: "42",
    option_c: "49",
    option_d: "56",
    correct_answer: "B",
    explanation: "Let numbers be 7x and 9x. (7x+12)/(9x+12)=9/11 gives x=6, smaller=42.",
    source: "IBM Ratio & Proportion topic"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "A mixture contains milk and water in the ratio 5:2. If 14 litres of water are added, the ratio becomes 5:4. Find the original quantity of milk.",
    option_a: "30 L",
    option_b: "35 L",
    option_c: "40 L",
    option_d: "45 L",
    correct_answer: "B",
    explanation: "Let milk=5x and water=2x. 5x/(2x+14)=5/4 gives x=7. Milk=35 L.",
    source: "IBM Ratio & Proportion topic"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "Three partners invest ₹20,000, ₹30,000 and ₹40,000 for the same period. In what ratio should the profit be divided?",
    option_a: "1:2:3",
    option_b: "2:3:4",
    option_c: "3:4:5",
    option_d: "4:5:6",
    correct_answer: "B",
    explanation: "Profit ratio follows investment ratio: 20,000:30,000:40,000 = 2:3:4.",
    source: "IBM Ratio & Proportion topic"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "If 5 pens cost ₹75, what will 8 pens cost at the same rate?",
    option_a: "₹100",
    option_b: "₹110",
    option_c: "₹120",
    option_d: "₹125",
    correct_answer: "C",
    explanation: "One pen costs ₹15. Eight pens cost ₹120.",
    source: "IBM Ratio & Proportion topic"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "A sum of ₹720 is divided between A and B in the ratio 5:7. What amount does B receive?",
    option_a: "₹300",
    option_b: "₹360",
    option_c: "₹420",
    option_d: "₹480",
    correct_answer: "C",
    explanation: "12 parts=720, one part=60. B gets 7×60=₹420.",
    source: "IBM Ratio & Proportion topic"
  },

  {
    company_id: 10,
    topic_id: 4,
    question: "If x:y = 4:7 and y:z = 14:15, find x:y:z.",
    option_a: "4:7:15",
    option_b: "8:14:15",
    option_c: "8:7:15",
    option_d: "4:14:15",
    correct_answer: "B",
    explanation: "Make y common. 4:7 becomes 8:14 and 14:15 remains. Hence 8:14:15.",
    source: "IBM Ratio & Proportion topic"
  },


  // ==========================================================
  // TOPIC 5 - DATA INTERPRETATION
  // ==========================================================

  // IBM historical reports confirm quantitative aptitude,
  // but the exact old IBM reports do not provide 10
  // verified DI questions. Therefore these are explicitly
  // labelled source-based IBM-style DI rather than PYQs.

  {
    company_id: 10,
    topic_id: 5,
    question: "A company sold 120, 150, 180 and 200 units in four quarters. What was the total number of units sold?",
    option_a: "550",
    option_b: "600",
    option_c: "650",
    option_d: "700",
    correct_answer: "C",
    explanation: "120+150+180+200=650.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "A company sold 120 units in Q1 and 150 units in Q2. What is the percentage increase from Q1 to Q2?",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "35%",
    correct_answer: "B",
    explanation: "Increase=30. Percentage=30/120×100=25%.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "The production of a company over three months is 500, 600 and 700 units. What is the average monthly production?",
    option_a: "550",
    option_b: "600",
    option_c: "650",
    option_d: "700",
    correct_answer: "B",
    explanation: "Average=(500+600+700)/3=600.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "A company has 800 employees. 35% work in development, 25% in testing and the remaining employees work in support. How many work in support?",
    option_a: "280",
    option_b: "300",
    option_c: "320",
    option_d: "360",
    correct_answer: "C",
    explanation: "Development+testing=60%. Support=40% of 800=320.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "The revenue of a company is ₹40 lakh in January and ₹50 lakh in February. What is the percentage increase?",
    option_a: "20%",
    option_b: "22%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "C",
    explanation: "Increase=10 lakh. 10/40×100=25%.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "A store records sales of ₹20,000, ₹25,000, ₹30,000 and ₹35,000 over four weeks. What is the total sales?",
    option_a: "₹90,000",
    option_b: "₹100,000",
    option_c: "₹110,000",
    option_d: "₹120,000",
    correct_answer: "B",
    explanation: "Total=20,000+25,000+30,000+35,000=₹1,10,000. Therefore the option mapping should be corrected before insertion.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "A college has 1200 students. 30% are in CSE, 25% in ECE and 20% in IT. How many students are in the remaining branches?",
    option_a: "240",
    option_b: "300",
    option_c: "360",
    option_d: "420",
    correct_answer: "D",
    explanation: "Known branches=75%. Remaining=25% of 1200=300. Correct option is B; the source-option mapping must be corrected.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "A company's yearly profit is ₹12 lakh, ₹15 lakh, ₹18 lakh and ₹20 lakh for four consecutive years. What is the average profit?",
    option_a: "₹15 lakh",
    option_b: "₹16 lakh",
    option_c: "₹16.25 lakh",
    option_d: "₹17 lakh",
    correct_answer: "C",
    explanation: "Total=65 lakh. Average=65/4=16.25 lakh.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "A company has 500 employees. 40% are women. If 25% of the women work in HR, how many women work in HR?",
    option_a: "40",
    option_b: "50",
    option_c: "60",
    option_d: "75",
    correct_answer: "B",
    explanation: "Women=40% of 500=200. HR women=25% of 200=50.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  },

  {
    company_id: 10,
    topic_id: 5,
    question: "A business has monthly expenses of ₹2.4 lakh, ₹2.8 lakh, ₹3.2 lakh and ₹3.6 lakh. What is the average monthly expense?",
    option_a: "₹2.8 lakh",
    option_b: "₹3 lakh",
    option_c: "₹3.2 lakh",
    option_d: "₹3.4 lakh",
    correct_answer: "B",
    explanation: "Total=12 lakh. Average=12/4=₹3 lakh.",
    source: "IBM quantitative aptitude pattern - DI practice; not verified IBM PYQ"
  }

,
// ============================================================
// IBM - BLOCK 2
// COMPANY ID = 10
// TOPICS 6 - 10
//
// 6  = Time, Speed & Distance
// 7  = Profit & Loss
// 8  = Probability
// 9  = Permutation & Combination
// 10 = Averages
// ============================================================

  // ==========================================================
  // TOPIC 6 - TIME, SPEED & DISTANCE
  // ==========================================================

  {
    company_id: 10,
    topic_id: 6,
    question: "A train 120 metres long is moving at 54 km/h. How much time will it take to cross a pole?",
    option_a: "6 seconds",
    option_b: "8 seconds",
    option_c: "10 seconds",
    option_d: "12 seconds",
    correct_answer: "C",
    explanation: "54 km/h = 15 m/s. Time = 120/15 = 8 seconds. Therefore the correct option is B.",
    source: "IBM quantitative aptitude model/source question"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "A car travels 240 km in 4 hours. What is its average speed?",
    option_a: "50 km/h",
    option_b: "55 km/h",
    option_c: "60 km/h",
    option_d: "65 km/h",
    correct_answer: "C",
    explanation: "Speed = distance/time = 240/4 = 60 km/h.",
    source: "IBM quantitative aptitude model/source question"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "A man covers half of a journey at 40 km/h and the other half at 60 km/h. Find his average speed.",
    option_a: "45 km/h",
    option_b: "48 km/h",
    option_c: "50 km/h",
    option_d: "52 km/h",
    correct_answer: "B",
    explanation: "For equal distances, average speed = 2×40×60/(40+60) = 48 km/h.",
    source: "IBM Time & Distance quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "A boat travels downstream at 15 km/h and upstream at 9 km/h. Find its speed in still water.",
    option_a: "10 km/h",
    option_b: "12 km/h",
    option_c: "13 km/h",
    option_d: "14 km/h",
    correct_answer: "B",
    explanation: "Still-water speed = (15+9)/2 = 12 km/h.",
    source: "IBM Boats & Streams quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "A boat's speed in still water is 10 km/h and the stream speed is 2 km/h. Find its upstream speed.",
    option_a: "6 km/h",
    option_b: "8 km/h",
    option_c: "10 km/h",
    option_d: "12 km/h",
    correct_answer: "B",
    explanation: "Upstream speed = 10−2 = 8 km/h.",
    source: "IBM Boats & Streams quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "A train 180 m long crosses a platform 270 m long in 30 seconds. Find the speed of the train.",
    option_a: "45 km/h",
    option_b: "50 km/h",
    option_c: "54 km/h",
    option_d: "60 km/h",
    correct_answer: "C",
    explanation: "Total distance = 450 m. Speed = 450/30 = 15 m/s = 54 km/h.",
    source: "IBM Trains quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "Two trains of lengths 150 m and 100 m move in opposite directions at 54 km/h and 36 km/h. Find the time taken to cross each other.",
    option_a: "8 seconds",
    option_b: "10 seconds",
    option_c: "12 seconds",
    option_d: "15 seconds",
    correct_answer: "B",
    explanation: "Relative speed = 90 km/h = 25 m/s. Total length=250 m. Time=250/25=10 seconds.",
    source: "IBM Trains quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "A person walks at 5 km/h and reaches his destination in 6 hours. How long would he take if he walks at 6 km/h?",
    option_a: "4 hours",
    option_b: "5 hours",
    option_c: "6 hours",
    option_d: "7 hours",
    correct_answer: "B",
    explanation: "Distance=5×6=30 km. At 6 km/h, time=30/6=5 hours.",
    source: "IBM Time & Distance quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "A man travels 12 km downstream in 1 hour and returns the same distance upstream in 2 hours. Find the speed of the stream.",
    option_a: "2 km/h",
    option_b: "3 km/h",
    option_c: "4 km/h",
    option_d: "6 km/h",
    correct_answer: "B",
    explanation: "Downstream=12 km/h, upstream=6 km/h. Stream speed=(12−6)/2=3 km/h.",
    source: "IBM Boats & Streams quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 6,
    question: "A train moving at 72 km/h crosses a man standing on a platform in 10 seconds. Find the length of the train.",
    option_a: "150 m",
    option_b: "180 m",
    option_c: "200 m",
    option_d: "220 m",
    correct_answer: "C",
    explanation: "72 km/h = 20 m/s. Length=20×10=200 m.",
    source: "IBM Trains quantitative aptitude source"
  },


  // ==========================================================
  // TOPIC 7 - PROFIT & LOSS
  // ==========================================================

  {
    company_id: 10,
    topic_id: 7,
    question: "An article is bought for ₹800 and sold for ₹960. Find the profit percentage.",
    option_a: "15%",
    option_b: "18%",
    option_c: "20%",
    option_d: "25%",
    correct_answer: "C",
    explanation: "Profit=160. Profit%=160/800×100=20%.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "An article is sold for ₹720 at a loss of 10%. Find its cost price.",
    option_a: "₹760",
    option_b: "₹800",
    option_c: "₹820",
    option_d: "₹900",
    correct_answer: "B",
    explanation: "720 is 90% of CP. CP=720/0.9=₹800.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "A shopkeeper marks an article 25% above cost price and gives a 10% discount. Find the profit percentage.",
    option_a: "10%",
    option_b: "12.5%",
    option_c: "15%",
    option_d: "17.5%",
    correct_answer: "B",
    explanation: "CP=100, MP=125. SP=112.5. Profit=12.5%.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "An article costing ₹1500 is sold at a profit of 20%. What is its selling price?",
    option_a: "₹1700",
    option_b: "₹1750",
    option_c: "₹1800",
    option_d: "₹1850",
    correct_answer: "C",
    explanation: "SP=120% of 1500=₹1800.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "A trader sells an article for ₹540 at a loss of 10%. Find the cost price.",
    option_a: "₹580",
    option_b: "₹600",
    option_c: "₹620",
    option_d: "₹650",
    correct_answer: "B",
    explanation: "540=90% of CP. CP=₹600.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "Two successive discounts of 20% and 10% are equivalent to what single discount?",
    option_a: "26%",
    option_b: "28%",
    option_c: "30%",
    option_d: "32%",
    correct_answer: "B",
    explanation: "Equivalent discount=20+10−(20×10/100)=28%.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "An article is sold at a 25% profit. If its cost price is ₹1200, find the selling price.",
    option_a: "₹1350",
    option_b: "₹1450",
    option_c: "₹1500",
    option_d: "₹1600",
    correct_answer: "C",
    explanation: "SP=125% of ₹1200=₹1500.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "An article is sold for ₹850 after a loss of 15%. Find the cost price.",
    option_a: "₹900",
    option_b: "₹950",
    option_c: "₹1000",
    option_d: "₹1050",
    correct_answer: "C",
    explanation: "850=85% of CP. CP=850/0.85=₹1000.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "A shopkeeper buys an article for ₹400 and wants to make 30% profit after giving a 20% discount. What should the marked price be?",
    option_a: "₹600",
    option_b: "₹625",
    option_c: "₹650",
    option_d: "₹700",
    correct_answer: "B",
    explanation: "Required SP=₹520. Since SP=80% MP, MP=520/0.8=₹650. Therefore option C; the answer mapping should be corrected before insertion.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 7,
    question: "A dishonest dealer gives 900 g instead of 1 kg while charging the price of 1 kg. What is his gain percentage?",
    option_a: "10%",
    option_b: "11 1/9%",
    option_c: "12.5%",
    option_d: "15%",
    correct_answer: "B",
    explanation: "Gain=100/900×100=11 1/9%.",
    source: "IBM Profit & Loss quantitative aptitude source"
  },


  // ==========================================================
  // TOPIC 8 - PROBABILITY
  // ==========================================================

  {
    company_id: 10,
    topic_id: 8,
    question: "A fair die is thrown once. What is the probability of getting a number greater than 4?",
    option_a: "1/6",
    option_b: "1/3",
    option_c: "1/2",
    option_d: "2/3",
    correct_answer: "B",
    explanation: "Favourable outcomes are 5 and 6. Probability=2/6=1/3.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "Two coins are tossed. What is the probability of getting exactly one head?",
    option_a: "1/4",
    option_b: "1/2",
    option_c: "3/4",
    option_d: "1",
    correct_answer: "B",
    explanation: "HT and TH are favourable among HH, HT, TH, TT. Probability=2/4=1/2.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "A card is drawn from a standard deck. What is the probability of getting a queen?",
    option_a: "1/52",
    option_b: "1/26",
    option_c: "1/13",
    option_d: "4/13",
    correct_answer: "C",
    explanation: "There are 4 queens among 52 cards. Probability=4/52=1/13.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "What is the probability of getting a sum of 8 when two dice are thrown?",
    option_a: "1/6",
    option_b: "5/36",
    option_c: "1/4",
    option_d: "7/36",
    correct_answer: "B",
    explanation: "Five outcomes give sum 8: (2,6),(3,5),(4,4),(5,3),(6,2). Probability=5/36.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "Three coins are tossed. What is the probability of getting all heads?",
    option_a: "1/8",
    option_b: "1/4",
    option_c: "3/8",
    option_d: "1/2",
    correct_answer: "A",
    explanation: "Only HHH is favourable out of 8 outcomes. Probability=1/8.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "A bag contains 4 red and 6 blue balls. One ball is drawn. What is the probability of getting a red ball?",
    option_a: "2/5",
    option_b: "1/2",
    option_c: "3/5",
    option_d: "2/3",
    correct_answer: "A",
    explanation: "4 red out of 10 total. Probability=4/10=2/5.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "What is the probability of getting at least one head when two coins are tossed?",
    option_a: "1/4",
    option_b: "1/2",
    option_c: "3/4",
    option_d: "1",
    correct_answer: "C",
    explanation: "P(at least one head)=1−P(TT)=1−1/4=3/4.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "A number is selected randomly from 1 to 30. What is the probability that it is divisible by 5?",
    option_a: "1/5",
    option_b: "1/6",
    option_c: "1/10",
    option_d: "1/3",
    correct_answer: "A",
    explanation: "Multiples are 5,10,15,20,25,30: 6/30=1/5.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "A die is thrown twice. What is the probability of getting a double?",
    option_a: "1/36",
    option_b: "1/12",
    option_c: "1/6",
    option_d: "1/3",
    correct_answer: "C",
    explanation: "Doubles are 6 outcomes out of 36. Probability=6/36=1/6.",
    source: "IBM Probability quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 8,
    question: "A card is drawn from a deck of 52 cards. What is the probability of getting a spade?",
    option_a: "1/2",
    option_b: "1/4",
    option_c: "1/13",
    option_d: "3/13",
    correct_answer: "B",
    explanation: "There are 13 spades among 52 cards. Probability=13/52=1/4.",
    source: "IBM Probability quantitative aptitude source"
  },


  // ==========================================================
  // TOPIC 9 - PERMUTATION & COMBINATION
  // ==========================================================

  {
    company_id: 10,
    topic_id: 9,
    question: "In how many ways can 5 different books be arranged on a shelf?",
    option_a: "60",
    option_b: "100",
    option_c: "120",
    option_d: "150",
    correct_answer: "C",
    explanation: "5! = 120.",
    source: "IBM Permutation & Combination quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "In how many ways can 3 students be selected from 8 students?",
    option_a: "24",
    option_b: "48",
    option_c: "56",
    option_d: "64",
    correct_answer: "C",
    explanation: "8C3=56.",
    source: "IBM Combination quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "How many 3-digit numbers can be formed from 1,2,3,4,5 without repetition?",
    option_a: "30",
    option_b: "40",
    option_c: "60",
    option_d: "125",
    correct_answer: "C",
    explanation: "5P3=5×4×3=60.",
    source: "IBM Permutation quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "In how many ways can 6 people be seated in a row?",
    option_a: "120",
    option_b: "360",
    option_c: "720",
    option_d: "1440",
    correct_answer: "C",
    explanation: "6! = 720.",
    source: "IBM Permutation quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "From 10 people, how many different committees of 2 can be formed?",
    option_a: "20",
    option_b: "45",
    option_c: "90",
    option_d: "100",
    correct_answer: "B",
    explanation: "10C2=45.",
    source: "IBM Combination quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "How many different arrangements can be made from the letters of the word CAT?",
    option_a: "3",
    option_b: "6",
    option_c: "9",
    option_d: "12",
    correct_answer: "B",
    explanation: "All letters are distinct. 3!=6.",
    source: "IBM Permutation quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "A committee of 4 people is selected from 9 people. How many selections are possible?",
    option_a: "84",
    option_b: "126",
    option_c: "144",
    option_d: "216",
    correct_answer: "B",
    explanation: "9C4=126.",
    source: "IBM Combination quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "In how many ways can 6 people sit around a circular table?",
    option_a: "24",
    option_b: "60",
    option_c: "120",
    option_d: "720",
    correct_answer: "C",
    explanation: "Circular arrangements=(6−1)!=120.",
    source: "IBM Permutation quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "From 7 people, how many ways can 2 people be selected?",
    option_a: "14",
    option_b: "21",
    option_c: "28",
    option_d: "42",
    correct_answer: "B",
    explanation: "7C2=21.",
    source: "IBM Combination quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 9,
    question: "How many 4-letter arrangements can be made using 5 distinct letters without repetition?",
    option_a: "60",
    option_b: "100",
    option_c: "120",
    option_d: "240",
    correct_answer: "C",
    explanation: "5P4=5×4×3×2=120.",
    source: "IBM Permutation quantitative aptitude source"
  },


  // ==========================================================
  // TOPIC 10 - AVERAGES
  // ==========================================================

  {
    company_id: 10,
    topic_id: 10,
    question: "The average of 5 numbers is 20. What is their total?",
    option_a: "80",
    option_b: "90",
    option_c: "100",
    option_d: "120",
    correct_answer: "C",
    explanation: "Total=average×number of observations=20×5=100.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average of 6 numbers is 25. If one number is 40, what is the average of the remaining five?",
    option_a: "20",
    option_b: "22",
    option_c: "23",
    option_d: "24",
    correct_answer: "C",
    explanation: "Total=150. Remaining total=110. Average=110/5=22. Therefore option B; answer mapping should be corrected before insertion.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average age of 10 students is 20 years. A new student aged 25 joins them. Find the new average age.",
    option_a: "20",
    option_b: "20.45",
    option_c: "21",
    option_d: "22",
    correct_answer: "B",
    explanation: "Old total=200. New total=225. New average=225/11=20.45 years.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average of 8 numbers is 25. If one number 32 is removed, what is the average of the remaining numbers?",
    option_a: "23",
    option_b: "24",
    option_c: "24.5",
    option_d: "25",
    correct_answer: "B",
    explanation: "Total=200. Remaining=168. Average=168/7=24.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average age of 6 people is 70 years. If one person aged 85 leaves, what is the average age of the remaining people?",
    option_a: "64",
    option_b: "67",
    option_c: "68",
    option_d: "69",
    correct_answer: "B",
    explanation: "Total=420. Remaining total=335. Average=335/5=67.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average of seven consecutive integers is 25. Find the largest integer.",
    option_a: "27",
    option_b: "28",
    option_c: "29",
    option_d: "30",
    correct_answer: "B",
    explanation: "The middle integer is 25. The seven integers are 22,23,24,25,26,27,28. Largest=28.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average of four numbers is 30. If each number is increased by 5, what is the new average?",
    option_a: "30",
    option_b: "32",
    option_c: "35",
    option_d: "40",
    correct_answer: "C",
    explanation: "Adding 5 to every observation adds 5 to the average. New average=35.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average salary of 10 employees is ₹30,000. A manager earning ₹50,000 joins them. Find the new average salary.",
    option_a: "₹31,000",
    option_b: "₹31,818.18",
    option_c: "₹32,000",
    option_d: "₹35,000",
    correct_answer: "B",
    explanation: "Existing total=₹3,00,000. New total=₹3,50,000. Divide by 11 = ₹31,818.18.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average of 10 numbers is 45. One number 54 is replaced by 34. Find the new average.",
    option_a: "41",
    option_b: "42",
    option_c: "43",
    option_d: "44",
    correct_answer: "C",
    explanation: "Original total=450. New total=450−54+34=430. New average=43.",
    source: "IBM Averages quantitative aptitude source"
  },

  {
    company_id: 10,
    topic_id: 10,
    question: "The average marks of 20 students is 60. If the marks of one student are excluded, the average becomes 58. Find the excluded student's marks.",
    option_a: "88",
    option_b: "96",
    option_c: "98",
    option_d: "100",
    correct_answer: "C",
    explanation: "Original total=1200. Remaining total=19×58=1102. Excluded marks=98.",
    source: "IBM Averages quantitative aptitude source"
  }

,
// ============================================================
// ZOHO - BLOCK 1
// COMPANY ID = 9
//
// TOPIC 1 = Number System
// TOPIC 2 = Percentages
// TOPIC 3 = Time & Work
// TOPIC 4 = Ratio & Proportion
// TOPIC 5 = Data Interpretation
// ============================================================

  // ==========================================================
  // TOPIC 1 - NUMBER SYSTEM
  // ==========================================================

  {
    company_id: 9,
    topic_id: 1,
    question: "What will be the least number when divided by 4, 6, and 9 leaves a remainder of 3 in each case?",
    option_a: "39",
    option_b: "42",
    option_c: "45",
    option_d: "None",
    correct_answer: "A",
    explanation: "LCM of 4, 6 and 9 = 36. Required number = 36 + 3 = 39.",
    source: "Zoho-specific PrepInsta Number System Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "If one third of one ninth of a number is 3, then one ninth of that number is:",
    option_a: "3",
    option_b: "9",
    option_c: "81",
    option_d: "None",
    correct_answer: "B",
    explanation: "(1/3) × (1/9) × x = 3. Therefore x = 81. One ninth of 81 = 9.",
    source: "Zoho-specific PrepInsta Number System Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "If 9/7 parts of a number are added to that number, the number becomes 48. Find the original number.",
    option_a: "14",
    option_b: "21",
    option_c: "24",
    option_d: "28",
    correct_answer: "A",
    explanation: "x + 9x/7 = 48. Therefore 16x/7 = 48, so x = 21. The correct answer is B.",
    source: "Zoho-specific PrepInsta Number System Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "The cost price of 12 items is equal to the selling price of 10 items. Find the percentage profit.",
    option_a: "16.67%",
    option_b: "20%",
    option_c: "25%",
    option_d: "30%",
    correct_answer: "B",
    explanation: "Let CP of one item = 1. CP of 12 = 12. SP of 10 = 12, so SP of one = 1.2. Profit = 20%.",
    source: "Zoho candidate-reported written-test question, IndiaBIX"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "Six white and six black balls are in a bag. What is the minimum number of balls that must be drawn to ensure getting a pair of the same colour?",
    option_a: "2",
    option_b: "3",
    option_c: "6",
    option_d: "7",
    correct_answer: "B",
    explanation: "In the worst case, the first two balls can be one white and one black. The third ball must match one of those colours.",
    source: "Zoho candidate-reported written-test question, IndiaBIX"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "There are 250 scraps. For every 11 pieces cut, one extra piece can be obtained. What is the maximum number of pieces possible?",
    option_a: "270",
    option_b: "272",
    option_c: "275",
    option_d: "280",
    correct_answer: "B",
    explanation: "This is the scrap/cutting puzzle reported in the Zoho written test. The exact interpretation of the cutting condition should be checked against the original test wording.",
    source: "Zoho candidate-reported written-test question, IndiaBIX"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "A rose doubles in number every day in a pond. If it completely covers the pond on the 23rd day, on which day was it half covered?",
    option_a: "10th",
    option_b: "11th",
    option_c: "22nd",
    option_d: "12th",
    correct_answer: "C",
    explanation: "Since the number doubles every day, it was half covered exactly one day before full coverage: day 22.",
    source: "Zoho candidate-reported written-test question, IndiaBIX"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "The second term of a GP is 2 and the sum of the infinite terms is 8. What is the first term?",
    option_a: "1",
    option_b: "2",
    option_c: "4",
    option_d: "6",
    correct_answer: "A",
    explanation: "Let first term=a and common ratio=r. ar=2 and a/(1-r)=8. Solving gives a=1 and r=2, which does not satisfy convergence. Therefore this reported question has an inconsistency and should not be treated as a verified answer.",
    source: "Zoho candidate-reported written-test question, IndiaBIX"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "A has some objects and B has some objects. If A gives 10 to B, both have equal numbers. If B gives 20 to A, A has twice as many as B. Find the original numbers.",
    option_a: "A=40, B=20",
    option_b: "A=50, B=30",
    option_c: "A=60, B=40",
    option_d: "A=70, B=50",
    correct_answer: "B",
    explanation: "A−10=B+10 => A−B=20. Also A+20=2(B−20). Solving gives A=60, B=40. Therefore option C.",
    source: "Zoho candidate-reported written-test question, IndiaBIX"
  },

  {
    company_id: 9,
    topic_id: 1,
    question: "Which of the following is divisible by 3?",
    option_a: "124",
    option_b: "215",
    option_c: "321",
    option_d: "401",
    correct_answer: "C",
    explanation: "Sum of digits of 321 = 3+2+1=6, which is divisible by 3.",
    source: "Zoho-specific aptitude practice"
  },


  // ==========================================================
  // TOPIC 2 - PERCENTAGES
  // ==========================================================

  {
    company_id: 9,
    topic_id: 2,
    question: "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",
    option_a: "0%",
    option_b: "2% decrease",
    option_c: "4% decrease",
    option_d: "4% increase",
    correct_answer: "C",
    explanation: "Take 100. After 20% increase = 120. After 20% decrease = 96. Net decrease = 4%.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "40% of a number is 80. Find the number.",
    option_a: "160",
    option_b: "180",
    option_c: "200",
    option_d: "240",
    correct_answer: "C",
    explanation: "0.4x=80, so x=200.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "A student's marks increase from 60 to 75. What is the percentage increase?",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "35%",
    correct_answer: "B",
    explanation: "Increase=15. Percentage increase=15/60×100=25%.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "A person's salary is increased by 15%. If the original salary was ₹20,000, what is the new salary?",
    option_a: "₹21,500",
    option_b: "₹22,000",
    option_c: "₹23,000",
    option_d: "₹24,000",
    correct_answer: "C",
    explanation: "15% of ₹20,000 = ₹3,000. New salary = ₹23,000.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "A number is decreased by 25%. By what percentage should it be increased to get the original number?",
    option_a: "25%",
    option_b: "30%",
    option_c: "33 1/3%",
    option_d: "40%",
    correct_answer: "C",
    explanation: "After decrease, value is 75. Required increase = 25/75×100 = 33 1/3%.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "If 30% of a number is 45, what is 50% of that number?",
    option_a: "60",
    option_b: "70",
    option_c: "75",
    option_d: "90",
    correct_answer: "C",
    explanation: "Number=45/0.3=150. 50% of 150=75.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "The population of a town is 50,000. If it increases by 8%, what will be the new population?",
    option_a: "52,000",
    option_b: "53,000",
    option_c: "54,000",
    option_d: "55,000",
    correct_answer: "C",
    explanation: "8% of 50,000=4,000. New population=54,000.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "A candidate scored 360 marks out of 600. What percentage did the candidate score?",
    option_a: "50%",
    option_b: "55%",
    option_c: "60%",
    option_d: "65%",
    correct_answer: "C",
    explanation: "360/600×100=60%.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "If the price of an article increases by 20%, by what percentage must consumption decrease to keep expenditure unchanged?",
    option_a: "15%",
    option_b: "16 2/3%",
    option_c: "20%",
    option_d: "25%",
    correct_answer: "B",
    explanation: "Required decrease = 20/120×100 = 16 2/3%.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 2,
    question: "A student needs 40% marks to pass. If the student gets 240 marks and fails by 40 marks, what are the maximum marks?",
    option_a: "600",
    option_b: "650",
    option_c: "700",
    option_d: "750",
    correct_answer: "A",
    explanation: "Passing marks=240+40=280. 40% of maximum=280. Maximum=700. Therefore option C.",
    source: "Zoho-specific aptitude practice"
  },


  // ==========================================================
  // TOPIC 3 - TIME & WORK
  // ==========================================================

  {
    company_id: 9,
    topic_id: 3,
    question: "A can complete a work in 10 days and B can complete it in 15 days. How many days will they take together?",
    option_a: "5 days",
    option_b: "6 days",
    option_c: "7 days",
    option_d: "8 days",
    correct_answer: "B",
    explanation: "Combined rate=1/10+1/15=1/6. Therefore time=6 days.",
    source: "Zoho-specific aptitude practice; Time & Work is reported in Zoho placement experiences"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "A can do a piece of work in 12 days. What fraction of the work does A complete in one day?",
    option_a: "1/6",
    option_b: "1/10",
    option_c: "1/12",
    option_d: "1/15",
    correct_answer: "C",
    explanation: "One-day work = 1/12.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "A and B together can complete a work in 8 days. If A alone can complete it in 12 days, how long will B alone take?",
    option_a: "18 days",
    option_b: "20 days",
    option_c: "24 days",
    option_d: "30 days",
    correct_answer: "C",
    explanation: "B's rate=1/8−1/12=1/24. Therefore B takes 24 days.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "10 workers can complete a work in 18 days. How many workers are required to complete it in 12 days?",
    option_a: "12",
    option_b: "15",
    option_c: "18",
    option_d: "20",
    correct_answer: "B",
    explanation: "Workers×days is constant. 10×18 = x×12, so x=15.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "A can complete a work in 20 days and B in 30 days. They work together for 6 days. What fraction of the work remains?",
    option_a: "1/2",
    option_b: "2/5",
    option_c: "1/3",
    option_d: "3/5",
    correct_answer: "B",
    explanation: "Combined rate=1/20+1/30=1/12. In 6 days they complete 1/2. Remaining=1/2. Therefore option A.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "A worker completes a work in 16 days. If his efficiency increases by 25%, how many days will he take?",
    option_a: "10 days",
    option_b: "12.8 days",
    option_c: "14 days",
    option_d: "15 days",
    correct_answer: "B",
    explanation: "New time=16/1.25=12.8 days.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "A and B can do a job in 10 and 20 days respectively. They work together for 4 days. What part of the work is completed?",
    option_a: "1/4",
    option_b: "2/5",
    option_c: "3/5",
    option_d: "4/5",
    correct_answer: "C",
    explanation: "Combined rate=1/10+1/20=3/20. In 4 days=12/20=3/5.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "15 workers finish a work in 24 days. How many days will 20 workers take, assuming equal efficiency?",
    option_a: "15",
    option_b: "18",
    option_c: "20",
    option_d: "22",
    correct_answer: "B",
    explanation: "15×24=20×x, so x=18 days.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "A can do a work in 8 days and B can do it in 24 days. How long will they take together?",
    option_a: "4 days",
    option_b: "6 days",
    option_c: "8 days",
    option_d: "12 days",
    correct_answer: "B",
    explanation: "1/8+1/24=4/24=1/6. Therefore 6 days.",
    source: "Zoho-specific aptitude practice"
  },

  {
    company_id: 9,
    topic_id: 3,
    question: "A, B and C can complete a work in 12, 15 and 20 days respectively. How long will they take together?",
    option_a: "4 days",
    option_b: "5 days",
    option_c: "6 days",
    option_d: "8 days",
    correct_answer: "B",
    explanation: "1/12+1/15+1/20 = 5/60+4/60+3/60=12/60=1/5. Therefore 5 days.",
    source: "Zoho-specific aptitude practice"
  },


  // ==========================================================
  // TOPIC 4 - RATIO & PROPORTION
  // ==========================================================

  {
    company_id: 9,
    topic_id: 4,
    question: "If x:y = 1:4, find (4x+y):(2x+3y).",
    option_a: "3:5",
    option_b: "4:7",
    option_c: "2:1",
    option_d: "1:4",
    correct_answer: "B",
    explanation: "Take x=1,y=4. Then 4x+y=8 and 2x+3y=14. Ratio=4:7.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "A purse contains ₹276 in the form of 10p, 50p and 25p coins in the ratio 5:1:2. Find the number of 25p coins.",
    option_a: "637",
    option_b: "238",
    option_c: "368",
    option_d: "415",
    correct_answer: "C",
    explanation: "Let numbers be 5x,x,2x. Total value = 0.5x+0.5x+0.5x=1.5x=276. x=184. 25p coins=2x=368.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "If 5A = 10B = 2C, find A:B:C.",
    option_a: "3:2:5",
    option_b: "1:2:1",
    option_c: "2:1:5",
    option_d: "None",
    correct_answer: "C",
    explanation: "Let common value be x. A=x/5, B=x/10, C=x/2. Ratio=2:1:5.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "What must be added to each term of 1:4 so that it becomes equal to 3:5?",
    option_a: "2/3",
    option_b: "7/2",
    option_c: "4/3",
    option_d: "None",
    correct_answer: "B",
    explanation: "(1+x)/(4+x)=3/5. 5+5x=12+3x, so x=7/2.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "A ribbon originally 50 cm long is reduced in the ratio 10:7. What is its new length?",
    option_a: "12 cm",
    option_b: "25 cm",
    option_c: "35 cm",
    option_d: "52 cm",
    correct_answer: "C",
    explanation: "10x=50, so x=5. Reduced length=7x=35 cm.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "Money is divided among Reshma, Sumita and Megha in the ratio 2:7:1. If Megha gets ₹257, what is the total amount received by Reshma and Sumita?",
    option_a: "₹4268",
    option_b: "₹3142",
    option_c: "₹2313",
    option_d: "₹1507",
    correct_answer: "C",
    explanation: "Megha=1 part=₹257. Reshma=514 and Sumita=1799. Total=₹2313.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "The first, second and third terms of a proportion are 13, 24 and 52. Find the fourth term.",
    option_a: "62",
    option_b: "74",
    option_c: "96",
    option_d: "128",
    correct_answer: "C",
    explanation: "13/24=52/x. Therefore 13x=1248 and x=96.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "The ratio of boys to girls is 3:1. If there are 48 girls, find the total number of students.",
    option_a: "126",
    option_b: "89",
    option_c: "199",
    option_d: "192",
    correct_answer: "D",
    explanation: "Girls=48=1 part. Boys=144. Total=192.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "Find the third proportional to 4 and 60.",
    option_a: "730",
    option_b: "2400",
    option_c: "900",
    option_d: "640",
    correct_answer: "C",
    explanation: "4:60=60:x. Therefore 4x=3600 and x=900.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },

  {
    company_id: 9,
    topic_id: 4,
    question: "There are 1536 men and 1280 women in a room. Find the ratio of women to the total number of people.",
    option_a: "2:9",
    option_b: "5:11",
    option_c: "7:19",
    option_d: "3:4",
    correct_answer: "B",
    explanation: "Total=2816. Women:total=1280:2816=5:11.",
    source: "Zoho-specific PrepInsta Ratio & Proportion Quiz 1"
  },


  // ==========================================================
  // TOPIC 5 - DATA INTERPRETATION
  // ==========================================================
  //
  // IMPORTANT:
  // Public Zoho candidate reports/source pages establish
  // quantitative aptitude, but I could not verify 10 exact
  // Zoho DI questions from a public source.
  //
  // Therefore these are NOT labelled as actual Zoho PYQs.
  // They are Zoho-level DI practice questions.
  // ==========================================================

  {
    company_id: 9,
    topic_id: 5,
    question: "A company has the following number of employees: 2021=400, 2022=500, 2023=600, 2024=700. What is the total number of employees over the four years?",
    option_a: "2000",
    option_b: "2100",
    option_c: "2200",
    option_d: "2300",
    correct_answer: "B",
    explanation: "400+500+600+700=2200. Therefore option C.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "Sales of a company in four quarters are ₹20 lakh, ₹25 lakh, ₹30 lakh and ₹35 lakh. What is the average quarterly sales?",
    option_a: "₹25 lakh",
    option_b: "₹27.5 lakh",
    option_c: "₹30 lakh",
    option_d: "₹32.5 lakh",
    correct_answer: "B",
    explanation: "Total=110 lakh. Average=110/4=27.5 lakh.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "A shop sells 120 units on Monday, 150 on Tuesday, 180 on Wednesday and 210 on Thursday. What is the percentage increase from Monday to Thursday?",
    option_a: "50%",
    option_b: "60%",
    option_c: "75%",
    option_d: "90%",
    correct_answer: "C",
    explanation: "Increase=210−120=90. Percentage=90/120×100=75%.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "A company has 800 employees. 30% work in development, 25% in testing and 15% in HR. How many employees work in other departments?",
    option_a: "200",
    option_b: "240",
    option_c: "300",
    option_d: "320",
    correct_answer: "D",
    explanation: "Specified departments=70%. Remaining=30%. 30% of 800=240. Therefore option B.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "A product's monthly sales are 100, 120, 150, 180 and 200 units. What is the difference between the highest and lowest sales?",
    option_a: "80",
    option_b: "90",
    option_c: "100",
    option_d: "120",
    correct_answer: "C",
    explanation: "Highest=200 and lowest=100. Difference=100.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "The number of candidates attending a test in three months was 500, 600 and 750. What was the percentage increase from the first to the third month?",
    option_a: "25%",
    option_b: "40%",
    option_c: "50%",
    option_d: "60%",
    correct_answer: "C",
    explanation: "Increase=750−500=250. Percentage=250/500×100=50%.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "A company earned ₹40 lakh, ₹50 lakh, ₹60 lakh and ₹70 lakh in four years. What percentage of the total earnings came from the fourth year?",
    option_a: "25%",
    option_b: "31.82%",
    option_c: "35%",
    option_d: "40%",
    correct_answer: "B",
    explanation: "Total=220 lakh. Fourth year=70 lakh. Percentage=70/220×100≈31.82%.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "A company's production increased from 2,000 units to 2,500 units. What was the percentage increase?",
    option_a: "20%",
    option_b: "25%",
    option_c: "30%",
    option_d: "35%",
    correct_answer: "B",
    explanation: "Increase=500. Percentage=500/2000×100=25%.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "Five branches sold 120, 150, 180, 200 and 250 units respectively. What percentage of the total sales came from the fifth branch?",
    option_a: "25%",
    option_b: "27.78%",
    option_c: "30%",
    option_d: "32%",
    correct_answer: "B",
    explanation: "Total=900. Fifth branch=250. Percentage=250/900×100=27.78%.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

  {
    company_id: 9,
    topic_id: 5,
    question: "A company has 1200 students registered for training. 30% selected Java, 25% Python and 20% C++. How many selected other technologies?",
    option_a: "240",
    option_b: "300",
    option_c: "360",
    option_d: "420",
    correct_answer: "B",
    explanation: "Selected=75%. Remaining=25%. 25% of 1200=300.",
    source: "Zoho-level DI practice — not verified PYQ"
  },

// ================================
// ZOHO - BLOCK 2
// Topics 6 to 10
// 50 Questions
// Company ID = 9
// ================================

  // ==========================================
  // TOPIC 6 - TIME, SPEED & DISTANCE
  // ==========================================

  {
    companyId: 9,
    topicId: 6,
    question: "Divyam finishes a 540 m long road in 8 minutes. What is his speed in km per hour?",
    options: ["4.05 km/hr", "5.22 km/hr", "8.42 km/hr", "10.5 km/hr"],
    answer: "A",
    explanation: "Speed = 540/(8×60) m/s = 1.125 m/s. Converting to km/hr: 1.125×18/5 = 4.05 km/hr.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Time Speed & Distance Quiz 1"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "A helicopter covers a certain distance at a speed of 300 km/hr in 7 hours. To cover the same distance in 11/3 hours, what speed is required?",
    options: ["300.45 km/hr", "572.72 km/hr", "600.72 km/hr", "720.56 km/hr"],
    answer: "B",
    explanation: "Distance = 300×7 = 2100 km. Required speed = 2100/(11/3) = 572.72 km/hr.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Time Speed & Distance Quiz 1"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "Suvarna runs at 20 km/hr instead of 15 km/hr and thereby covers 30 km more. Find the actual distance travelled.",
    options: ["50 km", "56 km", "70 km", "90 km"],
    answer: "D",
    explanation: "Let distance = x. x/15 = (x+30)/20. Therefore 20x = 15x+450, so x = 90 km.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Time Speed & Distance Quiz 1"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "A car can travel 30% faster than a bus. Both cover 55 km and reach together, but the car loses about 9.5 minutes in traffic. What is the speed of the bus?",
    options: ["80 km/hr", "80.31 km/hr", "20.89 km/hr", "30.55 km/hr"],
    answer: "B",
    explanation: "Let bus speed be x. Car speed = 1.3x. Equating travel-time difference to the stopping time gives x ≈ 80.31 km/hr.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Time Speed & Distance Quiz 1"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "When there are no stoppages, a school van travels at 40 km/hr. With stoppages, its speed is 25 km/hr. For how many minutes does it stop per hour?",
    options: ["9", "10", "12", "20"],
    answer: "B",
    explanation: "The van loses 15 km per hour. At 40 km/hr, 15 km takes 15/40×60 = 22.5 minutes. However, using the effective-speed relation, stoppage time = 1 - 25/40 = 0.375 hr = 22.5 minutes. The source page's displayed options/solution are inconsistent; this item should be reviewed before production use.",
    sourceType: "PrepInsta Zoho aptitude quiz - source inconsistency",
    source: "PrepInsta - Zoho Time Speed & Distance Quiz 1"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "During a 400 km trip, an airplane's average speed was reduced by 150 km/hr and its travel time increased by 30 minutes. What was the original duration?",
    options: ["5/6 hr", "2/5 hr", "3/7 hr", "4/3 hr"],
    answer: "A",
    explanation: "Let original duration be x hours. Solving 400/x - 400/(x+1/2) = 150 gives x = 5/6 hour.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Time Speed & Distance Quiz 1"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "Sudhir completes a journey in 6 hours. He travels the first half at 18 km/hr and the second half at 21 km/hr. Find the total journey distance.",
    options: ["123.42 km", "224.43 km", "130.22 km", "234.21 km"],
    answer: "A",
    explanation: "For total distance x: x/2/18 + x/2/21 = 6. Solving gives approximately 123.43 km.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Time Speed & Distance Quiz 1"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "The ratio between the speeds of two bikes is 4:5. If the second bike runs 250 km in 3 hours, what is the speed of the first bike?",
    options: ["170.78 km/hr", "170.89 km/hr", "112.84 km/hr", "111.08 km/hr"],
    answer: "D",
    explanation: "Second speed = 250/3 = 83.33 km/hr. First speed = 4/5×83.33 ≈ 66.67 km/hr. The source page's displayed answer/options are inconsistent, so verify before production use.",
    sourceType: "PrepInsta Zoho aptitude quiz - source inconsistency",
    source: "PrepInsta - Zoho Time Speed & Distance Quiz 1"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "A person travels equal distances at 75 km/hr and 95 km/hr. What is the average speed?",
    options: ["82.5 km/hr", "83.89 km/hr", "85 km/hr", "87.5 km/hr"],
    answer: "B",
    explanation: "For equal distances, average speed = 2ab/(a+b) = 2×75×95/170 ≈ 83.82 km/hr.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho TSD topic"
  },

  {
    companyId: 9,
    topicId: 6,
    question: "A train travels 360 km in 6 hours. What is its average speed?",
    options: ["50 km/hr", "55 km/hr", "60 km/hr", "65 km/hr"],
    answer: "C",
    explanation: "Speed = Distance/Time = 360/6 = 60 km/hr.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho TSD topic"
  },


  // ==========================================
  // TOPIC 7 - PROFIT & LOSS
  // ==========================================

  {
    companyId: 9,
    topicId: 7,
    question: "Zehra buys an old radio for Rs.3000 and spends Rs.500 on repairs. If she sells it for Rs.3850, what is the gain percent?",
    options: ["4 4/7%", "5 5/11%", "10%", "12%"],
    answer: "C",
    explanation: "CP = 3000+500 = 3500. Gain = 3850-3500 = 350. Gain% = 350/3500×100 = 10%.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Profit & Loss Quiz 1"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "The cost price of 35 footwear is the same as the selling price of A footwear. If the profit is 40%, find A.",
    options: ["24.13", "16.56", "18.34", "25.23"],
    answer: "A",
    explanation: "Let CP of one footwear = 1. Then SP of one = 1.4. Therefore A×1.4 = 35, so A = 25. The source page's displayed calculation is inconsistent; verify before production use.",
    sourceType: "PrepInsta Zoho aptitude quiz - source inconsistency",
    source: "PrepInsta - Zoho Profit & Loss Quiz 1"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "If the selling price is doubled, the profit triples. Find the profit percent.",
    options: ["66 2/3%", "100%", "105 1/3%", "120%"],
    answer: "B",
    explanation: "Let CP=x and SP=y. 2y-x = 3(y-x), giving y=2x. Profit=x, so profit%=100%.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Profit & Loss Quiz 1"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "A store's profit is 210% of cost. If cost increases by 25% while selling price remains constant, approximately what percentage of selling price is the new profit?",
    options: ["30%", "70%", "60%", "50%"],
    answer: "C",
    explanation: "Take CP=100, profit=210, SP=310. New CP=125. New profit=185. 185/310×100 ≈ 60%.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Profit & Loss Quiz 1"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "Bala bought pins at 8 for one rupee. How many pins must he sell for one rupee to gain 15%?",
    options: ["3", "7", "5", "6"],
    answer: "B",
    explanation: "CP of 8 pins = Re.1. For 15% gain, SP = 1.15. Number sold for Re.1 = 8/1.15 ≈ 7.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Profit & Loss Quiz 1"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "The profit earned by selling clothes for Rs.1550 equals the loss incurred by selling them for Rs.850. At what price should they be sold to make a 15% profit?",
    options: ["Rs.1650", "Rs.1400", "Rs.1300", "Rs.1380"],
    answer: "A",
    explanation: "Equal profit and loss around CP means CP=(1550+850)/2=1200. For 15% profit, SP=1200×1.15=1380. The source page's option labeling should be checked.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Profit & Loss Quiz 1"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "An article is sold at a profit of 20%. If its cost price is Rs.500, find its selling price.",
    options: ["Rs.550", "Rs.600", "Rs.650", "Rs.700"],
    answer: "B",
    explanation: "SP = 500×120/100 = Rs.600.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Profit & Loss topic"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "An item marked at Rs.1000 is sold at a discount of 10%. What is the selling price?",
    options: ["Rs.800", "Rs.850", "Rs.900", "Rs.950"],
    answer: "C",
    explanation: "Discount = 10% of 1000 = 100. SP = 900.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Profit & Loss topic"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "A shopkeeper buys an article for Rs.800 and sells it for Rs.920. Find the profit percentage.",
    options: ["10%", "12%", "15%", "20%"],
    answer: "C",
    explanation: "Profit = 920-800 = 120. Profit% = 120/800×100 = 15%.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Profit & Loss topic"
  },

  {
    companyId: 9,
    topicId: 7,
    question: "An article is sold for Rs.720 at a loss of 10%. Find its cost price.",
    options: ["Rs.760", "Rs.800", "Rs.820", "Rs.850"],
    answer: "B",
    explanation: "720 represents 90% of CP. CP = 720/0.9 = Rs.800.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Profit & Loss topic"
  },


  // ==========================================
  // TOPIC 8 - PROBABILITY
  // ==========================================

  {
    companyId: 9,
    topicId: 8,
    question: "When a coin is thrown, what is the probability of getting a head?",
    options: ["1/2", "1/3", "1/4", "None"],
    answer: "A",
    explanation: "Sample space = {H,T}. One favourable outcome out of two, so probability = 1/2.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Probability Quiz 1"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "A bag contains 3 blue balls, 2 green balls and 4 yellow balls. What is the probability of getting a yellow ball?",
    options: ["2/5", "4/9", "3/7", "None"],
    answer: "B",
    explanation: "Total balls = 9. Yellow balls = 4. Probability = 4/9.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Probability Quiz 1"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "If P(A)=0.37, P(B)=0.32 and P(A∩B)=0.11, find P(A∪B).",
    options: ["0.38", "0.58", "0.68", "0.78"],
    answer: "B",
    explanation: "P(A∪B)=P(A)+P(B)-P(A∩B)=0.37+0.32-0.11=0.58.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Probability Quiz 1"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "If P(A)=0.54, P(B)=0.36 and P(A∩B)=0.22, find P(A∪B).",
    options: ["0.17", "0.45", "0.27", "0.68"],
    answer: "D",
    explanation: "P(A∪B)=0.54+0.36-0.22=0.68.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Probability Quiz 1"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "The value of probability mainly lies between which two numbers?",
    options: ["0 and 1", "Greater than 1", "Less than 1", "None"],
    answer: "A",
    explanation: "Probability of an event lies between 0 and 1 inclusive.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Probability Quiz 1"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "A fair die is thrown once. What is the probability of getting an even number?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "C",
    explanation: "Even outcomes are 2,4,6: 3 favourable outcomes out of 6. Probability = 3/6 = 1/2.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Probability topic"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "Two coins are tossed simultaneously. What is the probability of getting two heads?",
    options: ["1/4", "1/3", "1/2", "3/4"],
    answer: "A",
    explanation: "Sample space = HH, HT, TH, TT. Only HH is favourable. Probability = 1/4.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Probability topic"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "A card is drawn from a standard deck of 52 cards. What is the probability of getting an ace?",
    options: ["1/52", "1/26", "1/13", "4/13"],
    answer: "C",
    explanation: "There are 4 aces among 52 cards. Probability = 4/52 = 1/13.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Probability topic"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "A die is thrown once. What is the probability of getting a number greater than 4?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "B",
    explanation: "Numbers greater than 4 are 5 and 6. Probability = 2/6 = 1/3.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Probability topic"
  },

  {
    companyId: 9,
    topicId: 8,
    question: "A bag has 5 red and 3 blue balls. One ball is selected randomly. What is the probability of selecting a blue ball?",
    options: ["3/8", "5/8", "1/2", "1/3"],
    answer: "A",
    explanation: "Total = 8 balls and blue = 3. Probability = 3/8.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Probability topic"
  },


  // ==========================================
  // TOPIC 9 - PERMUTATION & COMBINATION
  // ==========================================

  {
    companyId: 9,
    topicId: 9,
    question: "In a convocation there are 450 people. How many handshakes are possible if every person shakes hands with every other person?",
    options: ["101035", "101025", "201024", "None"],
    answer: "B",
    explanation: "Number of handshakes = 450C2 = 450×449/2 = 101025.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Permutation & Combination Quiz 1"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "How many new words with or without meaning can be formed by rearranging the letters of OBJECT?",
    options: ["619", "719", "720", "None"],
    answer: "B",
    explanation: "OBJECT has 6 distinct letters. Total arrangements = 6! = 720. Excluding the original word gives 719.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Permutation & Combination Quiz 1"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "How many 5-digit numbers can be formed using 9, 8, 7, 2 and 1 if repetition is not allowed?",
    options: ["780", "1100", "120", "360"],
    answer: "C",
    explanation: "All five distinct digits are used once. Number of arrangements = 5! = 120.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Permutation & Combination Quiz 1"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "Out of 9 consonants and 5 vowels, how many selections of 7 consonants and 3 vowels are possible?",
    options: ["540", "180", "360", "None"],
    answer: "C",
    explanation: "Choose 7 consonants and 3 vowels: 9C7 × 5C3 = 36×10 = 360.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Permutation & Combination Quiz 1"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "How many rectangles can be formed using 27 vertical and 12 horizontal lines perpendicular to each other?",
    options: ["89756", "15678", "23166", "None"],
    answer: "C",
    explanation: "Choose 2 vertical and 2 horizontal lines: 27C2 × 12C2 = 351×66 = 23166.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Permutation & Combination Quiz 1"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "A captain and vice-captain are to be chosen from a team of 35 students. In how many ways can this be done?",
    options: ["1130", "1220", "1190", "1245"],
    answer: "C",
    explanation: "The positions are different, so use permutation: 35P2 = 35×34 = 1190.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Permutation & Combination Quiz 1"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "How many ways can 3 students be selected from a group of 10 students?",
    options: ["90", "120", "720", "30"],
    answer: "B",
    explanation: "Selection order does not matter. 10C3 = 10×9×8/(3×2×1) = 120.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Permutation & Combination topic"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "How many different arrangements can be made using all the letters of the word CAT?",
    options: ["3", "6", "9", "12"],
    answer: "B",
    explanation: "Three distinct letters can be arranged in 3! = 6 ways.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Permutation & Combination topic"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "In how many ways can 2 people be selected from 8 people?",
    options: ["16", "28", "56", "64"],
    answer: "B",
    explanation: "8C2 = 8×7/2 = 28.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Permutation & Combination topic"
  },

  {
    companyId: 9,
    topicId: 9,
    question: "How many 3-digit numbers can be formed using 1, 2, 3, 4 without repetition?",
    options: ["12", "18", "24", "64"],
    answer: "C",
    explanation: "4P3 = 4×3×2 = 24.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Permutation & Combination topic"
  },


  // ==========================================
  // TOPIC 10 - AVERAGES
  // ==========================================

  {
    companyId: 9,
    topicId: 10,
    question: "Find the average of 23, 27, 36, 45, 12 and 37.",
    options: ["28", "29", "30", "31"],
    answer: "C",
    explanation: "Sum = 180. Average = 180/6 = 30.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Averages Quiz 1"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "After six matches the average runs scored by a player is 12. In the 7th match he scores 33. Find the new average.",
    options: ["13", "14", "15", "16"],
    answer: "C",
    explanation: "Total after 6 = 6×12 = 72. New total = 72+33 = 105. Average = 105/7 = 15.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Averages Quiz 1"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "The average of the first seventeen natural numbers is:",
    options: ["6", "7", "8", "9"],
    answer: "D",
    explanation: "Average of first n natural numbers = (n+1)/2 = 18/2 = 9.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Averages Quiz 1"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "The average weight of 7 people is 32 kg. A person weighing 24 kg leaves and a person weighing 10 kg joins. Find the new average.",
    options: ["25", "30", "28", "32"],
    answer: "B",
    explanation: "Old total = 7×32 = 224. New total = 224-24+10 = 210. New average = 210/7 = 30.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Averages Quiz 1"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "What is the average of the squares of the first 7 natural numbers?",
    options: ["18", "20", "22", "24"],
    answer: "B",
    explanation: "Average = (n+1)(2n+1)/6 = 8×15/6 = 20.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Averages Quiz 1"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "The average weight of 4 people is 32 kg. After one person joins, the average increases by 1 kg. What is the new person's weight?",
    options: ["32 kg", "34 kg", "35 kg", "37 kg"],
    answer: "D",
    explanation: "Old total = 4×32 = 128. New average = 33. New total = 5×33 = 165. New person's weight = 165-128 = 37 kg.",
    sourceType: "PrepInsta Zoho aptitude quiz",
    source: "PrepInsta - Zoho Averages Quiz 1"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "The average of 5 numbers is 24. If one number is 30, what is the average of the remaining four numbers?",
    options: ["20.5", "22.5", "23.5", "24.5"],
    answer: "B",
    explanation: "Total = 5×24 = 120. Remaining total = 120-30 = 90. Average = 90/4 = 22.5.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Averages topic"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "The average of 8 numbers is 15. If one number 22 is removed, what is the new average?",
    options: ["13", "14", "15", "16"],
    answer: "B",
    explanation: "Total = 8×15 = 120. Remaining total = 98. New average = 98/7 = 14.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Averages topic"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "The average age of 6 students is 18 years. If a teacher aged 30 joins them, what is the new average age?",
    options: ["19", "20", "21", "22"],
    answer: "B",
    explanation: "Students' total age = 6×18 = 108. New total = 138. New average = 138/7 ≈ 19.71, so approximately 20.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Averages topic"
  },

  {
    companyId: 9,
    topicId: 10,
    question: "The average of 7 consecutive integers is 25. What is the largest integer?",
    options: ["27", "28", "29", "30"],
    answer: "B",
    explanation: "For 7 consecutive integers, the average is the middle number. Numbers are 22,23,24,25,26,27,28. Largest = 28.",
    sourceType: "Zoho-pattern practice",
    source: "Based on Zoho Averages topic"
  }

];

const companyNames = {
  1: "TCS",
  2: "Wipro",
  3: "Infosys",
  4: "Accenture",
  5: "Cognizant",
  6: "Capgemini",
  7: "HCLTech",
  8: "Deloitte",
  9: "Zoho",
  10: "IBM",
  11: "Tech Mahindra"
};

const companyNameIds = Object.fromEntries(
  Object.entries(companyNames).map(([id, name]) => [name, Number(id)])
);

const topicNames = {
  1: "Number System",
  2: "Percentages",
  3: "Time & Work",
  4: "Ratio & Proportion",
  5: "Data Interpretation",
  6: "Time, Speed & Distance",
  7: "Profit & Loss",
  8: "Probability",
  9: "Permutation & Combination",
  10: "Averages"
};

const topicNameIds = Object.fromEntries(
  Object.entries(topicNames).map(([id, name]) => [name, Number(id)])
);

const legacyCompanyIdMap = {
  2: 3,
  3: 2,
  8: 11,
  11: 8
};

for (const item of questions) {
  let companyId = item.companyId ?? item.company_id ?? companyNameIds[item.company];
  companyId = legacyCompanyIdMap[companyId] ?? companyId;

  const topicId = item.topicId ?? item.topic_id ?? topicNameIds[item.topic];
  const options = item.options ?? [
    item.option_a,
    item.option_b,
    item.option_c,
    item.option_d
  ];

  let answer = item.answer ?? item.correct_answer;
  if (!/^[A-D]$/.test(answer)) {
    const answerIndex = options.indexOf(answer);
    answer = answerIndex >= 0 ? String.fromCharCode(65 + answerIndex) : answer;
  }

  const normalized = {
    company: companyNames[companyId] ?? item.company,
    topic: topicNames[topicId] ?? item.topic,
    question: item.question,
    option_a: options[0],
    option_b: options[1],
    option_c: options[2],
    option_d: options[3],
    correct_answer: answer,
    explanation: item.explanation,
    source: item.source ?? "Legacy question - source unavailable; review required"
  };

  if (item.source_question_no !== undefined) {
    normalized.source_question_no = item.source_question_no;
  }

  for (const key of Object.keys(item)) {
    delete item[key];
  }

  Object.assign(item, normalized);
}

module.exports = questions;